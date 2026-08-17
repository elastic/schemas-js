/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * Run a grok processor.
 *
 * Extract structured fields out of a single text field within a document.
 * You must choose which field to extract matched fields from, as well as the grok pattern you expect will match.
 * A grok pattern is like a regular expression that supports aliased expressions that can be reused.
 */
export const IngestProcessorGrokRequest = z.object({
}).meta({ id: 'IngestProcessorGrokRequest' })
export type IngestProcessorGrokRequest = z.infer<typeof IngestProcessorGrokRequest>

export const IngestProcessorGrokResponse = z.object({
  patterns: z.record(z.string(), z.string())
}).meta({ id: 'IngestProcessorGrokResponse' })
export type IngestProcessorGrokResponse = z.infer<typeof IngestProcessorGrokResponse>
