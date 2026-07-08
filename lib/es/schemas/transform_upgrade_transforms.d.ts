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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Upgrade all transforms.
 *
 * Transforms are compatible across minor versions and between supported major versions.
 * However, over time, the format of transform configuration information may change.
 * This API identifies transforms that have a legacy configuration format and upgrades them to the latest version.
 * It also cleans up the internal data structures that store the transform state and checkpoints.
 * The upgrade does not affect the source and destination indices.
 * The upgrade also does not affect the roles that transforms use when Elasticsearch security features are enabled; the role used to read source data and write to the destination index remains unchanged.
 *
 * If a transform upgrade step fails, the upgrade stops and an error is returned about the underlying issue.
 * Resolve the issue then re-run the process again.
 * A summary is returned when the upgrade is finished.
 *
 * To ensure continuous transforms remain running during a major version upgrade of the cluster – for example, from 7.16 to 8.0 – it is recommended to upgrade transforms before upgrading the cluster.
 * You may want to perform a recent cluster backup prior to the upgrade.
 */
export declare const TransformUpgradeTransformsRequest: z.ZodObject<{
    dry_run: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type TransformUpgradeTransformsRequest = z.infer<typeof TransformUpgradeTransformsRequest>;
export declare const TransformUpgradeTransformsResponse: z.ZodObject<{
    needs_update: z.ZodNumber;
    no_action: z.ZodNumber;
    updated: z.ZodNumber;
}, z.core.$strip>;
export type TransformUpgradeTransformsResponse = z.infer<typeof TransformUpgradeTransformsResponse>;
//# sourceMappingURL=transform_upgrade_transforms.d.ts.map