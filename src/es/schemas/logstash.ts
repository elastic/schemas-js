/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, integer } from './_types.js'

export const LogstashPipelineMetadata = z.object({
  type: z.string(),
  version: z.string()
}).meta({ id: 'LogstashPipelineMetadata' })
export type LogstashPipelineMetadata = z.infer<typeof LogstashPipelineMetadata>

export const LogstashPipelineSettings = z.object({
  'pipeline.workers': z.lazy(() => integer).describe('The number of workers that will, in parallel, execute the filter and output stages of the pipeline.'),
  'pipeline.batch.size': z.lazy(() => integer).describe('The maximum number of events an individual worker thread will collect from inputs before attempting to execute its filters and outputs.'),
  'pipeline.batch.delay': z.lazy(() => integer).describe('When creating pipeline event batches, how long in milliseconds to wait for each event before dispatching an undersized batch to pipeline workers.'),
  'queue.type': z.string().describe('The internal queuing model to use for event buffering.'),
  'queue.max_bytes': z.string().describe('The total capacity of the queue (`queue.type: persisted`) in number of bytes.'),
  'queue.checkpoint.writes': z.lazy(() => integer).describe('The maximum number of written events before forcing a checkpoint when persistent queues are enabled (`queue.type: persisted`).')
}).meta({ id: 'LogstashPipelineSettings' })
export type LogstashPipelineSettings = z.infer<typeof LogstashPipelineSettings>

export const LogstashPipeline = z.object({
  description: z.string().describe('A description of the pipeline. This description is not used by Elasticsearch or Logstash.'),
  last_modified: z.lazy(() => DateTime).describe('The date the pipeline was last updated. It must be in the `yyyy-MM-dd\'T\'HH:mm:ss.SSSZZ` strict_date_time format.'),
  pipeline: z.string().describe('The configuration for the pipeline.'),
  pipeline_metadata: LogstashPipelineMetadata.describe('Optional metadata about the pipeline, which can have any contents. This metadata is not generated or used by Elasticsearch or Logstash.'),
  pipeline_settings: LogstashPipelineSettings.describe('Settings for the pipeline. It supports only flat keys in dot notation.'),
  username: z.string().describe('The user who last updated the pipeline.')
}).meta({ id: 'LogstashPipeline' })
export type LogstashPipeline = z.infer<typeof LogstashPipeline>
