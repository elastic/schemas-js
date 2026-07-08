import { z } from 'zod';
export declare const Security_Detections_API_AlertStatusExceptClosed: z.ZodEnum<{
    open: "open";
    acknowledged: "acknowledged";
    "in-progress": "in-progress";
}>;
export type Security_Detections_API_AlertStatusExceptClosed = z.infer<typeof Security_Detections_API_AlertStatusExceptClosed>;
export declare const Security_Detections_API_ReasonEnum: z.ZodEnum<{
    other: "other";
    duplicate: "duplicate";
    false_positive: "false_positive";
    true_positive: "true_positive";
    benign_positive: "benign_positive";
    automated_closure: "automated_closure";
}>;
export type Security_Detections_API_ReasonEnum = z.infer<typeof Security_Detections_API_ReasonEnum>;
export declare const Security_Detections_API_SetAlertsStatusByQueryBase: z.ZodObject<{
    conflicts: z.ZodOptional<z.ZodEnum<{
        abort: "abort";
        proceed: "proceed";
    }>>;
    query: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    status: z.ZodEnum<{
        open: "open";
        acknowledged: "acknowledged";
        "in-progress": "in-progress";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_SetAlertsStatusByQueryBase = z.infer<typeof Security_Detections_API_SetAlertsStatusByQueryBase>;
export declare const Security_Detections_API_SetAlertsStatusByIdsBase: z.ZodObject<{
    signal_ids: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        open: "open";
        acknowledged: "acknowledged";
        "in-progress": "in-progress";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_SetAlertsStatusByIdsBase = z.infer<typeof Security_Detections_API_SetAlertsStatusByIdsBase>;
export declare const Security_Detections_API_Reason: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    duplicate: "duplicate";
    false_positive: "false_positive";
    true_positive: "true_positive";
    benign_positive: "benign_positive";
    automated_closure: "automated_closure";
}>, z.ZodString]>;
export type Security_Detections_API_Reason = z.infer<typeof Security_Detections_API_Reason>;
export declare const Security_Detections_API_CloseAlertsByQuery: z.ZodObject<{
    conflicts: z.ZodOptional<z.ZodEnum<{
        abort: "abort";
        proceed: "proceed";
    }>>;
    query: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        other: "other";
        duplicate: "duplicate";
        false_positive: "false_positive";
        true_positive: "true_positive";
        benign_positive: "benign_positive";
        automated_closure: "automated_closure";
    }>, z.ZodString]>>;
    status: z.ZodEnum<{
        closed: "closed";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_CloseAlertsByQuery = z.infer<typeof Security_Detections_API_CloseAlertsByQuery>;
export declare const Security_Detections_API_CloseAlertsByIds: z.ZodObject<{
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        other: "other";
        duplicate: "duplicate";
        false_positive: "false_positive";
        true_positive: "true_positive";
        benign_positive: "benign_positive";
        automated_closure: "automated_closure";
    }>, z.ZodString]>>;
    signal_ids: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        closed: "closed";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_CloseAlertsByIds = z.infer<typeof Security_Detections_API_CloseAlertsByIds>;
export declare const Security_Detections_API_SetAlertsStatusByQuery: z.ZodDiscriminatedUnion<[z.ZodObject<{
    conflicts: z.ZodOptional<z.ZodEnum<{
        abort: "abort";
        proceed: "proceed";
    }>>;
    query: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        other: "other";
        duplicate: "duplicate";
        false_positive: "false_positive";
        true_positive: "true_positive";
        benign_positive: "benign_positive";
        automated_closure: "automated_closure";
    }>, z.ZodString]>>;
    status: z.ZodEnum<{
        closed: "closed";
    }>;
}, z.core.$strip>, z.ZodObject<{
    conflicts: z.ZodOptional<z.ZodEnum<{
        abort: "abort";
        proceed: "proceed";
    }>>;
    query: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    status: z.ZodEnum<{
        open: "open";
        acknowledged: "acknowledged";
        "in-progress": "in-progress";
    }>;
}, z.core.$strip>], "status">;
export type Security_Detections_API_SetAlertsStatusByQuery = z.infer<typeof Security_Detections_API_SetAlertsStatusByQuery>;
export declare const Security_Detections_API_SetAlertsStatusByIds: z.ZodDiscriminatedUnion<[z.ZodObject<{
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        other: "other";
        duplicate: "duplicate";
        false_positive: "false_positive";
        true_positive: "true_positive";
        benign_positive: "benign_positive";
        automated_closure: "automated_closure";
    }>, z.ZodString]>>;
    signal_ids: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        closed: "closed";
    }>;
}, z.core.$strip>, z.ZodObject<{
    signal_ids: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        open: "open";
        acknowledged: "acknowledged";
        "in-progress": "in-progress";
    }>;
}, z.core.$strip>], "status">;
export type Security_Detections_API_SetAlertsStatusByIds = z.infer<typeof Security_Detections_API_SetAlertsStatusByIds>;
export declare const SetAlertsStatusRequest: z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        other: "other";
        duplicate: "duplicate";
        false_positive: "false_positive";
        true_positive: "true_positive";
        benign_positive: "benign_positive";
        automated_closure: "automated_closure";
    }>, z.ZodString]>>;
    signal_ids: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        closed: "closed";
    }>;
}, z.core.$strip>, z.ZodObject<{
    signal_ids: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        open: "open";
        acknowledged: "acknowledged";
        "in-progress": "in-progress";
    }>;
}, z.core.$strip>], "status">, z.ZodDiscriminatedUnion<[z.ZodObject<{
    conflicts: z.ZodOptional<z.ZodEnum<{
        abort: "abort";
        proceed: "proceed";
    }>>;
    query: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        other: "other";
        duplicate: "duplicate";
        false_positive: "false_positive";
        true_positive: "true_positive";
        benign_positive: "benign_positive";
        automated_closure: "automated_closure";
    }>, z.ZodString]>>;
    status: z.ZodEnum<{
        closed: "closed";
    }>;
}, z.core.$strip>, z.ZodObject<{
    conflicts: z.ZodOptional<z.ZodEnum<{
        abort: "abort";
        proceed: "proceed";
    }>>;
    query: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    status: z.ZodEnum<{
        open: "open";
        acknowledged: "acknowledged";
        "in-progress": "in-progress";
    }>;
}, z.core.$strip>], "status">]>;
export type SetAlertsStatusRequest = z.infer<typeof SetAlertsStatusRequest>;
export declare const SetAlertsStatusResponse: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type SetAlertsStatusResponse = z.infer<typeof SetAlertsStatusResponse>;
//# sourceMappingURL=set_alerts_status.d.ts.map