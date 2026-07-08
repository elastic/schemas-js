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
/** Deletes a connector secret. */
export declare const ConnectorSecretDeleteRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSecretDeleteRequest = z.infer<typeof ConnectorSecretDeleteRequest>;
export declare const ConnectorSecretDeleteResponse: z.ZodObject<{
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type ConnectorSecretDeleteResponse = z.infer<typeof ConnectorSecretDeleteResponse>;
//# sourceMappingURL=connector_secret_delete.d.ts.map