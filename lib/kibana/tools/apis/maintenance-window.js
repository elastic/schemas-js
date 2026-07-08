/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const maintenanceWindowDefinitions = [
    {
        name: 'post-maintenance-window',
        namespace: 'maintenance-window',
        description: 'Create a maintenance window.',
        method: 'POST',
        path: '/api/maintenance_window',
        input: { type: 'object', properties: { enabled: { description: 'Whether the current maintenance window is enabled. Disabled maintenance windows do not suppress notifications.', 'x-found-in': 'body', type: 'boolean' }, schedule: { description: '', 'x-found-in': 'body', type: 'object' }, scope: { description: '', 'x-found-in': 'body', type: 'object' }, title: { description: 'The name of the maintenance window. While this name does not have to be unique, a distinctive name can help you identify a specific maintenance window.', 'x-found-in': 'body', type: 'string' } }, required: ['schedule', 'title'] },
    },
    {
        name: 'get-maintenance-window-find',
        namespace: 'maintenance-window',
        description: 'Search for a maintenance window.',
        method: 'GET',
        path: '/api/maintenance_window/_find',
        input: { type: 'object', properties: { title: { type: 'string', description: 'The title of the maintenance window.', 'x-found-in': 'query' }, created_by: { type: 'string', description: 'The user who created the maintenance window.', 'x-found-in': 'query' }, status: { type: 'string', description: 'The status of the maintenance window. It can be "running", "upcoming", "finished", "archived", or "disabled".', 'x-found-in': 'query' }, page: { type: 'number', description: 'The page number to return.', 'x-found-in': 'query' }, per_page: { type: 'number', description: 'The number of maintenance windows to return per page.', 'x-found-in': 'query' } } },
    },
    {
        name: 'delete-maintenance-window-id',
        namespace: 'maintenance-window',
        description: 'Delete a maintenance window.',
        method: 'DELETE',
        path: '/api/maintenance_window/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The identifier for the maintenance window to be deleted.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'get-maintenance-window-id',
        namespace: 'maintenance-window',
        description: 'Get maintenance window details.',
        method: 'GET',
        path: '/api/maintenance_window/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The identifier for the maintenance window.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'patch-maintenance-window-id',
        namespace: 'maintenance-window',
        description: 'Update a maintenance window.',
        method: 'PATCH',
        path: '/api/maintenance_window/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The identifier for the maintenance window.', 'x-found-in': 'path' }, enabled: { description: 'Whether the current maintenance window is enabled. Disabled maintenance windows do not suppress notifications.', 'x-found-in': 'body', type: 'boolean' }, schedule: { description: '', 'x-found-in': 'body', type: 'object' }, scope: { description: '', 'x-found-in': 'body', type: 'object' }, title: { description: 'The name of the maintenance window. While this name does not have to be unique, a distinctive name can help you identify a specific maintenance window.', 'x-found-in': 'body', type: 'string' } }, required: ['id'] },
    },
    {
        name: 'post-maintenance-window-id-archive',
        namespace: 'maintenance-window',
        description: 'Archive a maintenance window.',
        method: 'POST',
        path: '/api/maintenance_window/{id}/_archive',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The identifier for the maintenance window to be archived.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'post-maintenance-window-id-unarchive',
        namespace: 'maintenance-window',
        description: 'Unarchive a maintenance window.',
        method: 'POST',
        path: '/api/maintenance_window/{id}/_unarchive',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The identifier for the maintenance window to be unarchived.', 'x-found-in': 'path' } }, required: ['id'] },
    },
];
//# sourceMappingURL=maintenance-window.js.map