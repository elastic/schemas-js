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
export declare const InferenceAzureOpenAIServiceSettings: z.ZodObject<{
    api_key: z.ZodOptional<z.ZodString>;
    api_version: z.ZodString;
    client_id: z.ZodOptional<z.ZodString>;
    client_secret: z.ZodOptional<z.ZodString>;
    deployment_id: z.ZodString;
    entra_id: z.ZodOptional<z.ZodString>;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    resource_name: z.ZodString;
    scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tenant_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceAzureOpenAIServiceSettings = z.infer<typeof InferenceAzureOpenAIServiceSettings>;
export declare const InferenceAzureOpenAIServiceType: z.ZodEnum<{
    azureopenai: "azureopenai";
}>;
export type InferenceAzureOpenAIServiceType = z.infer<typeof InferenceAzureOpenAIServiceType>;
export declare const InferenceAzureOpenAITaskSettings: z.ZodObject<{
    user: z.ZodOptional<z.ZodString>;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type InferenceAzureOpenAITaskSettings = z.infer<typeof InferenceAzureOpenAITaskSettings>;
export declare const InferenceAzureOpenAITaskType: z.ZodEnum<{
    completion: "completion";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceAzureOpenAITaskType = z.infer<typeof InferenceAzureOpenAITaskType>;
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
export declare const InferenceTaskTypeAzureOpenAI: z.ZodEnum<{
    completion: "completion";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeAzureOpenAI = z.infer<typeof InferenceTaskTypeAzureOpenAI>;
export declare const InferenceInferenceEndpointInfoAzureOpenAI: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
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
export type InferenceInferenceEndpointInfoAzureOpenAI = z.infer<typeof InferenceInferenceEndpointInfoAzureOpenAI>;
/**
 * Create an Azure OpenAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `azureopenai` service.
 *
 * The list of chat completion models that you can choose from in your Azure OpenAI deployment include:
 *
 * * [GPT-4 and GPT-4 Turbo models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#gpt-4-and-gpt-4-turbo-models)
 * * [GPT-3.5](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#gpt-35)
 *
 * The list of embeddings models that you can choose from in your deployment can be found in the [Azure models documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#embeddings).
 */
export declare const InferencePutAzureopenaiRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        text_embedding: "text_embedding";
        chat_completion: "chat_completion";
    }>;
    azureopenai_inference_id: z.ZodString;
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
        azureopenai: "azureopenai";
    }>;
    service_settings: z.ZodObject<{
        api_key: z.ZodOptional<z.ZodString>;
        api_version: z.ZodString;
        client_id: z.ZodOptional<z.ZodString>;
        client_secret: z.ZodOptional<z.ZodString>;
        deployment_id: z.ZodString;
        entra_id: z.ZodOptional<z.ZodString>;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        resource_name: z.ZodString;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tenant_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        user: z.ZodOptional<z.ZodString>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutAzureopenaiRequest = z.infer<typeof InferencePutAzureopenaiRequest>;
export declare const InferencePutAzureopenaiResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
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
export type InferencePutAzureopenaiResponse = z.infer<typeof InferencePutAzureopenaiResponse>;
//# sourceMappingURL=inference_put_azureopenai.d.ts.map