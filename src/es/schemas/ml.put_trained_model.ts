/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, IndexName, Names, double, float, integer, long } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { MlClassificationInferenceOptions, MlRegressionInferenceOptions, MlTrainedModelConfig } from './ml.js'
import { MlTokenizationTruncate } from './ml.infer_trained_model.js'

export const MlCommonTokenizationConfig = z.object({
  do_lower_case: z.boolean().describe('Should the tokenizer lower case the text').optional(),
  max_sequence_length: z.lazy(() => integer).describe('Maximum input sequence length for the model').optional(),
  span: z.lazy(() => integer).describe('Tokenization spanning options. Special value of -1 indicates no spanning takes place').optional(),
  truncate: z.lazy(() => MlTokenizationTruncate).describe('Should tokenization input be automatically truncated before sending to the model for inference').optional(),
  with_special_tokens: z.boolean().describe('Is tokenization completed with special tokens').optional()
}).meta({ id: 'MlCommonTokenizationConfig' })
export type MlCommonTokenizationConfig = z.infer<typeof MlCommonTokenizationConfig>

export const MlQueryFeatureExtractor = z.object({
  default_score: z.lazy(() => float).optional(),
  feature_name: z.string(),
  query: z.lazy(() => QueryDslQueryContainer)
}).meta({ id: 'MlQueryFeatureExtractor' })
export type MlQueryFeatureExtractor = z.infer<typeof MlQueryFeatureExtractor>

export const MlFeatureExtractor = MlQueryFeatureExtractor.meta({ id: 'MlFeatureExtractor' })
export type MlFeatureExtractor = z.infer<typeof MlFeatureExtractor>

/** BERT and MPNet tokenization configuration options */
export const MlNlpBertTokenizationConfig = z.object({
  ...MlCommonTokenizationConfig.shape
}).meta({ id: 'MlNlpBertTokenizationConfig' })
export type MlNlpBertTokenizationConfig = z.infer<typeof MlNlpBertTokenizationConfig>

/** RoBERTa tokenization configuration options */
export const MlNlpRobertaTokenizationConfig = z.object({
  ...MlCommonTokenizationConfig.shape,
  add_prefix_space: z.boolean().describe('Should the tokenizer prefix input with a space character').optional()
}).meta({ id: 'MlNlpRobertaTokenizationConfig' })
export type MlNlpRobertaTokenizationConfig = z.infer<typeof MlNlpRobertaTokenizationConfig>

export const MlXlmRobertaTokenizationConfig = z.object({
  ...MlCommonTokenizationConfig.shape
}).meta({ id: 'MlXlmRobertaTokenizationConfig' })
export type MlXlmRobertaTokenizationConfig = z.infer<typeof MlXlmRobertaTokenizationConfig>

const MlTokenizationConfigContainerExclusiveProps = z.union([z.object({ bert: MlNlpBertTokenizationConfig }), z.object({ bert_ja: MlNlpBertTokenizationConfig }), z.object({ mpnet: MlNlpBertTokenizationConfig }), z.object({ roberta: MlNlpRobertaTokenizationConfig }), z.object({ xlm_roberta: MlXlmRobertaTokenizationConfig })])

/** Tokenization options stored in inference configuration */
export const MlTokenizationConfigContainer = MlTokenizationConfigContainerExclusiveProps.meta({ id: 'MlTokenizationConfigContainer' })
export type MlTokenizationConfigContainer = z.infer<typeof MlTokenizationConfigContainer>

export const MlVocabulary = z.object({
  index: z.lazy(() => IndexName)
}).meta({ id: 'MlVocabulary' })
export type MlVocabulary = z.infer<typeof MlVocabulary>

/** Fill mask inference options */
export const MlFillMaskInferenceOptions = z.object({
  mask_token: z.string().describe('The string/token which will be removed from incoming documents and replaced with the inference prediction(s). In a response, this field contains the mask token for the specified model/tokenizer. Each model and tokenizer has a predefined mask token which cannot be changed. Thus, it is recommended not to set this value in requests. However, if this field is present in a request, its value must match the predefined value for that model/tokenizer, otherwise the request will fail.').optional(),
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  vocabulary: MlVocabulary.optional()
}).meta({ id: 'MlFillMaskInferenceOptions' })
export type MlFillMaskInferenceOptions = z.infer<typeof MlFillMaskInferenceOptions>

/** Text classification configuration options */
export const MlTextClassificationInferenceOptions = z.object({
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  classification_labels: z.array(z.string()).describe('Classification labels to apply other than the stored labels. Must have the same deminsions as the default configured labels').optional(),
  vocabulary: MlVocabulary.optional()
}).meta({ id: 'MlTextClassificationInferenceOptions' })
export type MlTextClassificationInferenceOptions = z.infer<typeof MlTextClassificationInferenceOptions>

