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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Cancel a migration reindex operation.
 *
 * Cancel a migration reindex attempt for a data stream or index.
 */
export declare const IndicesCancelMigrateReindexRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type IndicesCancelMigrateReindexRequest = z.infer<typeof IndicesCancelMigrateReindexRequest>;
export declare const IndicesCancelMigrateReindexResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesCancelMigrateReindexResponse = z.infer<typeof IndicesCancelMigrateReindexResponse>;
//# sourceMappingURL=indices_cancel_migrate_reindex.d.ts.map