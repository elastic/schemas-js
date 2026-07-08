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
/** Retrieves a secret stored by Fleet. */
export declare const FleetGetSecretRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type FleetGetSecretRequest = z.infer<typeof FleetGetSecretRequest>;
export declare const FleetGetSecretResponse: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type FleetGetSecretResponse = z.infer<typeof FleetGetSecretResponse>;
//# sourceMappingURL=fleet_get_secret.d.ts.map