/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const observabilityaiassistantDefinitions = [
    {
        name: 'observability-ai-assistant-chat-complete',
        namespace: 'observabilityaiassistant',
        description: 'Generate a chat completion',
        method: 'POST',
        path: '/api/observability_ai_assistant/chat/complete',
        input: { type: 'object', properties: { actions: { description: '', 'x-found-in': 'body' }, connectorId: { description: 'A unique identifier for the connector.', 'x-found-in': 'body', type: 'string' }, conversationId: { description: 'A unique identifier for the conversation if you are continuing an existing conversation.', 'x-found-in': 'body', type: 'string' }, disableFunctions: { description: 'Flag indicating whether all function calls should be disabled for the conversation. If true, no calls to functions will be made.', 'x-found-in': 'body', type: 'boolean' }, instructions: { description: 'An array of instruction objects, which can be either simple strings or detailed objects.', 'x-found-in': 'body' }, messages: { description: 'An array of message objects containing the conversation history.', 'x-found-in': 'body' }, persist: { description: 'Indicates whether the conversation should be saved to storage. If true, the conversation will be saved and will be available in Kibana.', 'x-found-in': 'body', type: 'boolean' }, title: { description: 'A title for the conversation.', 'x-found-in': 'body', type: 'string' } }, required: ['connectorId', 'messages', 'persist'] },
    },
];
//# sourceMappingURL=observabilityaiassistant.js.map