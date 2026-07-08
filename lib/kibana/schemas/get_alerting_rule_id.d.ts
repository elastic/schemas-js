import { z } from 'zod';
export declare const Kibana_HTTP_APIs_rule_flapping: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    look_back_window: z.ZodNumber;
    status_change_threshold: z.ZodNumber;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_rule_flapping = z.infer<typeof Kibana_HTTP_APIs_rule_flapping>;
export declare const Kibana_HTTP_APIs_alerts_filter_query: z.ZodObject<{
    dsl: z.ZodOptional<z.ZodString>;
    filters: z.ZodArray<z.ZodObject<{
        $state: z.ZodOptional<z.ZodObject<{
            store: z.ZodEnum<{
                appState: "appState";
                globalState: "globalState";
            }>;
        }, z.core.$strip>>;
        meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        query: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    }, z.core.$strip>>;
    kql: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_alerts_filter_query = z.infer<typeof Kibana_HTTP_APIs_alerts_filter_query>;
export declare const Kibana_HTTP_APIs_rule_response: z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        alerts_filter: z.ZodOptional<z.ZodObject<{
            query: z.ZodOptional<z.ZodObject<{
                dsl: z.ZodOptional<z.ZodString>;
                filters: z.ZodArray<z.ZodObject<{
                    $state: z.ZodOptional<z.ZodObject<{
                        store: z.ZodEnum<{
                            appState: "appState";
                            globalState: "globalState";
                        }>;
                    }, z.core.$strip>>;
                    meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                    query: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
                }, z.core.$strip>>;
                kql: z.ZodString;
            }, z.core.$strip>>;
            timeframe: z.ZodOptional<z.ZodObject<{
                days: z.ZodArray<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>, z.ZodLiteral<7>]>>;
                hours: z.ZodObject<{
                    end: z.ZodString;
                    start: z.ZodString;
                }, z.core.$strip>;
                timezone: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        connector_type_id: z.ZodString;
        frequency: z.ZodOptional<z.ZodObject<{
            notify_when: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    api_key_created_by_user: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    api_key_owner: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    created_at: z.ZodString;
    created_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enabled: z.ZodBoolean;
    execution_status: z.ZodObject<{
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            reason: z.ZodEnum<{
                license: "license";
                unknown: "unknown";
                timeout: "timeout";
                read: "read";
                disabled: "disabled";
                execute: "execute";
                decrypt: "decrypt";
                validate: "validate";
            }>;
        }, z.core.$strip>>;
        last_duration: z.ZodOptional<z.ZodNumber>;
        last_execution_date: z.ZodString;
        status: z.ZodEnum<{
            unknown: "unknown";
            active: "active";
            error: "error";
            pending: "pending";
            warning: "warning";
            ok: "ok";
        }>;
        warning: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            reason: z.ZodEnum<{
                maxExecutableActions: "maxExecutableActions";
                maxAlerts: "maxAlerts";
                maxQueuedActions: "maxQueuedActions";
                ruleExecution: "ruleExecution";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    id: z.ZodString;
    last_run: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        alerts_count: z.ZodObject<{
            active: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            ignored: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            new: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            recovered: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>;
        outcome: z.ZodEnum<{
            warning: "warning";
            failed: "failed";
            succeeded: "succeeded";
        }>;
        outcome_msg: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        outcome_order: z.ZodOptional<z.ZodNumber>;
        warning: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"read">, z.ZodLiteral<"decrypt">, z.ZodLiteral<"execute">, z.ZodLiteral<"unknown">, z.ZodLiteral<"license">, z.ZodLiteral<"timeout">, z.ZodLiteral<"disabled">, z.ZodLiteral<"validate">, z.ZodLiteral<"maxExecutableActions">, z.ZodLiteral<"maxAlerts">, z.ZodLiteral<"maxQueuedActions">, z.ZodLiteral<"ruleExecution">, z.ZodLiteral<null>]>>>;
    }, z.core.$strip>>>;
    mapped_params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    mute_all: z.ZodBoolean;
    muted_alert_ids: z.ZodArray<z.ZodString>;
    name: z.ZodString;
    next_run: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
    revision: z.ZodNumber;
    rule_type_id: z.ZodString;
    running: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    scheduled_task_id: z.ZodOptional<z.ZodString>;
    tags: z.ZodArray<z.ZodString>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated_at: z.ZodString;
    updated_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_rule_response = z.infer<typeof Kibana_HTTP_APIs_rule_response>;
//# sourceMappingURL=get_alerting_rule_id.d.ts.map