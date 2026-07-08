/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetProxiesDefinitions = [
    {
        name: 'get-fleet-proxies',
        namespace: 'fleet-proxies',
        description: 'Get proxies',
        method: 'GET',
        path: '/api/fleet/proxies',
    },
    {
        name: 'post-fleet-proxies',
        namespace: 'fleet-proxies',
        description: 'Create a proxy',
        method: 'POST',
        path: '/api/fleet/proxies',
        input: { type: 'object', properties: { certificate: { description: '', 'x-found-in': 'body', type: 'string' }, certificate_authorities: { description: '', 'x-found-in': 'body', type: 'string' }, certificate_key: { description: '', 'x-found-in': 'body', type: 'string' }, id: { description: '', 'x-found-in': 'body', type: 'string' }, is_preconfigured: { description: '', 'x-found-in': 'body', type: 'boolean' }, name: { description: '', 'x-found-in': 'body', type: 'string' }, proxy_headers: { description: '', 'x-found-in': 'body', type: 'object' }, url: { description: '', 'x-found-in': 'body', type: 'string' } }, required: ['name', 'url'] },
    },
    {
        name: 'delete-fleet-proxies-itemid',
        namespace: 'fleet-proxies',
        description: 'Delete a proxy',
        method: 'DELETE',
        path: '/api/fleet/proxies/{itemId}',
        input: { type: 'object', properties: { itemId: { type: 'string', description: 'The ID of the proxy', 'x-found-in': 'path' } }, required: ['itemId'] },
    },
    {
        name: 'get-fleet-proxies-itemid',
        namespace: 'fleet-proxies',
        description: 'Get a proxy',
        method: 'GET',
        path: '/api/fleet/proxies/{itemId}',
        input: { type: 'object', properties: { itemId: { type: 'string', description: 'The ID of the proxy', 'x-found-in': 'path' } }, required: ['itemId'] },
    },
    {
        name: 'put-fleet-proxies-itemid',
        namespace: 'fleet-proxies',
        description: 'Update a proxy',
        method: 'PUT',
        path: '/api/fleet/proxies/{itemId}',
        input: { type: 'object', properties: { itemId: { type: 'string', description: 'The ID of the proxy', 'x-found-in': 'path' }, certificate: { description: '', 'x-found-in': 'body', type: 'string' }, certificate_authorities: { description: '', 'x-found-in': 'body', type: 'string' }, certificate_key: { description: '', 'x-found-in': 'body', type: 'string' }, name: { description: '', 'x-found-in': 'body', type: 'string' }, proxy_headers: { description: '', 'x-found-in': 'body', type: 'object' }, url: { description: '', 'x-found-in': 'body', type: 'string' } }, required: ['itemId'] },
    },
];
//# sourceMappingURL=fleet-proxies.js.map