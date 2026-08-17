/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, DurationValue, ErrorCause, Host, HttpHeaders, Id, IndexName, Metadata, Refresh, Result, Username, VersionNumber, integer, uint } from './_types.js'
import type { ErrorCauseShape } from './_types.js'
import { WatcherConditionContainer, WatcherInputContainer, WatcherSearchInputRequestDefinition, WatcherWatch, WatcherWatchStatus } from './watcher.js'
import { WatcherActionType, WatcherConnectionScheme, WatcherEmail, WatcherHttpInputAuthentication, WatcherHttpInputMethod, WatcherHttpInputProxy, WatcherPagerDutyEvent, WatcherSlackMessage } from './watcher.put_watch.js'

export const WatcherActionExecutionMode = z.enum(['simulate', 'force_simulate', 'execute', 'force_execute', 'skip']).meta({ id: 'WatcherActionExecutionMode' })
export type WatcherActionExecutionMode = z.infer<typeof WatcherActionExecutionMode>

export const WatcherActionStatusOptions = z.enum(['success', 'failure', 'partial_failure', 'acknowledged', 'throttled', 'condition_failed', 'simulated']).meta({ id: 'WatcherActionStatusOptions' })
export type WatcherActionStatusOptions = z.infer<typeof WatcherActionStatusOptions>

export const WatcherConditionType = z.enum(['always', 'never', 'script', 'compare', 'array_compare']).meta({ id: 'WatcherConditionType' })
export type WatcherConditionType = z.infer<typeof WatcherConditionType>

export const WatcherEmailResult = z.object({
  account: z.string().optional(),
  message: WatcherEmail,
  reason: z.string().optional()
}).meta({ id: 'WatcherEmailResult' })
export type WatcherEmailResult = z.infer<typeof WatcherEmailResult>

/**
 * A single item of an index action result.
 * Successful items and failed items expose different fields; only `id` and `index`
 * are present in both. Failed items appear when a bulk index action ends in
 * `failure` or `partial_failure`.
 */
export const WatcherIndexResultSummary = z.object({
  id: z.lazy(() => Id),
  index: z.lazy(() => IndexName),
  created: z.boolean().optional(),
  result: z.lazy(() => Result).optional(),
  version: z.lazy(() => VersionNumber).optional(),
  failed: z.boolean().describe('Only present for failed items').optional(),
  message: z.string().describe('Only present for failed items').optional()
}).meta({ id: 'WatcherIndexResultSummary' })
export type WatcherIndexResultSummary = z.infer<typeof WatcherIndexResultSummary>

export const WatcherIndexResultRequestSummary = z.object({
  doc_id: z.lazy(() => Id).optional(),
  index: z.lazy(() => IndexName),
  refresh: z.lazy(() => Refresh).optional(),
  source: z.any()
}).meta({ id: 'WatcherIndexResultRequestSummary' })
export type WatcherIndexResultRequestSummary = z.infer<typeof WatcherIndexResultRequestSummary>

const WatcherIndexResultExclusiveProps = z.union([z.object({ response: z.union([WatcherIndexResultSummary, z.array(WatcherIndexResultSummary)]) }), z.object({ request: WatcherIndexResultRequestSummary })])

/**
 * The result of an index action.
 * It is a container that holds either the `response` of an executed index
 * operation, or the `request` that would have run when the action is simulated.
 */
export const WatcherIndexResult = WatcherIndexResultExclusiveProps.meta({ id: 'WatcherIndexResult' })
export type WatcherIndexResult = z.infer<typeof WatcherIndexResult>

export const WatcherLoggingResult = z.object({
  logged_text: z.string()
}).meta({ id: 'WatcherLoggingResult' })
export type WatcherLoggingResult = z.infer<typeof WatcherLoggingResult>

export const WatcherHttpInputRequestResult = z.object({
  auth: WatcherHttpInputAuthentication.optional(),
  body: z.string().optional(),
  connection_timeout: z.lazy(() => Duration).optional(),
  headers: z.record(z.string(), z.string()).optional(),
  host: z.lazy(() => Host).optional(),
  method: WatcherHttpInputMethod.optional(),
  params: z.record(z.string(), z.string()).optional(),
  path: z.string().optional(),
  port: z.lazy(() => uint).optional(),
  proxy: WatcherHttpInputProxy.optional(),
  read_timeout: z.lazy(() => Duration).optional(),
  scheme: WatcherConnectionScheme.optional(),
  url: z.string().optional()
}).meta({ id: 'WatcherHttpInputRequestResult' })
export type WatcherHttpInputRequestResult = z.infer<typeof WatcherHttpInputRequestResult>

