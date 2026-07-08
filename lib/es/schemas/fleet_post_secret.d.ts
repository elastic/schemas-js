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
/** Creates a secret stored by Fleet. */
export declare const FleetPostSecretRequest: z.ZodObject<{
    value: z.ZodString;
}, z.core.$strip>;
export type FleetPostSecretRequest = z.infer<typeof FleetPostSecretRequest>;
export declare const FleetPostSecretResponse: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type FleetPostSecretResponse = z.infer<typeof FleetPostSecretResponse>;
//# sourceMappingURL=fleet_post_secret.d.ts.map