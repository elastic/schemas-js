/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const visualizationsDefinitions = [
    {
        name: 'get-visualizations-redirect',
        namespace: 'visualizations',
        description: 'Get visualizations',
        method: 'GET',
        path: '/api/visualizations',
    },
    {
        name: 'create-visualization-redirect',
        namespace: 'visualizations',
        description: 'Create a visualization',
        method: 'POST',
        path: '/api/visualizations',
    },
    {
        name: 'get-visualization-redirect',
        namespace: 'visualizations',
        description: 'Get a visualization',
        method: 'GET',
        path: '/api/visualizations/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The id parameter', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'update-visualization-redirect',
        namespace: 'visualizations',
        description: 'Update a visualization',
        method: 'PUT',
        path: '/api/visualizations/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The id parameter', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'delete-visualization-redirect',
        namespace: 'visualizations',
        description: 'Delete a visualization',
        method: 'DELETE',
        path: '/api/visualizations/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The id parameter', 'x-found-in': 'path' } }, required: ['id'] },
    },
];
//# sourceMappingURL=visualizations.js.map