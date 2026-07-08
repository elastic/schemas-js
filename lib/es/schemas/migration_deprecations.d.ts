import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const MigrationDeprecationsDeprecationLevel: z.ZodEnum<{
    info: "info";
    none: "none";
    warning: "warning";
    critical: "critical";
}>;
export type MigrationDeprecationsDeprecationLevel = z.infer<typeof MigrationDeprecationsDeprecationLevel>;
export declare const MigrationDeprecationsDeprecation: z.ZodObject<{
    details: z.ZodOptional<z.ZodString>;
    level: z.ZodEnum<{
        info: "info";
        none: "none";
        warning: "warning";
        critical: "critical";
    }>;
    message: z.ZodString;
    url: z.ZodString;
    resolve_during_rolling_upgrade: z.ZodBoolean;
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type MigrationDeprecationsDeprecation = z.infer<typeof MigrationDeprecationsDeprecation>;
/**
 * Get deprecation information.
 *
 * Returns information about deprecated features which are in use in the cluster.
 * The reported features include cluster, node, and index level settings that will be removed or changed in the next major version.
 * You must address the reported issues before upgrading to the next major version.
 * However, no action is required when upgrading within the current major version.
 * Deprecated features remain fully supported and will continue to work in the current version, and when upgrading to a newer minor or patch release in the same major version.
 * Use this API to review your usage of these features and migrate away from them at your own pace, before upgrading to a new major version.
 *
 * > info
 * > This API is designed for indirect use by the [Upgrade Assistant](https://www.elastic.co/docs/deploy-manage/upgrade/prepare-to-upgrade/upgrade-assistant).
 * > We recommend learning about deprecated features using the Upgrade Assistant rather than calling this API directly.
 */
export declare const MigrationDeprecationsRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MigrationDeprecationsRequest = z.infer<typeof MigrationDeprecationsRequest>;
export declare const MigrationDeprecationsResponse: z.ZodObject<{
    cluster_settings: z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>;
    index_settings: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    data_streams: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    node_settings: z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>;
    ml_settings: z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>;
    templates: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
    ilm_policies: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        details: z.ZodOptional<z.ZodString>;
        level: z.ZodEnum<{
            info: "info";
            none: "none";
            warning: "warning";
            critical: "critical";
        }>;
        message: z.ZodString;
        url: z.ZodString;
        resolve_during_rolling_upgrade: z.ZodBoolean;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MigrationDeprecationsResponse = z.infer<typeof MigrationDeprecationsResponse>;
//# sourceMappingURL=migration_deprecations.d.ts.map