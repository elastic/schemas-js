/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { LifecycleOperationMode } from './_types.js'

/**
 * Get the ILM status.
 *
 * Get the current index lifecycle management status.
 */
export const IlmGetStatusRequest = z.object({
}).meta({ id: 'IlmGetStatusRequest' })
export type IlmGetStatusRequest = z.infer<typeof IlmGetStatusRequest>

export const IlmGetStatusResponse = z.object({
  operation_mode: LifecycleOperationMode
}).meta({ id: 'IlmGetStatusResponse' })
export type IlmGetStatusResponse = z.infer<typeof IlmGetStatusResponse>
