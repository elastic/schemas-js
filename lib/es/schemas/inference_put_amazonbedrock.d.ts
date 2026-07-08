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
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceAmazonBedrockServiceSettings: z.ZodObject<{
    access_key: z.ZodString;
    model: z.ZodString;
    provider: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    secret_key: z.ZodString;
}, z.core.$strip>;
export type InferenceAmazonBedrockServiceSettings = z.infer<typeof InferenceAmazonBedrockServiceSettings>;
export declare const InferenceAmazonBedrockServiceType: z.ZodEnum<{
    amazonbedrock: "amazonbedrock";
}>;
export type InferenceAmazonBedrockServiceType = z.infer<typeof InferenceAmazonBedrockServiceType>;
export declare const InferenceAmazonBedrockTaskSettings: z.ZodObject<{
    max_new_tokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    top_k: z.ZodOptional<z.ZodNumber>;
    top_p: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceAmazonBedrockTaskSettings = z.infer<typeof InferenceAmazonBedrockTaskSettings>;
export declare const InferenceAmazonBedrockTaskType: z.ZodEnum<{
    completion: "completion";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceAmazonBedrockTaskType = z.infer<typeof InferenceAmazonBedrockTaskType>;
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
export declare const InferenceTaskTypeAmazonBedrock: z.ZodEnum<{
    completion: "completion";
    text_embedding: "text_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeAmazonBedrock = z.infer<typeof InferenceTaskTypeAmazonBedrock>;
export declare const InferenceInferenceEndpointInfoAmazonBedrock: z.ZodObject<{
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
export type InferenceInferenceEndpointInfoAmazonBedrock = z.infer<typeof InferenceInferenceEndpointInfoAmazonBedrock>;
/**
 * Create an Amazon Bedrock inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `amazonbedrock` service.
 *
 * >info
 * > You need to provide the access and secret keys only once, during the inference model creation. The get inference API does not retrieve your access or secret keys. After creating the inference model, you cannot change the associated key pairs. If you want to use a different access and secret key pair, delete the inference model and recreate it with the same name and the updated keys.
 */
export declare const InferencePutAmazonbedrockRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        text_embedding: "text_embedding";
        chat_completion: "chat_completion";
    }>;
    amazonbedrock_inference_id: z.ZodString;
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
        amazonbedrock: "amazonbedrock";
    }>;
    service_settings: z.ZodObject<{
        access_key: z.ZodString;
        model: z.ZodString;
        provider: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        secret_key: z.ZodString;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        max_new_tokens: z.ZodOptional<z.ZodNumber>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_k: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutAmazonbedrockRequest = z.infer<typeof InferencePutAmazonbedrockRequest>;
export declare const InferencePutAmazonbedrockResponse: z.ZodObject<{
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
export type InferencePutAmazonbedrockResponse = z.infer<typeof InferencePutAmazonbedrockResponse>;
//# sourceMappingURL=inference_put_amazonbedrock.d.ts.map