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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SqlColumn: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type SqlColumn = z.infer<typeof SqlColumn>;
export declare const SqlRow: z.ZodArray<z.ZodAny>;
export type SqlRow = z.infer<typeof SqlRow>;
/**
 * Get async SQL search results.
 *
 * Get the current status and available results for an async SQL search or stored synchronous SQL search.
 *
 * If the Elasticsearch security features are enabled, only the user who first submitted the SQL search can retrieve the search using this API.
 */
export declare const SqlGetAsyncRequest: z.ZodObject<{
    id: z.ZodString;
    delimiter: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SqlGetAsyncRequest = z.infer<typeof SqlGetAsyncRequest>;
export declare const SqlGetAsyncResponse: z.ZodObject<{
    id: z.ZodString;
    is_running: z.ZodBoolean;
    is_partial: z.ZodBoolean;
    columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    cursor: z.ZodOptional<z.ZodString>;
    rows: z.ZodArray<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>;
export type SqlGetAsyncResponse = z.infer<typeof SqlGetAsyncResponse>;
//# sourceMappingURL=sql_get_async.d.ts.map