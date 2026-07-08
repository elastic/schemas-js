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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const InferenceGoogleModelGardenProvider: z.ZodEnum<{
    ai21: "ai21";
    anthropic: "anthropic";
    google: "google";
    meta: "meta";
    hugging_face: "hugging_face";
    mistral: "mistral";
}>;
export type InferenceGoogleModelGardenProvider = z.infer<typeof InferenceGoogleModelGardenProvider>;
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceGoogleVertexAIServiceSettings: z.ZodObject<{
    provider: z.ZodOptional<z.ZodEnum<{
        ai21: "ai21";
        anthropic: "anthropic";
        google: "google";
        meta: "meta";
        hugging_face: "hugging_face";
        mistral: "mistral";
    }>>;
    url: z.ZodOptional<z.ZodString>;
    streaming_url: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    model_id: z.ZodOptional<z.ZodString>;
    project_id: z.ZodOptional<z.ZodString>;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    service_account_json: z.ZodString;
    dimensions: z.ZodOptional<z.ZodNumber>;
    max_batch_size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceGoogleVertexAIServiceSettings = z.infer<typeof InferenceGoogleVertexAIServiceSettings>;
export declare const InferenceGoogleVertexAIServiceType: z.ZodEnum<{
    googlevertexai: "googlevertexai";
}>;
export type InferenceGoogleVertexAIServiceType = z.infer<typeof InferenceGoogleVertexAIServiceType>;
export declare const InferenceThinkingConfig: z.ZodObject<{
    thinking_budget: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceThinkingConfig = z.infer<typeof InferenceThinkingConfig>;
export declare const InferenceGoogleVertexAITaskSettings: z.ZodObject<{
    auto_truncate: z.ZodOptional<z.ZodBoolean>;
    top_n: z.ZodOptional<z.ZodNumber>;
    thinking_config: z.ZodOptional<z.ZodObject<{
        thinking_budget: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    max_tokens: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceGoogleVertexAITaskSettings = z.infer<typeof InferenceGoogleVertexAITaskSettings>;
export declare const InferenceGoogleVertexAITaskType: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceGoogleVertexAITaskType = z.infer<typeof InferenceGoogleVertexAITaskType>;
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
export declare const InferenceTaskTypeGoogleVertexAI: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeGoogleVertexAI = z.infer<typeof InferenceTaskTypeGoogleVertexAI>;
export declare const InferenceInferenceEndpointInfoGoogleVertexAI: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
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
export type InferenceInferenceEndpointInfoGoogleVertexAI = z.infer<typeof InferenceInferenceEndpointInfoGoogleVertexAI>;
/**
 * Create a Google Vertex AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `googlevertexai` service.
 */
export declare const InferencePutGooglevertexaiRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        chat_completion: "chat_completion";
    }>;
    googlevertexai_inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodEnum<{
        googlevertexai: "googlevertexai";
    }>;
    service_settings: z.ZodObject<{
        provider: z.ZodOptional<z.ZodEnum<{
            ai21: "ai21";
            anthropic: "anthropic";
            google: "google";
            meta: "meta";
            hugging_face: "hugging_face";
            mistral: "mistral";
        }>>;
        url: z.ZodOptional<z.ZodString>;
        streaming_url: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        model_id: z.ZodOptional<z.ZodString>;
        project_id: z.ZodOptional<z.ZodString>;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        service_account_json: z.ZodString;
        dimensions: z.ZodOptional<z.ZodNumber>;
        max_batch_size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        auto_truncate: z.ZodOptional<z.ZodBoolean>;
        top_n: z.ZodOptional<z.ZodNumber>;
        thinking_config: z.ZodOptional<z.ZodObject<{
            thinking_budget: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        max_tokens: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutGooglevertexaiRequest = z.infer<typeof InferencePutGooglevertexaiRequest>;
export declare const InferencePutGooglevertexaiResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
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
export type InferencePutGooglevertexaiResponse = z.infer<typeof InferencePutGooglevertexaiResponse>;
//# sourceMappingURL=inference_put_googlevertexai.d.ts.map