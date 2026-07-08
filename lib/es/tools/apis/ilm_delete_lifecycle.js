/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const ilm_delete_lifecycle_definitions = [
    {
        name: 'delete-lifecycle',
        namespace: 'ilm',
        description: 'Delete a lifecycle policy.',
        method: 'DELETE',
        path: '/_ilm/policy/{policy}',
    },
];
//# sourceMappingURL=ilm_delete_lifecycle.js.map