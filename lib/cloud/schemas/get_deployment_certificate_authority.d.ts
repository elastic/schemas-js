import { z } from 'zod';
export declare const CertificateMetaData: z.ZodObject<{
    fingerprint: z.ZodString;
    valid_to: z.ZodString;
    valid_from: z.ZodString;
    also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CertificateMetaData = z.infer<typeof CertificateMetaData>;
export declare const PublicCertificate: z.ZodObject<{
    active: z.ZodBoolean;
    pem: z.ZodString;
    metadata: z.ZodObject<{
        fingerprint: z.ZodString;
        valid_to: z.ZodString;
        valid_from: z.ZodString;
        also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PublicCertificate = z.infer<typeof PublicCertificate>;
export declare const CertificateAuthority: z.ZodObject<{
    recommended_trust_restriction: z.ZodString;
    public_certificates: z.ZodArray<z.ZodObject<{
        active: z.ZodBoolean;
        pem: z.ZodString;
        metadata: z.ZodObject<{
            fingerprint: z.ZodString;
            valid_to: z.ZodString;
            valid_from: z.ZodString;
            also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CertificateAuthority = z.infer<typeof CertificateAuthority>;
//# sourceMappingURL=get_deployment_certificate_authority.d.ts.map