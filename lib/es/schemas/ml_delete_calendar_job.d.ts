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
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** Delete anomaly jobs from a calendar. */
export declare const MlDeleteCalendarJobRequest: z.ZodObject<{
    calendar_id: z.ZodString;
    job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type MlDeleteCalendarJobRequest = z.infer<typeof MlDeleteCalendarJobRequest>;
export declare const MlDeleteCalendarJobResponse: z.ZodObject<{
    calendar_id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    job_ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type MlDeleteCalendarJobResponse = z.infer<typeof MlDeleteCalendarJobResponse>;
//# sourceMappingURL=ml_delete_calendar_job.d.ts.map