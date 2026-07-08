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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Set upgrade_mode for transform indices.
 *
 * Sets a cluster wide upgrade_mode setting that prepares transform
 * indices for an upgrade.
 * When upgrading your cluster, in some circumstances you must restart your
 * nodes and reindex your transform indices. In those circumstances,
 * there must be no transforms running. You can close the transforms,
 * do the upgrade, then open all the transforms again. Alternatively,
 * you can use this API to temporarily halt tasks associated with the transforms
 * and prevent new transforms from opening. You can also use this API
 * during upgrades that do not require you to reindex your transform
 * indices, though stopping transforms is not a requirement in that case.
 * You can see the current value for the upgrade_mode setting by using the get
 * transform info API.
 */
export declare const TransformSetUpgradeModeRequest: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type TransformSetUpgradeModeRequest = z.infer<typeof TransformSetUpgradeModeRequest>;
export declare const TransformSetUpgradeModeResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type TransformSetUpgradeModeResponse = z.infer<typeof TransformSetUpgradeModeResponse>;
//# sourceMappingURL=transform_set_upgrade_mode.d.ts.map