import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const LogstashPipelineMetadata: z.ZodObject<{
    type: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
export type LogstashPipelineMetadata = z.infer<typeof LogstashPipelineMetadata>;
export declare const LogstashPipelineSettings: z.ZodObject<{
    'pipeline.workers': z.ZodNumber;
    'pipeline.batch.size': z.ZodNumber;
    'pipeline.batch.delay': z.ZodNumber;
    'queue.type': z.ZodString;
    'queue.max_bytes': z.ZodString;
    'queue.checkpoint.writes': z.ZodNumber;
}, z.core.$strip>;
export type LogstashPipelineSettings = z.infer<typeof LogstashPipelineSettings>;
export declare const LogstashPipeline: z.ZodObject<{
    description: z.ZodString;
    last_modified: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    pipeline: z.ZodString;
    pipeline_metadata: z.ZodObject<{
        type: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>;
    pipeline_settings: z.ZodObject<{
        'pipeline.workers': z.ZodNumber;
        'pipeline.batch.size': z.ZodNumber;
        'pipeline.batch.delay': z.ZodNumber;
        'queue.type': z.ZodString;
        'queue.max_bytes': z.ZodString;
        'queue.checkpoint.writes': z.ZodNumber;
    }, z.core.$strip>;
    username: z.ZodString;
}, z.core.$strip>;
export type LogstashPipeline = z.infer<typeof LogstashPipeline>;
/**
 * Create or update a Logstash pipeline.
 *
 * Create a pipeline that is used for Logstash Central Management.
 * If the specified pipeline exists, it is replaced.
 */
export declare const LogstashPutPipelineRequest: z.ZodObject<{
    id: z.ZodString;
    pipeline: z.ZodObject<{
        description: z.ZodString;
        last_modified: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        pipeline: z.ZodString;
        pipeline_metadata: z.ZodObject<{
            type: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>;
        pipeline_settings: z.ZodObject<{
            'pipeline.workers': z.ZodNumber;
            'pipeline.batch.size': z.ZodNumber;
            'pipeline.batch.delay': z.ZodNumber;
            'queue.type': z.ZodString;
            'queue.max_bytes': z.ZodString;
            'queue.checkpoint.writes': z.ZodNumber;
        }, z.core.$strip>;
        username: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LogstashPutPipelineRequest = z.infer<typeof LogstashPutPipelineRequest>;
export declare const LogstashPutPipelineResponse: z.ZodBoolean;
export type LogstashPutPipelineResponse = z.infer<typeof LogstashPutPipelineResponse>;
//# sourceMappingURL=logstash_put_pipeline.d.ts.map