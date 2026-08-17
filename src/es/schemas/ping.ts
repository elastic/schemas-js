/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * Ping the cluster.
 *
 * Get information about whether the cluster is running.
 */
export const PingRequest = z.object({
}).meta({ id: 'PingRequest' })
export type PingRequest = z.infer<typeof PingRequest>

export const PingResponse = z.boolean().meta({ id: 'PingResponse' })
export type PingResponse = z.infer<typeof PingResponse>
