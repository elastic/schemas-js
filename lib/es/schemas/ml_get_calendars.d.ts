import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlPage: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlPage = z.infer<typeof MlPage>;
export declare const MlGetCalendarsCalendar: z.ZodObject<{
    calendar_id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    job_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MlGetCalendarsCalendar = z.infer<typeof MlGetCalendarsCalendar>;
/** Get calendar configuration info. */
export declare const MlGetCalendarsRequest: z.ZodObject<{
    calendar_id: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    page: z.ZodOptional<z.ZodObject<{
        from: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetCalendarsRequest = z.infer<typeof MlGetCalendarsRequest>;
export declare const MlGetCalendarsResponse: z.ZodObject<{
    calendars: z.ZodArray<z.ZodObject<{
        calendar_id: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        job_ids: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    count: z.ZodNumber;
}, z.core.$strip>;
export type MlGetCalendarsResponse = z.infer<typeof MlGetCalendarsResponse>;
//# sourceMappingURL=ml_get_calendars.d.ts.map