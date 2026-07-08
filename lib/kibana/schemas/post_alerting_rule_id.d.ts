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
export declare const Kibana_HTTP_APIs_new_rule_action_frequency: z.ZodObject<{
    notify_when: z.ZodEnum<{
        onActiveAlert: "onActiveAlert";
        onThrottleInterval: "onThrottleInterval";
        onActionGroupChange: "onActionGroupChange";
    }>;
    summary: z.ZodBoolean;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_rule_action_frequency = z.infer<typeof Kibana_HTTP_APIs_new_rule_action_frequency>;
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
export declare const Kibana_HTTP_APIs_new_rule_action_alerts_filter: z.ZodObject<{
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
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_rule_action_alerts_filter = z.infer<typeof Kibana_HTTP_APIs_new_rule_action_alerts_filter>;
export declare const Kibana_HTTP_APIs_new_rule_action: z.ZodObject<{
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
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_rule_action = z.infer<typeof Kibana_HTTP_APIs_new_rule_action>;
export declare const Kibana_HTTP_APIs_new_rule: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    rule_type_id: z.ZodString;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_rule = z.infer<typeof Kibana_HTTP_APIs_new_rule>;
export declare const Kibana_HTTP_APIs_slo_rules_burnrate_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        dependencies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            actionGroupsToSuppressOn: z.ZodArray<z.ZodString>;
            ruleId: z.ZodString;
        }, z.core.$strip>>>;
        sloId: z.ZodString;
        windows: z.ZodArray<z.ZodObject<{
            actionGroup: z.ZodString;
            burnRateThreshold: z.ZodNumber;
            id: z.ZodString;
            longWindow: z.ZodObject<{
                unit: z.ZodString;
                value: z.ZodNumber;
            }, z.core.$strip>;
            maxBurnRateThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            shortWindow: z.ZodObject<{
                unit: z.ZodString;
                value: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "slo.rules.burnRate": "slo.rules.burnRate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_slo_rules_burnrate_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_slo_rules_burnrate_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_logs_alert_document_count_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodUnion<readonly [z.ZodObject<{
        count: z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
        criteria: z.ZodArray<z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            field: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        }, z.core.$strip>>;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        logView: z.ZodObject<{
            logViewId: z.ZodString;
            type: z.ZodEnum<{
                "log-view-reference": "log-view-reference";
            }>;
        }, z.core.$strip>;
        timeSize: z.ZodNumber;
        timeUnit: z.ZodEnum<{
            h: "h";
            s: "s";
            m: "m";
            d: "d";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        count: z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
        criteria: z.ZodArray<z.ZodArray<z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            field: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        }, z.core.$strip>>>;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        logView: z.ZodObject<{
            logViewId: z.ZodString;
            type: z.ZodEnum<{
                "log-view-reference": "log-view-reference";
            }>;
        }, z.core.$strip>;
        timeSize: z.ZodNumber;
        timeUnit: z.ZodEnum<{
            h: "h";
            s: "s";
            m: "m";
            d: "d";
        }>;
    }, z.core.$strip>]>;
    rule_type_id: z.ZodEnum<{
        "logs.alert.document.count": "logs.alert.document.count";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_logs_alert_document_count_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_logs_alert_document_count_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_observability_rules_custom_threshold_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        alertOnGroupDisappear: z.ZodOptional<z.ZodBoolean>;
        alertOnNoData: z.ZodOptional<z.ZodBoolean>;
        criteria: z.ZodArray<z.ZodObject<{
            aggType: z.ZodOptional<z.ZodEnum<{
                custom: "custom";
            }>>;
            comparator: z.ZodString;
            equation: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            metrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                aggType: z.ZodString;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggType: z.ZodEnum<{
                    count: "count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>]>>;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
        }, z.core.$strip>>;
        groupBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        noDataBehavior: z.ZodOptional<z.ZodEnum<{
            alertOnNoData: "alertOnNoData";
            recover: "recover";
            remainActive: "remainActive";
        }>>;
        searchConfiguration: z.ZodObject<{
            filter: z.ZodOptional<z.ZodArray<z.ZodObject<{
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                query: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
            }, z.core.$strip>>>;
            index: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                allowHidden: z.ZodOptional<z.ZodBoolean>;
                allowNoIndex: z.ZodOptional<z.ZodBoolean>;
                fieldAttrs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    customDescription: z.ZodOptional<z.ZodString>;
                    customLabel: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                fieldFormats: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    params: z.ZodNullable<z.ZodUnknown>;
                }, z.core.$strip>>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    aggregatable: z.ZodOptional<z.ZodBoolean>;
                    count: z.ZodOptional<z.ZodNumber>;
                    customDescription: z.ZodOptional<z.ZodString>;
                    customLabel: z.ZodOptional<z.ZodString>;
                    esTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    format: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        params: z.ZodNullable<z.ZodUnknown>;
                    }, z.core.$strip>>;
                    name: z.ZodString;
                    readFromDocValues: z.ZodOptional<z.ZodBoolean>;
                    runtimeField: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                        customDescription: z.ZodOptional<z.ZodString>;
                        customLabel: z.ZodOptional<z.ZodString>;
                        format: z.ZodOptional<z.ZodObject<{
                            id: z.ZodOptional<z.ZodString>;
                            params: z.ZodNullable<z.ZodUnknown>;
                        }, z.core.$strip>>;
                        popularity: z.ZodOptional<z.ZodNumber>;
                        script: z.ZodOptional<z.ZodObject<{
                            source: z.ZodString;
                        }, z.core.$strip>>;
                        type: z.ZodEnum<{
                            boolean: "boolean";
                            date: "date";
                            long: "long";
                            double: "double";
                            ip: "ip";
                            keyword: "keyword";
                            geo_point: "geo_point";
                        }>;
                    }, z.core.$strip>, z.ZodObject<{
                        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                            customDescription: z.ZodOptional<z.ZodString>;
                            customLabel: z.ZodOptional<z.ZodString>;
                            format: z.ZodOptional<z.ZodObject<{
                                id: z.ZodOptional<z.ZodString>;
                                params: z.ZodNullable<z.ZodUnknown>;
                            }, z.core.$strip>>;
                            popularity: z.ZodOptional<z.ZodNumber>;
                            type: z.ZodEnum<{
                                boolean: "boolean";
                                date: "date";
                                long: "long";
                                double: "double";
                                ip: "ip";
                                keyword: "keyword";
                                geo_point: "geo_point";
                            }>;
                        }, z.core.$strip>>>;
                        script: z.ZodOptional<z.ZodObject<{
                            source: z.ZodString;
                        }, z.core.$strip>>;
                        type: z.ZodEnum<{
                            composite: "composite";
                        }>;
                    }, z.core.$strip>]>>;
                    script: z.ZodOptional<z.ZodString>;
                    scripted: z.ZodOptional<z.ZodBoolean>;
                    searchable: z.ZodOptional<z.ZodBoolean>;
                    shortDotsEnable: z.ZodOptional<z.ZodBoolean>;
                    subType: z.ZodOptional<z.ZodObject<{
                        multi: z.ZodOptional<z.ZodObject<{
                            parent: z.ZodString;
                        }, z.core.$strip>>;
                        nested: z.ZodOptional<z.ZodObject<{
                            path: z.ZodString;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                id: z.ZodOptional<z.ZodString>;
                managed: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodOptional<z.ZodString>;
                namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
                runtimeFieldMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                    customDescription: z.ZodOptional<z.ZodString>;
                    customLabel: z.ZodOptional<z.ZodString>;
                    format: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        params: z.ZodNullable<z.ZodUnknown>;
                    }, z.core.$strip>>;
                    popularity: z.ZodOptional<z.ZodNumber>;
                    script: z.ZodOptional<z.ZodObject<{
                        source: z.ZodString;
                    }, z.core.$strip>>;
                    type: z.ZodEnum<{
                        boolean: "boolean";
                        date: "date";
                        long: "long";
                        double: "double";
                        ip: "ip";
                        keyword: "keyword";
                        geo_point: "geo_point";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        customDescription: z.ZodOptional<z.ZodString>;
                        customLabel: z.ZodOptional<z.ZodString>;
                        format: z.ZodOptional<z.ZodObject<{
                            id: z.ZodOptional<z.ZodString>;
                            params: z.ZodNullable<z.ZodUnknown>;
                        }, z.core.$strip>>;
                        popularity: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodEnum<{
                            boolean: "boolean";
                            date: "date";
                            long: "long";
                            double: "double";
                            ip: "ip";
                            keyword: "keyword";
                            geo_point: "geo_point";
                        }>;
                    }, z.core.$strip>>>;
                    script: z.ZodOptional<z.ZodObject<{
                        source: z.ZodString;
                    }, z.core.$strip>>;
                    type: z.ZodEnum<{
                        composite: "composite";
                    }>;
                }, z.core.$strip>]>>>;
                sourceFilters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    clientId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    value: z.ZodString;
                }, z.core.$strip>>>;
                timeFieldName: z.ZodOptional<z.ZodString>;
                title: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                typeMeta: z.ZodOptional<z.ZodObject<{}, z.core.$loose>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>;
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        "observability.rules.custom_threshold": "observability.rules.custom_threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_observability_rules_custom_threshold_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_observability_rules_custom_threshold_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_metrics_alert_threshold_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        alertOnGroupDisappear: z.ZodOptional<z.ZodBoolean>;
        alertOnNoData: z.ZodOptional<z.ZodBoolean>;
        criteria: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            aggType: z.ZodEnum<{
                count: "count";
            }>;
            comparator: z.ZodString;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            aggType: z.ZodString;
            comparator: z.ZodString;
            metric: z.ZodString;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            aggType: z.ZodEnum<{
                custom: "custom";
            }>;
            comparator: z.ZodString;
            customMetrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                aggType: z.ZodString;
                field: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggType: z.ZodEnum<{
                    count: "count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>]>>;
            equation: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>]>>;
        filterQuery: z.ZodOptional<z.ZodString>;
        groupBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        sourceId: z.ZodString;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        "metrics.alert.threshold": "metrics.alert.threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_metrics_alert_threshold_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_metrics_alert_threshold_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_metrics_alert_inventory_threshold_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        alertOnNoData: z.ZodOptional<z.ZodBoolean>;
        criteria: z.ZodArray<z.ZodObject<{
            comparator: z.ZodString;
            customMetric: z.ZodOptional<z.ZodObject<{
                aggregation: z.ZodString;
                field: z.ZodString;
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                type: z.ZodEnum<{
                    custom: "custom";
                }>;
            }, z.core.$strip>>;
            metric: z.ZodString;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        filterQuery: z.ZodOptional<z.ZodString>;
        nodeType: z.ZodString;
        schema: z.ZodOptional<z.ZodString>;
        sourceId: z.ZodString;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        "metrics.alert.inventory.threshold": "metrics.alert.inventory.threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_metrics_alert_inventory_threshold_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_metrics_alert_inventory_threshold_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_uptime_alerts_durationanomaly_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        monitorId: z.ZodString;
        severity: z.ZodNumber;
        stackVersion: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.uptime.alerts.durationAnomaly": "xpack.uptime.alerts.durationAnomaly";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_uptime_alerts_durationanomaly_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_uptime_alerts_durationanomaly_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_uptime_alerts_tlscertificate_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        certAgeThreshold: z.ZodOptional<z.ZodNumber>;
        certExpirationThreshold: z.ZodOptional<z.ZodNumber>;
        search: z.ZodOptional<z.ZodString>;
        stackVersion: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.uptime.alerts.tlsCertificate": "xpack.uptime.alerts.tlsCertificate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_uptime_alerts_tlscertificate_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_uptime_alerts_tlscertificate_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_uptime_alerts_monitorstatus_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        availability: z.ZodOptional<z.ZodObject<{
            range: z.ZodNumber;
            rangeUnit: z.ZodString;
            threshold: z.ZodString;
        }, z.core.$strip>>;
        filters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            'monitor.type': z.ZodOptional<z.ZodArray<z.ZodString>>;
            'observer.geo.name': z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            'url.port': z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>, z.ZodString]>>;
        isAutoGenerated: z.ZodOptional<z.ZodBoolean>;
        locations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        numTimes: z.ZodNumber;
        search: z.ZodOptional<z.ZodString>;
        shouldCheckAvailability: z.ZodBoolean;
        shouldCheckStatus: z.ZodBoolean;
        stackVersion: z.ZodOptional<z.ZodString>;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        timerangeCount: z.ZodOptional<z.ZodNumber>;
        timerangeUnit: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.uptime.alerts.monitorStatus": "xpack.uptime.alerts.monitorStatus";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_uptime_alerts_monitorstatus_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_uptime_alerts_monitorstatus_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_synthetics_alerts_tls_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        certAgeThreshold: z.ZodOptional<z.ZodNumber>;
        certExpirationThreshold: z.ZodOptional<z.ZodNumber>;
        kqlQuery: z.ZodOptional<z.ZodString>;
        locations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        projects: z.ZodOptional<z.ZodArray<z.ZodString>>;
        search: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.synthetics.alerts.tls": "xpack.synthetics.alerts.tls";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_synthetics_alerts_tls_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_synthetics_alerts_tls_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_synthetics_alerts_monitorstatus_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        condition: z.ZodOptional<z.ZodObject<{
            alertOnNoData: z.ZodOptional<z.ZodBoolean>;
            downThreshold: z.ZodOptional<z.ZodNumber>;
            groupBy: z.ZodOptional<z.ZodString>;
            includeRetests: z.ZodOptional<z.ZodBoolean>;
            locationsThreshold: z.ZodOptional<z.ZodNumber>;
            recoveryStrategy: z.ZodOptional<z.ZodEnum<{
                firstUp: "firstUp";
                conditionNotMet: "conditionNotMet";
            }>>;
            window: z.ZodUnion<readonly [z.ZodObject<{
                time: z.ZodObject<{
                    size: z.ZodOptional<z.ZodNumber>;
                    unit: z.ZodOptional<z.ZodEnum<{
                        h: "h";
                        s: "s";
                        m: "m";
                        d: "d";
                    }>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                numberOfChecks: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>]>;
        }, z.core.$strip>>;
        kqlQuery: z.ZodOptional<z.ZodString>;
        locations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        projects: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.synthetics.alerts.monitorStatus": "xpack.synthetics.alerts.monitorStatus";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_synthetics_alerts_monitorstatus_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_synthetics_alerts_monitorstatus_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_apm_transaction_duration_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        aggregationType: z.ZodEnum<{
            avg: "avg";
            "95th": "95th";
            "99th": "99th";
        }>;
        environment: z.ZodString;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodOptional<z.ZodObject<{
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        serviceName: z.ZodOptional<z.ZodString>;
        threshold: z.ZodNumber;
        transactionName: z.ZodOptional<z.ZodString>;
        transactionType: z.ZodOptional<z.ZodString>;
        useKqlFilter: z.ZodOptional<z.ZodBoolean>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.transaction_duration": "apm.transaction_duration";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_apm_transaction_duration_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_apm_transaction_duration_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_apm_transaction_error_rate_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        environment: z.ZodString;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodOptional<z.ZodObject<{
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        serviceName: z.ZodOptional<z.ZodString>;
        threshold: z.ZodNumber;
        transactionName: z.ZodOptional<z.ZodString>;
        transactionType: z.ZodOptional<z.ZodString>;
        useKqlFilter: z.ZodOptional<z.ZodBoolean>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.transaction_error_rate": "apm.transaction_error_rate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_apm_transaction_error_rate_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_apm_transaction_error_rate_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_apm_error_rate_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        environment: z.ZodString;
        errorGroupingKey: z.ZodOptional<z.ZodString>;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodOptional<z.ZodObject<{
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        serviceName: z.ZodOptional<z.ZodString>;
        threshold: z.ZodNumber;
        useKqlFilter: z.ZodOptional<z.ZodBoolean>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.error_rate": "apm.error_rate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_apm_error_rate_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_apm_error_rate_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_apm_anomaly_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        anomalyDetectorTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            txLatency: "txLatency";
            txThroughput: "txThroughput";
            txFailureRate: "txFailureRate";
        }>>>;
        anomalySeverityType: z.ZodEnum<{
            warning: "warning";
            critical: "critical";
            major: "major";
            minor: "minor";
        }>;
        environment: z.ZodString;
        serviceName: z.ZodOptional<z.ZodString>;
        transactionType: z.ZodOptional<z.ZodString>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.anomaly": "apm.anomaly";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_apm_anomaly_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_apm_anomaly_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_transform_health_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        excludeTransforms: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        includeTransforms: z.ZodArray<z.ZodString>;
        testsConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            errorMessages: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            healthCheck: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            notStarted: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        transform_health: "transform_health";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_transform_health_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_transform_health_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_geo_containment_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        boundaryGeoField: z.ZodString;
        boundaryIndexId: z.ZodString;
        boundaryIndexQuery: z.ZodNullable<z.ZodUnknown>;
        boundaryIndexTitle: z.ZodString;
        boundaryNameField: z.ZodOptional<z.ZodString>;
        boundaryType: z.ZodString;
        dateField: z.ZodString;
        entity: z.ZodString;
        geoField: z.ZodString;
        index: z.ZodString;
        indexId: z.ZodString;
        indexQuery: z.ZodNullable<z.ZodUnknown>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        ".geo-containment": ".geo-containment";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_geo_containment_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_geo_containment_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_index_threshold_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        aggField: z.ZodOptional<z.ZodString>;
        aggType: z.ZodOptional<z.ZodString>;
        filterKuery: z.ZodOptional<z.ZodString>;
        groupBy: z.ZodOptional<z.ZodString>;
        index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        termField: z.ZodOptional<z.ZodString>;
        termSize: z.ZodOptional<z.ZodNumber>;
        threshold: z.ZodArray<z.ZodNumber>;
        thresholdComparator: z.ZodEnum<{
            ">": ">";
            "<": "<";
            ">=": ">=";
            "<=": "<=";
            between: "between";
            notBetween: "notBetween";
        }>;
        timeField: z.ZodString;
        timeWindowSize: z.ZodNumber;
        timeWindowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        ".index-threshold": ".index-threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_index_threshold_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_index_threshold_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_es_query_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        aggField: z.ZodOptional<z.ZodString>;
        aggType: z.ZodOptional<z.ZodString>;
        esqlQuery: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        esQuery: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        excludeHitsFromPreviousRun: z.ZodOptional<z.ZodBoolean>;
        groupBy: z.ZodOptional<z.ZodString>;
        index: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        searchConfiguration: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        searchType: z.ZodOptional<z.ZodEnum<{
            esqlQuery: "esqlQuery";
            esQuery: "esQuery";
            searchSource: "searchSource";
        }>>;
        size: z.ZodNumber;
        sourceFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            searchPath: z.ZodString;
        }, z.core.$strip>>>;
        termField: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        termSize: z.ZodOptional<z.ZodNumber>;
        threshold: z.ZodArray<z.ZodNumber>;
        thresholdComparator: z.ZodEnum<{
            ">": ">";
            "<": "<";
            ">=": ">=";
            "<=": "<=";
            between: "between";
            notBetween: "notBetween";
        }>;
        timeField: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        timeWindowSize: z.ZodNumber;
        timeWindowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        ".es-query": ".es-query";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_es_query_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_es_query_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_datasetquality_degradeddocs_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        comparator: z.ZodString;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodObject<{
            index: z.ZodString;
        }, z.core.$strip>;
        threshold: z.ZodArray<z.ZodNumber>;
        timeSize: z.ZodNumber;
        timeUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "datasetQuality.degradedDocs": "datasetQuality.degradedDocs";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_datasetquality_degradeddocs_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_datasetquality_degradeddocs_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_ml_anomaly_detection_jobs_health_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        excludeJobs: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            groupIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            jobIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
        includeJobs: z.ZodObject<{
            groupIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            jobIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        testsConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            behindRealtime: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                timeInterval: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            datafeed: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            delayedData: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                docsCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                enabled: z.ZodOptional<z.ZodBoolean>;
                timeInterval: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            errorMessages: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            mml: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.ml.anomaly_detection_jobs_health": "xpack.ml.anomaly_detection_jobs_health";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_ml_anomaly_detection_jobs_health_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_ml_anomaly_detection_jobs_health_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_xpack_ml_anomaly_detection_alert_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        includeInterim: z.ZodOptional<z.ZodBoolean>;
        jobSelection: z.ZodObject<{
            groupIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            jobIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        kqlQueryString: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lookbackInterval: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resultType: z.ZodEnum<{
            record: "record";
            bucket: "bucket";
            influencer: "influencer";
        }>;
        severity: z.ZodNumber;
        topNBuckets: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.ml.anomaly_detection_alert": "xpack.ml.anomaly_detection_alert";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_xpack_ml_anomaly_detection_alert_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_xpack_ml_anomaly_detection_alert_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_thread_pool_write_rejections_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_thread_pool_write_rejections: "monitoring_alert_thread_pool_write_rejections";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_thread_pool_write_rejections_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_thread_pool_write_rejections_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_thread_pool_search_rejections_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_thread_pool_search_rejections: "monitoring_alert_thread_pool_search_rejections";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_thread_pool_search_rejections_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_thread_pool_search_rejections_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_shard_size_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        indexPattern: z.ZodString;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_shard_size: "monitoring_shard_size";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_shard_size_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_shard_size_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_nodes_changed_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_nodes_changed: "monitoring_alert_nodes_changed";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_nodes_changed_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_nodes_changed_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_missing_monitoring_data_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_missing_monitoring_data: "monitoring_alert_missing_monitoring_data";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_missing_monitoring_data_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_missing_monitoring_data_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_jvm_memory_usage_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_jvm_memory_usage: "monitoring_alert_jvm_memory_usage";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_jvm_memory_usage_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_jvm_memory_usage_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_logstash_version_mismatch_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_logstash_version_mismatch: "monitoring_alert_logstash_version_mismatch";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_logstash_version_mismatch_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_logstash_version_mismatch_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_license_expiration_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_license_expiration: "monitoring_alert_license_expiration";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_license_expiration_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_license_expiration_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_kibana_version_mismatch_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_kibana_version_mismatch: "monitoring_alert_kibana_version_mismatch";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_kibana_version_mismatch_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_kibana_version_mismatch_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_elasticsearch_version_mismatch_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_elasticsearch_version_mismatch: "monitoring_alert_elasticsearch_version_mismatch";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_elasticsearch_version_mismatch_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_elasticsearch_version_mismatch_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_disk_usage_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_disk_usage: "monitoring_alert_disk_usage";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_disk_usage_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_disk_usage_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_cpu_usage_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_cpu_usage: "monitoring_alert_cpu_usage";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_cpu_usage_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_cpu_usage_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_alert_cluster_health_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_cluster_health: "monitoring_alert_cluster_health";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_alert_cluster_health_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_alert_cluster_health_create_rule_body_alerting>;
export declare const Kibana_HTTP_APIs_monitoring_ccr_read_exceptions_create_rule_body_alerting: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_ccr_read_exceptions: "monitoring_ccr_read_exceptions";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_monitoring_ccr_read_exceptions_create_rule_body_alerting = z.infer<typeof Kibana_HTTP_APIs_monitoring_ccr_read_exceptions_create_rule_body_alerting>;
export declare const PostAlertingRuleIdRequest: z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_ccr_read_exceptions: "monitoring_ccr_read_exceptions";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_cluster_health: "monitoring_alert_cluster_health";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_cpu_usage: "monitoring_alert_cpu_usage";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_disk_usage: "monitoring_alert_disk_usage";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_elasticsearch_version_mismatch: "monitoring_alert_elasticsearch_version_mismatch";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_kibana_version_mismatch: "monitoring_alert_kibana_version_mismatch";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_license_expiration: "monitoring_alert_license_expiration";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_logstash_version_mismatch: "monitoring_alert_logstash_version_mismatch";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_jvm_memory_usage: "monitoring_alert_jvm_memory_usage";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_missing_monitoring_data: "monitoring_alert_missing_monitoring_data";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_nodes_changed: "monitoring_alert_nodes_changed";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        indexPattern: z.ZodString;
        limit: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        monitoring_shard_size: "monitoring_shard_size";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_thread_pool_search_rejections: "monitoring_alert_thread_pool_search_rejections";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        duration: z.ZodString;
        filterQuery: z.ZodOptional<z.ZodString>;
        filterQueryText: z.ZodOptional<z.ZodString>;
        threshold: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        monitoring_alert_thread_pool_write_rejections: "monitoring_alert_thread_pool_write_rejections";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        includeInterim: z.ZodOptional<z.ZodBoolean>;
        jobSelection: z.ZodObject<{
            groupIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            jobIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        kqlQueryString: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lookbackInterval: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resultType: z.ZodEnum<{
            record: "record";
            bucket: "bucket";
            influencer: "influencer";
        }>;
        severity: z.ZodNumber;
        topNBuckets: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.ml.anomaly_detection_alert": "xpack.ml.anomaly_detection_alert";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        excludeJobs: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            groupIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            jobIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
        includeJobs: z.ZodObject<{
            groupIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            jobIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        testsConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            behindRealtime: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                timeInterval: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            datafeed: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            delayedData: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                docsCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                enabled: z.ZodOptional<z.ZodBoolean>;
                timeInterval: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            errorMessages: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            mml: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.ml.anomaly_detection_jobs_health": "xpack.ml.anomaly_detection_jobs_health";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        comparator: z.ZodString;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodObject<{
            index: z.ZodString;
        }, z.core.$strip>;
        threshold: z.ZodArray<z.ZodNumber>;
        timeSize: z.ZodNumber;
        timeUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "datasetQuality.degradedDocs": "datasetQuality.degradedDocs";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        aggField: z.ZodOptional<z.ZodString>;
        aggType: z.ZodOptional<z.ZodString>;
        esqlQuery: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        esQuery: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        excludeHitsFromPreviousRun: z.ZodOptional<z.ZodBoolean>;
        groupBy: z.ZodOptional<z.ZodString>;
        index: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        searchConfiguration: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        searchType: z.ZodOptional<z.ZodEnum<{
            esqlQuery: "esqlQuery";
            esQuery: "esQuery";
            searchSource: "searchSource";
        }>>;
        size: z.ZodNumber;
        sourceFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            searchPath: z.ZodString;
        }, z.core.$strip>>>;
        termField: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        termSize: z.ZodOptional<z.ZodNumber>;
        threshold: z.ZodArray<z.ZodNumber>;
        thresholdComparator: z.ZodEnum<{
            ">": ">";
            "<": "<";
            ">=": ">=";
            "<=": "<=";
            between: "between";
            notBetween: "notBetween";
        }>;
        timeField: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        timeWindowSize: z.ZodNumber;
        timeWindowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        ".es-query": ".es-query";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        aggField: z.ZodOptional<z.ZodString>;
        aggType: z.ZodOptional<z.ZodString>;
        filterKuery: z.ZodOptional<z.ZodString>;
        groupBy: z.ZodOptional<z.ZodString>;
        index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        termField: z.ZodOptional<z.ZodString>;
        termSize: z.ZodOptional<z.ZodNumber>;
        threshold: z.ZodArray<z.ZodNumber>;
        thresholdComparator: z.ZodEnum<{
            ">": ">";
            "<": "<";
            ">=": ">=";
            "<=": "<=";
            between: "between";
            notBetween: "notBetween";
        }>;
        timeField: z.ZodString;
        timeWindowSize: z.ZodNumber;
        timeWindowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        ".index-threshold": ".index-threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        boundaryGeoField: z.ZodString;
        boundaryIndexId: z.ZodString;
        boundaryIndexQuery: z.ZodNullable<z.ZodUnknown>;
        boundaryIndexTitle: z.ZodString;
        boundaryNameField: z.ZodOptional<z.ZodString>;
        boundaryType: z.ZodString;
        dateField: z.ZodString;
        entity: z.ZodString;
        geoField: z.ZodString;
        index: z.ZodString;
        indexId: z.ZodString;
        indexQuery: z.ZodNullable<z.ZodUnknown>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        ".geo-containment": ".geo-containment";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        excludeTransforms: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        includeTransforms: z.ZodArray<z.ZodString>;
        testsConfig: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            errorMessages: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            healthCheck: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            notStarted: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        transform_health: "transform_health";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        anomalyDetectorTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            txLatency: "txLatency";
            txThroughput: "txThroughput";
            txFailureRate: "txFailureRate";
        }>>>;
        anomalySeverityType: z.ZodEnum<{
            warning: "warning";
            critical: "critical";
            major: "major";
            minor: "minor";
        }>;
        environment: z.ZodString;
        serviceName: z.ZodOptional<z.ZodString>;
        transactionType: z.ZodOptional<z.ZodString>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.anomaly": "apm.anomaly";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        environment: z.ZodString;
        errorGroupingKey: z.ZodOptional<z.ZodString>;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodOptional<z.ZodObject<{
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        serviceName: z.ZodOptional<z.ZodString>;
        threshold: z.ZodNumber;
        useKqlFilter: z.ZodOptional<z.ZodBoolean>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.error_rate": "apm.error_rate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        environment: z.ZodString;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodOptional<z.ZodObject<{
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        serviceName: z.ZodOptional<z.ZodString>;
        threshold: z.ZodNumber;
        transactionName: z.ZodOptional<z.ZodString>;
        transactionType: z.ZodOptional<z.ZodString>;
        useKqlFilter: z.ZodOptional<z.ZodBoolean>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.transaction_error_rate": "apm.transaction_error_rate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        aggregationType: z.ZodEnum<{
            avg: "avg";
            "95th": "95th";
            "99th": "99th";
        }>;
        environment: z.ZodString;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        searchConfiguration: z.ZodOptional<z.ZodObject<{
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        serviceName: z.ZodOptional<z.ZodString>;
        threshold: z.ZodNumber;
        transactionName: z.ZodOptional<z.ZodString>;
        transactionType: z.ZodOptional<z.ZodString>;
        useKqlFilter: z.ZodOptional<z.ZodBoolean>;
        windowSize: z.ZodNumber;
        windowUnit: z.ZodString;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "apm.transaction_duration": "apm.transaction_duration";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        condition: z.ZodOptional<z.ZodObject<{
            alertOnNoData: z.ZodOptional<z.ZodBoolean>;
            downThreshold: z.ZodOptional<z.ZodNumber>;
            groupBy: z.ZodOptional<z.ZodString>;
            includeRetests: z.ZodOptional<z.ZodBoolean>;
            locationsThreshold: z.ZodOptional<z.ZodNumber>;
            recoveryStrategy: z.ZodOptional<z.ZodEnum<{
                firstUp: "firstUp";
                conditionNotMet: "conditionNotMet";
            }>>;
            window: z.ZodUnion<readonly [z.ZodObject<{
                time: z.ZodObject<{
                    size: z.ZodOptional<z.ZodNumber>;
                    unit: z.ZodOptional<z.ZodEnum<{
                        h: "h";
                        s: "s";
                        m: "m";
                        d: "d";
                    }>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                numberOfChecks: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>]>;
        }, z.core.$strip>>;
        kqlQuery: z.ZodOptional<z.ZodString>;
        locations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        projects: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.synthetics.alerts.monitorStatus": "xpack.synthetics.alerts.monitorStatus";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        certAgeThreshold: z.ZodOptional<z.ZodNumber>;
        certExpirationThreshold: z.ZodOptional<z.ZodNumber>;
        kqlQuery: z.ZodOptional<z.ZodString>;
        locations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        monitorTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        projects: z.ZodOptional<z.ZodArray<z.ZodString>>;
        search: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.synthetics.alerts.tls": "xpack.synthetics.alerts.tls";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        availability: z.ZodOptional<z.ZodObject<{
            range: z.ZodNumber;
            rangeUnit: z.ZodString;
            threshold: z.ZodString;
        }, z.core.$strip>>;
        filters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            'monitor.type': z.ZodOptional<z.ZodArray<z.ZodString>>;
            'observer.geo.name': z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            'url.port': z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>, z.ZodString]>>;
        isAutoGenerated: z.ZodOptional<z.ZodBoolean>;
        locations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        numTimes: z.ZodNumber;
        search: z.ZodOptional<z.ZodString>;
        shouldCheckAvailability: z.ZodBoolean;
        shouldCheckStatus: z.ZodBoolean;
        stackVersion: z.ZodOptional<z.ZodString>;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        timerangeCount: z.ZodOptional<z.ZodNumber>;
        timerangeUnit: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.uptime.alerts.monitorStatus": "xpack.uptime.alerts.monitorStatus";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        certAgeThreshold: z.ZodOptional<z.ZodNumber>;
        certExpirationThreshold: z.ZodOptional<z.ZodNumber>;
        search: z.ZodOptional<z.ZodString>;
        stackVersion: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.uptime.alerts.tlsCertificate": "xpack.uptime.alerts.tlsCertificate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        monitorId: z.ZodString;
        severity: z.ZodNumber;
        stackVersion: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "xpack.uptime.alerts.durationAnomaly": "xpack.uptime.alerts.durationAnomaly";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        alertOnNoData: z.ZodOptional<z.ZodBoolean>;
        criteria: z.ZodArray<z.ZodObject<{
            comparator: z.ZodString;
            customMetric: z.ZodOptional<z.ZodObject<{
                aggregation: z.ZodString;
                field: z.ZodString;
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                type: z.ZodEnum<{
                    custom: "custom";
                }>;
            }, z.core.$strip>>;
            metric: z.ZodString;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        filterQuery: z.ZodOptional<z.ZodString>;
        nodeType: z.ZodString;
        schema: z.ZodOptional<z.ZodString>;
        sourceId: z.ZodString;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        "metrics.alert.inventory.threshold": "metrics.alert.inventory.threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        alertOnGroupDisappear: z.ZodOptional<z.ZodBoolean>;
        alertOnNoData: z.ZodOptional<z.ZodBoolean>;
        criteria: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            aggType: z.ZodEnum<{
                count: "count";
            }>;
            comparator: z.ZodString;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            aggType: z.ZodString;
            comparator: z.ZodString;
            metric: z.ZodString;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            aggType: z.ZodEnum<{
                custom: "custom";
            }>;
            comparator: z.ZodString;
            customMetrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                aggType: z.ZodString;
                field: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggType: z.ZodEnum<{
                    count: "count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>]>>;
            equation: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
            warningComparator: z.ZodOptional<z.ZodString>;
            warningThreshold: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>]>>;
        filterQuery: z.ZodOptional<z.ZodString>;
        groupBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        sourceId: z.ZodString;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        "metrics.alert.threshold": "metrics.alert.threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        alertOnGroupDisappear: z.ZodOptional<z.ZodBoolean>;
        alertOnNoData: z.ZodOptional<z.ZodBoolean>;
        criteria: z.ZodArray<z.ZodObject<{
            aggType: z.ZodOptional<z.ZodEnum<{
                custom: "custom";
            }>>;
            comparator: z.ZodString;
            equation: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            metrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                aggType: z.ZodString;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggType: z.ZodEnum<{
                    count: "count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>]>>;
            threshold: z.ZodArray<z.ZodNumber>;
            timeSize: z.ZodNumber;
            timeUnit: z.ZodString;
        }, z.core.$strip>>;
        groupBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        noDataBehavior: z.ZodOptional<z.ZodEnum<{
            alertOnNoData: "alertOnNoData";
            recover: "recover";
            remainActive: "remainActive";
        }>>;
        searchConfiguration: z.ZodObject<{
            filter: z.ZodOptional<z.ZodArray<z.ZodObject<{
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                query: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
            }, z.core.$strip>>>;
            index: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                allowHidden: z.ZodOptional<z.ZodBoolean>;
                allowNoIndex: z.ZodOptional<z.ZodBoolean>;
                fieldAttrs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    customDescription: z.ZodOptional<z.ZodString>;
                    customLabel: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                fieldFormats: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    params: z.ZodNullable<z.ZodUnknown>;
                }, z.core.$strip>>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    aggregatable: z.ZodOptional<z.ZodBoolean>;
                    count: z.ZodOptional<z.ZodNumber>;
                    customDescription: z.ZodOptional<z.ZodString>;
                    customLabel: z.ZodOptional<z.ZodString>;
                    esTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    format: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        params: z.ZodNullable<z.ZodUnknown>;
                    }, z.core.$strip>>;
                    name: z.ZodString;
                    readFromDocValues: z.ZodOptional<z.ZodBoolean>;
                    runtimeField: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                        customDescription: z.ZodOptional<z.ZodString>;
                        customLabel: z.ZodOptional<z.ZodString>;
                        format: z.ZodOptional<z.ZodObject<{
                            id: z.ZodOptional<z.ZodString>;
                            params: z.ZodNullable<z.ZodUnknown>;
                        }, z.core.$strip>>;
                        popularity: z.ZodOptional<z.ZodNumber>;
                        script: z.ZodOptional<z.ZodObject<{
                            source: z.ZodString;
                        }, z.core.$strip>>;
                        type: z.ZodEnum<{
                            boolean: "boolean";
                            date: "date";
                            long: "long";
                            double: "double";
                            ip: "ip";
                            keyword: "keyword";
                            geo_point: "geo_point";
                        }>;
                    }, z.core.$strip>, z.ZodObject<{
                        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                            customDescription: z.ZodOptional<z.ZodString>;
                            customLabel: z.ZodOptional<z.ZodString>;
                            format: z.ZodOptional<z.ZodObject<{
                                id: z.ZodOptional<z.ZodString>;
                                params: z.ZodNullable<z.ZodUnknown>;
                            }, z.core.$strip>>;
                            popularity: z.ZodOptional<z.ZodNumber>;
                            type: z.ZodEnum<{
                                boolean: "boolean";
                                date: "date";
                                long: "long";
                                double: "double";
                                ip: "ip";
                                keyword: "keyword";
                                geo_point: "geo_point";
                            }>;
                        }, z.core.$strip>>>;
                        script: z.ZodOptional<z.ZodObject<{
                            source: z.ZodString;
                        }, z.core.$strip>>;
                        type: z.ZodEnum<{
                            composite: "composite";
                        }>;
                    }, z.core.$strip>]>>;
                    script: z.ZodOptional<z.ZodString>;
                    scripted: z.ZodOptional<z.ZodBoolean>;
                    searchable: z.ZodOptional<z.ZodBoolean>;
                    shortDotsEnable: z.ZodOptional<z.ZodBoolean>;
                    subType: z.ZodOptional<z.ZodObject<{
                        multi: z.ZodOptional<z.ZodObject<{
                            parent: z.ZodString;
                        }, z.core.$strip>>;
                        nested: z.ZodOptional<z.ZodObject<{
                            path: z.ZodString;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                id: z.ZodOptional<z.ZodString>;
                managed: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodOptional<z.ZodString>;
                namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
                runtimeFieldMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                    customDescription: z.ZodOptional<z.ZodString>;
                    customLabel: z.ZodOptional<z.ZodString>;
                    format: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        params: z.ZodNullable<z.ZodUnknown>;
                    }, z.core.$strip>>;
                    popularity: z.ZodOptional<z.ZodNumber>;
                    script: z.ZodOptional<z.ZodObject<{
                        source: z.ZodString;
                    }, z.core.$strip>>;
                    type: z.ZodEnum<{
                        boolean: "boolean";
                        date: "date";
                        long: "long";
                        double: "double";
                        ip: "ip";
                        keyword: "keyword";
                        geo_point: "geo_point";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        customDescription: z.ZodOptional<z.ZodString>;
                        customLabel: z.ZodOptional<z.ZodString>;
                        format: z.ZodOptional<z.ZodObject<{
                            id: z.ZodOptional<z.ZodString>;
                            params: z.ZodNullable<z.ZodUnknown>;
                        }, z.core.$strip>>;
                        popularity: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodEnum<{
                            boolean: "boolean";
                            date: "date";
                            long: "long";
                            double: "double";
                            ip: "ip";
                            keyword: "keyword";
                            geo_point: "geo_point";
                        }>;
                    }, z.core.$strip>>>;
                    script: z.ZodOptional<z.ZodObject<{
                        source: z.ZodString;
                    }, z.core.$strip>>;
                    type: z.ZodEnum<{
                        composite: "composite";
                    }>;
                }, z.core.$strip>]>>>;
                sourceFilters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    clientId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    value: z.ZodString;
                }, z.core.$strip>>>;
                timeFieldName: z.ZodOptional<z.ZodString>;
                title: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                typeMeta: z.ZodOptional<z.ZodObject<{}, z.core.$loose>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>;
            query: z.ZodObject<{
                language: z.ZodString;
                query: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$loose>;
    rule_type_id: z.ZodEnum<{
        "observability.rules.custom_threshold": "observability.rules.custom_threshold";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodUnion<readonly [z.ZodObject<{
        count: z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
        criteria: z.ZodArray<z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            field: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        }, z.core.$strip>>;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        logView: z.ZodObject<{
            logViewId: z.ZodString;
            type: z.ZodEnum<{
                "log-view-reference": "log-view-reference";
            }>;
        }, z.core.$strip>;
        timeSize: z.ZodNumber;
        timeUnit: z.ZodEnum<{
            h: "h";
            s: "s";
            m: "m";
            d: "d";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        count: z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
        criteria: z.ZodArray<z.ZodArray<z.ZodObject<{
            comparator: z.ZodEnum<{
                equals: "equals";
                "more than": "more than";
                "more than or equals": "more than or equals";
                "less than": "less than";
                "less than or equals": "less than or equals";
                "does not equal": "does not equal";
                matches: "matches";
                "does not match": "does not match";
                "matches phrase": "matches phrase";
                "does not match phrase": "does not match phrase";
            }>;
            field: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        }, z.core.$strip>>>;
        groupBy: z.ZodOptional<z.ZodArray<z.ZodString>>;
        logView: z.ZodObject<{
            logViewId: z.ZodString;
            type: z.ZodEnum<{
                "log-view-reference": "log-view-reference";
            }>;
        }, z.core.$strip>;
        timeSize: z.ZodNumber;
        timeUnit: z.ZodEnum<{
            h: "h";
            s: "s";
            m: "m";
            d: "d";
        }>;
    }, z.core.$strip>]>;
    rule_type_id: z.ZodEnum<{
        "logs.alert.document.count": "logs.alert.document.count";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodObject<{
        dependencies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            actionGroupsToSuppressOn: z.ZodArray<z.ZodString>;
            ruleId: z.ZodString;
        }, z.core.$strip>>>;
        sloId: z.ZodString;
        windows: z.ZodArray<z.ZodObject<{
            actionGroup: z.ZodString;
            burnRateThreshold: z.ZodNumber;
            id: z.ZodString;
            longWindow: z.ZodObject<{
                unit: z.ZodString;
                value: z.ZodNumber;
            }, z.core.$strip>;
            maxBurnRateThreshold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            shortWindow: z.ZodObject<{
                unit: z.ZodString;
                value: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    rule_type_id: z.ZodEnum<{
        "slo.rules.burnRate": "slo.rules.burnRate";
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>], "rule_type_id">, z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        use_alert_data_for_template: z.ZodOptional<z.ZodBoolean>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alert_delay: z.ZodOptional<z.ZodObject<{
        active: z.ZodNumber;
    }, z.core.$strip>>;
    artifacts: z.ZodOptional<z.ZodObject<{
        dashboards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        investigation_guide: z.ZodOptional<z.ZodObject<{
            blob: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    consumer: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    flapping: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        look_back_window: z.ZodNumber;
        status_change_threshold: z.ZodNumber;
    }, z.core.$strip>>>;
    name: z.ZodString;
    notify_when: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"onActionGroupChange">, z.ZodLiteral<"onActiveAlert">, z.ZodLiteral<"onThrottleInterval">, z.ZodLiteral<null>]>>>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    rule_type_id: z.ZodString;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    throttle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>]>;
export type PostAlertingRuleIdRequest = z.infer<typeof PostAlertingRuleIdRequest>;
//# sourceMappingURL=post_alerting_rule_id.d.ts.map