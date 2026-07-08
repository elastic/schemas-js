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
export declare const InferenceAmazonSageMakerApi: z.ZodEnum<{
    openai: "openai";
    elastic: "elastic";
}>;
export type InferenceAmazonSageMakerApi = z.infer<typeof InferenceAmazonSageMakerApi>;
export declare const InferenceAmazonSageMakerElementType: z.ZodEnum<{
    float: "float";
    byte: "byte";
    bit: "bit";
}>;
export type InferenceAmazonSageMakerElementType = z.infer<typeof InferenceAmazonSageMakerElementType>;
export declare const InferenceAmazonSageMakerSimilarity: z.ZodEnum<{
    cosine: "cosine";
    dot_product: "dot_product";
    l2_norm: "l2_norm";
}>;
export type InferenceAmazonSageMakerSimilarity = z.infer<typeof InferenceAmazonSageMakerSimilarity>;
export declare const InferenceAmazonSageMakerServiceSettings: z.ZodObject<{
    access_key: z.ZodString;
    endpoint_name: z.ZodString;
    api: z.ZodEnum<{
        openai: "openai";
        elastic: "elastic";
    }>;
    region: z.ZodString;
    secret_key: z.ZodString;
    similarity: z.ZodOptional<z.ZodEnum<{
        cosine: "cosine";
        dot_product: "dot_product";
        l2_norm: "l2_norm";
    }>>;
    element_type: z.ZodOptional<z.ZodEnum<{
        float: "float";
        byte: "byte";
        bit: "bit";
    }>>;
    target_model: z.ZodOptional<z.ZodString>;
    target_container_hostname: z.ZodOptional<z.ZodString>;
    inference_component_name: z.ZodOptional<z.ZodString>;
    batch_size: z.ZodOptional<z.ZodNumber>;
    dimensions: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceAmazonSageMakerServiceSettings = z.infer<typeof InferenceAmazonSageMakerServiceSettings>;
export declare const InferenceAmazonSageMakerServiceType: z.ZodEnum<{
    amazon_sagemaker: "amazon_sagemaker";
}>;
export type InferenceAmazonSageMakerServiceType = z.infer<typeof InferenceAmazonSageMakerServiceType>;
export declare const InferenceAmazonSageMakerTaskSettings: z.ZodObject<{
    custom_attributes: z.ZodOptional<z.ZodString>;
    enable_explanations: z.ZodOptional<z.ZodString>;
    inference_id: z.ZodOptional<z.ZodString>;
    session_id: z.ZodOptional<z.ZodString>;
    target_variant: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceAmazonSageMakerTaskSettings = z.infer<typeof InferenceAmazonSageMakerTaskSettings>;
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
export declare const InferenceTaskTypeAmazonSageMaker: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    sparse_embedding: "sparse_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskTypeAmazonSageMaker = z.infer<typeof InferenceTaskTypeAmazonSageMaker>;
export declare const InferenceInferenceEndpointInfoAmazonSageMaker: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
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
export type InferenceInferenceEndpointInfoAmazonSageMaker = z.infer<typeof InferenceInferenceEndpointInfoAmazonSageMaker>;
/**
 * Create an Amazon SageMaker inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `amazon_sagemaker` service.
 */
export declare const InferencePutAmazonsagemakerRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
        chat_completion: "chat_completion";
    }>;
    amazonsagemaker_inference_id: z.ZodString;
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
        amazon_sagemaker: "amazon_sagemaker";
    }>;
    service_settings: z.ZodObject<{
        access_key: z.ZodString;
        endpoint_name: z.ZodString;
        api: z.ZodEnum<{
            openai: "openai";
            elastic: "elastic";
        }>;
        region: z.ZodString;
        secret_key: z.ZodString;
        similarity: z.ZodOptional<z.ZodEnum<{
            cosine: "cosine";
            dot_product: "dot_product";
            l2_norm: "l2_norm";
        }>>;
        element_type: z.ZodOptional<z.ZodEnum<{
            float: "float";
            byte: "byte";
            bit: "bit";
        }>>;
        target_model: z.ZodOptional<z.ZodString>;
        target_container_hostname: z.ZodOptional<z.ZodString>;
        inference_component_name: z.ZodOptional<z.ZodString>;
        batch_size: z.ZodOptional<z.ZodNumber>;
        dimensions: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        custom_attributes: z.ZodOptional<z.ZodString>;
        enable_explanations: z.ZodOptional<z.ZodString>;
        inference_id: z.ZodOptional<z.ZodString>;
        session_id: z.ZodOptional<z.ZodString>;
        target_variant: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutAmazonsagemakerRequest = z.infer<typeof InferencePutAmazonsagemakerRequest>;
export declare const InferencePutAmazonsagemakerResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
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
export type InferencePutAmazonsagemakerResponse = z.infer<typeof InferencePutAmazonsagemakerResponse>;
//# sourceMappingURL=inference_put_amazonsagemaker.d.ts.map