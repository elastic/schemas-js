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
 * Create an inference endpoint.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Mistral, Azure OpenAI, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face.
 * For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models.
 * However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * The following integrations are available through the inference API. You can find the available task types next to the integration name:
 * * AI21 (`chat_completion`, `completion`)
 * * AlibabaCloud AI Search (`completion`, `rerank`, `sparse_embedding`, `text_embedding`)
 * * Amazon Bedrock (`chat_completion`, `completion`, `text_embedding`)
 * * Amazon SageMaker (`chat_completion`, `completion`, `rerank`, `sparse_embedding`, `text_embedding`)
 * * Anthropic (`chat_completion`, `completion`)
 * * Azure AI Studio (`completion`, `rerank`, `text_embedding`)
 * * Azure OpenAI (`chat_completion`, `completion`, `text_embedding`)
 * * Cohere (`completion`, `rerank`, `text_embedding`)
 * * DeepSeek (`chat_completion`, `completion`)
 * * Elasticsearch (`rerank`, `sparse_embedding`, `text_embedding` - this service is for built-in models and models uploaded through Eland)
 * * ELSER (`sparse_embedding`)
 * * Fireworks AI (`chat_completion`, `completion`, `text_embedding`)
 * * Google AI Studio (`completion`, `text_embedding`)
 * * Google Vertex AI (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * Groq (`chat_completion`)
 * * Hugging Face (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * JinaAI (`embedding`, `rerank`, `text_embedding`)
 * * Llama (`chat_completion`, `completion`, `text_embedding`)
 * * Mistral (`chat_completion`, `completion`, `text_embedding`)
 * * Nvidia (`chat_completion`, `completion`, `text_embedding`, `rerank`)
 * * OpenAI (`chat_completion`, `completion`, `text_embedding`)
 * * OpenShift AI (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * VoyageAI (`rerank`, `text_embedding`)
 * * Watsonx (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 */
export declare const InferencePutRequest: z.ZodObject<{
    task_type: z.ZodOptional<z.ZodEnum<{
        completion: "completion";
        embedding: "embedding";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
        chat_completion: "chat_completion";
    }>>;
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    inference_config: z.ZodObject<{
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
}, z.core.$strip>;
export type InferencePutRequest = z.infer<typeof InferencePutRequest>;
export declare const InferencePutResponse: z.ZodObject<{
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
export type InferencePutResponse = z.infer<typeof InferencePutResponse>;
//# sourceMappingURL=inference_put.d.ts.map