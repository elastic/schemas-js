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
export const ExpandWildcard = z.enum(['all', 'open', 'closed', 'hidden', 'none']).meta({ id: 'ExpandWildcard' });
export const ExpandWildcards = z.union([ExpandWildcard, z.array(ExpandWildcard)]).meta({ id: 'ExpandWildcards' });
export const IndexName = z.string().meta({ id: 'IndexName' });
export const Name = z.string().meta({ id: 'Name' });
export const Names = z.union([Name, z.array(Name)]).meta({ id: 'Names' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const CatCatAliasesColumn = z.union([z.enum(['alias', 'a', 'index', 'i', 'idx', 'filter', 'f', 'fi', 'routing.index', 'ri', 'routingIndex', 'routing.search', 'rs', 'routingSearch', 'is_write_index', 'w', 'isWriteIndex']), z.string()]).meta({ id: 'CatCatAliasesColumn' });
export const CatCatAliasesColumns = z.union([CatCatAliasesColumn, z.array(CatCatAliasesColumn)]).meta({ id: 'CatCatAliasesColumns' });
export const CatCatRequestBase = z.object({
    ...RequestBase.shape
}).meta({ id: 'CatCatRequestBase' });
export const CatAliasesAliasesRecord = z.object({
    alias: z.string().describe('alias name').optional(),
    a: z.string().describe('alias name').optional(),
    index: IndexName.describe('index alias points to').optional(),
    i: IndexName.describe('index alias points to').optional(),
    idx: IndexName.describe('index alias points to').optional(),
    filter: z.string().describe('filter').optional(),
    f: z.string().describe('filter').optional(),
    fi: z.string().describe('filter').optional(),
    'routing.index': z.string().describe('index routing').optional(),
    ri: z.string().describe('index routing').optional(),
    routingIndex: z.string().describe('index routing').optional(),
    'routing.search': z.string().describe('search routing').optional(),
    rs: z.string().describe('search routing').optional(),
    routingSearch: z.string().describe('search routing').optional(),
    is_write_index: z.string().describe('write index').optional(),
    w: z.string().describe('write index').optional(),
    isWriteIndex: z.string().describe('write index').optional()
}).meta({ id: 'CatAliasesAliasesRecord' });
/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 */
export const CatAliasesRequest = z.object({
    ...CatCatRequestBase.shape,
    name: Names.describe('A comma-separated list of aliases to retrieve. Supports wildcards (`*`).  To retrieve all aliases, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
    h: CatCatAliasesColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
    s: Names.describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
    expand_wildcards: ExpandWildcards.describe('The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
    master_timeout: Duration.describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicated that the request should never timeout, you can set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatAliasesRequest' });
export const CatAliasesResponse = z.array(CatAliasesAliasesRecord).meta({ id: 'CatAliasesResponse' });
//# sourceMappingURL=cat_aliases.js.map