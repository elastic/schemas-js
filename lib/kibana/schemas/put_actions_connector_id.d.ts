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
export declare const xmatters_secrets: z.ZodObject<{
    password: z.ZodOptional<z.ZodString>;
    secretsUrl: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type xmatters_secrets = z.infer<typeof xmatters_secrets>;
export declare const pfx: z.ZodString;
export type pfx = z.infer<typeof pfx>;
export declare const key: z.ZodString;
export type key = z.infer<typeof key>;
export declare const crt: z.ZodString;
export type crt = z.infer<typeof crt>;
export declare const torq_secrets: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export type torq_secrets = z.infer<typeof torq_secrets>;
export declare const tines_secrets: z.ZodObject<{
    email: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>;
export type tines_secrets = z.infer<typeof tines_secrets>;
export declare const thehive_secrets: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type thehive_secrets = z.infer<typeof thehive_secrets>;
export declare const swimlane_secrets: z.ZodObject<{
    apiToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type swimlane_secrets = z.infer<typeof swimlane_secrets>;
export declare const slack_api_secrets: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export type slack_api_secrets = z.infer<typeof slack_api_secrets>;
export declare const servicenow_secrets: z.ZodObject<{
    clientSecret: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    privateKey: z.ZodOptional<z.ZodString>;
    privateKeyPassword: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type servicenow_secrets = z.infer<typeof servicenow_secrets>;
export declare const sentinelone_secrets: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export type sentinelone_secrets = z.infer<typeof sentinelone_secrets>;
export declare const pagerduty_secrets: z.ZodObject<{
    routingKey: z.ZodString;
}, z.core.$strip>;
export type pagerduty_secrets = z.infer<typeof pagerduty_secrets>;
export declare const opsgenie_secrets: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type opsgenie_secrets = z.infer<typeof opsgenie_secrets>;
export declare const genai_secrets: z.ZodObject<{
    apiKey: z.ZodOptional<z.ZodString>;
    certificateData: z.ZodOptional<z.ZodString>;
    privateKeyData: z.ZodOptional<z.ZodString>;
    caData: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type genai_secrets = z.infer<typeof genai_secrets>;
export declare const teams_secrets: z.ZodObject<{
    webhookUrl: z.ZodString;
}, z.core.$strip>;
export type teams_secrets = z.infer<typeof teams_secrets>;
export declare const jira_secrets: z.ZodObject<{
    apiToken: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export type jira_secrets = z.infer<typeof jira_secrets>;
export declare const resilient_secrets: z.ZodObject<{
    apiKeyId: z.ZodString;
    apiKeySecret: z.ZodString;
}, z.core.$strip>;
export type resilient_secrets = z.infer<typeof resilient_secrets>;
export declare const gemini_secrets: z.ZodObject<{
    credentialsJson: z.ZodString;
}, z.core.$strip>;
export type gemini_secrets = z.infer<typeof gemini_secrets>;
export declare const email_secrets: z.ZodObject<{
    clientSecret: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type email_secrets = z.infer<typeof email_secrets>;
export declare const d3security_secrets: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export type d3security_secrets = z.infer<typeof d3security_secrets>;
export declare const crowdstrike_secrets: z.ZodObject<{
    clientId: z.ZodString;
    clientSecret: z.ZodString;
}, z.core.$strip>;
export type crowdstrike_secrets = z.infer<typeof crowdstrike_secrets>;
export declare const bedrock_secrets: z.ZodObject<{
    accessKey: z.ZodString;
    secret: z.ZodString;
}, z.core.$strip>;
export type bedrock_secrets = z.infer<typeof bedrock_secrets>;
export declare const xmatters_config: z.ZodObject<{
    configUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    usesBasic: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type xmatters_config = z.infer<typeof xmatters_config>;
export declare const verification_mode: z.ZodEnum<{
    none: "none";
    full: "full";
    certificate: "certificate";
}>;
export type verification_mode = z.infer<typeof verification_mode>;
export declare const has_auth: z.ZodBoolean;
export type has_auth = z.infer<typeof has_auth>;
export declare const cert_type: z.ZodEnum<{
    "ssl-crt-key": "ssl-crt-key";
    "ssl-pfx": "ssl-pfx";
}>;
export type cert_type = z.infer<typeof cert_type>;
export declare const ca: z.ZodString;
export type ca = z.infer<typeof ca>;
export declare const auth_type: z.ZodNullable<z.ZodEnum<{
    "webhook-authentication-basic": "webhook-authentication-basic";
    "webhook-authentication-ssl": "webhook-authentication-ssl";
}>>;
export type auth_type = z.infer<typeof auth_type>;
export declare const torq_config: z.ZodObject<{
    webhookIntegrationUrl: z.ZodString;
}, z.core.$strip>;
export type torq_config = z.infer<typeof torq_config>;
export declare const tines_config: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
export type tines_config = z.infer<typeof tines_config>;
export declare const thehive_config: z.ZodObject<{
    organisation: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
}, z.core.$strip>;
export type thehive_config = z.infer<typeof thehive_config>;
export declare const swimlane_config: z.ZodObject<{
    apiUrl: z.ZodString;
    appId: z.ZodString;
    connectorType: z.ZodEnum<{
        all: "all";
        alerts: "alerts";
        cases: "cases";
    }>;
    mappings: z.ZodOptional<z.ZodObject<{
        alertIdConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        caseIdConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        caseNameConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        commentsConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        descriptionConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        ruleNameConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        severityConfig: z.ZodOptional<z.ZodObject<{
            fieldType: z.ZodString;
            id: z.ZodString;
            key: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type swimlane_config = z.infer<typeof swimlane_config>;
export declare const slack_api_config: z.ZodObject<{
    allowedChannels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type slack_api_config = z.infer<typeof slack_api_config>;
export declare const servicenow_itom_config: z.ZodObject<{
    apiUrl: z.ZodString;
    clientId: z.ZodOptional<z.ZodString>;
    isOAuth: z.ZodOptional<z.ZodBoolean>;
    jwtKeyId: z.ZodOptional<z.ZodString>;
    userIdentifierValue: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type servicenow_itom_config = z.infer<typeof servicenow_itom_config>;
export declare const servicenow_config: z.ZodObject<{
    apiUrl: z.ZodString;
    clientId: z.ZodOptional<z.ZodString>;
    isOAuth: z.ZodOptional<z.ZodBoolean>;
    jwtKeyId: z.ZodOptional<z.ZodString>;
    userIdentifierValue: z.ZodOptional<z.ZodString>;
    usesTableApi: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type servicenow_config = z.infer<typeof servicenow_config>;
export declare const sentinelone_config: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
export type sentinelone_config = z.infer<typeof sentinelone_config>;
export declare const pagerduty_config: z.ZodObject<{
    apiUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type pagerduty_config = z.infer<typeof pagerduty_config>;
export declare const opsgenie_config: z.ZodObject<{
    apiUrl: z.ZodString;
}, z.core.$strip>;
export type opsgenie_config = z.infer<typeof opsgenie_config>;
export declare const genai_openai_config: z.ZodObject<{
    apiProvider: z.ZodEnum<{
        OpenAI: "OpenAI";
    }>;
    apiUrl: z.ZodString;
    defaultModel: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type genai_openai_config = z.infer<typeof genai_openai_config>;
export declare const genai_azure_config: z.ZodObject<{
    apiProvider: z.ZodEnum<{
        "Azure OpenAI": "Azure OpenAI";
    }>;
    apiUrl: z.ZodString;
}, z.core.$strip>;
export type genai_azure_config = z.infer<typeof genai_azure_config>;
export declare const defender_config: z.ZodObject<{
    apiUrl: z.ZodString;
    clientId: z.ZodOptional<z.ZodString>;
    oAuthScope: z.ZodOptional<z.ZodString>;
    oAuthServerUrl: z.ZodOptional<z.ZodString>;
    tenantId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type defender_config = z.infer<typeof defender_config>;
export declare const jira_config: z.ZodObject<{
    apiUrl: z.ZodString;
    projectKey: z.ZodString;
}, z.core.$strip>;
export type jira_config = z.infer<typeof jira_config>;
export declare const index_config: z.ZodObject<{
    executionTimeField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    index: z.ZodString;
    refresh: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type index_config = z.infer<typeof index_config>;
export declare const resilient_config: z.ZodObject<{
    apiUrl: z.ZodString;
    orgId: z.ZodString;
}, z.core.$strip>;
export type resilient_config = z.infer<typeof resilient_config>;
export declare const gemini_config: z.ZodObject<{
    apiUrl: z.ZodString;
    defaultModel: z.ZodOptional<z.ZodString>;
    gcpRegion: z.ZodString;
    gcpProjectID: z.ZodString;
}, z.core.$strip>;
export type gemini_config = z.infer<typeof gemini_config>;
export declare const email_config: z.ZodObject<{
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    from: z.ZodString;
    hasAuth: z.ZodOptional<z.ZodBoolean>;
    host: z.ZodOptional<z.ZodString>;
    oauthTokenUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    port: z.ZodOptional<z.ZodNumber>;
    secure: z.ZodOptional<z.ZodBoolean>;
    service: z.ZodOptional<z.ZodEnum<{
        other: "other";
        elastic_cloud: "elastic_cloud";
        exchange_server: "exchange_server";
        gmail: "gmail";
        outlook365: "outlook365";
        ses: "ses";
    }>>;
    tenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type email_config = z.infer<typeof email_config>;
export declare const d3security_config: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
export type d3security_config = z.infer<typeof d3security_config>;
export declare const crowdstrike_config: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
export type crowdstrike_config = z.infer<typeof crowdstrike_config>;
export declare const bedrock_config: z.ZodObject<{
    apiUrl: z.ZodString;
    region: z.ZodOptional<z.ZodString>;
    defaultModel: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type bedrock_config = z.infer<typeof bedrock_config>;
export declare const cases_webhook_secrets: z.ZodObject<{
    crt: z.ZodOptional<z.ZodString>;
    key: z.ZodOptional<z.ZodString>;
    pfx: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type cases_webhook_secrets = z.infer<typeof cases_webhook_secrets>;
export declare const webhook_secrets: z.ZodObject<{
    crt: z.ZodOptional<z.ZodString>;
    key: z.ZodOptional<z.ZodString>;
    pfx: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type webhook_secrets = z.infer<typeof webhook_secrets>;
export declare const cases_webhook_config: z.ZodObject<{
    authType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "webhook-authentication-basic": "webhook-authentication-basic";
        "webhook-authentication-ssl": "webhook-authentication-ssl";
    }>>>;
    ca: z.ZodOptional<z.ZodString>;
    certType: z.ZodOptional<z.ZodEnum<{
        "ssl-crt-key": "ssl-crt-key";
        "ssl-pfx": "ssl-pfx";
    }>>;
    createCommentJson: z.ZodOptional<z.ZodString>;
    createCommentMethod: z.ZodOptional<z.ZodEnum<{
        post: "post";
        put: "put";
        patch: "patch";
    }>>;
    createCommentUrl: z.ZodOptional<z.ZodString>;
    createIncidentJson: z.ZodString;
    createIncidentMethod: z.ZodOptional<z.ZodEnum<{
        post: "post";
        put: "put";
        patch: "patch";
    }>>;
    createIncidentResponseKey: z.ZodString;
    createIncidentUrl: z.ZodString;
    getIncidentResponseExternalTitleKey: z.ZodString;
    getIncidentUrl: z.ZodString;
    hasAuth: z.ZodOptional<z.ZodBoolean>;
    headers: z.ZodOptional<z.ZodString>;
    updateIncidentJson: z.ZodString;
    updateIncidentMethod: z.ZodOptional<z.ZodEnum<{
        post: "post";
        put: "put";
        patch: "patch";
    }>>;
    updateIncidentUrl: z.ZodString;
    verificationMode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        full: "full";
        certificate: "certificate";
    }>>;
    viewIncidentUrl: z.ZodString;
}, z.core.$strip>;
export type cases_webhook_config = z.infer<typeof cases_webhook_config>;
export declare const webhook_config: z.ZodObject<{
    authType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "webhook-authentication-basic": "webhook-authentication-basic";
        "webhook-authentication-ssl": "webhook-authentication-ssl";
    }>>>;
    ca: z.ZodOptional<z.ZodString>;
    certType: z.ZodOptional<z.ZodEnum<{
        "ssl-crt-key": "ssl-crt-key";
        "ssl-pfx": "ssl-pfx";
    }>>;
    hasAuth: z.ZodOptional<z.ZodBoolean>;
    headers: z.ZodOptional<z.ZodNullable<z.ZodObject<{}, z.core.$strip>>>;
    method: z.ZodOptional<z.ZodEnum<{
        post: "post";
        put: "put";
    }>>;
    url: z.ZodOptional<z.ZodString>;
    verificationMode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        full: "full";
        certificate: "certificate";
    }>>;
}, z.core.$strip>;
export type webhook_config = z.infer<typeof webhook_config>;
export declare const Kibana_HTTP_APIs_update_connector: z.ZodObject<{
    name: z.ZodString;
    config: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        apiUrl: z.ZodString;
        region: z.ZodOptional<z.ZodString>;
        defaultModel: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        from: z.ZodString;
        hasAuth: z.ZodOptional<z.ZodBoolean>;
        host: z.ZodOptional<z.ZodString>;
        oauthTokenUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        port: z.ZodOptional<z.ZodNumber>;
        secure: z.ZodOptional<z.ZodBoolean>;
        service: z.ZodOptional<z.ZodEnum<{
            other: "other";
            elastic_cloud: "elastic_cloud";
            exchange_server: "exchange_server";
            gmail: "gmail";
            outlook365: "outlook365";
            ses: "ses";
        }>>;
        tenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        defaultModel: z.ZodOptional<z.ZodString>;
        gcpRegion: z.ZodString;
        gcpProjectID: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        orgId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        executionTimeField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        index: z.ZodString;
        refresh: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        projectKey: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        clientId: z.ZodOptional<z.ZodString>;
        oAuthScope: z.ZodOptional<z.ZodString>;
        oAuthServerUrl: z.ZodOptional<z.ZodString>;
        tenantId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        apiProvider: z.ZodEnum<{
            "Azure OpenAI": "Azure OpenAI";
        }>;
        apiUrl: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiProvider: z.ZodEnum<{
            OpenAI: "OpenAI";
        }>;
        apiUrl: z.ZodString;
        defaultModel: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        clientId: z.ZodOptional<z.ZodString>;
        isOAuth: z.ZodOptional<z.ZodBoolean>;
        jwtKeyId: z.ZodOptional<z.ZodString>;
        userIdentifierValue: z.ZodOptional<z.ZodString>;
        usesTableApi: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        clientId: z.ZodOptional<z.ZodString>;
        isOAuth: z.ZodOptional<z.ZodBoolean>;
        jwtKeyId: z.ZodOptional<z.ZodString>;
        userIdentifierValue: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        allowedChannels: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>, z.ZodObject<{
        apiUrl: z.ZodString;
        appId: z.ZodString;
        connectorType: z.ZodEnum<{
            all: "all";
            alerts: "alerts";
            cases: "cases";
        }>;
        mappings: z.ZodOptional<z.ZodObject<{
            alertIdConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            caseIdConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            caseNameConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            commentsConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            descriptionConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            ruleNameConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
            severityConfig: z.ZodOptional<z.ZodObject<{
                fieldType: z.ZodString;
                id: z.ZodString;
                key: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        organisation: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        webhookIntegrationUrl: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        authType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "webhook-authentication-basic": "webhook-authentication-basic";
            "webhook-authentication-ssl": "webhook-authentication-ssl";
        }>>>;
        ca: z.ZodOptional<z.ZodString>;
        certType: z.ZodOptional<z.ZodEnum<{
            "ssl-crt-key": "ssl-crt-key";
            "ssl-pfx": "ssl-pfx";
        }>>;
        hasAuth: z.ZodOptional<z.ZodBoolean>;
        headers: z.ZodOptional<z.ZodNullable<z.ZodObject<{}, z.core.$strip>>>;
        method: z.ZodOptional<z.ZodEnum<{
            post: "post";
            put: "put";
        }>>;
        url: z.ZodOptional<z.ZodString>;
        verificationMode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        authType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "webhook-authentication-basic": "webhook-authentication-basic";
            "webhook-authentication-ssl": "webhook-authentication-ssl";
        }>>>;
        ca: z.ZodOptional<z.ZodString>;
        certType: z.ZodOptional<z.ZodEnum<{
            "ssl-crt-key": "ssl-crt-key";
            "ssl-pfx": "ssl-pfx";
        }>>;
        createCommentJson: z.ZodOptional<z.ZodString>;
        createCommentMethod: z.ZodOptional<z.ZodEnum<{
            post: "post";
            put: "put";
            patch: "patch";
        }>>;
        createCommentUrl: z.ZodOptional<z.ZodString>;
        createIncidentJson: z.ZodString;
        createIncidentMethod: z.ZodOptional<z.ZodEnum<{
            post: "post";
            put: "put";
            patch: "patch";
        }>>;
        createIncidentResponseKey: z.ZodString;
        createIncidentUrl: z.ZodString;
        getIncidentResponseExternalTitleKey: z.ZodString;
        getIncidentUrl: z.ZodString;
        hasAuth: z.ZodOptional<z.ZodBoolean>;
        headers: z.ZodOptional<z.ZodString>;
        updateIncidentJson: z.ZodString;
        updateIncidentMethod: z.ZodOptional<z.ZodEnum<{
            post: "post";
            put: "put";
            patch: "patch";
        }>>;
        updateIncidentUrl: z.ZodString;
        verificationMode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            full: "full";
            certificate: "certificate";
        }>>;
        viewIncidentUrl: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        configUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        usesBasic: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>]>>;
    secrets: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        accessKey: z.ZodString;
        secret: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        clientId: z.ZodString;
        clientSecret: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        token: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        clientSecret: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        credentialsJson: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiKeyId: z.ZodString;
        apiKeySecret: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiToken: z.ZodString;
        email: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        webhookUrl: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
        certificateData: z.ZodOptional<z.ZodString>;
        privateKeyData: z.ZodOptional<z.ZodString>;
        caData: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        routingKey: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        token: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        clientSecret: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        privateKey: z.ZodOptional<z.ZodString>;
        privateKeyPassword: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        token: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        apiToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        email: z.ZodString;
        token: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        token: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        crt: z.ZodOptional<z.ZodString>;
        key: z.ZodOptional<z.ZodString>;
        pfx: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        crt: z.ZodOptional<z.ZodString>;
        key: z.ZodOptional<z.ZodString>;
        pfx: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        password: z.ZodOptional<z.ZodString>;
        secretsUrl: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_update_connector = z.infer<typeof Kibana_HTTP_APIs_update_connector>;
//# sourceMappingURL=put_actions_connector_id.d.ts.map