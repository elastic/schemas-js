import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Clear trained model deployment cache.
 *
 * Cache will be cleared on all nodes where the trained model is assigned.
 * A trained model deployment may have an inference cache enabled.
 * As requests are handled by each allocated node, their responses may be cached on that individual node.
 * Calling this API clears the caches without restarting the deployment.
 */
export declare const MlClearTrainedModelDeploymentCacheRequest: z.ZodObject<{
    model_id: z.ZodString;
}, z.core.$strip>;
export type MlClearTrainedModelDeploymentCacheRequest = z.infer<typeof MlClearTrainedModelDeploymentCacheRequest>;
export declare const MlClearTrainedModelDeploymentCacheResponse: z.ZodObject<{
    cleared: z.ZodBoolean;
}, z.core.$strip>;
export type MlClearTrainedModelDeploymentCacheResponse = z.infer<typeof MlClearTrainedModelDeploymentCacheResponse>;
//# sourceMappingURL=ml_clear_trained_model_deployment_cache.d.ts.map