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
export declare const byte: z.ZodNumber;
export type byte = z.infer<typeof byte>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** The completion result object */
export declare const InferenceCompletionResult: z.ZodObject<{
    result: z.ZodString;
}, z.core.$strip>;
export type InferenceCompletionResult = z.infer<typeof InferenceCompletionResult>;
/**
 * Dense Embedding results containing bytes are represented as Dense
 * Vectors of bytes.
 */
export declare const InferenceDenseByteVector: z.ZodArray<z.ZodNumber>;
export type InferenceDenseByteVector = z.infer<typeof InferenceDenseByteVector>;
/** The dense embedding result object for byte representation */
export declare const InferenceDenseEmbeddingByteResult: z.ZodObject<{
    embedding: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceDenseEmbeddingByteResult = z.infer<typeof InferenceDenseEmbeddingByteResult>;
/**
 * Dense Embedding results are represented as Dense Vectors
 * of floats.
 */
export declare const InferenceDenseVector: z.ZodArray<z.ZodNumber>;
export type InferenceDenseVector = z.infer<typeof InferenceDenseVector>;
/** The dense embedding result object for float representation */
export declare const InferenceDenseEmbeddingResult: z.ZodObject<{
    embedding: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceDenseEmbeddingResult = z.infer<typeof InferenceDenseEmbeddingResult>;
/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */
export declare const InferenceSparseVector: z.ZodRecord<z.ZodString, z.ZodNumber>;
export type InferenceSparseVector = z.infer<typeof InferenceSparseVector>;
export declare const InferenceSparseEmbeddingResult: z.ZodObject<{
    is_truncated: z.ZodBoolean;
    embedding: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type InferenceSparseEmbeddingResult = z.infer<typeof InferenceSparseEmbeddingResult>;
/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export declare const InferenceRankedDocument: z.ZodObject<{
    index: z.ZodNumber;
    relevance_score: z.ZodNumber;
    text: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceRankedDocument = z.infer<typeof InferenceRankedDocument>;
/** InferenceResult is an aggregation of mutually exclusive variants */
export declare const InferenceInferenceResult: z.ZodUnion<readonly [z.ZodObject<{
    embeddings_bytes: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    embeddings_bits: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    embeddings: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding_bytes: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding_bits: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    sparse_embedding: z.ZodArray<z.ZodObject<{
        is_truncated: z.ZodBoolean;
        embedding: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    completion: z.ZodArray<z.ZodObject<{
        result: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    rerank: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        relevance_score: z.ZodNumber;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>]>;
export type InferenceInferenceResult = z.infer<typeof InferenceInferenceResult>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
export declare const InferenceTaskType: z.ZodEnum<{
    completion: "completion";
    embedding: "embedding";
    rerank: "rerank";
    text_embedding: "text_embedding";
    sparse_embedding: "sparse_embedding";
    chat_completion: "chat_completion";
}>;
export type InferenceTaskType = z.infer<typeof InferenceTaskType>;
/**
 * Perform inference on the service.
 *
 * This API enables you to use machine learning models to perform specific tasks on data that you provide as an input.
 * It returns a response with the results of the tasks.
 * The inference endpoint you use can perform one specific task that has been defined when the endpoint was created with the create inference API.
 *
 * For details about using this API with a service, such as Amazon Bedrock, Anthropic, or HuggingFace, refer to the service-specific documentation.
 *
 * > info
 * > The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 */
export declare const InferenceInferenceRequest: z.ZodObject<{
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
    query: z.ZodOptional<z.ZodString>;
    input: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    input_type: z.ZodOptional<z.ZodString>;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceInferenceRequest = z.infer<typeof InferenceInferenceRequest>;
export declare const InferenceInferenceResponse: z.ZodUnion<readonly [z.ZodObject<{
    embeddings_bytes: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    embeddings_bits: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    embeddings: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding_bytes: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding_bits: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding: z.ZodArray<z.ZodObject<{
        embedding: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    sparse_embedding: z.ZodArray<z.ZodObject<{
        is_truncated: z.ZodBoolean;
        embedding: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    completion: z.ZodArray<z.ZodObject<{
        result: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    rerank: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        relevance_score: z.ZodNumber;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>]>;
export type InferenceInferenceResponse = z.infer<typeof InferenceInferenceResponse>;
//# sourceMappingURL=inference_inference.d.ts.map