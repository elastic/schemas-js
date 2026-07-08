import { z } from 'zod';
export declare const PostFleetAgentsActionsActionidCancelResponse: z.ZodObject<{
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
export type PostFleetAgentsActionsActionidCancelResponse = z.infer<typeof PostFleetAgentsActionsActionidCancelResponse>;
//# sourceMappingURL=post_fleet_agents_actions_actionid_cancel.d.ts.map