/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const fleetPackagePoliciesDefinitions = [
    {
        name: 'get-fleet-package-policies',
        namespace: 'fleet-package-policies',
        description: 'Get package policies',
        method: 'GET',
        path: '/api/fleet/package_policies',
        input: { type: 'object', properties: { page: { type: 'number', description: 'Page number', 'x-found-in': 'query' }, perPage: { type: 'number', description: 'Number of results per page', 'x-found-in': 'query' }, sortField: { type: 'string', description: 'Field to sort results by', 'x-found-in': 'query' }, sortOrder: { type: 'string', description: 'Sort order, ascending or descending', 'x-found-in': 'query' }, showUpgradeable: { type: 'boolean', description: 'When true, only show policies with available upgrades', 'x-found-in': 'query' }, kuery: { type: 'string', description: 'A KQL query string to filter results', 'x-found-in': 'query' }, format: { type: 'string', description: 'Format for the response: simplified or legacy', 'x-found-in': 'query' }, withAgentCount: { type: 'boolean', description: 'When true, include the agent count per package policy', 'x-found-in': 'query' } } },
    },
    {
        name: 'post-fleet-package-policies',
        namespace: 'fleet-package-policies',
        description: 'Create a package policy',
        method: 'POST',
        path: '/api/fleet/package_policies',
        input: { type: 'object', properties: { format: { type: 'string', description: 'Format for the response: simplified or legacy', 'x-found-in': 'query' } } },
    },
    {
        name: 'post-fleet-package-policies-bulk-get',
        namespace: 'fleet-package-policies',
        description: 'Bulk get package policies',
        method: 'POST',
        path: '/api/fleet/package_policies/_bulk_get',
        input: { type: 'object', properties: { format: { type: 'string', description: 'Format for the response: simplified or legacy', 'x-found-in': 'query' }, ids: { description: 'list of package policy ids', 'x-found-in': 'body' }, ignoreMissing: { description: '', 'x-found-in': 'body', type: 'boolean' } }, required: ['ids'] },
    },
    {
        name: 'delete-fleet-package-policies-packagepolicyid',
        namespace: 'fleet-package-policies',
        description: 'Delete a package policy',
        method: 'DELETE',
        path: '/api/fleet/package_policies/{packagePolicyId}',
        input: { type: 'object', properties: { packagePolicyId: { type: 'string', description: 'The ID of the package policy', 'x-found-in': 'path' }, force: { type: 'boolean', description: 'When true, delete the package policy even if it is managed', 'x-found-in': 'query' } }, required: ['packagePolicyId'] },
    },
    {
        name: 'get-fleet-package-policies-packagepolicyid',
        namespace: 'fleet-package-policies',
        description: 'Get a package policy',
        method: 'GET',
        path: '/api/fleet/package_policies/{packagePolicyId}',
        input: { type: 'object', properties: { packagePolicyId: { type: 'string', description: 'The ID of the package policy', 'x-found-in': 'path' }, format: { type: 'string', description: 'Format for the response: simplified or legacy', 'x-found-in': 'query' } }, required: ['packagePolicyId'] },
    },
    {
        name: 'put-fleet-package-policies-packagepolicyid',
        namespace: 'fleet-package-policies',
        description: 'Update a package policy',
        method: 'PUT',
        path: '/api/fleet/package_policies/{packagePolicyId}',
        input: { type: 'object', properties: { packagePolicyId: { type: 'string', description: 'The ID of the package policy', 'x-found-in': 'path' }, format: { type: 'string', description: 'Format for the response: simplified or legacy', 'x-found-in': 'query' } }, required: ['packagePolicyId'] },
    },
    {
        name: 'post-fleet-package-policies-delete',
        namespace: 'fleet-package-policies',
        description: 'Bulk delete package policies',
        method: 'POST',
        path: '/api/fleet/package_policies/delete',
        input: { type: 'object', properties: { force: { description: '', 'x-found-in': 'body', type: 'boolean' }, packagePolicyIds: { description: '', 'x-found-in': 'body' } }, required: ['packagePolicyIds'] },
    },
    {
        name: 'post-fleet-package-policies-upgrade',
        namespace: 'fleet-package-policies',
        description: 'Upgrade a package policy',
        method: 'POST',
        path: '/api/fleet/package_policies/upgrade',
        input: { type: 'object', properties: { packagePolicyIds: { description: '', 'x-found-in': 'body' } }, required: ['packagePolicyIds'] },
    },
    {
        name: 'post-fleet-package-policies-upgrade-dryrun',
        namespace: 'fleet-package-policies',
        description: 'Dry run a package policy upgrade',
        method: 'POST',
        path: '/api/fleet/package_policies/upgrade/dryrun',
        input: { type: 'object', properties: { packagePolicyIds: { description: '', 'x-found-in': 'body' }, packageVersion: { description: '', 'x-found-in': 'body', type: 'string' } }, required: ['packagePolicyIds'] },
    },
];
//# sourceMappingURL=fleet-package-policies.js.map