export const WatcherHttpInputResponseResult = z.object({
  body: z.string(),
  headers: HttpHeaders,
  status: z.lazy(() => integer)
}).meta({ id: 'WatcherHttpInputResponseResult' })
export type WatcherHttpInputResponseResult = z.infer<typeof WatcherHttpInputResponseResult>

export const WatcherPagerDutyResult = z.object({
  event: WatcherPagerDutyEvent,
  reason: z.string().optional(),
  request: WatcherHttpInputRequestResult.optional(),
  response: WatcherHttpInputResponseResult.optional()
}).meta({ id: 'WatcherPagerDutyResult' })
export type WatcherPagerDutyResult = z.infer<typeof WatcherPagerDutyResult>

export const WatcherSlackResult = z.object({
  account: z.string().optional(),
  message: WatcherSlackMessage
}).meta({ id: 'WatcherSlackResult' })
export type WatcherSlackResult = z.infer<typeof WatcherSlackResult>

export const WatcherWebhookResult = z.object({
  request: WatcherHttpInputRequestResult,
  response: WatcherHttpInputResponseResult.optional()
}).meta({ id: 'WatcherWebhookResult' })
export type WatcherWebhookResult = z.infer<typeof WatcherWebhookResult>

/** The result of a single action execution. */
export const WatcherExecutionResultForeachAction = z.object({
  email: WatcherEmailResult.optional(),
  index: WatcherIndexResult.optional(),
  logging: WatcherLoggingResult.optional(),
  pagerduty: WatcherPagerDutyResult.optional(),
  slack: WatcherSlackResult.optional(),
  webhook: WatcherWebhookResult.optional(),
  error: z.lazy(() => ErrorCause).optional(),
  reason: z.string().optional()
}).meta({ id: 'WatcherExecutionResultForeachAction' })
export type WatcherExecutionResultForeachAction = z.infer<typeof WatcherExecutionResultForeachAction>

export const WatcherExecutionResultStatus = z.enum(['success', 'failure']).meta({ id: 'WatcherExecutionResultStatus' })
export type WatcherExecutionResultStatus = z.infer<typeof WatcherExecutionResultStatus>

export const WatcherExecutionResultConditionResolved = z.object({
  resolved_values: z.record(z.string(), z.any()).optional()
}).meta({ id: 'WatcherExecutionResultConditionResolved' })
export type WatcherExecutionResultConditionResolved = z.infer<typeof WatcherExecutionResultConditionResolved>

export const WatcherExecutionResultCondition = z.object({
  met: z.boolean(),
  status: WatcherExecutionResultStatus,
  type: WatcherConditionType,
  compare: WatcherExecutionResultConditionResolved.optional(),
  array_compare: WatcherExecutionResultConditionResolved.optional()
}).meta({ id: 'WatcherExecutionResultCondition' })
export type WatcherExecutionResultCondition = z.infer<typeof WatcherExecutionResultCondition>

export const WatcherExecutionResultTransformType = z.enum(['script', 'search', 'chain']).meta({ id: 'WatcherExecutionResultTransformType' })
export type WatcherExecutionResultTransformType = z.infer<typeof WatcherExecutionResultTransformType>

export const WatcherExecutionResultSearchInput = z.object({
  request: z.lazy(() => WatcherSearchInputRequestDefinition)
}).meta({ id: 'WatcherExecutionResultSearchInput' })
export type WatcherExecutionResultSearchInput = z.infer<typeof WatcherExecutionResultSearchInput>

export const WatcherExecutionResultTransform = z.object({
  payload: z.record(z.string(), z.any()).optional(),
  status: WatcherExecutionResultStatus,
  type: WatcherExecutionResultTransformType,
  search: WatcherExecutionResultSearchInput.optional(),
  error: z.lazy(() => ErrorCause).optional(),
  reason: z.string().optional()
}).meta({ id: 'WatcherExecutionResultTransform' })
export type WatcherExecutionResultTransform = z.infer<typeof WatcherExecutionResultTransform>

