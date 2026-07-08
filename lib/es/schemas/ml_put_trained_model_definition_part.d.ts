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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/** Create part of a trained model definition. */
export declare const MlPutTrainedModelDefinitionPartRequest: z.ZodObject<{
    model_id: z.ZodString;
    part: z.ZodNumber;
    definition: z.ZodString;
    total_definition_length: z.ZodNumber;
    total_parts: z.ZodNumber;
}, z.core.$strip>;
export type MlPutTrainedModelDefinitionPartRequest = z.infer<typeof MlPutTrainedModelDefinitionPartRequest>;
export declare const MlPutTrainedModelDefinitionPartResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlPutTrainedModelDefinitionPartResponse = z.infer<typeof MlPutTrainedModelDefinitionPartResponse>;
//# sourceMappingURL=ml_put_trained_model_definition_part.d.ts.map