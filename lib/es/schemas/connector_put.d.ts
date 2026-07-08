import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
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
/** Create or update a connector. */
export declare const ConnectorPutRequest: z.ZodObject<{
    connector_id: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    index_name: z.ZodOptional<z.ZodString>;
    is_native: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    service_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorPutRequest = z.infer<typeof ConnectorPutRequest>;
export declare const ConnectorPutResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
    id: z.ZodString;
}, z.core.$strip>;
export type ConnectorPutResponse = z.infer<typeof ConnectorPutResponse>;
//# sourceMappingURL=connector_put.d.ts.map