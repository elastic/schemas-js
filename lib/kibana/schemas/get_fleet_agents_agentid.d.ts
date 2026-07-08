import { z } from 'zod';
export declare const GetFleetAgentsAgentidResponse: z.ZodObject<{
    item: z.ZodObject<{
        access_api_key: z.ZodOptional<z.ZodString>;
        access_api_key_id: z.ZodOptional<z.ZodString>;
        active: z.ZodBoolean;
        agent: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
            version: z.ZodString;
        }, z.core.$loose>>;
        audit_unenrolled_reason: z.ZodOptional<z.ZodString>;
        capabilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            message: z.ZodString;
            status: z.ZodEnum<{
                FAILED: "FAILED";
                HEALTHY: "HEALTHY";
                STARTING: "STARTING";
                CONFIGURING: "CONFIGURING";
                DEGRADED: "DEGRADED";
                STOPPING: "STOPPING";
                STOPPED: "STOPPED";
            }>;
            type: z.ZodString;
            units: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                message: z.ZodString;
                payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
                status: z.ZodEnum<{
                    FAILED: "FAILED";
                    HEALTHY: "HEALTHY";
                    STARTING: "STARTING";
                    CONFIGURING: "CONFIGURING";
                    DEGRADED: "DEGRADED";
                    STOPPING: "STOPPING";
                    STOPPED: "STOPPED";
                }>;
                type: z.ZodEnum<{
                    "": "";
                    input: "input";
                    output: "output";
                }>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        default_api_key: z.ZodOptional<z.ZodString>;
        default_api_key_history: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            retired_at: z.ZodString;
        }, z.core.$strip>>>;
        default_api_key_id: z.ZodOptional<z.ZodString>;
        effective_config: z.ZodNullable<z.ZodUnknown>;
        enrolled_at: z.ZodString;
        health: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        id: z.ZodString;
        identifying_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        last_checkin: z.ZodOptional<z.ZodString>;
        last_checkin_message: z.ZodOptional<z.ZodString>;
        last_checkin_status: z.ZodOptional<z.ZodEnum<{
            error: "error";
            starting: "starting";
            updating: "updating";
            online: "online";
            degraded: "degraded";
            disconnected: "disconnected";
        }>>;
        last_known_status: z.ZodOptional<z.ZodEnum<{
            error: "error";
            orphaned: "orphaned";
            updating: "updating";
            inactive: "inactive";
            offline: "offline";
            online: "online";
            unenrolled: "unenrolled";
            uninstalled: "uninstalled";
            degraded: "degraded";
            enrolling: "enrolling";
            unenrolling: "unenrolling";
        }>>;
        local_metadata: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        metrics: z.ZodOptional<z.ZodObject<{
            cpu_avg: z.ZodOptional<z.ZodNumber>;
            memory_size_byte_avg: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        non_identifying_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            api_key_id: z.ZodOptional<z.ZodString>;
            to_retire_api_key_ids: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                retired_at: z.ZodString;
            }, z.core.$strip>>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        packages: z.ZodArray<z.ZodString>;
        pipeline_config: z.ZodOptional<z.ZodString>;
        policy_id: z.ZodOptional<z.ZodString>;
        policy_revision: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sequence_num: z.ZodOptional<z.ZodNumber>;
        signals: z.ZodOptional<z.ZodArray<z.ZodString>>;
        sort: z.ZodOptional<z.ZodArray<z.ZodNullable<z.ZodUnknown>>>;
        status: z.ZodOptional<z.ZodEnum<{
            error: "error";
            orphaned: "orphaned";
            updating: "updating";
            inactive: "inactive";
            offline: "offline";
            online: "online";
            unenrolled: "unenrolled";
            uninstalled: "uninstalled";
            degraded: "degraded";
            enrolling: "enrolling";
            unenrolling: "unenrolling";
        }>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type: z.ZodEnum<{
            PERMANENT: "PERMANENT";
            EPHEMERAL: "EPHEMERAL";
            TEMPORARY: "TEMPORARY";
            OPAMP: "OPAMP";
        }>;
        unenrolled_at: z.ZodOptional<z.ZodString>;
        unenrollment_started_at: z.ZodOptional<z.ZodString>;
        unhealthy_reason: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
            input: "input";
            output: "output";
            other: "other";
        }>>>>;
        upgrade: z.ZodOptional<z.ZodObject<{
            rollbacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                valid_until: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        upgrade_attempts: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        upgrade_details: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            action_id: z.ZodString;
            metadata: z.ZodOptional<z.ZodObject<{
                download_percent: z.ZodOptional<z.ZodNumber>;
                download_rate: z.ZodOptional<z.ZodNumber>;
                error_msg: z.ZodOptional<z.ZodString>;
                failed_state: z.ZodOptional<z.ZodEnum<{
                    UPG_REQUESTED: "UPG_REQUESTED";
                    UPG_SCHEDULED: "UPG_SCHEDULED";
                    UPG_DOWNLOADING: "UPG_DOWNLOADING";
                    UPG_EXTRACTING: "UPG_EXTRACTING";
                    UPG_REPLACING: "UPG_REPLACING";
                    UPG_RESTARTING: "UPG_RESTARTING";
                    UPG_FAILED: "UPG_FAILED";
                    UPG_WATCHING: "UPG_WATCHING";
                    UPG_ROLLBACK: "UPG_ROLLBACK";
                }>>;
                reason: z.ZodOptional<z.ZodString>;
                retry_error_msg: z.ZodOptional<z.ZodString>;
                retry_until: z.ZodOptional<z.ZodString>;
                scheduled_at: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            state: z.ZodEnum<{
                UPG_REQUESTED: "UPG_REQUESTED";
                UPG_SCHEDULED: "UPG_SCHEDULED";
                UPG_DOWNLOADING: "UPG_DOWNLOADING";
                UPG_EXTRACTING: "UPG_EXTRACTING";
                UPG_REPLACING: "UPG_REPLACING";
                UPG_RESTARTING: "UPG_RESTARTING";
                UPG_FAILED: "UPG_FAILED";
                UPG_WATCHING: "UPG_WATCHING";
                UPG_ROLLBACK: "UPG_ROLLBACK";
            }>;
            target_version: z.ZodString;
        }, z.core.$strip>>>;
        upgrade_started_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        upgraded_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        user_provided_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetAgentsAgentidResponse = z.infer<typeof GetFleetAgentsAgentidResponse>;
//# sourceMappingURL=get_fleet_agents_agentid.d.ts.map