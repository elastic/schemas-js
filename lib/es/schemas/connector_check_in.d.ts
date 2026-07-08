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
 * Check in a connector.
 *
 * Update the `last_seen` field in the connector and set it to the current timestamp.
 */
export declare const ConnectorCheckInRequest: z.ZodObject<{
    connector_id: z.ZodString;
}, z.core.$strip>;
export type ConnectorCheckInRequest = z.infer<typeof ConnectorCheckInRequest>;
export declare const ConnectorCheckInResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorCheckInResponse = z.infer<typeof ConnectorCheckInResponse>;
//# sourceMappingURL=connector_check_in.d.ts.map