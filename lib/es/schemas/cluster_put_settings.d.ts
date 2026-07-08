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
 * Update the cluster settings.
 *
 * Configure and update dynamic settings on a running cluster.
 * You can also configure dynamic settings locally on an unstarted or shut down node in `elasticsearch.yml`.
 *
 * Updates made with this API can be persistent, which apply across cluster restarts, or transient, which reset after a cluster restart.
 * You can also reset transient or persistent settings by assigning them a null value.
 *
 * If you configure the same setting using multiple methods, Elasticsearch applies the settings in following order of precedence: 1) Transient setting; 2) Persistent setting; 3) `elasticsearch.yml` setting; 4) Default setting value.
 * For example, you can apply a transient setting to override a persistent setting or `elasticsearch.yml` setting.
 * However, a change to an `elasticsearch.yml` setting will not override a defined transient or persistent setting.
 *
 * TIP: In Elastic Cloud, use the user settings feature to configure all cluster settings. This method automatically rejects unsafe settings that could break your cluster.
 * If you run Elasticsearch on your own hardware, use this API to configure dynamic cluster settings.
 * Only use `elasticsearch.yml` for static cluster settings and node settings.
 * The API doesn’t require a restart and ensures a setting’s value is the same on all nodes.
 *
 * WARNING: Transient cluster settings are no longer recommended. Use persistent cluster settings instead.
 * If a cluster becomes unstable, transient settings can clear unexpectedly, resulting in a potentially undesired cluster configuration.
 */
export declare const ClusterPutSettingsRequest: z.ZodObject<{
    flat_settings: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    persistent: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    transient: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type ClusterPutSettingsRequest = z.infer<typeof ClusterPutSettingsRequest>;
export declare const ClusterPutSettingsResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    persistent: z.ZodRecord<z.ZodString, z.ZodAny>;
    transient: z.ZodRecord<z.ZodString, z.ZodAny>;
}, z.core.$strip>;
export type ClusterPutSettingsResponse = z.infer<typeof ClusterPutSettingsResponse>;
//# sourceMappingURL=cluster_put_settings.d.ts.map