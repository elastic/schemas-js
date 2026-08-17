/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Ids } from './_types.js'
import { LogstashPipeline } from './logstash.js'

/**
 * Get Logstash pipelines.
 *
 * Get pipelines that are used for Logstash Central Management.
 */
export const LogstashGetPipelineRequest = z.object({
  id: z.lazy(() => Ids).describe('A comma-separated list of pipeline identifiers.').optional().meta({ found_in: 'path' })
}).meta({ id: 'LogstashGetPipelineRequest' })
export type LogstashGetPipelineRequest = z.infer<typeof LogstashGetPipelineRequest>

export const LogstashGetPipelineResponse = z.record(z.lazy(() => Id), LogstashPipeline).meta({ id: 'LogstashGetPipelineResponse' })
export type LogstashGetPipelineResponse = z.infer<typeof LogstashGetPipelineResponse>
