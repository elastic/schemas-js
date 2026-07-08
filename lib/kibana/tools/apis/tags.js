/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const tagsDefinitions = [
    {
        name: 'get-tags',
        namespace: 'tags',
        description: 'Search tags',
        method: 'GET',
        path: '/api/tags',
        input: { type: 'object', properties: { query: { type: 'string', description: 'Filters results by `name` and `description` using Elasticsearch [`simple_query_string`](https://www.elastic.co/docs/reference/query-languages/query-dsl/simple-query-string-query) syntax. Multi-word terms require all words to match.', 'x-found-in': 'query' }, page: { type: 'number', description: 'The page of results to return.', 'x-found-in': 'query' }, per_page: { type: 'number', description: 'The number of results to return per page.', 'x-found-in': 'query' } } },
    },
    {
        name: 'post-tags',
        namespace: 'tags',
        description: 'Create a tag',
        method: 'POST',
        path: '/api/tags',
        input: { type: 'object', properties: { color: { description: 'The tag color as a hex value (e.g. `#772299`). If omitted, a random color is generated.', 'x-found-in': 'body', type: 'string' }, description: { description: 'Optional description of the tag.', 'x-found-in': 'body', type: 'string' }, name: { description: 'The display name of the tag.', 'x-found-in': 'body', type: 'string' } }, required: ['name'] },
    },
    {
        name: 'delete-tags-id',
        namespace: 'tags',
        description: 'Delete a tag',
        method: 'DELETE',
        path: '/api/tags/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The tag ID, as returned by the create or search endpoints.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'get-tags-id',
        namespace: 'tags',
        description: 'Get a tag',
        method: 'GET',
        path: '/api/tags/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The tag ID, as returned by the create or search endpoints.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'put-tags-id',
        namespace: 'tags',
        description: 'Upsert a tag',
        method: 'PUT',
        path: '/api/tags/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'The tag ID, as returned by the create or search endpoints.', 'x-found-in': 'path' }, color: { description: 'The tag color as a hex value (e.g. `#772299`). If omitted, a random color is generated.', 'x-found-in': 'body', type: 'string' }, description: { description: 'Optional description of the tag.', 'x-found-in': 'body', type: 'string' }, name: { description: 'The display name of the tag.', 'x-found-in': 'body', type: 'string' } }, required: ['id', 'name'] },
    },
];
//# sourceMappingURL=tags.js.map