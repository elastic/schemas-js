import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const EsqlListQueriesBody: z.ZodObject<{
    id: z.ZodNumber;
    node: z.ZodString;
    start_time_millis: z.ZodNumber;
    running_time_nanos: z.ZodNumber;
    query: z.ZodString;
}, z.core.$strip>;
export type EsqlListQueriesBody = z.infer<typeof EsqlListQueriesBody>;
/**
 * Get running ES|QL queries information.
 *
 * Returns an object containing IDs and other information about the running ES|QL queries.
 */
export declare const EsqlListQueriesRequest: z.ZodObject<{}, z.core.$strip>;
export type EsqlListQueriesRequest = z.infer<typeof EsqlListQueriesRequest>;
export declare const EsqlListQueriesResponse: z.ZodObject<{
    queries: z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodNumber;
        node: z.ZodString;
        start_time_millis: z.ZodNumber;
        running_time_nanos: z.ZodNumber;
        query: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EsqlListQueriesResponse = z.infer<typeof EsqlListQueriesResponse>;
//# sourceMappingURL=esql_list_queries.d.ts.map