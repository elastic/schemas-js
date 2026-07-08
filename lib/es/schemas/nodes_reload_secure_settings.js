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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export const ErrorCause = z.looseObject({
    type: z.string().describe('The type of error'),
    reason: z.union([z.string(), z.null()]).describe('A human-readable explanation of the error, in English.').optional(),
    stack_trace: z.string().describe('The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.').optional(),
    get caused_by() { return ErrorCause.optional(); },
    get root_cause() { return ErrorCause.array().optional(); },
    get suppressed() { return ErrorCause.array().optional(); }
}).meta({ id: 'ErrorCause' });
export const Name = z.string().meta({ id: 'Name' });
export const NodeId = z.string().meta({ id: 'NodeId' });
export const NodeIds = z.union([NodeId, z.array(NodeId)]).meta({ id: 'NodeIds' });
export const integer = z.number().meta({ id: 'integer' });
/** Contains statistics about the number of nodes selected by the request. */
export const NodeStatistics = z.object({
    failures: z.array(z.lazy(() => ErrorCause)).optional(),
    total: integer.describe('Total number of nodes selected by the request.'),
    successful: integer.describe('Number of nodes that responded successfully to the request.'),
    failed: integer.describe('Number of nodes that rejected the request or failed to respond. If this value is not 0, a reason for the rejection or failure is included in the response.')
}).meta({ id: 'NodeStatistics' });
export const Password = z.string().meta({ id: 'Password' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const NodesNodeReloadResult = z.object({
    name: Name,
    reload_exception: z.lazy(() => ErrorCause).optional(),
    secure_setting_names: z.array(z.string()).describe('The names of the secure settings that were reloaded.').optional(),
    keystore_path: z.string().describe('The path to the keystore file.').optional(),
    keystore_digest: z.string().describe('A SHA-256 hash of the keystore file contents.').optional(),
    keystore_last_modified_time: DateTime.describe('The last modification time of the keystore file.').optional()
}).meta({ id: 'NodesNodeReloadResult' });
export const NodesNodesResponseBase = z.object({
    node_stats: NodeStatistics.describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional()
}).meta({ id: 'NodesNodesResponseBase' });
/**
 * Reload the keystore on nodes in the cluster.
 *
 * Secure settings are stored in an on-disk keystore. Certain of these settings are reloadable.
 * That is, you can change them on disk and reload them without restarting any nodes in the cluster.
 * When you have updated reloadable secure settings in your keystore, you can use this API to reload those settings on each node.
 *
 * When the Elasticsearch keystore is password protected and not simply obfuscated, you must provide the password for the keystore when you reload the secure settings.
 * Reloading the settings for the whole cluster assumes that the keystores for all nodes are protected with the same password; this method is allowed only when inter-node communications are encrypted.
 * Alternatively, you can reload the secure settings on each node by locally accessing the API and passing the node-specific Elasticsearch keystore password.
 */
export const NodesReloadSecureSettingsRequest = z.object({
    ...RequestBase.shape,
    node_id: NodeIds.describe('The names of particular nodes in the cluster to target.').optional().meta({ found_in: 'path' }),
    timeout: Duration.describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
    secure_settings_password: Password.describe('The password for the Elasticsearch keystore.').optional().meta({ found_in: 'body' })
}).meta({ id: 'NodesReloadSecureSettingsRequest' });
export const NodesReloadSecureSettingsResponseBase = z.object({
    ...NodesNodesResponseBase.shape,
    cluster_name: Name,
    nodes: z.record(z.string(), NodesNodeReloadResult)
}).meta({ id: 'NodesReloadSecureSettingsResponseBase' });
export const NodesReloadSecureSettingsResponse = NodesReloadSecureSettingsResponseBase.meta({ id: 'NodesReloadSecureSettingsResponse' });
//# sourceMappingURL=nodes_reload_secure_settings.js.map