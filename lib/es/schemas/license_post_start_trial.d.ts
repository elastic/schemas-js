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
 * Start a trial.
 *
 * Start a 30-day trial, which gives access to all subscription features.
 *
 * NOTE: You are allowed to start a trial only if your cluster has not already activated a trial for the current major product version.
 * For example, if you have already activated a trial for v8.0, you cannot start a new trial until v9.0. You can, however, request an extended trial at https://www.elastic.co/trialextension.
 *
 * To check the status of your trial, use the get trial status API.
 */
export declare const LicensePostStartTrialRequest: z.ZodObject<{
    acknowledge: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodString>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type LicensePostStartTrialRequest = z.infer<typeof LicensePostStartTrialRequest>;
export declare const LicensePostStartTrialResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    error_message: z.ZodOptional<z.ZodString>;
    trial_was_started: z.ZodBoolean;
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
}, z.core.$strip>;
export type LicensePostStartTrialResponse = z.infer<typeof LicensePostStartTrialResponse>;
//# sourceMappingURL=license_post_start_trial.d.ts.map