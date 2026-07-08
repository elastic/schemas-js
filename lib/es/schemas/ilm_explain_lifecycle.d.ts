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
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export declare const DurationLarge: z.ZodString;
export type DurationLarge = z.infer<typeof DurationLarge>;
/** For empty Class assignments */
export declare const EmptyObject: z.ZodObject<{}, z.core.$strip>;
export type EmptyObject = z.infer<typeof EmptyObject>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
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
export declare const IlmExplainLifecycleLifecycleExplainPhaseExecution: z.ZodObject<{
    phase_definition: z.ZodOptional<z.ZodObject<{
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
    policy: z.ZodString;
    version: z.ZodNumber;
    modified_date_in_millis: z.ZodAny;
}, z.core.$strip>;
export type IlmExplainLifecycleLifecycleExplainPhaseExecution = z.infer<typeof IlmExplainLifecycleLifecycleExplainPhaseExecution>;
export declare const IlmExplainLifecycleLifecycleExplainManaged: z.ZodObject<{
    action: z.ZodOptional<z.ZodString>;
    action_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    action_time_millis: z.ZodOptional<z.ZodAny>;
    age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    failed_step: z.ZodOptional<z.ZodString>;
    failed_step_retry_count: z.ZodOptional<z.ZodNumber>;
    index: z.ZodString;
    index_creation_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    index_creation_date_millis: z.ZodOptional<z.ZodAny>;
    is_auto_retryable_error: z.ZodOptional<z.ZodBoolean>;
    lifecycle_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    lifecycle_date_millis: z.ZodOptional<z.ZodAny>;
    managed: z.ZodLiteral<true>;
    phase: z.ZodOptional<z.ZodString>;
    phase_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    phase_time_millis: z.ZodOptional<z.ZodAny>;
    policy: z.ZodOptional<z.ZodString>;
    previous_step_info: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    repository_name: z.ZodOptional<z.ZodString>;
    snapshot_name: z.ZodOptional<z.ZodString>;
    shrink_index_name: z.ZodOptional<z.ZodString>;
    step: z.ZodOptional<z.ZodString>;
    step_info: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    step_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    step_time_millis: z.ZodOptional<z.ZodAny>;
    phase_execution: z.ZodOptional<z.ZodObject<{
        phase_definition: z.ZodOptional<z.ZodObject<{
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
        policy: z.ZodString;
        version: z.ZodNumber;
        modified_date_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    time_since_index_creation: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    skip: z.ZodBoolean;
}, z.core.$strip>;
export type IlmExplainLifecycleLifecycleExplainManaged = z.infer<typeof IlmExplainLifecycleLifecycleExplainManaged>;
export declare const IlmExplainLifecycleLifecycleExplainUnmanaged: z.ZodObject<{
    index: z.ZodString;
    managed: z.ZodLiteral<false>;
}, z.core.$strip>;
export type IlmExplainLifecycleLifecycleExplainUnmanaged = z.infer<typeof IlmExplainLifecycleLifecycleExplainUnmanaged>;
export declare const IlmExplainLifecycleLifecycleExplain: z.ZodUnion<readonly [z.ZodObject<{
    action: z.ZodOptional<z.ZodString>;
    action_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    action_time_millis: z.ZodOptional<z.ZodAny>;
    age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    failed_step: z.ZodOptional<z.ZodString>;
    failed_step_retry_count: z.ZodOptional<z.ZodNumber>;
    index: z.ZodString;
    index_creation_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    index_creation_date_millis: z.ZodOptional<z.ZodAny>;
    is_auto_retryable_error: z.ZodOptional<z.ZodBoolean>;
    lifecycle_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    lifecycle_date_millis: z.ZodOptional<z.ZodAny>;
    managed: z.ZodLiteral<true>;
    phase: z.ZodOptional<z.ZodString>;
    phase_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    phase_time_millis: z.ZodOptional<z.ZodAny>;
    policy: z.ZodOptional<z.ZodString>;
    previous_step_info: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    repository_name: z.ZodOptional<z.ZodString>;
    snapshot_name: z.ZodOptional<z.ZodString>;
    shrink_index_name: z.ZodOptional<z.ZodString>;
    step: z.ZodOptional<z.ZodString>;
    step_info: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    step_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    step_time_millis: z.ZodOptional<z.ZodAny>;
    phase_execution: z.ZodOptional<z.ZodObject<{
        phase_definition: z.ZodOptional<z.ZodObject<{
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
        policy: z.ZodString;
        version: z.ZodNumber;
        modified_date_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    time_since_index_creation: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    skip: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    index: z.ZodString;
    managed: z.ZodLiteral<false>;
}, z.core.$strip>]>;
export type IlmExplainLifecycleLifecycleExplain = z.infer<typeof IlmExplainLifecycleLifecycleExplain>;
/**
 * Explain the lifecycle state.
 *
 * Get the current lifecycle status for one or more indices.
 * For data streams, the API retrieves the current lifecycle status for the stream's backing indices.
 *
 * The response indicates when the index entered each lifecycle state, provides the definition of the running phase, and information about any failures.
 */
export declare const IlmExplainLifecycleRequest: z.ZodObject<{
    index: z.ZodString;
    only_errors: z.ZodOptional<z.ZodBoolean>;
    only_managed: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IlmExplainLifecycleRequest = z.infer<typeof IlmExplainLifecycleRequest>;
export declare const IlmExplainLifecycleResponse: z.ZodObject<{
    indices: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        action: z.ZodOptional<z.ZodString>;
        action_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        action_time_millis: z.ZodOptional<z.ZodAny>;
        age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        failed_step: z.ZodOptional<z.ZodString>;
        failed_step_retry_count: z.ZodOptional<z.ZodNumber>;
        index: z.ZodString;
        index_creation_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        index_creation_date_millis: z.ZodOptional<z.ZodAny>;
        is_auto_retryable_error: z.ZodOptional<z.ZodBoolean>;
        lifecycle_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        lifecycle_date_millis: z.ZodOptional<z.ZodAny>;
        managed: z.ZodLiteral<true>;
        phase: z.ZodOptional<z.ZodString>;
        phase_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        phase_time_millis: z.ZodOptional<z.ZodAny>;
        policy: z.ZodOptional<z.ZodString>;
        previous_step_info: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        repository_name: z.ZodOptional<z.ZodString>;
        snapshot_name: z.ZodOptional<z.ZodString>;
        shrink_index_name: z.ZodOptional<z.ZodString>;
        step: z.ZodOptional<z.ZodString>;
        step_info: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        step_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        step_time_millis: z.ZodOptional<z.ZodAny>;
        phase_execution: z.ZodOptional<z.ZodObject<{
            phase_definition: z.ZodOptional<z.ZodObject<{
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
            policy: z.ZodString;
            version: z.ZodNumber;
            modified_date_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        time_since_index_creation: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        skip: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        index: z.ZodString;
        managed: z.ZodLiteral<false>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type IlmExplainLifecycleResponse = z.infer<typeof IlmExplainLifecycleResponse>;
//# sourceMappingURL=ilm_explain_lifecycle.d.ts.map