/** Zero shot classification configuration options */
export const MlZeroShotClassificationInferenceOptions = z.object({
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options to update when inferring').optional(),
  hypothesis_template: z.string().describe('Hypothesis template used when tokenizing labels for prediction').optional(),
  classification_labels: z.array(z.string()).describe('The zero shot classification labels indicating entailment, neutral, and contradiction Must contain exactly and only entailment, neutral, and contradiction'),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  multi_label: z.boolean().describe('Indicates if more than one true label exists.').optional(),
  labels: z.array(z.string()).describe('The labels to predict.').optional()
}).meta({ id: 'MlZeroShotClassificationInferenceOptions' })
export type MlZeroShotClassificationInferenceOptions = z.infer<typeof MlZeroShotClassificationInferenceOptions>

export const MlLearningToRankConfig = z.object({
  default_params: z.record(z.string(), z.any()).optional(),
  feature_extractors: z.array(z.record(z.string(), MlFeatureExtractor)).optional(),
  num_top_feature_importance_values: z.lazy(() => integer)
}).meta({ id: 'MlLearningToRankConfig' })
export type MlLearningToRankConfig = z.infer<typeof MlLearningToRankConfig>

/** Named entity recognition options */
export const MlNerInferenceOptions = z.object({
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  classification_labels: z.array(z.string()).describe('The token classification labels. Must be IOB formatted tags').optional(),
  vocabulary: MlVocabulary.optional()
}).meta({ id: 'MlNerInferenceOptions' })
export type MlNerInferenceOptions = z.infer<typeof MlNerInferenceOptions>

/** Pass through configuration options */
export const MlPassThroughInferenceOptions = z.object({
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  vocabulary: MlVocabulary.optional()
}).meta({ id: 'MlPassThroughInferenceOptions' })
export type MlPassThroughInferenceOptions = z.infer<typeof MlPassThroughInferenceOptions>

/** Text embedding inference options */
export const MlTextEmbeddingInferenceOptions = z.object({
  embedding_size: z.lazy(() => integer).describe('The number of dimensions in the embedding output').optional(),
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  vocabulary: MlVocabulary.optional()
}).meta({ id: 'MlTextEmbeddingInferenceOptions' })
export type MlTextEmbeddingInferenceOptions = z.infer<typeof MlTextEmbeddingInferenceOptions>

/** Text expansion inference options */
export const MlTextExpansionInferenceOptions = z.object({
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  vocabulary: MlVocabulary.optional()
}).meta({ id: 'MlTextExpansionInferenceOptions' })
export type MlTextExpansionInferenceOptions = z.infer<typeof MlTextExpansionInferenceOptions>

/** Question answering inference options */
export const MlQuestionAnsweringInferenceOptions = z.object({
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  tokenization: MlTokenizationConfigContainer.describe('The tokenization options to update when inferring').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  max_answer_length: z.lazy(() => integer).describe('The maximum answer length to consider').optional()
}).meta({ id: 'MlQuestionAnsweringInferenceOptions' })
export type MlQuestionAnsweringInferenceOptions = z.infer<typeof MlQuestionAnsweringInferenceOptions>

const MlInferenceConfigCreateContainerExclusiveProps = z.union([z.object({ regression: z.lazy(() => MlRegressionInferenceOptions) }), z.object({ classification: z.lazy(() => MlClassificationInferenceOptions) }), z.object({ text_classification: MlTextClassificationInferenceOptions }), z.object({ zero_shot_classification: MlZeroShotClassificationInferenceOptions }), z.object({ fill_mask: MlFillMaskInferenceOptions }), z.object({ learning_to_rank: MlLearningToRankConfig }), z.object({ ner: MlNerInferenceOptions }), z.object({ pass_through: MlPassThroughInferenceOptions }), z.object({ text_embedding: MlTextEmbeddingInferenceOptions }), z.object({ text_expansion: MlTextExpansionInferenceOptions }), z.object({ question_answering: MlQuestionAnsweringInferenceOptions })])

/** Inference configuration provided when storing the model config */
export const MlInferenceConfigCreateContainer = MlInferenceConfigCreateContainerExclusiveProps.meta({ id: 'MlInferenceConfigCreateContainer' })
export type MlInferenceConfigCreateContainer = z.infer<typeof MlInferenceConfigCreateContainer>

export const MlTrainedModelPrefixStrings = z.object({
  ingest: z.string().describe('String prepended to input at ingest').optional(),
  search: z.string().describe('String prepended to input at search').optional()
}).meta({ id: 'MlTrainedModelPrefixStrings' })
export type MlTrainedModelPrefixStrings = z.infer<typeof MlTrainedModelPrefixStrings>

