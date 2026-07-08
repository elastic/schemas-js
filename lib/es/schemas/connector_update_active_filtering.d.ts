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
 * Activate the connector draft filter.
 *
 * Activates the valid draft filtering for a connector.
 */
export declare const ConnectorUpdateActiveFilteringRequest: z.ZodObject<{
    connector_id: z.ZodString;
}, z.core.$strip>;
export type ConnectorUpdateActiveFilteringRequest = z.infer<typeof ConnectorUpdateActiveFilteringRequest>;
export declare const ConnectorUpdateActiveFilteringResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateActiveFilteringResponse = z.infer<typeof ConnectorUpdateActiveFilteringResponse>;
//# sourceMappingURL=connector_update_active_filtering.d.ts.map