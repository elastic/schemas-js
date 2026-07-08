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
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlFilter: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    filter_id: z.ZodString;
    items: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MlFilter = z.infer<typeof MlFilter>;
/**
 * Get filters.
 *
 * You can get a single filter or all filters.
 */
export declare const MlGetFiltersRequest: z.ZodObject<{
    filter_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlGetFiltersRequest = z.infer<typeof MlGetFiltersRequest>;
export declare const MlGetFiltersResponse: z.ZodObject<{
    count: z.ZodNumber;
    filters: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        filter_id: z.ZodString;
        items: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetFiltersResponse = z.infer<typeof MlGetFiltersResponse>;
//# sourceMappingURL=ml_get_filters.d.ts.map