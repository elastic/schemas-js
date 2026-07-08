/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export class UnknownApiError extends Error {
    id;
    constructor(id) {
        super(`Unknown API: ${id}`);
        this.id = id;
        this.name = 'UnknownApiError';
    }
}
export function buildRequest(definition, input) {
    let path = definition.path;
    const querystring = {};
    const body = {};
    const props = (definition.input?.properties ?? {});
    for (const [key, value] of Object.entries(input)) {
        if (value === undefined)
            continue;
        const propSchema = props[key];
        const foundIn = propSchema?.['x-found-in'];
        if (foundIn === 'path') {
            path = path.replace(`{${key}}`, encodeURIComponent(String(value)));
        }
        else if (foundIn === 'query') {
            querystring[key] = value;
        }
        else if (foundIn === 'body') {
            body[key] = value;
        }
        else {
            querystring[key] = value;
        }
    }
    const result = { method: definition.method, path };
    if (Object.keys(querystring).length > 0)
        result.querystring = querystring;
    if (definition.bodyFormat === 'ndjson') {
        if (Object.keys(body).length > 0)
            result.bulkBody = body;
    }
    else if (Object.keys(body).length > 0) {
        result.body = body;
    }
    return result;
}
export function createRegistry(manifest, loader) {
    return {
        manifest,
        async loadApi(id) {
            const meta = manifest.find((m) => m.id === id);
            if (meta == null)
                throw new UnknownApiError(id);
            const definitions = await loader(meta.namespaceFile);
            const definition = definitions.find((d) => {
                const defId = d.namespace != null ? `${d.namespace}.${d.name}` : d.name;
                return defId === id;
            });
            if (definition == null)
                throw new UnknownApiError(id);
            return {
                definition,
                buildRequest: (input) => buildRequest(definition, input),
            };
        },
    };
}
//# sourceMappingURL=registry.js.map