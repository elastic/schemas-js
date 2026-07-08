import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** Acknowledged response. For dry_run, contains the list of pipelines which reference the inference endpoint */
export declare const InferenceDeleteInferenceEndpointResult: z.ZodObject<{
    pipelines: z.ZodArray<z.ZodString>;
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type InferenceDeleteInferenceEndpointResult = z.infer<typeof InferenceDeleteInferenceEndpointResult>;
export declare const InferenceTaskType: z.ZodEnum<{
    completion: "completion";
    embedding: "embedding";
    rerank: "rerank";
    text_embedding: "text_embedding";
    sparse_embedding: "sparse_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskType = z.infer<typeof InferenceTaskType>;
/**
 * Delete an inference endpoint.
 *
 * This API requires the manage_inference cluster privilege (the built-in `inference_admin` role grants this privilege).
 */
export declare const InferenceDeleteRequest: z.ZodObject<{
    task_type: z.ZodOptional<z.ZodEnum<{
        completion: "completion";
        embedding: "embedding";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
        chat_completion: "chat_completion";
    }>>;
    inference_id: z.ZodString;
    dry_run: z.ZodOptional<z.ZodBoolean>;
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InferenceDeleteRequest = z.infer<typeof InferenceDeleteRequest>;
export declare const InferenceDeleteResponse: z.ZodObject<{
    pipelines: z.ZodArray<z.ZodString>;
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type InferenceDeleteResponse = z.infer<typeof InferenceDeleteResponse>;
//# sourceMappingURL=inference_delete.d.ts.map