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
export declare const byte: z.ZodNumber;
export type byte = z.infer<typeof byte>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
/**
 * Dense Embedding results containing bytes are represented as Dense
 * Vectors of bytes.
 */
export declare const InferenceDenseByteVector: z.ZodArray<z.ZodNumber>;
export type InferenceDenseByteVector = z.infer<typeof InferenceDenseByteVector>;
/** The dense embedding result object for byte representation */
export declare const InferenceDenseEmbeddingByteResult: z.ZodObject<{
    embedding: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceDenseEmbeddingByteResult = z.infer<typeof InferenceDenseEmbeddingByteResult>;
/**
 * Dense Embedding results are represented as Dense Vectors
 * of floats.
 */
export declare const InferenceDenseVector: z.ZodArray<z.ZodNumber>;
export type InferenceDenseVector = z.infer<typeof InferenceDenseVector>;
/** The dense embedding result object for float representation */
export declare const InferenceDenseEmbeddingResult: z.ZodObject<{
    embedding: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceDenseEmbeddingResult = z.infer<typeof InferenceDenseEmbeddingResult>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
/** TextEmbeddingInferenceResult is an aggregation of mutually exclusive text_embedding variants */
export declare const InferenceTextEmbeddingInferenceResult: z.ZodUnion<readonly [z.ZodObject<{
    text_embedding_bytes: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding_bits: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>]>;
export type InferenceTextEmbeddingInferenceResult = z.infer<typeof InferenceTextEmbeddingInferenceResult>;
/** Perform text embedding inference on the service. */
export declare const InferenceTextEmbeddingRequest: z.ZodObject<{
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    input: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    input_type: z.ZodOptional<z.ZodString>;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceTextEmbeddingRequest = z.infer<typeof InferenceTextEmbeddingRequest>;
export declare const InferenceTextEmbeddingResponse: z.ZodUnion<readonly [z.ZodObject<{
    text_embedding_bytes: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding_bits: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>]>;
export type InferenceTextEmbeddingResponse = z.infer<typeof InferenceTextEmbeddingResponse>;
//# sourceMappingURL=inference_text_embedding.d.ts.map