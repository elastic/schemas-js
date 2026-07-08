import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a connector.
 *
 * Removes a connector and associated sync jobs.
 * This is a destructive action that is not recoverable.
 * NOTE: This action doesn’t delete any API keys, ingest pipelines, or data indices associated with the connector.
 * These need to be removed manually.
 */
export declare const ConnectorDeleteRequest: z.ZodObject<{
    connector_id: z.ZodString;
    delete_sync_jobs: z.ZodOptional<z.ZodBoolean>;
    hard: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ConnectorDeleteRequest = z.infer<typeof ConnectorDeleteRequest>;
export declare const ConnectorDeleteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type ConnectorDeleteResponse = z.infer<typeof ConnectorDeleteResponse>;
//# sourceMappingURL=connector_delete.d.ts.map