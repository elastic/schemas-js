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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatPendingTasksColumn: z.ZodUnion<readonly [z.ZodEnum<{
    source: "source";
    s: "s";
    t: "t";
    o: "o";
    p: "p";
    insertOrder: "insertOrder";
    timeInQueue: "timeInQueue";
    priority: "priority";
}>, z.ZodString]>;
export type CatCatPendingTasksColumn = z.infer<typeof CatCatPendingTasksColumn>;
export declare const CatCatPendingTasksColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    source: "source";
    s: "s";
    t: "t";
    o: "o";
    p: "p";
    insertOrder: "insertOrder";
    timeInQueue: "timeInQueue";
    priority: "priority";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    source: "source";
    s: "s";
    t: "t";
    o: "o";
    p: "p";
    insertOrder: "insertOrder";
    timeInQueue: "timeInQueue";
    priority: "priority";
}>, z.ZodString]>>]>;
export type CatCatPendingTasksColumns = z.infer<typeof CatCatPendingTasksColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatPendingTasksPendingTasksRecord: z.ZodObject<{
    insertOrder: z.ZodOptional<z.ZodString>;
    o: z.ZodOptional<z.ZodString>;
    timeInQueue: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodString>;
    p: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatPendingTasksPendingTasksRecord = z.infer<typeof CatPendingTasksPendingTasksRecord>;
/**
 * Get pending task information.
 *
 * Get information about cluster-level changes that have not yet taken effect.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the pending cluster tasks API.
 */
export declare const CatPendingTasksRequest: z.ZodObject<{
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        source: "source";
        s: "s";
        t: "t";
        o: "o";
        p: "p";
        insertOrder: "insertOrder";
        timeInQueue: "timeInQueue";
        priority: "priority";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        source: "source";
        s: "s";
        t: "t";
        o: "o";
        p: "p";
        insertOrder: "insertOrder";
        timeInQueue: "timeInQueue";
        priority: "priority";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatPendingTasksRequest = z.infer<typeof CatPendingTasksRequest>;
export declare const CatPendingTasksResponse: z.ZodArray<z.ZodObject<{
    insertOrder: z.ZodOptional<z.ZodString>;
    o: z.ZodOptional<z.ZodString>;
    timeInQueue: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodString>;
    p: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatPendingTasksResponse = z.infer<typeof CatPendingTasksResponse>;
//# sourceMappingURL=cat_pending_tasks.d.ts.map