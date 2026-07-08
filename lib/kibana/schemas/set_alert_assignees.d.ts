import { z } from 'zod';
export declare const Security_Detections_API_AlertIds: z.ZodArray<z.ZodString>;
export type Security_Detections_API_AlertIds = z.infer<typeof Security_Detections_API_AlertIds>;
export declare const Security_Detections_API_AlertAssignees: z.ZodObject<{
    add: z.ZodArray<z.ZodString>;
    remove: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_AlertAssignees = z.infer<typeof Security_Detections_API_AlertAssignees>;
export declare const Security_Detections_API_SetAlertAssigneesBody: z.ZodObject<{
    assignees: z.ZodObject<{
        add: z.ZodArray<z.ZodString>;
        remove: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_SetAlertAssigneesBody = z.infer<typeof Security_Detections_API_SetAlertAssigneesBody>;
export declare const SetAlertAssigneesResponse: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type SetAlertAssigneesResponse = z.infer<typeof SetAlertAssigneesResponse>;
//# sourceMappingURL=set_alert_assignees.d.ts.map