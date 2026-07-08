/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const connectorsDefinitions = [
    {
        name: 'get-actions-connector-types',
        namespace: 'connectors',
        description: 'Get connector types',
        method: 'GET',
        path: '/api/actions/connector_types',
        input: { type: 'object', properties: { feature_id: { type: 'string', description: 'A filter to limit the retrieved connector types to those that support a specific feature (such as alerting or cases).', 'x-found-in': 'query' } } },
    },
    {
        name: 'get-actions-connector-oauth-callback',
        namespace: 'connectors',
        description: 'Handle OAuth callback',
        method: 'GET',
        path: '/api/actions/connector/_oauth_callback',
        input: { type: 'object', properties: { code: { type: 'string', description: 'The authorization code returned by the OAuth provider.', 'x-found-in': 'query' }, state: { type: 'string', description: 'The state parameter for CSRF protection.', 'x-found-in': 'query' }, error: { type: 'string', description: 'Error code if the authorization failed.', 'x-found-in': 'query' }, error_description: { type: 'string', description: 'Human-readable error description.', 'x-found-in': 'query' }, session_state: { type: 'string', description: 'Session state from the OAuth provider (e.g., Microsoft).', 'x-found-in': 'query' } } },
    },
    {
        name: 'delete-actions-connector-id',
        namespace: 'connectors',
        description: 'Delete a connector',
        method: 'DELETE',
        path: '/api/actions/connector/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'An identifier for the connector.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'get-actions-connector-id',
        namespace: 'connectors',
        description: 'Get connector information',
        method: 'GET',
        path: '/api/actions/connector/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'An identifier for the connector.', 'x-found-in': 'path' } }, required: ['id'] },
    },
    {
        name: 'post-actions-connector-id',
        namespace: 'connectors',
        description: 'Create a connector',
        method: 'POST',
        path: '/api/actions/connector/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'An identifier for the connector.', 'x-found-in': 'path' }, connector_type_id: { description: 'The type of connector.', 'x-found-in': 'body', type: 'string' }, name: { description: 'The display name for the connector.', 'x-found-in': 'body', type: 'string' }, config: { description: 'The connector configuration details.', 'x-found-in': 'body', type: 'object' }, secrets: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['id', 'connector_type_id', 'name'] },
    },
    {
        name: 'put-actions-connector-id',
        namespace: 'connectors',
        description: 'Update a connector',
        method: 'PUT',
        path: '/api/actions/connector/{id}',
        input: { type: 'object', properties: { id: { type: 'string', description: 'An identifier for the connector.', 'x-found-in': 'path' }, name: { description: 'The display name for the connector.', 'x-found-in': 'body', type: 'string' }, config: { description: 'The connector configuration details.', 'x-found-in': 'body', type: 'object' }, secrets: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['id', 'name'] },
    },
    {
        name: 'post-actions-connector-id-execute',
        namespace: 'connectors',
        description: 'Run a connector',
        method: 'POST',
        path: '/api/actions/connector/{id}/_execute',
        input: { type: 'object', properties: { id: { type: 'string', description: 'An identifier for the connector.', 'x-found-in': 'path' }, params: { description: '', 'x-found-in': 'body', type: 'object' } }, required: ['id', 'params'] },
    },
    {
        name: 'get-actions-connectors',
        namespace: 'connectors',
        description: 'Get all connectors',
        method: 'GET',
        path: '/api/actions/connectors',
    },
];
//# sourceMappingURL=connectors.js.map