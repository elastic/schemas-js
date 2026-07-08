import { z } from 'zod';
export declare const Kibana_HTTP_APIs_package_policy_package: z.ZodObject<{
    experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
        data_stream: z.ZodString;
        features: z.ZodObject<{
            doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
            doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
            synthetic_source: z.ZodOptional<z.ZodBoolean>;
            tsdb: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    fips_compatible: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    requires_root: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_policy_package = z.infer<typeof Kibana_HTTP_APIs_package_policy_package>;
export declare const Kibana_HTTP_APIs_delete_package_policies_request: z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
    packagePolicyIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_delete_package_policies_request = z.infer<typeof Kibana_HTTP_APIs_delete_package_policies_request>;
export declare const Kibana_HTTP_APIs_delete_package_policies_response_item: z.ZodObject<{
    body: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
    }, z.core.$strip>>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    package: z.ZodObject<{
        experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodString;
            features: z.ZodObject<{
                doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
                doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
                synthetic_source: z.ZodOptional<z.ZodBoolean>;
                tsdb: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>>>;
        fips_compatible: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        requires_root: z.ZodOptional<z.ZodBoolean>;
        title: z.ZodOptional<z.ZodString>;
        version: z.ZodString;
    }, z.core.$strip>;
    policy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    policy_ids: z.ZodArray<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
    success: z.ZodBoolean;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_delete_package_policies_response_item = z.infer<typeof Kibana_HTTP_APIs_delete_package_policies_response_item>;
export declare const PostFleetPackagePoliciesDeleteResponse: z.ZodArray<z.ZodObject<{
    body: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
    }, z.core.$strip>>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    package: z.ZodObject<{
        experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodString;
            features: z.ZodObject<{
                doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
                doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
                synthetic_source: z.ZodOptional<z.ZodBoolean>;
                tsdb: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>>>;
        fips_compatible: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        requires_root: z.ZodOptional<z.ZodBoolean>;
        title: z.ZodOptional<z.ZodString>;
        version: z.ZodString;
    }, z.core.$strip>;
    policy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    policy_ids: z.ZodArray<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
    success: z.ZodBoolean;
}, z.core.$strip>>;
export type PostFleetPackagePoliciesDeleteResponse = z.infer<typeof PostFleetPackagePoliciesDeleteResponse>;
//# sourceMappingURL=post_fleet_package_policies_delete.d.ts.map