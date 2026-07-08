import { z } from 'zod';
export declare const Security_Entity_Analytics_API_PrivilegeMonitoringEngineStatus: z.ZodEnum<{
    disabled: "disabled";
    error: "error";
    started: "started";
    not_installed: "not_installed";
}>;
export type Security_Entity_Analytics_API_PrivilegeMonitoringEngineStatus = z.infer<typeof Security_Entity_Analytics_API_PrivilegeMonitoringEngineStatus>;
export declare const Security_Entity_Analytics_API_MonitoringEngineDescriptor: z.ZodObject<{
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        disabled: "disabled";
        error: "error";
        started: "started";
        not_installed: "not_installed";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_MonitoringEngineDescriptor = z.infer<typeof Security_Entity_Analytics_API_MonitoringEngineDescriptor>;
//# sourceMappingURL=init_monitoring_engine.d.ts.map