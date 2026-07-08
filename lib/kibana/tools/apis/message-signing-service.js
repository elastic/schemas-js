/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const messageSigningServiceDefinitions = [
    {
        name: 'post-fleet-message-signing-service-rotate-key-pair',
        namespace: 'message-signing-service',
        description: 'Rotate a Fleet message signing key pair',
        method: 'POST',
        path: '/api/fleet/message_signing_service/rotate_key_pair',
        input: { type: 'object', properties: { acknowledge: { type: 'boolean', description: 'Set to true to confirm you understand the risks of rotating the key pair', 'x-found-in': 'query' } } },
    },
];
//# sourceMappingURL=message-signing-service.js.map