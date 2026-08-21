/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, DurationValue, FieldValue, Id, IndexName, Indices, IndicesOptions, Metadata, ScriptLanguage, ScriptSource, SearchType, TransformContainer, VersionNumber } from './_types.js'
import { SearchSearchRequestBody } from './search.js'
import { WatcherAction, WatcherHttpInputRequestDefinition, WatcherTriggerContainer } from './watcher.put_watch.js'

export const WatcherSearchTemplateRequestBody = z.object({
  explain: z.boolean().optional(),
  id: z.lazy(() => Id).describe('ID of the search template to use. If no source is specified, this parameter is required.').optional(),
  lang: z.lazy(() => ScriptLanguage).describe('The language the template is written in. It is reported in the resolved search input of a watch record.').optional(),
  params: z.record(z.string(), z.any()).optional(),
  profile: z.boolean().optional(),
  source: z.string().describe('An inline search template. Supports the same parameters as the search API\'s request body. Also supports Mustache variables. If no id is specified, this parameter is required.').optional()
}).meta({ id: 'WatcherSearchTemplateRequestBody' })
export type WatcherSearchTemplateRequestBody = z.infer<typeof WatcherSearchTemplateRequestBody>

export const WatcherSearchInputRequestDefinition = z.object({
  body: z.lazy(() => SearchSearchRequestBody).optional(),
  indices: z.lazy(() => Indices).optional(),
  indices_options: z.lazy(() => IndicesOptions).optional(),
  search_type: z.lazy(() => SearchType).optional(),
  template: WatcherSearchTemplateRequestBody.optional(),
  rest_total_hits_as_int: z.boolean().optional()
}).meta({ id: 'WatcherSearchInputRequestDefinition' })
export type WatcherSearchInputRequestDefinition = z.infer<typeof WatcherSearchInputRequestDefinition>

export const WatcherCronExpression = z.string().meta({ id: 'WatcherCronExpression' })
export type WatcherCronExpression = z.infer<typeof WatcherCronExpression>

export const WatcherAcknowledgementOptions = z.enum(['awaits_successful_execution', 'ackable', 'acked']).meta({ id: 'WatcherAcknowledgementOptions' })
export type WatcherAcknowledgementOptions = z.infer<typeof WatcherAcknowledgementOptions>

export const WatcherAcknowledgeState = z.object({
  state: WatcherAcknowledgementOptions,
  timestamp: z.lazy(() => DateTime)
}).meta({ id: 'WatcherAcknowledgeState' })
export type WatcherAcknowledgeState = z.infer<typeof WatcherAcknowledgeState>

export const WatcherAlwaysCondition = z.object({
}).meta({ id: 'WatcherAlwaysCondition' })
export type WatcherAlwaysCondition = z.infer<typeof WatcherAlwaysCondition>

export const WatcherArrayCompareCondition = z.object({
  path: z.string()
}).catchall(z.any()).meta({ id: 'WatcherArrayCompareCondition' })
export type WatcherArrayCompareCondition = z.infer<typeof WatcherArrayCompareCondition>

export const WatcherConditionOp = z.enum(['not_eq', 'eq', 'lt', 'gt', 'lte', 'gte']).meta({ id: 'WatcherConditionOp' })
export type WatcherConditionOp = z.infer<typeof WatcherConditionOp>

export const WatcherNeverCondition = z.object({
}).meta({ id: 'WatcherNeverCondition' })
export type WatcherNeverCondition = z.infer<typeof WatcherNeverCondition>

export const WatcherScriptCondition = z.object({
  lang: z.lazy(() => ScriptLanguage).optional(),
  params: z.record(z.string(), z.any()).optional(),
  source: z.lazy(() => ScriptSource).optional(),
  id: z.string().optional()
}).meta({ id: 'WatcherScriptCondition' })
export type WatcherScriptCondition = z.infer<typeof WatcherScriptCondition>

const WatcherConditionContainerExclusiveProps = z.union([z.object({ always: WatcherAlwaysCondition }), z.object({ array_compare: z.record(z.string(), WatcherArrayCompareCondition) }), z.object({ compare: z.record(z.string(), z.record(WatcherConditionOp, z.lazy(() => FieldValue))) }), z.object({ never: WatcherNeverCondition }), z.object({ script: WatcherScriptCondition })])

export const WatcherConditionContainer = WatcherConditionContainerExclusiveProps.meta({ id: 'WatcherConditionContainer' })
export type WatcherConditionContainer = z.infer<typeof WatcherConditionContainer>

export const WatcherExecutionState = z.object({
  successful: z.boolean(),
  timestamp: z.lazy(() => DateTime),
  reason: z.string().optional()
}).meta({ id: 'WatcherExecutionState' })
export type WatcherExecutionState = z.infer<typeof WatcherExecutionState>

export const WatcherThrottleState = z.object({
  reason: z.string(),
  timestamp: z.lazy(() => DateTime)
}).meta({ id: 'WatcherThrottleState' })
export type WatcherThrottleState = z.infer<typeof WatcherThrottleState>

