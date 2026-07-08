import { z } from 'zod';
export declare const Security_Attack_discovery_API_IntervalApiSchedule: z.ZodObject<{
    interval: z.ZodString;
}, z.core.$strip>;
export type Security_Attack_discovery_API_IntervalApiSchedule = z.infer<typeof Security_Attack_discovery_API_IntervalApiSchedule>;
export declare const Security_Attack_discovery_API_Query: z.ZodObject<{
    language: z.ZodString;
    query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_Query = z.infer<typeof Security_Attack_discovery_API_Query>;
export declare const Security_Attack_discovery_API_Filters: z.ZodArray<z.ZodUnknown>;
export type Security_Attack_discovery_API_Filters = z.infer<typeof Security_Attack_discovery_API_Filters>;
export declare const Security_Attack_discovery_API_Provider: z.ZodEnum<{
    OpenAI: "OpenAI";
    "Azure OpenAI": "Azure OpenAI";
    Other: "Other";
}>;
export type Security_Attack_discovery_API_Provider = z.infer<typeof Security_Attack_discovery_API_Provider>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleExecutionStatus: z.ZodEnum<{
    unknown: "unknown";
    active: "active";
    error: "error";
    warning: "warning";
    ok: "ok";
}>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleExecutionStatus = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleExecutionStatus>;
export declare const Security_Attack_discovery_API_NonEmptyString: z.ZodString;
export type Security_Attack_discovery_API_NonEmptyString = z.infer<typeof Security_Attack_discovery_API_NonEmptyString>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionParams: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionParams = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionParams>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionId: z.ZodString;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionId = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionId>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionGroup: z.ZodString;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionGroup = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionGroup>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionThrottle: z.ZodString;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionThrottle = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionThrottle>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionNotifyWhen: z.ZodEnum<{
    onActiveAlert: "onActiveAlert";
    onThrottleInterval: "onThrottleInterval";
    onActionGroupChange: "onActionGroupChange";
}>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionNotifyWhen = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionNotifyWhen>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionAlertsFilter: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionAlertsFilter = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionAlertsFilter>;
export declare const Security_Attack_discovery_API_ApiConfig: z.ZodObject<{
    actionTypeId: z.ZodString;
    connectorId: z.ZodString;
    defaultSystemPromptId: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
        OpenAI: "OpenAI";
        "Azure OpenAI": "Azure OpenAI";
        Other: "Other";
    }>>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_ApiConfig = z.infer<typeof Security_Attack_discovery_API_ApiConfig>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleExecution: z.ZodObject<{
    date: z.ZodString;
    duration: z.ZodOptional<z.ZodNumber>;
    message: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        unknown: "unknown";
        active: "active";
        error: "error";
        warning: "warning";
        ok: "ok";
    }>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleExecution = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleExecution>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleSystemAction: z.ZodObject<{
    action_type_id: z.ZodString;
    id: z.ZodString;
    params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleSystemAction = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleSystemAction>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionFrequency: z.ZodObject<{
    notify_when: z.ZodEnum<{
        onActiveAlert: "onActiveAlert";
        onThrottleInterval: "onThrottleInterval";
        onActionGroupChange: "onActionGroupChange";
    }>;
    summary: z.ZodBoolean;
    throttle: z.ZodString;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionFrequency = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleActionFrequency>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleParams: z.ZodObject<{
    alerts_index_pattern: z.ZodString;
    api_config: z.ZodObject<{
        actionTypeId: z.ZodString;
        connectorId: z.ZodString;
        defaultSystemPromptId: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodEnum<{
            OpenAI: "OpenAI";
            "Azure OpenAI": "Azure OpenAI";
            Other: "Other";
        }>>;
        name: z.ZodString;
    }, z.core.$strip>;
    combined_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    end: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    query: z.ZodOptional<z.ZodObject<{
        language: z.ZodString;
        query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
    }, z.core.$strip>>;
    size: z.ZodNumber;
    start: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleParams = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleParams>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleGeneralAction: z.ZodObject<{
    action_type_id: z.ZodString;
    alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    frequency: z.ZodOptional<z.ZodObject<{
        notify_when: z.ZodEnum<{
            onActiveAlert: "onActiveAlert";
            onThrottleInterval: "onThrottleInterval";
            onActionGroupChange: "onActionGroupChange";
        }>;
        summary: z.ZodBoolean;
        throttle: z.ZodString;
    }, z.core.$strip>>;
    group: z.ZodString;
    id: z.ZodString;
    params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleGeneralAction = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleGeneralAction>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiScheduleAction: z.ZodUnion<readonly [z.ZodObject<{
    action_type_id: z.ZodString;
    alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    frequency: z.ZodOptional<z.ZodObject<{
        notify_when: z.ZodEnum<{
            onActiveAlert: "onActiveAlert";
            onThrottleInterval: "onThrottleInterval";
            onActionGroupChange: "onActionGroupChange";
        }>;
        summary: z.ZodBoolean;
        throttle: z.ZodString;
    }, z.core.$strip>>;
    group: z.ZodString;
    id: z.ZodString;
    params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    action_type_id: z.ZodString;
    id: z.ZodString;
    params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type Security_Attack_discovery_API_AttackDiscoveryApiScheduleAction = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiScheduleAction>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiSchedule: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notify_when: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodString;
        }, z.core.$strip>>;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodString;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
    created_at: z.ZodString;
    created_by: z.ZodString;
    enabled: z.ZodBoolean;
    id: z.ZodString;
    last_execution: z.ZodOptional<z.ZodObject<{
        date: z.ZodString;
        duration: z.ZodOptional<z.ZodNumber>;
        message: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            unknown: "unknown";
            active: "active";
            error: "error";
            warning: "warning";
            ok: "ok";
        }>;
    }, z.core.$strip>>;
    name: z.ZodString;
    params: z.ZodObject<{
        alerts_index_pattern: z.ZodString;
        api_config: z.ZodObject<{
            actionTypeId: z.ZodString;
            connectorId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            model: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<{
                OpenAI: "OpenAI";
                "Azure OpenAI": "Azure OpenAI";
                Other: "Other";
            }>>;
            name: z.ZodString;
        }, z.core.$strip>;
        combined_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        end: z.ZodOptional<z.ZodString>;
        filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
        query: z.ZodOptional<z.ZodObject<{
            language: z.ZodString;
            query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
        }, z.core.$strip>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiSchedule = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiSchedule>;
//# sourceMappingURL=get_attack_discovery_schedules.d.ts.map