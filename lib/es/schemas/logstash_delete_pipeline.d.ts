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
/**
 * Delete a Logstash pipeline.
 *
 * Delete a pipeline that is used for Logstash Central Management.
 * If the request succeeds, you receive an empty response with an appropriate status code.
 */
export declare const LogstashDeletePipelineRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type LogstashDeletePipelineRequest = z.infer<typeof LogstashDeletePipelineRequest>;
export declare const LogstashDeletePipelineResponse: z.ZodBoolean;
export type LogstashDeletePipelineResponse = z.infer<typeof LogstashDeletePipelineResponse>;
//# sourceMappingURL=logstash_delete_pipeline.d.ts.map