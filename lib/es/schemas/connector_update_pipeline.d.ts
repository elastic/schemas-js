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
export declare const ConnectorIngestPipelineParams: z.ZodObject<{
    extract_binary_content: z.ZodBoolean;
    name: z.ZodString;
    reduce_whitespace: z.ZodBoolean;
    run_ml_inference: z.ZodBoolean;
}, z.core.$strip>;
export type ConnectorIngestPipelineParams = z.infer<typeof ConnectorIngestPipelineParams>;
/**
 * Update the connector pipeline.
 *
 * When you create a new connector, the configuration of an ingest pipeline is populated with default settings.
 */
export declare const ConnectorUpdatePipelineRequest: z.ZodObject<{
    connector_id: z.ZodString;
    pipeline: z.ZodObject<{
        extract_binary_content: z.ZodBoolean;
        name: z.ZodString;
        reduce_whitespace: z.ZodBoolean;
        run_ml_inference: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ConnectorUpdatePipelineRequest = z.infer<typeof ConnectorUpdatePipelineRequest>;
export declare const ConnectorUpdatePipelineResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdatePipelineResponse = z.infer<typeof ConnectorUpdatePipelineResponse>;
//# sourceMappingURL=connector_update_pipeline.d.ts.map