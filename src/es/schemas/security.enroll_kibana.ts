/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * Enroll Kibana.
 *
 * Enable a Kibana instance to configure itself for communication with a secured Elasticsearch cluster.
 *
 * NOTE: This API is currently intended for internal use only by Kibana.
 * Kibana uses this API internally to configure itself for communications with an Elasticsearch cluster that already has security features enabled.
 */
export const SecurityEnrollKibanaRequest = z.object({
}).meta({ id: 'SecurityEnrollKibanaRequest' })
export type SecurityEnrollKibanaRequest = z.infer<typeof SecurityEnrollKibanaRequest>

export const SecurityEnrollKibanaToken = z.object({
  name: z.string().describe('The name of the bearer token for the `elastic/kibana` service account.'),
  value: z.string().describe('The value of the bearer token for the `elastic/kibana` service account. Use this value to authenticate the service account with Elasticsearch.')
}).meta({ id: 'SecurityEnrollKibanaToken' })
export type SecurityEnrollKibanaToken = z.infer<typeof SecurityEnrollKibanaToken>

export const SecurityEnrollKibanaResponse = z.object({
  token: SecurityEnrollKibanaToken,
  http_ca: z.string().describe('The CA certificate used to sign the node certificates that Elasticsearch uses for TLS on the HTTP layer. The certificate is returned as a Base64 encoded string of the ASN.1 DER encoding of the certificate.')
}).meta({ id: 'SecurityEnrollKibanaResponse' })
export type SecurityEnrollKibanaResponse = z.infer<typeof SecurityEnrollKibanaResponse>
