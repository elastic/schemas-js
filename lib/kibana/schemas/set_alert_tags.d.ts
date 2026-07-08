import { z } from 'zod';
export declare const Security_Detections_API_AlertTag: z.ZodString;
export type Security_Detections_API_AlertTag = z.infer<typeof Security_Detections_API_AlertTag>;
export declare const Security_Detections_API_AlertIds: z.ZodArray<z.ZodString>;
export type Security_Detections_API_AlertIds = z.infer<typeof Security_Detections_API_AlertIds>;
export declare const Security_Detections_API_AlertTags: z.ZodArray<z.ZodString>;
export type Security_Detections_API_AlertTags = z.infer<typeof Security_Detections_API_AlertTags>;
export declare const Security_Detections_API_SetAlertTags: z.ZodObject<{
    tags_to_add: z.ZodArray<z.ZodString>;
    tags_to_remove: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_SetAlertTags = z.infer<typeof Security_Detections_API_SetAlertTags>;
export declare const Security_Detections_API_SetAlertTagsBody: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
    tags: z.ZodObject<{
        tags_to_add: z.ZodArray<z.ZodString>;
        tags_to_remove: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Detections_API_SetAlertTagsBody = z.infer<typeof Security_Detections_API_SetAlertTagsBody>;
export declare const SetAlertTagsResponse: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type SetAlertTagsResponse = z.infer<typeof SetAlertTagsResponse>;
//# sourceMappingURL=set_alert_tags.d.ts.map