/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const rolesDefinitions = [
    {
        name: 'get-security-role',
        namespace: 'roles',
        description: 'Get all roles',
        method: 'GET',
        path: '/api/security/role',
        input: { type: 'object', properties: { replaceDeprecatedPrivileges: { type: 'boolean', description: 'If `true` and the response contains any privileges that are associated with deprecated features, they are omitted in favor of details about the appropriate replacement feature privileges.', 'x-found-in': 'query' } } },
    },
    {
        name: 'delete-security-role-name',
        namespace: 'roles',
        description: 'Delete a role',
        method: 'DELETE',
        path: '/api/security/role/{name}',
        input: { type: 'object', properties: { name: { type: 'string', description: 'The role name.', 'x-found-in': 'path' } }, required: ['name'] },
    },
    {
        name: 'get-security-role-name',
        namespace: 'roles',
        description: 'Get a role',
        method: 'GET',
        path: '/api/security/role/{name}',
        input: { type: 'object', properties: { name: { type: 'string', description: 'The role name.', 'x-found-in': 'path' }, replaceDeprecatedPrivileges: { type: 'boolean', description: 'If `true` and the response contains any privileges that are associated with deprecated features, they are omitted in favor of details about the appropriate replacement feature privileges.', 'x-found-in': 'query' } }, required: ['name'] },
    },
    {
        name: 'put-security-role-name',
        namespace: 'roles',
        description: 'Create or update a role',
        method: 'PUT',
        path: '/api/security/role/{name}',
        input: { type: 'object', properties: { name: { type: 'string', description: 'The role name.', 'x-found-in': 'path' }, createOnly: { type: 'boolean', description: 'When true, a role is not overwritten if it already exists.', 'x-found-in': 'query' }, description: { description: 'A description for the role.', 'x-found-in': 'body', type: 'string' }, elasticsearch: { description: 'The Elasticsearch cluster, index, and remote cluster security privileges for the role.', 'x-found-in': 'body', type: 'object' }, kibana: { description: '', 'x-found-in': 'body' }, metadata: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['name', 'elasticsearch'] },
    },
    {
        name: 'post-security-roles',
        namespace: 'roles',
        description: 'Create or update roles',
        method: 'POST',
        path: '/api/security/roles',
        input: { type: 'object', properties: { roles: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['roles'] },
    },
];
//# sourceMappingURL=roles.js.map