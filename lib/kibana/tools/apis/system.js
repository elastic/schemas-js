/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const systemDefinitions = [
    {
        name: 'get-status',
        namespace: 'system',
        description: "Get Kibana's current status",
        method: 'GET',
        path: '/api/status',
        input: { type: 'object', properties: { v7format: { type: 'boolean', description: 'Set to "true" to get the response in v7 format.', 'x-found-in': 'query' }, v8format: { type: 'boolean', description: 'Set to "true" to get the response in v8 format.', 'x-found-in': 'query' } } },
    },
];
//# sourceMappingURL=system.js.map