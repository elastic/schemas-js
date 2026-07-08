import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
/** A scalar value. */
export declare const ScalarValue: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
export type ScalarValue = z.infer<typeof ScalarValue>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ConnectorDependency: z.ZodObject<{
    field: z.ZodString;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
}, z.core.$strip>;
export type ConnectorDependency = z.infer<typeof ConnectorDependency>;
export declare const ConnectorDisplayType: z.ZodEnum<{
    numeric: "numeric";
    textbox: "textbox";
    textarea: "textarea";
    toggle: "toggle";
    dropdown: "dropdown";
}>;
export type ConnectorDisplayType = z.infer<typeof ConnectorDisplayType>;
export declare const ConnectorSelectOption: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
}, z.core.$strip>;
export type ConnectorSelectOption = z.infer<typeof ConnectorSelectOption>;
export declare const ConnectorConnectorFieldType: z.ZodEnum<{
    list: "list";
    int: "int";
    str: "str";
    bool: "bool";
}>;
export type ConnectorConnectorFieldType = z.infer<typeof ConnectorConnectorFieldType>;
export declare const ConnectorLessThanValidation: z.ZodObject<{
    type: z.ZodLiteral<"less_than">;
    constraint: z.ZodNumber;
}, z.core.$strip>;
export type ConnectorLessThanValidation = z.infer<typeof ConnectorLessThanValidation>;
export declare const ConnectorGreaterThanValidation: z.ZodObject<{
    type: z.ZodLiteral<"greater_than">;
    constraint: z.ZodNumber;
}, z.core.$strip>;
export type ConnectorGreaterThanValidation = z.infer<typeof ConnectorGreaterThanValidation>;
export declare const ConnectorListTypeValidation: z.ZodObject<{
    type: z.ZodLiteral<"list_type">;
    constraint: z.ZodString;
}, z.core.$strip>;
export type ConnectorListTypeValidation = z.infer<typeof ConnectorListTypeValidation>;
export declare const ConnectorIncludedInValidation: z.ZodObject<{
    type: z.ZodLiteral<"included_in">;
    constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
}, z.core.$strip>;
export type ConnectorIncludedInValidation = z.infer<typeof ConnectorIncludedInValidation>;
export declare const ConnectorRegexValidation: z.ZodObject<{
    type: z.ZodLiteral<"regex">;
    constraint: z.ZodString;
}, z.core.$strip>;
export type ConnectorRegexValidation = z.infer<typeof ConnectorRegexValidation>;
export declare const ConnectorValidation: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"less_than">;
    constraint: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"greater_than">;
    constraint: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"list_type">;
    constraint: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"included_in">;
    constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"regex">;
    constraint: z.ZodString;
}, z.core.$strip>]>;
export type ConnectorValidation = z.infer<typeof ConnectorValidation>;
export declare const ConnectorConnectorConfigProperties: z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
    default_value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    depends_on: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    }, z.core.$strip>>;
    display: z.ZodEnum<{
        numeric: "numeric";
        textbox: "textbox";
        textarea: "textarea";
        toggle: "toggle";
        dropdown: "dropdown";
    }>;
    label: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    }, z.core.$strip>>;
    order: z.ZodOptional<z.ZodNumber>;
    placeholder: z.ZodOptional<z.ZodString>;
    required: z.ZodBoolean;
    sensitive: z.ZodBoolean;
    tooltip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    type: z.ZodOptional<z.ZodEnum<{
        list: "list";
        int: "int";
        str: "str";
        bool: "bool";
    }>>;
    ui_restrictions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    validations: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"less_than">;
        constraint: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"greater_than">;
        constraint: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"list_type">;
        constraint: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"included_in">;
        constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"regex">;
        constraint: z.ZodString;
    }, z.core.$strip>]>>>;
    value: z.ZodAny;
}, z.core.$strip>;
export type ConnectorConnectorConfigProperties = z.infer<typeof ConnectorConnectorConfigProperties>;
export declare const ConnectorConnectorConfiguration: z.ZodRecord<z.ZodString, z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
    default_value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    depends_on: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    }, z.core.$strip>>;
    display: z.ZodEnum<{
        numeric: "numeric";
        textbox: "textbox";
        textarea: "textarea";
        toggle: "toggle";
        dropdown: "dropdown";
    }>;
    label: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    }, z.core.$strip>>;
    order: z.ZodOptional<z.ZodNumber>;
    placeholder: z.ZodOptional<z.ZodString>;
    required: z.ZodBoolean;
    sensitive: z.ZodBoolean;
    tooltip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    type: z.ZodOptional<z.ZodEnum<{
        list: "list";
        int: "int";
        str: "str";
        bool: "bool";
    }>>;
    ui_restrictions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    validations: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"less_than">;
        constraint: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"greater_than">;
        constraint: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"list_type">;
        constraint: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"included_in">;
        constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"regex">;
        constraint: z.ZodString;
    }, z.core.$strip>]>>>;
    value: z.ZodAny;
}, z.core.$strip>>;
export type ConnectorConnectorConfiguration = z.infer<typeof ConnectorConnectorConfiguration>;
export declare const ConnectorFilteringAdvancedSnippet: z.ZodObject<{
    created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    value: z.ZodAny;
}, z.core.$strip>;
export type ConnectorFilteringAdvancedSnippet = z.infer<typeof ConnectorFilteringAdvancedSnippet>;
export declare const ConnectorFilteringPolicy: z.ZodEnum<{
    exclude: "exclude";
    include: "include";
}>;
export type ConnectorFilteringPolicy = z.infer<typeof ConnectorFilteringPolicy>;
export declare const ConnectorFilteringRuleRule: z.ZodEnum<{
    regex: "regex";
    contains: "contains";
    ends_with: "ends_with";
    equals: "equals";
    starts_with: "starts_with";
    ">": ">";
    "<": "<";
}>;
export type ConnectorFilteringRuleRule = z.infer<typeof ConnectorFilteringRuleRule>;
export declare const ConnectorFilteringRule: z.ZodObject<{
    created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    field: z.ZodString;
    id: z.ZodString;
    order: z.ZodNumber;
    policy: z.ZodEnum<{
        exclude: "exclude";
        include: "include";
    }>;
    rule: z.ZodEnum<{
        regex: "regex";
        contains: "contains";
        ends_with: "ends_with";
        equals: "equals";
        starts_with: "starts_with";
        ">": ">";
        "<": "<";
    }>;
    updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    value: z.ZodString;
}, z.core.$strip>;
export type ConnectorFilteringRule = z.infer<typeof ConnectorFilteringRule>;
export declare const ConnectorFilteringValidation: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
    messages: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ConnectorFilteringValidation = z.infer<typeof ConnectorFilteringValidation>;
