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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Convert an index alias to a data stream.
 *
 * Converts an index alias to a data stream.
 * You must have a matching index template that is data stream enabled.
 * The alias must meet the following criteria:
 * The alias must have a write index;
 * All indices for the alias must have a `@timestamp` field mapping of a `date` or `date_nanos` field type;
 * The alias must not have any filters;
 * The alias must not use custom routing.
 * If successful, the request removes the alias and creates a data stream with the same name.
 * The indices for the alias become hidden backing indices for the stream.
 * The write index for the alias becomes the write index for the stream.
 */
export declare const IndicesMigrateToDataStreamRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesMigrateToDataStreamRequest = z.infer<typeof IndicesMigrateToDataStreamRequest>;
export declare const IndicesMigrateToDataStreamResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesMigrateToDataStreamResponse = z.infer<typeof IndicesMigrateToDataStreamResponse>;
//# sourceMappingURL=indices_migrate_to_data_stream.d.ts.map