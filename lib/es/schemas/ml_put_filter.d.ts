import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Create a filter.
 *
 * A filter contains a list of strings. It can be used by one or more anomaly detection jobs.
 * Specifically, filters are referenced in the `custom_rules` property of detector configuration objects.
 */
export declare const MlPutFilterRequest: z.ZodObject<{
    filter_id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type MlPutFilterRequest = z.infer<typeof MlPutFilterRequest>;
export declare const MlPutFilterResponse: z.ZodObject<{
    description: z.ZodString;
    filter_id: z.ZodString;
    items: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MlPutFilterResponse = z.infer<typeof MlPutFilterResponse>;
//# sourceMappingURL=ml_put_filter.d.ts.map