export declare const ConnectorFilteringValidationState: z.ZodEnum<{
    edited: "edited";
    invalid: "invalid";
    valid: "valid";
}>;
export type ConnectorFilteringValidationState = z.infer<typeof ConnectorFilteringValidationState>;
export declare const ConnectorFilteringRulesValidation: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        ids: z.ZodArray<z.ZodString>;
        messages: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    state: z.ZodEnum<{
        edited: "edited";
        invalid: "invalid";
        valid: "valid";
    }>;
}, z.core.$strip>;
export type ConnectorFilteringRulesValidation = z.infer<typeof ConnectorFilteringRulesValidation>;
export declare const ConnectorFilteringRules: z.ZodObject<{
    advanced_snippet: z.ZodObject<{
        created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        value: z.ZodAny;
    }, z.core.$strip>;
    rules: z.ZodArray<z.ZodObject<{
        created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        field: z.ZodString;
        id: z.ZodString;
        order: z.ZodNumber;
        policy: z.ZodEnum<{
            exclude: "exclude";
            include: "include";
        }>;
        rule: z.ZodEnum<{
            regex: "regex";
            contains: "contains";
            ends_with: "ends_with";
            equals: "equals";
            starts_with: "starts_with";
            ">": ">";
            "<": "<";
        }>;
        updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        value: z.ZodString;
    }, z.core.$strip>>;
    validation: z.ZodObject<{
        errors: z.ZodArray<z.ZodObject<{
            ids: z.ZodArray<z.ZodString>;
            messages: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        state: z.ZodEnum<{
            edited: "edited";
            invalid: "invalid";
            valid: "valid";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ConnectorFilteringRules = z.infer<typeof ConnectorFilteringRules>;
export declare const ConnectorIngestPipelineParams: z.ZodObject<{
    extract_binary_content: z.ZodBoolean;
    name: z.ZodString;
    reduce_whitespace: z.ZodBoolean;
    run_ml_inference: z.ZodBoolean;
}, z.core.$strip>;
export type ConnectorIngestPipelineParams = z.infer<typeof ConnectorIngestPipelineParams>;
export declare const ConnectorSyncJobConnectorReference: z.ZodObject<{
    configuration: z.ZodRecord<z.ZodString, z.ZodObject<{
        category: z.ZodOptional<z.ZodString>;
        default_value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
        depends_on: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
        }, z.core.$strip>>;
        display: z.ZodEnum<{
            numeric: "numeric";
            textbox: "textbox";
            textarea: "textarea";
            toggle: "toggle";
            dropdown: "dropdown";
        }>;
        label: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
        }, z.core.$strip>>;
        order: z.ZodOptional<z.ZodNumber>;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodBoolean;
        sensitive: z.ZodBoolean;
        tooltip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        type: z.ZodOptional<z.ZodEnum<{
            list: "list";
            int: "int";
            str: "str";
            bool: "bool";
        }>>;
        ui_restrictions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        validations: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"less_than">;
            constraint: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"greater_than">;
            constraint: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"list_type">;
            constraint: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"included_in">;
            constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"regex">;
            constraint: z.ZodString;
        }, z.core.$strip>]>>>;
        value: z.ZodAny;
    }, z.core.$strip>>;
    filtering: z.ZodObject<{
        advanced_snippet: z.ZodObject<{
            created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            value: z.ZodAny;
        }, z.core.$strip>;
        rules: z.ZodArray<z.ZodObject<{
            created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            field: z.ZodString;
            id: z.ZodString;
            order: z.ZodNumber;
            policy: z.ZodEnum<{
                exclude: "exclude";
                include: "include";
            }>;
            rule: z.ZodEnum<{
                regex: "regex";
                contains: "contains";
                ends_with: "ends_with";
                equals: "equals";
                starts_with: "starts_with";
                ">": ">";
                "<": "<";
            }>;
            updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            value: z.ZodString;
        }, z.core.$strip>>;
        validation: z.ZodObject<{
            errors: z.ZodArray<z.ZodObject<{
                ids: z.ZodArray<z.ZodString>;
                messages: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            state: z.ZodEnum<{
                edited: "edited";
                invalid: "invalid";
                valid: "valid";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    id: z.ZodString;
    index_name: z.ZodString;
    language: z.ZodOptional<z.ZodString>;
    pipeline: z.ZodOptional<z.ZodObject<{
        extract_binary_content: z.ZodBoolean;
        name: z.ZodString;
        reduce_whitespace: z.ZodBoolean;
        run_ml_inference: z.ZodBoolean;
    }, z.core.$strip>>;
    service_type: z.ZodString;
    sync_cursor: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type ConnectorSyncJobConnectorReference = z.infer<typeof ConnectorSyncJobConnectorReference>;
export declare const ConnectorSyncJobType: z.ZodEnum<{
    full: "full";
    incremental: "incremental";
    access_control: "access_control";
}>;
export type ConnectorSyncJobType = z.infer<typeof ConnectorSyncJobType>;
export declare const ConnectorSyncStatus: z.ZodEnum<{
    completed: "completed";
    error: "error";
    canceling: "canceling";
    canceled: "canceled";
    in_progress: "in_progress";
    pending: "pending";
    suspended: "suspended";
}>;
export type ConnectorSyncStatus = z.infer<typeof ConnectorSyncStatus>;
export declare const ConnectorSyncJobTriggerMethod: z.ZodEnum<{
    on_demand: "on_demand";
    scheduled: "scheduled";
}>;
export type ConnectorSyncJobTriggerMethod = z.infer<typeof ConnectorSyncJobTriggerMethod>;
export declare const ConnectorConnectorSyncJob: z.ZodObject<{
    cancelation_requested_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    canceled_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    completed_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    connector: z.ZodObject<{
        configuration: z.ZodRecord<z.ZodString, z.ZodObject<{
            category: z.ZodOptional<z.ZodString>;
            default_value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            depends_on: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            }, z.core.$strip>>;
            display: z.ZodEnum<{
                numeric: "numeric";
                textbox: "textbox";
                textarea: "textarea";
                toggle: "toggle";
                dropdown: "dropdown";
            }>;
            label: z.ZodString;
            options: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            }, z.core.$strip>>;
            order: z.ZodOptional<z.ZodNumber>;
            placeholder: z.ZodOptional<z.ZodString>;
            required: z.ZodBoolean;
            sensitive: z.ZodBoolean;
            tooltip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            type: z.ZodOptional<z.ZodEnum<{
                list: "list";
                int: "int";
                str: "str";
                bool: "bool";
            }>>;
            ui_restrictions: z.ZodOptional<z.ZodArray<z.ZodString>>;
            validations: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"less_than">;
                constraint: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"greater_than">;
                constraint: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"list_type">;
                constraint: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"included_in">;
                constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"regex">;
                constraint: z.ZodString;
            }, z.core.$strip>]>>>;
            value: z.ZodAny;
        }, z.core.$strip>>;
        filtering: z.ZodObject<{
            advanced_snippet: z.ZodObject<{
                created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                value: z.ZodAny;
            }, z.core.$strip>;
            rules: z.ZodArray<z.ZodObject<{
                created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                field: z.ZodString;
                id: z.ZodString;
                order: z.ZodNumber;
                policy: z.ZodEnum<{
                    exclude: "exclude";
                    include: "include";
                }>;
                rule: z.ZodEnum<{
                    regex: "regex";
                    contains: "contains";
                    ends_with: "ends_with";
                    equals: "equals";
                    starts_with: "starts_with";
                    ">": ">";
                    "<": "<";
                }>;
                updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                value: z.ZodString;
            }, z.core.$strip>>;
            validation: z.ZodObject<{
                errors: z.ZodArray<z.ZodObject<{
                    ids: z.ZodArray<z.ZodString>;
                    messages: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                state: z.ZodEnum<{
                    edited: "edited";
                    invalid: "invalid";
                    valid: "valid";
                }>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        id: z.ZodString;
        index_name: z.ZodString;
        language: z.ZodOptional<z.ZodString>;
        pipeline: z.ZodOptional<z.ZodObject<{
            extract_binary_content: z.ZodBoolean;
            name: z.ZodString;
            reduce_whitespace: z.ZodBoolean;
            run_ml_inference: z.ZodBoolean;
        }, z.core.$strip>>;
        service_type: z.ZodString;
        sync_cursor: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
    created_at: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    deleted_document_count: z.ZodNumber;
    error: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    indexed_document_count: z.ZodNumber;
    indexed_document_volume: z.ZodNumber;
    job_type: z.ZodEnum<{
        full: "full";
        incremental: "incremental";
        access_control: "access_control";
    }>;
    last_seen: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    started_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    status: z.ZodEnum<{
        completed: "completed";
        error: "error";
        canceling: "canceling";
        canceled: "canceled";
        in_progress: "in_progress";
        pending: "pending";
        suspended: "suspended";
    }>;
    total_document_count: z.ZodNumber;
    trigger_method: z.ZodEnum<{
        on_demand: "on_demand";
        scheduled: "scheduled";
    }>;
    worker_hostname: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorConnectorSyncJob = z.infer<typeof ConnectorConnectorSyncJob>;
/** Get a connector sync job. */
export declare const ConnectorSyncJobGetRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobGetRequest = z.infer<typeof ConnectorSyncJobGetRequest>;
export declare const ConnectorSyncJobGetResponse: z.ZodObject<{
    cancelation_requested_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    canceled_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    completed_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    connector: z.ZodObject<{
        configuration: z.ZodRecord<z.ZodString, z.ZodObject<{
            category: z.ZodOptional<z.ZodString>;
            default_value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            depends_on: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            }, z.core.$strip>>;
            display: z.ZodEnum<{
                numeric: "numeric";
                textbox: "textbox";
                textarea: "textarea";
                toggle: "toggle";
                dropdown: "dropdown";
            }>;
            label: z.ZodString;
            options: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            }, z.core.$strip>>;
            order: z.ZodOptional<z.ZodNumber>;
            placeholder: z.ZodOptional<z.ZodString>;
            required: z.ZodBoolean;
            sensitive: z.ZodBoolean;
            tooltip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            type: z.ZodOptional<z.ZodEnum<{
                list: "list";
                int: "int";
                str: "str";
                bool: "bool";
            }>>;
            ui_restrictions: z.ZodOptional<z.ZodArray<z.ZodString>>;
            validations: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"less_than">;
                constraint: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"greater_than">;
                constraint: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"list_type">;
                constraint: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"included_in">;
                constraint: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"regex">;
                constraint: z.ZodString;
            }, z.core.$strip>]>>>;
            value: z.ZodAny;
        }, z.core.$strip>>;
        filtering: z.ZodObject<{
            advanced_snippet: z.ZodObject<{
                created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                value: z.ZodAny;
            }, z.core.$strip>;
            rules: z.ZodArray<z.ZodObject<{
                created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                field: z.ZodString;
                id: z.ZodString;
                order: z.ZodNumber;
                policy: z.ZodEnum<{
                    exclude: "exclude";
                    include: "include";
                }>;
                rule: z.ZodEnum<{
                    regex: "regex";
                    contains: "contains";
                    ends_with: "ends_with";
                    equals: "equals";
                    starts_with: "starts_with";
                    ">": ">";
                    "<": "<";
                }>;
                updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                value: z.ZodString;
            }, z.core.$strip>>;
            validation: z.ZodObject<{
                errors: z.ZodArray<z.ZodObject<{
                    ids: z.ZodArray<z.ZodString>;
                    messages: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                state: z.ZodEnum<{
                    edited: "edited";
                    invalid: "invalid";
                    valid: "valid";
                }>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        id: z.ZodString;
        index_name: z.ZodString;
        language: z.ZodOptional<z.ZodString>;
        pipeline: z.ZodOptional<z.ZodObject<{
            extract_binary_content: z.ZodBoolean;
            name: z.ZodString;
            reduce_whitespace: z.ZodBoolean;
            run_ml_inference: z.ZodBoolean;
        }, z.core.$strip>>;
        service_type: z.ZodString;
        sync_cursor: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
    created_at: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    deleted_document_count: z.ZodNumber;
    error: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    indexed_document_count: z.ZodNumber;
    indexed_document_volume: z.ZodNumber;
    job_type: z.ZodEnum<{
        full: "full";
        incremental: "incremental";
        access_control: "access_control";
    }>;
    last_seen: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    started_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    status: z.ZodEnum<{
        completed: "completed";
        error: "error";
        canceling: "canceling";
        canceled: "canceled";
        in_progress: "in_progress";
        pending: "pending";
        suspended: "suspended";
    }>;
    total_document_count: z.ZodNumber;
    trigger_method: z.ZodEnum<{
        on_demand: "on_demand";
        scheduled: "scheduled";
    }>;
    worker_hostname: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorSyncJobGetResponse = z.infer<typeof ConnectorSyncJobGetResponse>;
//# sourceMappingURL=connector_sync_job_get.d.ts.map