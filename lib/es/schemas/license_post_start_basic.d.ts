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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
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
/**
 * Start a basic license.
 *
 * Start an indefinite basic license, which gives access to all the basic features.
 *
 * NOTE: In order to start a basic license, you must not currently have a basic license.
 *
 * If the basic license does not support all of the features that are available with your current license, however, you are notified in the response.
 * You must then re-submit the API request with the `acknowledge` parameter set to `true`.
 *
 * To check the status of your basic license, use the get basic license API.
 */
export declare const LicensePostStartBasicRequest: z.ZodObject<{
    acknowledge: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type LicensePostStartBasicRequest = z.infer<typeof LicensePostStartBasicRequest>;
export declare const LicensePostStartBasicResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    basic_was_started: z.ZodBoolean;
    error_message: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        missing: "missing";
        standard: "standard";
        basic: "basic";
        trial: "trial";
        dev: "dev";
        silver: "silver";
        gold: "gold";
        platinum: "platinum";
        enterprise: "enterprise";
    }>>;
    acknowledge: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>>;
}, z.core.$strip>;
export type LicensePostStartBasicResponse = z.infer<typeof LicensePostStartBasicResponse>;
//# sourceMappingURL=license_post_start_basic.d.ts.map