import { z } from 'zod';
export declare const GetFleetAgentStatusDataResponse: z.ZodObject<{
    dataPreview: z.ZodArray<z.ZodNullable<z.ZodUnknown>>;
    items: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodBoolean;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type GetFleetAgentStatusDataResponse = z.infer<typeof GetFleetAgentStatusDataResponse>;
//# sourceMappingURL=get_fleet_agent_status_data.d.ts.map