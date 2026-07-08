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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Check index templates.
 *
 * Check whether index templates exist.
 */
export declare const IndicesExistsIndexTemplateRequest: z.ZodObject<{
    name: z.ZodString;
    local: z.ZodOptional<z.ZodBoolean>;
    flat_settings: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesExistsIndexTemplateRequest = z.infer<typeof IndicesExistsIndexTemplateRequest>;
export declare const IndicesExistsIndexTemplateResponse: z.ZodBoolean;
export type IndicesExistsIndexTemplateResponse = z.infer<typeof IndicesExistsIndexTemplateResponse>;
//# sourceMappingURL=indices_exists_index_template.d.ts.map