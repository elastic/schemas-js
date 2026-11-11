/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, double, integer } from './_types.js'
import { InferenceEmbeddingContentFormat, InferenceEmbeddingContentType } from './inference.js'

export const InferenceChoiceDecisionProbability = z.object({
  value: z.string().describe('The option.'),
  probability: z.lazy(() => double).describe('The probability of the option.')
}).meta({ id: 'InferenceChoiceDecisionProbability' })
export type InferenceChoiceDecisionProbability = z.infer<typeof InferenceChoiceDecisionProbability>

/** The answer to a `choice` question. */
export const InferenceChoiceDecisionAnswer = z.object({
  type: z.literal('choice'),
  choice: z.string().describe('The chosen option.'),
  probabilities: z.array(InferenceChoiceDecisionProbability).describe('The probability of each option.'),
  confidence: z.lazy(() => double).describe('The confidence in the chosen option.')
}).meta({ id: 'InferenceChoiceDecisionAnswer' })
export type InferenceChoiceDecisionAnswer = z.infer<typeof InferenceChoiceDecisionAnswer>

/** The answer to a `predicate` question. */
export const InferencePredicateDecisionAnswer = z.object({
  type: z.literal('predicate'),
  probability: z.lazy(() => double).describe('The probability that the statement in the question is true.')
}).meta({ id: 'InferencePredicateDecisionAnswer' })
export type InferencePredicateDecisionAnswer = z.infer<typeof InferencePredicateDecisionAnswer>

export const InferenceScoreDecisionProbability = z.object({
  value: z.lazy(() => integer).describe('The zero-based position of the level, which is also its position in the array.'),
  label: z.string().describe('The label of the level.'),
  probability: z.lazy(() => double).describe('The probability of the level.')
}).meta({ id: 'InferenceScoreDecisionProbability' })
export type InferenceScoreDecisionProbability = z.infer<typeof InferenceScoreDecisionProbability>

/** The answer to a `score` question. */
export const InferenceScoreDecisionAnswer = z.object({
  type: z.literal('score'),
  score: z.lazy(() => double).describe('The probability-weighted position on the scale, from `0` for the lowest level.'),
  probabilities: z.array(InferenceScoreDecisionProbability).describe('The probability of each level, ordered from the lowest to the highest level.'),
  confidence: z.lazy(() => double).describe('The confidence in the score.')
}).meta({ id: 'InferenceScoreDecisionAnswer' })
export type InferenceScoreDecisionAnswer = z.infer<typeof InferenceScoreDecisionAnswer>

/**
 * The answer to a single question of a decision request.
 * The type of the answer matches the type of the question it answers.
 */
export const InferenceDecisionAnswer = z.union([InferencePredicateDecisionAnswer, InferenceChoiceDecisionAnswer, InferenceScoreDecisionAnswer]).meta({ id: 'InferenceDecisionAnswer' })
export type InferenceDecisionAnswer = z.infer<typeof InferenceDecisionAnswer>

export const InferenceDecisionResult = z.object({
  answers: z.record(z.string(), InferenceDecisionAnswer).describe('The answers, keyed by the name of the question they answer.')
}).meta({ id: 'InferenceDecisionResult' })
export type InferenceDecisionResult = z.infer<typeof InferenceDecisionResult>

/** Defines the response for a decision request. */
export const InferenceDecisionInferenceResult = z.object({
  decision: InferenceDecisionResult
}).meta({ id: 'InferenceDecisionInferenceResult' })
export type InferenceDecisionInferenceResult = z.infer<typeof InferenceDecisionInferenceResult>

/** An object containing the input data for a single item for the model to embed. */
export const InferenceEmbeddingContentObjectItem = z.object({
  type: z.lazy(() => InferenceEmbeddingContentType).describe('The type of input to embed. Not all models support all input types. The `audio`, `video`, and `pdf` types are available in Elasticsearch 9.5.0 and later.'),
  format: z.lazy(() => InferenceEmbeddingContentFormat).describe('The format of the input. For the `text` type this must be `text`. For all other types, this must be `base64` or `url`. If not specified, this will default to `text` for the `text` type and `base64` for all other types. The `url` format is available in Elasticsearch 9.6.0 and later. Not all services and models support all formats.').optional(),
  value: z.string().describe('The value of the input to embed. For the `base64` format, this must be a base64-encoded data URI, i.e. "data:content/type;base64,...". For the `url` format, this must be a URL that points to the content, i.e. "https://example.com/image.jpg".')
}).meta({ id: 'InferenceEmbeddingContentObjectItem' })
export type InferenceEmbeddingContentObjectItem = z.infer<typeof InferenceEmbeddingContentObjectItem>

export const InferenceDecisionDecisionQuestionBase = z.object({
  instructions: z.string().describe('A description of what to decide. It must not be empty.')
}).meta({ id: 'InferenceDecisionDecisionQuestionBase' })
export type InferenceDecisionDecisionQuestionBase = z.infer<typeof InferenceDecisionDecisionQuestionBase>

