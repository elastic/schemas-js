import { z } from 'zod';
export declare const Security_Exceptions_API_ExceptionListItemType: z.ZodEnum<{
    simple: "simple";
}>;
export type Security_Exceptions_API_ExceptionListItemType = z.infer<typeof Security_Exceptions_API_ExceptionListItemType>;
export declare const Security_Exceptions_API_ExceptionListItemTags: z.ZodArray<z.ZodString>;
export type Security_Exceptions_API_ExceptionListItemTags = z.infer<typeof Security_Exceptions_API_ExceptionListItemTags>;
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
export declare const Security_Exceptions_API_ExceptionListItemName: z.ZodString;
export type Security_Exceptions_API_ExceptionListItemName = z.infer<typeof Security_Exceptions_API_ExceptionListItemName>;
export declare const Security_Exceptions_API_ExceptionListItemMeta: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Exceptions_API_ExceptionListItemMeta = z.infer<typeof Security_Exceptions_API_ExceptionListItemMeta>;
export declare const Security_Exceptions_API_ExceptionListHumanId: z.ZodString;
export type Security_Exceptions_API_ExceptionListHumanId = z.infer<typeof Security_Exceptions_API_ExceptionListHumanId>;
export declare const Security_Exceptions_API_ExceptionListItemHumanId: z.ZodString;
export type Security_Exceptions_API_ExceptionListItemHumanId = z.infer<typeof Security_Exceptions_API_ExceptionListItemHumanId>;
export declare const Security_Exceptions_API_ExceptionListItemId: z.ZodString;
export type Security_Exceptions_API_ExceptionListItemId = z.infer<typeof Security_Exceptions_API_ExceptionListItemId>;
export declare const Security_Exceptions_API_ExceptionListItemExpireTime: z.ZodString;
export type Security_Exceptions_API_ExceptionListItemExpireTime = z.infer<typeof Security_Exceptions_API_ExceptionListItemExpireTime>;
export declare const Security_Exceptions_API_NonEmptyString: z.ZodString;
export type Security_Exceptions_API_NonEmptyString = z.infer<typeof Security_Exceptions_API_NonEmptyString>;
export declare const Security_Exceptions_API_ExceptionListItemEntryOperator: z.ZodEnum<{
    excluded: "excluded";
    included: "included";
}>;
export type Security_Exceptions_API_ExceptionListItemEntryOperator = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryOperator>;
export declare const Security_Exceptions_API_ListType: z.ZodEnum<{
    boolean: "boolean";
    text: "text";
    date: "date";
    long: "long";
    integer: "integer";
    double: "double";
    float: "float";
    ip: "ip";
    keyword: "keyword";
    geo_point: "geo_point";
    geo_shape: "geo_shape";
    byte: "byte";
    binary: "binary";
    short: "short";
    shape: "shape";
    date_nanos: "date_nanos";
    date_range: "date_range";
    double_range: "double_range";
    float_range: "float_range";
    half_float: "half_float";
    integer_range: "integer_range";
    ip_range: "ip_range";
    long_range: "long_range";
}>;
export type Security_Exceptions_API_ListType = z.infer<typeof Security_Exceptions_API_ListType>;
export declare const Security_Exceptions_API_ListId: z.ZodString;
export type Security_Exceptions_API_ListId = z.infer<typeof Security_Exceptions_API_ListId>;
export declare const Security_Exceptions_API_ExceptionListItemDescription: z.ZodString;
export type Security_Exceptions_API_ExceptionListItemDescription = z.infer<typeof Security_Exceptions_API_ExceptionListItemDescription>;
export declare const Security_Exceptions_API_EndpointArtifactTags: z.ZodArray<z.ZodString>;
export type Security_Exceptions_API_EndpointArtifactTags = z.infer<typeof Security_Exceptions_API_EndpointArtifactTags>;
export declare const Security_Exceptions_API_BlocklistHashOrPathEntry: z.ZodObject<{
    field: z.ZodEnum<{
        "file.hash.md5": "file.hash.md5";
        "file.hash.sha1": "file.hash.sha1";
        "file.hash.sha256": "file.hash.sha256";
        "file.path": "file.path";
        "file.path.caseless": "file.path.caseless";
    }>;
    operator: z.ZodEnum<{
        included: "included";
    }>;
    type: z.ZodEnum<{
        match_any: "match_any";
    }>;
    value: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Exceptions_API_BlocklistHashOrPathEntry = z.infer<typeof Security_Exceptions_API_BlocklistHashOrPathEntry>;
export declare const Security_Exceptions_API_BlocklistWindowsCodeSignatureEntry: z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            subject_name: "subject_name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>;
    field: z.ZodEnum<{
        "file.Ext.code_signature": "file.Ext.code_signature";
    }>;
    type: z.ZodEnum<{
        nested: "nested";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_BlocklistWindowsCodeSignatureEntry = z.infer<typeof Security_Exceptions_API_BlocklistWindowsCodeSignatureEntry>;
export declare const Security_Exceptions_API_TrustedAppPathEntry: z.ZodObject<{
    field: z.ZodEnum<{
        "process.executable.caseless": "process.executable.caseless";
    }>;
    operator: z.ZodEnum<{
        included: "included";
    }>;
    type: z.ZodEnum<{
        match: "match";
        wildcard: "wildcard";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppPathEntry = z.infer<typeof Security_Exceptions_API_TrustedAppPathEntry>;
export declare const Security_Exceptions_API_TrustedAppHashEntry: z.ZodObject<{
    field: z.ZodEnum<{
        "process.hash.md5": "process.hash.md5";
        "process.hash.sha1": "process.hash.sha1";
        "process.hash.sha256": "process.hash.sha256";
    }>;
    operator: z.ZodEnum<{
        included: "included";
    }>;
    type: z.ZodEnum<{
        match: "match";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppHashEntry = z.infer<typeof Security_Exceptions_API_TrustedAppHashEntry>;
export declare const Security_Exceptions_API_TrustedAppMacCodeSignatureEntry: z.ZodObject<{
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            subject_name: "subject_name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            trusted: "trusted";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodEnum<{
            true: "true";
        }>;
    }, z.core.$strip>]>>;
    field: z.ZodEnum<{
        "process.code_signature": "process.code_signature";
    }>;
    type: z.ZodEnum<{
        nested: "nested";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppMacCodeSignatureEntry = z.infer<typeof Security_Exceptions_API_TrustedAppMacCodeSignatureEntry>;
export declare const Security_Exceptions_API_TrustedAppWindowsCodeSignatureEntry: z.ZodObject<{
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            subject_name: "subject_name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            trusted: "trusted";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodEnum<{
            true: "true";
        }>;
    }, z.core.$strip>]>>;
    field: z.ZodEnum<{
        "process.Ext.code_signature": "process.Ext.code_signature";
    }>;
    type: z.ZodEnum<{
        nested: "nested";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppWindowsCodeSignatureEntry = z.infer<typeof Security_Exceptions_API_TrustedAppWindowsCodeSignatureEntry>;
export declare const Security_Exceptions_API_ExceptionListItemOsTypeArray: z.ZodArray<z.ZodEnum<{
    linux: "linux";
    macos: "macos";
    windows: "windows";
}>>;
export type Security_Exceptions_API_ExceptionListItemOsTypeArray = z.infer<typeof Security_Exceptions_API_ExceptionListItemOsTypeArray>;
export declare const Security_Exceptions_API_ExceptionListItemComment: z.ZodObject<{
    comment: z.ZodString;
    created_at: z.ZodString;
    created_by: z.ZodString;
    id: z.ZodString;
    updated_at: z.ZodOptional<z.ZodString>;
    updated_by: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemComment = z.infer<typeof Security_Exceptions_API_ExceptionListItemComment>;
export declare const Security_Exceptions_API_UpdateExceptionListItemComment: z.ZodObject<{
    comment: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemComment = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemComment>;
export declare const Security_Exceptions_API_ExceptionListItemEntryMatchWildcard: z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        wildcard: "wildcard";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemEntryMatchWildcard = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryMatchWildcard>;
export declare const Security_Exceptions_API_ExceptionListItemEntryExists: z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        exists: "exists";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemEntryExists = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryExists>;
export declare const Security_Exceptions_API_ExceptionListItemEntryMatchAny: z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match_any: "match_any";
    }>;
    value: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemEntryMatchAny = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryMatchAny>;
export declare const Security_Exceptions_API_ExceptionListItemEntryMatch: z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match: "match";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemEntryMatch = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryMatch>;
export declare const Security_Exceptions_API_ExceptionListItemEntryList: z.ZodObject<{
    field: z.ZodString;
    list: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<{
            boolean: "boolean";
            text: "text";
            date: "date";
            long: "long";
            integer: "integer";
            double: "double";
            float: "float";
            ip: "ip";
            keyword: "keyword";
            geo_point: "geo_point";
            geo_shape: "geo_shape";
            byte: "byte";
            binary: "binary";
            short: "short";
            shape: "shape";
            date_nanos: "date_nanos";
            date_range: "date_range";
            double_range: "double_range";
            float_range: "float_range";
            half_float: "half_float";
            integer_range: "integer_range";
            ip_range: "ip_range";
            long_range: "long_range";
        }>;
    }, z.core.$strip>;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        list: "list";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemEntryList = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryList>;
export declare const Security_Exceptions_API_HostIsolationProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "destination.ip": "destination.ip";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_HostIsolationProperties = z.infer<typeof Security_Exceptions_API_HostIsolationProperties>;
export declare const Security_Exceptions_API_TrustedDevicesWindowsMacProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedDevicesWindowsMacProperties = z.infer<typeof Security_Exceptions_API_TrustedDevicesWindowsMacProperties>;
export declare const Security_Exceptions_API_TrustedDevicesMacProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedDevicesMacProperties = z.infer<typeof Security_Exceptions_API_TrustedDevicesMacProperties>;
export declare const Security_Exceptions_API_TrustedDevicesWindowsProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "user.name": "user.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedDevicesWindowsProperties = z.infer<typeof Security_Exceptions_API_TrustedDevicesWindowsProperties>;
export declare const Security_Exceptions_API_BlocklistMacProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_BlocklistMacProperties = z.infer<typeof Security_Exceptions_API_BlocklistMacProperties>;
export declare const Security_Exceptions_API_BlocklistLinuxProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_BlocklistLinuxProperties = z.infer<typeof Security_Exceptions_API_BlocklistLinuxProperties>;
export declare const Security_Exceptions_API_BlocklistWindowsProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
                match_any: "match_any";
            }>;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        }, z.core.$strip>>;
        field: z.ZodEnum<{
            "file.Ext.code_signature": "file.Ext.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_BlocklistWindowsProperties = z.infer<typeof Security_Exceptions_API_BlocklistWindowsProperties>;
export declare const Security_Exceptions_API_TrustedAppsLinuxProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppsLinuxProperties = z.infer<typeof Security_Exceptions_API_TrustedAppsLinuxProperties>;
export declare const Security_Exceptions_API_TrustedAppsMacProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodEnum<{
                trusted: "trusted";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodEnum<{
                true: "true";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodEnum<{
            "process.code_signature": "process.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppsMacProperties = z.infer<typeof Security_Exceptions_API_TrustedAppsMacProperties>;
export declare const Security_Exceptions_API_TrustedAppsWindowsProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodEnum<{
                trusted: "trusted";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodEnum<{
                true: "true";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodEnum<{
            "process.Ext.code_signature": "process.Ext.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_TrustedAppsWindowsProperties = z.infer<typeof Security_Exceptions_API_TrustedAppsWindowsProperties>;
export declare const Security_Exceptions_API_ExceptionListItemCommentArray: z.ZodArray<z.ZodObject<{
    comment: z.ZodString;
    created_at: z.ZodString;
    created_by: z.ZodString;
    id: z.ZodString;
    updated_at: z.ZodOptional<z.ZodString>;
    updated_by: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Exceptions_API_ExceptionListItemCommentArray = z.infer<typeof Security_Exceptions_API_ExceptionListItemCommentArray>;
export declare const Security_Exceptions_API_UpdateExceptionListItemCommentArray: z.ZodArray<z.ZodObject<{
    comment: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Exceptions_API_UpdateExceptionListItemCommentArray = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemCommentArray>;
export declare const Security_Exceptions_API_ExceptionListItemEntryNestedEntryItem: z.ZodUnion<readonly [z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match: "match";
    }>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match_any: "match_any";
    }>;
    value: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        exists: "exists";
    }>;
}, z.core.$strip>]>;
export type Security_Exceptions_API_ExceptionListItemEntryNestedEntryItem = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryNestedEntryItem>;
export declare const Security_Exceptions_API_UpdateExceptionListItemBase: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemBase = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemBase>;
export declare const Security_Exceptions_API_ExceptionListItemEntryNested: z.ZodObject<{
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>]>>;
    field: z.ZodString;
    type: z.ZodEnum<{
        nested: "nested";
    }>;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItemEntryNested = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryNested>;
export declare const Security_Exceptions_API_UpdateExceptionListItemBlocklistMac: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemBlocklistMac = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemBlocklistMac>;
export declare const Security_Exceptions_API_UpdateExceptionListItemBlocklistLinux: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemBlocklistLinux = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemBlocklistLinux>;
export declare const Security_Exceptions_API_UpdateExceptionListItemBlocklistWindows: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
                match_any: "match_any";
            }>;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        }, z.core.$strip>>;
        field: z.ZodEnum<{
            "file.Ext.code_signature": "file.Ext.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemBlocklistWindows = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemBlocklistWindows>;
export declare const Security_Exceptions_API_UpdateExceptionListItemHostIsolation: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "destination.ip": "destination.ip";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemHostIsolation = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemHostIsolation>;
export declare const Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesWindowsMac: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesWindowsMac = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesWindowsMac>;
export declare const Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesMac: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesMac = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesMac>;
export declare const Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesWindows: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "user.name": "user.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesWindows = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemTrustedDevicesWindows>;
export declare const Security_Exceptions_API_UpdateExceptionListItemTrustedAppsLinux: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemTrustedAppsLinux = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemTrustedAppsLinux>;
export declare const Security_Exceptions_API_UpdateExceptionListItemTrustedAppsMac: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodEnum<{
                trusted: "trusted";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodEnum<{
                true: "true";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodEnum<{
            "process.code_signature": "process.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemTrustedAppsMac = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemTrustedAppsMac>;
export declare const Security_Exceptions_API_UpdateExceptionListItemTrustedAppsWindows: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodEnum<{
                trusted: "trusted";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodEnum<{
                true: "true";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodEnum<{
            "process.Ext.code_signature": "process.Ext.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemTrustedAppsWindows = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemTrustedAppsWindows>;
export declare const Security_Exceptions_API_ExceptionListItemEntry: z.ZodDiscriminatedUnion<[z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match: "match";
    }>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match_any: "match_any";
    }>;
    value: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    list: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<{
            boolean: "boolean";
            text: "text";
            date: "date";
            long: "long";
            integer: "integer";
            double: "double";
            float: "float";
            ip: "ip";
            keyword: "keyword";
            geo_point: "geo_point";
            geo_shape: "geo_shape";
            byte: "byte";
            binary: "binary";
            short: "short";
            shape: "shape";
            date_nanos: "date_nanos";
            date_range: "date_range";
            double_range: "double_range";
            float_range: "float_range";
            half_float: "half_float";
            integer_range: "integer_range";
            ip_range: "ip_range";
            long_range: "long_range";
        }>;
    }, z.core.$strip>;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        list: "list";
    }>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        exists: "exists";
    }>;
}, z.core.$strip>, z.ZodObject<{
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>]>>;
    field: z.ZodString;
    type: z.ZodEnum<{
        nested: "nested";
    }>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        wildcard: "wildcard";
    }>;
    value: z.ZodString;
}, z.core.$strip>], "type">;
export type Security_Exceptions_API_ExceptionListItemEntry = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntry>;
export declare const Security_Exceptions_API_ExceptionListItemEntryArray: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match: "match";
    }>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        match_any: "match_any";
    }>;
    value: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    list: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<{
            boolean: "boolean";
            text: "text";
            date: "date";
            long: "long";
            integer: "integer";
            double: "double";
            float: "float";
            ip: "ip";
            keyword: "keyword";
            geo_point: "geo_point";
            geo_shape: "geo_shape";
            byte: "byte";
            binary: "binary";
            short: "short";
            shape: "shape";
            date_nanos: "date_nanos";
            date_range: "date_range";
            double_range: "double_range";
            float_range: "float_range";
            half_float: "half_float";
            integer_range: "integer_range";
            ip_range: "ip_range";
            long_range: "long_range";
        }>;
    }, z.core.$strip>;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        list: "list";
    }>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        exists: "exists";
    }>;
}, z.core.$strip>, z.ZodObject<{
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>]>>;
    field: z.ZodString;
    type: z.ZodEnum<{
        nested: "nested";
    }>;
}, z.core.$strip>, z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        wildcard: "wildcard";
    }>;
    value: z.ZodString;
}, z.core.$strip>], "type">>;
export type Security_Exceptions_API_ExceptionListItemEntryArray = z.infer<typeof Security_Exceptions_API_ExceptionListItemEntryArray>;
export declare const Security_Exceptions_API_ExceptionListItem: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        created_at: z.ZodString;
        created_by: z.ZodString;
        id: z.ZodString;
        updated_at: z.ZodOptional<z.ZodString>;
        updated_by: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    created_at: z.ZodString;
    created_by: z.ZodString;
    description: z.ZodString;
    entries: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    item_id: z.ZodString;
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
        simple: "simple";
    }>;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListItem = z.infer<typeof Security_Exceptions_API_ExceptionListItem>;
