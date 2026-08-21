/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsWithNullValue } from './_spec_utils.js'
import { Id, Result } from './_types.js'

/**
 * Update the connector index name.
 *
 * Update the `index_name` field of a connector, specifying the index where the data ingested by the connector is stored.
 */
export const ConnectorUpdateIndexNameRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  index_name: z.lazy(() => SpecUtilsWithNullValue).meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateIndexNameRequest' })
export type ConnectorUpdateIndexNameRequest = z.infer<typeof ConnectorUpdateIndexNameRequest>

export const ConnectorUpdateIndexNameResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateIndexNameResponse' })
export type ConnectorUpdateIndexNameResponse = z.infer<typeof ConnectorUpdateIndexNameResponse>
