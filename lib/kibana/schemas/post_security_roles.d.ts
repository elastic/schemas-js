import { z } from 'zod';
export declare const Kibana_HTTP_APIs_security_bulk_roles_error_detail: z.ZodObject<{
    reason: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_bulk_roles_error_detail = z.infer<typeof Kibana_HTTP_APIs_security_bulk_roles_error_detail>;
export declare const Kibana_HTTP_APIs_security_role_kibana_privilege: z.ZodObject<{
    base: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
    feature: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    spaces: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodEnum<{
        "*": "*";
    }>>, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_kibana_privilege = z.infer<typeof Kibana_HTTP_APIs_security_role_kibana_privilege>;
export declare const Kibana_HTTP_APIs_security_role_remote_indices_privileges: z.ZodObject<{
    allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
    clusters: z.ZodArray<z.ZodString>;
    field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    names: z.ZodArray<z.ZodString>;
    privileges: z.ZodArray<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_remote_indices_privileges = z.infer<typeof Kibana_HTTP_APIs_security_role_remote_indices_privileges>;
export declare const Kibana_HTTP_APIs_security_role_remote_cluster_privileges: z.ZodObject<{
    clusters: z.ZodArray<z.ZodString>;
    privileges: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_remote_cluster_privileges = z.infer<typeof Kibana_HTTP_APIs_security_role_remote_cluster_privileges>;
export declare const Kibana_HTTP_APIs_security_role_indices_privileges: z.ZodObject<{
    allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
    field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    names: z.ZodArray<z.ZodString>;
    privileges: z.ZodArray<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_indices_privileges = z.infer<typeof Kibana_HTTP_APIs_security_role_indices_privileges>;
export declare const Kibana_HTTP_APIs_security_bulk_create_or_update_roles_response: z.ZodObject<{
    created: z.ZodOptional<z.ZodArray<z.ZodString>>;
    errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        reason: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    noop: z.ZodOptional<z.ZodArray<z.ZodString>>;
    updated: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_bulk_create_or_update_roles_response = z.infer<typeof Kibana_HTTP_APIs_security_bulk_create_or_update_roles_response>;
export declare const Kibana_HTTP_APIs_security_role_elasticsearch: z.ZodObject<{
    cluster: z.ZodOptional<z.ZodArray<z.ZodString>>;
    indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
        field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        names: z.ZodArray<z.ZodString>;
        privileges: z.ZodArray<z.ZodString>;
        query: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    remote_cluster: z.ZodOptional<z.ZodArray<z.ZodObject<{
        clusters: z.ZodArray<z.ZodString>;
        privileges: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    remote_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
        clusters: z.ZodArray<z.ZodString>;
        field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        names: z.ZodArray<z.ZodString>;
        privileges: z.ZodArray<z.ZodString>;
        query: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    run_as: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_elasticsearch = z.infer<typeof Kibana_HTTP_APIs_security_role_elasticsearch>;
export declare const Kibana_HTTP_APIs_security_role_put_payload: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    elasticsearch: z.ZodObject<{
        cluster: z.ZodOptional<z.ZodArray<z.ZodString>>;
        indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
            field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            names: z.ZodArray<z.ZodString>;
            privileges: z.ZodArray<z.ZodString>;
            query: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        remote_cluster: z.ZodOptional<z.ZodArray<z.ZodObject<{
            clusters: z.ZodArray<z.ZodString>;
            privileges: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        remote_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
            clusters: z.ZodArray<z.ZodString>;
            field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            names: z.ZodArray<z.ZodString>;
            privileges: z.ZodArray<z.ZodString>;
            query: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        run_as: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
        base: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
        feature: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        spaces: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodEnum<{
            "*": "*";
        }>>, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_put_payload = z.infer<typeof Kibana_HTTP_APIs_security_role_put_payload>;
export declare const Kibana_HTTP_APIs_security_roles_bulk_create_or_update_payload: z.ZodObject<{
    roles: z.ZodRecord<z.ZodString, z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        elasticsearch: z.ZodObject<{
            cluster: z.ZodOptional<z.ZodArray<z.ZodString>>;
            indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
                field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
                names: z.ZodArray<z.ZodString>;
                privileges: z.ZodArray<z.ZodString>;
                query: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            remote_cluster: z.ZodOptional<z.ZodArray<z.ZodObject<{
                clusters: z.ZodArray<z.ZodString>;
                privileges: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
            remote_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                allow_restricted_indices: z.ZodOptional<z.ZodBoolean>;
                clusters: z.ZodArray<z.ZodString>;
                field_security: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
                names: z.ZodArray<z.ZodString>;
                privileges: z.ZodArray<z.ZodString>;
                query: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            run_as: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
            base: z.ZodNullable<z.ZodUnion<readonly [z.ZodArray<z.ZodUnknown>, z.ZodBoolean, z.ZodNumber, z.ZodObject<{}, z.core.$strip>, z.ZodString]>>;
            feature: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            spaces: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodEnum<{
                "*": "*";
            }>>, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_roles_bulk_create_or_update_payload = z.infer<typeof Kibana_HTTP_APIs_security_roles_bulk_create_or_update_payload>;
//# sourceMappingURL=post_security_roles.d.ts.map