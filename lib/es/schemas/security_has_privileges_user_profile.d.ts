import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SecurityClusterPrivilege: z.ZodUnion<readonly [z.ZodEnum<{
    all: "all";
    none: "none";
    cancel_task: "cancel_task";
    create_snapshot: "create_snapshot";
    cross_cluster_replication: "cross_cluster_replication";
    cross_cluster_search: "cross_cluster_search";
    delegate_pki: "delegate_pki";
    grant_api_key: "grant_api_key";
    manage: "manage";
    manage_api_key: "manage_api_key";
    manage_autoscaling: "manage_autoscaling";
    manage_behavioral_analytics: "manage_behavioral_analytics";
    manage_ccr: "manage_ccr";
    manage_data_frame_transforms: "manage_data_frame_transforms";
    manage_data_stream_global_retention: "manage_data_stream_global_retention";
    manage_enrich: "manage_enrich";
    manage_esql: "manage_esql";
    manage_ilm: "manage_ilm";
    manage_index_templates: "manage_index_templates";
    manage_inference: "manage_inference";
    manage_ingest_pipelines: "manage_ingest_pipelines";
    manage_logstash_pipelines: "manage_logstash_pipelines";
    manage_ml: "manage_ml";
    manage_oidc: "manage_oidc";
    manage_own_api_key: "manage_own_api_key";
    manage_pipeline: "manage_pipeline";
    manage_reindex: "manage_reindex";
    manage_rollup: "manage_rollup";
    manage_saml: "manage_saml";
    manage_search_application: "manage_search_application";
    manage_search_query_rules: "manage_search_query_rules";
    manage_search_synonyms: "manage_search_synonyms";
    manage_security: "manage_security";
    manage_service_account: "manage_service_account";
    manage_slm: "manage_slm";
    manage_token: "manage_token";
    manage_transform: "manage_transform";
    manage_user_profile: "manage_user_profile";
    manage_watcher: "manage_watcher";
    monitor: "monitor";
    monitor_data_frame_transforms: "monitor_data_frame_transforms";
    monitor_data_stream_global_retention: "monitor_data_stream_global_retention";
    monitor_enrich: "monitor_enrich";
    monitor_esql: "monitor_esql";
    monitor_inference: "monitor_inference";
    monitor_ml: "monitor_ml";
    monitor_reindex: "monitor_reindex";
    monitor_rollup: "monitor_rollup";
    monitor_snapshot: "monitor_snapshot";
    monitor_stats: "monitor_stats";
    monitor_text_structure: "monitor_text_structure";
    monitor_transform: "monitor_transform";
    monitor_watcher: "monitor_watcher";
    post_behavioral_analytics_event: "post_behavioral_analytics_event";
    read_ccr: "read_ccr";
    read_fleet_secrets: "read_fleet_secrets";
    read_ilm: "read_ilm";
    read_pipeline: "read_pipeline";
    read_security: "read_security";
    read_slm: "read_slm";
    transport_client: "transport_client";
    write_connector_secrets: "write_connector_secrets";
    write_fleet_secrets: "write_fleet_secrets";
    read_project_routing: "read_project_routing";
    manage_project_routing: "manage_project_routing";
}>, z.ZodString]>;
export type SecurityClusterPrivilege = z.infer<typeof SecurityClusterPrivilege>;
export declare const SecurityIndexPrivilege: z.ZodUnion<readonly [z.ZodEnum<{
    delete: "delete";
    create: "create";
    index: "index";
    all: "all";
    none: "none";
    read: "read";
    write: "write";
    cross_cluster_replication: "cross_cluster_replication";
    manage: "manage";
    manage_ilm: "manage_ilm";
    monitor: "monitor";
    auto_configure: "auto_configure";
    create_doc: "create_doc";
    create_index: "create_index";
    create_view: "create_view";
    cross_cluster_replication_internal: "cross_cluster_replication_internal";
    delete_index: "delete_index";
    delete_view: "delete_view";
    maintenance: "maintenance";
    manage_data_stream_lifecycle: "manage_data_stream_lifecycle";
    manage_follow_index: "manage_follow_index";
    manage_leader_index: "manage_leader_index";
    manage_view: "manage_view";
    read_cross_cluster: "read_cross_cluster";
    read_view_metadata: "read_view_metadata";
    view_index_metadata: "view_index_metadata";
}>, z.ZodString]>;
export type SecurityIndexPrivilege = z.infer<typeof SecurityIndexPrivilege>;
export declare const SecurityUserProfileId: z.ZodString;
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>;
export declare const SecurityHasPrivilegesApplicationPrivilegesCheck: z.ZodObject<{
    application: z.ZodString;
    privileges: z.ZodArray<z.ZodString>;
    resources: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SecurityHasPrivilegesApplicationPrivilegesCheck = z.infer<typeof SecurityHasPrivilegesApplicationPrivilegesCheck>;
export declare const SecurityHasPrivilegesIndexPrivilegesCheck: z.ZodObject<{
    names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    privileges: z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        delete: "delete";
        create: "create";
        index: "index";
        all: "all";
        none: "none";
        read: "read";
        write: "write";
        cross_cluster_replication: "cross_cluster_replication";
        manage: "manage";
        manage_ilm: "manage_ilm";
        monitor: "monitor";
        auto_configure: "auto_configure";
        create_doc: "create_doc";
        create_index: "create_index";
        create_view: "create_view";
        cross_cluster_replication_internal: "cross_cluster_replication_internal";
        delete_index: "delete_index";
        delete_view: "delete_view";
        maintenance: "maintenance";
        manage_data_stream_lifecycle: "manage_data_stream_lifecycle";
        manage_follow_index: "manage_follow_index";
        manage_leader_index: "manage_leader_index";
        manage_view: "manage_view";
        read_cross_cluster: "read_cross_cluster";
        read_view_metadata: "read_view_metadata";
        view_index_metadata: "view_index_metadata";
    }>, z.ZodString]>>;
    allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SecurityHasPrivilegesIndexPrivilegesCheck = z.infer<typeof SecurityHasPrivilegesIndexPrivilegesCheck>;
