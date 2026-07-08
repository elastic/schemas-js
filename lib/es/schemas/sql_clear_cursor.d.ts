import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** Clear an SQL search cursor. */
export declare const SqlClearCursorRequest: z.ZodObject<{
    cursor: z.ZodString;
}, z.core.$strip>;
export type SqlClearCursorRequest = z.infer<typeof SqlClearCursorRequest>;
export declare const SqlClearCursorResponse: z.ZodObject<{
    succeeded: z.ZodBoolean;
}, z.core.$strip>;
export type SqlClearCursorResponse = z.infer<typeof SqlClearCursorResponse>;
//# sourceMappingURL=sql_clear_cursor.d.ts.map