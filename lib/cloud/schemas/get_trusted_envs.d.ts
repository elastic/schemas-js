import { z } from 'zod';
export declare const CertificateMetaData: z.ZodObject<{
    fingerprint: z.ZodString;
    valid_to: z.ZodString;
    valid_from: z.ZodString;
    also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CertificateMetaData = z.infer<typeof CertificateMetaData>;
export declare const ExternalTrustRelationship: z.ZodObject<{
    trust_relationship_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    trust_all: z.ZodBoolean;
    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ExternalTrustRelationship = z.infer<typeof ExternalTrustRelationship>;
export declare const AccountTrustRelationship: z.ZodObject<{
    account_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    trust_all: z.ZodBoolean;
    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type AccountTrustRelationship = z.infer<typeof AccountTrustRelationship>;
export declare const TrustedCertificate: z.ZodObject<{
    pem: z.ZodString;
    metadata: z.ZodOptional<z.ZodObject<{
        fingerprint: z.ZodString;
        valid_to: z.ZodString;
        valid_from: z.ZodString;
        also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TrustedCertificate = z.infer<typeof TrustedCertificate>;
export declare const DirectTrustRelationship: z.ZodObject<{
    uid: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<{
        generic: "generic";
        proxy: "proxy";
        ECE: "ECE";
        ESS: "ESS";
    }>>;
    trust_all: z.ZodBoolean;
    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    scope_id: z.ZodOptional<z.ZodString>;
    additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
    certificates: z.ZodArray<z.ZodObject<{
        pem: z.ZodString;
        metadata: z.ZodOptional<z.ZodObject<{
            fingerprint: z.ZodString;
            valid_to: z.ZodString;
            valid_from: z.ZodString;
            also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DirectTrustRelationship = z.infer<typeof DirectTrustRelationship>;
export declare const ElasticsearchClusterTrustSettings: z.ZodObject<{
    accounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        trust_all: z.ZodBoolean;
        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    external: z.ZodOptional<z.ZodArray<z.ZodObject<{
        trust_relationship_id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        trust_all: z.ZodBoolean;
        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    direct: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            generic: "generic";
            proxy: "proxy";
            ECE: "ECE";
            ESS: "ESS";
        }>>;
        trust_all: z.ZodBoolean;
        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
        scope_id: z.ZodOptional<z.ZodString>;
        additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
        certificates: z.ZodArray<z.ZodObject<{
            pem: z.ZodString;
            metadata: z.ZodOptional<z.ZodObject<{
                fingerprint: z.ZodString;
                valid_to: z.ZodString;
                valid_from: z.ZodString;
                also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ElasticsearchClusterTrustSettings = z.infer<typeof ElasticsearchClusterTrustSettings>;
//# sourceMappingURL=get_trusted_envs.d.ts.map