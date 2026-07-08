import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlHyperparameters: z.ZodObject<{
    alpha: z.ZodOptional<z.ZodNumber>;
    lambda: z.ZodOptional<z.ZodNumber>;
    gamma: z.ZodOptional<z.ZodNumber>;
    eta: z.ZodOptional<z.ZodNumber>;
    eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
    feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
    downsample_factor: z.ZodOptional<z.ZodNumber>;
    max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
    max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
    max_trees: z.ZodOptional<z.ZodNumber>;
    num_folds: z.ZodOptional<z.ZodNumber>;
    num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
    soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
    soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlHyperparameters = z.infer<typeof MlHyperparameters>;
export declare const MlTimingStats: z.ZodObject<{
    elapsed_time: z.ZodAny;
    iteration_time: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type MlTimingStats = z.infer<typeof MlTimingStats>;
export declare const MlValidationLoss: z.ZodObject<{
    fold_values: z.ZodArray<z.ZodString>;
    loss_type: z.ZodString;
}, z.core.$strip>;
export type MlValidationLoss = z.infer<typeof MlValidationLoss>;
export declare const MlDataframeAnalyticsStatsHyperparameters: z.ZodObject<{
    hyperparameters: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
        lambda: z.ZodOptional<z.ZodNumber>;
        gamma: z.ZodOptional<z.ZodNumber>;
        eta: z.ZodOptional<z.ZodNumber>;
        eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
        feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
        downsample_factor: z.ZodOptional<z.ZodNumber>;
        max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
        max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
        max_trees: z.ZodOptional<z.ZodNumber>;
        num_folds: z.ZodOptional<z.ZodNumber>;
        num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
        soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
        soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    iteration: z.ZodNumber;
    timestamp: z.ZodAny;
    timing_stats: z.ZodObject<{
        elapsed_time: z.ZodAny;
        iteration_time: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
    validation_loss: z.ZodObject<{
        fold_values: z.ZodArray<z.ZodString>;
        loss_type: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MlDataframeAnalyticsStatsHyperparameters = z.infer<typeof MlDataframeAnalyticsStatsHyperparameters>;
export declare const MlOutlierDetectionParameters: z.ZodObject<{
    compute_feature_influence: z.ZodOptional<z.ZodBoolean>;
    feature_influence_threshold: z.ZodOptional<z.ZodNumber>;
    method: z.ZodOptional<z.ZodString>;
    n_neighbors: z.ZodOptional<z.ZodNumber>;
    outlier_fraction: z.ZodOptional<z.ZodNumber>;
    standardization_enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlOutlierDetectionParameters = z.infer<typeof MlOutlierDetectionParameters>;
export declare const MlDataframeAnalyticsStatsOutlierDetection: z.ZodObject<{
    parameters: z.ZodObject<{
        compute_feature_influence: z.ZodOptional<z.ZodBoolean>;
        feature_influence_threshold: z.ZodOptional<z.ZodNumber>;
        method: z.ZodOptional<z.ZodString>;
        n_neighbors: z.ZodOptional<z.ZodNumber>;
        outlier_fraction: z.ZodOptional<z.ZodNumber>;
        standardization_enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    timestamp: z.ZodAny;
    timing_stats: z.ZodObject<{
        elapsed_time: z.ZodAny;
        iteration_time: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MlDataframeAnalyticsStatsOutlierDetection = z.infer<typeof MlDataframeAnalyticsStatsOutlierDetection>;
export declare const MlDataframeAnalyticsStatsContainer: z.ZodUnion<readonly [z.ZodObject<{
    classification_stats: z.ZodObject<{
        hyperparameters: z.ZodObject<{
            alpha: z.ZodOptional<z.ZodNumber>;
            lambda: z.ZodOptional<z.ZodNumber>;
            gamma: z.ZodOptional<z.ZodNumber>;
            eta: z.ZodOptional<z.ZodNumber>;
            eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
            feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
            downsample_factor: z.ZodOptional<z.ZodNumber>;
            max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
            max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
            max_trees: z.ZodOptional<z.ZodNumber>;
            num_folds: z.ZodOptional<z.ZodNumber>;
            num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
            soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
            soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        iteration: z.ZodNumber;
        timestamp: z.ZodAny;
        timing_stats: z.ZodObject<{
            elapsed_time: z.ZodAny;
            iteration_time: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>;
        validation_loss: z.ZodObject<{
            fold_values: z.ZodArray<z.ZodString>;
            loss_type: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    outlier_detection_stats: z.ZodObject<{
        parameters: z.ZodObject<{
            compute_feature_influence: z.ZodOptional<z.ZodBoolean>;
            feature_influence_threshold: z.ZodOptional<z.ZodNumber>;
            method: z.ZodOptional<z.ZodString>;
            n_neighbors: z.ZodOptional<z.ZodNumber>;
            outlier_fraction: z.ZodOptional<z.ZodNumber>;
            standardization_enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
        timestamp: z.ZodAny;
        timing_stats: z.ZodObject<{
            elapsed_time: z.ZodAny;
            iteration_time: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    regression_stats: z.ZodObject<{
        hyperparameters: z.ZodObject<{
            alpha: z.ZodOptional<z.ZodNumber>;
            lambda: z.ZodOptional<z.ZodNumber>;
            gamma: z.ZodOptional<z.ZodNumber>;
            eta: z.ZodOptional<z.ZodNumber>;
            eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
            feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
            downsample_factor: z.ZodOptional<z.ZodNumber>;
            max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
            max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
            max_trees: z.ZodOptional<z.ZodNumber>;
            num_folds: z.ZodOptional<z.ZodNumber>;
            num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
            soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
            soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        iteration: z.ZodNumber;
        timestamp: z.ZodAny;
        timing_stats: z.ZodObject<{
            elapsed_time: z.ZodAny;
            iteration_time: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>;
        validation_loss: z.ZodObject<{
            fold_values: z.ZodArray<z.ZodString>;
            loss_type: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type MlDataframeAnalyticsStatsContainer = z.infer<typeof MlDataframeAnalyticsStatsContainer>;
export declare const MlDataframeAnalyticsStatsDataCounts: z.ZodObject<{
    skipped_docs_count: z.ZodNumber;
    test_docs_count: z.ZodNumber;
    training_docs_count: z.ZodNumber;
}, z.core.$strip>;
export type MlDataframeAnalyticsStatsDataCounts = z.infer<typeof MlDataframeAnalyticsStatsDataCounts>;
export declare const MlDataframeAnalyticsStatsMemoryUsage: z.ZodObject<{
    memory_reestimate_bytes: z.ZodOptional<z.ZodNumber>;
    peak_usage_bytes: z.ZodNumber;
    status: z.ZodString;
    timestamp: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type MlDataframeAnalyticsStatsMemoryUsage = z.infer<typeof MlDataframeAnalyticsStatsMemoryUsage>;
export declare const MlDataframeAnalyticsStatsProgress: z.ZodObject<{
    phase: z.ZodString;
    progress_percent: z.ZodNumber;
}, z.core.$strip>;
export type MlDataframeAnalyticsStatsProgress = z.infer<typeof MlDataframeAnalyticsStatsProgress>;
export declare const MlDataframeState: z.ZodEnum<{
    started: "started";
    starting: "starting";
    stopping: "stopping";
    stopped: "stopped";
    failed: "failed";
}>;
export type MlDataframeState = z.infer<typeof MlDataframeState>;
export declare const MlDataframeAnalytics: z.ZodObject<{
    analysis_stats: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        classification_stats: z.ZodObject<{
            hyperparameters: z.ZodObject<{
                alpha: z.ZodOptional<z.ZodNumber>;
                lambda: z.ZodOptional<z.ZodNumber>;
                gamma: z.ZodOptional<z.ZodNumber>;
                eta: z.ZodOptional<z.ZodNumber>;
                eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
                feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
                downsample_factor: z.ZodOptional<z.ZodNumber>;
                max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
                max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
                max_trees: z.ZodOptional<z.ZodNumber>;
                num_folds: z.ZodOptional<z.ZodNumber>;
                num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
                soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
                soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            iteration: z.ZodNumber;
            timestamp: z.ZodAny;
            timing_stats: z.ZodObject<{
                elapsed_time: z.ZodAny;
                iteration_time: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
            validation_loss: z.ZodObject<{
                fold_values: z.ZodArray<z.ZodString>;
                loss_type: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        outlier_detection_stats: z.ZodObject<{
            parameters: z.ZodObject<{
                compute_feature_influence: z.ZodOptional<z.ZodBoolean>;
                feature_influence_threshold: z.ZodOptional<z.ZodNumber>;
                method: z.ZodOptional<z.ZodString>;
                n_neighbors: z.ZodOptional<z.ZodNumber>;
                outlier_fraction: z.ZodOptional<z.ZodNumber>;
                standardization_enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
            timestamp: z.ZodAny;
            timing_stats: z.ZodObject<{
                elapsed_time: z.ZodAny;
                iteration_time: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        regression_stats: z.ZodObject<{
            hyperparameters: z.ZodObject<{
                alpha: z.ZodOptional<z.ZodNumber>;
                lambda: z.ZodOptional<z.ZodNumber>;
                gamma: z.ZodOptional<z.ZodNumber>;
                eta: z.ZodOptional<z.ZodNumber>;
                eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
                feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
                downsample_factor: z.ZodOptional<z.ZodNumber>;
                max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
                max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
                max_trees: z.ZodOptional<z.ZodNumber>;
                num_folds: z.ZodOptional<z.ZodNumber>;
                num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
                soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
                soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            iteration: z.ZodNumber;
            timestamp: z.ZodAny;
            timing_stats: z.ZodObject<{
                elapsed_time: z.ZodAny;
                iteration_time: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
            validation_loss: z.ZodObject<{
                fold_values: z.ZodArray<z.ZodString>;
                loss_type: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    assignment_explanation: z.ZodOptional<z.ZodString>;
    data_counts: z.ZodObject<{
        skipped_docs_count: z.ZodNumber;
        test_docs_count: z.ZodNumber;
        training_docs_count: z.ZodNumber;
    }, z.core.$strip>;
    id: z.ZodString;
    memory_usage: z.ZodObject<{
        memory_reestimate_bytes: z.ZodOptional<z.ZodNumber>;
        peak_usage_bytes: z.ZodNumber;
        status: z.ZodString;
        timestamp: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
    progress: z.ZodArray<z.ZodObject<{
        phase: z.ZodString;
        progress_percent: z.ZodNumber;
    }, z.core.$strip>>;
    state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        stopped: "stopped";
        failed: "failed";
    }>;
}, z.core.$strip>;
export type MlDataframeAnalytics = z.infer<typeof MlDataframeAnalytics>;
/** Get data frame analytics job stats. */
export declare const MlGetDataFrameAnalyticsStatsRequest: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    verbose: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlGetDataFrameAnalyticsStatsRequest = z.infer<typeof MlGetDataFrameAnalyticsStatsRequest>;
export declare const MlGetDataFrameAnalyticsStatsResponse: z.ZodObject<{
    count: z.ZodNumber;
    data_frame_analytics: z.ZodArray<z.ZodObject<{
        analysis_stats: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            classification_stats: z.ZodObject<{
                hyperparameters: z.ZodObject<{
                    alpha: z.ZodOptional<z.ZodNumber>;
                    lambda: z.ZodOptional<z.ZodNumber>;
                    gamma: z.ZodOptional<z.ZodNumber>;
                    eta: z.ZodOptional<z.ZodNumber>;
                    eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
                    feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
                    downsample_factor: z.ZodOptional<z.ZodNumber>;
                    max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
                    max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
                    max_trees: z.ZodOptional<z.ZodNumber>;
                    num_folds: z.ZodOptional<z.ZodNumber>;
                    num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
                    soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
                    soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
                iteration: z.ZodNumber;
                timestamp: z.ZodAny;
                timing_stats: z.ZodObject<{
                    elapsed_time: z.ZodAny;
                    iteration_time: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>;
                validation_loss: z.ZodObject<{
                    fold_values: z.ZodArray<z.ZodString>;
                    loss_type: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            outlier_detection_stats: z.ZodObject<{
                parameters: z.ZodObject<{
                    compute_feature_influence: z.ZodOptional<z.ZodBoolean>;
                    feature_influence_threshold: z.ZodOptional<z.ZodNumber>;
                    method: z.ZodOptional<z.ZodString>;
                    n_neighbors: z.ZodOptional<z.ZodNumber>;
                    outlier_fraction: z.ZodOptional<z.ZodNumber>;
                    standardization_enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>;
                timestamp: z.ZodAny;
                timing_stats: z.ZodObject<{
                    elapsed_time: z.ZodAny;
                    iteration_time: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            regression_stats: z.ZodObject<{
                hyperparameters: z.ZodObject<{
                    alpha: z.ZodOptional<z.ZodNumber>;
                    lambda: z.ZodOptional<z.ZodNumber>;
                    gamma: z.ZodOptional<z.ZodNumber>;
                    eta: z.ZodOptional<z.ZodNumber>;
                    eta_growth_rate_per_tree: z.ZodOptional<z.ZodNumber>;
                    feature_bag_fraction: z.ZodOptional<z.ZodNumber>;
                    downsample_factor: z.ZodOptional<z.ZodNumber>;
                    max_attempts_to_add_tree: z.ZodOptional<z.ZodNumber>;
                    max_optimization_rounds_per_hyperparameter: z.ZodOptional<z.ZodNumber>;
                    max_trees: z.ZodOptional<z.ZodNumber>;
                    num_folds: z.ZodOptional<z.ZodNumber>;
                    num_splits_per_feature: z.ZodOptional<z.ZodNumber>;
                    soft_tree_depth_limit: z.ZodOptional<z.ZodNumber>;
                    soft_tree_depth_tolerance: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
                iteration: z.ZodNumber;
                timestamp: z.ZodAny;
                timing_stats: z.ZodObject<{
                    elapsed_time: z.ZodAny;
                    iteration_time: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>;
                validation_loss: z.ZodObject<{
                    fold_values: z.ZodArray<z.ZodString>;
                    loss_type: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>]>>;
        assignment_explanation: z.ZodOptional<z.ZodString>;
        data_counts: z.ZodObject<{
            skipped_docs_count: z.ZodNumber;
            test_docs_count: z.ZodNumber;
            training_docs_count: z.ZodNumber;
        }, z.core.$strip>;
        id: z.ZodString;
        memory_usage: z.ZodObject<{
            memory_reestimate_bytes: z.ZodOptional<z.ZodNumber>;
            peak_usage_bytes: z.ZodNumber;
            status: z.ZodString;
            timestamp: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>;
        progress: z.ZodArray<z.ZodObject<{
            phase: z.ZodString;
            progress_percent: z.ZodNumber;
        }, z.core.$strip>>;
        state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetDataFrameAnalyticsStatsResponse = z.infer<typeof MlGetDataFrameAnalyticsStatsResponse>;
//# sourceMappingURL=ml_get_data_frame_analytics_stats.d.ts.map