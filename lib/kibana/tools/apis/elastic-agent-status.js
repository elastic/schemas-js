/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const elasticAgentStatusDefinitions = [
    {
        name: 'get-fleet-agent-status',
        namespace: 'elastic-agent-status',
        description: 'Get an agent status summary',
        method: 'GET',
        path: '/api/fleet/agent_status',
        input: { type: 'object', properties: { policyId: { type: 'string', description: 'Filter by agent policy ID', 'x-found-in': 'query' }, policyIds: { type: 'string', description: 'Filter by one or more agent policy IDs', 'x-found-in': 'query' }, kuery: { type: 'string', description: 'A KQL query string to filter results', 'x-found-in': 'query' } } },
    },
];
//# sourceMappingURL=elastic-agent-status.js.map