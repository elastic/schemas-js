import { z } from 'zod';
export declare const Security_Timeline_API_PinnedEventCreatedAndUpdatedMetadata: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_PinnedEventCreatedAndUpdatedMetadata = z.infer<typeof Security_Timeline_API_PinnedEventCreatedAndUpdatedMetadata>;
export declare const Security_Timeline_API_NoteCreatedAndUpdatedMetadata: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_NoteCreatedAndUpdatedMetadata = z.infer<typeof Security_Timeline_API_NoteCreatedAndUpdatedMetadata>;
export declare const Security_Timeline_API_TimelineType: z.ZodEnum<{
    default: "default";
    template: "template";
}>;
export type Security_Timeline_API_TimelineType = z.infer<typeof Security_Timeline_API_TimelineType>;
export declare const Security_Timeline_API_TimelineStatus: z.ZodEnum<{
    active: "active";
    draft: "draft";
    immutable: "immutable";
}>;
export type Security_Timeline_API_TimelineStatus = z.infer<typeof Security_Timeline_API_TimelineStatus>;
export declare const Security_Timeline_API_SortObject: z.ZodObject<{
    columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_SortObject = z.infer<typeof Security_Timeline_API_SortObject>;
export declare const Security_Timeline_API_SerializedFilterQueryResult: z.ZodObject<{
    filterQuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        kuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            expression: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        serializedQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_Timeline_API_SerializedFilterQueryResult = z.infer<typeof Security_Timeline_API_SerializedFilterQueryResult>;
export declare const Security_Timeline_API_FilterTimelineResult: z.ZodObject<{
    exists: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    match_all: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    meta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        controlledBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        disabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        formattedValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        index: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        negate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        params: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    missing: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    range: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    script: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_FilterTimelineResult = z.infer<typeof Security_Timeline_API_FilterTimelineResult>;
export declare const Security_Timeline_API_FavoriteTimelineResult: z.ZodObject<{
    favoriteDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_FavoriteTimelineResult = z.infer<typeof Security_Timeline_API_FavoriteTimelineResult>;
export declare const Security_Timeline_API_RowRendererId: z.ZodEnum<{
    plain: "plain";
    system: "system";
    alert: "alert";
    alerts: "alerts";
    auditd: "auditd";
    auditd_file: "auditd_file";
    library: "library";
    netflow: "netflow";
    registry: "registry";
    suricata: "suricata";
    system_dns: "system_dns";
    system_endgame_process: "system_endgame_process";
    system_file: "system_file";
    system_fim: "system_fim";
    system_security_event: "system_security_event";
    system_socket: "system_socket";
    threat_match: "threat_match";
    zeek: "zeek";
}>;
export type Security_Timeline_API_RowRendererId = z.infer<typeof Security_Timeline_API_RowRendererId>;
export declare const Security_Timeline_API_DataProviderType: z.ZodEnum<{
    default: "default";
    template: "template";
}>;
export type Security_Timeline_API_DataProviderType = z.infer<typeof Security_Timeline_API_DataProviderType>;
export declare const Security_Timeline_API_QueryMatchResult: z.ZodObject<{
    displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
}, z.core.$strip>;
export type Security_Timeline_API_QueryMatchResult = z.infer<typeof Security_Timeline_API_QueryMatchResult>;
export declare const Security_Timeline_API_ColumnHeaderResult: z.ZodObject<{
    aggregatable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    columnHeaderType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    example: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    indexes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    placeholder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    searchable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_ColumnHeaderResult = z.infer<typeof Security_Timeline_API_ColumnHeaderResult>;
export declare const Security_Timeline_API_SavedObjectResolveOutcome: z.ZodEnum<{
    exactMatch: "exactMatch";
    aliasMatch: "aliasMatch";
    conflict: "conflict";
}>;
export type Security_Timeline_API_SavedObjectResolveOutcome = z.infer<typeof Security_Timeline_API_SavedObjectResolveOutcome>;
export declare const Security_Timeline_API_SavedObjectResolveAliasPurpose: z.ZodEnum<{
    savedObjectConversion: "savedObjectConversion";
    savedObjectImport: "savedObjectImport";
}>;
export type Security_Timeline_API_SavedObjectResolveAliasPurpose = z.infer<typeof Security_Timeline_API_SavedObjectResolveAliasPurpose>;
export declare const Security_Timeline_API_BarePinnedEvent: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodString;
    timelineId: z.ZodString;
}, z.core.$strip>;
export type Security_Timeline_API_BarePinnedEvent = z.infer<typeof Security_Timeline_API_BarePinnedEvent>;
export declare const Security_Timeline_API_BareNote: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timelineId: z.ZodString;
}, z.core.$strip>;
export type Security_Timeline_API_BareNote = z.infer<typeof Security_Timeline_API_BareNote>;
export declare const Security_Timeline_API_Sort: z.ZodUnion<readonly [z.ZodObject<{
    columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, z.ZodArray<z.ZodObject<{
    columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>>]>;
export type Security_Timeline_API_Sort = z.infer<typeof Security_Timeline_API_Sort>;
export declare const Security_Timeline_API_DataProviderQueryMatch: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    queryMatch: z.ZodOptional<z.ZodObject<{
        displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodEnum<{
        default: "default";
        template: "template";
    }>>;
}, z.core.$strip>;
export type Security_Timeline_API_DataProviderQueryMatch = z.infer<typeof Security_Timeline_API_DataProviderQueryMatch>;
export declare const Security_Timeline_API_PinnedEvent: z.ZodIntersection<z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodString;
    timelineId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    pinnedEventId: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>;
export type Security_Timeline_API_PinnedEvent = z.infer<typeof Security_Timeline_API_PinnedEvent>;
export declare const Security_Timeline_API_Note: z.ZodIntersection<z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timelineId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    noteId: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>;
export type Security_Timeline_API_Note = z.infer<typeof Security_Timeline_API_Note>;
export declare const Security_Timeline_API_DataProviderResult: z.ZodObject<{
    and: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        queryMatch: z.ZodOptional<z.ZodObject<{
            displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodEnum<{
            default: "default";
            template: "template";
        }>>;
    }, z.core.$strip>>>>;
    enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    queryMatch: z.ZodOptional<z.ZodObject<{
        displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodEnum<{
        default: "default";
        template: "template";
    }>>;
}, z.core.$strip>;
export type Security_Timeline_API_DataProviderResult = z.infer<typeof Security_Timeline_API_DataProviderResult>;
export declare const Security_Timeline_API_SavedTimeline: z.ZodObject<{
    columns: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        aggregatable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        columnHeaderType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        example: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        indexes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        placeholder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        searchable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataProviders: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        and: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            queryMatch: z.ZodOptional<z.ZodObject<{
                displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodEnum<{
                default: "default";
                template: "template";
            }>>;
        }, z.core.$strip>>>>;
        enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        queryMatch: z.ZodOptional<z.ZodObject<{
            displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodEnum<{
            default: "default";
            template: "template";
        }>>;
    }, z.core.$strip>>>>;
    dataViewId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dateRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        end: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
        start: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
    }, z.core.$strip>>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eqlOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        eventCategoryField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
        tiebreakerField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestampField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    eventType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    excludedRowRendererIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
        plain: "plain";
        system: "system";
        alert: "alert";
        alerts: "alerts";
        auditd: "auditd";
        auditd_file: "auditd_file";
        library: "library";
        netflow: "netflow";
        registry: "registry";
        suricata: "suricata";
        system_dns: "system_dns";
        system_endgame_process: "system_endgame_process";
        system_file: "system_file";
        system_fim: "system_fim";
        system_security_event: "system_security_event";
        system_socket: "system_socket";
        threat_match: "threat_match";
        zeek: "zeek";
    }>>>>;
    favorite: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        favoriteDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    filters: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        exists: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        match_all: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        meta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            controlledBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            disabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            formattedValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            index: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            negate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            params: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        missing: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        range: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        script: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    indexNames: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    kqlMode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kqlQuery: z.ZodOptional<z.ZodObject<{
        filterQuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            kuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                expression: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            serializedQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    savedQueryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    savedSearchId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>]>>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        draft: "draft";
        immutable: "immutable";
    }>>;
    templateTimelineId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    templateTimelineVersion: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timelineType: z.ZodOptional<z.ZodEnum<{
        default: "default";
        template: "template";
    }>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_SavedTimeline = z.infer<typeof Security_Timeline_API_SavedTimeline>;
export declare const Security_Timeline_API_TimelineSavedToReturnObject: z.ZodObject<{
    columns: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        aggregatable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        columnHeaderType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        example: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        indexes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        placeholder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        searchable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataProviders: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        and: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            queryMatch: z.ZodOptional<z.ZodObject<{
                displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodEnum<{
                default: "default";
                template: "template";
            }>>;
        }, z.core.$strip>>>>;
        enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        queryMatch: z.ZodOptional<z.ZodObject<{
            displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodEnum<{
            default: "default";
            template: "template";
        }>>;
    }, z.core.$strip>>>>;
    dataViewId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dateRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        end: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
        start: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
    }, z.core.$strip>>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eqlOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        eventCategoryField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
        tiebreakerField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestampField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    eventType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    excludedRowRendererIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
        plain: "plain";
        system: "system";
        alert: "alert";
        alerts: "alerts";
        auditd: "auditd";
        auditd_file: "auditd_file";
        library: "library";
        netflow: "netflow";
        registry: "registry";
        suricata: "suricata";
        system_dns: "system_dns";
        system_endgame_process: "system_endgame_process";
        system_file: "system_file";
        system_fim: "system_fim";
        system_security_event: "system_security_event";
        system_socket: "system_socket";
        threat_match: "threat_match";
        zeek: "zeek";
    }>>>>;
    favorite: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        favoriteDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    filters: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        exists: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        match_all: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        meta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            controlledBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            disabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            formattedValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            index: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            negate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            params: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        missing: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        range: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        script: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    indexNames: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    kqlMode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kqlQuery: z.ZodOptional<z.ZodObject<{
        filterQuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            kuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                expression: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            serializedQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    savedQueryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    savedSearchId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>]>>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        draft: "draft";
        immutable: "immutable";
    }>>;
    templateTimelineId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    templateTimelineVersion: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timelineType: z.ZodOptional<z.ZodEnum<{
        default: "default";
        template: "template";
    }>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventIdToNoteIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodIntersection<z.ZodObject<{
        created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timelineId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        noteId: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>>>;
    noteIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodIntersection<z.ZodObject<{
        created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timelineId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        noteId: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>>>;
    pinnedEventIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    pinnedEventsSaveObject: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodIntersection<z.ZodObject<{
        created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventId: z.ZodString;
        timelineId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        pinnedEventId: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>>>>;
    savedObjectId: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
export type Security_Timeline_API_TimelineSavedToReturnObject = z.infer<typeof Security_Timeline_API_TimelineSavedToReturnObject>;
export declare const Security_Timeline_API_ResolvedTimeline: z.ZodObject<{
    alias_purpose: z.ZodOptional<z.ZodEnum<{
        savedObjectConversion: "savedObjectConversion";
        savedObjectImport: "savedObjectImport";
    }>>;
    alias_target_id: z.ZodOptional<z.ZodString>;
    outcome: z.ZodEnum<{
        exactMatch: "exactMatch";
        aliasMatch: "aliasMatch";
        conflict: "conflict";
    }>;
    timeline: z.ZodObject<{
        columns: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            aggregatable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            columnHeaderType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            example: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            indexes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            placeholder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            searchable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        dataProviders: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            and: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                queryMatch: z.ZodOptional<z.ZodObject<{
                    displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodEnum<{
                    default: "default";
                    template: "template";
                }>>;
            }, z.core.$strip>>>>;
            enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            excluded: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kqlQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            queryMatch: z.ZodOptional<z.ZodObject<{
                displayField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                displayValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                operator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodArray<z.ZodString>>]>>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodEnum<{
                default: "default";
                template: "template";
            }>>;
        }, z.core.$strip>>>>;
        dataViewId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        dateRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            end: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
            start: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
        }, z.core.$strip>>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eqlOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            eventCategoryField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNullable<z.ZodString>, z.ZodNullable<z.ZodNumber>]>>;
            tiebreakerField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            timestampField: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        eventType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        excludedRowRendererIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
            plain: "plain";
            system: "system";
            alert: "alert";
            alerts: "alerts";
            auditd: "auditd";
            auditd_file: "auditd_file";
            library: "library";
            netflow: "netflow";
            registry: "registry";
            suricata: "suricata";
            system_dns: "system_dns";
            system_endgame_process: "system_endgame_process";
            system_file: "system_file";
            system_fim: "system_fim";
            system_security_event: "system_security_event";
            system_socket: "system_socket";
            threat_match: "threat_match";
            zeek: "zeek";
        }>>>>;
        favorite: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            favoriteDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            userName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        filters: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            exists: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            match_all: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            meta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                controlledBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                disabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                formattedValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                index: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                negate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                params: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            missing: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            range: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            script: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        indexNames: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        kqlMode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kqlQuery: z.ZodOptional<z.ZodObject<{
            filterQuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                kuery: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    expression: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>>>;
                serializedQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        savedQueryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        savedSearchId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            columnId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            columnType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sortDirection: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>]>>;
        status: z.ZodOptional<z.ZodEnum<{
            active: "active";
            draft: "draft";
            immutable: "immutable";
        }>>;
        templateTimelineId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        templateTimelineVersion: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timelineType: z.ZodOptional<z.ZodEnum<{
            default: "default";
            template: "template";
        }>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventIdToNoteIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            timelineId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            noteId: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>>>>;
        noteIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            timelineId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            noteId: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>>>>;
        pinnedEventIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        pinnedEventsSaveObject: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            eventId: z.ZodString;
            timelineId: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            pinnedEventId: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>>>>;
        savedObjectId: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Timeline_API_ResolvedTimeline = z.infer<typeof Security_Timeline_API_ResolvedTimeline>;
//# sourceMappingURL=resolve_timeline.d.ts.map