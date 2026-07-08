import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Check existence of index templates.
 *
 * Get information about whether index templates exist.
 * Index templates define settings, mappings, and aliases that can be applied automatically to new indices.
 *
 * IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
 */
export declare const IndicesExistsTemplateRequest: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    flat_settings: z.ZodOptional<z.ZodBoolean>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesExistsTemplateRequest = z.infer<typeof IndicesExistsTemplateRequest>;
export declare const IndicesExistsTemplateResponse: z.ZodBoolean;
export type IndicesExistsTemplateResponse = z.infer<typeof IndicesExistsTemplateResponse>;
//# sourceMappingURL=indices_exists_template.d.ts.map