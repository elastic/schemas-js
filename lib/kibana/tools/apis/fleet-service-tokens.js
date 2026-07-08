/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetServiceTokensDefinitions = [
    {
        name: 'post-fleet-service-tokens',
        namespace: 'fleet-service-tokens',
        description: 'Create a service token',
        method: 'POST',
        path: '/api/fleet/service_tokens',
        input: { type: 'object', properties: { remote: { description: '', 'x-found-in': 'body', type: 'boolean' } } },
    },
];
//# sourceMappingURL=fleet-service-tokens.js.map