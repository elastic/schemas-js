/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetOutputsDefinitions = [
    {
        name: 'post-fleet-logstash-api-keys',
        namespace: 'fleet-outputs',
        description: 'Generate a Logstash API key',
        method: 'POST',
        path: '/api/fleet/logstash_api_keys',
    },
    {
        name: 'get-fleet-outputs',
        namespace: 'fleet-outputs',
        description: 'Get outputs',
        method: 'GET',
        path: '/api/fleet/outputs',
    },
    {
        name: 'post-fleet-outputs',
        namespace: 'fleet-outputs',
        description: 'Create output',
        method: 'POST',
        path: '/api/fleet/outputs',
    },
    {
        name: 'delete-fleet-outputs-outputid',
        namespace: 'fleet-outputs',
        description: 'Delete output',
        method: 'DELETE',
        path: '/api/fleet/outputs/{outputId}',
        input: { type: 'object', properties: { outputId: { type: 'string', description: 'The ID of the output', 'x-found-in': 'path' } }, required: ['outputId'] },
    },
    {
        name: 'get-fleet-outputs-outputid',
        namespace: 'fleet-outputs',
        description: 'Get output',
        method: 'GET',
        path: '/api/fleet/outputs/{outputId}',
        input: { type: 'object', properties: { outputId: { type: 'string', description: 'The ID of the output', 'x-found-in': 'path' } }, required: ['outputId'] },
    },
    {
        name: 'put-fleet-outputs-outputid',
        namespace: 'fleet-outputs',
        description: 'Update output',
        method: 'PUT',
        path: '/api/fleet/outputs/{outputId}',
        input: { type: 'object', properties: { outputId: { type: 'string', description: 'The ID of the output', 'x-found-in': 'path' } }, required: ['outputId'] },
    },
    {
        name: 'get-fleet-outputs-outputid-health',
        namespace: 'fleet-outputs',
        description: 'Get the latest output health',
        method: 'GET',
        path: '/api/fleet/outputs/{outputId}/health',
        input: { type: 'object', properties: { outputId: { type: 'string', description: 'The ID of the output', 'x-found-in': 'path' } }, required: ['outputId'] },
    },
];
//# sourceMappingURL=fleet-outputs.js.map