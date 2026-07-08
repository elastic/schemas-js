import { z } from 'zod';
export declare const SamlIdp: z.ZodObject<{
    public_certificate: z.ZodArray<z.ZodString>;
    issuer: z.ZodString;
    sso_url: z.ZodString;
}, z.core.$strip>;
export type SamlIdp = z.infer<typeof SamlIdp>;
export declare const OrganizationIdpConfiguration: z.ZodObject<{
    enabled: z.ZodBoolean;
    login_identifier_prefix: z.ZodString;
    saml_idp: z.ZodObject<{
        public_certificate: z.ZodArray<z.ZodString>;
        issuer: z.ZodString;
        sso_url: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type OrganizationIdpConfiguration = z.infer<typeof OrganizationIdpConfiguration>;
export declare const IdpConfigurationRequest: z.ZodObject<{
    enabled: z.ZodBoolean;
    login_identifier_prefix: z.ZodString;
    saml_idp: z.ZodObject<{
        public_certificate: z.ZodArray<z.ZodString>;
        issuer: z.ZodString;
        sso_url: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IdpConfigurationRequest = z.infer<typeof IdpConfigurationRequest>;
export declare const OrganizationIdp: z.ZodObject<{
    login_identifier: z.ZodString;
    sso_login_url: z.ZodString;
    metadata_url: z.ZodString;
    acs: z.ZodString;
    sp_entity_id: z.ZodString;
    signing_certificate: z.ZodArray<z.ZodString>;
    configuration: z.ZodObject<{
        enabled: z.ZodBoolean;
        login_identifier_prefix: z.ZodString;
        saml_idp: z.ZodObject<{
            public_certificate: z.ZodArray<z.ZodString>;
            issuer: z.ZodString;
            sso_url: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type OrganizationIdp = z.infer<typeof OrganizationIdp>;
//# sourceMappingURL=setup_organization_idp.d.ts.map