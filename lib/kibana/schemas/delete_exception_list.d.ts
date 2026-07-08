import { z } from 'zod';
export declare const Security_Exceptions_API_ExceptionListVersion: z.ZodNumber;
export type Security_Exceptions_API_ExceptionListVersion = z.infer<typeof Security_Exceptions_API_ExceptionListVersion>;
export declare const Security_Exceptions_API_ExceptionListType: z.ZodEnum<{
    endpoint: "endpoint";
    detection: "detection";
    rule_default: "rule_default";
    endpoint_trusted_apps: "endpoint_trusted_apps";
    endpoint_trusted_devices: "endpoint_trusted_devices";
    endpoint_events: "endpoint_events";
    endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
    endpoint_blocklists: "endpoint_blocklists";
}>;
export type Security_Exceptions_API_ExceptionListType = z.infer<typeof Security_Exceptions_API_ExceptionListType>;
export declare const Security_Exceptions_API_ExceptionListTags: z.ZodArray<z.ZodString>;
export type Security_Exceptions_API_ExceptionListTags = z.infer<typeof Security_Exceptions_API_ExceptionListTags>;
export declare const Security_Exceptions_API_ExceptionListOsType: z.ZodEnum<{
    linux: "linux";
    macos: "macos";
    windows: "windows";
}>;
export type Security_Exceptions_API_ExceptionListOsType = z.infer<typeof Security_Exceptions_API_ExceptionListOsType>;
export declare const Security_Exceptions_API_ExceptionNamespaceType: z.ZodEnum<{
    agnostic: "agnostic";
    single: "single";
}>;
export type Security_Exceptions_API_ExceptionNamespaceType = z.infer<typeof Security_Exceptions_API_ExceptionNamespaceType>;
export declare const Security_Exceptions_API_ExceptionListName: z.ZodString;
export type Security_Exceptions_API_ExceptionListName = z.infer<typeof Security_Exceptions_API_ExceptionListName>;
export declare const Security_Exceptions_API_ExceptionListMeta: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Exceptions_API_ExceptionListMeta = z.infer<typeof Security_Exceptions_API_ExceptionListMeta>;
export declare const Security_Exceptions_API_ExceptionListHumanId: z.ZodString;
export type Security_Exceptions_API_ExceptionListHumanId = z.infer<typeof Security_Exceptions_API_ExceptionListHumanId>;
export declare const Security_Exceptions_API_ExceptionListId: z.ZodString;
export type Security_Exceptions_API_ExceptionListId = z.infer<typeof Security_Exceptions_API_ExceptionListId>;
export declare const Security_Exceptions_API_ExceptionListDescription: z.ZodString;
export type Security_Exceptions_API_ExceptionListDescription = z.infer<typeof Security_Exceptions_API_ExceptionListDescription>;
export declare const Security_Exceptions_API_ExceptionListOsTypeArray: z.ZodArray<z.ZodEnum<{
    linux: "linux";
    macos: "macos";
    windows: "windows";
}>>;
export type Security_Exceptions_API_ExceptionListOsTypeArray = z.infer<typeof Security_Exceptions_API_ExceptionListOsTypeArray>;
export declare const Security_Exceptions_API_ExceptionList: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    created_by: z.ZodString;
    description: z.ZodString;
    id: z.ZodString;
    immutable: z.ZodBoolean;
    list_id: z.ZodString;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tie_breaker_id: z.ZodString;
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
    updated_at: z.ZodString;
    updated_by: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionList = z.infer<typeof Security_Exceptions_API_ExceptionList>;
//# sourceMappingURL=delete_exception_list.d.ts.map