export declare const Security_Exceptions_API_EventFiltersProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>>;
    list_id: z.ZodEnum<{
        endpoint_event_filters: "endpoint_event_filters";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_EventFiltersProperties = z.infer<typeof Security_Exceptions_API_EventFiltersProperties>;
export declare const Security_Exceptions_API_EndpointListProperties: z.ZodObject<{
    entries: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>>;
    list_id: z.ZodEnum<{
        endpoint_list: "endpoint_list";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_EndpointListProperties = z.infer<typeof Security_Exceptions_API_EndpointListProperties>;
export declare const Security_Exceptions_API_UpdateExceptionListItemGeneric: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>;
    list_id: z.ZodOptional<z.ZodString>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemGeneric = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemGeneric>;
export declare const Security_Exceptions_API_UpdateExceptionListItemEventFilters: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>>;
    list_id: z.ZodEnum<{
        endpoint_event_filters: "endpoint_event_filters";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemEventFilters = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemEventFilters>;
export declare const Security_Exceptions_API_UpdateExceptionListItemEndpointList: z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>>;
    list_id: z.ZodEnum<{
        endpoint_list: "endpoint_list";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_Exceptions_API_UpdateExceptionListItemEndpointList = z.infer<typeof Security_Exceptions_API_UpdateExceptionListItemEndpointList>;
export declare const UpdateExceptionListItemRequest: z.ZodUnion<readonly [z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>;
    list_id: z.ZodOptional<z.ZodString>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>>;
    list_id: z.ZodEnum<{
        endpoint_list: "endpoint_list";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodEnum<{
                trusted: "trusted";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodEnum<{
                true: "true";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodEnum<{
            "process.Ext.code_signature": "process.Ext.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodEnum<{
                trusted: "trusted";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodEnum<{
                true: "true";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodEnum<{
            "process.code_signature": "process.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "process.hash.md5": "process.hash.md5";
            "process.hash.sha1": "process.hash.sha1";
            "process.hash.sha256": "process.hash.sha256";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodEnum<{
            "process.executable.caseless": "process.executable.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_apps: "endpoint_trusted_apps";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "user.name": "user.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "host.name": "host.name";
            "device.serial_number": "device.serial_number";
            "device.type": "device.type";
            "device.vendor.name": "device.vendor.name";
            "device.vendor.id": "device.vendor.id";
            "device.product.id": "device.product.id";
            "device.product.name": "device.product.name";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
            wildcard: "wildcard";
            match_any: "match_any";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_trusted_devices: "endpoint_trusted_devices";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        list: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                boolean: "boolean";
                text: "text";
                date: "date";
                long: "long";
                integer: "integer";
                double: "double";
                float: "float";
                ip: "ip";
                keyword: "keyword";
                geo_point: "geo_point";
                geo_shape: "geo_shape";
                byte: "byte";
                binary: "binary";
                short: "short";
                shape: "shape";
                date_nanos: "date_nanos";
                date_range: "date_range";
                double_range: "double_range";
                float_range: "float_range";
                half_float: "half_float";
                integer_range: "integer_range";
                ip_range: "ip_range";
                long_range: "long_range";
            }>;
        }, z.core.$strip>;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            list: "list";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            exists: "exists";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                match_any: "match_any";
            }>;
            value: z.ZodArray<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            field: z.ZodString;
            operator: z.ZodEnum<{
                excluded: "excluded";
                included: "included";
            }>;
            type: z.ZodEnum<{
                exists: "exists";
            }>;
        }, z.core.$strip>]>>;
        field: z.ZodString;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            excluded: "excluded";
            included: "included";
        }>;
        type: z.ZodEnum<{
            wildcard: "wildcard";
        }>;
        value: z.ZodString;
    }, z.core.$strip>], "type">>>;
    list_id: z.ZodEnum<{
        endpoint_event_filters: "endpoint_event_filters";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "destination.ip": "destination.ip";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match: "match";
        }>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_host_isolation_exceptions: "endpoint_host_isolation_exceptions";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        entries: z.ZodArray<z.ZodObject<{
            field: z.ZodEnum<{
                subject_name: "subject_name";
            }>;
            operator: z.ZodEnum<{
                included: "included";
            }>;
            type: z.ZodEnum<{
                match: "match";
                match_any: "match_any";
            }>;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        }, z.core.$strip>>;
        field: z.ZodEnum<{
            "file.Ext.code_signature": "file.Ext.code_signature";
        }>;
        type: z.ZodEnum<{
            nested: "nested";
        }>;
    }, z.core.$strip>]>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        windows: "windows";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    _version: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        comment: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    expire_time: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodString;
    namespace_type: z.ZodOptional<z.ZodEnum<{
        agnostic: "agnostic";
        single: "single";
    }>>;
    type: z.ZodEnum<{
        simple: "simple";
    }>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<{
            "file.hash.md5": "file.hash.md5";
            "file.hash.sha1": "file.hash.sha1";
            "file.hash.sha256": "file.hash.sha256";
            "file.path": "file.path";
            "file.path.caseless": "file.path.caseless";
        }>;
        operator: z.ZodEnum<{
            included: "included";
        }>;
        type: z.ZodEnum<{
            match_any: "match_any";
        }>;
        value: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    list_id: z.ZodEnum<{
        endpoint_blocklists: "endpoint_blocklists";
    }>;
    os_types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        macos: "macos";
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>]>;
export type UpdateExceptionListItemRequest = z.infer<typeof UpdateExceptionListItemRequest>;
//# sourceMappingURL=update_exception_list_item.d.ts.map