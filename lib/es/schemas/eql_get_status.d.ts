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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Get the async EQL status.
 *
 * Get the current status for an async EQL search or a stored synchronous EQL search without returning results.
 */
export declare const EqlGetStatusRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type EqlGetStatusRequest = z.infer<typeof EqlGetStatusRequest>;
export declare const EqlGetStatusResponse: z.ZodObject<{
    id: z.ZodString;
    is_partial: z.ZodBoolean;
    is_running: z.ZodBoolean;
    start_time_in_millis: z.ZodOptional<z.ZodAny>;
    expiration_time_in_millis: z.ZodOptional<z.ZodAny>;
    completion_status: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type EqlGetStatusResponse = z.infer<typeof EqlGetStatusResponse>;
//# sourceMappingURL=eql_get_status.d.ts.map