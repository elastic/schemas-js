/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const dataStreamsDefinitions = [
    {
        name: 'get-fleet-data-streams',
        namespace: 'data-streams',
        description: 'Get data streams',
        method: 'GET',
        path: '/api/fleet/data_streams',
    },
    {
        name: 'get-fleet-epm-data-streams',
        namespace: 'data-streams',
        description: 'Get data streams',
        method: 'GET',
        path: '/api/fleet/epm/data_streams',
        input: { type: 'object', properties: { type: { type: 'string', description: 'Filter by data stream type', 'x-found-in': 'query' }, datasetQuery: { type: 'string', description: 'Filter data streams by dataset name', 'x-found-in': 'query' }, sortOrder: { type: 'string', description: 'Sort order, ascending or descending', 'x-found-in': 'query' }, uncategorisedOnly: { type: 'boolean', description: 'When true, only return data streams that are not associated with a package', 'x-found-in': 'query' } } },
    },
];
//# sourceMappingURL=data-streams.js.map