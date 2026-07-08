import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export declare const DurationLarge: z.ZodString;
export type DurationLarge = z.infer<typeof DurationLarge>;
/** For empty Class assignments */
export declare const EmptyObject: z.ZodObject<{}, z.core.$strip>;
export type EmptyObject = z.infer<typeof EmptyObject>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const IlmAllocateAction: z.ZodObject<{
    number_of_replicas: z.ZodOptional<z.ZodNumber>;
    total_shards_per_node: z.ZodOptional<z.ZodNumber>;
    include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type IlmAllocateAction = z.infer<typeof IlmAllocateAction>;
export declare const IlmDeleteAction: z.ZodObject<{
    delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IlmDeleteAction = z.infer<typeof IlmDeleteAction>;
export declare const IlmDownsampleAction: z.ZodObject<{
    fixed_interval: z.ZodString;
    wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IlmDownsampleAction = z.infer<typeof IlmDownsampleAction>;
export declare const IlmForceMergeAction: z.ZodObject<{
    max_num_segments: z.ZodNumber;
    index_codec: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IlmForceMergeAction = z.infer<typeof IlmForceMergeAction>;
export declare const IlmMigrateAction: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IlmMigrateAction = z.infer<typeof IlmMigrateAction>;
export declare const IlmRolloverAction: z.ZodObject<{
    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_docs: z.ZodOptional<z.ZodNumber>;
    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    min_docs: z.ZodOptional<z.ZodNumber>;
    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type IlmRolloverAction = z.infer<typeof IlmRolloverAction>;
export declare const IlmSetPriorityAction: z.ZodObject<{
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type IlmSetPriorityAction = z.infer<typeof IlmSetPriorityAction>;
export declare const IlmSearchableSnapshotAction: z.ZodObject<{
    snapshot_repository: z.ZodString;
    force_merge_index: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IlmSearchableSnapshotAction = z.infer<typeof IlmSearchableSnapshotAction>;
export declare const IlmShrinkAction: z.ZodObject<{
    number_of_shards: z.ZodOptional<z.ZodNumber>;
    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IlmShrinkAction = z.infer<typeof IlmShrinkAction>;
export declare const IlmWaitForSnapshotAction: z.ZodObject<{
    policy: z.ZodString;
}, z.core.$strip>;
export type IlmWaitForSnapshotAction = z.infer<typeof IlmWaitForSnapshotAction>;
export declare const IlmActions: z.ZodObject<{
    allocate: z.ZodOptional<z.ZodObject<{
        number_of_replicas: z.ZodOptional<z.ZodNumber>;
        total_shards_per_node: z.ZodOptional<z.ZodNumber>;
        include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
    delete: z.ZodOptional<z.ZodObject<{
        delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    downsample: z.ZodOptional<z.ZodObject<{
        fixed_interval: z.ZodString;
        wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    forcemerge: z.ZodOptional<z.ZodObject<{
        max_num_segments: z.ZodNumber;
        index_codec: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    migrate: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    rollover: z.ZodOptional<z.ZodObject<{
        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_docs: z.ZodOptional<z.ZodNumber>;
        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        min_docs: z.ZodOptional<z.ZodNumber>;
        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    set_priority: z.ZodOptional<z.ZodObject<{
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    searchable_snapshot: z.ZodOptional<z.ZodObject<{
        snapshot_repository: z.ZodString;
        force_merge_index: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    shrink: z.ZodOptional<z.ZodObject<{
        number_of_shards: z.ZodOptional<z.ZodNumber>;
        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    wait_for_snapshot: z.ZodOptional<z.ZodObject<{
        policy: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IlmActions = z.infer<typeof IlmActions>;
export declare const IlmPhase: z.ZodObject<{
    actions: z.ZodOptional<z.ZodObject<{
        allocate: z.ZodOptional<z.ZodObject<{
            number_of_replicas: z.ZodOptional<z.ZodNumber>;
            total_shards_per_node: z.ZodOptional<z.ZodNumber>;
            include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>;
        delete: z.ZodOptional<z.ZodObject<{
            delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        downsample: z.ZodOptional<z.ZodObject<{
            fixed_interval: z.ZodString;
            wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        forcemerge: z.ZodOptional<z.ZodObject<{
            max_num_segments: z.ZodNumber;
            index_codec: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        migrate: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rollover: z.ZodOptional<z.ZodObject<{
            max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_docs: z.ZodOptional<z.ZodNumber>;
            max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            min_docs: z.ZodOptional<z.ZodNumber>;
            min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        set_priority: z.ZodOptional<z.ZodObject<{
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        searchable_snapshot: z.ZodOptional<z.ZodObject<{
            snapshot_repository: z.ZodString;
            force_merge_index: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        shrink: z.ZodOptional<z.ZodObject<{
            number_of_shards: z.ZodOptional<z.ZodNumber>;
            max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        wait_for_snapshot: z.ZodOptional<z.ZodObject<{
            policy: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IlmPhase = z.infer<typeof IlmPhase>;
export declare const IlmPhases: z.ZodObject<{
    cold: z.ZodOptional<z.ZodObject<{
        actions: z.ZodOptional<z.ZodObject<{
            allocate: z.ZodOptional<z.ZodObject<{
                number_of_replicas: z.ZodOptional<z.ZodNumber>;
                total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            downsample: z.ZodOptional<z.ZodObject<{
                fixed_interval: z.ZodString;
                wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            forcemerge: z.ZodOptional<z.ZodObject<{
                max_num_segments: z.ZodNumber;
                index_codec: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            migrate: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rollover: z.ZodOptional<z.ZodObject<{
                max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                max_docs: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                min_docs: z.ZodOptional<z.ZodNumber>;
                min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            set_priority: z.ZodOptional<z.ZodObject<{
                priority: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            searchable_snapshot: z.ZodOptional<z.ZodObject<{
                snapshot_repository: z.ZodString;
                force_merge_index: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            shrink: z.ZodOptional<z.ZodObject<{
                number_of_shards: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                policy: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    delete: z.ZodOptional<z.ZodObject<{
        actions: z.ZodOptional<z.ZodObject<{
            allocate: z.ZodOptional<z.ZodObject<{
                number_of_replicas: z.ZodOptional<z.ZodNumber>;
                total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            downsample: z.ZodOptional<z.ZodObject<{
                fixed_interval: z.ZodString;
                wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            forcemerge: z.ZodOptional<z.ZodObject<{
                max_num_segments: z.ZodNumber;
                index_codec: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            migrate: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rollover: z.ZodOptional<z.ZodObject<{
                max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                max_docs: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                min_docs: z.ZodOptional<z.ZodNumber>;
                min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            set_priority: z.ZodOptional<z.ZodObject<{
                priority: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            searchable_snapshot: z.ZodOptional<z.ZodObject<{
                snapshot_repository: z.ZodString;
                force_merge_index: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            shrink: z.ZodOptional<z.ZodObject<{
                number_of_shards: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                policy: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    frozen: z.ZodOptional<z.ZodObject<{
        actions: z.ZodOptional<z.ZodObject<{
            allocate: z.ZodOptional<z.ZodObject<{
                number_of_replicas: z.ZodOptional<z.ZodNumber>;
                total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            downsample: z.ZodOptional<z.ZodObject<{
                fixed_interval: z.ZodString;
                wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            forcemerge: z.ZodOptional<z.ZodObject<{
                max_num_segments: z.ZodNumber;
                index_codec: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            migrate: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rollover: z.ZodOptional<z.ZodObject<{
                max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                max_docs: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                min_docs: z.ZodOptional<z.ZodNumber>;
                min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            set_priority: z.ZodOptional<z.ZodObject<{
                priority: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            searchable_snapshot: z.ZodOptional<z.ZodObject<{
                snapshot_repository: z.ZodString;
                force_merge_index: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            shrink: z.ZodOptional<z.ZodObject<{
                number_of_shards: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                policy: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    hot: z.ZodOptional<z.ZodObject<{
        actions: z.ZodOptional<z.ZodObject<{
            allocate: z.ZodOptional<z.ZodObject<{
                number_of_replicas: z.ZodOptional<z.ZodNumber>;
                total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            downsample: z.ZodOptional<z.ZodObject<{
                fixed_interval: z.ZodString;
                wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            forcemerge: z.ZodOptional<z.ZodObject<{
                max_num_segments: z.ZodNumber;
                index_codec: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            migrate: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rollover: z.ZodOptional<z.ZodObject<{
                max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                max_docs: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                min_docs: z.ZodOptional<z.ZodNumber>;
                min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            set_priority: z.ZodOptional<z.ZodObject<{
                priority: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            searchable_snapshot: z.ZodOptional<z.ZodObject<{
                snapshot_repository: z.ZodString;
                force_merge_index: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            shrink: z.ZodOptional<z.ZodObject<{
                number_of_shards: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                policy: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    warm: z.ZodOptional<z.ZodObject<{
        actions: z.ZodOptional<z.ZodObject<{
            allocate: z.ZodOptional<z.ZodObject<{
                number_of_replicas: z.ZodOptional<z.ZodNumber>;
                total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            downsample: z.ZodOptional<z.ZodObject<{
                fixed_interval: z.ZodString;
                wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            forcemerge: z.ZodOptional<z.ZodObject<{
                max_num_segments: z.ZodNumber;
                index_codec: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            migrate: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rollover: z.ZodOptional<z.ZodObject<{
                max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                max_docs: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                min_docs: z.ZodOptional<z.ZodNumber>;
                min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            set_priority: z.ZodOptional<z.ZodObject<{
                priority: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            searchable_snapshot: z.ZodOptional<z.ZodObject<{
                snapshot_repository: z.ZodString;
                force_merge_index: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            shrink: z.ZodOptional<z.ZodObject<{
                number_of_shards: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                policy: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IlmPhases = z.infer<typeof IlmPhases>;
export declare const IlmPolicy: z.ZodObject<{
    phases: z.ZodObject<{
        cold: z.ZodOptional<z.ZodObject<{
            actions: z.ZodOptional<z.ZodObject<{
                allocate: z.ZodOptional<z.ZodObject<{
                    number_of_replicas: z.ZodOptional<z.ZodNumber>;
                    total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                    include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>;
                delete: z.ZodOptional<z.ZodObject<{
                    delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                downsample: z.ZodOptional<z.ZodObject<{
                    fixed_interval: z.ZodString;
                    wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                }, z.core.$strip>>;
                freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                forcemerge: z.ZodOptional<z.ZodObject<{
                    max_num_segments: z.ZodNumber;
                    index_codec: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                migrate: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rollover: z.ZodOptional<z.ZodObject<{
                    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    max_docs: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    min_docs: z.ZodOptional<z.ZodNumber>;
                    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                set_priority: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                searchable_snapshot: z.ZodOptional<z.ZodObject<{
                    snapshot_repository: z.ZodString;
                    force_merge_index: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                shrink: z.ZodOptional<z.ZodObject<{
                    number_of_shards: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        delete: z.ZodOptional<z.ZodObject<{
            actions: z.ZodOptional<z.ZodObject<{
                allocate: z.ZodOptional<z.ZodObject<{
                    number_of_replicas: z.ZodOptional<z.ZodNumber>;
                    total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                    include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>;
                delete: z.ZodOptional<z.ZodObject<{
                    delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                downsample: z.ZodOptional<z.ZodObject<{
                    fixed_interval: z.ZodString;
                    wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                }, z.core.$strip>>;
                freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                forcemerge: z.ZodOptional<z.ZodObject<{
                    max_num_segments: z.ZodNumber;
                    index_codec: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                migrate: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rollover: z.ZodOptional<z.ZodObject<{
                    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    max_docs: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    min_docs: z.ZodOptional<z.ZodNumber>;
                    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                set_priority: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                searchable_snapshot: z.ZodOptional<z.ZodObject<{
                    snapshot_repository: z.ZodString;
                    force_merge_index: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                shrink: z.ZodOptional<z.ZodObject<{
                    number_of_shards: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        frozen: z.ZodOptional<z.ZodObject<{
            actions: z.ZodOptional<z.ZodObject<{
                allocate: z.ZodOptional<z.ZodObject<{
                    number_of_replicas: z.ZodOptional<z.ZodNumber>;
                    total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                    include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>;
                delete: z.ZodOptional<z.ZodObject<{
                    delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                downsample: z.ZodOptional<z.ZodObject<{
                    fixed_interval: z.ZodString;
                    wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                }, z.core.$strip>>;
                freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                forcemerge: z.ZodOptional<z.ZodObject<{
                    max_num_segments: z.ZodNumber;
                    index_codec: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                migrate: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rollover: z.ZodOptional<z.ZodObject<{
                    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    max_docs: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    min_docs: z.ZodOptional<z.ZodNumber>;
                    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                set_priority: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                searchable_snapshot: z.ZodOptional<z.ZodObject<{
                    snapshot_repository: z.ZodString;
                    force_merge_index: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                shrink: z.ZodOptional<z.ZodObject<{
                    number_of_shards: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        hot: z.ZodOptional<z.ZodObject<{
            actions: z.ZodOptional<z.ZodObject<{
                allocate: z.ZodOptional<z.ZodObject<{
                    number_of_replicas: z.ZodOptional<z.ZodNumber>;
                    total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                    include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>;
                delete: z.ZodOptional<z.ZodObject<{
                    delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                downsample: z.ZodOptional<z.ZodObject<{
                    fixed_interval: z.ZodString;
                    wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                }, z.core.$strip>>;
                freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                forcemerge: z.ZodOptional<z.ZodObject<{
                    max_num_segments: z.ZodNumber;
                    index_codec: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                migrate: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rollover: z.ZodOptional<z.ZodObject<{
                    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    max_docs: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    min_docs: z.ZodOptional<z.ZodNumber>;
                    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                set_priority: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                searchable_snapshot: z.ZodOptional<z.ZodObject<{
                    snapshot_repository: z.ZodString;
                    force_merge_index: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                shrink: z.ZodOptional<z.ZodObject<{
                    number_of_shards: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        warm: z.ZodOptional<z.ZodObject<{
            actions: z.ZodOptional<z.ZodObject<{
                allocate: z.ZodOptional<z.ZodObject<{
                    number_of_replicas: z.ZodOptional<z.ZodNumber>;
                    total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                    include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>;
                delete: z.ZodOptional<z.ZodObject<{
                    delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                downsample: z.ZodOptional<z.ZodObject<{
                    fixed_interval: z.ZodString;
                    wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                }, z.core.$strip>>;
                freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                forcemerge: z.ZodOptional<z.ZodObject<{
                    max_num_segments: z.ZodNumber;
                    index_codec: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                migrate: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rollover: z.ZodOptional<z.ZodObject<{
                    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    max_docs: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    min_docs: z.ZodOptional<z.ZodNumber>;
                    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                set_priority: z.ZodOptional<z.ZodObject<{
                    priority: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                searchable_snapshot: z.ZodOptional<z.ZodObject<{
                    snapshot_repository: z.ZodString;
                    force_merge_index: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                shrink: z.ZodOptional<z.ZodObject<{
                    number_of_shards: z.ZodOptional<z.ZodNumber>;
                    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                    policy: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type IlmPolicy = z.infer<typeof IlmPolicy>;
/**
 * Create or update a lifecycle policy.
 *
 * If the specified policy exists, it is replaced and the policy version is incremented.
 *
 * NOTE: Only the latest version of the policy is stored, you cannot revert to previous versions.
 */
export declare const IlmPutLifecycleRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    policy: z.ZodOptional<z.ZodObject<{
        phases: z.ZodObject<{
            cold: z.ZodOptional<z.ZodObject<{
                actions: z.ZodOptional<z.ZodObject<{
                    allocate: z.ZodOptional<z.ZodObject<{
                        number_of_replicas: z.ZodOptional<z.ZodNumber>;
                        total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                        include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, z.core.$strip>>;
                    delete: z.ZodOptional<z.ZodObject<{
                        delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    downsample: z.ZodOptional<z.ZodObject<{
                        fixed_interval: z.ZodString;
                        wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    }, z.core.$strip>>;
                    freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    forcemerge: z.ZodOptional<z.ZodObject<{
                        max_num_segments: z.ZodNumber;
                        index_codec: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    migrate: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rollover: z.ZodOptional<z.ZodObject<{
                        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        max_docs: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        min_docs: z.ZodOptional<z.ZodNumber>;
                        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    set_priority: z.ZodOptional<z.ZodObject<{
                        priority: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    searchable_snapshot: z.ZodOptional<z.ZodObject<{
                        snapshot_repository: z.ZodString;
                        force_merge_index: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    shrink: z.ZodOptional<z.ZodObject<{
                        number_of_shards: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                        policy: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                actions: z.ZodOptional<z.ZodObject<{
                    allocate: z.ZodOptional<z.ZodObject<{
                        number_of_replicas: z.ZodOptional<z.ZodNumber>;
                        total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                        include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, z.core.$strip>>;
                    delete: z.ZodOptional<z.ZodObject<{
                        delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    downsample: z.ZodOptional<z.ZodObject<{
                        fixed_interval: z.ZodString;
                        wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    }, z.core.$strip>>;
                    freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    forcemerge: z.ZodOptional<z.ZodObject<{
                        max_num_segments: z.ZodNumber;
                        index_codec: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    migrate: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rollover: z.ZodOptional<z.ZodObject<{
                        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        max_docs: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        min_docs: z.ZodOptional<z.ZodNumber>;
                        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    set_priority: z.ZodOptional<z.ZodObject<{
                        priority: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    searchable_snapshot: z.ZodOptional<z.ZodObject<{
                        snapshot_repository: z.ZodString;
                        force_merge_index: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    shrink: z.ZodOptional<z.ZodObject<{
                        number_of_shards: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                        policy: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            frozen: z.ZodOptional<z.ZodObject<{
                actions: z.ZodOptional<z.ZodObject<{
                    allocate: z.ZodOptional<z.ZodObject<{
                        number_of_replicas: z.ZodOptional<z.ZodNumber>;
                        total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                        include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, z.core.$strip>>;
                    delete: z.ZodOptional<z.ZodObject<{
                        delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    downsample: z.ZodOptional<z.ZodObject<{
                        fixed_interval: z.ZodString;
                        wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    }, z.core.$strip>>;
                    freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    forcemerge: z.ZodOptional<z.ZodObject<{
                        max_num_segments: z.ZodNumber;
                        index_codec: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    migrate: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rollover: z.ZodOptional<z.ZodObject<{
                        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        max_docs: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        min_docs: z.ZodOptional<z.ZodNumber>;
                        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    set_priority: z.ZodOptional<z.ZodObject<{
                        priority: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    searchable_snapshot: z.ZodOptional<z.ZodObject<{
                        snapshot_repository: z.ZodString;
                        force_merge_index: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    shrink: z.ZodOptional<z.ZodObject<{
                        number_of_shards: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                        policy: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            hot: z.ZodOptional<z.ZodObject<{
                actions: z.ZodOptional<z.ZodObject<{
                    allocate: z.ZodOptional<z.ZodObject<{
                        number_of_replicas: z.ZodOptional<z.ZodNumber>;
                        total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                        include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, z.core.$strip>>;
                    delete: z.ZodOptional<z.ZodObject<{
                        delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    downsample: z.ZodOptional<z.ZodObject<{
                        fixed_interval: z.ZodString;
                        wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    }, z.core.$strip>>;
                    freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    forcemerge: z.ZodOptional<z.ZodObject<{
                        max_num_segments: z.ZodNumber;
                        index_codec: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    migrate: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rollover: z.ZodOptional<z.ZodObject<{
                        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        max_docs: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        min_docs: z.ZodOptional<z.ZodNumber>;
                        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    set_priority: z.ZodOptional<z.ZodObject<{
                        priority: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    searchable_snapshot: z.ZodOptional<z.ZodObject<{
                        snapshot_repository: z.ZodString;
                        force_merge_index: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    shrink: z.ZodOptional<z.ZodObject<{
                        number_of_shards: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                        policy: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
            warm: z.ZodOptional<z.ZodObject<{
                actions: z.ZodOptional<z.ZodObject<{
                    allocate: z.ZodOptional<z.ZodObject<{
                        number_of_replicas: z.ZodOptional<z.ZodNumber>;
                        total_shards_per_node: z.ZodOptional<z.ZodNumber>;
                        include: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        exclude: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                        require: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, z.core.$strip>>;
                    delete: z.ZodOptional<z.ZodObject<{
                        delete_searchable_snapshot: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    downsample: z.ZodOptional<z.ZodObject<{
                        fixed_interval: z.ZodString;
                        wait_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    }, z.core.$strip>>;
                    freeze: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    forcemerge: z.ZodOptional<z.ZodObject<{
                        max_num_segments: z.ZodNumber;
                        index_codec: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    migrate: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    readonly: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rollover: z.ZodOptional<z.ZodObject<{
                        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        max_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        max_docs: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        min_docs: z.ZodOptional<z.ZodNumber>;
                        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    set_priority: z.ZodOptional<z.ZodObject<{
                        priority: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    searchable_snapshot: z.ZodOptional<z.ZodObject<{
                        snapshot_repository: z.ZodString;
                        force_merge_index: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    shrink: z.ZodOptional<z.ZodObject<{
                        number_of_shards: z.ZodOptional<z.ZodNumber>;
                        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                        allow_write_after_shrink: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    unfollow: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    wait_for_snapshot: z.ZodOptional<z.ZodObject<{
                        policy: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        _meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IlmPutLifecycleRequest = z.infer<typeof IlmPutLifecycleRequest>;
export declare const IlmPutLifecycleResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IlmPutLifecycleResponse = z.infer<typeof IlmPutLifecycleResponse>;
//# sourceMappingURL=ilm_put_lifecycle.d.ts.map