export const WatcherActionStatus = z.object({
  ack: WatcherAcknowledgeState,
  last_execution: WatcherExecutionState.optional(),
  last_successful_execution: WatcherExecutionState.optional(),
  last_throttle: WatcherThrottleState.optional()
}).meta({ id: 'WatcherActionStatus' })
export type WatcherActionStatus = z.infer<typeof WatcherActionStatus>

export const WatcherActions = z.record(z.lazy(() => IndexName), WatcherActionStatus).meta({ id: 'WatcherActions' })
export type WatcherActions = z.infer<typeof WatcherActions>

export const WatcherActivationState = z.object({
  active: z.boolean(),
  timestamp: z.lazy(() => DateTime)
}).meta({ id: 'WatcherActivationState' })
export type WatcherActivationState = z.infer<typeof WatcherActivationState>

export const WatcherActivationStatus = z.object({
  actions: WatcherActions,
  state: WatcherActivationState,
  version: z.lazy(() => VersionNumber)
}).meta({ id: 'WatcherActivationStatus' })
export type WatcherActivationStatus = z.infer<typeof WatcherActivationStatus>

export const WatcherQuantifier = z.enum(['some', 'all']).meta({ id: 'WatcherQuantifier' })
export type WatcherQuantifier = z.infer<typeof WatcherQuantifier>

export const WatcherArrayCompareOpParams = z.object({
  quantifier: WatcherQuantifier,
  value: z.lazy(() => FieldValue)
}).meta({ id: 'WatcherArrayCompareOpParams' })
export type WatcherArrayCompareOpParams = z.infer<typeof WatcherArrayCompareOpParams>

export const WatcherResponseContentType = z.enum(['json', 'yaml', 'text']).meta({ id: 'WatcherResponseContentType' })
export type WatcherResponseContentType = z.infer<typeof WatcherResponseContentType>

export const WatcherHttpInput = z.object({
  extract: z.array(z.string()).optional(),
  request: z.lazy(() => WatcherHttpInputRequestDefinition).optional(),
  response_content_type: WatcherResponseContentType.optional()
}).meta({ id: 'WatcherHttpInput' })
export type WatcherHttpInput = z.infer<typeof WatcherHttpInput>

export const WatcherSearchInput = z.object({
  extract: z.array(z.string()).optional(),
  request: z.lazy(() => WatcherSearchInputRequestDefinition),
  timeout: z.lazy(() => Duration).optional()
}).meta({ id: 'WatcherSearchInput' })
export type WatcherSearchInput = z.infer<typeof WatcherSearchInput>

const WatcherInputContainerExclusiveProps = z.union([z.object({ chain: z.lazy(() => WatcherChainInput) }), z.object({ http: WatcherHttpInput }), z.object({ search: WatcherSearchInput }), z.object({ simple: z.record(z.string(), z.any()) }), z.object({ transform: z.lazy(() => TransformContainer) })])

export interface WatcherInputContainerShape {
  chain?: WatcherChainInput | undefined
  http?: WatcherHttpInput | undefined
  search?: WatcherSearchInput | undefined
  simple?: Record<string, unknown> | undefined
  transform?: TransformContainer | undefined
}
export const WatcherInputContainer: z.ZodType<WatcherInputContainerShape> = WatcherInputContainerExclusiveProps.meta({ id: 'WatcherInputContainer' })
export type WatcherInputContainer = z.infer<typeof WatcherInputContainer>

export interface WatcherChainInputShape {
  inputs: Array<Record<string, WatcherInputContainerShape>>
}
export const WatcherChainInput = z.object({
  get inputs (): z.ZodArray<z.ZodRecord<z.ZodString, typeof WatcherInputContainer>> { return z.array(z.record(z.string(), WatcherInputContainer)) }
}).meta({ id: 'WatcherChainInput' })
export type WatcherChainInput = z.infer<typeof WatcherChainInput>

export const WatcherWatchStatus = z.object({
  actions: WatcherActions,
  last_checked: z.lazy(() => DateTime).optional(),
  last_met_condition: z.lazy(() => DateTime).optional(),
  state: WatcherActivationState,
  version: z.lazy(() => VersionNumber),
  execution_state: z.string().optional()
}).meta({ id: 'WatcherWatchStatus' })
export type WatcherWatchStatus = z.infer<typeof WatcherWatchStatus>

export const WatcherWatch = z.object({
  actions: z.record(z.lazy(() => IndexName), z.lazy(() => WatcherAction)),
  condition: z.lazy(() => WatcherConditionContainer).optional(),
  input: z.lazy(() => WatcherInputContainer),
  metadata: z.lazy(() => Metadata).optional(),
  status: WatcherWatchStatus.optional(),
  throttle_period: z.lazy(() => Duration).optional(),
  throttle_period_in_millis: z.lazy(() => DurationValue).optional(),
  transform: z.lazy(() => TransformContainer).optional(),
  trigger: z.lazy(() => WatcherTriggerContainer)
}).meta({ id: 'WatcherWatch' })
export type WatcherWatch = z.infer<typeof WatcherWatch>
