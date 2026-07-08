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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a trained model alias.
 *
 * This API deletes an existing model alias that refers to a trained model. If
 * the model alias is missing or refers to a model other than the one identified
 * by the `model_id`, this API returns an error.
 */
export declare const MlDeleteTrainedModelAliasRequest: z.ZodObject<{
    model_alias: z.ZodString;
    model_id: z.ZodString;
}, z.core.$strip>;
export type MlDeleteTrainedModelAliasRequest = z.infer<typeof MlDeleteTrainedModelAliasRequest>;
export declare const MlDeleteTrainedModelAliasResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteTrainedModelAliasResponse = z.infer<typeof MlDeleteTrainedModelAliasResponse>;
//# sourceMappingURL=ml_delete_trained_model_alias.d.ts.map