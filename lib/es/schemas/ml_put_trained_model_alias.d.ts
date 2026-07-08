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
 * Create or update a trained model alias.
 *
 * A trained model alias is a logical name used to reference a single trained
 * model.
 * You can use aliases instead of trained model identifiers to make it easier to
 * reference your models. For example, you can use aliases in inference
 * aggregations and processors.
 * An alias must be unique and refer to only a single trained model. However,
 * you can have multiple aliases for each trained model.
 * If you use this API to update an alias such that it references a different
 * trained model ID and the model uses a different type of data frame analytics,
 * an error occurs. For example, this situation occurs if you have a trained
 * model for regression analysis and a trained model for classification
 * analysis; you cannot reassign an alias from one type of trained model to
 * another.
 * If you use this API to update an alias and there are very few input fields in
 * common between the old and new trained models for the model alias, the API
 * returns a warning.
 */
export declare const MlPutTrainedModelAliasRequest: z.ZodObject<{
    model_alias: z.ZodString;
    model_id: z.ZodString;
    reassign: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlPutTrainedModelAliasRequest = z.infer<typeof MlPutTrainedModelAliasRequest>;
export declare const MlPutTrainedModelAliasResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlPutTrainedModelAliasResponse = z.infer<typeof MlPutTrainedModelAliasResponse>;
//# sourceMappingURL=ml_put_trained_model_alias.d.ts.map