/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, IndexName, Name, double, integer } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'

export const MlDataframeEvaluationClassificationMetricsAucRoc = z.object({
  class_name: z.lazy(() => Name).describe('Name of the only class that is treated as positive during AUC ROC calculation. Other classes are treated as negative ("one-vs-all" strategy). All the evaluated documents must have class_name in the list of their top classes.').optional(),
  include_curve: z.boolean().describe('Whether or not the curve should be returned in addition to the score. Default value is false.').optional()
}).meta({ id: 'MlDataframeEvaluationClassificationMetricsAucRoc' })
export type MlDataframeEvaluationClassificationMetricsAucRoc = z.infer<typeof MlDataframeEvaluationClassificationMetricsAucRoc>

export const MlDataframeEvaluationMetrics = z.object({
  auc_roc: MlDataframeEvaluationClassificationMetricsAucRoc.describe('The AUC ROC (area under the curve of the receiver operating characteristic) score and optionally the curve. It is calculated for a specific class (provided as "class_name") treated as positive.').optional(),
  precision: z.record(z.string(), z.any()).describe('Precision of predictions (per-class and average).').optional(),
  recall: z.record(z.string(), z.any()).describe('Recall of predictions (per-class and average).').optional()
}).meta({ id: 'MlDataframeEvaluationMetrics' })
export type MlDataframeEvaluationMetrics = z.infer<typeof MlDataframeEvaluationMetrics>

export const MlDataframeEvaluationClassificationMetrics = z.object({
  ...MlDataframeEvaluationMetrics.shape,
  accuracy: z.record(z.string(), z.any()).describe('Accuracy of predictions (per-class and overall).').optional(),
  multiclass_confusion_matrix: z.record(z.string(), z.any()).describe('Multiclass confusion matrix.').optional()
}).meta({ id: 'MlDataframeEvaluationClassificationMetrics' })
export type MlDataframeEvaluationClassificationMetrics = z.infer<typeof MlDataframeEvaluationClassificationMetrics>

export const MlDataframeEvaluationClassification = z.object({
  actual_field: z.lazy(() => Field).describe('The field of the index which contains the ground truth. The data type of this field can be boolean or integer. If the data type is integer, the value has to be either 0 (false) or 1 (true).'),
  predicted_field: z.lazy(() => Field).describe('The field in the index which contains the predicted value, in other words the results of the classification analysis.').optional(),
  top_classes_field: z.lazy(() => Field).describe('The field of the index which is an array of documents of the form { "class_name": XXX, "class_probability": YYY }. This field must be defined as nested in the mappings.').optional(),
  metrics: MlDataframeEvaluationClassificationMetrics.describe('Specifies the metrics that are used for the evaluation.').optional()
}).meta({ id: 'MlDataframeEvaluationClassification' })
export type MlDataframeEvaluationClassification = z.infer<typeof MlDataframeEvaluationClassification>

export const MlDataframeEvaluationOutlierDetectionMetrics = z.object({
  ...MlDataframeEvaluationMetrics.shape,
  confusion_matrix: z.record(z.string(), z.any()).describe('Accuracy of predictions (per-class and overall).').optional()
}).meta({ id: 'MlDataframeEvaluationOutlierDetectionMetrics' })
export type MlDataframeEvaluationOutlierDetectionMetrics = z.infer<typeof MlDataframeEvaluationOutlierDetectionMetrics>

export const MlDataframeEvaluationOutlierDetection = z.object({
  actual_field: z.lazy(() => Field).describe('The field of the index which contains the ground truth. The data type of this field can be boolean or integer. If the data type is integer, the value has to be either 0 (false) or 1 (true).'),
  predicted_probability_field: z.lazy(() => Field).describe('The field of the index that defines the probability of whether the item belongs to the class in question or not. It’s the field that contains the results of the analysis.'),
  metrics: MlDataframeEvaluationOutlierDetectionMetrics.describe('Specifies the metrics that are used for the evaluation.').optional()
}).meta({ id: 'MlDataframeEvaluationOutlierDetection' })
export type MlDataframeEvaluationOutlierDetection = z.infer<typeof MlDataframeEvaluationOutlierDetection>

