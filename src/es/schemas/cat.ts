/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const CatCatRequestBase = z.object({
}).meta({ id: 'CatCatRequestBase' })
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>
