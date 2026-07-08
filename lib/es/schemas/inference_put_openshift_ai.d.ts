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
export declare const InferenceTaskTypeOpenShiftAi: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeOpenShiftAi = z.infer<typeof InferenceTaskTypeOpenShiftAi>;
export declare const InferenceInferenceEndpointInfoOpenShiftAi: z.ZodObject<{
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
export type InferenceInferenceEndpointInfoOpenShiftAi = z.infer<typeof InferenceInferenceEndpointInfoOpenShiftAi>;
export declare const InferenceOpenShiftAiSimilarityType: z.ZodEnum<{
    cosine: "cosine";
    dot_product: "dot_product";
    l2_norm: "l2_norm";
}>;
export type InferenceOpenShiftAiSimilarityType = z.infer<typeof InferenceOpenShiftAiSimilarityType>;
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceOpenShiftAiServiceSettings: z.ZodObject<{
    api_key: z.ZodString;
    url: z.ZodString;
    model_id: z.ZodOptional<z.ZodString>;
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
export type InferenceOpenShiftAiServiceSettings = z.infer<typeof InferenceOpenShiftAiServiceSettings>;
export declare const InferenceOpenShiftAiServiceType: z.ZodEnum<{
    openshift_ai: "openshift_ai";
}>;
export type InferenceOpenShiftAiServiceType = z.infer<typeof InferenceOpenShiftAiServiceType>;
export declare const InferenceOpenShiftAiTaskSettings: z.ZodObject<{
    return_documents: z.ZodOptional<z.ZodBoolean>;
    top_n: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceOpenShiftAiTaskSettings = z.infer<typeof InferenceOpenShiftAiTaskSettings>;
export declare const InferenceOpenShiftAiTaskType: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceOpenShiftAiTaskType = z.infer<typeof InferenceOpenShiftAiTaskType>;
/**
 * Create an OpenShift AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `openshift_ai` service.
 */
export declare const InferencePutOpenshiftAiRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        chat_completion: "chat_completion";
    }>;
    openshiftai_inference_id: z.ZodString;
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
        openshift_ai: "openshift_ai";
    }>;
    service_settings: z.ZodObject<{
        api_key: z.ZodString;
        url: z.ZodString;
        model_id: z.ZodOptional<z.ZodString>;
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
        return_documents: z.ZodOptional<z.ZodBoolean>;
        top_n: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutOpenshiftAiRequest = z.infer<typeof InferencePutOpenshiftAiRequest>;
export declare const InferencePutOpenshiftAiResponse: z.ZodObject<{
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
export type InferencePutOpenshiftAiResponse = z.infer<typeof InferencePutOpenshiftAiResponse>;
//# sourceMappingURL=inference_put_openshift_ai.d.ts.map