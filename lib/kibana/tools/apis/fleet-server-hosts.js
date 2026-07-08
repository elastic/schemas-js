/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetServerHostsDefinitions = [
    {
        name: 'get-fleet-fleet-server-hosts',
        namespace: 'fleet-server-hosts',
        description: 'Get Fleet Server hosts',
        method: 'GET',
        path: '/api/fleet/fleet_server_hosts',
    },
    {
        name: 'post-fleet-fleet-server-hosts',
        namespace: 'fleet-server-hosts',
        description: 'Create a Fleet Server host',
        method: 'POST',
        path: '/api/fleet/fleet_server_hosts',
        input: { type: 'object', properties: { host_urls: { description: '', 'x-found-in': 'body' }, id: { description: '', 'x-found-in': 'body', type: 'string' }, is_default: { description: '', 'x-found-in': 'body', type: 'boolean' }, is_internal: { description: '', 'x-found-in': 'body', type: 'boolean' }, is_preconfigured: { description: '', 'x-found-in': 'body', type: 'boolean' }, name: { description: '', 'x-found-in': 'body', type: 'string' }, proxy_id: { description: '', 'x-found-in': 'body', type: 'string' }, secrets: { description: '', 'x-found-in': 'body', type: 'object' }, ssl: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['host_urls', 'name'] },
    },
    {
        name: 'delete-fleet-fleet-server-hosts-itemid',
        namespace: 'fleet-server-hosts',
        description: 'Delete a Fleet Server host',
        method: 'DELETE',
        path: '/api/fleet/fleet_server_hosts/{itemId}',
        input: { type: 'object', properties: { itemId: { type: 'string', description: 'The ID of the Fleet Server host', 'x-found-in': 'path' } }, required: ['itemId'] },
    },
    {
        name: 'get-fleet-fleet-server-hosts-itemid',
        namespace: 'fleet-server-hosts',
        description: 'Get a Fleet Server host',
        method: 'GET',
        path: '/api/fleet/fleet_server_hosts/{itemId}',
        input: { type: 'object', properties: { itemId: { type: 'string', description: 'The ID of the Fleet Server host', 'x-found-in': 'path' } }, required: ['itemId'] },
    },
    {
        name: 'put-fleet-fleet-server-hosts-itemid',
        namespace: 'fleet-server-hosts',
        description: 'Update a Fleet Server host',
        method: 'PUT',
        path: '/api/fleet/fleet_server_hosts/{itemId}',
        input: { type: 'object', properties: { itemId: { type: 'string', description: 'The ID of the Fleet Server host', 'x-found-in': 'path' }, host_urls: { description: '', 'x-found-in': 'body' }, is_default: { description: '', 'x-found-in': 'body', type: 'boolean' }, is_internal: { description: '', 'x-found-in': 'body', type: 'boolean' }, name: { description: '', 'x-found-in': 'body', type: 'string' }, proxy_id: { description: '', 'x-found-in': 'body', type: 'string' }, secrets: { description: '', 'x-found-in': 'body', type: 'object' }, ssl: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['itemId'] },
    },
];
//# sourceMappingURL=fleet-server-hosts.js.map