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
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const InferenceCustomRequestParams: z.ZodObject<{
    content: z.ZodString;
}, z.core.$strip>;
export type InferenceCustomRequestParams = z.infer<typeof InferenceCustomRequestParams>;
export declare const InferenceCustomResponseParams: z.ZodObject<{
    json_parser: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type InferenceCustomResponseParams = z.infer<typeof InferenceCustomResponseParams>;
export declare const InferenceCustomServiceInputType: z.ZodEnum<{
    search: "search";
    ingest: "ingest";
    classification: "classification";
    clustering: "clustering";
}>;
export type InferenceCustomServiceInputType = z.infer<typeof InferenceCustomServiceInputType>;
export declare const InferenceCustomServiceQueryParameter: z.ZodArray<z.ZodString>;
export type InferenceCustomServiceQueryParameter = z.infer<typeof InferenceCustomServiceQueryParameter>;
export declare const InferenceCustomServiceSettings: z.ZodObject<{
    batch_size: z.ZodOptional<z.ZodNumber>;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    input_type: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
        search: "search";
        ingest: "ingest";
        classification: "classification";
        clustering: "clustering";
    }>, z.ZodString>>;
    query_parameters: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString>>>;
    request: z.ZodObject<{
        content: z.ZodString;
    }, z.core.$strip>;
    response: z.ZodObject<{
        json_parser: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>;
    secret_parameters: z.ZodRecord<z.ZodString, z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceCustomServiceSettings = z.infer<typeof InferenceCustomServiceSettings>;
export declare const InferenceCustomServiceType: z.ZodEnum<{
    custom: "custom";
}>;
export type InferenceCustomServiceType = z.infer<typeof InferenceCustomServiceType>;
export declare const InferenceCustomTaskParameter: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>;
export type InferenceCustomTaskParameter = z.infer<typeof InferenceCustomTaskParameter>;
export declare const InferenceCustomTaskSettings: z.ZodObject<{
    parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>>;
}, z.core.$strip>;
export type InferenceCustomTaskSettings = z.infer<typeof InferenceCustomTaskSettings>;
export declare const InferenceCustomTaskType: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    sparse_embedding: "sparse_embedding";
}>;
export type InferenceCustomTaskType = z.infer<typeof InferenceCustomTaskType>;
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
export declare const InferenceTaskTypeCustom: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
    sparse_embedding: "sparse_embedding";
}>;
export type InferenceTaskTypeCustom = z.infer<typeof InferenceTaskTypeCustom>;
export declare const InferenceInferenceEndpointInfoCustom: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
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
export type InferenceInferenceEndpointInfoCustom = z.infer<typeof InferenceInferenceEndpointInfoCustom>;
/**
 * Create a custom inference endpoint.
 *
 * The custom service gives more control over how to interact with external inference services that aren't explicitly supported through dedicated integrations.
 * The custom service gives you the ability to define the headers, url, query parameters, request body, and secrets.
 * The custom service supports the template replacement functionality, which enables you to define a template that can be replaced with the value associated with that key.
 * Templates are portions of a string that start with `${` and end with `}`.
 * The parameters `secret_parameters` and `task_settings` are checked for keys for template replacement. Template replacement is supported in the `request`, `headers`, `url`, and `query_parameters`.
 * If the definition (key) is not found for a template, an error message is returned.
 * In case of an endpoint definition like the following:
 * ```
 * PUT _inference/text_embedding/test-text-embedding
 * {
 *   "service": "custom",
 *   "service_settings": {
 *      "secret_parameters": {
 *           "api_key": "<some api key>"
 *      },
 *      "url": "...endpoints.huggingface.cloud/v1/embeddings",
 *      "headers": {
 *          "Authorization": "Bearer ${api_key}",
 *          "Content-Type": "application/json"
 *      },
 *      "request": "{\"input\": ${input}}",
 *      "response": {
 *          "json_parser": {
 *              "text_embeddings":"$.data[*].embedding[*]"
 *          }
 *      }
 *   }
 * }
 * ```
 * To replace `${api_key}` the `secret_parameters` and `task_settings` are checked for a key named `api_key`.
 *
 * > info
 * > Templates should not be surrounded by quotes.
 *
 * Pre-defined templates:
 * * `${input}` refers to the array of input strings that comes from the `input` field of the subsequent inference requests.
 * * `${input_type}` refers to the input type translation values.
 * * `${query}` refers to the query field used specifically for reranking tasks.
 * * `${top_n}` refers to the `top_n` field available when performing rerank requests.
 * * `${return_documents}` refers to the `return_documents` field available when performing rerank requests.
 */
export declare const InferencePutCustomRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
    }>;
    custom_inference_id: z.ZodString;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodEnum<{
        custom: "custom";
    }>;
    service_settings: z.ZodObject<{
        batch_size: z.ZodOptional<z.ZodNumber>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        input_type: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            classification: "classification";
            clustering: "clustering";
        }>, z.ZodString>>;
        query_parameters: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString>>>;
        request: z.ZodObject<{
            content: z.ZodString;
        }, z.core.$strip>;
        response: z.ZodObject<{
            json_parser: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>;
        secret_parameters: z.ZodRecord<z.ZodString, z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutCustomRequest = z.infer<typeof InferencePutCustomRequest>;
export declare const InferencePutCustomResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
        sparse_embedding: "sparse_embedding";
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
export type InferencePutCustomResponse = z.infer<typeof InferencePutCustomResponse>;
//# sourceMappingURL=inference_put_custom.d.ts.map