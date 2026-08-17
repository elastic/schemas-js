/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, NodeId } from './_types.js'

/**
 * Cancel node shutdown preparations.
 *
 * Remove a node from the shutdown list so it can resume normal operations.
 * You must explicitly clear the shutdown request when a node rejoins the cluster or when a node has permanently left the cluster.
 * Shutdown requests are never removed automatically by Elasticsearch.
 *
 * NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes.
 * Direct use is not supported.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 */
export const ShutdownDeleteNodeRequest = z.object({
  node_id: z.lazy(() => NodeId).describe('The node id of node to be removed from the shutdown state').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ShutdownDeleteNodeRequest' })
export type ShutdownDeleteNodeRequest = z.infer<typeof ShutdownDeleteNodeRequest>

export const ShutdownDeleteNodeResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ShutdownDeleteNodeResponse' })
export type ShutdownDeleteNodeResponse = z.infer<typeof ShutdownDeleteNodeResponse>
