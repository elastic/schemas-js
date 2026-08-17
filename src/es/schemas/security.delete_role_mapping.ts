/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Refresh } from './_types.js'

/**
 * Delete role mappings.
 *
 * Role mappings define which roles are assigned to each user.
 * The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files.
 * The delete role mappings API cannot remove role mappings that are defined in role mapping files.
 */
export const SecurityDeleteRoleMappingRequest = z.object({
  name: z.lazy(() => Name).describe('The distinct name that identifies the role mapping. The name is used solely as an identifier to facilitate interaction via the API; it does not affect the behavior of the mapping in any way.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteRoleMappingRequest' })
export type SecurityDeleteRoleMappingRequest = z.infer<typeof SecurityDeleteRoleMappingRequest>

export const SecurityDeleteRoleMappingResponse = z.object({
  found: z.boolean().describe('If the mapping is successfully deleted, `found` is `true`. Otherwise, `found` is `false`.')
}).meta({ id: 'SecurityDeleteRoleMappingResponse' })
export type SecurityDeleteRoleMappingResponse = z.infer<typeof SecurityDeleteRoleMappingResponse>
