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
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
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
export declare const ConnectorFilteringConfig: z.ZodObject<{
    active: z.ZodObject<{
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
    domain: z.ZodOptional<z.ZodString>;
    draft: z.ZodObject<{
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
}, z.core.$strip>;
export type ConnectorFilteringConfig = z.infer<typeof ConnectorFilteringConfig>;
/**
 * Update the connector filtering.
 *
 * Update the draft filtering configuration of a connector and marks the draft validation state as edited.
 * The filtering draft is activated once validated by the running Elastic connector service.
 * The filtering property is used to configure sync rules (both basic and advanced) for a connector.
 */
export declare const ConnectorUpdateFilteringRequest: z.ZodObject<{
    connector_id: z.ZodString;
    filtering: z.ZodOptional<z.ZodArray<z.ZodObject<{
        active: z.ZodObject<{
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
        domain: z.ZodOptional<z.ZodString>;
        draft: z.ZodObject<{
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
    }, z.core.$strip>>>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
    advanced_snippet: z.ZodOptional<z.ZodObject<{
        created_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        updated_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        value: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConnectorUpdateFilteringRequest = z.infer<typeof ConnectorUpdateFilteringRequest>;
export declare const ConnectorUpdateFilteringResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateFilteringResponse = z.infer<typeof ConnectorUpdateFilteringResponse>;
//# sourceMappingURL=connector_update_filtering.d.ts.map