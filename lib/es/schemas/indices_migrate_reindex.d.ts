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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesMigrateReindexModeEnum: z.ZodEnum<{
    upgrade: "upgrade";
}>;
export type IndicesMigrateReindexModeEnum = z.infer<typeof IndicesMigrateReindexModeEnum>;
export declare const IndicesMigrateReindexSourceIndex: z.ZodObject<{
    index: z.ZodString;
}, z.core.$strip>;
export type IndicesMigrateReindexSourceIndex = z.infer<typeof IndicesMigrateReindexSourceIndex>;
export declare const IndicesMigrateReindexMigrateReindex: z.ZodObject<{
    mode: z.ZodEnum<{
        upgrade: "upgrade";
    }>;
    source: z.ZodObject<{
        index: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IndicesMigrateReindexMigrateReindex = z.infer<typeof IndicesMigrateReindexMigrateReindex>;
/**
 * Reindex legacy backing indices.
 *
 * Reindex all legacy backing indices for a data stream.
 * This operation occurs in a persistent task.
 * The persistent task ID is returned immediately and the reindexing work is completed in that task.
 */
export declare const IndicesMigrateReindexRequest: z.ZodObject<{
    reindex: z.ZodObject<{
        mode: z.ZodEnum<{
            upgrade: "upgrade";
        }>;
        source: z.ZodObject<{
            index: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IndicesMigrateReindexRequest = z.infer<typeof IndicesMigrateReindexRequest>;
export declare const IndicesMigrateReindexResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesMigrateReindexResponse = z.infer<typeof IndicesMigrateReindexResponse>;
//# sourceMappingURL=indices_migrate_reindex.d.ts.map