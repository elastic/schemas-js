/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const dashboardsDefinitions = [
    {
        name: 'get-dashboards-redirect',
        namespace: 'dashboards',
        description: 'Get dashboards',
        method: 'GET',
        path: '/api/dashboards',
    },
    {
        name: 'create-dashboard-redirect',
        namespace: 'dashboards',
        description: 'Create a dashboard',
        method: 'POST',
        path: '/api/dashboards',
    },
    {
        name: 'get-dashboard-redirect',
        namespace: 'dashboards',
        description: 'Get a dashboard',
        method: 'GET',
        path: '/api/dashboards/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The id parameter', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'update-dashboard-redirect',
        namespace: 'dashboards',
        description: 'Update a dashboard',
        method: 'PUT',
        path: '/api/dashboards/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The id parameter', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'delete-dashboard-redirect',
        namespace: 'dashboards',
        description: 'Delete a dashboard',
        method: 'DELETE',
        path: '/api/dashboards/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The id parameter', 'x-found-in': 'path' } }, required: ['id'] },
    },
];
//# sourceMappingURL=dashboards.js.map