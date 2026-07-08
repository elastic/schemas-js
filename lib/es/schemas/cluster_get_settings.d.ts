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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get cluster-wide settings.
 *
 * By default, it returns only settings that have been explicitly defined.
 */
export declare const ClusterGetSettingsRequest: z.ZodObject<{
    flat_settings: z.ZodOptional<z.ZodBoolean>;
    include_defaults: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type ClusterGetSettingsRequest = z.infer<typeof ClusterGetSettingsRequest>;
export declare const ClusterGetSettingsResponse: z.ZodObject<{
    persistent: z.ZodRecord<z.ZodString, z.ZodAny>;
    transient: z.ZodRecord<z.ZodString, z.ZodAny>;
    defaults: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type ClusterGetSettingsResponse = z.infer<typeof ClusterGetSettingsResponse>;
//# sourceMappingURL=cluster_get_settings.d.ts.map