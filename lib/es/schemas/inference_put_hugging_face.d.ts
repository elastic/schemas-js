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
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceHuggingFaceServiceSettings: z.ZodObject<{
    api_key: z.ZodString;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    url: z.ZodString;
    model_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceHuggingFaceServiceSettings = z.infer<typeof InferenceHuggingFaceServiceSettings>;
export declare const InferenceHuggingFaceServiceType: z.ZodEnum<{
    hugging_face: "hugging_face";
}>;
export type InferenceHuggingFaceServiceType = z.infer<typeof InferenceHuggingFaceServiceType>;
export declare const InferenceHuggingFaceTaskSettings: z.ZodObject<{
    return_documents: z.ZodOptional<z.ZodBoolean>;
    top_n: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceHuggingFaceTaskSettings = z.infer<typeof InferenceHuggingFaceTaskSettings>;
export declare const InferenceHuggingFaceTaskType: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceHuggingFaceTaskType = z.infer<typeof InferenceHuggingFaceTaskType>;
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
export declare const InferenceTaskTypeHuggingFace: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeHuggingFace = z.infer<typeof InferenceTaskTypeHuggingFace>;
export declare const InferenceInferenceEndpointInfoHuggingFace: z.ZodObject<{
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
export type InferenceInferenceEndpointInfoHuggingFace = z.infer<typeof InferenceInferenceEndpointInfoHuggingFace>;
/**
 * Create a Hugging Face inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `hugging_face` service.
 * Supported tasks include: `text_embedding`, `completion`, and `chat_completion`.
 *
 * To configure the endpoint, first visit the Hugging Face Inference Endpoints page and create a new endpoint.
 * Select a model that supports the task you intend to use.
 *
 * For Elastic's `text_embedding` task:
 * The selected model must support the `Sentence Embeddings` task. On the new endpoint creation page, select the `Sentence Embeddings` task under the `Advanced Configuration` section.
 * After the endpoint has initialized, copy the generated endpoint URL.
 * Recommended models for `text_embedding` task:
 *
 * * `all-MiniLM-L6-v2`
 * * `all-MiniLM-L12-v2`
 * * `all-mpnet-base-v2`
 * * `e5-base-v2`
 * * `e5-small-v2`
 * * `multilingual-e5-base`
 * * `multilingual-e5-small`
 *
 * For Elastic's `chat_completion` and `completion` tasks:
 * The selected model must support the `Text Generation` task and expose OpenAI API. HuggingFace supports both serverless and dedicated endpoints for `Text Generation`. When creating dedicated endpoint select the `Text Generation` task.
 * After the endpoint is initialized (for dedicated) or ready (for serverless), ensure it supports the OpenAI API and includes `/v1/chat/completions` part in URL. Then, copy the full endpoint URL for use.
 * Recommended models for `chat_completion` and `completion` tasks:
 *
 * * `Mistral-7B-Instruct-v0.2`
 * * `QwQ-32B`
 * * `Phi-3-mini-128k-instruct`
 *
 * For Elastic's `rerank` task:
 * The selected model must support the `sentence-ranking` task and expose OpenAI API.
 * HuggingFace supports only dedicated (not serverless) endpoints for `Rerank` so far.
 * After the endpoint is initialized, copy the full endpoint URL for use.
 * Tested models for `rerank` task:
 *
 * * `bge-reranker-base`
 * * `jina-reranker-v1-turbo-en-GGUF`
 */
export declare const InferencePutHuggingFaceRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        chat_completion: "chat_completion";
    }>;
    huggingface_inference_id: z.ZodString;
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
        hugging_face: "hugging_face";
    }>;
    service_settings: z.ZodObject<{
        api_key: z.ZodString;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        url: z.ZodString;
        model_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        return_documents: z.ZodOptional<z.ZodBoolean>;
        top_n: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutHuggingFaceRequest = z.infer<typeof InferencePutHuggingFaceRequest>;
export declare const InferencePutHuggingFaceResponse: z.ZodObject<{
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
export type InferencePutHuggingFaceResponse = z.infer<typeof InferencePutHuggingFaceResponse>;
//# sourceMappingURL=inference_put_hugging_face.d.ts.map