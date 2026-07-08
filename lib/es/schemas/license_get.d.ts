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
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const LicenseLicenseStatus: z.ZodEnum<{
    active: "active";
    invalid: "invalid";
    valid: "valid";
    expired: "expired";
}>;
export type LicenseLicenseStatus = z.infer<typeof LicenseLicenseStatus>;
export declare const LicenseLicenseType: z.ZodEnum<{
    missing: "missing";
    standard: "standard";
    basic: "basic";
    trial: "trial";
    dev: "dev";
    silver: "silver";
    gold: "gold";
    platinum: "platinum";
    enterprise: "enterprise";
}>;
export type LicenseLicenseType = z.infer<typeof LicenseLicenseType>;
export declare const LicenseGetLicenseInformation: z.ZodObject<{
    expiry_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    expiry_date_in_millis: z.ZodOptional<z.ZodAny>;
    issue_date: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    issue_date_in_millis: z.ZodAny;
    issued_to: z.ZodString;
    issuer: z.ZodString;
    max_nodes: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max_resource_units: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    status: z.ZodEnum<{
        active: "active";
        invalid: "invalid";
        valid: "valid";
        expired: "expired";
    }>;
    type: z.ZodEnum<{
        missing: "missing";
        standard: "standard";
        basic: "basic";
        trial: "trial";
        dev: "dev";
        silver: "silver";
        gold: "gold";
        platinum: "platinum";
        enterprise: "enterprise";
    }>;
    uid: z.ZodString;
    start_date_in_millis: z.ZodAny;
}, z.core.$strip>;
export type LicenseGetLicenseInformation = z.infer<typeof LicenseGetLicenseInformation>;
/**
 * Get license information.
 *
 * Get information about your Elastic license including its type, its status, when it was issued, and when it expires.
 *
 * >info
 * > If the master node is generating a new cluster state, the get license API may return a `404 Not Found` response.
 * > If you receive an unexpected 404 response after cluster startup, wait a short period and retry the request.
 */
export declare const LicenseGetRequest: z.ZodObject<{
    accept_enterprise: z.ZodOptional<z.ZodBoolean>;
    local: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type LicenseGetRequest = z.infer<typeof LicenseGetRequest>;
export declare const LicenseGetResponse: z.ZodObject<{
    license: z.ZodObject<{
        expiry_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        expiry_date_in_millis: z.ZodOptional<z.ZodAny>;
        issue_date: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        issue_date_in_millis: z.ZodAny;
        issued_to: z.ZodString;
        issuer: z.ZodString;
        max_nodes: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        max_resource_units: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        status: z.ZodEnum<{
            active: "active";
            invalid: "invalid";
            valid: "valid";
            expired: "expired";
        }>;
        type: z.ZodEnum<{
            missing: "missing";
            standard: "standard";
            basic: "basic";
            trial: "trial";
            dev: "dev";
            silver: "silver";
            gold: "gold";
            platinum: "platinum";
            enterprise: "enterprise";
        }>;
        uid: z.ZodString;
        start_date_in_millis: z.ZodAny;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LicenseGetResponse = z.infer<typeof LicenseGetResponse>;
//# sourceMappingURL=license_get.d.ts.map