import { z } from 'zod';
export declare const PostFleetAgentsAgentidRequestDiagnosticsRequest: z.ZodNullable<z.ZodObject<{
    additional_metrics: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        CPU: "CPU";
    }>>>;
}, z.core.$strip>>;
export type PostFleetAgentsAgentidRequestDiagnosticsRequest = z.infer<typeof PostFleetAgentsAgentidRequestDiagnosticsRequest>;
export declare const PostFleetAgentsAgentidRequestDiagnosticsResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsAgentidRequestDiagnosticsResponse = z.infer<typeof PostFleetAgentsAgentidRequestDiagnosticsResponse>;
//# sourceMappingURL=post_fleet_agents_agentid_request_diagnostics.d.ts.map