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
/**
 * Delete a filter.
 *
 * If an anomaly detection job references the filter, you cannot delete the
 * filter. You must update or delete the job before you can delete the filter.
 */
export declare const MlDeleteFilterRequest: z.ZodObject<{
    filter_id: z.ZodString;
}, z.core.$strip>;
export type MlDeleteFilterRequest = z.infer<typeof MlDeleteFilterRequest>;
export declare const MlDeleteFilterResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteFilterResponse = z.infer<typeof MlDeleteFilterResponse>;
//# sourceMappingURL=ml_delete_filter.d.ts.map