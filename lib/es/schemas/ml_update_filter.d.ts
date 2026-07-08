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
 * Update a filter.
 *
 * Updates the description of a filter, adds items, or removes items from the list.
 */
export declare const MlUpdateFilterRequest: z.ZodObject<{
    filter_id: z.ZodString;
    add_items: z.ZodOptional<z.ZodArray<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    remove_items: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type MlUpdateFilterRequest = z.infer<typeof MlUpdateFilterRequest>;
export declare const MlUpdateFilterResponse: z.ZodObject<{
    description: z.ZodString;
    filter_id: z.ZodString;
    items: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MlUpdateFilterResponse = z.infer<typeof MlUpdateFilterResponse>;
//# sourceMappingURL=ml_update_filter.d.ts.map