export const MlDataframeEvaluationRegressionMetricsMsle = z.object({
  offset: z.lazy(() => double).describe('Defines the transition point at which you switch from minimizing quadratic error to minimizing quadratic log error. Defaults to 1.').optional()
}).meta({ id: 'MlDataframeEvaluationRegressionMetricsMsle' })
export type MlDataframeEvaluationRegressionMetricsMsle = z.infer<typeof MlDataframeEvaluationRegressionMetricsMsle>

export const MlDataframeEvaluationRegressionMetricsHuber = z.object({
  delta: z.lazy(() => double).describe('Approximates 1/2 (prediction - actual)2 for values much less than delta and approximates a straight line with slope delta for values much larger than delta. Defaults to 1. Delta needs to be greater than 0.').optional()
}).meta({ id: 'MlDataframeEvaluationRegressionMetricsHuber' })
export type MlDataframeEvaluationRegressionMetricsHuber = z.infer<typeof MlDataframeEvaluationRegressionMetricsHuber>

export const MlDataframeEvaluationRegressionMetrics = z.object({
  mse: z.record(z.string(), z.any()).describe('Average squared difference between the predicted values and the actual (ground truth) value. For more information, read this wiki article.').optional(),
  msle: MlDataframeEvaluationRegressionMetricsMsle.describe('Average squared difference between the logarithm of the predicted values and the logarithm of the actual (ground truth) value.').optional(),
  huber: MlDataframeEvaluationRegressionMetricsHuber.describe('Pseudo Huber loss function.').optional(),
  r_squared: z.record(z.string(), z.any()).describe('Proportion of the variance in the dependent variable that is predictable from the independent variables.').optional()
}).meta({ id: 'MlDataframeEvaluationRegressionMetrics' })
export type MlDataframeEvaluationRegressionMetrics = z.infer<typeof MlDataframeEvaluationRegressionMetrics>

export const MlDataframeEvaluationRegression = z.object({
  actual_field: z.lazy(() => Field).describe('The field of the index which contains the ground truth. The data type of this field must be numerical.'),
  predicted_field: z.lazy(() => Field).describe('The field in the index that contains the predicted value, in other words the results of the regression analysis.'),
  metrics: MlDataframeEvaluationRegressionMetrics.describe('Specifies the metrics that are used for the evaluation. For more information on mse, msle, and huber, consult the Jupyter notebook on regression loss functions.').optional()
}).meta({ id: 'MlDataframeEvaluationRegression' })
export type MlDataframeEvaluationRegression = z.infer<typeof MlDataframeEvaluationRegression>

const MlDataframeEvaluationContainerExclusiveProps = z.union([z.object({ classification: MlDataframeEvaluationClassification }), z.object({ outlier_detection: MlDataframeEvaluationOutlierDetection }), z.object({ regression: MlDataframeEvaluationRegression })])

export const MlDataframeEvaluationContainer = MlDataframeEvaluationContainerExclusiveProps.meta({ id: 'MlDataframeEvaluationContainer' })
export type MlDataframeEvaluationContainer = z.infer<typeof MlDataframeEvaluationContainer>

export const MlEvaluateDataFrameConfusionMatrixPrediction = z.object({
  predicted_class: z.lazy(() => Name),
  count: z.lazy(() => integer)
}).meta({ id: 'MlEvaluateDataFrameConfusionMatrixPrediction' })
export type MlEvaluateDataFrameConfusionMatrixPrediction = z.infer<typeof MlEvaluateDataFrameConfusionMatrixPrediction>

export const MlEvaluateDataFrameConfusionMatrixItem = z.object({
  actual_class: z.lazy(() => Name),
  actual_class_doc_count: z.lazy(() => integer),
  predicted_classes: z.array(MlEvaluateDataFrameConfusionMatrixPrediction),
  other_predicted_class_doc_count: z.lazy(() => integer)
}).meta({ id: 'MlEvaluateDataFrameConfusionMatrixItem' })
export type MlEvaluateDataFrameConfusionMatrixItem = z.infer<typeof MlEvaluateDataFrameConfusionMatrixItem>