export const MlTrainedModelType = z.enum(['tree_ensemble', 'lang_ident', 'pytorch']).meta({ id: 'MlTrainedModelType' })
export type MlTrainedModelType = z.infer<typeof MlTrainedModelType>

export const MlPutTrainedModelWeights = z.object({
  weights: z.lazy(() => double)
}).meta({ id: 'MlPutTrainedModelWeights' })
export type MlPutTrainedModelWeights = z.infer<typeof MlPutTrainedModelWeights>

export const MlPutTrainedModelAggregateOutput = z.object({
  logistic_regression: MlPutTrainedModelWeights.optional(),
  weighted_sum: MlPutTrainedModelWeights.optional(),
  weighted_mode: MlPutTrainedModelWeights.optional(),
  exponent: MlPutTrainedModelWeights.optional()
}).meta({ id: 'MlPutTrainedModelAggregateOutput' })
export type MlPutTrainedModelAggregateOutput = z.infer<typeof MlPutTrainedModelAggregateOutput>

export const MlPutTrainedModelFrequencyEncodingPreprocessor = z.object({
  field: z.string(),
  feature_name: z.string(),
  frequency_map: z.record(z.string(), z.lazy(() => double))
}).meta({ id: 'MlPutTrainedModelFrequencyEncodingPreprocessor' })
export type MlPutTrainedModelFrequencyEncodingPreprocessor = z.infer<typeof MlPutTrainedModelFrequencyEncodingPreprocessor>

export const MlPutTrainedModelOneHotEncodingPreprocessor = z.object({
  field: z.string(),
  hot_map: z.record(z.string(), z.string())
}).meta({ id: 'MlPutTrainedModelOneHotEncodingPreprocessor' })
export type MlPutTrainedModelOneHotEncodingPreprocessor = z.infer<typeof MlPutTrainedModelOneHotEncodingPreprocessor>

export const MlPutTrainedModelTargetMeanEncodingPreprocessor = z.object({
  field: z.string(),
  feature_name: z.string(),
  target_map: z.record(z.string(), z.lazy(() => double)),
  default_value: z.lazy(() => double)
}).meta({ id: 'MlPutTrainedModelTargetMeanEncodingPreprocessor' })
export type MlPutTrainedModelTargetMeanEncodingPreprocessor = z.infer<typeof MlPutTrainedModelTargetMeanEncodingPreprocessor>

const MlPutTrainedModelPreprocessorExclusiveProps = z.union([z.object({ frequency_encoding: MlPutTrainedModelFrequencyEncodingPreprocessor }), z.object({ one_hot_encoding: MlPutTrainedModelOneHotEncodingPreprocessor }), z.object({ target_mean_encoding: MlPutTrainedModelTargetMeanEncodingPreprocessor })])

export const MlPutTrainedModelPreprocessor = MlPutTrainedModelPreprocessorExclusiveProps.meta({ id: 'MlPutTrainedModelPreprocessor' })
export type MlPutTrainedModelPreprocessor = z.infer<typeof MlPutTrainedModelPreprocessor>

export const MlPutTrainedModelTrainedModelTreeNode = z.object({
  decision_type: z.string().optional(),
  default_left: z.boolean().optional(),
  leaf_value: z.lazy(() => double).optional(),
  left_child: z.lazy(() => integer).optional(),
  node_index: z.lazy(() => integer),
  right_child: z.lazy(() => integer).optional(),
  split_feature: z.lazy(() => integer).optional(),
  split_gain: z.lazy(() => integer).optional(),
  threshold: z.lazy(() => double).optional()
}).meta({ id: 'MlPutTrainedModelTrainedModelTreeNode' })
export type MlPutTrainedModelTrainedModelTreeNode = z.infer<typeof MlPutTrainedModelTrainedModelTreeNode>

export const MlPutTrainedModelTrainedModelTree = z.object({
  classification_labels: z.array(z.string()).optional(),
  feature_names: z.array(z.string()),
  target_type: z.string().optional(),
  tree_structure: z.array(MlPutTrainedModelTrainedModelTreeNode)
}).meta({ id: 'MlPutTrainedModelTrainedModelTree' })
export type MlPutTrainedModelTrainedModelTree = z.infer<typeof MlPutTrainedModelTrainedModelTree>

export interface MlPutTrainedModelEnsembleShape {
  aggregate_output?: MlPutTrainedModelAggregateOutput | undefined
  classification_labels?: string[] | undefined
  feature_names?: string[] | undefined
  target_type?: string | undefined
  trained_models: MlPutTrainedModelTrainedModelShape[]
}
export const MlPutTrainedModelEnsemble = z.object({
  aggregate_output: MlPutTrainedModelAggregateOutput.optional(),
  classification_labels: z.array(z.string()).optional(),
  feature_names: z.array(z.string()).optional(),
  target_type: z.string().optional(),
  get trained_models () { return MlPutTrainedModelTrainedModel.array() }
}).meta({ id: 'MlPutTrainedModelEnsemble' })
export type MlPutTrainedModelEnsemble = z.infer<typeof MlPutTrainedModelEnsemble>

