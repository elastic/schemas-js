import { z } from 'zod';
export declare const PostFleetAgentsBulkRequestDiagnosticsRequest: z.ZodObject<{
    additional_metrics: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        CPU: "CPU";
    }>>>;
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type PostFleetAgentsBulkRequestDiagnosticsRequest = z.infer<typeof PostFleetAgentsBulkRequestDiagnosticsRequest>;
export declare const PostFleetAgentsBulkRequestDiagnosticsResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkRequestDiagnosticsResponse = z.infer<typeof PostFleetAgentsBulkRequestDiagnosticsResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_request_diagnostics.d.ts.map