/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * Get CAT help.
 *
 * Get help for the CAT APIs.
 */
export const CatHelpRequest = z.object({
}).meta({ id: 'CatHelpRequest' })
export type CatHelpRequest = z.infer<typeof CatHelpRequest>

export const CatHelpResponse = z.object({
}).meta({ id: 'CatHelpResponse' })
export type CatHelpResponse = z.infer<typeof CatHelpResponse>
