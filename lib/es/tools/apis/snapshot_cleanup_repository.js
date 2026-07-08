/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const snapshot_cleanup_repository_definitions = [
    {
        name: 'cleanup-repository',
        namespace: 'snapshot',
        description: 'Clean up the snapshot repository.',
        method: 'POST',
        path: '/_snapshot/{repository}/_cleanup',
    },
];
//# sourceMappingURL=snapshot_cleanup_repository.js.map