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
 * Update Watcher index settings.
 *
 * Update settings for the Watcher internal index (`.watches`).
 * Only a subset of settings can be modified.
 * This includes `index.auto_expand_replicas`, `index.number_of_replicas`, `index.routing.allocation.exclude.*`,
 * `index.routing.allocation.include.*` and `index.routing.allocation.require.*`.
 * Modification of `index.routing.allocation.include._tier_preference` is an exception and is not allowed as the
 * Watcher shards must always be in the `data_content` tier.
 */
export declare const WatcherUpdateSettingsRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'index.auto_expand_replicas': z.ZodOptional<z.ZodString>;
    'index.number_of_replicas': z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type WatcherUpdateSettingsRequest = z.infer<typeof WatcherUpdateSettingsRequest>;
export declare const WatcherUpdateSettingsResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type WatcherUpdateSettingsResponse = z.infer<typeof WatcherUpdateSettingsResponse>;
//# sourceMappingURL=watcher_update_settings.d.ts.map