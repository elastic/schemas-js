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
/** Delete a datafeed. */
export declare const MlDeleteDatafeedRequest: z.ZodObject<{
    datafeed_id: z.ZodString;
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlDeleteDatafeedRequest = z.infer<typeof MlDeleteDatafeedRequest>;
export declare const MlDeleteDatafeedResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteDatafeedResponse = z.infer<typeof MlDeleteDatafeedResponse>;
//# sourceMappingURL=ml_delete_datafeed.d.ts.map