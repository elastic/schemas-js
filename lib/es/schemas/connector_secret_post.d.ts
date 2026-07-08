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
/** Creates a secret for a Connector. */
export declare const ConnectorSecretPostRequest: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorSecretPostRequest = z.infer<typeof ConnectorSecretPostRequest>;
export declare const ConnectorSecretPostResponse: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSecretPostResponse = z.infer<typeof ConnectorSecretPostResponse>;
//# sourceMappingURL=connector_secret_post.d.ts.map