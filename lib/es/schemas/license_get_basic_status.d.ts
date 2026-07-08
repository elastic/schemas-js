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
/** Get the basic license status. */
export declare const LicenseGetBasicStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type LicenseGetBasicStatusRequest = z.infer<typeof LicenseGetBasicStatusRequest>;
export declare const LicenseGetBasicStatusResponse: z.ZodObject<{
    eligible_to_start_basic: z.ZodBoolean;
}, z.core.$strip>;
export type LicenseGetBasicStatusResponse = z.infer<typeof LicenseGetBasicStatusResponse>;
//# sourceMappingURL=license_get_basic_status.d.ts.map