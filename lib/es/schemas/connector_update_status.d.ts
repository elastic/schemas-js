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
export declare const ConnectorConnectorStatus: z.ZodEnum<{
    created: "created";
    error: "error";
    needs_configuration: "needs_configuration";
    configured: "configured";
    connected: "connected";
}>;
export type ConnectorConnectorStatus = z.infer<typeof ConnectorConnectorStatus>;
/** Update the connector status. */
export declare const ConnectorUpdateStatusRequest: z.ZodObject<{
    connector_id: z.ZodString;
    status: z.ZodEnum<{
        created: "created";
        error: "error";
        needs_configuration: "needs_configuration";
        configured: "configured";
        connected: "connected";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateStatusRequest = z.infer<typeof ConnectorUpdateStatusRequest>;
export declare const ConnectorUpdateStatusResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateStatusResponse = z.infer<typeof ConnectorUpdateStatusResponse>;
//# sourceMappingURL=connector_update_status.d.ts.map