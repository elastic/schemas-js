import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** Get the trial status. */
export declare const LicenseGetTrialStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type LicenseGetTrialStatusRequest = z.infer<typeof LicenseGetTrialStatusRequest>;
export declare const LicenseGetTrialStatusResponse: z.ZodObject<{
    eligible_to_start_trial: z.ZodBoolean;
}, z.core.$strip>;
export type LicenseGetTrialStatusResponse = z.infer<typeof LicenseGetTrialStatusResponse>;
//# sourceMappingURL=license_get_trial_status.d.ts.map