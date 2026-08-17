/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName } from './_types.js'

/**
 * Remove policies from an index.
 *
 * Remove the assigned lifecycle policies from an index or a data stream's backing indices.
 * It also stops managing the indices.
 */
export const IlmRemovePolicyRequest = z.object({
  index: z.lazy(() => IndexName).describe('The name of the index to remove policy on').meta({ found_in: 'path' })
}).meta({ id: 'IlmRemovePolicyRequest' })
export type IlmRemovePolicyRequest = z.infer<typeof IlmRemovePolicyRequest>

export const IlmRemovePolicyResponse = z.object({
  failed_indexes: z.array(z.lazy(() => IndexName)),
  has_failures: z.boolean()
}).meta({ id: 'IlmRemovePolicyResponse' })
export type IlmRemovePolicyResponse = z.infer<typeof IlmRemovePolicyResponse>
