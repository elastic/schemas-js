import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
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
export declare const MlClassificationInferenceOptions: z.ZodObject<{
    num_top_classes: z.ZodOptional<z.ZodNumber>;
    num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
    prediction_field_type: z.ZodOptional<z.ZodString>;
    results_field: z.ZodOptional<z.ZodString>;
    top_classes_results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlClassificationInferenceOptions = z.infer<typeof MlClassificationInferenceOptions>;
export declare const MlTokenizationTruncate: z.ZodEnum<{
    none: "none";
    first: "first";
    second: "second";
}>;
export type MlTokenizationTruncate = z.infer<typeof MlTokenizationTruncate>;
export declare const MlNlpTokenizationUpdateOptions: z.ZodObject<{
    truncate: z.ZodOptional<z.ZodEnum<{
        none: "none";
        first: "first";
        second: "second";
    }>>;
    span: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlNlpTokenizationUpdateOptions = z.infer<typeof MlNlpTokenizationUpdateOptions>;
export declare const MlFillMaskInferenceUpdateOptions: z.ZodObject<{
    num_top_classes: z.ZodOptional<z.ZodNumber>;
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlFillMaskInferenceUpdateOptions = z.infer<typeof MlFillMaskInferenceUpdateOptions>;
export declare const MlRegressionInferenceOptions: z.ZodObject<{
    results_field: z.ZodOptional<z.ZodString>;
    num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlRegressionInferenceOptions = z.infer<typeof MlRegressionInferenceOptions>;
export declare const MlTextClassificationInferenceUpdateOptions: z.ZodObject<{
    num_top_classes: z.ZodOptional<z.ZodNumber>;
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
    classification_labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type MlTextClassificationInferenceUpdateOptions = z.infer<typeof MlTextClassificationInferenceUpdateOptions>;
export declare const MlZeroShotClassificationInferenceUpdateOptions: z.ZodObject<{
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
    multi_label: z.ZodOptional<z.ZodBoolean>;
    labels: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MlZeroShotClassificationInferenceUpdateOptions = z.infer<typeof MlZeroShotClassificationInferenceUpdateOptions>;
export declare const MlNerInferenceUpdateOptions: z.ZodObject<{
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlNerInferenceUpdateOptions = z.infer<typeof MlNerInferenceUpdateOptions>;
export declare const MlPassThroughInferenceUpdateOptions: z.ZodObject<{
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlPassThroughInferenceUpdateOptions = z.infer<typeof MlPassThroughInferenceUpdateOptions>;
export declare const MlTextEmbeddingInferenceUpdateOptions: z.ZodObject<{
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlTextEmbeddingInferenceUpdateOptions = z.infer<typeof MlTextEmbeddingInferenceUpdateOptions>;
export declare const MlTextExpansionInferenceUpdateOptions: z.ZodObject<{
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlTextExpansionInferenceUpdateOptions = z.infer<typeof MlTextExpansionInferenceUpdateOptions>;
export declare const MlQuestionAnsweringInferenceUpdateOptions: z.ZodObject<{
    question: z.ZodString;
    num_top_classes: z.ZodOptional<z.ZodNumber>;
    tokenization: z.ZodOptional<z.ZodObject<{
        truncate: z.ZodOptional<z.ZodEnum<{
            none: "none";
            first: "first";
            second: "second";
        }>>;
        span: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    results_field: z.ZodOptional<z.ZodString>;
    max_answer_length: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlQuestionAnsweringInferenceUpdateOptions = z.infer<typeof MlQuestionAnsweringInferenceUpdateOptions>;
export declare const MlInferenceConfigUpdateContainer: z.ZodUnion<readonly [z.ZodObject<{
    regression: z.ZodObject<{
        results_field: z.ZodOptional<z.ZodString>;
        num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    classification: z.ZodObject<{
        num_top_classes: z.ZodOptional<z.ZodNumber>;
        num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
        prediction_field_type: z.ZodOptional<z.ZodString>;
        results_field: z.ZodOptional<z.ZodString>;
        top_classes_results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    text_classification: z.ZodObject<{
        num_top_classes: z.ZodOptional<z.ZodNumber>;
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
        classification_labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    zero_shot_classification: z.ZodObject<{
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
        multi_label: z.ZodOptional<z.ZodBoolean>;
        labels: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    fill_mask: z.ZodObject<{
        num_top_classes: z.ZodOptional<z.ZodNumber>;
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    ner: z.ZodObject<{
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    pass_through: z.ZodObject<{
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding: z.ZodObject<{
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    text_expansion: z.ZodObject<{
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    question_answering: z.ZodObject<{
        question: z.ZodString;
        num_top_classes: z.ZodOptional<z.ZodNumber>;
        tokenization: z.ZodOptional<z.ZodObject<{
            truncate: z.ZodOptional<z.ZodEnum<{
                none: "none";
                first: "first";
                second: "second";
            }>>;
            span: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        results_field: z.ZodOptional<z.ZodString>;
        max_answer_length: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type MlInferenceConfigUpdateContainer = z.infer<typeof MlInferenceConfigUpdateContainer>;
export declare const MlTrainedModelEntities: z.ZodObject<{
    class_name: z.ZodString;
    class_probability: z.ZodNumber;
    entity: z.ZodString;
    start_pos: z.ZodNumber;
    end_pos: z.ZodNumber;
}, z.core.$strip>;
export type MlTrainedModelEntities = z.infer<typeof MlTrainedModelEntities>;
export declare const MlPredictedValue: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>]>;
export type MlPredictedValue = z.infer<typeof MlPredictedValue>;
export declare const MlTopClassEntry: z.ZodObject<{
    class_name: z.ZodString;
    class_probability: z.ZodNumber;
    class_score: z.ZodNumber;
}, z.core.$strip>;
export type MlTopClassEntry = z.infer<typeof MlTopClassEntry>;
export declare const MlTrainedModelInferenceClassImportance: z.ZodObject<{
    class_name: z.ZodString;
    importance: z.ZodNumber;
}, z.core.$strip>;
export type MlTrainedModelInferenceClassImportance = z.infer<typeof MlTrainedModelInferenceClassImportance>;
export declare const MlTrainedModelInferenceFeatureImportance: z.ZodObject<{
    feature_name: z.ZodString;
    importance: z.ZodOptional<z.ZodNumber>;
    classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        class_name: z.ZodString;
        importance: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MlTrainedModelInferenceFeatureImportance = z.infer<typeof MlTrainedModelInferenceFeatureImportance>;
export declare const MlInferenceResponseResult: z.ZodObject<{
    entities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        class_name: z.ZodString;
        class_probability: z.ZodNumber;
        entity: z.ZodString;
        start_pos: z.ZodNumber;
        end_pos: z.ZodNumber;
    }, z.core.$strip>>>;
    is_truncated: z.ZodOptional<z.ZodBoolean>;
    predicted_value: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>]>>]>>;
    predicted_value_sequence: z.ZodOptional<z.ZodString>;
    prediction_probability: z.ZodOptional<z.ZodNumber>;
    prediction_score: z.ZodOptional<z.ZodNumber>;
    top_classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        class_name: z.ZodString;
        class_probability: z.ZodNumber;
        class_score: z.ZodNumber;
    }, z.core.$strip>>>;
    warning: z.ZodOptional<z.ZodString>;
    feature_importance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        feature_name: z.ZodString;
        importance: z.ZodOptional<z.ZodNumber>;
        classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            class_name: z.ZodString;
            importance: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MlInferenceResponseResult = z.infer<typeof MlInferenceResponseResult>;
/** Evaluate a trained model. */
export declare const MlInferTrainedModelRequest: z.ZodObject<{
    model_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    docs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>;
    inference_config: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        regression: z.ZodObject<{
            results_field: z.ZodOptional<z.ZodString>;
            num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        classification: z.ZodObject<{
            num_top_classes: z.ZodOptional<z.ZodNumber>;
            num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
            prediction_field_type: z.ZodOptional<z.ZodString>;
            results_field: z.ZodOptional<z.ZodString>;
            top_classes_results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_classification: z.ZodObject<{
            num_top_classes: z.ZodOptional<z.ZodNumber>;
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
            classification_labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        zero_shot_classification: z.ZodObject<{
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
            multi_label: z.ZodOptional<z.ZodBoolean>;
            labels: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        fill_mask: z.ZodObject<{
            num_top_classes: z.ZodOptional<z.ZodNumber>;
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        ner: z.ZodObject<{
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        pass_through: z.ZodObject<{
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_embedding: z.ZodObject<{
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_expansion: z.ZodObject<{
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        question_answering: z.ZodObject<{
            question: z.ZodString;
            num_top_classes: z.ZodOptional<z.ZodNumber>;
            tokenization: z.ZodOptional<z.ZodObject<{
                truncate: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    first: "first";
                    second: "second";
                }>>;
                span: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            results_field: z.ZodOptional<z.ZodString>;
            max_answer_length: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type MlInferTrainedModelRequest = z.infer<typeof MlInferTrainedModelRequest>;
export declare const MlInferTrainedModelResponse: z.ZodObject<{
    inference_results: z.ZodArray<z.ZodObject<{
        entities: z.ZodOptional<z.ZodArray<z.ZodObject<{
            class_name: z.ZodString;
            class_probability: z.ZodNumber;
            entity: z.ZodString;
            start_pos: z.ZodNumber;
            end_pos: z.ZodNumber;
        }, z.core.$strip>>>;
        is_truncated: z.ZodOptional<z.ZodBoolean>;
        predicted_value: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>]>>]>>;
        predicted_value_sequence: z.ZodOptional<z.ZodString>;
        prediction_probability: z.ZodOptional<z.ZodNumber>;
        prediction_score: z.ZodOptional<z.ZodNumber>;
        top_classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            class_name: z.ZodString;
            class_probability: z.ZodNumber;
            class_score: z.ZodNumber;
        }, z.core.$strip>>>;
        warning: z.ZodOptional<z.ZodString>;
        feature_importance: z.ZodOptional<z.ZodArray<z.ZodObject<{
            feature_name: z.ZodString;
            importance: z.ZodOptional<z.ZodNumber>;
            classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                class_name: z.ZodString;
                importance: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlInferTrainedModelResponse = z.infer<typeof MlInferTrainedModelResponse>;
//# sourceMappingURL=ml_infer_trained_model.d.ts.map