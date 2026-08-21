/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, ScalarValue, double, integer } from './_types.js'
import { MlClassificationInferenceOptions, MlRegressionInferenceOptions } from './ml.js'

export const MlTokenizationTruncate = z.enum(['first', 'second', 'none']).meta({ id: 'MlTokenizationTruncate' })
export type MlTokenizationTruncate = z.infer<typeof MlTokenizationTruncate>

export const MlNlpTokenizationUpdateOptions = z.object({
  truncate: z.lazy(() => MlTokenizationTruncate).describe('Truncate options to apply').optional(),
  span: z.lazy(() => integer).describe('Span options to apply').optional()
}).meta({ id: 'MlNlpTokenizationUpdateOptions' })
export type MlNlpTokenizationUpdateOptions = z.infer<typeof MlNlpTokenizationUpdateOptions>

export const MlFillMaskInferenceUpdateOptions = z.object({
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  tokenization: MlNlpTokenizationUpdateOptions.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional()
}).meta({ id: 'MlFillMaskInferenceUpdateOptions' })
export type MlFillMaskInferenceUpdateOptions = z.infer<typeof MlFillMaskInferenceUpdateOptions>

export const MlTextClassificationInferenceUpdateOptions = z.object({
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  tokenization: MlNlpTokenizationUpdateOptions.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  classification_labels: z.array(z.string()).describe('Classification labels to apply other than the stored labels. Must have the same deminsions as the default configured labels').optional()
}).meta({ id: 'MlTextClassificationInferenceUpdateOptions' })
export type MlTextClassificationInferenceUpdateOptions = z.infer<typeof MlTextClassificationInferenceUpdateOptions>

export const MlZeroShotClassificationInferenceUpdateOptions = z.object({
  tokenization: MlNlpTokenizationUpdateOptions.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  multi_label: z.boolean().describe('Update the configured multi label option. Indicates if more than one true label exists. Defaults to the configured value.').optional(),
  labels: z.array(z.string()).describe('The labels to predict.')
}).meta({ id: 'MlZeroShotClassificationInferenceUpdateOptions' })
export type MlZeroShotClassificationInferenceUpdateOptions = z.infer<typeof MlZeroShotClassificationInferenceUpdateOptions>

export const MlNerInferenceUpdateOptions = z.object({
  tokenization: MlNlpTokenizationUpdateOptions.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional()
}).meta({ id: 'MlNerInferenceUpdateOptions' })
export type MlNerInferenceUpdateOptions = z.infer<typeof MlNerInferenceUpdateOptions>

export const MlPassThroughInferenceUpdateOptions = z.object({
  tokenization: MlNlpTokenizationUpdateOptions.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional()
}).meta({ id: 'MlPassThroughInferenceUpdateOptions' })
export type MlPassThroughInferenceUpdateOptions = z.infer<typeof MlPassThroughInferenceUpdateOptions>

export const MlTextEmbeddingInferenceUpdateOptions = z.object({
  tokenization: MlNlpTokenizationUpdateOptions.optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional()
}).meta({ id: 'MlTextEmbeddingInferenceUpdateOptions' })
export type MlTextEmbeddingInferenceUpdateOptions = z.infer<typeof MlTextEmbeddingInferenceUpdateOptions>

export const MlTextExpansionInferenceUpdateOptions = z.object({
  tokenization: MlNlpTokenizationUpdateOptions.optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional()
}).meta({ id: 'MlTextExpansionInferenceUpdateOptions' })
export type MlTextExpansionInferenceUpdateOptions = z.infer<typeof MlTextExpansionInferenceUpdateOptions>

export const MlQuestionAnsweringInferenceUpdateOptions = z.object({
  question: z.string().describe('The question to answer given the inference context'),
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  tokenization: MlNlpTokenizationUpdateOptions.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  max_answer_length: z.lazy(() => integer).describe('The maximum answer length to consider for extraction').optional()
}).meta({ id: 'MlQuestionAnsweringInferenceUpdateOptions' })
export type MlQuestionAnsweringInferenceUpdateOptions = z.infer<typeof MlQuestionAnsweringInferenceUpdateOptions>

const MlInferenceConfigUpdateContainerExclusiveProps = z.union([z.object({ regression: z.lazy(() => MlRegressionInferenceOptions) }), z.object({ classification: z.lazy(() => MlClassificationInferenceOptions) }), z.object({ text_classification: MlTextClassificationInferenceUpdateOptions }), z.object({ zero_shot_classification: MlZeroShotClassificationInferenceUpdateOptions }), z.object({ fill_mask: MlFillMaskInferenceUpdateOptions }), z.object({ ner: MlNerInferenceUpdateOptions }), z.object({ pass_through: MlPassThroughInferenceUpdateOptions }), z.object({ text_embedding: MlTextEmbeddingInferenceUpdateOptions }), z.object({ text_expansion: MlTextExpansionInferenceUpdateOptions }), z.object({ question_answering: MlQuestionAnsweringInferenceUpdateOptions })])

