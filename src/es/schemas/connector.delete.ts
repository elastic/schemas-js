/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a connector.
 *
 * Removes a connector and associated sync jobs.
 * This is a destructive action that is not recoverable.
 * NOTE: This action doesn’t delete any API keys, ingest pipelines, or data indices associated with the connector.
 * These need to be removed manually.
 */
export const ConnectorDeleteRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be deleted').meta({ found_in: 'path' }),
  delete_sync_jobs: z.boolean().describe('A flag indicating if associated sync jobs should be also removed.').optional().meta({ found_in: 'query' }),
  hard: z.boolean().describe('A flag indicating if the connector should be hard deleted.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ConnectorDeleteRequest' })
export type ConnectorDeleteRequest = z.infer<typeof ConnectorDeleteRequest>

export const ConnectorDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ConnectorDeleteResponse' })
export type ConnectorDeleteResponse = z.infer<typeof ConnectorDeleteResponse>
