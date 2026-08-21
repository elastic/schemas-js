/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { long } from './_types.js'

export const FleetCheckpoint = z.lazy(() => long).meta({ id: 'FleetCheckpoint' })
export type FleetCheckpoint = z.infer<typeof FleetCheckpoint>
