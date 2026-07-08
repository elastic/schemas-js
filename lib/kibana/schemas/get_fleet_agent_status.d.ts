import { z } from 'zod';
export declare const GetFleetAgentStatusResponse: z.ZodObject<{
    results: z.ZodObject<{
        active: z.ZodNumber;
        all: z.ZodNumber;
        error: z.ZodNumber;
        events: z.ZodNumber;
        inactive: z.ZodNumber;
        offline: z.ZodNumber;
        online: z.ZodNumber;
        orphaned: z.ZodOptional<z.ZodNumber>;
        other: z.ZodNumber;
        unenrolled: z.ZodNumber;
        uninstalled: z.ZodOptional<z.ZodNumber>;
        updating: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetAgentStatusResponse = z.infer<typeof GetFleetAgentStatusResponse>;
//# sourceMappingURL=get_fleet_agent_status.d.ts.map