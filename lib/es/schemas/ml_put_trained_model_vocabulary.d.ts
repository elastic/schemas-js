import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
/**
 * Create a trained model vocabulary.
 *
 * This API is supported only for natural language processing (NLP) models.
 * The vocabulary is stored in the index as described in `inference_config.*.vocabulary` of the trained model definition.
 */
export declare const MlPutTrainedModelVocabularyRequest: z.ZodObject<{
    model_id: z.ZodString;
    vocabulary: z.ZodArray<z.ZodString>;
    merges: z.ZodOptional<z.ZodArray<z.ZodString>>;
    scores: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type MlPutTrainedModelVocabularyRequest = z.infer<typeof MlPutTrainedModelVocabularyRequest>;
export declare const MlPutTrainedModelVocabularyResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlPutTrainedModelVocabularyResponse = z.infer<typeof MlPutTrainedModelVocabularyResponse>;
//# sourceMappingURL=ml_put_trained_model_vocabulary.d.ts.map