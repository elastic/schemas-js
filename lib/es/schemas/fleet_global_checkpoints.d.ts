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
export declare const IndexAlias: z.ZodString;
export type IndexAlias = z.infer<typeof IndexAlias>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const FleetCheckpoint: z.ZodNumber;
export type FleetCheckpoint = z.infer<typeof FleetCheckpoint>;
/**
 * Get global checkpoints.
 *
 * Get the current global checkpoints for an index.
 * This API is designed for internal use by the Fleet server project.
 */
export declare const FleetGlobalCheckpointsRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodString]>;
    wait_for_advance: z.ZodOptional<z.ZodBoolean>;
    wait_for_index: z.ZodOptional<z.ZodBoolean>;
    checkpoints: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type FleetGlobalCheckpointsRequest = z.infer<typeof FleetGlobalCheckpointsRequest>;
export declare const FleetGlobalCheckpointsResponse: z.ZodObject<{
    global_checkpoints: z.ZodArray<z.ZodNumber>;
    timed_out: z.ZodBoolean;
}, z.core.$strip>;
export type FleetGlobalCheckpointsResponse = z.infer<typeof FleetGlobalCheckpointsResponse>;
//# sourceMappingURL=fleet_global_checkpoints.d.ts.map