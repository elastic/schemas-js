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
 * Update the connector error field.
 *
 * Set the error field for the connector.
 * If the error provided in the request body is non-null, the connector’s status is updated to error.
 * Otherwise, if the error is reset to null, the connector status is updated to connected.
 */
export declare const ConnectorUpdateErrorRequest: z.ZodObject<{
    connector_id: z.ZodString;
    error: z.ZodUnion<readonly [z.ZodAny, z.ZodNull]>;
}, z.core.$strip>;
export type ConnectorUpdateErrorRequest = z.infer<typeof ConnectorUpdateErrorRequest>;
export declare const ConnectorUpdateErrorResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateErrorResponse = z.infer<typeof ConnectorUpdateErrorResponse>;
//# sourceMappingURL=connector_update_error.d.ts.map