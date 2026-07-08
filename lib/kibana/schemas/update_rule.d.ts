import { z } from 'zod';
export declare const Security_Detections_API_RuleQuery: z.ZodString;
export type Security_Detections_API_RuleQuery = z.infer<typeof Security_Detections_API_RuleQuery>;
export declare const Security_Detections_API_EsqlQueryLanguage: z.ZodEnum<{
    esql: "esql";
}>;
export type Security_Detections_API_EsqlQueryLanguage = z.infer<typeof Security_Detections_API_EsqlQueryLanguage>;
export declare const Security_Detections_API_AlertSuppressionMissingFieldsStrategy: z.ZodEnum<{
    doNotSuppress: "doNotSuppress";
    suppress: "suppress";
}>;
export type Security_Detections_API_AlertSuppressionMissingFieldsStrategy = z.infer<typeof Security_Detections_API_AlertSuppressionMissingFieldsStrategy>;
export declare const Security_Detections_API_AlertSuppressionGroupBy: z.ZodArray<z.ZodString>;
export type Security_Detections_API_AlertSuppressionGroupBy = z.infer<typeof Security_Detections_API_AlertSuppressionGroupBy>;
export declare const Security_Detections_API_AlertSuppressionDurationUnit: z.ZodEnum<{
    h: "h";
    s: "s";
    m: "m";
}>;
export type Security_Detections_API_AlertSuppressionDurationUnit = z.infer<typeof Security_Detections_API_AlertSuppressionDurationUnit>;
export declare const Security_Detections_API_InternalRuleSource: z.ZodObject<{
    type: z.ZodEnum<{
        internal: "internal";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_InternalRuleSource = z.infer<typeof Security_Detections_API_InternalRuleSource>;
export declare const Security_Detections_API_IsExternalRuleCustomized: z.ZodBoolean;
export type Security_Detections_API_IsExternalRuleCustomized = z.infer<typeof Security_Detections_API_IsExternalRuleCustomized>;
export declare const Security_Detections_API_ExternalRuleHasBaseVersion: z.ZodBoolean;
export type Security_Detections_API_ExternalRuleHasBaseVersion = z.infer<typeof Security_Detections_API_ExternalRuleHasBaseVersion>;
export declare const Security_Detections_API_ExternalRuleCustomizedFields: z.ZodArray<z.ZodObject<{
    field_name: z.ZodString;
}, z.core.$strip>>;
export type Security_Detections_API_ExternalRuleCustomizedFields = z.infer<typeof Security_Detections_API_ExternalRuleCustomizedFields>;
export declare const Security_Detections_API_RuleSignatureId: z.ZodString;
export type Security_Detections_API_RuleSignatureId = z.infer<typeof Security_Detections_API_RuleSignatureId>;
export declare const Security_Detections_API_RuleRevision: z.ZodNumber;
export type Security_Detections_API_RuleRevision = z.infer<typeof Security_Detections_API_RuleRevision>;
export declare const Security_Detections_API_RequiredField: z.ZodObject<{
    ecs: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_RequiredField = z.infer<typeof Security_Detections_API_RequiredField>;
export declare const Security_Detections_API_IsRuleImmutable: z.ZodBoolean;
export type Security_Detections_API_IsRuleImmutable = z.infer<typeof Security_Detections_API_IsRuleImmutable>;
export declare const Security_Detections_API_UUID: z.ZodString;
export type Security_Detections_API_UUID = z.infer<typeof Security_Detections_API_UUID>;
export declare const Security_Detections_API_RuleExecutionStatusOrder: z.ZodNumber;
export type Security_Detections_API_RuleExecutionStatusOrder = z.infer<typeof Security_Detections_API_RuleExecutionStatusOrder>;
export declare const Security_Detections_API_RuleExecutionStatus: z.ZodEnum<{
    failed: "failed";
    "going to run": "going to run";
    running: "running";
    "partial failure": "partial failure";
    succeeded: "succeeded";
}>;
export type Security_Detections_API_RuleExecutionStatus = z.infer<typeof Security_Detections_API_RuleExecutionStatus>;
export declare const Security_Detections_API_RuleExecutionMetrics: z.ZodObject<{
    execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
    frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
    gap_range: z.ZodOptional<z.ZodObject<{
        gte: z.ZodString;
        lte: z.ZodString;
    }, z.core.$strip>>;
    gap_reason: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            rule_disabled: "rule_disabled";
            rule_did_not_run: "rule_did_not_run";
        }>;
    }, z.core.$strip>>;
    total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
    total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
    total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Detections_API_RuleExecutionMetrics = z.infer<typeof Security_Detections_API_RuleExecutionMetrics>;
export declare const Security_Detections_API_RuleVersion: z.ZodNumber;
export type Security_Detections_API_RuleVersion = z.infer<typeof Security_Detections_API_RuleVersion>;
export declare const Security_Detections_API_RuleIntervalTo: z.ZodString;
export type Security_Detections_API_RuleIntervalTo = z.infer<typeof Security_Detections_API_RuleIntervalTo>;
export declare const Security_Detections_API_TimestampOverrideFallbackDisabled: z.ZodBoolean;
export type Security_Detections_API_TimestampOverrideFallbackDisabled = z.infer<typeof Security_Detections_API_TimestampOverrideFallbackDisabled>;
export declare const Security_Detections_API_TimestampOverride: z.ZodString;
export type Security_Detections_API_TimestampOverride = z.infer<typeof Security_Detections_API_TimestampOverride>;
export declare const Security_Detections_API_TimelineTemplateTitle: z.ZodString;
export type Security_Detections_API_TimelineTemplateTitle = z.infer<typeof Security_Detections_API_TimelineTemplateTitle>;
export declare const Security_Detections_API_TimelineTemplateId: z.ZodString;
export type Security_Detections_API_TimelineTemplateId = z.infer<typeof Security_Detections_API_TimelineTemplateId>;
export declare const Security_Detections_API_RuleActionThrottle: z.ZodUnion<readonly [z.ZodEnum<{
    rule: "rule";
    no_actions: "no_actions";
}>, z.ZodString]>;
export type Security_Detections_API_RuleActionThrottle = z.infer<typeof Security_Detections_API_RuleActionThrottle>;
export declare const Security_Detections_API_ThreatSubtechnique: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    reference: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_ThreatSubtechnique = z.infer<typeof Security_Detections_API_ThreatSubtechnique>;
export declare const Security_Detections_API_ThreatTactic: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    reference: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_ThreatTactic = z.infer<typeof Security_Detections_API_ThreatTactic>;
export declare const Security_Detections_API_RuleTagArray: z.ZodArray<z.ZodString>;
export type Security_Detections_API_RuleTagArray = z.infer<typeof Security_Detections_API_RuleTagArray>;
export declare const Security_Detections_API_Severity: z.ZodEnum<{
    high: "high";
    low: "low";
    medium: "medium";
    critical: "critical";
}>;
export type Security_Detections_API_Severity = z.infer<typeof Security_Detections_API_Severity>;
export declare const Security_Detections_API_SetupGuide: z.ZodString;
export type Security_Detections_API_SetupGuide = z.infer<typeof Security_Detections_API_SetupGuide>;
export declare const Security_Detections_API_RuleNameOverride: z.ZodString;
export type Security_Detections_API_RuleNameOverride = z.infer<typeof Security_Detections_API_RuleNameOverride>;
export declare const Security_Detections_API_RiskScore: z.ZodNumber;
export type Security_Detections_API_RiskScore = z.infer<typeof Security_Detections_API_RiskScore>;
export declare const Security_Detections_API_RunScriptOsConfigValues: z.ZodObject<{
    scriptId: z.ZodOptional<z.ZodString>;
    scriptInput: z.ZodOptional<z.ZodString>;
    timeout: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Detections_API_RunScriptOsConfigValues = z.infer<typeof Security_Detections_API_RunScriptOsConfigValues>;
export declare const Security_Detections_API_ProcessesParams: z.ZodObject<{
    command: z.ZodEnum<{
        "kill-process": "kill-process";
        "suspend-process": "suspend-process";
    }>;
    comment: z.ZodOptional<z.ZodString>;
    config: z.ZodObject<{
        field: z.ZodString;
        overwrite: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Detections_API_ProcessesParams = z.infer<typeof Security_Detections_API_ProcessesParams>;
export declare const Security_Detections_API_DefaultParams: z.ZodObject<{
    command: z.ZodEnum<{
        isolate: "isolate";
    }>;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_DefaultParams = z.infer<typeof Security_Detections_API_DefaultParams>;
export declare const Security_Detections_API_EcsMapping: z.ZodRecord<z.ZodString, z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>>;
export type Security_Detections_API_EcsMapping = z.infer<typeof Security_Detections_API_EcsMapping>;
export declare const Security_Detections_API_RequiredFieldInput: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_RequiredFieldInput = z.infer<typeof Security_Detections_API_RequiredFieldInput>;
export declare const Security_Detections_API_NonEmptyString: z.ZodString;
export type Security_Detections_API_NonEmptyString = z.infer<typeof Security_Detections_API_NonEmptyString>;
export declare const Security_Detections_API_RuleReferenceArray: z.ZodArray<z.ZodString>;
export type Security_Detections_API_RuleReferenceArray = z.infer<typeof Security_Detections_API_RuleReferenceArray>;
export declare const Security_Detections_API_AlertsIndex: z.ZodString;
export type Security_Detections_API_AlertsIndex = z.infer<typeof Security_Detections_API_AlertsIndex>;
export declare const Security_Detections_API_SavedObjectResolveOutcome: z.ZodEnum<{
    exactMatch: "exactMatch";
    aliasMatch: "aliasMatch";
    conflict: "conflict";
}>;
export type Security_Detections_API_SavedObjectResolveOutcome = z.infer<typeof Security_Detections_API_SavedObjectResolveOutcome>;
export declare const Security_Detections_API_InvestigationGuide: z.ZodString;
export type Security_Detections_API_InvestigationGuide = z.infer<typeof Security_Detections_API_InvestigationGuide>;
export declare const Security_Detections_API_AlertsIndexNamespace: z.ZodString;
export type Security_Detections_API_AlertsIndexNamespace = z.infer<typeof Security_Detections_API_AlertsIndexNamespace>;
export declare const Security_Detections_API_RuleName: z.ZodString;
export type Security_Detections_API_RuleName = z.infer<typeof Security_Detections_API_RuleName>;
export declare const Security_Detections_API_RuleMetadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Detections_API_RuleMetadata = z.infer<typeof Security_Detections_API_RuleMetadata>;
export declare const Security_Detections_API_MaxSignals: z.ZodNumber;
export type Security_Detections_API_MaxSignals = z.infer<typeof Security_Detections_API_MaxSignals>;
export declare const Security_Detections_API_RuleLicense: z.ZodString;
export type Security_Detections_API_RuleLicense = z.infer<typeof Security_Detections_API_RuleLicense>;
export declare const Security_Detections_API_RuleInterval: z.ZodString;
export type Security_Detections_API_RuleInterval = z.infer<typeof Security_Detections_API_RuleInterval>;
export declare const Security_Detections_API_RuleIntervalFrom: z.ZodString;
export type Security_Detections_API_RuleIntervalFrom = z.infer<typeof Security_Detections_API_RuleIntervalFrom>;
export declare const Security_Detections_API_RuleFalsePositiveArray: z.ZodArray<z.ZodString>;
export type Security_Detections_API_RuleFalsePositiveArray = z.infer<typeof Security_Detections_API_RuleFalsePositiveArray>;
export declare const Security_Detections_API_ExceptionListType: z.ZodEnum<{
    endpoint: "endpoint";
    detection: "detection";
    rule_default: "rule_default";
    endpoint_trusted_apps: "endpoint_trusted_apps";
    endpoint_trusted_devices: "endpoint_trusted_devices";
    endpoint_events: "endpoint_events";
    endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
    endpoint_blocklists: "endpoint_blocklists";
}>;
export type Security_Detections_API_ExceptionListType = z.infer<typeof Security_Detections_API_ExceptionListType>;
export declare const Security_Detections_API_IsRuleEnabled: z.ZodBoolean;
export type Security_Detections_API_IsRuleEnabled = z.infer<typeof Security_Detections_API_IsRuleEnabled>;
export declare const Security_Detections_API_RuleDescription: z.ZodString;
export type Security_Detections_API_RuleDescription = z.infer<typeof Security_Detections_API_RuleDescription>;
export declare const Security_Detections_API_BuildingBlockType: z.ZodString;
export type Security_Detections_API_BuildingBlockType = z.infer<typeof Security_Detections_API_BuildingBlockType>;
export declare const Security_Detections_API_RuleAuthorArray: z.ZodArray<z.ZodString>;
export type Security_Detections_API_RuleAuthorArray = z.infer<typeof Security_Detections_API_RuleAuthorArray>;
export declare const Security_Detections_API_SavedObjectResolveAliasTargetId: z.ZodString;
export type Security_Detections_API_SavedObjectResolveAliasTargetId = z.infer<typeof Security_Detections_API_SavedObjectResolveAliasTargetId>;
export declare const Security_Detections_API_SavedObjectResolveAliasPurpose: z.ZodEnum<{
    savedObjectConversion: "savedObjectConversion";
    savedObjectImport: "savedObjectImport";
}>;
export type Security_Detections_API_SavedObjectResolveAliasPurpose = z.infer<typeof Security_Detections_API_SavedObjectResolveAliasPurpose>;
export declare const Security_Detections_API_RuleActionParams: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Detections_API_RuleActionParams = z.infer<typeof Security_Detections_API_RuleActionParams>;
export declare const Security_Detections_API_RuleActionId: z.ZodString;
export type Security_Detections_API_RuleActionId = z.infer<typeof Security_Detections_API_RuleActionId>;
export declare const Security_Detections_API_RuleActionGroup: z.ZodString;
export type Security_Detections_API_RuleActionGroup = z.infer<typeof Security_Detections_API_RuleActionGroup>;
export declare const Security_Detections_API_RuleActionNotifyWhen: z.ZodEnum<{
    onActiveAlert: "onActiveAlert";
    onThrottleInterval: "onThrottleInterval";
    onActionGroupChange: "onActionGroupChange";
}>;
export type Security_Detections_API_RuleActionNotifyWhen = z.infer<typeof Security_Detections_API_RuleActionNotifyWhen>;
export declare const Security_Detections_API_RuleActionAlertsFilter: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Detections_API_RuleActionAlertsFilter = z.infer<typeof Security_Detections_API_RuleActionAlertsFilter>;
export declare const Security_Detections_API_KqlQueryLanguage: z.ZodEnum<{
    kuery: "kuery";
    lucene: "lucene";
}>;
export type Security_Detections_API_KqlQueryLanguage = z.infer<typeof Security_Detections_API_KqlQueryLanguage>;
export declare const Security_Detections_API_IndexPatternArray: z.ZodArray<z.ZodString>;
export type Security_Detections_API_IndexPatternArray = z.infer<typeof Security_Detections_API_IndexPatternArray>;
export declare const Security_Detections_API_RuleFilterArray: z.ZodArray<z.ZodUnknown>;
export type Security_Detections_API_RuleFilterArray = z.infer<typeof Security_Detections_API_RuleFilterArray>;
export declare const Security_Detections_API_DataViewId: z.ZodString;
export type Security_Detections_API_DataViewId = z.infer<typeof Security_Detections_API_DataViewId>;
export declare const Security_Detections_API_NewTermsFields: z.ZodArray<z.ZodString>;
export type Security_Detections_API_NewTermsFields = z.infer<typeof Security_Detections_API_NewTermsFields>;
export declare const Security_Detections_API_HistoryWindowStart: z.ZodString;
export type Security_Detections_API_HistoryWindowStart = z.infer<typeof Security_Detections_API_HistoryWindowStart>;
export declare const Security_Detections_API_MachineLearningJobId: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Security_Detections_API_MachineLearningJobId = z.infer<typeof Security_Detections_API_MachineLearningJobId>;
export declare const Security_Detections_API_AnomalyThreshold: z.ZodNumber;
export type Security_Detections_API_AnomalyThreshold = z.infer<typeof Security_Detections_API_AnomalyThreshold>;
export declare const Security_Detections_API_ThreatIndicatorPath: z.ZodString;
export type Security_Detections_API_ThreatIndicatorPath = z.infer<typeof Security_Detections_API_ThreatIndicatorPath>;
export declare const Security_Detections_API_ThreatFilters: z.ZodArray<z.ZodUnknown>;
export type Security_Detections_API_ThreatFilters = z.infer<typeof Security_Detections_API_ThreatFilters>;
export declare const Security_Detections_API_SavedQueryId: z.ZodString;
export type Security_Detections_API_SavedQueryId = z.infer<typeof Security_Detections_API_SavedQueryId>;
export declare const Security_Detections_API_ItemsPerSearch: z.ZodNumber;
export type Security_Detections_API_ItemsPerSearch = z.infer<typeof Security_Detections_API_ItemsPerSearch>;
export declare const Security_Detections_API_ConcurrentSearches: z.ZodNumber;
export type Security_Detections_API_ConcurrentSearches = z.infer<typeof Security_Detections_API_ConcurrentSearches>;
export declare const Security_Detections_API_ThreatQuery: z.ZodString;
export type Security_Detections_API_ThreatQuery = z.infer<typeof Security_Detections_API_ThreatQuery>;
export declare const Security_Detections_API_ThreatIndex: z.ZodArray<z.ZodString>;
export type Security_Detections_API_ThreatIndex = z.infer<typeof Security_Detections_API_ThreatIndex>;
export declare const Security_Detections_API_ThresholdValue: z.ZodNumber;
export type Security_Detections_API_ThresholdValue = z.infer<typeof Security_Detections_API_ThresholdValue>;
export declare const Security_Detections_API_ThresholdField: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Security_Detections_API_ThresholdField = z.infer<typeof Security_Detections_API_ThresholdField>;
export declare const Security_Detections_API_ThresholdCardinality: z.ZodArray<z.ZodObject<{
    field: z.ZodString;
    value: z.ZodNumber;
}, z.core.$strip>>;
export type Security_Detections_API_ThresholdCardinality = z.infer<typeof Security_Detections_API_ThresholdCardinality>;
export declare const Security_Detections_API_QueryRuleRequiredFields: z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_QueryRuleRequiredFields = z.infer<typeof Security_Detections_API_QueryRuleRequiredFields>;
export declare const Security_Detections_API_TimestampField: z.ZodString;
export type Security_Detections_API_TimestampField = z.infer<typeof Security_Detections_API_TimestampField>;
export declare const Security_Detections_API_TiebreakerField: z.ZodString;
export type Security_Detections_API_TiebreakerField = z.infer<typeof Security_Detections_API_TiebreakerField>;
export declare const Security_Detections_API_EventCategoryOverride: z.ZodString;
export type Security_Detections_API_EventCategoryOverride = z.infer<typeof Security_Detections_API_EventCategoryOverride>;
export declare const Security_Detections_API_EqlQueryLanguage: z.ZodEnum<{
    eql: "eql";
}>;
export type Security_Detections_API_EqlQueryLanguage = z.infer<typeof Security_Detections_API_EqlQueryLanguage>;
export declare const Security_Detections_API_EsqlRuleRequiredFields: z.ZodObject<{
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_EsqlRuleRequiredFields = z.infer<typeof Security_Detections_API_EsqlRuleRequiredFields>;
export declare const Security_Detections_API_AlertSuppressionDuration: z.ZodObject<{
    unit: z.ZodEnum<{
        h: "h";
        s: "s";
        m: "m";
    }>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type Security_Detections_API_AlertSuppressionDuration = z.infer<typeof Security_Detections_API_AlertSuppressionDuration>;
export declare const Security_Detections_API_ExternalRuleSource: z.ZodObject<{
    customized_fields: z.ZodArray<z.ZodObject<{
        field_name: z.ZodString;
    }, z.core.$strip>>;
    has_base_version: z.ZodBoolean;
    is_customized: z.ZodBoolean;
    type: z.ZodEnum<{
        external: "external";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_ExternalRuleSource = z.infer<typeof Security_Detections_API_ExternalRuleSource>;
export declare const Security_Detections_API_RequiredFieldArray: z.ZodArray<z.ZodObject<{
    ecs: z.ZodBoolean;
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>>;
export type Security_Detections_API_RequiredFieldArray = z.infer<typeof Security_Detections_API_RequiredFieldArray>;
export declare const Security_Detections_API_RuleExecutionSummary: z.ZodObject<{
    last_execution: z.ZodObject<{
        date: z.ZodString;
        message: z.ZodString;
        metrics: z.ZodObject<{
            execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
            frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
            gap_range: z.ZodOptional<z.ZodObject<{
                gte: z.ZodString;
                lte: z.ZodString;
            }, z.core.$strip>>;
            gap_reason: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<{
                    rule_disabled: "rule_disabled";
                    rule_did_not_run: "rule_did_not_run";
                }>;
            }, z.core.$strip>>;
            total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
            total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
            total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        status: z.ZodEnum<{
            failed: "failed";
            "going to run": "going to run";
            running: "running";
            "partial failure": "partial failure";
            succeeded: "succeeded";
        }>;
        status_order: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Detections_API_RuleExecutionSummary = z.infer<typeof Security_Detections_API_RuleExecutionSummary>;
export declare const Security_Detections_API_ThreatTechnique: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    reference: z.ZodString;
    subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        reference: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_Detections_API_ThreatTechnique = z.infer<typeof Security_Detections_API_ThreatTechnique>;
export declare const Security_Detections_API_SeverityMapping: z.ZodArray<z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        equals: "equals";
    }>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    value: z.ZodString;
}, z.core.$strip>>;
export type Security_Detections_API_SeverityMapping = z.infer<typeof Security_Detections_API_SeverityMapping>;
export declare const Security_Detections_API_RiskScoreMapping: z.ZodArray<z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        equals: "equals";
    }>;
    risk_score: z.ZodOptional<z.ZodNumber>;
    value: z.ZodString;
}, z.core.$strip>>;
export type Security_Detections_API_RiskScoreMapping = z.infer<typeof Security_Detections_API_RiskScoreMapping>;
export declare const Security_Detections_API_RunscriptParams: z.ZodObject<{
    command: z.ZodEnum<{
        runscript: "runscript";
    }>;
    comment: z.ZodOptional<z.ZodString>;
    config: z.ZodOptional<z.ZodObject<{
        linux: z.ZodOptional<z.ZodObject<{
            scriptId: z.ZodOptional<z.ZodString>;
            scriptInput: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        macos: z.ZodOptional<z.ZodObject<{
            scriptId: z.ZodOptional<z.ZodString>;
            scriptInput: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        windows: z.ZodOptional<z.ZodObject<{
            scriptId: z.ZodOptional<z.ZodString>;
            scriptInput: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Detections_API_RunscriptParams = z.infer<typeof Security_Detections_API_RunscriptParams>;
export declare const Security_Detections_API_OsqueryQuery: z.ZodObject<{
    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
    platform: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    removed: z.ZodOptional<z.ZodBoolean>;
    snapshot: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_OsqueryQuery = z.infer<typeof Security_Detections_API_OsqueryQuery>;
export declare const Security_Detections_API_RelatedIntegration: z.ZodObject<{
    integration: z.ZodOptional<z.ZodString>;
    package: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_RelatedIntegration = z.infer<typeof Security_Detections_API_RelatedIntegration>;
export declare const Security_Detections_API_InvestigationFields: z.ZodObject<{
    field_names: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_InvestigationFields = z.infer<typeof Security_Detections_API_InvestigationFields>;
export declare const Security_Detections_API_ThreatMappingEntry: z.ZodObject<{
    field: z.ZodString;
    negate: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<{
        mapping: "mapping";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_ThreatMappingEntry = z.infer<typeof Security_Detections_API_ThreatMappingEntry>;
export declare const Security_Detections_API_RuleExceptionList: z.ZodObject<{
    id: z.ZodString;
    list_id: z.ZodString;
    namespace_type: z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>;
    type: z.ZodEnum<{
        endpoint: "endpoint";
        detection: "detection";
        rule_default: "rule_default";
        endpoint_trusted_apps: "endpoint_trusted_apps";
        endpoint_trusted_devices: "endpoint_trusted_devices";
        endpoint_events: "endpoint_events";
        endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
        endpoint_blocklists: "endpoint_blocklists";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_RuleExceptionList = z.infer<typeof Security_Detections_API_RuleExceptionList>;
export declare const Security_Detections_API_RuleActionFrequency: z.ZodObject<{
    notifyWhen: z.ZodEnum<{
        onActiveAlert: "onActiveAlert";
        onThrottleInterval: "onThrottleInterval";
        onActionGroupChange: "onActionGroupChange";
    }>;
    summary: z.ZodBoolean;
    throttle: z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>;
}, z.core.$strip>;
export type Security_Detections_API_RuleActionFrequency = z.infer<typeof Security_Detections_API_RuleActionFrequency>;
export declare const Security_Detections_API_NewTermsRuleDefaultableFields: z.ZodObject<{
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_NewTermsRuleDefaultableFields = z.infer<typeof Security_Detections_API_NewTermsRuleDefaultableFields>;
export declare const Security_Detections_API_ThreatMatchRuleDefaultableFields: z.ZodObject<{
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_ThreatMatchRuleDefaultableFields = z.infer<typeof Security_Detections_API_ThreatMatchRuleDefaultableFields>;
export declare const Security_Detections_API_ThresholdRuleDefaultableFields: z.ZodObject<{
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_ThresholdRuleDefaultableFields = z.infer<typeof Security_Detections_API_ThresholdRuleDefaultableFields>;
export declare const Security_Detections_API_SavedQueryRuleDefaultableFields: z.ZodObject<{
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_SavedQueryRuleDefaultableFields = z.infer<typeof Security_Detections_API_SavedQueryRuleDefaultableFields>;
export declare const Security_Detections_API_QueryRuleDefaultableFields: z.ZodObject<{
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_QueryRuleDefaultableFields = z.infer<typeof Security_Detections_API_QueryRuleDefaultableFields>;
export declare const Security_Detections_API_NewTermsRuleRequiredFields: z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_NewTermsRuleRequiredFields = z.infer<typeof Security_Detections_API_NewTermsRuleRequiredFields>;
export declare const Security_Detections_API_MachineLearningRuleRequiredFields: z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_MachineLearningRuleRequiredFields = z.infer<typeof Security_Detections_API_MachineLearningRuleRequiredFields>;
export declare const Security_Detections_API_SavedQueryRuleRequiredFields: z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_SavedQueryRuleRequiredFields = z.infer<typeof Security_Detections_API_SavedQueryRuleRequiredFields>;
export declare const Security_Detections_API_Threshold: z.ZodObject<{
    cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        value: z.ZodNumber;
    }, z.core.$strip>>>;
    field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type Security_Detections_API_Threshold = z.infer<typeof Security_Detections_API_Threshold>;
export declare const Security_Detections_API_EqlRequiredFields: z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_EqlRequiredFields = z.infer<typeof Security_Detections_API_EqlRequiredFields>;
export declare const Security_Detections_API_AlertSuppression: z.ZodObject<{
    duration: z.ZodOptional<z.ZodObject<{
        unit: z.ZodEnum<{
            h: "h";
            s: "s";
            m: "m";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>>;
    group_by: z.ZodArray<z.ZodString>;
    missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
        doNotSuppress: "doNotSuppress";
        suppress: "suppress";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_AlertSuppression = z.infer<typeof Security_Detections_API_AlertSuppression>;
export declare const Security_Detections_API_ThresholdAlertSuppression: z.ZodObject<{
    duration: z.ZodObject<{
        unit: z.ZodEnum<{
            h: "h";
            s: "s";
            m: "m";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Detections_API_ThresholdAlertSuppression = z.infer<typeof Security_Detections_API_ThresholdAlertSuppression>;
export declare const Security_Detections_API_RuleSource: z.ZodDiscriminatedUnion<[z.ZodObject<{
    customized_fields: z.ZodArray<z.ZodObject<{
        field_name: z.ZodString;
    }, z.core.$strip>>;
    has_base_version: z.ZodBoolean;
    is_customized: z.ZodBoolean;
    type: z.ZodEnum<{
        external: "external";
    }>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodEnum<{
        internal: "internal";
    }>;
}, z.core.$strip>], "type">;
export type Security_Detections_API_RuleSource = z.infer<typeof Security_Detections_API_RuleSource>;
export declare const Security_Detections_API_Threat: z.ZodObject<{
    framework: z.ZodString;
    tactic: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        reference: z.ZodString;
    }, z.core.$strip>;
    technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        reference: z.ZodString;
        subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_Detections_API_Threat = z.infer<typeof Security_Detections_API_Threat>;
export declare const Security_Detections_API_EndpointResponseAction: z.ZodObject<{
    action_type_id: z.ZodEnum<{
        ".endpoint": ".endpoint";
    }>;
    params: z.ZodUnion<readonly [z.ZodObject<{
        command: z.ZodEnum<{
            isolate: "isolate";
        }>;
        comment: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        command: z.ZodEnum<{
            "kill-process": "kill-process";
            "suspend-process": "suspend-process";
        }>;
        comment: z.ZodOptional<z.ZodString>;
        config: z.ZodObject<{
            field: z.ZodString;
            overwrite: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        command: z.ZodEnum<{
            runscript: "runscript";
        }>;
        comment: z.ZodOptional<z.ZodString>;
        config: z.ZodOptional<z.ZodObject<{
            linux: z.ZodOptional<z.ZodObject<{
                scriptId: z.ZodOptional<z.ZodString>;
                scriptInput: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            macos: z.ZodOptional<z.ZodObject<{
                scriptId: z.ZodOptional<z.ZodString>;
                scriptInput: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            windows: z.ZodOptional<z.ZodObject<{
                scriptId: z.ZodOptional<z.ZodString>;
                scriptInput: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type Security_Detections_API_EndpointResponseAction = z.infer<typeof Security_Detections_API_EndpointResponseAction>;
export declare const Security_Detections_API_OsqueryParams: z.ZodObject<{
    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    pack_id: z.ZodOptional<z.ZodString>;
    queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            field: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        platform: z.ZodOptional<z.ZodString>;
        query: z.ZodString;
        removed: z.ZodOptional<z.ZodBoolean>;
        snapshot: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    query: z.ZodOptional<z.ZodString>;
    saved_query_id: z.ZodOptional<z.ZodString>;
    timeout: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Detections_API_OsqueryParams = z.infer<typeof Security_Detections_API_OsqueryParams>;
export declare const Security_Detections_API_RelatedIntegrationArray: z.ZodArray<z.ZodObject<{
    integration: z.ZodOptional<z.ZodString>;
    package: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>;
export type Security_Detections_API_RelatedIntegrationArray = z.infer<typeof Security_Detections_API_RelatedIntegrationArray>;
export declare const Security_Detections_API_ThreatMapping: z.ZodArray<z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        negate: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodEnum<{
            mapping: "mapping";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Security_Detections_API_ThreatMapping = z.infer<typeof Security_Detections_API_ThreatMapping>;
export declare const Security_Detections_API_RuleAction: z.ZodObject<{
    action_type_id: z.ZodString;
    alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    frequency: z.ZodOptional<z.ZodObject<{
        notifyWhen: z.ZodEnum<{
            onActiveAlert: "onActiveAlert";
            onThrottleInterval: "onThrottleInterval";
            onActionGroupChange: "onActionGroupChange";
        }>;
        summary: z.ZodBoolean;
        throttle: z.ZodUnion<readonly [z.ZodEnum<{
            rule: "rule";
            no_actions: "no_actions";
        }>, z.ZodString]>;
    }, z.core.$strip>>;
    group: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_RuleAction = z.infer<typeof Security_Detections_API_RuleAction>;
export declare const Security_Detections_API_ThresholdRuleRequiredFields: z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_ThresholdRuleRequiredFields = z.infer<typeof Security_Detections_API_ThresholdRuleRequiredFields>;
export declare const Security_Detections_API_EsqlRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Detections_API_EsqlRuleOptionalFields = z.infer<typeof Security_Detections_API_EsqlRuleOptionalFields>;
export declare const Security_Detections_API_NewTermsRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Detections_API_NewTermsRuleOptionalFields = z.infer<typeof Security_Detections_API_NewTermsRuleOptionalFields>;
export declare const Security_Detections_API_MachineLearningRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Detections_API_MachineLearningRuleOptionalFields = z.infer<typeof Security_Detections_API_MachineLearningRuleOptionalFields>;
export declare const Security_Detections_API_ThreatMatchRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_ThreatMatchRuleOptionalFields = z.infer<typeof Security_Detections_API_ThreatMatchRuleOptionalFields>;
export declare const Security_Detections_API_SavedQueryRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_SavedQueryRuleOptionalFields = z.infer<typeof Security_Detections_API_SavedQueryRuleOptionalFields>;
export declare const Security_Detections_API_QueryRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_QueryRuleOptionalFields = z.infer<typeof Security_Detections_API_QueryRuleOptionalFields>;
export declare const Security_Detections_API_EqlOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_EqlOptionalFields = z.infer<typeof Security_Detections_API_EqlOptionalFields>;
export declare const Security_Detections_API_ThresholdRuleOptionalFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_ThresholdRuleOptionalFields = z.infer<typeof Security_Detections_API_ThresholdRuleOptionalFields>;
export declare const Security_Detections_API_ResponseFields: z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_ResponseFields = z.infer<typeof Security_Detections_API_ResponseFields>;
export declare const Security_Detections_API_ThreatArray: z.ZodArray<z.ZodObject<{
    framework: z.ZodString;
    tactic: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        reference: z.ZodString;
    }, z.core.$strip>;
    technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        reference: z.ZodString;
        subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>>;
export type Security_Detections_API_ThreatArray = z.infer<typeof Security_Detections_API_ThreatArray>;
export declare const Security_Detections_API_OsqueryResponseAction: z.ZodObject<{
    action_type_id: z.ZodEnum<{
        ".osquery": ".osquery";
    }>;
    params: z.ZodObject<{
        ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            field: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        pack_id: z.ZodOptional<z.ZodString>;
        queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            id: z.ZodString;
            platform: z.ZodOptional<z.ZodString>;
            query: z.ZodString;
            removed: z.ZodOptional<z.ZodBoolean>;
            snapshot: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        query: z.ZodOptional<z.ZodString>;
        saved_query_id: z.ZodOptional<z.ZodString>;
        timeout: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Detections_API_OsqueryResponseAction = z.infer<typeof Security_Detections_API_OsqueryResponseAction>;
export declare const Security_Detections_API_ThreatMatchRuleRequiredFields: z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_ThreatMatchRuleRequiredFields = z.infer<typeof Security_Detections_API_ThreatMatchRuleRequiredFields>;
export declare const Security_Detections_API_EsqlRuleResponseFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_EsqlRuleResponseFields = z.infer<typeof Security_Detections_API_EsqlRuleResponseFields>;
export declare const Security_Detections_API_EsqlRuleCreateFields: z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_EsqlRuleCreateFields = z.infer<typeof Security_Detections_API_EsqlRuleCreateFields>;
export declare const Security_Detections_API_NewTermsRuleResponseFields: z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_NewTermsRuleResponseFields = z.infer<typeof Security_Detections_API_NewTermsRuleResponseFields>;
export declare const Security_Detections_API_NewTermsRuleCreateFields: z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_NewTermsRuleCreateFields = z.infer<typeof Security_Detections_API_NewTermsRuleCreateFields>;
export declare const Security_Detections_API_MachineLearningRuleResponseFields: z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Detections_API_MachineLearningRuleResponseFields = z.infer<typeof Security_Detections_API_MachineLearningRuleResponseFields>;
export declare const Security_Detections_API_MachineLearningRuleCreateFields: z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Detections_API_MachineLearningRuleCreateFields = z.infer<typeof Security_Detections_API_MachineLearningRuleCreateFields>;
export declare const Security_Detections_API_SavedQueryRuleResponseFields: z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_SavedQueryRuleResponseFields = z.infer<typeof Security_Detections_API_SavedQueryRuleResponseFields>;
export declare const Security_Detections_API_SavedQueryRuleCreateFields: z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_SavedQueryRuleCreateFields = z.infer<typeof Security_Detections_API_SavedQueryRuleCreateFields>;
export declare const Security_Detections_API_QueryRuleResponseFields: z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
    query: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_QueryRuleResponseFields = z.infer<typeof Security_Detections_API_QueryRuleResponseFields>;
export declare const Security_Detections_API_QueryRuleCreateFields: z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_QueryRuleCreateFields = z.infer<typeof Security_Detections_API_QueryRuleCreateFields>;
export declare const Security_Detections_API_EqlRuleResponseFields: z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_EqlRuleResponseFields = z.infer<typeof Security_Detections_API_EqlRuleResponseFields>;
export declare const Security_Detections_API_EqlRuleCreateFields: z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_EqlRuleCreateFields = z.infer<typeof Security_Detections_API_EqlRuleCreateFields>;
export declare const Security_Detections_API_ThresholdRuleResponseFields: z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_ThresholdRuleResponseFields = z.infer<typeof Security_Detections_API_ThresholdRuleResponseFields>;
export declare const Security_Detections_API_ThresholdRuleCreateFields: z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_ThresholdRuleCreateFields = z.infer<typeof Security_Detections_API_ThresholdRuleCreateFields>;
export declare const Security_Detections_API_ResponseAction: z.ZodDiscriminatedUnion<[z.ZodObject<{
    action_type_id: z.ZodEnum<{
        ".osquery": ".osquery";
    }>;
    params: z.ZodObject<{
        ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            field: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        pack_id: z.ZodOptional<z.ZodString>;
        queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            id: z.ZodString;
            platform: z.ZodOptional<z.ZodString>;
            query: z.ZodString;
            removed: z.ZodOptional<z.ZodBoolean>;
            snapshot: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        query: z.ZodOptional<z.ZodString>;
        saved_query_id: z.ZodOptional<z.ZodString>;
        timeout: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    action_type_id: z.ZodEnum<{
        ".endpoint": ".endpoint";
    }>;
    params: z.ZodUnion<readonly [z.ZodObject<{
        command: z.ZodEnum<{
            isolate: "isolate";
        }>;
        comment: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        command: z.ZodEnum<{
            "kill-process": "kill-process";
            "suspend-process": "suspend-process";
        }>;
        comment: z.ZodOptional<z.ZodString>;
        config: z.ZodObject<{
            field: z.ZodString;
            overwrite: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        command: z.ZodEnum<{
            runscript: "runscript";
        }>;
        comment: z.ZodOptional<z.ZodString>;
        config: z.ZodOptional<z.ZodObject<{
            linux: z.ZodOptional<z.ZodObject<{
                scriptId: z.ZodOptional<z.ZodString>;
                scriptInput: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            macos: z.ZodOptional<z.ZodObject<{
                scriptId: z.ZodOptional<z.ZodString>;
                scriptInput: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            windows: z.ZodOptional<z.ZodObject<{
                scriptId: z.ZodOptional<z.ZodString>;
                scriptInput: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>]>;
}, z.core.$strip>], "action_type_id">;
export type Security_Detections_API_ResponseAction = z.infer<typeof Security_Detections_API_ResponseAction>;
export declare const Security_Detections_API_ThreatMatchRuleResponseFields: z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>;
export type Security_Detections_API_ThreatMatchRuleResponseFields = z.infer<typeof Security_Detections_API_ThreatMatchRuleResponseFields>;
export declare const Security_Detections_API_ThreatMatchRuleCreateFields: z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>;
export type Security_Detections_API_ThreatMatchRuleCreateFields = z.infer<typeof Security_Detections_API_ThreatMatchRuleCreateFields>;
export declare const Security_Detections_API_EsqlRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>>;
export type Security_Detections_API_EsqlRule = z.infer<typeof Security_Detections_API_EsqlRule>;
export declare const Security_Detections_API_NewTermsRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>;
export type Security_Detections_API_NewTermsRule = z.infer<typeof Security_Detections_API_NewTermsRule>;
export declare const Security_Detections_API_MachineLearningRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Security_Detections_API_MachineLearningRule = z.infer<typeof Security_Detections_API_MachineLearningRule>;
export declare const Security_Detections_API_ThresholdRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>;
export type Security_Detections_API_ThresholdRule = z.infer<typeof Security_Detections_API_ThresholdRule>;
export declare const Security_Detections_API_SavedQueryRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>;
export type Security_Detections_API_SavedQueryRule = z.infer<typeof Security_Detections_API_SavedQueryRule>;
export declare const Security_Detections_API_QueryRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
    query: z.ZodString;
}, z.core.$strip>>;
export type Security_Detections_API_QueryRule = z.infer<typeof Security_Detections_API_QueryRule>;
export declare const Security_Detections_API_EqlRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Detections_API_EqlRule = z.infer<typeof Security_Detections_API_EqlRule>;
export declare const Security_Detections_API_EsqlRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>>;
export type Security_Detections_API_EsqlRuleUpdateProps = z.infer<typeof Security_Detections_API_EsqlRuleUpdateProps>;
export declare const Security_Detections_API_NewTermsRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>;
export type Security_Detections_API_NewTermsRuleUpdateProps = z.infer<typeof Security_Detections_API_NewTermsRuleUpdateProps>;
export declare const Security_Detections_API_MachineLearningRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Security_Detections_API_MachineLearningRuleUpdateProps = z.infer<typeof Security_Detections_API_MachineLearningRuleUpdateProps>;
export declare const Security_Detections_API_ThresholdRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>;
export type Security_Detections_API_ThresholdRuleUpdateProps = z.infer<typeof Security_Detections_API_ThresholdRuleUpdateProps>;
export declare const Security_Detections_API_SavedQueryRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>;
export type Security_Detections_API_SavedQueryRuleUpdateProps = z.infer<typeof Security_Detections_API_SavedQueryRuleUpdateProps>;
export declare const Security_Detections_API_QueryRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Detections_API_QueryRuleUpdateProps = z.infer<typeof Security_Detections_API_QueryRuleUpdateProps>;
export declare const Security_Detections_API_EqlRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Detections_API_EqlRuleUpdateProps = z.infer<typeof Security_Detections_API_EqlRuleUpdateProps>;
export declare const Security_Detections_API_ThreatMatchRule: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>;
export type Security_Detections_API_ThreatMatchRule = z.infer<typeof Security_Detections_API_ThreatMatchRule>;
export declare const Security_Detections_API_ThreatMatchRuleUpdateProps: z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>;
export type Security_Detections_API_ThreatMatchRuleUpdateProps = z.infer<typeof Security_Detections_API_ThreatMatchRuleUpdateProps>;
export declare const Security_Detections_API_RuleResponse: z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
    query: z.ZodString;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    actions: z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodArray<z.ZodString>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    exceptions_list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>;
    false_positives: z.ZodArray<z.ZodString>;
    from: z.ZodString;
    interval: z.ZodString;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodArray<z.ZodString>;
    related_integrations: z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
    required_fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodString>;
    threat: z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodString;
    execution_summary: z.ZodOptional<z.ZodObject<{
        last_execution: z.ZodObject<{
            date: z.ZodString;
            message: z.ZodString;
            metrics: z.ZodObject<{
                execution_gap_duration_s: z.ZodOptional<z.ZodNumber>;
                frozen_indices_queried_count: z.ZodOptional<z.ZodNumber>;
                gap_range: z.ZodOptional<z.ZodObject<{
                    gte: z.ZodString;
                    lte: z.ZodString;
                }, z.core.$strip>>;
                gap_reason: z.ZodOptional<z.ZodObject<{
                    type: z.ZodEnum<{
                        rule_disabled: "rule_disabled";
                        rule_did_not_run: "rule_did_not_run";
                    }>;
                }, z.core.$strip>>;
                total_enrichment_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_indexing_duration_ms: z.ZodOptional<z.ZodNumber>;
                total_search_duration_ms: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            status: z.ZodEnum<{
                failed: "failed";
                "going to run": "going to run";
                running: "running";
                "partial failure": "partial failure";
                succeeded: "succeeded";
            }>;
            status_order: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    required_fields: z.ZodArray<z.ZodObject<{
        ecs: z.ZodBoolean;
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    revision: z.ZodNumber;
    rule_id: z.ZodString;
    rule_source: z.ZodDiscriminatedUnion<[z.ZodObject<{
        customized_fields: z.ZodArray<z.ZodObject<{
            field_name: z.ZodString;
        }, z.core.$strip>>;
        has_base_version: z.ZodBoolean;
        is_customized: z.ZodBoolean;
        type: z.ZodEnum<{
            external: "external";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            internal: "internal";
        }>;
    }, z.core.$strip>], "type">;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>>]>;
export type Security_Detections_API_RuleResponse = z.infer<typeof Security_Detections_API_RuleResponse>;
export declare const Security_Detections_API_RuleUpdateProps: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    language: z.ZodEnum<{
        eql: "eql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        eql: "eql";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    event_category_override: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tiebreaker_field: z.ZodOptional<z.ZodString>;
    timestamp_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodEnum<{
        query: "query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    saved_id: z.ZodString;
    type: z.ZodEnum<{
        saved_query: "saved_query";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    query: z.ZodString;
    threshold: z.ZodObject<{
        cardinality: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        field: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        value: z.ZodNumber;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        threshold: "threshold";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    saved_id: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    query: z.ZodString;
    threat_index: z.ZodArray<z.ZodString>;
    threat_mapping: z.ZodArray<z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            negate: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                mapping: "mapping";
            }>;
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    threat_query: z.ZodString;
    type: z.ZodEnum<{
        threat_match: "threat_match";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    concurrent_searches: z.ZodOptional<z.ZodNumber>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    items_per_search: z.ZodOptional<z.ZodNumber>;
    saved_id: z.ZodOptional<z.ZodString>;
    threat_filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    threat_indicator_path: z.ZodOptional<z.ZodString>;
    threat_language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    anomaly_threshold: z.ZodNumber;
    machine_learning_job_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    type: z.ZodEnum<{
        machine_learning: "machine_learning";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    history_window_start: z.ZodString;
    new_terms_fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    type: z.ZodEnum<{
        new_terms: "new_terms";
    }>;
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    data_view_id: z.ZodOptional<z.ZodString>;
    filters: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    index: z.ZodOptional<z.ZodArray<z.ZodString>>;
    language: z.ZodOptional<z.ZodEnum<{
        kuery: "kuery";
        lucene: "lucene";
    }>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action_type_id: z.ZodString;
        alerts_filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        frequency: z.ZodOptional<z.ZodObject<{
            notifyWhen: z.ZodEnum<{
                onActiveAlert: "onActiveAlert";
                onThrottleInterval: "onThrottleInterval";
                onActionGroupChange: "onActionGroupChange";
            }>;
            summary: z.ZodBoolean;
            throttle: z.ZodUnion<readonly [z.ZodEnum<{
                rule: "rule";
                no_actions: "no_actions";
            }>, z.ZodString]>;
        }, z.core.$strip>>;
        group: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        params: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodArray<z.ZodString>>;
    building_block_type: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exceptions_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        list_id: z.ZodString;
        namespace_type: z.ZodEnum<{
            agnostic: "agnostic";
            single: "single";
        }>;
        type: z.ZodEnum<{
            endpoint: "endpoint";
            detection: "detection";
            rule_default: "rule_default";
            endpoint_trusted_apps: "endpoint_trusted_apps";
            endpoint_trusted_devices: "endpoint_trusted_devices";
            endpoint_events: "endpoint_events";
            endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
            endpoint_blocklists: "endpoint_blocklists";
        }>;
    }, z.core.$strip>>>;
    false_positives: z.ZodOptional<z.ZodArray<z.ZodString>>;
    from: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    investigation_fields: z.ZodOptional<z.ZodObject<{
        field_names: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodString>;
    max_signals: z.ZodOptional<z.ZodNumber>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    outcome: z.ZodOptional<z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>>;
    output_index: z.ZodOptional<z.ZodString>;
    references: z.ZodOptional<z.ZodArray<z.ZodString>>;
    related_integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        integration: z.ZodOptional<z.ZodString>;
        package: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>;
    required_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    response_actions: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".osquery": ".osquery";
        }>;
        params: z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            pack_id: z.ZodOptional<z.ZodString>;
            queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>>;
                id: z.ZodString;
                platform: z.ZodOptional<z.ZodString>;
                query: z.ZodString;
                removed: z.ZodOptional<z.ZodBoolean>;
                snapshot: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        action_type_id: z.ZodEnum<{
            ".endpoint": ".endpoint";
        }>;
        params: z.ZodUnion<readonly [z.ZodObject<{
            command: z.ZodEnum<{
                isolate: "isolate";
            }>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                "kill-process": "kill-process";
                "suspend-process": "suspend-process";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodObject<{
                field: z.ZodString;
                overwrite: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            command: z.ZodEnum<{
                runscript: "runscript";
            }>;
            comment: z.ZodOptional<z.ZodString>;
            config: z.ZodOptional<z.ZodObject<{
                linux: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                macos: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                windows: z.ZodOptional<z.ZodObject<{
                    scriptId: z.ZodOptional<z.ZodString>;
                    scriptInput: z.ZodOptional<z.ZodString>;
                    timeout: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>]>;
    }, z.core.$strip>], "action_type_id">>>;
    risk_score: z.ZodNumber;
    risk_score_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    rule_id: z.ZodOptional<z.ZodString>;
    rule_name_override: z.ZodOptional<z.ZodString>;
    setup: z.ZodOptional<z.ZodString>;
    severity: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
        critical: "critical";
    }>;
    severity_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            low: "low";
            medium: "medium";
            critical: "critical";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    threat: z.ZodOptional<z.ZodArray<z.ZodObject<{
        framework: z.ZodString;
        tactic: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
        }, z.core.$strip>;
        technique: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            reference: z.ZodString;
            subtechnique: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                reference: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    throttle: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        rule: "rule";
        no_actions: "no_actions";
    }>, z.ZodString]>>;
    timeline_id: z.ZodOptional<z.ZodString>;
    timeline_title: z.ZodOptional<z.ZodString>;
    timestamp_override: z.ZodOptional<z.ZodString>;
    timestamp_override_fallback_disabled: z.ZodOptional<z.ZodBoolean>;
    to: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    alert_suppression: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodObject<{
            unit: z.ZodEnum<{
                h: "h";
                s: "s";
                m: "m";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        group_by: z.ZodArray<z.ZodString>;
        missing_fields_strategy: z.ZodOptional<z.ZodEnum<{
            doNotSuppress: "doNotSuppress";
            suppress: "suppress";
        }>>;
    }, z.core.$strip>>;
    language: z.ZodEnum<{
        esql: "esql";
    }>;
    query: z.ZodString;
    type: z.ZodEnum<{
        esql: "esql";
    }>;
}, z.core.$strip>>]>;
export type Security_Detections_API_RuleUpdateProps = z.infer<typeof Security_Detections_API_RuleUpdateProps>;
//# sourceMappingURL=update_rule.d.ts.map