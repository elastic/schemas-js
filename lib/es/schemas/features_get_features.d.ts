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
export declare const FeaturesFeature: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, z.core.$strip>;
export type FeaturesFeature = z.infer<typeof FeaturesFeature>;
/**
 * Get the features.
 *
 * Get a list of features that can be included in snapshots using the `feature_states` field when creating a snapshot.
 * You can use this API to determine which feature states to include when taking a snapshot.
 * By default, all feature states are included in a snapshot if that snapshot includes the global state, or none if it does not.
 *
 * A feature state includes one or more system indices necessary for a given feature to function.
 * In order to ensure data integrity, all system indices that comprise a feature state are snapshotted and restored together.
 *
 * The features listed by this API are a combination of built-in features and features defined by plugins.
 * In order for a feature state to be listed in this API and recognized as a valid feature state by the create snapshot API, the plugin that defines that feature must be installed on the master node.
 */
export declare const FeaturesGetFeaturesRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type FeaturesGetFeaturesRequest = z.infer<typeof FeaturesGetFeaturesRequest>;
export declare const FeaturesGetFeaturesResponse: z.ZodObject<{
    features: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type FeaturesGetFeaturesResponse = z.infer<typeof FeaturesGetFeaturesResponse>;
//# sourceMappingURL=features_get_features.d.ts.map