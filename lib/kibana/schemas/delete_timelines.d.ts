import { z } from 'zod';
export declare const DeleteTimelinesRequest: z.ZodObject<{
    savedObjectIds: z.ZodArray<z.ZodString>;
    searchIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type DeleteTimelinesRequest = z.infer<typeof DeleteTimelinesRequest>;
export declare const DeleteTimelinesResponse: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type DeleteTimelinesResponse = z.infer<typeof DeleteTimelinesResponse>;
//# sourceMappingURL=delete_timelines.d.ts.map