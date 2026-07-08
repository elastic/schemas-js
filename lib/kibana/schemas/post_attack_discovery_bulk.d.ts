import { z } from 'zod';
export declare const Security_Attack_discovery_API_User: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_User = z.infer<typeof Security_Attack_discovery_API_User>;
export declare const Security_Attack_discovery_API_NonEmptyTimestamp: z.ZodString;
export type Security_Attack_discovery_API_NonEmptyTimestamp = z.infer<typeof Security_Attack_discovery_API_NonEmptyTimestamp>;
export declare const Security_Attack_discovery_API_Replacements: z.ZodRecord<z.ZodString, z.ZodString>;
export type Security_Attack_discovery_API_Replacements = z.infer<typeof Security_Attack_discovery_API_Replacements>;
export declare const Security_Attack_discovery_API_AttackDiscoveryApiAlert: z.ZodObject<{
    alert_ids: z.ZodArray<z.ZodString>;
    alert_rule_uuid: z.ZodOptional<z.ZodString>;
    alert_start: z.ZodOptional<z.ZodString>;
    alert_updated_at: z.ZodOptional<z.ZodString>;
    alert_updated_by_user_id: z.ZodOptional<z.ZodString>;
    alert_updated_by_user_name: z.ZodOptional<z.ZodString>;
    alert_workflow_status: z.ZodOptional<z.ZodString>;
    alert_workflow_status_updated_at: z.ZodOptional<z.ZodString>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodString>>;
    connector_id: z.ZodString;
    connector_name: z.ZodString;
    details_markdown: z.ZodString;
    entity_summary_markdown: z.ZodOptional<z.ZodString>;
    generation_uuid: z.ZodString;
    id: z.ZodString;
    index: z.ZodOptional<z.ZodString>;
    mitre_attack_tactics: z.ZodOptional<z.ZodArray<z.ZodString>>;
    replacements: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    risk_score: z.ZodOptional<z.ZodNumber>;
    summary_markdown: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    timestamp: z.ZodString;
    title: z.ZodString;
    user_id: z.ZodOptional<z.ZodString>;
    user_name: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryApiAlert = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryApiAlert>;
export declare const PostAttackDiscoveryBulkRequest: z.ZodObject<{
    update: z.ZodObject<{
        enable_field_rendering: z.ZodOptional<z.ZodBoolean>;
        ids: z.ZodArray<z.ZodString>;
        kibana_alert_workflow_status: z.ZodOptional<z.ZodEnum<{
            open: "open";
            closed: "closed";
            acknowledged: "acknowledged";
        }>>;
        visibility: z.ZodOptional<z.ZodEnum<{
            shared: "shared";
            not_shared: "not_shared";
        }>>;
        with_replacements: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PostAttackDiscoveryBulkRequest = z.infer<typeof PostAttackDiscoveryBulkRequest>;
export declare const PostAttackDiscoveryBulkResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        alert_ids: z.ZodArray<z.ZodString>;
        alert_rule_uuid: z.ZodOptional<z.ZodString>;
        alert_start: z.ZodOptional<z.ZodString>;
        alert_updated_at: z.ZodOptional<z.ZodString>;
        alert_updated_by_user_id: z.ZodOptional<z.ZodString>;
        alert_updated_by_user_name: z.ZodOptional<z.ZodString>;
        alert_workflow_status: z.ZodOptional<z.ZodString>;
        alert_workflow_status_updated_at: z.ZodOptional<z.ZodString>;
        assignees: z.ZodOptional<z.ZodArray<z.ZodString>>;
        connector_id: z.ZodString;
        connector_name: z.ZodString;
        details_markdown: z.ZodString;
        entity_summary_markdown: z.ZodOptional<z.ZodString>;
        generation_uuid: z.ZodString;
        id: z.ZodString;
        index: z.ZodOptional<z.ZodString>;
        mitre_attack_tactics: z.ZodOptional<z.ZodArray<z.ZodString>>;
        replacements: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        summary_markdown: z.ZodString;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        timestamp: z.ZodString;
        title: z.ZodString;
        user_id: z.ZodOptional<z.ZodString>;
        user_name: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PostAttackDiscoveryBulkResponse = z.infer<typeof PostAttackDiscoveryBulkResponse>;
//# sourceMappingURL=post_attack_discovery_bulk.d.ts.map