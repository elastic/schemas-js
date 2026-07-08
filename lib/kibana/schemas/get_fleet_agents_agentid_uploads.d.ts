import { z } from 'zod';
export declare const GetFleetAgentsAgentidUploadsResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        actionId: z.ZodString;
        createTime: z.ZodString;
        error: z.ZodOptional<z.ZodString>;
        filePath: z.ZodString;
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodEnum<{
            IN_PROGRESS: "IN_PROGRESS";
            FAILED: "FAILED";
            AWAITING_UPLOAD: "AWAITING_UPLOAD";
            READY: "READY";
            DELETED: "DELETED";
            EXPIRED: "EXPIRED";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetFleetAgentsAgentidUploadsResponse = z.infer<typeof GetFleetAgentsAgentidUploadsResponse>;
//# sourceMappingURL=get_fleet_agents_agentid_uploads.d.ts.map