export const MlEvaluateDataFrameConfusionMatrixThreshold = z.object({
  true_positive: z.lazy(() => integer).describe('True Positive'),
  false_positive: z.lazy(() => integer).describe('False Positive'),
  true_negative: z.lazy(() => integer).describe('True Negative'),
  false_negative: z.lazy(() => integer).describe('False Negative')
}).meta({ id: 'MlEvaluateDataFrameConfusionMatrixThreshold' })
export type MlEvaluateDataFrameConfusionMatrixThreshold = z.infer<typeof MlEvaluateDataFrameConfusionMatrixThreshold>

export const MlEvaluateDataFrameDataframeEvaluationValue = z.object({
  value: z.lazy(() => double)
}).meta({ id: 'MlEvaluateDataFrameDataframeEvaluationValue' })
export type MlEvaluateDataFrameDataframeEvaluationValue = z.infer<typeof MlEvaluateDataFrameDataframeEvaluationValue>

export const MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem = z.object({
  tpr: z.lazy(() => double),
  fpr: z.lazy(() => double),
  threshold: z.lazy(() => double)
}).meta({ id: 'MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem' })
export type MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem = z.infer<typeof MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem>

export const MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc = z.object({
  ...MlEvaluateDataFrameDataframeEvaluationValue.shape,
  curve: z.array(MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem).optional()
}).meta({ id: 'MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc' })
export type MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc = z.infer<typeof MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc>

export const MlEvaluateDataFrameDataframeEvaluationClass = z.object({
  ...MlEvaluateDataFrameDataframeEvaluationValue.shape,
  class_name: z.lazy(() => Name)
}).meta({ id: 'MlEvaluateDataFrameDataframeEvaluationClass' })
export type MlEvaluateDataFrameDataframeEvaluationClass = z.infer<typeof MlEvaluateDataFrameDataframeEvaluationClass>

export const MlEvaluateDataFrameDataframeClassificationSummaryAccuracy = z.object({
  classes: z.array(MlEvaluateDataFrameDataframeEvaluationClass),
  overall_accuracy: z.lazy(() => double)
}).meta({ id: 'MlEvaluateDataFrameDataframeClassificationSummaryAccuracy' })
export type MlEvaluateDataFrameDataframeClassificationSummaryAccuracy = z.infer<typeof MlEvaluateDataFrameDataframeClassificationSummaryAccuracy>

export const MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix = z.object({
  confusion_matrix: z.array(MlEvaluateDataFrameConfusionMatrixItem),
  other_actual_class_count: z.lazy(() => integer)
}).meta({ id: 'MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix' })
export type MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix = z.infer<typeof MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix>

export const MlEvaluateDataFrameDataframeClassificationSummaryPrecision = z.object({
  classes: z.array(MlEvaluateDataFrameDataframeEvaluationClass),
  avg_precision: z.lazy(() => double)
}).meta({ id: 'MlEvaluateDataFrameDataframeClassificationSummaryPrecision' })
export type MlEvaluateDataFrameDataframeClassificationSummaryPrecision = z.infer<typeof MlEvaluateDataFrameDataframeClassificationSummaryPrecision>

export const MlEvaluateDataFrameDataframeClassificationSummaryRecall = z.object({
  classes: z.array(MlEvaluateDataFrameDataframeEvaluationClass),
  avg_recall: z.lazy(() => double)
}).meta({ id: 'MlEvaluateDataFrameDataframeClassificationSummaryRecall' })
export type MlEvaluateDataFrameDataframeClassificationSummaryRecall = z.infer<typeof MlEvaluateDataFrameDataframeClassificationSummaryRecall>

export const MlEvaluateDataFrameDataframeClassificationSummary = z.object({
  auc_roc: MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc.describe('The AUC ROC (area under the curve of the receiver operating characteristic) score and optionally the curve. It is calculated for a specific class (provided as "class_name") treated as positive.').optional(),
  accuracy: MlEvaluateDataFrameDataframeClassificationSummaryAccuracy.describe('Accuracy of predictions (per-class and overall).').optional(),
  multiclass_confusion_matrix: MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix.describe('Multiclass confusion matrix.').optional(),
  precision: MlEvaluateDataFrameDataframeClassificationSummaryPrecision.describe('Precision of predictions (per-class and average).').optional(),
  recall: MlEvaluateDataFrameDataframeClassificationSummaryRecall.describe('Recall of predictions (per-class and average).').optional()
}).meta({ id: 'MlEvaluateDataFrameDataframeClassificationSummary' })
export type MlEvaluateDataFrameDataframeClassificationSummary = z.infer<typeof MlEvaluateDataFrameDataframeClassificationSummary>

