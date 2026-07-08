import { z } from 'zod';
export declare const Task_manager_health_Serverless_APIs_workload: z.ZodObject<{}, z.core.$strip>;
export type Task_manager_health_Serverless_APIs_workload = z.infer<typeof Task_manager_health_Serverless_APIs_workload>;
export declare const Task_manager_health_Serverless_APIs_configuration: z.ZodObject<{}, z.core.$strip>;
export type Task_manager_health_Serverless_APIs_configuration = z.infer<typeof Task_manager_health_Serverless_APIs_configuration>;
export declare const Task_manager_health_Serverless_APIs_health_response_serverless: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    last_update: z.ZodOptional<z.ZodString>;
    stats: z.ZodOptional<z.ZodObject<{
        configuration: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        workload: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    status: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Task_manager_health_Serverless_APIs_health_response_serverless = z.infer<typeof Task_manager_health_Serverless_APIs_health_response_serverless>;
//# sourceMappingURL=task_manager_health.d.ts.map