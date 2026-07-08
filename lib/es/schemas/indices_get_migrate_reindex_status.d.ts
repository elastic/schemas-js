import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Get the migration reindexing status.
 *
 * Get the status of a migration reindex attempt for a data stream or index.
 */
export declare const IndicesGetMigrateReindexStatusRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type IndicesGetMigrateReindexStatusRequest = z.infer<typeof IndicesGetMigrateReindexStatusRequest>;
export declare const IndicesGetMigrateReindexStatusStatusInProgress: z.ZodObject<{
    index: z.ZodString;
    total_doc_count: z.ZodNumber;
    reindexed_doc_count: z.ZodNumber;
}, z.core.$strip>;
export type IndicesGetMigrateReindexStatusStatusInProgress = z.infer<typeof IndicesGetMigrateReindexStatusStatusInProgress>;
export declare const IndicesGetMigrateReindexStatusStatusError: z.ZodObject<{
    index: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export type IndicesGetMigrateReindexStatusStatusError = z.infer<typeof IndicesGetMigrateReindexStatusStatusError>;
export declare const IndicesGetMigrateReindexStatusResponse: z.ZodObject<{
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start_time_millis: z.ZodAny;
    complete: z.ZodBoolean;
    total_indices_in_data_stream: z.ZodNumber;
    total_indices_requiring_upgrade: z.ZodNumber;
    successes: z.ZodNumber;
    in_progress: z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        total_doc_count: z.ZodNumber;
        reindexed_doc_count: z.ZodNumber;
    }, z.core.$strip>>;
    pending: z.ZodNumber;
    errors: z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>;
    exception: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IndicesGetMigrateReindexStatusResponse = z.infer<typeof IndicesGetMigrateReindexStatusResponse>;
//# sourceMappingURL=indices_get_migrate_reindex_status.d.ts.map