/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const securityEndpointExceptionsApiDefinitions = [
    {
        name: 'create-endpoint-list',
        namespace: 'security-endpoint-exceptions-api',
        description: 'Create an Elastic Endpoint rule exception list',
        method: 'POST',
        path: '/api/endpoint_list',
    },
    {
        name: 'delete-endpoint-list-item',
        namespace: 'security-endpoint-exceptions-api',
        description: 'Delete an Elastic Endpoint exception list item',
        method: 'DELETE',
        path: '/api/endpoint_list/items',
        input: { type: 'object', properties: { id: { type: 'string', description: 'Either `id` or `item_id` must be specified', 'x-found-in': 'query' }, item_id: { type: 'string', description: 'Either `id` or `item_id` must be specified', 'x-found-in': 'query' } } },
    },
    {
        name: 'read-endpoint-list-item',
        namespace: 'security-endpoint-exceptions-api',
        description: 'Get an Elastic Endpoint rule exception list item',
        method: 'GET',
        path: '/api/endpoint_list/items',
        input: { type: 'object', properties: { id: { type: 'string', description: 'Either `id` or `item_id` must be specified', 'x-found-in': 'query' }, item_id: { type: 'string', description: 'Either `id` or `item_id` must be specified', 'x-found-in': 'query' } } },
    },
    {
        name: 'create-endpoint-list-item',
        namespace: 'security-endpoint-exceptions-api',
        description: 'Create an Elastic Endpoint rule exception list item',
        method: 'POST',
        path: '/api/endpoint_list/items',
        input: { type: 'object', properties: { comments: { description: 'Array of comment fields:', 'x-found-in': 'body' }, description: { description: 'Describes the exception list.', 'x-found-in': 'body', type: 'string' }, entries: { description: '', 'x-found-in': 'body' }, item_id: { description: 'Human readable string identifier, e.g. `trusted-linux-processes`', 'x-found-in': 'body', type: 'string' }, meta: { description: '', 'x-found-in': 'body', type: 'object' }, name: { description: 'Exception list name.', 'x-found-in': 'body', type: 'string' }, os_types: { description: '', 'x-found-in': 'body' }, tags: { description: '', 'x-found-in': 'body' }, type: { description: '', 'x-found-in': 'body', type: 'string' } }, required: ['description', 'entries', 'name', 'type'] },
    },
    {
        name: 'update-endpoint-list-item',
        namespace: 'security-endpoint-exceptions-api',
        description: 'Update an Elastic Endpoint rule exception list item',
        method: 'PUT',
        path: '/api/endpoint_list/items',
        input: { type: 'object', properties: { _version: { description: 'The version id, normally returned by the API when the item is retrieved. Use it ensure updates are made against the latest version.', 'x-found-in': 'body', type: 'string' }, comments: { description: 'Array of comment fields:', 'x-found-in': 'body' }, description: { description: 'Describes the exception list.', 'x-found-in': 'body', type: 'string' }, entries: { description: '', 'x-found-in': 'body' }, id: { description: "Exception's identifier.", 'x-found-in': 'body', type: 'string' }, item_id: { description: 'Human readable string identifier, e.g. `trusted-linux-processes`', 'x-found-in': 'body', type: 'string' }, meta: { description: '', 'x-found-in': 'body', type: 'object' }, name: { description: 'Exception list name.', 'x-found-in': 'body', type: 'string' }, os_types: { description: '', 'x-found-in': 'body' }, tags: { description: '', 'x-found-in': 'body' }, type: { description: '', 'x-found-in': 'body', type: 'string' } }, required: ['description', 'entries', 'name', 'type'] },
    },
    {
        name: 'find-endpoint-list-items',
        namespace: 'security-endpoint-exceptions-api',
        description: 'Get Elastic Endpoint exception list items',
        method: 'GET',
        path: '/api/endpoint_list/items/_find',
        input: { type: 'object', properties: { filter: { type: 'string', description: 'Filters the returned results according to the value of the specified field,', 'x-found-in': 'query' }, page: { type: 'number', description: 'The page number to return', 'x-found-in': 'query' }, per_page: { type: 'number', description: 'The number of exception list items to return per page', 'x-found-in': 'query' }, sort_field: { type: 'string', description: 'Determines which field is used to sort the results', 'x-found-in': 'query' }, sort_order: { type: 'string', description: 'Determines the sort order, which can be `desc` or `asc`', 'x-found-in': 'query' } } },
    },
];
//# sourceMappingURL=security-endpoint-exceptions-api.js.map