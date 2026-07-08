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
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Get a specific running ES|QL query information.
 *
 * Returns an object extended information about a running ES|QL query.
 */
export declare const EsqlGetQueryRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type EsqlGetQueryRequest = z.infer<typeof EsqlGetQueryRequest>;
export declare const EsqlGetQueryResponse: z.ZodObject<{
    id: z.ZodNumber;
    node: z.ZodString;
    start_time_millis: z.ZodNumber;
    running_time_nanos: z.ZodNumber;
    query: z.ZodString;
    coordinating_node: z.ZodString;
    data_nodes: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type EsqlGetQueryResponse = z.infer<typeof EsqlGetQueryResponse>;
//# sourceMappingURL=esql_get_query.d.ts.map