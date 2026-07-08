import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * Some APIs will return values such as numbers also as a string (notably epoch timestamps). This behavior
 * is used to capture this behavior while keeping the semantics of the field type.
 *
 * Depending on the target language, code generators can keep the union or remove it and leniently parse
 * strings to the target type.
 */
export declare const SpecUtilsStringified: z.ZodUnion<readonly [z.ZodAny, z.ZodString]>;
export type SpecUtilsStringified = z.infer<typeof SpecUtilsStringified>;
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
/** Time of day, expressed as HH:MM:SS */
export declare const TimeOfDay: z.ZodString;
export type TimeOfDay = z.infer<typeof TimeOfDay>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatCatSnapshotsColumn: z.ZodUnion<readonly [z.ZodEnum<{
    status: "status";
    indices: "indices";
    snapshot: "snapshot";
    id: "id";
    i: "i";
    s: "s";
    r: "r";
    ts: "ts";
    ss: "ss";
    start_time: "start_time";
    repository: "repository";
    re: "re";
    repo: "repo";
    start_epoch: "start_epoch";
    ste: "ste";
    startEpoch: "startEpoch";
    sti: "sti";
    startTime: "startTime";
    end_epoch: "end_epoch";
    ete: "ete";
    endEpoch: "endEpoch";
    end_time: "end_time";
    eti: "eti";
    endTime: "endTime";
    duration: "duration";
    dur: "dur";
    successful_shards: "successful_shards";
    failed_shards: "failed_shards";
    fs: "fs";
    total_shards: "total_shards";
    reason: "reason";
}>, z.ZodString]>;
export type CatCatSnapshotsColumn = z.infer<typeof CatCatSnapshotsColumn>;
export declare const CatCatSnapshotsColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    status: "status";
    indices: "indices";
    snapshot: "snapshot";
    id: "id";
    i: "i";
    s: "s";
    r: "r";
    ts: "ts";
    ss: "ss";
    start_time: "start_time";
    repository: "repository";
    re: "re";
    repo: "repo";
    start_epoch: "start_epoch";
    ste: "ste";
    startEpoch: "startEpoch";
    sti: "sti";
    startTime: "startTime";
    end_epoch: "end_epoch";
    ete: "ete";
    endEpoch: "endEpoch";
    end_time: "end_time";
    eti: "eti";
    endTime: "endTime";
    duration: "duration";
    dur: "dur";
    successful_shards: "successful_shards";
    failed_shards: "failed_shards";
    fs: "fs";
    total_shards: "total_shards";
    reason: "reason";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    status: "status";
    indices: "indices";
    snapshot: "snapshot";
    id: "id";
    i: "i";
    s: "s";
    r: "r";
    ts: "ts";
    ss: "ss";
    start_time: "start_time";
    repository: "repository";
    re: "re";
    repo: "repo";
    start_epoch: "start_epoch";
    ste: "ste";
    startEpoch: "startEpoch";
    sti: "sti";
    startTime: "startTime";
    end_epoch: "end_epoch";
    ete: "ete";
    endEpoch: "endEpoch";
    end_time: "end_time";
    eti: "eti";
    endTime: "endTime";
    duration: "duration";
    dur: "dur";
    successful_shards: "successful_shards";
    failed_shards: "failed_shards";
    fs: "fs";
    total_shards: "total_shards";
    reason: "reason";
}>, z.ZodString]>>]>;
export type CatCatSnapshotsColumns = z.infer<typeof CatCatSnapshotsColumns>;
/**
 * Get snapshot information.
 *
 * Get information about the snapshots stored in one or more repositories.
 * A snapshot is a backup of an index or running Elasticsearch cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot API.
 */
