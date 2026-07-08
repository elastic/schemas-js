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
/** Stop a trained model deployment. */
export declare const MlStopTrainedModelDeploymentRequest: z.ZodObject<{
    model_id: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlStopTrainedModelDeploymentRequest = z.infer<typeof MlStopTrainedModelDeploymentRequest>;
export declare const MlStopTrainedModelDeploymentResponse: z.ZodObject<{
    stopped: z.ZodBoolean;
}, z.core.$strip>;
export type MlStopTrainedModelDeploymentResponse = z.infer<typeof MlStopTrainedModelDeploymentResponse>;
//# sourceMappingURL=ml_stop_trained_model_deployment.d.ts.map