export declare const SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors: z.ZodObject<{
    count: z.ZodNumber;
    details: z.ZodRecord<z.ZodString, z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors = z.infer<typeof SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors>;
export declare const SecurityHasPrivilegesUserProfilePrivilegesCheck: z.ZodObject<{
    application: z.ZodOptional<z.ZodArray<z.ZodObject<{
        application: z.ZodString;
        privileges: z.ZodArray<z.ZodString>;
        resources: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    cluster: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        all: "all";
        none: "none";
        cancel_task: "cancel_task";
        create_snapshot: "create_snapshot";
        cross_cluster_replication: "cross_cluster_replication";
        cross_cluster_search: "cross_cluster_search";
        delegate_pki: "delegate_pki";
        grant_api_key: "grant_api_key";
        manage: "manage";
        manage_api_key: "manage_api_key";
        manage_autoscaling: "manage_autoscaling";
        manage_behavioral_analytics: "manage_behavioral_analytics";
        manage_ccr: "manage_ccr";
        manage_data_frame_transforms: "manage_data_frame_transforms";
        manage_data_stream_global_retention: "manage_data_stream_global_retention";
        manage_enrich: "manage_enrich";
        manage_esql: "manage_esql";
        manage_ilm: "manage_ilm";
        manage_index_templates: "manage_index_templates";
        manage_inference: "manage_inference";
        manage_ingest_pipelines: "manage_ingest_pipelines";
        manage_logstash_pipelines: "manage_logstash_pipelines";
        manage_ml: "manage_ml";
        manage_oidc: "manage_oidc";
        manage_own_api_key: "manage_own_api_key";
        manage_pipeline: "manage_pipeline";
        manage_reindex: "manage_reindex";
        manage_rollup: "manage_rollup";
        manage_saml: "manage_saml";
        manage_search_application: "manage_search_application";
        manage_search_query_rules: "manage_search_query_rules";
        manage_search_synonyms: "manage_search_synonyms";
        manage_security: "manage_security";
        manage_service_account: "manage_service_account";
        manage_slm: "manage_slm";
        manage_token: "manage_token";
        manage_transform: "manage_transform";
        manage_user_profile: "manage_user_profile";
        manage_watcher: "manage_watcher";
        monitor: "monitor";
        monitor_data_frame_transforms: "monitor_data_frame_transforms";
        monitor_data_stream_global_retention: "monitor_data_stream_global_retention";
        monitor_enrich: "monitor_enrich";
        monitor_esql: "monitor_esql";
        monitor_inference: "monitor_inference";
        monitor_ml: "monitor_ml";
        monitor_reindex: "monitor_reindex";
        monitor_rollup: "monitor_rollup";
        monitor_snapshot: "monitor_snapshot";
        monitor_stats: "monitor_stats";
        monitor_text_structure: "monitor_text_structure";
        monitor_transform: "monitor_transform";
        monitor_watcher: "monitor_watcher";
        post_behavioral_analytics_event: "post_behavioral_analytics_event";
        read_ccr: "read_ccr";
        read_fleet_secrets: "read_fleet_secrets";
        read_ilm: "read_ilm";
        read_pipeline: "read_pipeline";
        read_security: "read_security";
        read_slm: "read_slm";
        transport_client: "transport_client";
        write_connector_secrets: "write_connector_secrets";
        write_fleet_secrets: "write_fleet_secrets";
        read_project_routing: "read_project_routing";
        manage_project_routing: "manage_project_routing";
    }>, z.ZodString]>>>;
    index: z.ZodOptional<z.ZodArray<z.ZodObject<{
        names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        privileges: z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
            delete: "delete";
            create: "create";
            index: "index";
            all: "all";
            none: "none";
            read: "read";
            write: "write";
            cross_cluster_replication: "cross_cluster_replication";
            manage: "manage";
            manage_ilm: "manage_ilm";
            monitor: "monitor";
            auto_configure: "auto_configure";
            create_doc: "create_doc";
            create_index: "create_index";
            create_view: "create_view";
            cross_cluster_replication_internal: "cross_cluster_replication_internal";
            delete_index: "delete_index";
            delete_view: "delete_view";
            maintenance: "maintenance";
            manage_data_stream_lifecycle: "manage_data_stream_lifecycle";
            manage_follow_index: "manage_follow_index";
            manage_leader_index: "manage_leader_index";
            manage_view: "manage_view";
            read_cross_cluster: "read_cross_cluster";
            read_view_metadata: "read_view_metadata";
            view_index_metadata: "view_index_metadata";
        }>, z.ZodString]>>;
        allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SecurityHasPrivilegesUserProfilePrivilegesCheck = z.infer<typeof SecurityHasPrivilegesUserProfilePrivilegesCheck>;
