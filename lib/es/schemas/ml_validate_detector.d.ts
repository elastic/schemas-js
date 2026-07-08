import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const MlAppliesTo: z.ZodEnum<{
    time: "time";
    actual: "actual";
    typical: "typical";
    diff_from_typical: "diff_from_typical";
}>;
export type MlAppliesTo = z.infer<typeof MlAppliesTo>;
export declare const MlConditionOperator: z.ZodEnum<{
    gt: "gt";
    gte: "gte";
    lt: "lt";
    lte: "lte";
}>;
export type MlConditionOperator = z.infer<typeof MlConditionOperator>;
export declare const MlRuleAction: z.ZodEnum<{
    skip_result: "skip_result";
    skip_model_update: "skip_model_update";
}>;
export type MlRuleAction = z.infer<typeof MlRuleAction>;
export declare const MlRuleCondition: z.ZodObject<{
    applies_to: z.ZodEnum<{
        time: "time";
        actual: "actual";
        typical: "typical";
        diff_from_typical: "diff_from_typical";
    }>;
    operator: z.ZodEnum<{
        gt: "gt";
        gte: "gte";
        lt: "lt";
        lte: "lte";
    }>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type MlRuleCondition = z.infer<typeof MlRuleCondition>;
export declare const MlFilterType: z.ZodEnum<{
    exclude: "exclude";
    include: "include";
}>;
export type MlFilterType = z.infer<typeof MlFilterType>;
export declare const MlFilterRef: z.ZodObject<{
    filter_id: z.ZodString;
    filter_type: z.ZodOptional<z.ZodEnum<{
        exclude: "exclude";
        include: "include";
    }>>;
}, z.core.$strip>;
export type MlFilterRef = z.infer<typeof MlFilterRef>;
export declare const MlDetectionRule: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        skip_result: "skip_result";
        skip_model_update: "skip_model_update";
    }>>>;
    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        applies_to: z.ZodEnum<{
            time: "time";
            actual: "actual";
            typical: "typical";
            diff_from_typical: "diff_from_typical";
        }>;
        operator: z.ZodEnum<{
            gt: "gt";
            gte: "gte";
            lt: "lt";
            lte: "lte";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>>>;
    scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        filter_id: z.ZodString;
        filter_type: z.ZodOptional<z.ZodEnum<{
            exclude: "exclude";
            include: "include";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MlDetectionRule = z.infer<typeof MlDetectionRule>;
export declare const MlExcludeFrequent: z.ZodEnum<{
    all: "all";
    none: "none";
    by: "by";
    over: "over";
}>;
export type MlExcludeFrequent = z.infer<typeof MlExcludeFrequent>;
export declare const MlDetector: z.ZodObject<{
    by_field_name: z.ZodOptional<z.ZodString>;
    custom_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            skip_result: "skip_result";
            skip_model_update: "skip_model_update";
        }>>>;
        conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            applies_to: z.ZodEnum<{
                time: "time";
                actual: "actual";
                typical: "typical";
                diff_from_typical: "diff_from_typical";
            }>;
            operator: z.ZodEnum<{
                gt: "gt";
                gte: "gte";
                lt: "lt";
                lte: "lte";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            filter_id: z.ZodString;
            filter_type: z.ZodOptional<z.ZodEnum<{
                exclude: "exclude";
                include: "include";
            }>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    detector_description: z.ZodOptional<z.ZodString>;
    detector_index: z.ZodOptional<z.ZodNumber>;
    exclude_frequent: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
        by: "by";
        over: "over";
    }>>;
    field_name: z.ZodOptional<z.ZodString>;
    function: z.ZodOptional<z.ZodString>;
    over_field_name: z.ZodOptional<z.ZodString>;
    partition_field_name: z.ZodOptional<z.ZodString>;
    use_null: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlDetector = z.infer<typeof MlDetector>;
/** Validate an anomaly detection job. */
export declare const MlValidateDetectorRequest: z.ZodObject<{
    detector: z.ZodObject<{
        by_field_name: z.ZodOptional<z.ZodString>;
        custom_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                skip_result: "skip_result";
                skip_model_update: "skip_model_update";
            }>>>;
            conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                applies_to: z.ZodEnum<{
                    time: "time";
                    actual: "actual";
                    typical: "typical";
                    diff_from_typical: "diff_from_typical";
                }>;
                operator: z.ZodEnum<{
                    gt: "gt";
                    gte: "gte";
                    lt: "lt";
                    lte: "lte";
                }>;
                value: z.ZodNumber;
            }, z.core.$strip>>>;
            scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                filter_id: z.ZodString;
                filter_type: z.ZodOptional<z.ZodEnum<{
                    exclude: "exclude";
                    include: "include";
                }>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        detector_description: z.ZodOptional<z.ZodString>;
        detector_index: z.ZodOptional<z.ZodNumber>;
        exclude_frequent: z.ZodOptional<z.ZodEnum<{
            all: "all";
            none: "none";
            by: "by";
            over: "over";
        }>>;
        field_name: z.ZodOptional<z.ZodString>;
        function: z.ZodOptional<z.ZodString>;
        over_field_name: z.ZodOptional<z.ZodString>;
        partition_field_name: z.ZodOptional<z.ZodString>;
        use_null: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MlValidateDetectorRequest = z.infer<typeof MlValidateDetectorRequest>;
export declare const MlValidateDetectorResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlValidateDetectorResponse = z.infer<typeof MlValidateDetectorResponse>;
//# sourceMappingURL=ml_validate_detector.d.ts.map