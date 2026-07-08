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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Retry a policy.
 *
 * Retry running the lifecycle policy for an index that is in the ERROR step.
 * The API sets the policy back to the step where the error occurred and runs the step.
 * Use the explain lifecycle state API to determine whether an index is in the ERROR step.
 */
export declare const IlmRetryRequest: z.ZodObject<{
    index: z.ZodString;
}, z.core.$strip>;
export type IlmRetryRequest = z.infer<typeof IlmRetryRequest>;
export declare const IlmRetryResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IlmRetryResponse = z.infer<typeof IlmRetryResponse>;
//# sourceMappingURL=ilm_retry.d.ts.map