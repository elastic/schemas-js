/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, FieldValue, Sort, SortResults, Username, float, integer } from './_types.js'
import { QueryDslBoolQuery, QueryDslExistsQuery, QueryDslIdsQuery, QueryDslMatchAllQuery, QueryDslMatchQuery, QueryDslPrefixQuery, QueryDslRangeQuery, QueryDslSimpleQueryStringQuery, QueryDslTermQuery, QueryDslTermsQuery, QueryDslWildcardQuery } from './_types.query_dsl.js'
import { SecurityGetServiceAccountsUserManagedServiceAccount } from './security.get_service_accounts.js'

export const SecurityQueryServiceAccountsQueryServiceAccount = z.object({
  ...SecurityGetServiceAccountsUserManagedServiceAccount.shape,
  username: z.lazy(() => Username).describe('The name of the service account, as `namespace/service`.'),
  _sort: z.lazy(() => SortResults).describe('The sort values of the service account, returned when the request has a `sort`.').optional()
}).meta({ id: 'SecurityQueryServiceAccountsQueryServiceAccount' })
export type SecurityQueryServiceAccountsQueryServiceAccount = z.infer<typeof SecurityQueryServiceAccountsQueryServiceAccount>

const SecurityQueryServiceAccountsServiceAccountQueryContainerExclusiveProps = z.union([z.object({ bool: z.lazy(() => QueryDslBoolQuery) }), z.object({ exists: z.lazy(() => QueryDslExistsQuery) }), z.object({ ids: z.lazy(() => QueryDslIdsQuery) }), z.object({ match: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslMatchQuery), z.union([z.string(), z.lazy(() => float), z.boolean()])])) }), z.object({ match_all: z.lazy(() => QueryDslMatchAllQuery) }), z.object({ prefix: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslPrefixQuery), z.string()])) }), z.object({ range: z.record(z.lazy(() => Field), z.lazy(() => QueryDslRangeQuery)) }), z.object({ simple_query_string: z.lazy(() => QueryDslSimpleQueryStringQuery) }), z.object({ term: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslTermQuery), z.lazy(() => FieldValue)])) }), z.object({ terms: z.lazy(() => QueryDslTermsQuery) }), z.object({ wildcard: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslWildcardQuery), z.string()])) })])

export const SecurityQueryServiceAccountsServiceAccountQueryContainer = SecurityQueryServiceAccountsServiceAccountQueryContainerExclusiveProps.meta({ id: 'SecurityQueryServiceAccountsServiceAccountQueryContainer' })
export type SecurityQueryServiceAccountsServiceAccountQueryContainer = z.infer<typeof SecurityQueryServiceAccountsServiceAccountQueryContainer>

/**
 * Find user-managed service accounts with a query.
 *
 * Get a paginated list of user-managed service accounts and their information.
 * You can optionally filter the results with a query.
 *
 * NOTE: Built-in service accounts are not stored in the security index, so this API never returns them.
 * Use the get service accounts API to list them.
 */
export const SecurityQueryServiceAccountsRequest = z.object({
  with_profile_uid: z.boolean().describe('If `true`, each service account also includes the profile UIDs of the users who created and last replaced it, under the `created_by_profile_uid` and `updated_by_profile_uid` fields. A profile UID is included only for a user who has an activated user profile.').optional().meta({ found_in: 'query' }),
  query: SecurityQueryServiceAccountsServiceAccountQueryContainer.describe('A query to filter which service accounts to return. If the query parameter is missing, it is equivalent to a `match_all` query. The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`, `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`. You can query the following information associated with a service account: `username`, `roles`, `enabled`, `description`, `created_by.username`, `created_by.realm`, `created_by.realm_type`, `created_by.api_key.id`, `created_by.api_key.name`, `created_at`, `updated_by.username`, `updated_by.realm`, `updated_by.realm_type`, `updated_by.api_key.id`, `updated_by.api_key.name`, and `updated_at`. NOTE: The `username` of a service account is its `namespace/service` pair, so use a `prefix` query on `username` to select a namespace.').optional().meta({ found_in: 'body' }),
  from: z.lazy(() => integer).describe('The starting document offset. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Sort).describe('The sort definition. All the fields that you can query on, other than `description`, are eligible for sorting. In addition, sort can also be applied to the `_doc` field to sort by index order.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('The number of hits to return. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  search_after: z.lazy(() => SortResults).describe('The search after definition.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityQueryServiceAccountsRequest' })
export type SecurityQueryServiceAccountsRequest = z.infer<typeof SecurityQueryServiceAccountsRequest>

export const SecurityQueryServiceAccountsResponse = z.object({
  total: z.lazy(() => integer).describe('The total number of service accounts found.'),
  count: z.lazy(() => integer).describe('The number of service accounts returned in the response.'),
  service_accounts: z.array(SecurityQueryServiceAccountsQueryServiceAccount).describe('A list of service account information.')
}).meta({ id: 'SecurityQueryServiceAccountsResponse' })
export type SecurityQueryServiceAccountsResponse = z.infer<typeof SecurityQueryServiceAccountsResponse>
