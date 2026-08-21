/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const StreamsStreamType = z.enum(['logs', 'logs.otel', 'logs.ecs']).meta({ id: 'StreamsStreamType' })
export type StreamsStreamType = z.infer<typeof StreamsStreamType>
