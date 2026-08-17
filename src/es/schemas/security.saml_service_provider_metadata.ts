/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'

/**
 * Create SAML service provider metadata.
 *
 * Generate SAML metadata for a SAML 2.0 Service Provider.
 *
 * The SAML 2.0 specification provides a mechanism for Service Providers to describe their capabilities and configuration using a metadata file.
 * This API generates Service Provider metadata based on the configuration of a SAML realm in Elasticsearch.
 */
export const SecuritySamlServiceProviderMetadataRequest = z.object({
  realm_name: z.lazy(() => Name).describe('The name of the SAML realm in Elasticsearch.').meta({ found_in: 'path' })
}).meta({ id: 'SecuritySamlServiceProviderMetadataRequest' })
export type SecuritySamlServiceProviderMetadataRequest = z.infer<typeof SecuritySamlServiceProviderMetadataRequest>

export const SecuritySamlServiceProviderMetadataResponse = z.object({
  metadata: z.string().describe('An XML string that contains a SAML Service Provider\'s metadata for the realm.')
}).meta({ id: 'SecuritySamlServiceProviderMetadataResponse' })
export type SecuritySamlServiceProviderMetadataResponse = z.infer<typeof SecuritySamlServiceProviderMetadataResponse>
