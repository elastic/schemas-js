/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const apmAgentKeysDefinitions = [
    {
        name: 'create-agent-key',
        namespace: 'apm-agent-keys',
        description: 'Create an APM agent key',
        method: 'POST',
        path: '/api/apm/agent_keys',
        input: { type: 'object', properties: { name: { description: 'The name of the APM agent key.', 'x-found-in': 'body', type: 'string' }, privileges: { description: 'The APM agent key privileges. It can take one or more of the following values:', 'x-found-in': 'body' } }, required: ['name', 'privileges'] },
    },
];
//# sourceMappingURL=apm-agent-keys.js.map