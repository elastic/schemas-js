import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
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
export declare const LicenseLicense: z.ZodObject<{
    expiry_date_in_millis: z.ZodAny;
    issue_date_in_millis: z.ZodAny;
    start_date_in_millis: z.ZodOptional<z.ZodAny>;
    issued_to: z.ZodString;
    issuer: z.ZodString;
    max_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    max_resource_units: z.ZodOptional<z.ZodNumber>;
    signature: z.ZodString;
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
}, z.core.$strip>;
export type LicenseLicense = z.infer<typeof LicenseLicense>;
export declare const LicenseLicenseStatus: z.ZodEnum<{
    active: "active";
    invalid: "invalid";
    valid: "valid";
    expired: "expired";
}>;
export type LicenseLicenseStatus = z.infer<typeof LicenseLicenseStatus>;
export declare const LicensePostAcknowledgement: z.ZodObject<{
    license: z.ZodArray<z.ZodString>;
    message: z.ZodString;
}, z.core.$strip>;
export type LicensePostAcknowledgement = z.infer<typeof LicensePostAcknowledgement>;
/**
 * Update the license.
 *
 * You can update your license at runtime without shutting down your nodes.
 * License updates take effect immediately.
 * If the license you are installing does not support all of the features that were available with your previous license, however, you are notified in the response.
 * You must then re-submit the API request with the acknowledge parameter set to true.
 *
 * NOTE: If Elasticsearch security features are enabled and you are installing a gold or higher license, you must enable TLS on the transport networking layer before you install the license.
 * If the operator privileges feature is enabled, only operator users can use this API.
 */
export declare const LicensePostRequest: z.ZodObject<{
    acknowledge: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    license: z.ZodOptional<z.ZodObject<{
        expiry_date_in_millis: z.ZodAny;
        issue_date_in_millis: z.ZodAny;
        start_date_in_millis: z.ZodOptional<z.ZodAny>;
        issued_to: z.ZodString;
        issuer: z.ZodString;
        max_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        max_resource_units: z.ZodOptional<z.ZodNumber>;
        signature: z.ZodString;
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
    }, z.core.$strip>>;
    licenses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        expiry_date_in_millis: z.ZodAny;
        issue_date_in_millis: z.ZodAny;
        start_date_in_millis: z.ZodOptional<z.ZodAny>;
        issued_to: z.ZodString;
        issuer: z.ZodString;
        max_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        max_resource_units: z.ZodOptional<z.ZodNumber>;
        signature: z.ZodString;
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type LicensePostRequest = z.infer<typeof LicensePostRequest>;
export declare const LicensePostResponse: z.ZodObject<{
    acknowledge: z.ZodOptional<z.ZodObject<{
        license: z.ZodArray<z.ZodString>;
        message: z.ZodString;
    }, z.core.$strip>>;
    acknowledged: z.ZodBoolean;
    license_status: z.ZodEnum<{
        active: "active";
        invalid: "invalid";
        valid: "valid";
        expired: "expired";
    }>;
}, z.core.$strip>;
export type LicensePostResponse = z.infer<typeof LicensePostResponse>;
//# sourceMappingURL=license_post.d.ts.map