import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SslCertificatesCertificateInformation: z.ZodObject<{
    alias: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    expiry: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    format: z.ZodString;
    has_private_key: z.ZodBoolean;
    issuer: z.ZodOptional<z.ZodString>;
    path: z.ZodString;
    serial_number: z.ZodString;
    subject_dn: z.ZodString;
}, z.core.$strip>;
export type SslCertificatesCertificateInformation = z.infer<typeof SslCertificatesCertificateInformation>;
/**
 * Get SSL certificates.
 *
 * Get information about the X.509 certificates that are used to encrypt communications in the cluster.
 * The API returns a list that includes certificates from all TLS contexts including:
 *
 * - Settings for transport and HTTP interfaces
 * - TLS settings that are used within authentication realms
 * - TLS settings for remote monitoring exporters
 *
 * The list includes certificates that are used for configuring trust, such as those configured in the `xpack.security.transport.ssl.truststore` and `xpack.security.transport.ssl.certificate_authorities` settings.
 * It also includes certificates that are used for configuring server identity, such as `xpack.security.http.ssl.keystore` and `xpack.security.http.ssl.certificate settings`.
 *
 * The list does not include certificates that are sourced from the default SSL context of the Java Runtime Environment (JRE), even if those certificates are in use within Elasticsearch.
 *
 * NOTE: When a PKCS#11 token is configured as the truststore of the JRE, the API returns all the certificates that are included in the PKCS#11 token irrespective of whether these are used in the Elasticsearch TLS configuration.
 *
 * If Elasticsearch is configured to use a keystore or truststore, the API output includes all certificates in that store, even though some of the certificates might not be in active use within the cluster.
 */
export declare const SslCertificatesRequest: z.ZodObject<{}, z.core.$strip>;
export type SslCertificatesRequest = z.infer<typeof SslCertificatesRequest>;
export declare const SslCertificatesResponse: z.ZodArray<z.ZodObject<{
    alias: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    expiry: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    format: z.ZodString;
    has_private_key: z.ZodBoolean;
    issuer: z.ZodOptional<z.ZodString>;
    path: z.ZodString;
    serial_number: z.ZodString;
    subject_dn: z.ZodString;
}, z.core.$strip>>;
export type SslCertificatesResponse = z.infer<typeof SslCertificatesResponse>;
//# sourceMappingURL=ssl_certificates.d.ts.map