import { z } from 'zod';
export declare const PostAttackDiscoveryGenerationsDismissResponse: z.ZodObject<{
    alerts_context_count: z.ZodOptional<z.ZodNumber>;
    connector_id: z.ZodString;
    connector_stats: z.ZodOptional<z.ZodObject<{
        average_successful_duration_nanoseconds: z.ZodOptional<z.ZodNumber>;
        successful_generations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    discoveries: z.ZodNumber;
    end: z.ZodOptional<z.ZodString>;
    execution_uuid: z.ZodString;
    loading_message: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
    start: z.ZodString;
    status: z.ZodEnum<{
        canceled: "canceled";
        started: "started";
        failed: "failed";
        succeeded: "succeeded";
        dismissed: "dismissed";
    }>;
}, z.core.$strip>;
export type PostAttackDiscoveryGenerationsDismissResponse = z.infer<typeof PostAttackDiscoveryGenerationsDismissResponse>;
//# sourceMappingURL=post_attack_discovery_generations_dismiss.d.ts.map