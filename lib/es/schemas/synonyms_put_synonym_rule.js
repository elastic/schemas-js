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
export const SynonymsSynonymsUpdateResult = z.object({
    result: Result.describe('The update operation result.'),
    reload_analyzers_details: IndicesReloadSearchAnalyzersReloadResult.describe('Updating synonyms in a synonym set can reload the associated analyzers in case refresh is set to true. This information is the analyzers reloading result.').optional()
}).meta({ id: 'SynonymsSynonymsUpdateResult' });
/**
 * Create or update a synonym rule.
 *
 * Create or update a synonym rule in a synonym set.
 *
 * If any of the synonym rules included is invalid, the API returns an error.
 *
 * When you update a synonym rule, all analyzers using the synonyms set will be reloaded automatically to reflect the new rule.
 */
export const SynonymsPutSynonymRuleRequest = z.object({
    ...RequestBase.shape,
    set_id: Id.describe('The ID of the synonym set.').meta({ found_in: 'path' }),
    rule_id: Id.describe('The ID of the synonym rule to be updated or created.').meta({ found_in: 'path' }),
    synonyms: SynonymsSynonymString.describe('The synonym rule information definition, which must be in Solr format.').meta({ found_in: 'body' })
}).meta({ id: 'SynonymsPutSynonymRuleRequest' });
export const SynonymsPutSynonymRuleResponse = SynonymsSynonymsUpdateResult.meta({ id: 'SynonymsPutSynonymRuleResponse' });
//# sourceMappingURL=synonyms_put_synonym_rule.js.map