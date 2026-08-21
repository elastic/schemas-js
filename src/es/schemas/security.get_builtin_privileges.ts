/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName } from './_types.js'
import { SecurityClusterPrivilege } from './security.js'

/**
 * Get builtin privileges.
 *
 * Get the list of cluster privileges and index privileges that are available in this version of Elasticsearch.
 */
export const SecurityGetBuiltinPrivilegesRequest = z.object({
}).meta({ id: 'SecurityGetBuiltinPrivilegesRequest' })
export type SecurityGetBuiltinPrivilegesRequest = z.infer<typeof SecurityGetBuiltinPrivilegesRequest>

export const SecurityGetBuiltinPrivilegesResponse = z.object({
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)).describe('The list of cluster privileges that are understood by this version of Elasticsearch.'),
  index: z.array(z.lazy(() => IndexName)).describe('The list of index privileges that are understood by this version of Elasticsearch.')
}).meta({ id: 'SecurityGetBuiltinPrivilegesResponse' })
export type SecurityGetBuiltinPrivilegesResponse = z.infer<typeof SecurityGetBuiltinPrivilegesResponse>
