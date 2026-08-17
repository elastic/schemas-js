/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Metadata, Name, Namespace, NodeStatistics, integer } from './_types.js'

export const SecurityGetServiceCredentialsNodesCredentialsFileToken = z.object({
  nodes: z.array(z.string())
}).meta({ id: 'SecurityGetServiceCredentialsNodesCredentialsFileToken' })
export type SecurityGetServiceCredentialsNodesCredentialsFileToken = z.infer<typeof SecurityGetServiceCredentialsNodesCredentialsFileToken>

export const SecurityGetServiceCredentialsNodesCredentials = z.object({
  _nodes: z.lazy(() => NodeStatistics).describe('General status showing how nodes respond to the above collection request'),
  file_tokens: z.record(z.string(), SecurityGetServiceCredentialsNodesCredentialsFileToken).describe('File-backed tokens collected from all nodes')
}).meta({ id: 'SecurityGetServiceCredentialsNodesCredentials' })
export type SecurityGetServiceCredentialsNodesCredentials = z.infer<typeof SecurityGetServiceCredentialsNodesCredentials>

/**
 * Get service account credentials.
 *
 * To use this API, you must have at least the `read_security` cluster privilege (or a greater privilege such as `manage_service_account` or `manage_security`).
 *
 * The response includes service account tokens that were created with the create service account tokens API as well as file-backed tokens from all nodes of the cluster.
 *
 * NOTE: For tokens backed by the `service_tokens` file, the API collects them from all nodes of the cluster.
 * Tokens with the same name from different nodes are assumed to be the same token and are only counted once towards the total number of service tokens.
 */
export const SecurityGetServiceCredentialsRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The name of the namespace.').meta({ found_in: 'path' }),
  service: z.lazy(() => Name).describe('The service name.').meta({ found_in: 'path' })
}).meta({ id: 'SecurityGetServiceCredentialsRequest' })
export type SecurityGetServiceCredentialsRequest = z.infer<typeof SecurityGetServiceCredentialsRequest>

export const SecurityGetServiceCredentialsResponse = z.object({
  service_account: z.string(),
  count: z.lazy(() => integer),
  tokens: z.record(z.string(), z.lazy(() => Metadata)),
  nodes_credentials: SecurityGetServiceCredentialsNodesCredentials.describe('Service account credentials collected from all nodes of the cluster.')
}).meta({ id: 'SecurityGetServiceCredentialsResponse' })
export type SecurityGetServiceCredentialsResponse = z.infer<typeof SecurityGetServiceCredentialsResponse>
