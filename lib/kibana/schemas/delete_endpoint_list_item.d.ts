import { z } from 'zod';
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemType: z.ZodEnum<{
    simple: "simple";
}>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemType = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemType>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemTags: z.ZodArray<z.ZodString>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemTags = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemTags>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListOsType: z.ZodEnum<{
    linux: "linux";
    macos: "macos";
    windows: "windows";
}>;
export type Security_Endpoint_Exceptions_API_ExceptionListOsType = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListOsType>;
export declare const Security_Endpoint_Exceptions_API_ExceptionNamespaceType: z.ZodEnum<{
    agnostic: "agnostic";
    single: "single";
}>;
export type Security_Endpoint_Exceptions_API_ExceptionNamespaceType = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionNamespaceType>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemName: z.ZodString;
export type Security_Endpoint_Exceptions_API_ExceptionListItemName = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemName>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemMeta: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemMeta = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemMeta>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListHumanId: z.ZodString;
export type Security_Endpoint_Exceptions_API_ExceptionListHumanId = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListHumanId>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemHumanId: z.ZodString;
export type Security_Endpoint_Exceptions_API_ExceptionListItemHumanId = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemHumanId>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemId: z.ZodString;
export type Security_Endpoint_Exceptions_API_ExceptionListItemId = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemId>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemExpireTime: z.ZodString;
export type Security_Endpoint_Exceptions_API_ExceptionListItemExpireTime = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemExpireTime>;
export declare const Security_Endpoint_Exceptions_API_NonEmptyString: z.ZodString;
export type Security_Endpoint_Exceptions_API_NonEmptyString = z.infer<typeof Security_Endpoint_Exceptions_API_NonEmptyString>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryOperator: z.ZodEnum<{
    excluded: "excluded";
    included: "included";
}>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryOperator = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryOperator>;
export declare const Security_Endpoint_Exceptions_API_ListType: z.ZodEnum<{
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
export type Security_Endpoint_Exceptions_API_ListType = z.infer<typeof Security_Endpoint_Exceptions_API_ListType>;
export declare const Security_Endpoint_Exceptions_API_ListId: z.ZodString;
export type Security_Endpoint_Exceptions_API_ListId = z.infer<typeof Security_Endpoint_Exceptions_API_ListId>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemDescription: z.ZodString;
export type Security_Endpoint_Exceptions_API_ExceptionListItemDescription = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemDescription>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemOsTypeArray: z.ZodArray<z.ZodEnum<{
    linux: "linux";
    macos: "macos";
    windows: "windows";
}>>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemOsTypeArray = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemOsTypeArray>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemComment: z.ZodObject<{
    comment: z.ZodString;
    created_at: z.ZodString;
    created_by: z.ZodString;
    id: z.ZodString;
    updated_at: z.ZodOptional<z.ZodString>;
    updated_by: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemComment = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemComment>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatchWildcard: z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatchWildcard = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatchWildcard>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryExists: z.ZodObject<{
    field: z.ZodString;
    operator: z.ZodEnum<{
        excluded: "excluded";
        included: "included";
    }>;
    type: z.ZodEnum<{
        exists: "exists";
    }>;
}, z.core.$strip>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryExists = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryExists>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatchAny: z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatchAny = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatchAny>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatch: z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatch = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryMatch>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryList: z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryList = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryList>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemCommentArray: z.ZodArray<z.ZodObject<{
    comment: z.ZodString;
    created_at: z.ZodString;
    created_by: z.ZodString;
    id: z.ZodString;
    updated_at: z.ZodOptional<z.ZodString>;
    updated_by: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Endpoint_Exceptions_API_ExceptionListItemCommentArray = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemCommentArray>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryNestedEntryItem: z.ZodUnion<readonly [z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryNestedEntryItem = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryNestedEntryItem>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryNested: z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryNested = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryNested>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntry: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntry = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntry>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItemEntryArray: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItemEntryArray = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItemEntryArray>;
export declare const Security_Endpoint_Exceptions_API_ExceptionListItem: z.ZodObject<{
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
export type Security_Endpoint_Exceptions_API_ExceptionListItem = z.infer<typeof Security_Endpoint_Exceptions_API_ExceptionListItem>;
//# sourceMappingURL=delete_endpoint_list_item.d.ts.map