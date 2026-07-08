/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const EpochTime = z.any().meta({ id: 'EpochTime' });
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export const DateTime = z.union([z.string(), EpochTime]).meta({ id: 'DateTime' });
export const IndexName = z.string().meta({ id: 'IndexName' });
export const Name = z.string().meta({ id: 'Name' });
export const Names = z.union([Name, z.array(Name)]).meta({ id: 'Names' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const long = z.number().meta({ id: 'long' });
export const VersionNumber = long.meta({ id: 'VersionNumber' });
export const WatcherAcknowledgementOptions = z.enum(['awaits_successful_execution', 'ackable', 'acked']).meta({ id: 'WatcherAcknowledgementOptions' });
export const WatcherAcknowledgeState = z.object({
    state: WatcherAcknowledgementOptions,
    timestamp: DateTime
}).meta({ id: 'WatcherAcknowledgeState' });
export const WatcherExecutionState = z.object({
    successful: z.boolean(),
    timestamp: DateTime,
    reason: z.string().optional()
}).meta({ id: 'WatcherExecutionState' });
export const WatcherThrottleState = z.object({
    reason: z.string(),
    timestamp: DateTime
}).meta({ id: 'WatcherThrottleState' });
export const WatcherActionStatus = z.object({
    ack: WatcherAcknowledgeState,
    last_execution: WatcherExecutionState.optional(),
    last_successful_execution: WatcherExecutionState.optional(),
    last_throttle: WatcherThrottleState.optional()
}).meta({ id: 'WatcherActionStatus' });
export const WatcherActions = z.record(IndexName, WatcherActionStatus).meta({ id: 'WatcherActions' });
export const WatcherActivationState = z.object({
    active: z.boolean(),
    timestamp: DateTime
}).meta({ id: 'WatcherActivationState' });
export const WatcherWatchStatus = z.object({
    actions: WatcherActions,
    last_checked: DateTime.optional(),
    last_met_condition: DateTime.optional(),
    state: WatcherActivationState,
    version: VersionNumber,
    execution_state: z.string().optional()
}).meta({ id: 'WatcherWatchStatus' });
/**
 * Acknowledge a watch.
 *
 * Acknowledging a watch enables you to manually throttle the execution of the watch's actions.
 *
 * The acknowledgement state of an action is stored in the `status.actions.<id>.ack.state` structure.
 *
 * IMPORTANT: If the specified watch is currently being executed, this API will return an error
 * The reason for this behavior is to prevent overwriting the watch status from a watch execution.
 *
 * Acknowledging an action throttles further executions of that action until its `ack.state` is reset to `awaits_successful_execution`.
 * This happens when the condition of the watch is not met (the condition evaluates to false).
 * To demonstrate how throttling works in practice and how it can be configured for individual actions within a watch, refer to External documentation.
 */
export const WatcherAckWatchRequest = z.object({
    ...RequestBase.shape,
    watch_id: Name.describe('The watch identifier.').meta({ found_in: 'path' }),
    action_id: Names.describe('A comma-separated list of the action identifiers to acknowledge. If you omit this parameter, all of the actions of the watch are acknowledged.').optional().meta({ found_in: 'path' })
}).meta({ id: 'WatcherAckWatchRequest' });
export const WatcherAckWatchResponse = z.object({
    status: WatcherWatchStatus
}).meta({ id: 'WatcherAckWatchResponse' });
//# sourceMappingURL=watcher_ack_watch.js.map