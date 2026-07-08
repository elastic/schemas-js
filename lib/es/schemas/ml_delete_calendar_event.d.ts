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
/** Delete events from a calendar. */
export declare const MlDeleteCalendarEventRequest: z.ZodObject<{
    calendar_id: z.ZodString;
    event_id: z.ZodString;
}, z.core.$strip>;
export type MlDeleteCalendarEventRequest = z.infer<typeof MlDeleteCalendarEventRequest>;
export declare const MlDeleteCalendarEventResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteCalendarEventResponse = z.infer<typeof MlDeleteCalendarEventResponse>;
//# sourceMappingURL=ml_delete_calendar_event.d.ts.map