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
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export const ErrorCause = z.looseObject({
    type: z.string().describe('The type of error'),
    reason: z.union([z.string(), z.null()]).describe('A human-readable explanation of the error, in English.').optional(),
    stack_trace: z.string().describe('The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.').optional(),
    get caused_by() { return ErrorCause.optional(); },
    get root_cause() { return ErrorCause.array().optional(); },
    get suppressed() { return ErrorCause.array().optional(); }
}).meta({ id: 'ErrorCause' });
export const Id = z.string().meta({ id: 'Id' });
export const IndexName = z.string().meta({ id: 'IndexName' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Result = z.enum(['created', 'updated', 'deleted', 'not_found', 'noop']).meta({ id: 'Result' });
export const integer = z.number().meta({ id: 'integer' });
export const ShardFailure = z.object({
    index: IndexName.optional(),
    _index: IndexName.optional(),
    node: z.string().optional(),
    _node: z.string().optional(),
    reason: z.lazy(() => ErrorCause),
    shard: integer.optional(),
    _shard: integer.optional(),
    status: z.string().optional(),
    primary: z.boolean().optional()
}).meta({ id: 'ShardFailure' });
export const uint = z.number().meta({ id: 'uint' });
export const ShardStatistics = z.object({
    failed: uint.describe('The number of shards the operation or search attempted to run on but failed.'),
    successful: uint.describe('The number of shards the operation or search succeeded on.'),
    total: uint.describe('The number of shards the operation or search will run on overall.'),
    failures: z.array(ShardFailure).optional(),
    skipped: uint.optional()
}).meta({ id: 'ShardStatistics' });
export const IndicesReloadSearchAnalyzersReloadDetails = z.object({
    index: z.string(),
    reloaded_analyzers: z.array(z.string()),
    reloaded_node_ids: z.array(z.string())
}).meta({ id: 'IndicesReloadSearchAnalyzersReloadDetails' });
export const IndicesReloadSearchAnalyzersReloadResult = z.object({
    reload_details: z.array(IndicesReloadSearchAnalyzersReloadDetails),
    _shards: ShardStatistics
}).meta({ id: 'IndicesReloadSearchAnalyzersReloadResult' });
export const SynonymsSynonymString = z.string().meta({ id: 'SynonymsSynonymString' });
export const SynonymsSynonymRule = z.object({
    id: Id.describe('The identifier for the synonym rule. If you do not specify a synonym rule ID when you create a rule, an identifier is created automatically by Elasticsearch.').optional(),
    synonyms: SynonymsSynonymString.describe('The synonyms that conform the synonym rule in Solr format.')
}).meta({ id: 'SynonymsSynonymRule' });
/**
 * Create or update a synonym set.
 *
 * Synonym sets are limited to a maximum of 100,000 synonym rules per set by default.
 * This limit is configurable using the `synonyms.max_synonym_rules` cluster setting.
 *
 * When an existing synonyms set is updated, the search analyzers that use the synonyms set are reloaded automatically for all indices.
 * This is equivalent to invoking the reload search analyzers API for all indices that use the synonyms set.
 *
 * For practical examples of how to create or update a synonyms set, refer to the External documentation.
 */
export const SynonymsPutSynonymRequest = z.object({
    ...RequestBase.shape,
    id: Id.describe('The ID of the synonyms set to be created or updated.').meta({ found_in: 'path' }),
    append: z.boolean().describe('If `true`, the provided synonym rules are appended to the existing set, with matching IDs overwriting existing rules. If `false`, the entire synonyms set is replaced with the new synonym rules definitions.').optional().meta({ found_in: 'query' }),
    synonyms_set: z.union([SynonymsSynonymRule, z.array(SynonymsSynonymRule)]).describe('The synonym rules definitions for the synonyms set.').meta({ found_in: 'body' })
}).meta({ id: 'SynonymsPutSynonymRequest' });
export const SynonymsPutSynonymResponse = z.object({
    result: Result.describe('The update operation result.'),
    reload_analyzers_details: IndicesReloadSearchAnalyzersReloadResult.describe('Updating a synonyms set can reload the associated analyzers in case refresh is set to true. This information is the analyzers reloading result.').optional()
}).meta({ id: 'SynonymsPutSynonymResponse' });
//# sourceMappingURL=synonyms_put_synonym.js.map