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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a calendar.
 *
 * Remove all scheduled events from a calendar, then delete it.
 */
export declare const MlDeleteCalendarRequest: z.ZodObject<{
    calendar_id: z.ZodString;
}, z.core.$strip>;
export type MlDeleteCalendarRequest = z.infer<typeof MlDeleteCalendarRequest>;
export declare const MlDeleteCalendarResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteCalendarResponse = z.infer<typeof MlDeleteCalendarResponse>;
//# sourceMappingURL=ml_delete_calendar.d.ts.map