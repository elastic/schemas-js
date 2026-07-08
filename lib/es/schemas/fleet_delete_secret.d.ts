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
/** Deletes a secret stored by Fleet. */
export declare const FleetDeleteSecretRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type FleetDeleteSecretRequest = z.infer<typeof FleetDeleteSecretRequest>;
export declare const FleetDeleteSecretResponse: z.ZodObject<{
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type FleetDeleteSecretResponse = z.infer<typeof FleetDeleteSecretResponse>;
//# sourceMappingURL=fleet_delete_secret.d.ts.map