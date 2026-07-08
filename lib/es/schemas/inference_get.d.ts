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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** Chunking configuration object */
export declare const InferenceInferenceChunkingSettings: z.ZodObject<{
    max_chunk_size: z.ZodOptional<z.ZodNumber>;
    overlap: z.ZodOptional<z.ZodNumber>;
    sentence_overlap: z.ZodOptional<z.ZodNumber>;
    separator_group: z.ZodOptional<z.ZodString>;
    separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
    strategy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceInferenceChunkingSettings = z.infer<typeof InferenceInferenceChunkingSettings>;
export declare const InferenceServiceSettings: z.ZodAny;
export type InferenceServiceSettings = z.infer<typeof InferenceServiceSettings>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
/** Configuration options when storing the inference endpoint */
export declare const InferenceInferenceEndpoint: z.ZodObject<{
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodString;
    service_settings: z.ZodAny;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceInferenceEndpoint = z.infer<typeof InferenceInferenceEndpoint>;
export declare const InferenceTaskType: z.ZodEnum<{
    completion: "completion";
    embedding: "embedding";
    rerank: "rerank";
    text_embedding: "text_embedding";
    sparse_embedding: "sparse_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskType = z.infer<typeof InferenceTaskType>;
/** Represents an inference endpoint as returned by the GET API */
export declare const InferenceInferenceEndpointInfo: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
        embedding: "embedding";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
        chat_completion: "chat_completion";
    }>;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodString;
    service_settings: z.ZodAny;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceInferenceEndpointInfo = z.infer<typeof InferenceInferenceEndpointInfo>;
/**
 * Get an inference endpoint.
 *
 * This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege).
 */
export declare const InferenceGetRequest: z.ZodObject<{
    task_type: z.ZodOptional<z.ZodEnum<{
        completion: "completion";
        embedding: "embedding";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
        chat_completion: "chat_completion";
    }>>;
    inference_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceGetRequest = z.infer<typeof InferenceGetRequest>;
export declare const InferenceGetResponse: z.ZodObject<{
    endpoints: z.ZodArray<z.ZodObject<{
        inference_id: z.ZodString;
        task_type: z.ZodEnum<{
            completion: "completion";
            embedding: "embedding";
            rerank: "rerank";
            text_embedding: "text_embedding";
            sparse_embedding: "sparse_embedding";
            chat_completion: "chat_completion";
        }>;
        chunking_settings: z.ZodOptional<z.ZodObject<{
            max_chunk_size: z.ZodOptional<z.ZodNumber>;
            overlap: z.ZodOptional<z.ZodNumber>;
            sentence_overlap: z.ZodOptional<z.ZodNumber>;
            separator_group: z.ZodOptional<z.ZodString>;
            separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
            strategy: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        service: z.ZodString;
        service_settings: z.ZodAny;
        task_settings: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferenceGetResponse = z.infer<typeof InferenceGetResponse>;
//# sourceMappingURL=inference_get.d.ts.map