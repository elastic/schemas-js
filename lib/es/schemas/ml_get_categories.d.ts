import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const CategoryId: z.ZodNumber;
export type CategoryId = z.infer<typeof CategoryId>;
export declare const GrokPattern: z.ZodString;
export type GrokPattern = z.infer<typeof GrokPattern>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ulong: z.ZodNumber;
export type ulong = z.infer<typeof ulong>;
export declare const MlCategory: z.ZodObject<{
    category_id: z.ZodNumber;
    examples: z.ZodArray<z.ZodString>;
    grok_pattern: z.ZodOptional<z.ZodString>;
    job_id: z.ZodString;
    max_matching_length: z.ZodNumber;
    partition_field_name: z.ZodOptional<z.ZodString>;
    partition_field_value: z.ZodOptional<z.ZodString>;
    regex: z.ZodString;
    terms: z.ZodString;
    num_matches: z.ZodOptional<z.ZodNumber>;
    preferred_to_categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    p: z.ZodOptional<z.ZodString>;
    result_type: z.ZodString;
    mlcategory: z.ZodString;
}, z.core.$strip>;
export type MlCategory = z.infer<typeof MlCategory>;
export declare const MlPage: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlPage = z.infer<typeof MlPage>;
/** Get anomaly detection job results for categories. */
export declare const MlGetCategoriesRequest: z.ZodObject<{
    job_id: z.ZodString;
    category_id: z.ZodOptional<z.ZodNumber>;
    from: z.ZodOptional<z.ZodNumber>;
    partition_field_value: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
    page: z.ZodOptional<z.ZodObject<{
        from: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetCategoriesRequest = z.infer<typeof MlGetCategoriesRequest>;
export declare const MlGetCategoriesResponse: z.ZodObject<{
    categories: z.ZodArray<z.ZodObject<{
        category_id: z.ZodNumber;
        examples: z.ZodArray<z.ZodString>;
        grok_pattern: z.ZodOptional<z.ZodString>;
        job_id: z.ZodString;
        max_matching_length: z.ZodNumber;
        partition_field_name: z.ZodOptional<z.ZodString>;
        partition_field_value: z.ZodOptional<z.ZodString>;
        regex: z.ZodString;
        terms: z.ZodString;
        num_matches: z.ZodOptional<z.ZodNumber>;
        preferred_to_categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        p: z.ZodOptional<z.ZodString>;
        result_type: z.ZodString;
        mlcategory: z.ZodString;
    }, z.core.$strip>>;
    count: z.ZodNumber;
}, z.core.$strip>;
export type MlGetCategoriesResponse = z.infer<typeof MlGetCategoriesResponse>;
//# sourceMappingURL=ml_get_categories.d.ts.map