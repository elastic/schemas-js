import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */
export declare const InferenceSparseVector: z.ZodRecord<z.ZodString, z.ZodNumber>;
export type InferenceSparseVector = z.infer<typeof InferenceSparseVector>;
export declare const InferenceSparseEmbeddingResult: z.ZodObject<{
    is_truncated: z.ZodBoolean;
    embedding: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type InferenceSparseEmbeddingResult = z.infer<typeof InferenceSparseEmbeddingResult>;
/** The response format for the sparse embedding request. */
export declare const InferenceSparseEmbeddingInferenceResult: z.ZodObject<{
    sparse_embedding: z.ZodArray<z.ZodObject<{
        is_truncated: z.ZodBoolean;
        embedding: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferenceSparseEmbeddingInferenceResult = z.infer<typeof InferenceSparseEmbeddingInferenceResult>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
/** Perform sparse embedding inference on the service. */
export declare const InferenceSparseEmbeddingRequest: z.ZodObject<{
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    input: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceSparseEmbeddingRequest = z.infer<typeof InferenceSparseEmbeddingRequest>;
export declare const InferenceSparseEmbeddingResponse: z.ZodObject<{
    sparse_embedding: z.ZodArray<z.ZodObject<{
        is_truncated: z.ZodBoolean;
        embedding: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferenceSparseEmbeddingResponse = z.infer<typeof InferenceSparseEmbeddingResponse>;
//# sourceMappingURL=inference_sparse_embedding.d.ts.map