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
 * Check component templates.
 *
 * Returns information about whether a particular component template exists.
 */
export declare const ClusterExistsComponentTemplateRequest: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ClusterExistsComponentTemplateRequest = z.infer<typeof ClusterExistsComponentTemplateRequest>;
export declare const ClusterExistsComponentTemplateResponse: z.ZodBoolean;
export type ClusterExistsComponentTemplateResponse = z.infer<typeof ClusterExistsComponentTemplateResponse>;
//# sourceMappingURL=cluster_exists_component_template.d.ts.map