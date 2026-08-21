/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, FieldValue, Sort, SortResults, float, integer } from './_types.js'
import { QueryDslBoolQuery, QueryDslExistsQuery, QueryDslIdsQuery, QueryDslMatchAllQuery, QueryDslMatchQuery, QueryDslPrefixQuery, QueryDslRangeQuery, QueryDslSimpleQueryStringQuery, QueryDslTermQuery, QueryDslTermsQuery, QueryDslWildcardQuery } from './_types.query_dsl.js'
import { SecurityRoleDescriptor } from './security.js'

export const SecurityQueryRoleQueryRole = z.object({
  ...SecurityRoleDescriptor.shape,
  _sort: z.lazy(() => SortResults).optional(),
  name: z.string().describe('Name of the role.')
}).meta({ id: 'SecurityQueryRoleQueryRole' })
export type SecurityQueryRoleQueryRole = z.infer<typeof SecurityQueryRoleQueryRole>

const SecurityQueryRoleRoleQueryContainerExclusiveProps = z.union([z.object({ bool: z.lazy(() => QueryDslBoolQuery) }), z.object({ exists: z.lazy(() => QueryDslExistsQuery) }), z.object({ ids: z.lazy(() => QueryDslIdsQuery) }), z.object({ match: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslMatchQuery), z.union([z.string(), z.lazy(() => float), z.boolean()])])) }), z.object({ match_all: z.lazy(() => QueryDslMatchAllQuery) }), z.object({ prefix: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslPrefixQuery), z.string()])) }), z.object({ range: z.record(z.lazy(() => Field), z.lazy(() => QueryDslRangeQuery)) }), z.object({ simple_query_string: z.lazy(() => QueryDslSimpleQueryStringQuery) }), z.object({ term: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslTermQuery), z.lazy(() => FieldValue)])) }), z.object({ terms: z.lazy(() => QueryDslTermsQuery) }), z.object({ wildcard: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslWildcardQuery), z.string()])) })])

export const SecurityQueryRoleRoleQueryContainer = SecurityQueryRoleRoleQueryContainerExclusiveProps.meta({ id: 'SecurityQueryRoleRoleQueryContainer' })
export type SecurityQueryRoleRoleQueryContainer = z.infer<typeof SecurityQueryRoleRoleQueryContainer>

/**
 * Find roles with a query.
 *
 * Get roles in a paginated manner.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The query roles API does not retrieve roles that are defined in roles files, nor built-in ones.
 * You can optionally filter the results with a query.
 * Also, the results can be paginated and sorted.
 */
export const SecurityQueryRoleRequest = z.object({
  query: SecurityQueryRoleRoleQueryContainer.describe('A query to filter which roles to return. If the query parameter is missing, it is equivalent to a `match_all` query. The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`, `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`. You can query the following information associated with roles: `name`, `description`, `metadata`, `applications.application`, `applications.privileges`, and `applications.resources`.').optional().meta({ found_in: 'body' }),
  from: z.lazy(() => integer).describe('The starting document offset. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Sort).describe('The sort definition. You can sort on `name`, `description`, `metadata`, `applications.application`, `applications.privileges`, and `applications.resources`. In addition, sort can also be applied to the `_doc` field to sort by index order.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('The number of hits to return. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  search_after: z.lazy(() => SortResults).describe('The search after definition.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityQueryRoleRequest' })
export type SecurityQueryRoleRequest = z.infer<typeof SecurityQueryRoleRequest>

export const SecurityQueryRoleResponse = z.object({
  total: z.lazy(() => integer).describe('The total number of roles found.'),
  count: z.lazy(() => integer).describe('The number of roles returned in the response.'),
  roles: z.array(SecurityQueryRoleQueryRole).describe('A list of roles that match the query. The returned role format is an extension of the role definition format. It adds the `transient_metadata.enabled` and the `_sort` fields. `transient_metadata.enabled` is set to `false` in case the role is automatically disabled, for example when the role grants privileges that are not allowed by the installed license. `_sort` is present when the search query sorts on some field. It contains the array of values that have been used for sorting.')
}).meta({ id: 'SecurityQueryRoleResponse' })
export type SecurityQueryRoleResponse = z.infer<typeof SecurityQueryRoleResponse>
