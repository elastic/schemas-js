/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const miscDefinitions = [
    {
        name: 'get-actions-connector-oauth-callback-script',
        namespace: 'misc',
        description: '',
        method: 'GET',
        path: '/api/actions/connector/_oauth_callback_script',
    },
    {
        name: 'get-fleet-space-settings',
        namespace: 'misc',
        description: 'Get space settings',
        method: 'GET',
        path: '/api/fleet/space_settings',
    },
    {
        name: 'put-fleet-space-settings',
        namespace: 'misc',
        description: 'Create space settings',
        method: 'PUT',
        path: '/api/fleet/space_settings',
        input: { type: 'object', properties: { allowed_namespace_prefixes: { description: '', 'x-found-in': 'body' } } },
    },
    {
        name: 'post-security-role-query',
        namespace: 'misc',
        description: 'Query roles',
        method: 'POST',
        path: '/api/security/role/_query',
        input: { type: 'object', properties: { filters: { description: 'The filter criteria for the query.', 'x-found-in': 'body', type: 'object' }, from: { description: '', 'x-found-in': 'body', type: 'number' }, query: { description: '', 'x-found-in': 'body', type: 'string' }, size: { description: '', 'x-found-in': 'body', type: 'number' }, sort: { description: 'The sort criteria for the query.', 'x-found-in': 'body', type: 'object' } } },
    },
];
//# sourceMappingURL=misc.js.map