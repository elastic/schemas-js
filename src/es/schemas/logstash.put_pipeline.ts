/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { LogstashPipeline } from './logstash.js'

/**
 * Create or update a Logstash pipeline.
 *
 * Create a pipeline that is used for Logstash Central Management.
 * If the specified pipeline exists, it is replaced.
 */
export const LogstashPutPipelineRequest = z.object({
  id: z.lazy(() => Id).describe('An identifier for the pipeline. Pipeline IDs must begin with a letter or underscore and contain only letters, underscores, dashes, hyphens and numbers.').meta({ found_in: 'path' }),
  pipeline: LogstashPipeline.optional().meta({ found_in: 'body' })
}).meta({ id: 'LogstashPutPipelineRequest' })
export type LogstashPutPipelineRequest = z.infer<typeof LogstashPutPipelineRequest>

export const LogstashPutPipelineResponse = z.boolean().meta({ id: 'LogstashPutPipelineResponse' })
export type LogstashPutPipelineResponse = z.infer<typeof LogstashPutPipelineResponse>
