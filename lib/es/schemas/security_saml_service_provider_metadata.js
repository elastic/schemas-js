/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Create SAML service provider metadata.
 *
 * Generate SAML metadata for a SAML 2.0 Service Provider.
 *
 * The SAML 2.0 specification provides a mechanism for Service Providers to describe their capabilities and configuration using a metadata file.
 * This API generates Service Provider metadata based on the configuration of a SAML realm in Elasticsearch.
 */
export const SecuritySamlServiceProviderMetadataRequest = z.object({
    ...RequestBase.shape,
    realm_name: Name.describe('The name of the SAML realm in Elasticsearch.').meta({ found_in: 'path' })
}).meta({ id: 'SecuritySamlServiceProviderMetadataRequest' });
export const SecuritySamlServiceProviderMetadataResponse = z.object({
    metadata: z.string().describe('An XML string that contains a SAML Service Provider\'s metadata for the realm.')
}).meta({ id: 'SecuritySamlServiceProviderMetadataResponse' });
//# sourceMappingURL=security_saml_service_provider_metadata.js.map