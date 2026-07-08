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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export declare const InferenceRankedDocument: z.ZodObject<{
    index: z.ZodNumber;
    relevance_score: z.ZodNumber;
    text: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceRankedDocument = z.infer<typeof InferenceRankedDocument>;
/** Defines the response for a rerank request. */
export declare const InferenceRerankedInferenceResult: z.ZodObject<{
    rerank: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        relevance_score: z.ZodNumber;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferenceRerankedInferenceResult = z.infer<typeof InferenceRerankedInferenceResult>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
/** Perform reranking inference on the service. */
export declare const InferenceRerankRequest: z.ZodObject<{
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    query: z.ZodString;
    input: z.ZodArray<z.ZodString>;
    return_documents: z.ZodOptional<z.ZodBoolean>;
    top_n: z.ZodOptional<z.ZodNumber>;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceRerankRequest = z.infer<typeof InferenceRerankRequest>;
export declare const InferenceRerankResponse: z.ZodObject<{
    rerank: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        relevance_score: z.ZodNumber;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferenceRerankResponse = z.infer<typeof InferenceRerankResponse>;
//# sourceMappingURL=inference_rerank.d.ts.map