/**
 * Check user profile privileges.
 *
 * Determine whether the users associated with the specified user profile IDs have all the requested privileges.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 */
export declare const SecurityHasPrivilegesUserProfileRequest: z.ZodObject<{
    uids: z.ZodArray<z.ZodString>;
    privileges: z.ZodObject<{
        application: z.ZodOptional<z.ZodArray<z.ZodObject<{
            application: z.ZodString;
            privileges: z.ZodArray<z.ZodString>;
            resources: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
            all: "all";
            none: "none";
            cancel_task: "cancel_task";
            create_snapshot: "create_snapshot";
            cross_cluster_replication: "cross_cluster_replication";
            cross_cluster_search: "cross_cluster_search";
            delegate_pki: "delegate_pki";
            grant_api_key: "grant_api_key";
            manage: "manage";
            manage_api_key: "manage_api_key";
            manage_autoscaling: "manage_autoscaling";
            manage_behavioral_analytics: "manage_behavioral_analytics";
            manage_ccr: "manage_ccr";
            manage_data_frame_transforms: "manage_data_frame_transforms";
            manage_data_stream_global_retention: "manage_data_stream_global_retention";
            manage_enrich: "manage_enrich";
            manage_esql: "manage_esql";
            manage_ilm: "manage_ilm";
            manage_index_templates: "manage_index_templates";
            manage_inference: "manage_inference";
            manage_ingest_pipelines: "manage_ingest_pipelines";
            manage_logstash_pipelines: "manage_logstash_pipelines";
            manage_ml: "manage_ml";
            manage_oidc: "manage_oidc";
            manage_own_api_key: "manage_own_api_key";
            manage_pipeline: "manage_pipeline";
            manage_reindex: "manage_reindex";
            manage_rollup: "manage_rollup";
            manage_saml: "manage_saml";
            manage_search_application: "manage_search_application";
            manage_search_query_rules: "manage_search_query_rules";
            manage_search_synonyms: "manage_search_synonyms";
            manage_security: "manage_security";
            manage_service_account: "manage_service_account";
            manage_slm: "manage_slm";
            manage_token: "manage_token";
            manage_transform: "manage_transform";
            manage_user_profile: "manage_user_profile";
            manage_watcher: "manage_watcher";
            monitor: "monitor";
            monitor_data_frame_transforms: "monitor_data_frame_transforms";
            monitor_data_stream_global_retention: "monitor_data_stream_global_retention";
            monitor_enrich: "monitor_enrich";
            monitor_esql: "monitor_esql";
            monitor_inference: "monitor_inference";
            monitor_ml: "monitor_ml";
            monitor_reindex: "monitor_reindex";
            monitor_rollup: "monitor_rollup";
            monitor_snapshot: "monitor_snapshot";
            monitor_stats: "monitor_stats";
            monitor_text_structure: "monitor_text_structure";
            monitor_transform: "monitor_transform";
            monitor_watcher: "monitor_watcher";
            post_behavioral_analytics_event: "post_behavioral_analytics_event";
            read_ccr: "read_ccr";
            read_fleet_secrets: "read_fleet_secrets";
            read_ilm: "read_ilm";
            read_pipeline: "read_pipeline";
            read_security: "read_security";
            read_slm: "read_slm";
            transport_client: "transport_client";
            write_connector_secrets: "write_connector_secrets";
            write_fleet_secrets: "write_fleet_secrets";
            read_project_routing: "read_project_routing";
            manage_project_routing: "manage_project_routing";
        }>, z.ZodString]>>>;
        index: z.ZodOptional<z.ZodArray<z.ZodObject<{
            names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
            privileges: z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
                delete: "delete";
                create: "create";
                index: "index";
                all: "all";
                none: "none";
                read: "read";
                write: "write";
                cross_cluster_replication: "cross_cluster_replication";
                manage: "manage";
                manage_ilm: "manage_ilm";
                monitor: "monitor";
                auto_configure: "auto_configure";
                create_doc: "create_doc";
                create_index: "create_index";
                create_view: "create_view";
                cross_cluster_replication_internal: "cross_cluster_replication_internal";
                delete_index: "delete_index";
                delete_view: "delete_view";
                maintenance: "maintenance";
                manage_data_stream_lifecycle: "manage_data_stream_lifecycle";
                manage_follow_index: "manage_follow_index";
                manage_leader_index: "manage_leader_index";
                manage_view: "manage_view";
                read_cross_cluster: "read_cross_cluster";
                read_view_metadata: "read_view_metadata";
                view_index_metadata: "view_index_metadata";
            }>, z.ZodString]>>;
            allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SecurityHasPrivilegesUserProfileRequest = z.infer<typeof SecurityHasPrivilegesUserProfileRequest>;
export declare const SecurityHasPrivilegesUserProfileResponse: z.ZodObject<{
    has_privilege_uids: z.ZodArray<z.ZodString>;
    errors: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        details: z.ZodRecord<z.ZodString, z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityHasPrivilegesUserProfileResponse = z.infer<typeof SecurityHasPrivilegesUserProfileResponse>;
//# sourceMappingURL=security_has_privileges_user_profile.d.ts.map