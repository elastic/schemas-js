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
export declare const StreamResult: z.ZodCustom<ArrayBuffer, ArrayBuffer>;
export type StreamResult = z.infer<typeof StreamResult>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
/**
 * Perform streaming completion inference on the service.
 *
 * Get real-time responses for completion tasks by delivering answers incrementally, reducing response times during computation.
 * This API works only with the completion task type.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege). You must use a client that supports streaming.
 */
export declare const InferenceStreamCompletionRequest: z.ZodObject<{
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    input: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceStreamCompletionRequest = z.infer<typeof InferenceStreamCompletionRequest>;
export declare const InferenceStreamCompletionResponse: z.ZodCustom<ArrayBuffer, ArrayBuffer>;
export type InferenceStreamCompletionResponse = z.infer<typeof InferenceStreamCompletionResponse>;
//# sourceMappingURL=inference_stream_completion.d.ts.map