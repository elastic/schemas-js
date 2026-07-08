import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
/**
 * Get the async SQL search status.
 *
 * Get the current status of an async SQL search or a stored synchronous SQL search.
 */
export declare const SqlGetAsyncStatusRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type SqlGetAsyncStatusRequest = z.infer<typeof SqlGetAsyncStatusRequest>;
export declare const SqlGetAsyncStatusResponse: z.ZodObject<{
    expiration_time_in_millis: z.ZodAny;
    id: z.ZodString;
    is_running: z.ZodBoolean;
    is_partial: z.ZodBoolean;
    start_time_in_millis: z.ZodAny;
    completion_status: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SqlGetAsyncStatusResponse = z.infer<typeof SqlGetAsyncStatusResponse>;
//# sourceMappingURL=sql_get_async_status.d.ts.map