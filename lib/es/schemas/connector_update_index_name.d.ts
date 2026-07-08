import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A `null` value that is to be interpreted as an actual value, unless other uses of `null` that are equivalent
 * to a missing value. It is used for exemple in settings, where using the `NullValue` for a setting will reset
 * it to its default value.
 */
export declare const SpecUtilsNullValue: z.ZodNull;
export type SpecUtilsNullValue = z.infer<typeof SpecUtilsNullValue>;
/**
 * `WithNullValue<T>` allows for explicit null assignments in contexts where `null` should be interpreted as an
 * actual value.
 */
export declare const SpecUtilsWithNullValue: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
export type SpecUtilsWithNullValue = z.infer<typeof SpecUtilsWithNullValue>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
/**
 * Update the connector index name.
 *
 * Update the `index_name` field of a connector, specifying the index where the data ingested by the connector is stored.
 */
export declare const ConnectorUpdateIndexNameRequest: z.ZodObject<{
    connector_id: z.ZodString;
    index_name: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
}, z.core.$strip>;
export type ConnectorUpdateIndexNameRequest = z.infer<typeof ConnectorUpdateIndexNameRequest>;
export declare const ConnectorUpdateIndexNameResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateIndexNameResponse = z.infer<typeof ConnectorUpdateIndexNameResponse>;
//# sourceMappingURL=connector_update_index_name.d.ts.map