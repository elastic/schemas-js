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
/** Retrieves a secret stored by Connectors. */
export declare const ConnectorSecretGetRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSecretGetRequest = z.infer<typeof ConnectorSecretGetRequest>;
export declare const ConnectorSecretGetResponse: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type ConnectorSecretGetResponse = z.infer<typeof ConnectorSecretGetResponse>;
//# sourceMappingURL=connector_secret_get.d.ts.map