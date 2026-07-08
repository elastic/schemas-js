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
export declare const InferenceCohereTruncateType: z.ZodEnum<{
    END: "END";
    NONE: "NONE";
    START: "START";
}>;
export type InferenceCohereTruncateType = z.infer<typeof InferenceCohereTruncateType>;
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
export declare const InferenceTaskTypeNvidia: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeNvidia = z.infer<typeof InferenceTaskTypeNvidia>;
export declare const InferenceInferenceEndpointInfoNvidia: z.ZodObject<{
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
export type InferenceInferenceEndpointInfoNvidia = z.infer<typeof InferenceInferenceEndpointInfoNvidia>;
export declare const InferenceNvidiaInputType: z.ZodEnum<{
    search: "search";
    ingest: "ingest";
}>;
export type InferenceNvidiaInputType = z.infer<typeof InferenceNvidiaInputType>;
export declare const InferenceNvidiaSimilarityType: z.ZodEnum<{
    cosine: "cosine";
    dot_product: "dot_product";
    l2_norm: "l2_norm";
}>;
export type InferenceNvidiaSimilarityType = z.infer<typeof InferenceNvidiaSimilarityType>;
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceNvidiaServiceSettings: z.ZodObject<{
    api_key: z.ZodString;
    url: z.ZodOptional<z.ZodString>;
    model_id: z.ZodString;
    max_input_tokens: z.ZodOptional<z.ZodNumber>;
    similarity: z.ZodOptional<z.ZodEnum<{
        cosine: "cosine";
        dot_product: "dot_product";
        l2_norm: "l2_norm";
    }>>;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferenceNvidiaServiceSettings = z.infer<typeof InferenceNvidiaServiceSettings>;
export declare const InferenceNvidiaServiceType: z.ZodEnum<{
    nvidia: "nvidia";
}>;
export type InferenceNvidiaServiceType = z.infer<typeof InferenceNvidiaServiceType>;
export declare const InferenceNvidiaTaskSettings: z.ZodObject<{
    input_type: z.ZodOptional<z.ZodEnum<{
        search: "search";
        ingest: "ingest";
    }>>;
    truncate: z.ZodOptional<z.ZodEnum<{
        END: "END";
        NONE: "NONE";
        START: "START";
    }>>;
}, z.core.$strip>;
export type InferenceNvidiaTaskSettings = z.infer<typeof InferenceNvidiaTaskSettings>;
export declare const InferenceNvidiaTaskType: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceNvidiaTaskType = z.infer<typeof InferenceNvidiaTaskType>;
/**
 * Create an Nvidia inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `nvidia` service.
 */
export declare const InferencePutNvidiaRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        chat_completion: "chat_completion";
    }>;
    nvidia_inference_id: z.ZodString;
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
        nvidia: "nvidia";
    }>;
    service_settings: z.ZodObject<{
        api_key: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        model_id: z.ZodString;
        max_input_tokens: z.ZodOptional<z.ZodNumber>;
        similarity: z.ZodOptional<z.ZodEnum<{
            cosine: "cosine";
            dot_product: "dot_product";
            l2_norm: "l2_norm";
        }>>;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        input_type: z.ZodOptional<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
        }>>;
        truncate: z.ZodOptional<z.ZodEnum<{
            END: "END";
            NONE: "NONE";
            START: "START";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutNvidiaRequest = z.infer<typeof InferencePutNvidiaRequest>;
export declare const InferencePutNvidiaResponse: z.ZodObject<{
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
export type InferencePutNvidiaResponse = z.infer<typeof InferencePutNvidiaResponse>;
//# sourceMappingURL=inference_put_nvidia.d.ts.map