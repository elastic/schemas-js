/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'
import { IngestDatabaseConfiguration } from './ingest.js'

/** Create or update an IP geolocation database configuration. */
export const IngestPutIpLocationDatabaseRequest = z.object({
  id: z.lazy(() => Id).describe('The database configuration identifier.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. A value of `-1` indicates that the request should never time out.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response indicates that it was not completely acknowledged. A value of `-1` indicates that the request should never time out.').optional().meta({ found_in: 'query' }),
  configuration: IngestDatabaseConfiguration.optional().meta({ found_in: 'body' })
}).meta({ id: 'IngestPutIpLocationDatabaseRequest' })
export type IngestPutIpLocationDatabaseRequest = z.infer<typeof IngestPutIpLocationDatabaseRequest>

export const IngestPutIpLocationDatabaseResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IngestPutIpLocationDatabaseResponse' })
export type IngestPutIpLocationDatabaseResponse = z.infer<typeof IngestPutIpLocationDatabaseResponse>
