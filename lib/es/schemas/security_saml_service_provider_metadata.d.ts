import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Create SAML service provider metadata.
 *
 * Generate SAML metadata for a SAML 2.0 Service Provider.
 *
 * The SAML 2.0 specification provides a mechanism for Service Providers to describe their capabilities and configuration using a metadata file.
 * This API generates Service Provider metadata based on the configuration of a SAML realm in Elasticsearch.
 */
export declare const SecuritySamlServiceProviderMetadataRequest: z.ZodObject<{
    realm_name: z.ZodString;
}, z.core.$strip>;
export type SecuritySamlServiceProviderMetadataRequest = z.infer<typeof SecuritySamlServiceProviderMetadataRequest>;
export declare const SecuritySamlServiceProviderMetadataResponse: z.ZodObject<{
    metadata: z.ZodString;
}, z.core.$strip>;
export type SecuritySamlServiceProviderMetadataResponse = z.infer<typeof SecuritySamlServiceProviderMetadataResponse>;
//# sourceMappingURL=security_saml_service_provider_metadata.d.ts.map