export const WatcherExecutionResultAction = z.object({
  ...WatcherExecutionResultForeachAction.shape,
  id: z.lazy(() => Id),
  type: WatcherActionType,
  status: WatcherActionStatusOptions,
  condition: WatcherExecutionResultCondition.optional(),
  transform: WatcherExecutionResultTransform.optional(),
  foreach: z.array(WatcherExecutionResultForeachAction).optional(),
  max_iterations: z.lazy(() => integer).optional(),
  number_of_actions_executed: z.lazy(() => integer).optional()
}).meta({ id: 'WatcherExecutionResultAction' })
export type WatcherExecutionResultAction = z.infer<typeof WatcherExecutionResultAction>

export const WatcherInputType = z.enum(['chain', 'http', 'none', 'search', 'simple', 'transform']).meta({ id: 'WatcherInputType' })
export type WatcherInputType = z.infer<typeof WatcherInputType>

export const WatcherExecutionResultHttpInput = z.object({
  request: WatcherHttpInputRequestResult,
  status_code: z.lazy(() => integer).describe('The HTTP status code returned by the request. It is only present when the request was executed.').optional()
}).meta({ id: 'WatcherExecutionResultHttpInput' })
export type WatcherExecutionResultHttpInput = z.infer<typeof WatcherExecutionResultHttpInput>

export interface WatcherExecutionResultInputShape {
  payload?: Record<string, unknown> | undefined
  status: WatcherExecutionResultStatus
  type: WatcherInputType
  search?: WatcherExecutionResultSearchInput | undefined
  http?: WatcherExecutionResultHttpInput | undefined
  chain?: Record<string, WatcherExecutionResultInputShape> | undefined
  error?: ErrorCauseShape | undefined
}
export const WatcherExecutionResultInput = z.object({
  payload: z.record(z.string(), z.any()).optional(),
  status: WatcherExecutionResultStatus,
  type: WatcherInputType,
  search: WatcherExecutionResultSearchInput.describe('The resolved search request, present when the input is a search input.').optional(),
  http: WatcherExecutionResultHttpInput.describe('The resolved HTTP request, present when the input is an HTTP input.').optional(),
  get chain (): z.ZodOptional<z.ZodRecord<z.ZodString, typeof WatcherExecutionResultInput>> { return z.record(z.string(), WatcherExecutionResultInput).describe('The result of each named input, present when the input is a chain input.').optional() },
  get error () { return ErrorCause.optional() }
}).meta({ id: 'WatcherExecutionResultInput' })
export type WatcherExecutionResultInput = z.infer<typeof WatcherExecutionResultInput>

export const WatcherExecutionResult = z.object({
  actions: z.array(WatcherExecutionResultAction),
  condition: WatcherExecutionResultCondition.optional(),
  execution_duration: z.lazy(() => DurationValue),
  execution_time: z.lazy(() => DateTime),
  input: z.lazy(() => WatcherExecutionResultInput).optional(),
  transform: WatcherExecutionResultTransform.optional()
}).meta({ id: 'WatcherExecutionResult' })
export type WatcherExecutionResult = z.infer<typeof WatcherExecutionResult>

export const WatcherExecutionStatus = z.enum(['awaits_execution', 'checking', 'execution_not_needed', 'throttled', 'executed', 'failed', 'deleted_while_queued', 'not_executed_already_queued']).meta({ id: 'WatcherExecutionStatus' })
export type WatcherExecutionStatus = z.infer<typeof WatcherExecutionStatus>

export const WatcherScheduleTriggerEvent = z.object({
  scheduled_time: z.lazy(() => DateTime),
  triggered_time: z.lazy(() => DateTime).optional()
}).meta({ id: 'WatcherScheduleTriggerEvent' })
export type WatcherScheduleTriggerEvent = z.infer<typeof WatcherScheduleTriggerEvent>

export interface WatcherSimulatedActionsShape {
  actions: string[]
  all: WatcherSimulatedActionsShape
  use_all: boolean
}
export const WatcherSimulatedActions = z.object({
  actions: z.array(z.string()),
  get all () { return WatcherSimulatedActions },
  use_all: z.boolean()
}).meta({ id: 'WatcherSimulatedActions' })
export type WatcherSimulatedActions = z.infer<typeof WatcherSimulatedActions>

const WatcherTriggerEventContainerExclusiveProps = z.union([z.object({ schedule: WatcherScheduleTriggerEvent })])

export const WatcherTriggerEventContainer = WatcherTriggerEventContainerExclusiveProps.meta({ id: 'WatcherTriggerEventContainer' })
export type WatcherTriggerEventContainer = z.infer<typeof WatcherTriggerEventContainer>

