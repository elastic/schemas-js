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
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
/** Creates or updates a secret for a Connector. */
export declare const ConnectorSecretPutRequest: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type ConnectorSecretPutRequest = z.infer<typeof ConnectorSecretPutRequest>;
export declare const ConnectorSecretPutResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorSecretPutResponse = z.infer<typeof ConnectorSecretPutResponse>;
//# sourceMappingURL=connector_secret_put.d.ts.map