export const MlInferenceConfigUpdateContainer = MlInferenceConfigUpdateContainerExclusiveProps.meta({ id: 'MlInferenceConfigUpdateContainer' })
export type MlInferenceConfigUpdateContainer = z.infer<typeof MlInferenceConfigUpdateContainer>

export const MlTrainedModelEntities = z.object({
  class_name: z.string(),
  class_probability: z.lazy(() => double),
  entity: z.string(),
  start_pos: z.lazy(() => integer),
  end_pos: z.lazy(() => integer)
}).meta({ id: 'MlTrainedModelEntities' })
export type MlTrainedModelEntities = z.infer<typeof MlTrainedModelEntities>

export const MlPredictedValue = z.union([z.lazy(() => ScalarValue), z.array(z.lazy(() => ScalarValue))]).meta({ id: 'MlPredictedValue' })
export type MlPredictedValue = z.infer<typeof MlPredictedValue>

export const MlTopClassEntry = z.object({
  class_name: z.string(),
  class_probability: z.lazy(() => double),
  class_score: z.lazy(() => double)
}).meta({ id: 'MlTopClassEntry' })
export type MlTopClassEntry = z.infer<typeof MlTopClassEntry>

export const MlTrainedModelInferenceClassImportance = z.object({
  class_name: z.string(),
  importance: z.lazy(() => double)
}).meta({ id: 'MlTrainedModelInferenceClassImportance' })
export type MlTrainedModelInferenceClassImportance = z.infer<typeof MlTrainedModelInferenceClassImportance>

export const MlTrainedModelInferenceFeatureImportance = z.object({
  feature_name: z.string(),
  importance: z.lazy(() => double).optional(),
  classes: z.array(MlTrainedModelInferenceClassImportance).optional()
}).meta({ id: 'MlTrainedModelInferenceFeatureImportance' })
export type MlTrainedModelInferenceFeatureImportance = z.infer<typeof MlTrainedModelInferenceFeatureImportance>

export const MlInferenceResponseResult = z.object({
  entities: z.array(MlTrainedModelEntities).describe('If the model is trained for named entity recognition (NER) tasks, the response contains the recognized entities.').optional(),
  is_truncated: z.boolean().describe('Indicates whether the input text was truncated to meet the model\'s maximum sequence length limit. This property is present only when it is true.').optional(),
  predicted_value: z.union([MlPredictedValue, z.array(MlPredictedValue)]).describe('If the model is trained for a text classification or zero shot classification task, the response is the predicted class. For named entity recognition (NER) tasks, it contains the annotated text output. For fill mask tasks, it contains the top prediction for replacing the mask token. For text embedding tasks, it contains the raw numerical text embedding values. For regression models, its a numerical value For classification models, it may be an integer, double, boolean or string depending on prediction type').optional(),
  predicted_value_sequence: z.string().describe('For fill mask tasks, the response contains the input text sequence with the mask token replaced by the predicted value. Additionally').optional(),
  prediction_probability: z.lazy(() => double).describe('Specifies a probability for the predicted value.').optional(),
  prediction_score: z.lazy(() => double).describe('Specifies a confidence score for the predicted value.').optional(),
  top_classes: z.array(MlTopClassEntry).describe('For fill mask, text classification, and zero shot classification tasks, the response contains a list of top class entries.').optional(),
  warning: z.string().describe('If the request failed, the response contains the reason for the failure.').optional(),
  feature_importance: z.array(MlTrainedModelInferenceFeatureImportance).describe('The feature importance for the inference results. Relevant only for classification or regression models').optional()
}).meta({ id: 'MlInferenceResponseResult' })
export type MlInferenceResponseResult = z.infer<typeof MlInferenceResponseResult>

/** Evaluate a trained model. */
export const MlInferTrainedModelRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Controls the amount of time to wait for inference results.').optional().meta({ found_in: 'query' }),
  docs: z.array(z.record(z.string(), z.any())).describe('An array of objects to pass to the model for inference. The objects should contain a fields matching your configured trained model input. Typically, for NLP models, the field name is `text_field`. Currently, for NLP models, only a single value is allowed.').meta({ found_in: 'body' }),
  inference_config: MlInferenceConfigUpdateContainer.describe('The inference configuration updates to apply on the API call').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlInferTrainedModelRequest' })
export type MlInferTrainedModelRequest = z.infer<typeof MlInferTrainedModelRequest>

export const MlInferTrainedModelResponse = z.object({
  inference_results: z.array(MlInferenceResponseResult)
}).meta({ id: 'MlInferTrainedModelResponse' })
export type MlInferTrainedModelResponse = z.infer<typeof MlInferTrainedModelResponse>
