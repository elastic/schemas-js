/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const apmServerSchemaDefinitions = [
    {
        name: 'save-apm-server-schema',
        namespace: 'apm-server-schema',
        description: 'Save APM server schema',
        method: 'POST',
        path: '/api/apm/fleet/apm_server_schema',
        input: { type: 'object', properties: { schema: { description: 'Schema object', 'x-found-in': 'body', type: 'object' } } },
    },
];
//# sourceMappingURL=apm-server-schema.js.map