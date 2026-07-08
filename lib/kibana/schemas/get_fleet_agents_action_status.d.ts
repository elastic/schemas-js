import { z } from 'zod';
export declare const GetFleetAgentsActionStatusResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        actionId: z.ZodString;
        cancellationTime: z.ZodOptional<z.ZodString>;
        completionTime: z.ZodOptional<z.ZodString>;
        creationTime: z.ZodString;
        expiration: z.ZodOptional<z.ZodString>;
        hasRolloutPeriod: z.ZodOptional<z.ZodBoolean>;
        is_automatic: z.ZodOptional<z.ZodBoolean>;
        latestErrors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            agentId: z.ZodString;
            error: z.ZodString;
            hostname: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>>>;
        nbAgentsAck: z.ZodNumber;
        nbAgentsActionCreated: z.ZodNumber;
        nbAgentsActioned: z.ZodNumber;
        nbAgentsFailed: z.ZodNumber;
        newPolicyId: z.ZodOptional<z.ZodString>;
        policyId: z.ZodOptional<z.ZodString>;
        revision: z.ZodOptional<z.ZodNumber>;
        startTime: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            IN_PROGRESS: "IN_PROGRESS";
            FAILED: "FAILED";
            COMPLETE: "COMPLETE";
            EXPIRED: "EXPIRED";
            CANCELLED: "CANCELLED";
            ROLLOUT_PASSED: "ROLLOUT_PASSED";
        }>;
        type: z.ZodEnum<{
            UPGRADE: "UPGRADE";
            UNENROLL: "UNENROLL";
            SETTINGS: "SETTINGS";
            POLICY_REASSIGN: "POLICY_REASSIGN";
            CANCEL: "CANCEL";
            FORCE_UNENROLL: "FORCE_UNENROLL";
            REQUEST_DIAGNOSTICS: "REQUEST_DIAGNOSTICS";
            UPDATE_TAGS: "UPDATE_TAGS";
            POLICY_CHANGE: "POLICY_CHANGE";
            INPUT_ACTION: "INPUT_ACTION";
            MIGRATE: "MIGRATE";
            PRIVILEGE_LEVEL_CHANGE: "PRIVILEGE_LEVEL_CHANGE";
            ROLLBACK: "ROLLBACK";
        }>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetFleetAgentsActionStatusResponse = z.infer<typeof GetFleetAgentsActionStatusResponse>;
//# sourceMappingURL=get_fleet_agents_action_status.d.ts.map