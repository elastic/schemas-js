/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetUninstallTokensDefinitions = [
    {
        name: 'get-fleet-uninstall-tokens',
        namespace: 'fleet-uninstall-tokens',
        description: 'Get metadata for latest uninstall tokens',
        method: 'GET',
        path: '/api/fleet/uninstall_tokens',
        input: { type: 'object', properties: { policyId: { type: 'string', description: 'Partial match filtering for policy IDs', 'x-found-in': 'query' }, search: { type: 'string', description: 'Partial match filtering for uninstall token values', 'x-found-in': 'query' }, perPage: { type: 'number', description: 'The number of items to return', 'x-found-in': 'query' }, page: { type: 'number', description: 'Page number', 'x-found-in': 'query' } } },
    },
    {
        name: 'get-fleet-uninstall-tokens-uninstalltokenid',
        namespace: 'fleet-uninstall-tokens',
        description: 'Get a decrypted uninstall token',
        method: 'GET',
        path: '/api/fleet/uninstall_tokens/{uninstallTokenId}',
        input: { type: 'object', properties: { uninstallTokenId: { type: 'string', description: 'The ID of the uninstall token', 'x-found-in': 'path' } }, required: ['uninstallTokenId'] },
    },
];
//# sourceMappingURL=fleet-uninstall-tokens.js.map