export const WatcherTriggerEventResult = z.object({
  manual: WatcherTriggerEventContainer,
  triggered_time: z.lazy(() => DateTime),
  type: z.string()
}).meta({ id: 'WatcherTriggerEventResult' })
export type WatcherTriggerEventResult = z.infer<typeof WatcherTriggerEventResult>

/**
 * Run a watch.
 *
 * This API can be used to force execution of the watch outside of its triggering logic or to simulate the watch execution for debugging purposes.
 *
 * For testing and debugging purposes, you also have fine-grained control on how the watch runs.
 * You can run the watch without running all of its actions or alternatively by simulating them.
 * You can also force execution by ignoring the watch condition and control whether a watch record would be written to the watch history after it runs.
 *
 * You can use the run watch API to run watches that are not yet registered by specifying the watch definition inline.
 * This serves as great tool for testing and debugging your watches prior to adding them to Watcher.
 *
 * When Elasticsearch security features are enabled on your cluster, watches are run with the privileges of the user that stored the watches.
 * If your user is allowed to read index `a`, but not index `b`, then the exact same set of rules will apply during execution of a watch.
 *
 * When using the run watch API, the authorization data of the user that called the API will be used as a base, instead of the information who stored the watch.
 * Refer to the external documentation for examples of watch execution requests, including existing, customized, and inline watches.
 */
export const WatcherExecuteWatchRequest = z.object({
  id: z.lazy(() => Id).describe('The watch identifier.').optional().meta({ found_in: 'path' }),
  debug: z.boolean().describe('Defines whether the watch runs in debug mode.').optional().meta({ found_in: 'query' }),
  action_modes: z.record(z.string(), WatcherActionExecutionMode).describe('Determines how to handle the watch actions as part of the watch execution.').optional().meta({ found_in: 'body' }),
  alternative_input: z.record(z.string(), z.any()).describe('When present, the watch uses this object as a payload instead of executing its own input.').optional().meta({ found_in: 'body' }),
  ignore_condition: z.boolean().describe('When set to `true`, the watch execution uses the always condition. This can also be specified as an HTTP parameter.').optional().meta({ found_in: 'body' }),
  record_execution: z.boolean().describe('When set to `true`, the watch record representing the watch execution result is persisted to the `.watcher-history` index for the current time. In addition, the status of the watch is updated, possibly throttling subsequent runs. This can also be specified as an HTTP parameter.').optional().meta({ found_in: 'body' }),
  simulated_actions: z.lazy(() => WatcherSimulatedActions).optional().meta({ found_in: 'body' }),
  trigger_data: WatcherScheduleTriggerEvent.describe('This structure is parsed as the data of the trigger event that will be used during the watch execution.').optional().meta({ found_in: 'body' }),
  watch: WatcherWatch.describe('When present, this watch is used instead of the one specified in the request. This watch is not persisted to the index and `record_execution` cannot be set.').optional().meta({ found_in: 'body' })
}).meta({ id: 'WatcherExecuteWatchRequest' })
export type WatcherExecuteWatchRequest = z.infer<typeof WatcherExecuteWatchRequest>

export const WatcherExecuteWatchWatchRecord = z.object({
  timestamp: z.lazy(() => DateTime),
  node: z.string(),
  state: WatcherExecutionStatus,
  trigger_event: WatcherTriggerEventResult,
  watch_id: z.lazy(() => Id),
  condition: z.lazy(() => WatcherConditionContainer).optional(),
  input: z.lazy(() => WatcherInputContainer).optional(),
  metadata: z.lazy(() => Metadata).optional(),
  result: WatcherExecutionResult.optional(),
  user: z.lazy(() => Username).optional(),
  status: WatcherWatchStatus.optional(),
  messages: z.array(z.string()).optional(),
  vars: z.record(z.string(), z.any()).optional(),
  exception: z.lazy(() => ErrorCause).optional()
}).meta({ id: 'WatcherExecuteWatchWatchRecord' })
export type WatcherExecuteWatchWatchRecord = z.infer<typeof WatcherExecuteWatchWatchRecord>

export const WatcherExecuteWatchResponse = z.object({
  _id: z.lazy(() => Id).describe('The watch record identifier as it would be stored in the `.watcher-history` index.'),
  watch_record: WatcherExecuteWatchWatchRecord.describe('The watch record document as it would be stored in the `.watcher-history` index.')
}).meta({ id: 'WatcherExecuteWatchResponse' })
export type WatcherExecuteWatchResponse = z.infer<typeof WatcherExecuteWatchResponse>
