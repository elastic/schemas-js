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
 * Reset the features.
 *
 * Clear all of the state information stored in system indices by Elasticsearch features, including the security and machine learning indices.
 *
 * WARNING: Intended for development and testing use only. Do not reset features on a production cluster.
 *
 * Return a cluster to the same state as a new installation by resetting the feature state for all Elasticsearch features.
 * This deletes all state information stored in system indices.
 *
 * The response code is HTTP 200 if the state is successfully reset for all features.
 * It is HTTP 500 if the reset operation failed for any feature.
 *
 * Note that select features might provide a way to reset particular system indices.
 * Using this API resets all features, both those that are built-in and implemented as plugins.
 *
 * To list the features that will be affected, use the get features API.
 *
 * IMPORTANT: The features installed on the node you submit this request to are the features that will be reset. Run on the master node if you have any doubts about which plugins are installed on individual nodes.
 */
export declare const FeaturesResetFeaturesRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type FeaturesResetFeaturesRequest = z.infer<typeof FeaturesResetFeaturesRequest>;
export declare const FeaturesResetFeaturesResponse: z.ZodObject<{
    features: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type FeaturesResetFeaturesResponse = z.infer<typeof FeaturesResetFeaturesResponse>;
//# sourceMappingURL=features_reset_features.d.ts.map