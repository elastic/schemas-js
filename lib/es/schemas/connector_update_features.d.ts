import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
export declare const ConnectorFeatureEnabled: z.ZodObject<{
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type ConnectorFeatureEnabled = z.infer<typeof ConnectorFeatureEnabled>;
export declare const ConnectorSyncRulesFeature: z.ZodObject<{
    advanced: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    basic: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConnectorSyncRulesFeature = z.infer<typeof ConnectorSyncRulesFeature>;
export declare const ConnectorConnectorFeatures: z.ZodObject<{
    document_level_security: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    incremental_sync: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    native_connector_api_keys: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    sync_rules: z.ZodOptional<z.ZodObject<{
        advanced: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        basic: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConnectorConnectorFeatures = z.infer<typeof ConnectorConnectorFeatures>;
/**
 * Update the connector features.
 *
 * Update the connector features in the connector document.
 * This API can be used to control the following aspects of a connector:
 *
 * * document-level security
 * * incremental syncs
 * * advanced sync rules
 * * basic sync rules
 *
 * Normally, the running connector service automatically manages these features.
 * However, you can use this API to override the default behavior.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export declare const ConnectorUpdateFeaturesRequest: z.ZodObject<{
    connector_id: z.ZodString;
    features: z.ZodObject<{
        document_level_security: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        incremental_sync: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        native_connector_api_keys: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        sync_rules: z.ZodOptional<z.ZodObject<{
            advanced: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
            }, z.core.$strip>>;
            basic: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ConnectorUpdateFeaturesRequest = z.infer<typeof ConnectorUpdateFeaturesRequest>;
export declare const ConnectorUpdateFeaturesResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateFeaturesResponse = z.infer<typeof ConnectorUpdateFeaturesResponse>;
//# sourceMappingURL=connector_update_features.d.ts.map