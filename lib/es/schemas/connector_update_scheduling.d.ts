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
export declare const ConnectorConnectorScheduling: z.ZodObject<{
    enabled: z.ZodBoolean;
    interval: z.ZodString;
}, z.core.$strip>;
export type ConnectorConnectorScheduling = z.infer<typeof ConnectorConnectorScheduling>;
export declare const ConnectorSchedulingConfiguration: z.ZodObject<{
    access_control: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        interval: z.ZodString;
    }, z.core.$strip>>;
    full: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        interval: z.ZodString;
    }, z.core.$strip>>;
    incremental: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        interval: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConnectorSchedulingConfiguration = z.infer<typeof ConnectorSchedulingConfiguration>;
/** Update the connector scheduling. */
export declare const ConnectorUpdateSchedulingRequest: z.ZodObject<{
    connector_id: z.ZodString;
    scheduling: z.ZodObject<{
        access_control: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            interval: z.ZodString;
        }, z.core.$strip>>;
        full: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            interval: z.ZodString;
        }, z.core.$strip>>;
        incremental: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            interval: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ConnectorUpdateSchedulingRequest = z.infer<typeof ConnectorUpdateSchedulingRequest>;
export declare const ConnectorUpdateSchedulingResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateSchedulingResponse = z.infer<typeof ConnectorUpdateSchedulingResponse>;
//# sourceMappingURL=connector_update_scheduling.d.ts.map