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
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SnapshotFileCountSnapshotStats: z.ZodObject<{
    file_count: z.ZodNumber;
    size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type SnapshotFileCountSnapshotStats = z.infer<typeof SnapshotFileCountSnapshotStats>;
export declare const SnapshotShardsStats: z.ZodObject<{
    done: z.ZodNumber;
    failed: z.ZodNumber;
    finalizing: z.ZodNumber;
    initializing: z.ZodNumber;
    started: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type SnapshotShardsStats = z.infer<typeof SnapshotShardsStats>;
export declare const SnapshotShardsStatsStage: z.ZodEnum<{
    INIT: "INIT";
    FINALIZE: "FINALIZE";
    DONE: "DONE";
    STARTED: "STARTED";
    FAILURE: "FAILURE";
}>;
export type SnapshotShardsStatsStage = z.infer<typeof SnapshotShardsStatsStage>;
export declare const SnapshotShardsStatsSummaryItem: z.ZodObject<{
    file_count: z.ZodNumber;
    size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type SnapshotShardsStatsSummaryItem = z.infer<typeof SnapshotShardsStatsSummaryItem>;
export declare const SnapshotShardsStatsSummary: z.ZodObject<{
    incremental: z.ZodObject<{
        file_count: z.ZodNumber;
        size_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
    total: z.ZodObject<{
        file_count: z.ZodNumber;
        size_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
    start_time_in_millis: z.ZodAny;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type SnapshotShardsStatsSummary = z.infer<typeof SnapshotShardsStatsSummary>;
export declare const SnapshotSnapshotShardsStatus: z.ZodObject<{
    stage: z.ZodEnum<{
        INIT: "INIT";
        FINALIZE: "FINALIZE";
        DONE: "DONE";
        STARTED: "STARTED";
        FAILURE: "FAILURE";
    }>;
    stats: z.ZodObject<{
        incremental: z.ZodObject<{
            file_count: z.ZodNumber;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        total: z.ZodObject<{
            file_count: z.ZodNumber;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        start_time_in_millis: z.ZodAny;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_millis: z.ZodAny;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SnapshotSnapshotShardsStatus = z.infer<typeof SnapshotSnapshotShardsStatus>;
export declare const SnapshotSnapshotStats: z.ZodObject<{
    incremental: z.ZodObject<{
        file_count: z.ZodNumber;
        size_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
    start_time_in_millis: z.ZodAny;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_millis: z.ZodAny;
    total: z.ZodObject<{
        file_count: z.ZodNumber;
        size_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SnapshotSnapshotStats = z.infer<typeof SnapshotSnapshotStats>;
export declare const SnapshotSnapshotIndexStats: z.ZodObject<{
    shards: z.ZodRecord<z.ZodString, z.ZodObject<{
        stage: z.ZodEnum<{
            INIT: "INIT";
            FINALIZE: "FINALIZE";
            DONE: "DONE";
            STARTED: "STARTED";
            FAILURE: "FAILURE";
        }>;
        stats: z.ZodObject<{
            incremental: z.ZodObject<{
                file_count: z.ZodNumber;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
            total: z.ZodObject<{
                file_count: z.ZodNumber;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
            start_time_in_millis: z.ZodAny;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_millis: z.ZodAny;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    shards_stats: z.ZodObject<{
        done: z.ZodNumber;
        failed: z.ZodNumber;
        finalizing: z.ZodNumber;
        initializing: z.ZodNumber;
        started: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    stats: z.ZodObject<{
        incremental: z.ZodObject<{
            file_count: z.ZodNumber;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        start_time_in_millis: z.ZodAny;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_millis: z.ZodAny;
        total: z.ZodObject<{
            file_count: z.ZodNumber;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SnapshotSnapshotIndexStats = z.infer<typeof SnapshotSnapshotIndexStats>;
export declare const SnapshotStatus: z.ZodObject<{
    include_global_state: z.ZodBoolean;
    indices: z.ZodRecord<z.ZodString, z.ZodObject<{
        shards: z.ZodRecord<z.ZodString, z.ZodObject<{
            stage: z.ZodEnum<{
                INIT: "INIT";
                FINALIZE: "FINALIZE";
                DONE: "DONE";
                STARTED: "STARTED";
                FAILURE: "FAILURE";
            }>;
            stats: z.ZodObject<{
                incremental: z.ZodObject<{
                    file_count: z.ZodNumber;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>;
                total: z.ZodObject<{
                    file_count: z.ZodNumber;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>;
                start_time_in_millis: z.ZodAny;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        shards_stats: z.ZodObject<{
            done: z.ZodNumber;
            failed: z.ZodNumber;
            finalizing: z.ZodNumber;
            initializing: z.ZodNumber;
            started: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        stats: z.ZodObject<{
            incremental: z.ZodObject<{
                file_count: z.ZodNumber;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
            start_time_in_millis: z.ZodAny;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_millis: z.ZodAny;
            total: z.ZodObject<{
                file_count: z.ZodNumber;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    repository: z.ZodString;
    shards_stats: z.ZodObject<{
        done: z.ZodNumber;
        failed: z.ZodNumber;
        finalizing: z.ZodNumber;
        initializing: z.ZodNumber;
        started: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    snapshot: z.ZodString;
    state: z.ZodString;
    stats: z.ZodObject<{
        incremental: z.ZodObject<{
            file_count: z.ZodNumber;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        start_time_in_millis: z.ZodAny;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_millis: z.ZodAny;
        total: z.ZodObject<{
            file_count: z.ZodNumber;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    uuid: z.ZodString;
}, z.core.$strip>;
export type SnapshotStatus = z.infer<typeof SnapshotStatus>;
/**
 * Get the snapshot status.
 *
 * Get a detailed description of the current state for each shard participating in the snapshot.
 *
 * Note that this API should be used only to obtain detailed shard-level information for ongoing snapshots.
 * If this detail is not needed or you want to obtain information about one or more existing snapshots, use the get snapshot API.
 *
 * If you omit the `<snapshot>` request path parameter, the request retrieves information only for currently running snapshots.
 * This usage is preferred.
 * If needed, you can specify `<repository>` and `<snapshot>` to retrieve information for specific snapshots, even if they're not currently running.
 *
 * Note that the stats will not be available for any shard snapshots in an ongoing snapshot completed by a node that (even momentarily) left the cluster.
 * Loading the stats from the repository is an expensive operation (see the WARNING below).
 * Therefore the stats values for such shards will be -1 even though the "stage" value will be "DONE", in order to minimize latency.
 * A "description" field will be present for a shard snapshot completed by a departed node explaining why the shard snapshot's stats results are invalid.
 * Consequently, the total stats for the index will be less than expected due to the missing values from these shards.
 *
 * WARNING: Using the API to return the status of any snapshots other than currently running snapshots can be expensive.
 * The API requires a read from the repository for each shard in each snapshot.
 * For example, if you have 100 snapshots with 1,000 shards each, an API request that includes all snapshots will require 100,000 reads (100 snapshots x 1,000 shards).
 *
 * Depending on the latency of your storage, such requests can take an extremely long time to return results.
 * These requests can also tax machine resources and, when using cloud storage, incur high processing costs.
 */
export declare const SnapshotStatusRequest: z.ZodObject<{
    repository: z.ZodOptional<z.ZodString>;
    snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SnapshotStatusRequest = z.infer<typeof SnapshotStatusRequest>;
export declare const SnapshotStatusResponse: z.ZodObject<{
    snapshots: z.ZodArray<z.ZodObject<{
        include_global_state: z.ZodBoolean;
        indices: z.ZodRecord<z.ZodString, z.ZodObject<{
            shards: z.ZodRecord<z.ZodString, z.ZodObject<{
                stage: z.ZodEnum<{
                    INIT: "INIT";
                    FINALIZE: "FINALIZE";
                    DONE: "DONE";
                    STARTED: "STARTED";
                    FAILURE: "FAILURE";
                }>;
                stats: z.ZodObject<{
                    incremental: z.ZodObject<{
                        file_count: z.ZodNumber;
                        size_in_bytes: z.ZodNumber;
                    }, z.core.$strip>;
                    total: z.ZodObject<{
                        file_count: z.ZodNumber;
                        size_in_bytes: z.ZodNumber;
                    }, z.core.$strip>;
                    start_time_in_millis: z.ZodAny;
                    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    time_in_millis: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            shards_stats: z.ZodObject<{
                done: z.ZodNumber;
                failed: z.ZodNumber;
                finalizing: z.ZodNumber;
                initializing: z.ZodNumber;
                started: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            stats: z.ZodObject<{
                incremental: z.ZodObject<{
                    file_count: z.ZodNumber;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>;
                start_time_in_millis: z.ZodAny;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodObject<{
                    file_count: z.ZodNumber;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        repository: z.ZodString;
        shards_stats: z.ZodObject<{
            done: z.ZodNumber;
            failed: z.ZodNumber;
            finalizing: z.ZodNumber;
            initializing: z.ZodNumber;
            started: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        snapshot: z.ZodString;
        state: z.ZodString;
        stats: z.ZodObject<{
            incremental: z.ZodObject<{
                file_count: z.ZodNumber;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
            start_time_in_millis: z.ZodAny;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_millis: z.ZodAny;
            total: z.ZodObject<{
                file_count: z.ZodNumber;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        uuid: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SnapshotStatusResponse = z.infer<typeof SnapshotStatusResponse>;
//# sourceMappingURL=snapshot_status.d.ts.map