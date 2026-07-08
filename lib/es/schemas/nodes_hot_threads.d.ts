import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const ThreadType: z.ZodEnum<{
    cpu: "cpu";
    block: "block";
    wait: "wait";
    gpu: "gpu";
    mem: "mem";
}>;
export type ThreadType = z.infer<typeof ThreadType>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Get the hot threads for nodes.
 *
 * Get a breakdown of the hot threads on each selected node in the cluster.
 * The output is plain text with a breakdown of the top hot threads for each node.
 */
export declare const NodesHotThreadsRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    ignore_idle_threads: z.ZodOptional<z.ZodBoolean>;
    interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    snapshots: z.ZodOptional<z.ZodNumber>;
    threads: z.ZodOptional<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    type: z.ZodOptional<z.ZodEnum<{
        cpu: "cpu";
        block: "block";
        wait: "wait";
        gpu: "gpu";
        mem: "mem";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        cpu: "cpu";
        block: "block";
        wait: "wait";
        gpu: "gpu";
        mem: "mem";
    }>>;
}, z.core.$strip>;
export type NodesHotThreadsRequest = z.infer<typeof NodesHotThreadsRequest>;
export declare const NodesHotThreadsResponse: z.ZodObject<{}, z.core.$strip>;
export type NodesHotThreadsResponse = z.infer<typeof NodesHotThreadsResponse>;
//# sourceMappingURL=nodes_hot_threads.d.ts.map