export interface MlPutTrainedModelTrainedModelShape {
  tree?: MlPutTrainedModelTrainedModelTree | undefined
  tree_node?: MlPutTrainedModelTrainedModelTreeNode | undefined
  ensemble?: MlPutTrainedModelEnsembleShape | undefined
}
export const MlPutTrainedModelTrainedModel = z.object({
  tree: MlPutTrainedModelTrainedModelTree.describe('The definition for a binary decision tree.').optional(),
  tree_node: MlPutTrainedModelTrainedModelTreeNode.describe('The definition of a node in a tree. There are two major types of nodes: leaf nodes and not-leaf nodes. - Leaf nodes only need node_index and leaf_value defined. - All other nodes need split_feature, left_child, right_child, threshold, decision_type, and default_left defined.').optional(),
  get ensemble () { return MlPutTrainedModelEnsemble.describe('The definition for an ensemble model').optional() }
}).meta({ id: 'MlPutTrainedModelTrainedModel' })
export type MlPutTrainedModelTrainedModel = z.infer<typeof MlPutTrainedModelTrainedModel>

export const MlPutTrainedModelDefinition = z.object({
  preprocessors: z.array(MlPutTrainedModelPreprocessor).describe('Collection of preprocessors').optional(),
  trained_model: z.lazy(() => MlPutTrainedModelTrainedModel).describe('The definition of the trained model.')
}).meta({ id: 'MlPutTrainedModelDefinition' })
export type MlPutTrainedModelDefinition = z.infer<typeof MlPutTrainedModelDefinition>

export const MlPutTrainedModelInput = z.object({
  field_names: z.lazy(() => Names)
}).meta({ id: 'MlPutTrainedModelInput' })
export type MlPutTrainedModelInput = z.infer<typeof MlPutTrainedModelInput>

/**
 * Create a trained model.
 *
 * Enable you to supply a trained model that is not created by data frame analytics.
 */
export const MlPutTrainedModelRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
  defer_definition_decompression: z.boolean().describe('If set to `true` and a `compressed_definition` is provided, the request defers definition decompression and skips relevant validations.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('Whether to wait for all child operations (e.g. model download) to complete.').optional().meta({ found_in: 'query' }),
  compressed_definition: z.string().describe('The compressed (GZipped and Base64 encoded) inference definition of the model. If compressed_definition is specified, then definition cannot be specified.').optional().meta({ found_in: 'body' }),
  definition: MlPutTrainedModelDefinition.describe('The inference definition for the model. If definition is specified, then compressed_definition cannot be specified.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('A human-readable description of the inference trained model.').optional().meta({ found_in: 'body' }),
  inference_config: z.lazy(() => MlInferenceConfigCreateContainer).describe('The default configuration for inference. This can be either a regression or classification configuration. It must match the underlying definition.trained_model\'s target_type. For pre-packaged models such as ELSER the config is not required.').optional().meta({ found_in: 'body' }),
  input: MlPutTrainedModelInput.describe('The input field names for the model definition.').optional().meta({ found_in: 'body' }),
  metadata: z.any().describe('An object map that contains metadata about the model.').optional().meta({ found_in: 'body' }),
  model_type: z.lazy(() => MlTrainedModelType).describe('The model type.').optional().meta({ found_in: 'body' }),
  model_size_bytes: z.lazy(() => long).describe('The estimated memory usage in bytes to keep the trained model in memory. This property is supported only if defer_definition_decompression is true or the model definition is not supplied.').optional().meta({ found_in: 'body' }),
  platform_architecture: z.string().describe('The platform architecture (if applicable) of the trained mode. If the model only works on one platform, because it is heavily optimized for a particular processor architecture and OS combination, then this field specifies which. The format of the string must match the platform identifiers used by Elasticsearch, so one of, `linux-x86_64`, `linux-aarch64`, `darwin-aarch64`, or `windows-x86_64`. For portable models (those that work independent of processor architecture or OS features), leave this field unset.').optional().meta({ found_in: 'body' }),
  tags: z.array(z.string()).describe('An array of tags to organize the model.').optional().meta({ found_in: 'body' }),
  prefix_strings: z.lazy(() => MlTrainedModelPrefixStrings).describe('Optional prefix strings applied at inference').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPutTrainedModelRequest' })
export type MlPutTrainedModelRequest = z.infer<typeof MlPutTrainedModelRequest>

export const MlPutTrainedModelResponse = z.lazy(() => MlTrainedModelConfig).meta({ id: 'MlPutTrainedModelResponse' })
export type MlPutTrainedModelResponse = z.infer<typeof MlPutTrainedModelResponse>
