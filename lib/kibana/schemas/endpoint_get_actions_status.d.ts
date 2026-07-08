import { z } from 'zod';
export declare const Security_Endpoint_Management_API_PendingActionDataType: z.ZodNumber;
export type Security_Endpoint_Management_API_PendingActionDataType = z.infer<typeof Security_Endpoint_Management_API_PendingActionDataType>;
export declare const Security_Endpoint_Management_API_AgentId: z.ZodString;
export type Security_Endpoint_Management_API_AgentId = z.infer<typeof Security_Endpoint_Management_API_AgentId>;
export declare const Security_Endpoint_Management_API_PendingActionsSchema: z.ZodUnion<readonly [z.ZodObject<{
    execute: z.ZodOptional<z.ZodNumber>;
    'get-file': z.ZodOptional<z.ZodNumber>;
    isolate: z.ZodOptional<z.ZodNumber>;
    'kill-process': z.ZodOptional<z.ZodNumber>;
    'running-processes': z.ZodOptional<z.ZodNumber>;
    scan: z.ZodOptional<z.ZodNumber>;
    'suspend-process': z.ZodOptional<z.ZodNumber>;
    unisolate: z.ZodOptional<z.ZodNumber>;
    upload: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
export type Security_Endpoint_Management_API_PendingActionsSchema = z.infer<typeof Security_Endpoint_Management_API_PendingActionsSchema>;
export declare const Security_Endpoint_Management_API_ActionStatusSuccessResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        agent_id: z.ZodString;
        pending_actions: z.ZodUnion<readonly [z.ZodObject<{
            execute: z.ZodOptional<z.ZodNumber>;
            'get-file': z.ZodOptional<z.ZodNumber>;
            isolate: z.ZodOptional<z.ZodNumber>;
            'kill-process': z.ZodOptional<z.ZodNumber>;
            'running-processes': z.ZodOptional<z.ZodNumber>;
            scan: z.ZodOptional<z.ZodNumber>;
            'suspend-process': z.ZodOptional<z.ZodNumber>;
            unisolate: z.ZodOptional<z.ZodNumber>;
            upload: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_ActionStatusSuccessResponse = z.infer<typeof Security_Endpoint_Management_API_ActionStatusSuccessResponse>;
//# sourceMappingURL=endpoint_get_actions_status.d.ts.map