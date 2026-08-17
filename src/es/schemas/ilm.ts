/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Metadata } from './_types.js'
import { IlmPhase } from './ilm.explain_lifecycle.js'

export const IlmPhases = z.object({
  cold: IlmPhase.optional(),
  delete: IlmPhase.optional(),
  frozen: IlmPhase.optional(),
  hot: IlmPhase.optional(),
  warm: IlmPhase.optional()
}).meta({ id: 'IlmPhases' })
export type IlmPhases = z.infer<typeof IlmPhases>

export const IlmPolicy = z.object({
  phases: IlmPhases,
  _meta: z.lazy(() => Metadata).describe('Arbitrary metadata that is not automatically generated or used by Elasticsearch.').optional()
}).meta({ id: 'IlmPolicy' })
export type IlmPolicy = z.infer<typeof IlmPolicy>
