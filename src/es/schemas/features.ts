/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const FeaturesFeature = z.object({
  name: z.string(),
  description: z.string()
}).meta({ id: 'FeaturesFeature' })
export type FeaturesFeature = z.infer<typeof FeaturesFeature>
