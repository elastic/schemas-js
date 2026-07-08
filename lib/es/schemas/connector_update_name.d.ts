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
/** Update the connector name and description. */
export declare const ConnectorUpdateNameRequest: z.ZodObject<{
    connector_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConnectorUpdateNameRequest = z.infer<typeof ConnectorUpdateNameRequest>;
export declare const ConnectorUpdateNameResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateNameResponse = z.infer<typeof ConnectorUpdateNameResponse>;
//# sourceMappingURL=connector_update_name.d.ts.map