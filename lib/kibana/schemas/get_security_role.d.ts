import { z } from 'zod';
export declare const Kibana_HTTP_APIs_security_role_kibana_privilege_response: z.ZodObject<{
    _reserved: z.ZodOptional<z.ZodArray<z.ZodString>>;
    base: z.ZodArray<z.ZodString>;
    feature: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>;
    spaces: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_kibana_privilege_response = z.infer<typeof Kibana_HTTP_APIs_security_role_kibana_privilege_response>;
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
export declare const Kibana_HTTP_APIs_security_role_kibana_application: z.ZodObject<{
    application: z.ZodString;
    privileges: z.ZodArray<z.ZodString>;
    resources: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_kibana_application = z.infer<typeof Kibana_HTTP_APIs_security_role_kibana_application>;
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
export declare const Kibana_HTTP_APIs_security_role_transform_error: z.ZodObject<{
    reason: z.ZodString;
    state: z.ZodOptional<z.ZodArray<z.ZodObject<{
        application: z.ZodString;
        privileges: z.ZodArray<z.ZodString>;
        resources: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_transform_error = z.infer<typeof Kibana_HTTP_APIs_security_role_transform_error>;
export declare const Kibana_HTTP_APIs_security_role_response: z.ZodObject<{
    _transform_error: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reason: z.ZodString;
        state: z.ZodOptional<z.ZodArray<z.ZodObject<{
            application: z.ZodString;
            privileges: z.ZodArray<z.ZodString>;
            resources: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    _unrecognized_applications: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
    kibana: z.ZodArray<z.ZodObject<{
        _reserved: z.ZodOptional<z.ZodArray<z.ZodString>>;
        base: z.ZodArray<z.ZodString>;
        feature: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>;
        spaces: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    name: z.ZodString;
    transient_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_security_role_response = z.infer<typeof Kibana_HTTP_APIs_security_role_response>;
export declare const GetSecurityRoleResponse: z.ZodArray<z.ZodObject<{
    _transform_error: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reason: z.ZodString;
        state: z.ZodOptional<z.ZodArray<z.ZodObject<{
            application: z.ZodString;
            privileges: z.ZodArray<z.ZodString>;
            resources: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    _unrecognized_applications: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
    kibana: z.ZodArray<z.ZodObject<{
        _reserved: z.ZodOptional<z.ZodArray<z.ZodString>>;
        base: z.ZodArray<z.ZodString>;
        feature: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>;
        spaces: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    name: z.ZodString;
    transient_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
}, z.core.$strip>>;
export type GetSecurityRoleResponse = z.infer<typeof GetSecurityRoleResponse>;
//# sourceMappingURL=get_security_role.d.ts.map