/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Delete a Logstash pipeline.
 *
 * Delete a pipeline that is used for Logstash Central Management.
 * If the request succeeds, you receive an empty response with an appropriate status code.
 */
export const LogstashDeletePipelineRequest = z.object({
  id: z.lazy(() => Id).describe('An identifier for the pipeline.').meta({ found_in: 'path' })
}).meta({ id: 'LogstashDeletePipelineRequest' })
export type LogstashDeletePipelineRequest = z.infer<typeof LogstashDeletePipelineRequest>

export const LogstashDeletePipelineResponse = z.boolean().meta({ id: 'LogstashDeletePipelineResponse' })
export type LogstashDeletePipelineResponse = z.infer<typeof LogstashDeletePipelineResponse>
