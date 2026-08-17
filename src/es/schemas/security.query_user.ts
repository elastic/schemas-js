/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, FieldValue, Sort, SortResults, float, integer } from './_types.js'
import { QueryDslBoolQuery, QueryDslExistsQuery, QueryDslIdsQuery, QueryDslMatchAllQuery, QueryDslMatchQuery, QueryDslPrefixQuery, QueryDslRangeQuery, QueryDslSimpleQueryStringQuery, QueryDslTermQuery, QueryDslTermsQuery, QueryDslWildcardQuery } from './_types.query_dsl.js'
import { SecurityUser } from './security.js'

export const SecurityQueryUserQueryUser = z.object({
  ...SecurityUser.shape,
  _sort: z.lazy(() => SortResults).optional()
}).meta({ id: 'SecurityQueryUserQueryUser' })
export type SecurityQueryUserQueryUser = z.infer<typeof SecurityQueryUserQueryUser>

const SecurityQueryUserUserQueryContainerExclusiveProps = z.union([z.object({ ids: z.lazy(() => QueryDslIdsQuery) }), z.object({ bool: z.lazy(() => QueryDslBoolQuery) }), z.object({ exists: z.lazy(() => QueryDslExistsQuery) }), z.object({ match: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslMatchQuery), z.union([z.string(), z.lazy(() => float), z.boolean()])])) }), z.object({ match_all: z.lazy(() => QueryDslMatchAllQuery) }), z.object({ prefix: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslPrefixQuery), z.string()])) }), z.object({ range: z.record(z.lazy(() => Field), z.lazy(() => QueryDslRangeQuery)) }), z.object({ simple_query_string: z.lazy(() => QueryDslSimpleQueryStringQuery) }), z.object({ term: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslTermQuery), z.lazy(() => FieldValue)])) }), z.object({ terms: z.lazy(() => QueryDslTermsQuery) }), z.object({ wildcard: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslWildcardQuery), z.string()])) })])

export const SecurityQueryUserUserQueryContainer = SecurityQueryUserUserQueryContainerExclusiveProps.meta({ id: 'SecurityQueryUserUserQueryContainer' })
export type SecurityQueryUserUserQueryContainer = z.infer<typeof SecurityQueryUserUserQueryContainer>

/**
 * Find users with a query.
 *
 * Get information for users in a paginated manner.
 * You can optionally filter the results with a query.
 *
 * NOTE: As opposed to the get user API, built-in users are excluded from the result.
 * This API is only for native users.
 */
export const SecurityQueryUserRequest = z.object({
  with_profile_uid: z.boolean().describe('Determines whether to retrieve the user profile UID, if it exists, for the users.').optional().meta({ found_in: 'query' }),
  query: SecurityQueryUserUserQueryContainer.describe('A query to filter which users to return. If the query parameter is missing, it is equivalent to a `match_all` query. The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`, `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`. You can query the following information associated with user: `username`, `roles`, `enabled`, `full_name`, and `email`.').optional().meta({ found_in: 'body' }),
  from: z.lazy(() => integer).describe('The starting document offset. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Sort).describe('The sort definition. Fields eligible for sorting are: `username`, `roles`, `enabled`. In addition, sort can also be applied to the `_doc` field to sort by index order.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('The number of hits to return. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  search_after: z.lazy(() => SortResults).describe('The search after definition').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityQueryUserRequest' })
export type SecurityQueryUserRequest = z.infer<typeof SecurityQueryUserRequest>

export const SecurityQueryUserResponse = z.object({
  total: z.lazy(() => integer).describe('The total number of users found.'),
  count: z.lazy(() => integer).describe('The number of users returned in the response.'),
  users: z.array(SecurityQueryUserQueryUser).describe('A list of users that match the query.')
}).meta({ id: 'SecurityQueryUserResponse' })
export type SecurityQueryUserResponse = z.infer<typeof SecurityQueryUserResponse>
