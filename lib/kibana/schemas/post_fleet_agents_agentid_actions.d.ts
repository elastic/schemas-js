import { z } from 'zod';
export declare const PostFleetAgentsAgentidActionsRequest: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodObject<{
        ack_data: z.ZodNullable<z.ZodUnknown>;
        data: z.ZodNullable<z.ZodUnknown>;
        type: z.ZodEnum<{
            UPGRADE: "UPGRADE";
            UNENROLL: "UNENROLL";
            POLICY_REASSIGN: "POLICY_REASSIGN";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        data: z.ZodObject<{
            log_level: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"debug">, z.ZodLiteral<"info">, z.ZodLiteral<"warning">, z.ZodLiteral<"error">, z.ZodLiteral<null>]>>>;
        }, z.core.$strip>;
        type: z.ZodEnum<{
            SETTINGS: "SETTINGS";
        }>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type PostFleetAgentsAgentidActionsRequest = z.infer<typeof PostFleetAgentsAgentidActionsRequest>;
export declare const PostFleetAgentsAgentidActionsResponse: z.ZodObject<{
    item: z.ZodObject<{
        ack_data: z.ZodNullable<z.ZodUnknown>;
        agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
        created_at: z.ZodString;
        data: z.ZodNullable<z.ZodUnknown>;
        expiration: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        minimum_execution_duration: z.ZodOptional<z.ZodNumber>;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        rollout_duration_seconds: z.ZodOptional<z.ZodNumber>;
        sent_at: z.ZodOptional<z.ZodString>;
        source_uri: z.ZodOptional<z.ZodString>;
        start_time: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodNumber>;
        type: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PostFleetAgentsAgentidActionsResponse = z.infer<typeof PostFleetAgentsAgentidActionsResponse>;
//# sourceMappingURL=post_fleet_agents_agentid_actions.d.ts.map