import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const WatcherAcknowledgementOptions: z.ZodEnum<{
    awaits_successful_execution: "awaits_successful_execution";
    ackable: "ackable";
    acked: "acked";
}>;
export type WatcherAcknowledgementOptions = z.infer<typeof WatcherAcknowledgementOptions>;
export declare const WatcherAcknowledgeState: z.ZodObject<{
    state: z.ZodEnum<{
        awaits_successful_execution: "awaits_successful_execution";
        ackable: "ackable";
        acked: "acked";
    }>;
    timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
}, z.core.$strip>;
export type WatcherAcknowledgeState = z.infer<typeof WatcherAcknowledgeState>;
export declare const WatcherExecutionState: z.ZodObject<{
    successful: z.ZodBoolean;
    timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WatcherExecutionState = z.infer<typeof WatcherExecutionState>;
export declare const WatcherThrottleState: z.ZodObject<{
    reason: z.ZodString;
    timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
}, z.core.$strip>;
export type WatcherThrottleState = z.infer<typeof WatcherThrottleState>;
export declare const WatcherActionStatus: z.ZodObject<{
    ack: z.ZodObject<{
        state: z.ZodEnum<{
            awaits_successful_execution: "awaits_successful_execution";
            ackable: "ackable";
            acked: "acked";
        }>;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>;
    last_execution: z.ZodOptional<z.ZodObject<{
        successful: z.ZodBoolean;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        reason: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    last_successful_execution: z.ZodOptional<z.ZodObject<{
        successful: z.ZodBoolean;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        reason: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    last_throttle: z.ZodOptional<z.ZodObject<{
        reason: z.ZodString;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type WatcherActionStatus = z.infer<typeof WatcherActionStatus>;
export declare const WatcherActions: z.ZodRecord<z.ZodString, z.ZodObject<{
    ack: z.ZodObject<{
        state: z.ZodEnum<{
            awaits_successful_execution: "awaits_successful_execution";
            ackable: "ackable";
            acked: "acked";
        }>;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>;
    last_execution: z.ZodOptional<z.ZodObject<{
        successful: z.ZodBoolean;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        reason: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    last_successful_execution: z.ZodOptional<z.ZodObject<{
        successful: z.ZodBoolean;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        reason: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    last_throttle: z.ZodOptional<z.ZodObject<{
        reason: z.ZodString;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type WatcherActions = z.infer<typeof WatcherActions>;
export declare const WatcherActivationState: z.ZodObject<{
    active: z.ZodBoolean;
    timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
}, z.core.$strip>;
export type WatcherActivationState = z.infer<typeof WatcherActivationState>;
export declare const WatcherWatchStatus: z.ZodObject<{
    actions: z.ZodRecord<z.ZodString, z.ZodObject<{
        ack: z.ZodObject<{
            state: z.ZodEnum<{
                awaits_successful_execution: "awaits_successful_execution";
                ackable: "ackable";
                acked: "acked";
            }>;
            timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        }, z.core.$strip>;
        last_execution: z.ZodOptional<z.ZodObject<{
            successful: z.ZodBoolean;
            timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
            reason: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        last_successful_execution: z.ZodOptional<z.ZodObject<{
            successful: z.ZodBoolean;
            timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
            reason: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        last_throttle: z.ZodOptional<z.ZodObject<{
            reason: z.ZodString;
            timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    last_checked: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    last_met_condition: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    state: z.ZodObject<{
        active: z.ZodBoolean;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>;
    version: z.ZodNumber;
    execution_state: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WatcherWatchStatus = z.infer<typeof WatcherWatchStatus>;
/**
 * Acknowledge a watch.
 *
 * Acknowledging a watch enables you to manually throttle the execution of the watch's actions.
 *
 * The acknowledgement state of an action is stored in the `status.actions.<id>.ack.state` structure.
 *
 * IMPORTANT: If the specified watch is currently being executed, this API will return an error
 * The reason for this behavior is to prevent overwriting the watch status from a watch execution.
 *
 * Acknowledging an action throttles further executions of that action until its `ack.state` is reset to `awaits_successful_execution`.
 * This happens when the condition of the watch is not met (the condition evaluates to false).
 * To demonstrate how throttling works in practice and how it can be configured for individual actions within a watch, refer to External documentation.
 */
export declare const WatcherAckWatchRequest: z.ZodObject<{
    watch_id: z.ZodString;
    action_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type WatcherAckWatchRequest = z.infer<typeof WatcherAckWatchRequest>;
export declare const WatcherAckWatchResponse: z.ZodObject<{
    status: z.ZodObject<{
        actions: z.ZodRecord<z.ZodString, z.ZodObject<{
            ack: z.ZodObject<{
                state: z.ZodEnum<{
                    awaits_successful_execution: "awaits_successful_execution";
                    ackable: "ackable";
                    acked: "acked";
                }>;
                timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
            }, z.core.$strip>;
            last_execution: z.ZodOptional<z.ZodObject<{
                successful: z.ZodBoolean;
                timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
                reason: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            last_successful_execution: z.ZodOptional<z.ZodObject<{
                successful: z.ZodBoolean;
                timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
                reason: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            last_throttle: z.ZodOptional<z.ZodObject<{
                reason: z.ZodString;
                timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        last_checked: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        last_met_condition: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        state: z.ZodObject<{
            active: z.ZodBoolean;
            timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        }, z.core.$strip>;
        version: z.ZodNumber;
        execution_state: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type WatcherAckWatchResponse = z.infer<typeof WatcherAckWatchResponse>;
//# sourceMappingURL=watcher_ack_watch.d.ts.map