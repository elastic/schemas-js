import { z } from 'zod';
export declare const Kibana_HTTP_APIs_connector_response: z.ZodObject<{
    auth_mode: z.ZodOptional<z.ZodEnum<{
        shared: "shared";
        "per-user": "per-user";
    }>>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    connector_type_id: z.ZodString;
    id: z.ZodString;
    is_connector_type_deprecated: z.ZodBoolean;
    is_deprecated: z.ZodBoolean;
    is_missing_secrets: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodBoolean;
    is_system_action: z.ZodBoolean;
    name: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_connector_response = z.infer<typeof Kibana_HTTP_APIs_connector_response>;
export declare const run_validchannelid: z.ZodObject<{
    subAction: z.ZodEnum<{
        validChannelId: "validChannelId";
    }>;
    subActionParams: z.ZodObject<{
        channelId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_validchannelid = z.infer<typeof run_validchannelid>;
export declare const run_pushtoservice: z.ZodObject<{
    subAction: z.ZodEnum<{
        pushToService: "pushToService";
    }>;
    subActionParams: z.ZodObject<{
        comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            comment: z.ZodOptional<z.ZodString>;
            commentId: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        incident: z.ZodOptional<z.ZodObject<{
            additional_fields: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alertId: z.ZodOptional<z.ZodString>;
            caseId: z.ZodOptional<z.ZodString>;
            caseName: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            correlation_display: z.ZodOptional<z.ZodString>;
            correlation_id: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            dest_ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            externalId: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            impact: z.ZodOptional<z.ZodString>;
            issueType: z.ZodOptional<z.ZodNumber>;
            labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
            malware_hash: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            malware_url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            otherFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            parent: z.ZodOptional<z.ZodString>;
            priority: z.ZodOptional<z.ZodString>;
            ruleName: z.ZodOptional<z.ZodString>;
            severity: z.ZodOptional<z.ZodNumber>;
            short_description: z.ZodOptional<z.ZodString>;
            source_ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            status: z.ZodOptional<z.ZodString>;
            subcategory: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            title: z.ZodOptional<z.ZodString>;
            tlp: z.ZodOptional<z.ZodNumber>;
            urgency: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_pushtoservice = z.infer<typeof run_pushtoservice>;
export declare const run_postmessage: z.ZodObject<{
    subAction: z.ZodEnum<{
        postMessage: "postMessage";
    }>;
    subActionParams: z.ZodObject<{
        channelIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        channels: z.ZodOptional<z.ZodArray<z.ZodString>>;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_postmessage = z.infer<typeof run_postmessage>;
export declare const run_issuetypes: z.ZodObject<{
    subAction: z.ZodEnum<{
        issueTypes: "issueTypes";
    }>;
}, z.core.$strip>;
export type run_issuetypes = z.infer<typeof run_issuetypes>;
export declare const run_issues: z.ZodObject<{
    subAction: z.ZodEnum<{
        issues: "issues";
    }>;
    subActionParams: z.ZodObject<{
        title: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_issues = z.infer<typeof run_issues>;
export declare const run_issue: z.ZodObject<{
    subAction: z.ZodEnum<{
        issue: "issue";
    }>;
    subActionParams: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type run_issue = z.infer<typeof run_issue>;
export declare const run_getincident: z.ZodObject<{
    subAction: z.ZodEnum<{
        getIncident: "getIncident";
    }>;
    subActionParams: z.ZodObject<{
        externalId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_getincident = z.infer<typeof run_getincident>;
export declare const run_getfields: z.ZodObject<{
    subAction: z.ZodEnum<{
        getFields: "getFields";
    }>;
}, z.core.$strip>;
export type run_getfields = z.infer<typeof run_getfields>;
export declare const run_getchoices: z.ZodObject<{
    subAction: z.ZodEnum<{
        getChoices: "getChoices";
    }>;
    subActionParams: z.ZodObject<{
        fields: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_getchoices = z.infer<typeof run_getchoices>;
export declare const run_getagents: z.ZodObject<{
    subAction: z.ZodEnum<{
        getAgents: "getAgents";
    }>;
}, z.core.$strip>;
export type run_getagents = z.infer<typeof run_getagents>;
export declare const run_getagentdetails: z.ZodObject<{
    subAction: z.ZodEnum<{
        getAgentDetails: "getAgentDetails";
    }>;
    subActionParams: z.ZodObject<{
        ids: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_getagentdetails = z.infer<typeof run_getagentdetails>;
export declare const run_fieldsbyissuetype: z.ZodObject<{
    subAction: z.ZodEnum<{
        fieldsByIssueType: "fieldsByIssueType";
    }>;
    subActionParams: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_fieldsbyissuetype = z.infer<typeof run_fieldsbyissuetype>;
export declare const run_createalert: z.ZodObject<{
    subAction: z.ZodEnum<{
        createAlert: "createAlert";
    }>;
    subActionParams: z.ZodObject<{
        actions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        alias: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entity: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
        note: z.ZodOptional<z.ZodString>;
        priority: z.ZodOptional<z.ZodEnum<{
            P1: "P1";
            P2: "P2";
            P3: "P3";
            P4: "P4";
            P5: "P5";
        }>>;
        responders: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<{
                user: "user";
                schedule: "schedule";
                escalation: "escalation";
                team: "team";
            }>>;
            username: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        severity: z.ZodOptional<z.ZodNumber>;
        source: z.ZodOptional<z.ZodString>;
        sourceRef: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        title: z.ZodOptional<z.ZodString>;
        tlp: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
        visibleTo: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<{
                user: "user";
                team: "team";
            }>;
            username: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_createalert = z.infer<typeof run_createalert>;
export declare const run_closeincident: z.ZodObject<{
    subAction: z.ZodEnum<{
        closeIncident: "closeIncident";
    }>;
    subActionParams: z.ZodObject<{
        incident: z.ZodUnion<readonly [z.ZodUnknown, z.ZodUnknown]>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_closeincident = z.infer<typeof run_closeincident>;
export declare const run_closealert: z.ZodObject<{
    subAction: z.ZodEnum<{
        closeAlert: "closeAlert";
    }>;
    subActionParams: z.ZodObject<{
        alias: z.ZodString;
        note: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type run_closealert = z.infer<typeof run_closealert>;
export declare const run_addevent: z.ZodObject<{
    subAction: z.ZodEnum<{
        addEvent: "addEvent";
    }>;
    subActionParams: z.ZodOptional<z.ZodObject<{
        additional_info: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        event_class: z.ZodOptional<z.ZodString>;
        message_key: z.ZodOptional<z.ZodString>;
        metric_name: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
        resource: z.ZodOptional<z.ZodString>;
        severity: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        time_of_event: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type run_addevent = z.infer<typeof run_addevent>;
export declare const run_trigger_pagerduty: z.ZodObject<{
    class: z.ZodOptional<z.ZodString>;
    component: z.ZodOptional<z.ZodString>;
    customDetails: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    dedupKey: z.ZodOptional<z.ZodString>;
    eventAction: z.ZodEnum<{
        trigger: "trigger";
    }>;
    group: z.ZodOptional<z.ZodString>;
    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
        href: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    severity: z.ZodOptional<z.ZodEnum<{
        info: "info";
        error: "error";
        warning: "warning";
        critical: "critical";
    }>>;
    source: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type run_trigger_pagerduty = z.infer<typeof run_trigger_pagerduty>;
export declare const run_message_slack: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export type run_message_slack = z.infer<typeof run_message_slack>;
export declare const run_message_serverlog: z.ZodObject<{
    level: z.ZodOptional<z.ZodEnum<{
        info: "info";
        warn: "warn";
        debug: "debug";
        trace: "trace";
        error: "error";
        fatal: "fatal";
    }>>;
    message: z.ZodString;
}, z.core.$strip>;
export type run_message_serverlog = z.infer<typeof run_message_serverlog>;
export declare const run_message_email: z.ZodObject<{
    bcc: z.ZodOptional<z.ZodArray<z.ZodString>>;
    cc: z.ZodOptional<z.ZodArray<z.ZodString>>;
    message: z.ZodString;
    subject: z.ZodString;
    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type run_message_email = z.infer<typeof run_message_email>;
export declare const run_documents: z.ZodObject<{
    documents: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type run_documents = z.infer<typeof run_documents>;
export declare const run_acknowledge_resolve_pagerduty: z.ZodObject<{
    dedupKey: z.ZodString;
    eventAction: z.ZodEnum<{
        acknowledge: "acknowledge";
        resolve: "resolve";
    }>;
}, z.core.$strip>;
export type run_acknowledge_resolve_pagerduty = z.infer<typeof run_acknowledge_resolve_pagerduty>;
export declare const Kibana_HTTP_APIs_connector_execute_request: z.ZodObject<{
    params: z.ZodUnion<readonly [z.ZodObject<{
        dedupKey: z.ZodString;
        eventAction: z.ZodEnum<{
            acknowledge: "acknowledge";
            resolve: "resolve";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        documents: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>, z.ZodObject<{
        bcc: z.ZodOptional<z.ZodArray<z.ZodString>>;
        cc: z.ZodOptional<z.ZodArray<z.ZodString>>;
        message: z.ZodString;
        subject: z.ZodString;
        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        level: z.ZodOptional<z.ZodEnum<{
            info: "info";
            warn: "warn";
            debug: "debug";
            trace: "trace";
            error: "error";
            fatal: "fatal";
        }>>;
        message: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        message: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        class: z.ZodOptional<z.ZodString>;
        component: z.ZodOptional<z.ZodString>;
        customDetails: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        dedupKey: z.ZodOptional<z.ZodString>;
        eventAction: z.ZodEnum<{
            trigger: "trigger";
        }>;
        group: z.ZodOptional<z.ZodString>;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            href: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        severity: z.ZodOptional<z.ZodEnum<{
            info: "info";
            error: "error";
            warning: "warning";
            critical: "critical";
        }>>;
        source: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            addEvent: "addEvent";
        }>;
        subActionParams: z.ZodOptional<z.ZodObject<{
            additional_info: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            event_class: z.ZodOptional<z.ZodString>;
            message_key: z.ZodOptional<z.ZodString>;
            metric_name: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
            resource: z.ZodOptional<z.ZodString>;
            severity: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            time_of_event: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            closeAlert: "closeAlert";
        }>;
        subActionParams: z.ZodObject<{
            alias: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            user: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            closeIncident: "closeIncident";
        }>;
        subActionParams: z.ZodObject<{
            incident: z.ZodUnion<readonly [z.ZodUnknown, z.ZodUnknown]>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            createAlert: "createAlert";
        }>;
        subActionParams: z.ZodObject<{
            actions: z.ZodOptional<z.ZodArray<z.ZodString>>;
            alias: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entity: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            note: z.ZodOptional<z.ZodString>;
            priority: z.ZodOptional<z.ZodEnum<{
                P1: "P1";
                P2: "P2";
                P3: "P3";
                P4: "P4";
                P5: "P5";
            }>>;
            responders: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodEnum<{
                    user: "user";
                    schedule: "schedule";
                    escalation: "escalation";
                    team: "team";
                }>>;
                username: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            severity: z.ZodOptional<z.ZodNumber>;
            source: z.ZodOptional<z.ZodString>;
            sourceRef: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            title: z.ZodOptional<z.ZodString>;
            tlp: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
            user: z.ZodOptional<z.ZodString>;
            visibleTo: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                type: z.ZodEnum<{
                    user: "user";
                    team: "team";
                }>;
                username: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            fieldsByIssueType: "fieldsByIssueType";
        }>;
        subActionParams: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            getAgentDetails: "getAgentDetails";
        }>;
        subActionParams: z.ZodObject<{
            ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            getAgents: "getAgents";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            getChoices: "getChoices";
        }>;
        subActionParams: z.ZodObject<{
            fields: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            getFields: "getFields";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            getIncident: "getIncident";
        }>;
        subActionParams: z.ZodObject<{
            externalId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            issue: "issue";
        }>;
        subActionParams: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            issues: "issues";
        }>;
        subActionParams: z.ZodObject<{
            title: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            issueTypes: "issueTypes";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            postMessage: "postMessage";
        }>;
        subActionParams: z.ZodObject<{
            channelIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString>>;
            text: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            pushToService: "pushToService";
        }>;
        subActionParams: z.ZodObject<{
            comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                comment: z.ZodOptional<z.ZodString>;
                commentId: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            incident: z.ZodOptional<z.ZodObject<{
                additional_fields: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alertId: z.ZodOptional<z.ZodString>;
                caseId: z.ZodOptional<z.ZodString>;
                caseName: z.ZodOptional<z.ZodString>;
                category: z.ZodOptional<z.ZodString>;
                correlation_display: z.ZodOptional<z.ZodString>;
                correlation_id: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                dest_ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                externalId: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                impact: z.ZodOptional<z.ZodString>;
                issueType: z.ZodOptional<z.ZodNumber>;
                labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
                malware_hash: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                malware_url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                otherFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                parent: z.ZodOptional<z.ZodString>;
                priority: z.ZodOptional<z.ZodString>;
                ruleName: z.ZodOptional<z.ZodString>;
                severity: z.ZodOptional<z.ZodNumber>;
                short_description: z.ZodOptional<z.ZodString>;
                source_ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                status: z.ZodOptional<z.ZodString>;
                subcategory: z.ZodOptional<z.ZodString>;
                summary: z.ZodOptional<z.ZodString>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                title: z.ZodOptional<z.ZodString>;
                tlp: z.ZodOptional<z.ZodNumber>;
                urgency: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        subAction: z.ZodEnum<{
            validChannelId: "validChannelId";
        }>;
        subActionParams: z.ZodObject<{
            channelId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_connector_execute_request = z.infer<typeof Kibana_HTTP_APIs_connector_execute_request>;
//# sourceMappingURL=post_actions_connector_id_execute.d.ts.map