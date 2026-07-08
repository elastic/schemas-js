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
/**
 * Update the connector API key ID.
 *
 * Update the `api_key_id` and `api_key_secret_id` fields of a connector.
 * You can specify the ID of the API key used for authorization and the ID of the connector secret where the API key is stored.
 * The connector secret ID is required only for Elastic managed (native) connectors.
 * Self-managed connectors (connector clients) do not use this field.
 */
export declare const ConnectorUpdateApiKeyIdRequest: z.ZodObject<{
    connector_id: z.ZodString;
    api_key_id: z.ZodOptional<z.ZodString>;
    api_key_secret_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorUpdateApiKeyIdRequest = z.infer<typeof ConnectorUpdateApiKeyIdRequest>;
export declare const ConnectorUpdateApiKeyIdResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateApiKeyIdResponse = z.infer<typeof ConnectorUpdateApiKeyIdResponse>;
//# sourceMappingURL=connector_update_api_key_id.d.ts.map