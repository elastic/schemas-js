/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, ErrorCause, Name, NodeIds, NodeStatistics, Password } from './_types.js'

export const NodesNodeReloadResult = z.object({
  name: z.lazy(() => Name),
  reload_exception: z.lazy(() => ErrorCause).optional(),
  secure_setting_names: z.array(z.string()).describe('The names of the secure settings that were reloaded.').optional(),
  keystore_path: z.string().describe('The path to the keystore file.').optional(),
  keystore_digest: z.string().describe('A SHA-256 hash of the keystore file contents.').optional(),
  keystore_last_modified_time: z.lazy(() => DateTime).describe('The last modification time of the keystore file.').optional()
}).meta({ id: 'NodesNodeReloadResult' })
export type NodesNodeReloadResult = z.infer<typeof NodesNodeReloadResult>

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
  node_id: z.lazy(() => NodeIds).describe('The names of particular nodes in the cluster to target.').optional().meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  secure_settings_password: z.lazy(() => Password).describe('The password for the Elasticsearch keystore.').optional().meta({ found_in: 'body' })
}).meta({ id: 'NodesReloadSecureSettingsRequest' })
export type NodesReloadSecureSettingsRequest = z.infer<typeof NodesReloadSecureSettingsRequest>

export const NodesReloadSecureSettingsResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), NodesNodeReloadResult)
}).meta({ id: 'NodesReloadSecureSettingsResponseBase' })
export type NodesReloadSecureSettingsResponseBase = z.infer<typeof NodesReloadSecureSettingsResponseBase>

export const NodesReloadSecureSettingsResponse = NodesReloadSecureSettingsResponseBase.meta({ id: 'NodesReloadSecureSettingsResponse' })
export type NodesReloadSecureSettingsResponse = z.infer<typeof NodesReloadSecureSettingsResponse>
