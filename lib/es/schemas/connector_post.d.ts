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
/**
 * Create a connector.
 *
 * Connectors are Elasticsearch integrations that bring content from third-party data sources, which can be deployed on Elastic Cloud or hosted on your own infrastructure.
 * Elastic managed connectors (Native connectors) are a managed service on Elastic Cloud.
 * Self-managed connectors (Connector clients) are self-managed on your infrastructure.
 */
export declare const ConnectorPostRequest: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    index_name: z.ZodOptional<z.ZodString>;
    is_native: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    service_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorPostRequest = z.infer<typeof ConnectorPostRequest>;
export declare const ConnectorPostResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
    id: z.ZodString;
}, z.core.$strip>;
export type ConnectorPostResponse = z.infer<typeof ConnectorPostResponse>;
//# sourceMappingURL=connector_post.d.ts.map