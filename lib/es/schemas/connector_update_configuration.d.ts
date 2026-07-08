import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
/**
 * Update the connector configuration.
 *
 * Update the configuration field in the connector document.
 */
export declare const ConnectorUpdateConfigurationRequest: z.ZodObject<{
    connector_id: z.ZodString;
    configuration: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
    }, z.core.$strip>>>;
    values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type ConnectorUpdateConfigurationRequest = z.infer<typeof ConnectorUpdateConfigurationRequest>;
export declare const ConnectorUpdateConfigurationResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateConfigurationResponse = z.infer<typeof ConnectorUpdateConfigurationResponse>;
//# sourceMappingURL=connector_update_configuration.d.ts.map