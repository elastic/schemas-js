/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const float = z.number().meta({ id: 'float' });
export const integer = z.number().meta({ id: 'integer' });
/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export const InferenceRankedDocument = z.object({
    index: integer,
    relevance_score: float,
    text: z.string().optional()
}).meta({ id: 'InferenceRankedDocument' });
/** Defines the response for a rerank request. */
export const InferenceRerankedInferenceResult = z.object({
    rerank: z.array(InferenceRankedDocument)
}).meta({ id: 'InferenceRerankedInferenceResult' });
export const InferenceTaskSettings = z.any().meta({ id: 'InferenceTaskSettings' });
/** Perform reranking inference on the service. */
export const InferenceRerankRequest = z.object({
    ...RequestBase.shape,
    inference_id: Id.describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
    timeout: Duration.describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
    query: z.string().describe('Query input.').meta({ found_in: 'body' }),
    input: z.array(z.string()).describe('The documents to rank.').meta({ found_in: 'body' }),
    return_documents: z.boolean().describe('Include the document text in the response.').optional().meta({ found_in: 'body' }),
    top_n: integer.describe('Limit the response to the top N documents.').optional().meta({ found_in: 'body' }),
    task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceRerankRequest' });
export const InferenceRerankResponse = InferenceRerankedInferenceResult.meta({ id: 'InferenceRerankResponse' });
//# sourceMappingURL=inference_rerank.js.map