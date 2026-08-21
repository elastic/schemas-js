/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsWithNullValue } from './_spec_utils.js'
import { Id, Result } from './_types.js'

/**
 * Update the connector error field.
 *
 * Set the error field for the connector.
 * If the error provided in the request body is non-null, the connector’s status is updated to error.
 * Otherwise, if the error is reset to null, the connector status is updated to connected.
 */
export const ConnectorUpdateErrorRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  error: z.lazy(() => SpecUtilsWithNullValue).meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateErrorRequest' })
export type ConnectorUpdateErrorRequest = z.infer<typeof ConnectorUpdateErrorRequest>

export const ConnectorUpdateErrorResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateErrorResponse' })
export type ConnectorUpdateErrorResponse = z.infer<typeof ConnectorUpdateErrorResponse>
