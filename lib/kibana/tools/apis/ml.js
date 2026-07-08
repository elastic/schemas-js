/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const mlDefinitions = [
    {
        name: 'ml-sync',
        namespace: 'ml',
        description: 'Sync saved objects in the default space',
        method: 'GET',
        path: '/api/ml/saved_objects/sync',
    },
    {
        name: 'ml-update-jobs-spaces',
        namespace: 'ml',
        description: 'Update jobs spaces',
        method: 'POST',
        path: '/api/ml/saved_objects/update_jobs_spaces',
    },
    {
        name: 'ml-update-trained-models-spaces',
        namespace: 'ml',
        description: 'Update trained models spaces',
        method: 'POST',
        path: '/api/ml/saved_objects/update_trained_models_spaces',
    },
];
//# sourceMappingURL=ml.js.map