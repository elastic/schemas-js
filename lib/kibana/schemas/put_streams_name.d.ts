import { z } from 'zod';
export declare const Kibana_HTTP_APIs_QueryStreamUpsertRequest: z.ZodObject<{
    dashboards: z.ZodArray<z.ZodString>;
    queries: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        esql: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            run_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        severity_score: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            stats: "stats";
            match: "match";
        }>>;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
    stream: z.ZodObject<{
        description: z.ZodString;
        field_descriptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        query: z.ZodObject<{
            esql: z.ZodString;
            view: z.ZodString;
        }, z.core.$strip>;
        query_streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            query: "query";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_QueryStreamUpsertRequest = z.infer<typeof Kibana_HTTP_APIs_QueryStreamUpsertRequest>;
export declare const Kibana_HTTP_APIs_ConditionWithSteps: z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodObject<{
    else: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>>;
    steps: z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
}, z.core.$strip>>;
export type Kibana_HTTP_APIs_ConditionWithSteps = z.infer<typeof Kibana_HTTP_APIs_ConditionWithSteps>;
export declare const Kibana_HTTP_APIs_FilterCondition: z.ZodUnion<readonly [z.ZodObject<{
    contains: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    endsWith: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    eq: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    field: z.ZodString;
    gt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    gte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    lt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    lte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    neq: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    range: z.ZodOptional<z.ZodObject<{
        gt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        gte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        lt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        lte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    }, z.core.$strip>>;
    startsWith: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
}, z.core.$strip>, z.ZodObject<{
    exists: z.ZodOptional<z.ZodBoolean>;
    field: z.ZodString;
}, z.core.$strip>]>;
export type Kibana_HTTP_APIs_FilterCondition = z.infer<typeof Kibana_HTTP_APIs_FilterCondition>;
export declare const Kibana_HTTP_APIs_IngestStreamLifecycle: z.ZodUnion<readonly [z.ZodObject<{
    dsl: z.ZodObject<{
        data_retention: z.ZodOptional<z.ZodString>;
        downsample: z.ZodOptional<z.ZodArray<z.ZodObject<{
            after: z.ZodString;
            fixed_interval: z.ZodString;
        }, z.core.$strip>>>;
        frozen_after: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    ilm: z.ZodObject<{
        policy: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    inherit: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>]>;
export type Kibana_HTTP_APIs_IngestStreamLifecycle = z.infer<typeof Kibana_HTTP_APIs_IngestStreamLifecycle>;
export declare const Kibana_HTTP_APIs_FailureStore: z.ZodUnion<readonly [z.ZodObject<{
    inherit: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    disabled: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    lifecycle: z.ZodObject<{
        enabled: z.ZodObject<{
            data_retention: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    lifecycle: z.ZodObject<{
        disabled: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type Kibana_HTTP_APIs_FailureStore = z.infer<typeof Kibana_HTTP_APIs_FailureStore>;
export declare const Kibana_HTTP_APIs_ClassicFieldDefinitionConfig: z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        boolean: "boolean";
        text: "text";
        date: "date";
        long: "long";
        integer: "integer";
        double: "double";
        float: "float";
        version: "version";
        ip: "ip";
        keyword: "keyword";
        geo_point: "geo_point";
        byte: "byte";
        wildcard: "wildcard";
        short: "short";
        date_nanos: "date_nanos";
        half_float: "half_float";
        match_only_text: "match_only_text";
        unsigned_long: "unsigned_long";
    }>;
}, z.core.$strip>, z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        system: "system";
    }>;
}, z.core.$strip>]>>;
export type Kibana_HTTP_APIs_ClassicFieldDefinitionConfig = z.infer<typeof Kibana_HTTP_APIs_ClassicFieldDefinitionConfig>;
export declare const Kibana_HTTP_APIs_FieldDefinitionConfig: z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        boolean: "boolean";
        text: "text";
        date: "date";
        long: "long";
        integer: "integer";
        double: "double";
        float: "float";
        version: "version";
        ip: "ip";
        keyword: "keyword";
        geo_point: "geo_point";
        byte: "byte";
        wildcard: "wildcard";
        short: "short";
        date_nanos: "date_nanos";
        half_float: "half_float";
        match_only_text: "match_only_text";
        unsigned_long: "unsigned_long";
    }>;
}, z.core.$strip>, z.ZodObject<{
    description: z.ZodString;
    format: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodOptional<z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        system: "system";
    }>;
}, z.core.$strip>]>>;
export type Kibana_HTTP_APIs_FieldDefinitionConfig = z.infer<typeof Kibana_HTTP_APIs_FieldDefinitionConfig>;
export declare const Kibana_HTTP_APIs_StreamlangConditionBlock: z.ZodObject<{
    condition: z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodObject<{
        else: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>>;
        steps: z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
    }, z.core.$strip>>;
    customIdentifier: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_StreamlangConditionBlock = z.infer<typeof Kibana_HTTP_APIs_StreamlangConditionBlock>;
export declare const Kibana_HTTP_APIs_ClassicFieldDefinition: z.ZodRecord<z.ZodString, z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        boolean: "boolean";
        text: "text";
        date: "date";
        long: "long";
        integer: "integer";
        double: "double";
        float: "float";
        version: "version";
        ip: "ip";
        keyword: "keyword";
        geo_point: "geo_point";
        byte: "byte";
        wildcard: "wildcard";
        short: "short";
        date_nanos: "date_nanos";
        half_float: "half_float";
        match_only_text: "match_only_text";
        unsigned_long: "unsigned_long";
    }>;
}, z.core.$strip>, z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        system: "system";
    }>;
}, z.core.$strip>]>>>;
export type Kibana_HTTP_APIs_ClassicFieldDefinition = z.infer<typeof Kibana_HTTP_APIs_ClassicFieldDefinition>;
export declare const Kibana_HTTP_APIs_FieldDefinition: z.ZodRecord<z.ZodString, z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        boolean: "boolean";
        text: "text";
        date: "date";
        long: "long";
        integer: "integer";
        double: "double";
        float: "float";
        version: "version";
        ip: "ip";
        keyword: "keyword";
        geo_point: "geo_point";
        byte: "byte";
        wildcard: "wildcard";
        short: "short";
        date_nanos: "date_nanos";
        half_float: "half_float";
        match_only_text: "match_only_text";
        unsigned_long: "unsigned_long";
    }>;
}, z.core.$strip>, z.ZodObject<{
    description: z.ZodString;
    format: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodOptional<z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        system: "system";
    }>;
}, z.core.$strip>]>>>;
export type Kibana_HTTP_APIs_FieldDefinition = z.infer<typeof Kibana_HTTP_APIs_FieldDefinition>;
export declare const Kibana_HTTP_APIs_ClassicStreamUpsertRequest: z.ZodObject<{
    dashboards: z.ZodArray<z.ZodString>;
    queries: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        esql: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            run_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        severity_score: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            stats: "stats";
            match: "match";
        }>>;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
    stream: z.ZodObject<{
        description: z.ZodString;
        ingest: z.ZodObject<{
            classic: z.ZodObject<{
                field_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    format: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        boolean: "boolean";
                        text: "text";
                        date: "date";
                        long: "long";
                        integer: "integer";
                        double: "double";
                        float: "float";
                        version: "version";
                        ip: "ip";
                        keyword: "keyword";
                        geo_point: "geo_point";
                        byte: "byte";
                        wildcard: "wildcard";
                        short: "short";
                        date_nanos: "date_nanos";
                        half_float: "half_float";
                        match_only_text: "match_only_text";
                        unsigned_long: "unsigned_long";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        system: "system";
                    }>;
                }, z.core.$strip>]>>>>;
            }, z.core.$strip>;
            failure_store: z.ZodUnion<readonly [z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                disabled: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    enabled: z.ZodObject<{
                        data_retention: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    disabled: z.ZodObject<{}, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>]>;
            lifecycle: z.ZodUnion<readonly [z.ZodObject<{
                dsl: z.ZodObject<{
                    data_retention: z.ZodOptional<z.ZodString>;
                    downsample: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        after: z.ZodString;
                        fixed_interval: z.ZodString;
                    }, z.core.$strip>>>;
                    frozen_after: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                ilm: z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>]>;
            processing: z.ZodObject<{
                steps: z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
                updated_at: z.ZodOptional<z.ZodUnknown>;
            }, z.core.$strip>;
            settings: z.ZodObject<{
                'index.number_of_replicas': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.number_of_shards': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.refresh_interval': z.ZodOptional<z.ZodObject<{
                    value: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        query_streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            classic: "classic";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_ClassicStreamUpsertRequest = z.infer<typeof Kibana_HTTP_APIs_ClassicStreamUpsertRequest>;
export declare const Kibana_HTTP_APIs_WiredStreamUpsertRequest: z.ZodObject<{
    dashboards: z.ZodArray<z.ZodString>;
    queries: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        esql: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            run_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        severity_score: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            stats: "stats";
            match: "match";
        }>>;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
    stream: z.ZodObject<{
        description: z.ZodString;
        ingest: z.ZodObject<{
            failure_store: z.ZodUnion<readonly [z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                disabled: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    enabled: z.ZodObject<{
                        data_retention: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    disabled: z.ZodObject<{}, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>]>;
            lifecycle: z.ZodUnion<readonly [z.ZodObject<{
                dsl: z.ZodObject<{
                    data_retention: z.ZodOptional<z.ZodString>;
                    downsample: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        after: z.ZodString;
                        fixed_interval: z.ZodString;
                    }, z.core.$strip>>>;
                    frozen_after: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                ilm: z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>]>;
            processing: z.ZodObject<{
                steps: z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
                updated_at: z.ZodOptional<z.ZodUnknown>;
            }, z.core.$strip>;
            settings: z.ZodObject<{
                'index.number_of_replicas': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.number_of_shards': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.refresh_interval': z.ZodOptional<z.ZodObject<{
                    value: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            wired: z.ZodObject<{
                draft: z.ZodOptional<z.ZodBoolean>;
                fields: z.ZodRecord<z.ZodString, z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    format: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        boolean: "boolean";
                        text: "text";
                        date: "date";
                        long: "long";
                        integer: "integer";
                        double: "double";
                        float: "float";
                        version: "version";
                        ip: "ip";
                        keyword: "keyword";
                        geo_point: "geo_point";
                        byte: "byte";
                        wildcard: "wildcard";
                        short: "short";
                        date_nanos: "date_nanos";
                        half_float: "half_float";
                        match_only_text: "match_only_text";
                        unsigned_long: "unsigned_long";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    description: z.ZodString;
                    format: z.ZodOptional<z.ZodUnknown>;
                    type: z.ZodOptional<z.ZodUnknown>;
                }, z.core.$strip>, z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        system: "system";
                    }>;
                }, z.core.$strip>]>>>;
                routing: z.ZodArray<z.ZodObject<{
                    destination: z.ZodString;
                    draft: z.ZodOptional<z.ZodBoolean>;
                    status: z.ZodOptional<z.ZodEnum<{
                        enabled: "enabled";
                        disabled: "disabled";
                    }>>;
                    where: z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        query_streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            wired: "wired";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_WiredStreamUpsertRequest = z.infer<typeof Kibana_HTTP_APIs_WiredStreamUpsertRequest>;
export declare const Kibana_HTTP_APIs_StreamUpsertRequest: z.ZodUnion<readonly [z.ZodObject<{
    dashboards: z.ZodArray<z.ZodString>;
    queries: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        esql: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            run_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        severity_score: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            stats: "stats";
            match: "match";
        }>>;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
    stream: z.ZodObject<{
        description: z.ZodString;
        ingest: z.ZodObject<{
            failure_store: z.ZodUnion<readonly [z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                disabled: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    enabled: z.ZodObject<{
                        data_retention: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    disabled: z.ZodObject<{}, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>]>;
            lifecycle: z.ZodUnion<readonly [z.ZodObject<{
                dsl: z.ZodObject<{
                    data_retention: z.ZodOptional<z.ZodString>;
                    downsample: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        after: z.ZodString;
                        fixed_interval: z.ZodString;
                    }, z.core.$strip>>>;
                    frozen_after: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                ilm: z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>]>;
            processing: z.ZodObject<{
                steps: z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
                updated_at: z.ZodOptional<z.ZodUnknown>;
            }, z.core.$strip>;
            settings: z.ZodObject<{
                'index.number_of_replicas': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.number_of_shards': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.refresh_interval': z.ZodOptional<z.ZodObject<{
                    value: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            wired: z.ZodObject<{
                draft: z.ZodOptional<z.ZodBoolean>;
                fields: z.ZodRecord<z.ZodString, z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    format: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        boolean: "boolean";
                        text: "text";
                        date: "date";
                        long: "long";
                        integer: "integer";
                        double: "double";
                        float: "float";
                        version: "version";
                        ip: "ip";
                        keyword: "keyword";
                        geo_point: "geo_point";
                        byte: "byte";
                        wildcard: "wildcard";
                        short: "short";
                        date_nanos: "date_nanos";
                        half_float: "half_float";
                        match_only_text: "match_only_text";
                        unsigned_long: "unsigned_long";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    description: z.ZodString;
                    format: z.ZodOptional<z.ZodUnknown>;
                    type: z.ZodOptional<z.ZodUnknown>;
                }, z.core.$strip>, z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        system: "system";
                    }>;
                }, z.core.$strip>]>>>;
                routing: z.ZodArray<z.ZodObject<{
                    destination: z.ZodString;
                    draft: z.ZodOptional<z.ZodBoolean>;
                    status: z.ZodOptional<z.ZodEnum<{
                        enabled: "enabled";
                        disabled: "disabled";
                    }>>;
                    where: z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        query_streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            wired: "wired";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    dashboards: z.ZodArray<z.ZodString>;
    queries: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        esql: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            run_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        severity_score: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            stats: "stats";
            match: "match";
        }>>;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
    stream: z.ZodObject<{
        description: z.ZodString;
        ingest: z.ZodObject<{
            classic: z.ZodObject<{
                field_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodIntersection<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>, z.ZodUnion<readonly [z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    format: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        boolean: "boolean";
                        text: "text";
                        date: "date";
                        long: "long";
                        integer: "integer";
                        double: "double";
                        float: "float";
                        version: "version";
                        ip: "ip";
                        keyword: "keyword";
                        geo_point: "geo_point";
                        byte: "byte";
                        wildcard: "wildcard";
                        short: "short";
                        date_nanos: "date_nanos";
                        half_float: "half_float";
                        match_only_text: "match_only_text";
                        unsigned_long: "unsigned_long";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    description: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        system: "system";
                    }>;
                }, z.core.$strip>]>>>>;
            }, z.core.$strip>;
            failure_store: z.ZodUnion<readonly [z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                disabled: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    enabled: z.ZodObject<{
                        data_retention: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                lifecycle: z.ZodObject<{
                    disabled: z.ZodObject<{}, z.core.$strip>;
                }, z.core.$strip>;
            }, z.core.$strip>]>;
            lifecycle: z.ZodUnion<readonly [z.ZodObject<{
                dsl: z.ZodObject<{
                    data_retention: z.ZodOptional<z.ZodString>;
                    downsample: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        after: z.ZodString;
                        fixed_interval: z.ZodString;
                    }, z.core.$strip>>>;
                    frozen_after: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                ilm: z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                inherit: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>]>;
            processing: z.ZodObject<{
                steps: z.ZodArray<z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
                updated_at: z.ZodOptional<z.ZodUnknown>;
            }, z.core.$strip>;
            settings: z.ZodObject<{
                'index.number_of_replicas': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.number_of_shards': z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                'index.refresh_interval': z.ZodOptional<z.ZodObject<{
                    value: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        query_streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            classic: "classic";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    dashboards: z.ZodArray<z.ZodString>;
    queries: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        esql: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            run_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        severity_score: z.ZodOptional<z.ZodNumber>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            stats: "stats";
            match: "match";
        }>>;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
    stream: z.ZodObject<{
        description: z.ZodString;
        field_descriptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        query: z.ZodObject<{
            esql: z.ZodString;
            view: z.ZodString;
        }, z.core.$strip>;
        query_streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>>;
        type: z.ZodEnum<{
            query: "query";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type Kibana_HTTP_APIs_StreamUpsertRequest = z.infer<typeof Kibana_HTTP_APIs_StreamUpsertRequest>;
export declare const Kibana_HTTP_APIs_Condition: z.ZodTypeAny;
export type Kibana_HTTP_APIs_Condition = z.infer<typeof Kibana_HTTP_APIs_Condition>;
export declare const Kibana_HTTP_APIs_StreamlangStep: z.ZodTypeAny;
export type Kibana_HTTP_APIs_StreamlangStep = z.infer<typeof Kibana_HTTP_APIs_StreamlangStep>;
export declare const Kibana_HTTP_APIs_RecursiveRecord: z.ZodTypeAny;
export type Kibana_HTTP_APIs_RecursiveRecord = z.infer<typeof Kibana_HTTP_APIs_RecursiveRecord>;
//# sourceMappingURL=put_streams_name.d.ts.map