import { z } from 'zod';
export declare const Kibana_HTTP_APIs_backfill_response: z.ZodObject<{
    created_at: z.ZodString;
    duration: z.ZodString;
    enabled: z.ZodBoolean;
    end: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    initiator: z.ZodEnum<{
        user: "user";
        system: "system";
    }>;
    initiator_id: z.ZodOptional<z.ZodString>;
    rule: z.ZodObject<{
        api_key_created_by_user: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        api_key_owner: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        consumer: z.ZodString;
        created_at: z.ZodString;
        created_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        enabled: z.ZodBoolean;
        id: z.ZodString;
        name: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        revision: z.ZodNumber;
        rule_type_id: z.ZodString;
        schedule: z.ZodObject<{
            interval: z.ZodString;
        }, z.core.$strip>;
        tags: z.ZodArray<z.ZodString>;
        updated_at: z.ZodString;
        updated_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    schedule: z.ZodArray<z.ZodObject<{
        interval: z.ZodString;
        run_at: z.ZodString;
        status: z.ZodEnum<{
            timeout: "timeout";
            error: "error";
            pending: "pending";
            running: "running";
            complete: "complete";
        }>;
    }, z.core.$strip>>;
    space_id: z.ZodString;
    start: z.ZodString;
    status: z.ZodEnum<{
        timeout: "timeout";
        error: "error";
        pending: "pending";
        running: "running";
        complete: "complete";
    }>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_backfill_response = z.infer<typeof Kibana_HTTP_APIs_backfill_response>;
//# sourceMappingURL=get_alerting_rules_backfill_id.d.ts.map