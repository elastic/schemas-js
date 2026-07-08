import { z } from 'zod';
export declare const Security_Entity_Analytics_API_PrivilegeMonitoringEngineStatus: z.ZodEnum<{
    disabled: "disabled";
    error: "error";
    started: "started";
    not_installed: "not_installed";
}>;
export type Security_Entity_Analytics_API_PrivilegeMonitoringEngineStatus = z.infer<typeof Security_Entity_Analytics_API_PrivilegeMonitoringEngineStatus>;
export declare const PrivMonHealthResponse: z.ZodObject<{
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        disabled: "disabled";
        error: "error";
        started: "started";
        not_installed: "not_installed";
    }>;
    users: z.ZodOptional<z.ZodObject<{
        current_count: z.ZodNumber;
        max_allowed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PrivMonHealthResponse = z.infer<typeof PrivMonHealthResponse>;
//# sourceMappingURL=priv_mon_health.d.ts.map