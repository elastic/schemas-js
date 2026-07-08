/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetEnrollmentApiKeysDefinitions = [
    {
        name: 'get-fleet-enrollment-api-keys',
        namespace: 'fleet-enrollment-api-keys',
        description: 'Get enrollment API keys',
        method: 'GET',
        path: '/api/fleet/enrollment_api_keys',
        input: { type: 'object', properties: { page: { type: 'number', description: 'Page number', 'x-found-in': 'query' }, perPage: { type: 'number', description: 'Number of results per page', 'x-found-in': 'query' }, kuery: { type: 'string', description: 'A KQL query string to filter results', 'x-found-in': 'query' } } },
    },
    {
        name: 'post-fleet-enrollment-api-keys',
        namespace: 'fleet-enrollment-api-keys',
        description: 'Create an enrollment API key',
        method: 'POST',
        path: '/api/fleet/enrollment_api_keys',
        input: { type: 'object', properties: { expiration: { description: '', 'x-found-in': 'body', type: 'string' }, name: { description: '', 'x-found-in': 'body', type: 'string' }, policy_id: { description: '', 'x-found-in': 'body', type: 'string' } }, required: ['policy_id'] },
    },
    {
        name: 'post-fleet-enrollment-api-keys-bulk-delete',
        namespace: 'fleet-enrollment-api-keys',
        description: 'Bulk revoke or delete enrollment API keys',
        method: 'POST',
        path: '/api/fleet/enrollment_api_keys/_bulk_delete',
        input: { type: 'object', properties: { forceDelete: { description: 'When false (default), invalidate the API key and mark the token as inactive. When true, also delete the token document.', 'x-found-in': 'body', type: 'boolean' }, includeHidden: { description: 'When true, allow deletion of hidden enrollment tokens (managed/agentless policies). Defaults to false.', 'x-found-in': 'body', type: 'boolean' }, kuery: { description: 'KQL query to select enrollment tokens to delete.', 'x-found-in': 'body', type: 'string' }, tokenIds: { description: 'List of enrollment token IDs to delete.', 'x-found-in': 'body' } } },
    },
    {
        name: 'delete-fleet-enrollment-api-keys-keyid',
        namespace: 'fleet-enrollment-api-keys',
        description: 'Revoke or delete an enrollment API key',
        method: 'DELETE',
        path: '/api/fleet/enrollment_api_keys/{keyId}',
        input: { type: 'object', properties: { keyId: { type: 'string', description: 'The ID of the enrollment API key', 'x-found-in': 'path' }, forceDelete: { type: 'boolean', description: 'When false (default), invalidate the API key and mark the token as inactive. When true, also delete the token document.', 'x-found-in': 'query' }, includeHidden: { type: 'boolean', description: 'When true, allow deletion of hidden enrollment tokens (managed/agentless policies). Defaults to false.', 'x-found-in': 'query' } }, required: ['keyId'] },
    },
    {
        name: 'get-fleet-enrollment-api-keys-keyid',
        namespace: 'fleet-enrollment-api-keys',
        description: 'Get an enrollment API key',
        method: 'GET',
        path: '/api/fleet/enrollment_api_keys/{keyId}',
        input: { type: 'object', properties: { keyId: { type: 'string', description: 'The ID of the enrollment API key', 'x-found-in': 'path' } }, required: ['keyId'] },
    },
];
//# sourceMappingURL=fleet-enrollment-api-keys.js.map