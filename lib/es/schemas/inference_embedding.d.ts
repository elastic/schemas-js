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
export declare const InferenceEmbeddingContentFormat: z.ZodEnum<{
    text: "text";
    base64: "base64";
}>;
export type InferenceEmbeddingContentFormat = z.infer<typeof InferenceEmbeddingContentFormat>;
export declare const InferenceEmbeddingContentType: z.ZodEnum<{
    text: "text";
    image: "image";
    audio: "audio";
    video: "video";
    pdf: "pdf";
}>;
export type InferenceEmbeddingContentType = z.infer<typeof InferenceEmbeddingContentType>;
/** An object containing the input data for a single item for the model to embed. */
export declare const InferenceEmbeddingContentObjectItem: z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>>;
    value: z.ZodString;
}, z.core.$strip>;
export type InferenceEmbeddingContentObjectItem = z.infer<typeof InferenceEmbeddingContentObjectItem>;
/** Allows specifying one or multiple items for the `embedding` task, which should result in a single embedding vector. */
export declare const InferenceEmbeddingContentObjectGroup: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodArray<z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>>;
    value: z.ZodString;
}, z.core.$strip>>]>;
export type InferenceEmbeddingContentObjectGroup = z.infer<typeof InferenceEmbeddingContentObjectGroup>;
/** A wrapper object which contains the fields required to specify multimodal inputs */
export declare const InferenceEmbeddingContentObject: z.ZodObject<{
    content: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>>]>;
}, z.core.$strip>;
export type InferenceEmbeddingContentObject = z.infer<typeof InferenceEmbeddingContentObject>;
/** Allows specifying multimodal inputs for the `embedding` task. */
export declare const InferenceEmbeddingContentInput: z.ZodUnion<readonly [z.ZodObject<{
    content: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>>]>;
}, z.core.$strip>, z.ZodArray<z.ZodObject<{
    content: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>>]>;
}, z.core.$strip>>]>;
export type InferenceEmbeddingContentInput = z.infer<typeof InferenceEmbeddingContentInput>;
/** EmbeddingInferenceResult is an aggregation of mutually exclusive embeddings variants */
export declare const InferenceEmbeddingInferenceResult: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>]>;
export type InferenceEmbeddingInferenceResult = z.infer<typeof InferenceEmbeddingInferenceResult>;
/** Allows specifying text-only inputs for the `embedding` task. */
export declare const InferenceEmbeddingStringInput: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type InferenceEmbeddingStringInput = z.infer<typeof InferenceEmbeddingStringInput>;
/**
 * Inference input.
 * Either a string, an array of strings, a `content` object, or an array of `content` objects.
 */
export declare const InferenceEmbeddingInput: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodUnion<readonly [z.ZodObject<{
    content: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>>]>;
}, z.core.$strip>, z.ZodArray<z.ZodObject<{
    content: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>>;
        value: z.ZodString;
    }, z.core.$strip>>]>;
}, z.core.$strip>>]>]>;
export type InferenceEmbeddingInput = z.infer<typeof InferenceEmbeddingInput>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
export declare const InferenceRequestEmbedding: z.ZodObject<{
    input: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodUnion<readonly [z.ZodObject<{
        content: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                image: "image";
                audio: "audio";
                video: "video";
                pdf: "pdf";
            }>;
            format: z.ZodOptional<z.ZodEnum<{
                text: "text";
                base64: "base64";
            }>>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                image: "image";
                audio: "audio";
                video: "video";
                pdf: "pdf";
            }>;
            format: z.ZodOptional<z.ZodEnum<{
                text: "text";
                base64: "base64";
            }>>;
            value: z.ZodString;
        }, z.core.$strip>>]>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        content: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                image: "image";
                audio: "audio";
                video: "video";
                pdf: "pdf";
            }>;
            format: z.ZodOptional<z.ZodEnum<{
                text: "text";
                base64: "base64";
            }>>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                image: "image";
                audio: "audio";
                video: "video";
                pdf: "pdf";
            }>;
            format: z.ZodOptional<z.ZodEnum<{
                text: "text";
                base64: "base64";
            }>>;
            value: z.ZodString;
        }, z.core.$strip>>]>;
    }, z.core.$strip>>]>]>;
    input_type: z.ZodOptional<z.ZodString>;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceRequestEmbedding = z.infer<typeof InferenceRequestEmbedding>;
/** Perform dense embedding inference on the service. */
export declare const InferenceEmbeddingRequest: z.ZodObject<{
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    embedding: z.ZodObject<{
        input: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodUnion<readonly [z.ZodObject<{
            content: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>>;
                value: z.ZodString;
            }, z.core.$strip>>]>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            content: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>>;
                value: z.ZodString;
            }, z.core.$strip>>]>;
        }, z.core.$strip>>]>]>;
        input_type: z.ZodOptional<z.ZodString>;
        task_settings: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InferenceEmbeddingRequest = z.infer<typeof InferenceEmbeddingRequest>;
export declare const InferenceEmbeddingResponse: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>]>;
export type InferenceEmbeddingResponse = z.infer<typeof InferenceEmbeddingResponse>;
//# sourceMappingURL=inference_embedding.d.ts.map