export declare const CatSnapshotsRequest: z.ZodObject<{
    repository: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        status: "status";
        indices: "indices";
        snapshot: "snapshot";
        id: "id";
        i: "i";
        s: "s";
        r: "r";
        ts: "ts";
        ss: "ss";
        start_time: "start_time";
        repository: "repository";
        re: "re";
        repo: "repo";
        start_epoch: "start_epoch";
        ste: "ste";
        startEpoch: "startEpoch";
        sti: "sti";
        startTime: "startTime";
        end_epoch: "end_epoch";
        ete: "ete";
        endEpoch: "endEpoch";
        end_time: "end_time";
        eti: "eti";
        endTime: "endTime";
        duration: "duration";
        dur: "dur";
        successful_shards: "successful_shards";
        failed_shards: "failed_shards";
        fs: "fs";
        total_shards: "total_shards";
        reason: "reason";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        status: "status";
        indices: "indices";
        snapshot: "snapshot";
        id: "id";
        i: "i";
        s: "s";
        r: "r";
        ts: "ts";
        ss: "ss";
        start_time: "start_time";
        repository: "repository";
        re: "re";
        repo: "repo";
        start_epoch: "start_epoch";
        ste: "ste";
        startEpoch: "startEpoch";
        sti: "sti";
        startTime: "startTime";
        end_epoch: "end_epoch";
        ete: "ete";
        endEpoch: "endEpoch";
        end_time: "end_time";
        eti: "eti";
        endTime: "endTime";
        duration: "duration";
        dur: "dur";
        successful_shards: "successful_shards";
        failed_shards: "failed_shards";
        fs: "fs";
        total_shards: "total_shards";
        reason: "reason";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatSnapshotsRequest = z.infer<typeof CatSnapshotsRequest>;
export declare const WatcherHourAndMinute: z.ZodObject<{
    hour: z.ZodArray<z.ZodNumber>;
    minute: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
export type WatcherHourAndMinute = z.infer<typeof WatcherHourAndMinute>;
/** A time of day, expressed either as `hh:mm`, `noon`, `midnight`, or an hour/minutes structure. */
export declare const WatcherScheduleTimeOfDay: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    hour: z.ZodArray<z.ZodNumber>;
    minute: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>]>;
export type WatcherScheduleTimeOfDay = z.infer<typeof WatcherScheduleTimeOfDay>;
export declare const CatSnapshotsSnapshotsRecord: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    snapshot: z.ZodOptional<z.ZodString>;
    repository: z.ZodOptional<z.ZodString>;
    re: z.ZodOptional<z.ZodString>;
    repo: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
    start_epoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    ste: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    startEpoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        hour: z.ZodArray<z.ZodNumber>;
        minute: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>]>>;
    sti: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        hour: z.ZodArray<z.ZodNumber>;
        minute: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>]>>;
    startTime: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        hour: z.ZodArray<z.ZodNumber>;
        minute: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>]>>;
    end_epoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    ete: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    endEpoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    end_time: z.ZodOptional<z.ZodString>;
    eti: z.ZodOptional<z.ZodString>;
    endTime: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    dur: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    indices: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    successful_shards: z.ZodOptional<z.ZodString>;
    ss: z.ZodOptional<z.ZodString>;
    failed_shards: z.ZodOptional<z.ZodString>;
    fs: z.ZodOptional<z.ZodString>;
    total_shards: z.ZodOptional<z.ZodString>;
    ts: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    r: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatSnapshotsSnapshotsRecord = z.infer<typeof CatSnapshotsSnapshotsRecord>;
export declare const CatSnapshotsResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    snapshot: z.ZodOptional<z.ZodString>;
    repository: z.ZodOptional<z.ZodString>;
    re: z.ZodOptional<z.ZodString>;
    repo: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
    start_epoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    ste: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    startEpoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        hour: z.ZodArray<z.ZodNumber>;
        minute: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>]>>;
    sti: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        hour: z.ZodArray<z.ZodNumber>;
        minute: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>]>>;
    startTime: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        hour: z.ZodArray<z.ZodNumber>;
        minute: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>]>>;
    end_epoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    ete: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    endEpoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    end_time: z.ZodOptional<z.ZodString>;
    eti: z.ZodOptional<z.ZodString>;
    endTime: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    dur: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    indices: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    successful_shards: z.ZodOptional<z.ZodString>;
    ss: z.ZodOptional<z.ZodString>;
    failed_shards: z.ZodOptional<z.ZodString>;
    fs: z.ZodOptional<z.ZodString>;
    total_shards: z.ZodOptional<z.ZodString>;
    ts: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    r: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatSnapshotsResponse = z.infer<typeof CatSnapshotsResponse>;
//# sourceMappingURL=cat_snapshots.d.ts.map