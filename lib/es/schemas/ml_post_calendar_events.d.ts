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
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const MlCalendarEvent: z.ZodObject<{
    calendar_id: z.ZodOptional<z.ZodString>;
    event_id: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    end_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    start_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    skip_result: z.ZodOptional<z.ZodBoolean>;
    skip_model_update: z.ZodOptional<z.ZodBoolean>;
    force_time_shift: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlCalendarEvent = z.infer<typeof MlCalendarEvent>;
/** Add scheduled events to the calendar. */
export declare const MlPostCalendarEventsRequest: z.ZodObject<{
    calendar_id: z.ZodString;
    events: z.ZodArray<z.ZodObject<{
        calendar_id: z.ZodOptional<z.ZodString>;
        event_id: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        end_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        start_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        skip_result: z.ZodOptional<z.ZodBoolean>;
        skip_model_update: z.ZodOptional<z.ZodBoolean>;
        force_time_shift: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlPostCalendarEventsRequest = z.infer<typeof MlPostCalendarEventsRequest>;
export declare const MlPostCalendarEventsResponse: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        calendar_id: z.ZodOptional<z.ZodString>;
        event_id: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        end_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        start_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        skip_result: z.ZodOptional<z.ZodBoolean>;
        skip_model_update: z.ZodOptional<z.ZodBoolean>;
        force_time_shift: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlPostCalendarEventsResponse = z.infer<typeof MlPostCalendarEventsResponse>;
//# sourceMappingURL=ml_post_calendar_events.d.ts.map