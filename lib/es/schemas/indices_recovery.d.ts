import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const ExpandWildcard: z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>;
export type ExpandWildcard = z.infer<typeof ExpandWildcard>;
export declare const ExpandWildcards: z.ZodUnion<readonly [z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>, z.ZodArray<z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>>]>;
export type ExpandWildcards = z.infer<typeof ExpandWildcards>;
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const Percentage: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
export type Percentage = z.infer<typeof Percentage>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const IndicesRecoveryFileDetails: z.ZodObject<{
    length: z.ZodNumber;
    name: z.ZodString;
    recovered: z.ZodNumber;
}, z.core.$strip>;
export type IndicesRecoveryFileDetails = z.infer<typeof IndicesRecoveryFileDetails>;
export declare const IndicesRecoveryRecoveryBytes: z.ZodObject<{
    percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
}, z.core.$strip>;
export type IndicesRecoveryRecoveryBytes = z.infer<typeof IndicesRecoveryRecoveryBytes>;
export declare const IndicesRecoveryRecoveryFiles: z.ZodObject<{
    details: z.ZodOptional<z.ZodArray<z.ZodObject<{
        length: z.ZodNumber;
        name: z.ZodString;
        recovered: z.ZodNumber;
    }, z.core.$strip>>>;
    percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    recovered: z.ZodNumber;
    reused: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type IndicesRecoveryRecoveryFiles = z.infer<typeof IndicesRecoveryRecoveryFiles>;
export declare const IndicesRecoveryRecoveryIndexStatus: z.ZodObject<{
    bytes: z.ZodOptional<z.ZodObject<{
        percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strip>>;
    files: z.ZodObject<{
        details: z.ZodOptional<z.ZodArray<z.ZodObject<{
            length: z.ZodNumber;
            name: z.ZodString;
            recovered: z.ZodNumber;
        }, z.core.$strip>>>;
        percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        recovered: z.ZodNumber;
        reused: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    size: z.ZodObject<{
        percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strip>;
    source_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    source_throttle_time_in_millis: z.ZodAny;
    target_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    target_throttle_time_in_millis: z.ZodAny;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type IndicesRecoveryRecoveryIndexStatus = z.infer<typeof IndicesRecoveryRecoveryIndexStatus>;
export declare const IndicesRecoveryRecoveryOrigin: z.ZodObject<{
    hostname: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    transport_address: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
    repository: z.ZodOptional<z.ZodString>;
    snapshot: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    restoreUUID: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IndicesRecoveryRecoveryOrigin = z.infer<typeof IndicesRecoveryRecoveryOrigin>;
export declare const IndicesRecoveryRecoveryStage: z.ZodEnum<{
    INIT: "INIT";
    INDEX: "INDEX";
    VERIFY_INDEX: "VERIFY_INDEX";
    TRANSLOG: "TRANSLOG";
    FINALIZE: "FINALIZE";
    DONE: "DONE";
}>;
export type IndicesRecoveryRecoveryStage = z.infer<typeof IndicesRecoveryRecoveryStage>;
export declare const IndicesRecoveryRecoveryStartStatus: z.ZodObject<{
    check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    check_index_time_in_millis: z.ZodAny;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type IndicesRecoveryRecoveryStartStatus = z.infer<typeof IndicesRecoveryRecoveryStartStatus>;
export declare const IndicesRecoveryTranslogStatus: z.ZodObject<{
    percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    recovered: z.ZodNumber;
    total: z.ZodNumber;
    total_on_start: z.ZodNumber;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type IndicesRecoveryTranslogStatus = z.infer<typeof IndicesRecoveryTranslogStatus>;
export declare const IndicesRecoveryRecoveryType: z.ZodEnum<{
    EMPTY_STORE: "EMPTY_STORE";
    EXISTING_STORE: "EXISTING_STORE";
    LOCAL_SHARDS: "LOCAL_SHARDS";
    PEER: "PEER";
    SNAPSHOT: "SNAPSHOT";
}>;
export type IndicesRecoveryRecoveryType = z.infer<typeof IndicesRecoveryRecoveryType>;
export declare const IndicesRecoveryVerifyIndex: z.ZodObject<{
    check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    check_index_time_in_millis: z.ZodAny;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type IndicesRecoveryVerifyIndex = z.infer<typeof IndicesRecoveryVerifyIndex>;
export declare const IndicesRecoveryShardRecovery: z.ZodObject<{
    id: z.ZodNumber;
    index: z.ZodObject<{
        bytes: z.ZodOptional<z.ZodObject<{
            percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        }, z.core.$strip>>;
        files: z.ZodObject<{
            details: z.ZodOptional<z.ZodArray<z.ZodObject<{
                length: z.ZodNumber;
                name: z.ZodString;
                recovered: z.ZodNumber;
            }, z.core.$strip>>>;
            percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            recovered: z.ZodNumber;
            reused: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        size: z.ZodObject<{
            percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        }, z.core.$strip>;
        source_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        source_throttle_time_in_millis: z.ZodAny;
        target_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        target_throttle_time_in_millis: z.ZodAny;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>;
    primary: z.ZodBoolean;
    source: z.ZodObject<{
        hostname: z.ZodOptional<z.ZodString>;
        host: z.ZodOptional<z.ZodString>;
        transport_address: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
        repository: z.ZodOptional<z.ZodString>;
        snapshot: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        restoreUUID: z.ZodOptional<z.ZodString>;
        index: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    stage: z.ZodEnum<{
        INIT: "INIT";
        INDEX: "INDEX";
        VERIFY_INDEX: "VERIFY_INDEX";
        TRANSLOG: "TRANSLOG";
        FINALIZE: "FINALIZE";
        DONE: "DONE";
    }>;
    start: z.ZodOptional<z.ZodObject<{
        check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        check_index_time_in_millis: z.ZodAny;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start_time_in_millis: z.ZodAny;
    stop_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    stop_time_in_millis: z.ZodOptional<z.ZodAny>;
    target: z.ZodObject<{
        hostname: z.ZodOptional<z.ZodString>;
        host: z.ZodOptional<z.ZodString>;
        transport_address: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
        repository: z.ZodOptional<z.ZodString>;
        snapshot: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        restoreUUID: z.ZodOptional<z.ZodString>;
        index: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
    translog: z.ZodObject<{
        percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        recovered: z.ZodNumber;
        total: z.ZodNumber;
        total_on_start: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>;
    type: z.ZodEnum<{
        EMPTY_STORE: "EMPTY_STORE";
        EXISTING_STORE: "EXISTING_STORE";
        LOCAL_SHARDS: "LOCAL_SHARDS";
        PEER: "PEER";
        SNAPSHOT: "SNAPSHOT";
    }>;
    verify_index: z.ZodObject<{
        check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        check_index_time_in_millis: z.ZodAny;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IndicesRecoveryShardRecovery = z.infer<typeof IndicesRecoveryShardRecovery>;
export declare const IndicesRecoveryRecoveryStatus: z.ZodObject<{
    shards: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        index: z.ZodObject<{
            bytes: z.ZodOptional<z.ZodObject<{
                percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            }, z.core.$strip>>;
            files: z.ZodObject<{
                details: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    length: z.ZodNumber;
                    name: z.ZodString;
                    recovered: z.ZodNumber;
                }, z.core.$strip>>>;
                percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                recovered: z.ZodNumber;
                reused: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            }, z.core.$strip>;
            source_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            source_throttle_time_in_millis: z.ZodAny;
            target_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            target_throttle_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
        primary: z.ZodBoolean;
        source: z.ZodObject<{
            hostname: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            transport_address: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            ip: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
            repository: z.ZodOptional<z.ZodString>;
            snapshot: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
            restoreUUID: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        stage: z.ZodEnum<{
            INIT: "INIT";
            INDEX: "INDEX";
            VERIFY_INDEX: "VERIFY_INDEX";
            TRANSLOG: "TRANSLOG";
            FINALIZE: "FINALIZE";
            DONE: "DONE";
        }>;
        start: z.ZodOptional<z.ZodObject<{
            check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            check_index_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        start_time_in_millis: z.ZodAny;
        stop_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        stop_time_in_millis: z.ZodOptional<z.ZodAny>;
        target: z.ZodObject<{
            hostname: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            transport_address: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            ip: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
            repository: z.ZodOptional<z.ZodString>;
            snapshot: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
            restoreUUID: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
        translog: z.ZodObject<{
            percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            recovered: z.ZodNumber;
            total: z.ZodNumber;
            total_on_start: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
        type: z.ZodEnum<{
            EMPTY_STORE: "EMPTY_STORE";
            EXISTING_STORE: "EXISTING_STORE";
            LOCAL_SHARDS: "LOCAL_SHARDS";
            PEER: "PEER";
            SNAPSHOT: "SNAPSHOT";
        }>;
        verify_index: z.ZodObject<{
            check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            check_index_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesRecoveryRecoveryStatus = z.infer<typeof IndicesRecoveryRecoveryStatus>;
/**
 * Get index recovery information.
 *
 * Get information about ongoing and completed shard recoveries for one or more indices.
 * For data streams, the API returns information for the stream's backing indices.
 *
 * All recoveries, whether ongoing or complete, are kept in the cluster state and may be reported on at any time.
 *
 * Shard recovery is the process of initializing a shard copy, such as restoring a primary shard from a snapshot or creating a replica shard from a primary shard.
 * When a shard recovery completes, the recovered shard is available for search and indexing.
 *
 * Recovery automatically occurs during the following processes:
 *
 * * When creating an index for the first time.
 * * When a node rejoins the cluster and starts up any missing primary shard copies using the data that it holds in its data path.
 * * Creation of new replica shard copies from the primary.
 * * Relocation of a shard copy to a different node in the same cluster.
 * * A snapshot restore operation.
 * * A clone, shrink, or split operation.
 *
 * You can determine the cause of a shard recovery using the recovery or cat recovery APIs.
 *
 * The index recovery API reports information about completed recoveries only for shard copies that currently exist in the cluster.
 * It only reports the last recovery for each shard copy and does not report historical information about earlier recoveries, nor does it report information about the recoveries of shard copies that no longer exist.
 * This means that if a shard copy completes a recovery and then Elasticsearch relocates it onto a different node then the information about the original recovery will not be shown in the recovery API.
 */
export declare const IndicesRecoveryRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    active_only: z.ZodOptional<z.ZodBoolean>;
    detailed: z.ZodOptional<z.ZodBoolean>;
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
    expand_wildcards: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>, z.ZodArray<z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>>]>>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IndicesRecoveryRequest = z.infer<typeof IndicesRecoveryRequest>;
export declare const IndicesRecoveryResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    shards: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        index: z.ZodObject<{
            bytes: z.ZodOptional<z.ZodObject<{
                percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            }, z.core.$strip>>;
            files: z.ZodObject<{
                details: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    length: z.ZodNumber;
                    name: z.ZodString;
                    recovered: z.ZodNumber;
                }, z.core.$strip>>>;
                percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                recovered: z.ZodNumber;
                reused: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                recovered: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                recovered_from_snapshot: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                recovered_from_snapshot_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reused_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            }, z.core.$strip>;
            source_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            source_throttle_time_in_millis: z.ZodAny;
            target_throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            target_throttle_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
        primary: z.ZodBoolean;
        source: z.ZodObject<{
            hostname: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            transport_address: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            ip: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
            repository: z.ZodOptional<z.ZodString>;
            snapshot: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
            restoreUUID: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        stage: z.ZodEnum<{
            INIT: "INIT";
            INDEX: "INDEX";
            VERIFY_INDEX: "VERIFY_INDEX";
            TRANSLOG: "TRANSLOG";
            FINALIZE: "FINALIZE";
            DONE: "DONE";
        }>;
        start: z.ZodOptional<z.ZodObject<{
            check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            check_index_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        start_time_in_millis: z.ZodAny;
        stop_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        stop_time_in_millis: z.ZodOptional<z.ZodAny>;
        target: z.ZodObject<{
            hostname: z.ZodOptional<z.ZodString>;
            host: z.ZodOptional<z.ZodString>;
            transport_address: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            ip: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            bootstrap_new_history_uuid: z.ZodOptional<z.ZodBoolean>;
            repository: z.ZodOptional<z.ZodString>;
            snapshot: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
            restoreUUID: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
        translog: z.ZodObject<{
            percent: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            recovered: z.ZodNumber;
            total: z.ZodNumber;
            total_on_start: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
        type: z.ZodEnum<{
            EMPTY_STORE: "EMPTY_STORE";
            EXISTING_STORE: "EXISTING_STORE";
            LOCAL_SHARDS: "LOCAL_SHARDS";
            PEER: "PEER";
            SNAPSHOT: "SNAPSHOT";
        }>;
        verify_index: z.ZodObject<{
            check_index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            check_index_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type IndicesRecoveryResponse = z.infer<typeof IndicesRecoveryResponse>;
//# sourceMappingURL=indices_recovery.d.ts.map