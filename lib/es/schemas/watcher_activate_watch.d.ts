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
export declare const WatcherActivationStatus: z.ZodObject<{
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
    state: z.ZodObject<{
        active: z.ZodBoolean;
        timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>;
    version: z.ZodNumber;
}, z.core.$strip>;
export type WatcherActivationStatus = z.infer<typeof WatcherActivationStatus>;
/**
 * Activate a watch.
 *
 * A watch can be either active or inactive.
 */
export declare const WatcherActivateWatchRequest: z.ZodObject<{
    watch_id: z.ZodString;
}, z.core.$strip>;
export type WatcherActivateWatchRequest = z.infer<typeof WatcherActivateWatchRequest>;
export declare const WatcherActivateWatchResponse: z.ZodObject<{
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
        state: z.ZodObject<{
            active: z.ZodBoolean;
            timestamp: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        }, z.core.$strip>;
        version: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type WatcherActivateWatchResponse = z.infer<typeof WatcherActivateWatchResponse>;
//# sourceMappingURL=watcher_activate_watch.d.ts.map