/** A question answered with one option out of a fixed set of choices. */
export const InferenceDecisionChoiceDecisionQuestion = z.object({
  ...InferenceDecisionDecisionQuestionBase.shape,
  type: z.literal('choice'),
  choices: z.record(z.string(), z.union([z.string(), z.null()])).describe('The options to choose from, each mapped to an optional description. At least two choices are required.')
}).meta({ id: 'InferenceDecisionChoiceDecisionQuestion' })
export type InferenceDecisionChoiceDecisionQuestion = z.infer<typeof InferenceDecisionChoiceDecisionQuestion>

/**
 * The input for the `decision` task.
 * Either a string, or an object. The object form additionally allows specifying images.
 * The `decision` task currently only supports the `text` and `image` types.
 */
export const InferenceDecisionDecisionInput = z.union([z.string(), InferenceEmbeddingContentObjectItem]).meta({ id: 'InferenceDecisionDecisionInput' })
export type InferenceDecisionDecisionInput = z.infer<typeof InferenceDecisionDecisionInput>

/** A question answered with the probability that the statement in `instructions` is true. */
export const InferenceDecisionPredicateDecisionQuestion = z.object({
  ...InferenceDecisionDecisionQuestionBase.shape,
  type: z.literal('predicate')
}).meta({ id: 'InferenceDecisionPredicateDecisionQuestion' })
export type InferenceDecisionPredicateDecisionQuestion = z.infer<typeof InferenceDecisionPredicateDecisionQuestion>

export const InferenceDecisionDecisionScoreLevelObject = z.object({
  label: z.string().describe('The label of the level.'),
  description: z.string().describe('A description of the level.').optional()
}).meta({ id: 'InferenceDecisionDecisionScoreLevelObject' })
export type InferenceDecisionDecisionScoreLevelObject = z.infer<typeof InferenceDecisionDecisionScoreLevelObject>

/** A level of a `score` question: either a plain label, or an object with a label and an optional description. */
export const InferenceDecisionDecisionScoreLevel = z.union([z.string(), InferenceDecisionDecisionScoreLevelObject]).meta({ id: 'InferenceDecisionDecisionScoreLevel' })
export type InferenceDecisionDecisionScoreLevel = z.infer<typeof InferenceDecisionDecisionScoreLevel>

/** A question answered with the probability-weighted position on an ordered scale of levels. */
export const InferenceDecisionScoreDecisionQuestion = z.object({
  ...InferenceDecisionDecisionQuestionBase.shape,
  type: z.literal('score'),
  levels: z.array(InferenceDecisionDecisionScoreLevel).describe('The levels of the scale, ordered from lowest to highest. At least two levels are required.')
}).meta({ id: 'InferenceDecisionScoreDecisionQuestion' })
export type InferenceDecisionScoreDecisionQuestion = z.infer<typeof InferenceDecisionScoreDecisionQuestion>

/**
 * A question answered by the `decision` task.
 * The type of the question determines the type of its answer.
 */
export const InferenceDecisionDecisionQuestion = z.union([InferenceDecisionPredicateDecisionQuestion, InferenceDecisionChoiceDecisionQuestion, InferenceDecisionScoreDecisionQuestion]).meta({ id: 'InferenceDecisionDecisionQuestion' })
export type InferenceDecisionDecisionQuestion = z.infer<typeof InferenceDecisionDecisionQuestion>

/** The task settings of the `decision` task. */
export const InferenceDecisionDecisionTaskSettings = z.object({
  questions: z.record(z.string(), InferenceDecisionDecisionQuestion).describe('The questions to answer, keyed by question name. The answers in the response use the same names. The questions replace the ones of the inference endpoint as a whole. At least one question is required.').optional()
}).meta({ id: 'InferenceDecisionDecisionTaskSettings' })
export type InferenceDecisionDecisionTaskSettings = z.infer<typeof InferenceDecisionDecisionTaskSettings>

/**
 * Perform decision inference on the service.
 *
 * Answer a set of named questions about an input, such as whether a customer is complaining, which team should handle a request, or how angry a customer is.
 * The questions are defined in the task settings of the inference endpoint, and can be replaced for a single request through `task_settings`.
 *
 * > info
 * > Only the `elastic` service currently supports the `decision` task.
 */
export const InferenceDecisionRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  input: InferenceDecisionDecisionInput.describe('The input to answer the questions about. It can be specified as a string, or as an object. The object form additionally allows specifying images. string example: ``` "input": "I was charged twice for my order and nobody answers my emails." ``` object example: ``` "input": {   "type": "image",   "format": "base64",   "value": "data:image/jpeg;base64,..." } ```').meta({ found_in: 'body' }),
  task_settings: InferenceDecisionDecisionTaskSettings.describe('Task settings for the individual inference request. These settings override the task settings specified when creating the inference endpoint.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceDecisionRequest' })
export type InferenceDecisionRequest = z.infer<typeof InferenceDecisionRequest>

export const InferenceDecisionResponse = InferenceDecisionInferenceResult.meta({ id: 'InferenceDecisionResponse' })
export type InferenceDecisionResponse = z.infer<typeof InferenceDecisionResponse>
