import { z } from 'zod';
export declare const SLOs_time_window: z.ZodObject<{
    duration: z.ZodString;
    type: z.ZodEnum<{
        rolling: "rolling";
        calendarAligned: "calendarAligned";
    }>;
}, z.core.$strip>;
export type SLOs_time_window = z.infer<typeof SLOs_time_window>;
export declare const SLOs_summary_status: z.ZodEnum<{
    NO_DATA: "NO_DATA";
    HEALTHY: "HEALTHY";
    DEGRADING: "DEGRADING";
    VIOLATED: "VIOLATED";
}>;
export type SLOs_summary_status = z.infer<typeof SLOs_summary_status>;
export declare const SLOs_error_budget: z.ZodObject<{
    consumed: z.ZodNumber;
    initial: z.ZodNumber;
    isEstimated: z.ZodBoolean;
    remaining: z.ZodNumber;
}, z.core.$strip>;
export type SLOs_error_budget = z.infer<typeof SLOs_error_budget>;
export declare const SLOs_settings: z.ZodObject<{
    frequency: z.ZodOptional<z.ZodString>;
    preventInitialBackfill: z.ZodOptional<z.ZodBoolean>;
    syncDelay: z.ZodOptional<z.ZodString>;
    syncField: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SLOs_settings = z.infer<typeof SLOs_settings>;
export declare const SLOs_objective: z.ZodObject<{
    target: z.ZodNumber;
    timesliceTarget: z.ZodOptional<z.ZodNumber>;
    timesliceWindow: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SLOs_objective = z.infer<typeof SLOs_objective>;
export declare const SLOs_timeslice_metric_doc_count_metric: z.ZodObject<{
    aggregation: z.ZodEnum<{
        doc_count: "doc_count";
    }>;
    filter: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
}, z.core.$strip>;
export type SLOs_timeslice_metric_doc_count_metric = z.infer<typeof SLOs_timeslice_metric_doc_count_metric>;
export declare const SLOs_timeslice_metric_percentile_metric: z.ZodObject<{
    aggregation: z.ZodEnum<{
        percentile: "percentile";
    }>;
    field: z.ZodString;
    filter: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    percentile: z.ZodNumber;
}, z.core.$strip>;
export type SLOs_timeslice_metric_percentile_metric = z.infer<typeof SLOs_timeslice_metric_percentile_metric>;
export declare const SLOs_timeslice_metric_basic_metric_with_field: z.ZodObject<{
    aggregation: z.ZodEnum<{
        max: "max";
        min: "min";
        last_value: "last_value";
        sum: "sum";
        avg: "avg";
        cardinality: "cardinality";
        std_deviation: "std_deviation";
    }>;
    field: z.ZodString;
    filter: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
}, z.core.$strip>;
export type SLOs_timeslice_metric_basic_metric_with_field = z.infer<typeof SLOs_timeslice_metric_basic_metric_with_field>;
export declare const SLOs_indicator_properties_histogram: z.ZodObject<{
    params: z.ZodObject<{
        dataViewId: z.ZodOptional<z.ZodString>;
        filter: z.ZodOptional<z.ZodString>;
        good: z.ZodObject<{
            aggregation: z.ZodEnum<{
                range: "range";
                value_count: "value_count";
            }>;
            field: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            from: z.ZodOptional<z.ZodNumber>;
            to: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        index: z.ZodString;
        timestampField: z.ZodString;
        total: z.ZodObject<{
            aggregation: z.ZodEnum<{
                range: "range";
                value_count: "value_count";
            }>;
            field: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            from: z.ZodOptional<z.ZodNumber>;
            to: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type SLOs_indicator_properties_histogram = z.infer<typeof SLOs_indicator_properties_histogram>;
export declare const SLOs_indicator_properties_custom_metric: z.ZodObject<{
    params: z.ZodObject<{
        dataViewId: z.ZodOptional<z.ZodString>;
        filter: z.ZodOptional<z.ZodString>;
        good: z.ZodObject<{
            equation: z.ZodString;
            metrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                aggregation: z.ZodEnum<{
                    sum: "sum";
                }>;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggregation: z.ZodEnum<{
                    doc_count: "doc_count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>]>>;
        }, z.core.$strip>;
        index: z.ZodString;
        timestampField: z.ZodString;
        total: z.ZodObject<{
            equation: z.ZodString;
            metrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                aggregation: z.ZodEnum<{
                    sum: "sum";
                }>;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggregation: z.ZodEnum<{
                    doc_count: "doc_count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>]>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type SLOs_indicator_properties_custom_metric = z.infer<typeof SLOs_indicator_properties_custom_metric>;
export declare const SLOs_indicator_properties_apm_latency: z.ZodObject<{
    params: z.ZodObject<{
        environment: z.ZodString;
        filter: z.ZodOptional<z.ZodString>;
        index: z.ZodString;
        service: z.ZodString;
        threshold: z.ZodNumber;
        transactionName: z.ZodString;
        transactionType: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type SLOs_indicator_properties_apm_latency = z.infer<typeof SLOs_indicator_properties_apm_latency>;
export declare const SLOs_indicator_properties_apm_availability: z.ZodObject<{
    params: z.ZodObject<{
        environment: z.ZodString;
        filter: z.ZodOptional<z.ZodString>;
        index: z.ZodString;
        service: z.ZodString;
        transactionName: z.ZodString;
        transactionType: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type SLOs_indicator_properties_apm_availability = z.infer<typeof SLOs_indicator_properties_apm_availability>;
export declare const SLOs_filter_meta: z.ZodObject<{
    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    controlledBy: z.ZodOptional<z.ZodString>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    field: z.ZodOptional<z.ZodString>;
    group: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodString>;
    isMultiIndex: z.ZodOptional<z.ZodBoolean>;
    key: z.ZodOptional<z.ZodString>;
    negate: z.ZodOptional<z.ZodBoolean>;
    params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    type: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SLOs_filter_meta = z.infer<typeof SLOs_filter_meta>;
export declare const SLOs_group_by: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type SLOs_group_by = z.infer<typeof SLOs_group_by>;
export declare const SLOs_budgeting_method: z.ZodEnum<{
    occurrences: "occurrences";
    timeslices: "timeslices";
}>;
export type SLOs_budgeting_method = z.infer<typeof SLOs_budgeting_method>;
export declare const SLOs_summary: z.ZodObject<{
    errorBudget: z.ZodObject<{
        consumed: z.ZodNumber;
        initial: z.ZodNumber;
        isEstimated: z.ZodBoolean;
        remaining: z.ZodNumber;
    }, z.core.$strip>;
    sliValue: z.ZodNumber;
    status: z.ZodEnum<{
        NO_DATA: "NO_DATA";
        HEALTHY: "HEALTHY";
        DEGRADING: "DEGRADING";
        VIOLATED: "VIOLATED";
    }>;
}, z.core.$strip>;
export type SLOs_summary = z.infer<typeof SLOs_summary>;
export declare const SLOs_indicator_properties_timeslice_metric: z.ZodObject<{
    params: z.ZodObject<{
        dataViewId: z.ZodOptional<z.ZodString>;
        filter: z.ZodOptional<z.ZodString>;
        index: z.ZodString;
        metric: z.ZodObject<{
            comparator: z.ZodEnum<{
                GT: "GT";
                GTE: "GTE";
                LT: "LT";
                LTE: "LTE";
            }>;
            equation: z.ZodString;
            metrics: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                aggregation: z.ZodEnum<{
                    max: "max";
                    min: "min";
                    last_value: "last_value";
                    sum: "sum";
                    avg: "avg";
                    cardinality: "cardinality";
                    std_deviation: "std_deviation";
                }>;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                aggregation: z.ZodEnum<{
                    percentile: "percentile";
                }>;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                percentile: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                aggregation: z.ZodEnum<{
                    doc_count: "doc_count";
                }>;
                filter: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
            }, z.core.$strip>], "aggregation">>;
            threshold: z.ZodNumber;
        }, z.core.$strip>;
        timestampField: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type SLOs_indicator_properties_timeslice_metric = z.infer<typeof SLOs_indicator_properties_timeslice_metric>;
export declare const SLOs_filter: z.ZodObject<{
    meta: z.ZodOptional<z.ZodObject<{
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        controlledBy: z.ZodOptional<z.ZodString>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        field: z.ZodOptional<z.ZodString>;
        group: z.ZodOptional<z.ZodString>;
        index: z.ZodOptional<z.ZodString>;
        isMultiIndex: z.ZodOptional<z.ZodBoolean>;
        key: z.ZodOptional<z.ZodString>;
        negate: z.ZodOptional<z.ZodBoolean>;
        params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type SLOs_filter = z.infer<typeof SLOs_filter>;
export declare const SLOs_kql_with_filters_total: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        meta: z.ZodOptional<z.ZodObject<{
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            controlledBy: z.ZodOptional<z.ZodString>;
            disabled: z.ZodOptional<z.ZodBoolean>;
            field: z.ZodOptional<z.ZodString>;
            group: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
            isMultiIndex: z.ZodOptional<z.ZodBoolean>;
            key: z.ZodOptional<z.ZodString>;
            negate: z.ZodOptional<z.ZodBoolean>;
            params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>>;
    kqlQuery: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type SLOs_kql_with_filters_total = z.infer<typeof SLOs_kql_with_filters_total>;
export declare const SLOs_kql_with_filters_good: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        meta: z.ZodOptional<z.ZodObject<{
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            controlledBy: z.ZodOptional<z.ZodString>;
            disabled: z.ZodOptional<z.ZodBoolean>;
            field: z.ZodOptional<z.ZodString>;
            group: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
            isMultiIndex: z.ZodOptional<z.ZodBoolean>;
            key: z.ZodOptional<z.ZodString>;
            negate: z.ZodOptional<z.ZodBoolean>;
            params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>>;
    kqlQuery: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type SLOs_kql_with_filters_good = z.infer<typeof SLOs_kql_with_filters_good>;
export declare const SLOs_kql_with_filters: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        meta: z.ZodOptional<z.ZodObject<{
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            controlledBy: z.ZodOptional<z.ZodString>;
            disabled: z.ZodOptional<z.ZodBoolean>;
            field: z.ZodOptional<z.ZodString>;
            group: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
            isMultiIndex: z.ZodOptional<z.ZodBoolean>;
            key: z.ZodOptional<z.ZodString>;
            negate: z.ZodOptional<z.ZodBoolean>;
            params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>>;
    kqlQuery: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type SLOs_kql_with_filters = z.infer<typeof SLOs_kql_with_filters>;
export declare const SLOs_indicator_properties_custom_kql: z.ZodObject<{
    params: z.ZodObject<{
        dataViewId: z.ZodOptional<z.ZodString>;
        filter: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                meta: z.ZodOptional<z.ZodObject<{
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    controlledBy: z.ZodOptional<z.ZodString>;
                    disabled: z.ZodOptional<z.ZodBoolean>;
                    field: z.ZodOptional<z.ZodString>;
                    group: z.ZodOptional<z.ZodString>;
                    index: z.ZodOptional<z.ZodString>;
                    isMultiIndex: z.ZodOptional<z.ZodBoolean>;
                    key: z.ZodOptional<z.ZodString>;
                    negate: z.ZodOptional<z.ZodBoolean>;
                    params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>>;
            kqlQuery: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
        good: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                meta: z.ZodOptional<z.ZodObject<{
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    controlledBy: z.ZodOptional<z.ZodString>;
                    disabled: z.ZodOptional<z.ZodBoolean>;
                    field: z.ZodOptional<z.ZodString>;
                    group: z.ZodOptional<z.ZodString>;
                    index: z.ZodOptional<z.ZodString>;
                    isMultiIndex: z.ZodOptional<z.ZodBoolean>;
                    key: z.ZodOptional<z.ZodString>;
                    negate: z.ZodOptional<z.ZodBoolean>;
                    params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>>;
            kqlQuery: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>;
        index: z.ZodString;
        timestampField: z.ZodString;
        total: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                meta: z.ZodOptional<z.ZodObject<{
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    controlledBy: z.ZodOptional<z.ZodString>;
                    disabled: z.ZodOptional<z.ZodBoolean>;
                    field: z.ZodOptional<z.ZodString>;
                    group: z.ZodOptional<z.ZodString>;
                    index: z.ZodOptional<z.ZodString>;
                    isMultiIndex: z.ZodOptional<z.ZodBoolean>;
                    key: z.ZodOptional<z.ZodString>;
                    negate: z.ZodOptional<z.ZodBoolean>;
                    params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>>;
            kqlQuery: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type SLOs_indicator_properties_custom_kql = z.infer<typeof SLOs_indicator_properties_custom_kql>;
export declare const SLOs_slo_with_summary_response: z.ZodObject<{
    budgetingMethod: z.ZodEnum<{
        occurrences: "occurrences";
        timeslices: "timeslices";
    }>;
    createdAt: z.ZodString;
    description: z.ZodString;
    enabled: z.ZodBoolean;
    groupBy: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    id: z.ZodString;
    indicator: z.ZodDiscriminatedUnion<[z.ZodObject<{
        params: z.ZodObject<{
            dataViewId: z.ZodOptional<z.ZodString>;
            filter: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    meta: z.ZodOptional<z.ZodObject<{
                        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        controlledBy: z.ZodOptional<z.ZodString>;
                        disabled: z.ZodOptional<z.ZodBoolean>;
                        field: z.ZodOptional<z.ZodString>;
                        group: z.ZodOptional<z.ZodString>;
                        index: z.ZodOptional<z.ZodString>;
                        isMultiIndex: z.ZodOptional<z.ZodBoolean>;
                        key: z.ZodOptional<z.ZodString>;
                        negate: z.ZodOptional<z.ZodBoolean>;
                        params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        type: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>>;
                kqlQuery: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>>;
            good: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    meta: z.ZodOptional<z.ZodObject<{
                        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        controlledBy: z.ZodOptional<z.ZodString>;
                        disabled: z.ZodOptional<z.ZodBoolean>;
                        field: z.ZodOptional<z.ZodString>;
                        group: z.ZodOptional<z.ZodString>;
                        index: z.ZodOptional<z.ZodString>;
                        isMultiIndex: z.ZodOptional<z.ZodBoolean>;
                        key: z.ZodOptional<z.ZodString>;
                        negate: z.ZodOptional<z.ZodBoolean>;
                        params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        type: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>>;
                kqlQuery: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>;
            index: z.ZodString;
            timestampField: z.ZodString;
            total: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    meta: z.ZodOptional<z.ZodObject<{
                        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        controlledBy: z.ZodOptional<z.ZodString>;
                        disabled: z.ZodOptional<z.ZodBoolean>;
                        field: z.ZodOptional<z.ZodString>;
                        group: z.ZodOptional<z.ZodString>;
                        index: z.ZodOptional<z.ZodString>;
                        isMultiIndex: z.ZodOptional<z.ZodBoolean>;
                        key: z.ZodOptional<z.ZodString>;
                        negate: z.ZodOptional<z.ZodBoolean>;
                        params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        type: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    query: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>>;
                kqlQuery: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        params: z.ZodObject<{
            environment: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            index: z.ZodString;
            service: z.ZodString;
            transactionName: z.ZodString;
            transactionType: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        params: z.ZodObject<{
            environment: z.ZodString;
            filter: z.ZodOptional<z.ZodString>;
            index: z.ZodString;
            service: z.ZodString;
            threshold: z.ZodNumber;
            transactionName: z.ZodString;
            transactionType: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        params: z.ZodObject<{
            dataViewId: z.ZodOptional<z.ZodString>;
            filter: z.ZodOptional<z.ZodString>;
            good: z.ZodObject<{
                equation: z.ZodString;
                metrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        sum: "sum";
                    }>;
                    field: z.ZodString;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        doc_count: "doc_count";
                    }>;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            index: z.ZodString;
            timestampField: z.ZodString;
            total: z.ZodObject<{
                equation: z.ZodString;
                metrics: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        sum: "sum";
                    }>;
                    field: z.ZodString;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        doc_count: "doc_count";
                    }>;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        params: z.ZodObject<{
            dataViewId: z.ZodOptional<z.ZodString>;
            filter: z.ZodOptional<z.ZodString>;
            good: z.ZodObject<{
                aggregation: z.ZodEnum<{
                    range: "range";
                    value_count: "value_count";
                }>;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                from: z.ZodOptional<z.ZodNumber>;
                to: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            index: z.ZodString;
            timestampField: z.ZodString;
            total: z.ZodObject<{
                aggregation: z.ZodEnum<{
                    range: "range";
                    value_count: "value_count";
                }>;
                field: z.ZodString;
                filter: z.ZodOptional<z.ZodString>;
                from: z.ZodOptional<z.ZodNumber>;
                to: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        params: z.ZodObject<{
            dataViewId: z.ZodOptional<z.ZodString>;
            filter: z.ZodOptional<z.ZodString>;
            index: z.ZodString;
            metric: z.ZodObject<{
                comparator: z.ZodEnum<{
                    GT: "GT";
                    GTE: "GTE";
                    LT: "LT";
                    LTE: "LTE";
                }>;
                equation: z.ZodString;
                metrics: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        max: "max";
                        min: "min";
                        last_value: "last_value";
                        sum: "sum";
                        avg: "avg";
                        cardinality: "cardinality";
                        std_deviation: "std_deviation";
                    }>;
                    field: z.ZodString;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        percentile: "percentile";
                    }>;
                    field: z.ZodString;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                    percentile: z.ZodNumber;
                }, z.core.$strip>, z.ZodObject<{
                    aggregation: z.ZodEnum<{
                        doc_count: "doc_count";
                    }>;
                    filter: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                }, z.core.$strip>], "aggregation">>;
                threshold: z.ZodNumber;
            }, z.core.$strip>;
            timestampField: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>], "type">;
    instanceId: z.ZodString;
    name: z.ZodString;
    objective: z.ZodObject<{
        target: z.ZodNumber;
        timesliceTarget: z.ZodOptional<z.ZodNumber>;
        timesliceWindow: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    revision: z.ZodNumber;
    settings: z.ZodObject<{
        frequency: z.ZodOptional<z.ZodString>;
        preventInitialBackfill: z.ZodOptional<z.ZodBoolean>;
        syncDelay: z.ZodOptional<z.ZodString>;
        syncField: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    summary: z.ZodObject<{
        errorBudget: z.ZodObject<{
            consumed: z.ZodNumber;
            initial: z.ZodNumber;
            isEstimated: z.ZodBoolean;
            remaining: z.ZodNumber;
        }, z.core.$strip>;
        sliValue: z.ZodNumber;
        status: z.ZodEnum<{
            NO_DATA: "NO_DATA";
            HEALTHY: "HEALTHY";
            DEGRADING: "DEGRADING";
            VIOLATED: "VIOLATED";
        }>;
    }, z.core.$strip>;
    tags: z.ZodArray<z.ZodString>;
    timeWindow: z.ZodObject<{
        duration: z.ZodString;
        type: z.ZodEnum<{
            rolling: "rolling";
            calendarAligned: "calendarAligned";
        }>;
    }, z.core.$strip>;
    updatedAt: z.ZodString;
    version: z.ZodNumber;
}, z.core.$strip>;
export type SLOs_slo_with_summary_response = z.infer<typeof SLOs_slo_with_summary_response>;
//# sourceMappingURL=get_slo_op.d.ts.map