export const MlEvaluateDataFrameDataframeOutlierDetectionSummary = z.object({
  auc_roc: MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc.describe('The AUC ROC (area under the curve of the receiver operating characteristic) score and optionally the curve.').optional(),
  precision: z.record(z.string(), z.lazy(() => double)).describe('Set the different thresholds of the outlier score at where the metric is calculated.').optional(),
  recall: z.record(z.string(), z.lazy(() => double)).describe('Set the different thresholds of the outlier score at where the metric is calculated.').optional(),
  confusion_matrix: z.record(z.string(), MlEvaluateDataFrameConfusionMatrixThreshold).describe('Set the different thresholds of the outlier score at where the metrics (`tp` - true positive, `fp` - false positive, `tn` - true negative, `fn` - false negative) are calculated.').optional()
}).meta({ id: 'MlEvaluateDataFrameDataframeOutlierDetectionSummary' })
export type MlEvaluateDataFrameDataframeOutlierDetectionSummary = z.infer<typeof MlEvaluateDataFrameDataframeOutlierDetectionSummary>

export const MlEvaluateDataFrameDataframeRegressionSummary = z.object({
  huber: MlEvaluateDataFrameDataframeEvaluationValue.describe('Pseudo Huber loss function.').optional(),
  mse: MlEvaluateDataFrameDataframeEvaluationValue.describe('Average squared difference between the predicted values and the actual (`ground truth`) value.').optional(),
  msle: MlEvaluateDataFrameDataframeEvaluationValue.describe('Average squared difference between the logarithm of the predicted values and the logarithm of the actual (`ground truth`) value.').optional(),
  r_squared: MlEvaluateDataFrameDataframeEvaluationValue.describe('Proportion of the variance in the dependent variable that is predictable from the independent variables.').optional()
}).meta({ id: 'MlEvaluateDataFrameDataframeRegressionSummary' })
export type MlEvaluateDataFrameDataframeRegressionSummary = z.infer<typeof MlEvaluateDataFrameDataframeRegressionSummary>

/**
 * Evaluate data frame analytics.
 *
 * The API packages together commonly used evaluation metrics for various types
 * of machine learning features. This has been designed for use on indexes
 * created by data frame analytics. Evaluation requires both a ground truth
 * field and an analytics result field to be present.
 */
export const MlEvaluateDataFrameRequest = z.object({
  evaluation: MlDataframeEvaluationContainer.describe('Defines the type of evaluation you want to perform.').meta({ found_in: 'body' }),
  index: z.lazy(() => IndexName).describe('Defines the `index` in which the evaluation will be performed.').meta({ found_in: 'body' }),
  query: z.lazy(() => QueryDslQueryContainer).describe('A query clause that retrieves a subset of data from the source index.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlEvaluateDataFrameRequest' })
export type MlEvaluateDataFrameRequest = z.infer<typeof MlEvaluateDataFrameRequest>

export const MlEvaluateDataFrameResponse = z.object({
  classification: MlEvaluateDataFrameDataframeClassificationSummary.describe('Evaluation results for a classification analysis. It outputs a prediction that identifies to which of the classes each document belongs.').optional(),
  outlier_detection: MlEvaluateDataFrameDataframeOutlierDetectionSummary.describe('Evaluation results for an outlier detection analysis. It outputs the probability that each document is an outlier.').optional(),
  regression: MlEvaluateDataFrameDataframeRegressionSummary.describe('Evaluation results for a regression analysis which outputs a prediction of values.').optional()
}).meta({ id: 'MlEvaluateDataFrameResponse' })
export type MlEvaluateDataFrameResponse = z.infer<typeof MlEvaluateDataFrameResponse>
