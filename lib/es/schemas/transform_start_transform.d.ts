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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Start a transform.
 *
 * When you start a transform, it creates the destination index if it does not already exist. The `number_of_shards` is
 * set to `1` and the `auto_expand_replicas` is set to `0-1`. If it is a pivot transform, it deduces the mapping
 * definitions for the destination index from the source indices and the transform aggregations. If fields in the
 * destination index are derived from scripts (as in the case of `scripted_metric` or `bucket_script` aggregations),
 * the transform uses dynamic mappings unless an index template exists. If it is a latest transform, it does not deduce
 * mapping definitions; it uses dynamic mappings. To use explicit mappings, create the destination index before you
 * start the transform. Alternatively, you can create an index template, though it does not affect the deduced mappings
 * in a pivot transform.
 *
 * When the transform starts, a series of validations occur to ensure its success. If you deferred validation when you
 * created the transform, they occur when you start the transform—with the exception of privilege checks. When
 * Elasticsearch security features are enabled, the transform remembers which roles the user that created it had at the
 * time of creation and uses those same roles. If those roles do not have the required privileges on the source and
 * destination indices, the transform fails when it attempts unauthorized operations.
 */
export declare const TransformStartTransformRequest: z.ZodObject<{
    transform_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    from: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TransformStartTransformRequest = z.infer<typeof TransformStartTransformRequest>;
export declare const TransformStartTransformResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type TransformStartTransformResponse = z.infer<typeof TransformStartTransformResponse>;
//# sourceMappingURL=transform_start_transform.d.ts.map