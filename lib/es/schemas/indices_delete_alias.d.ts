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
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesDeleteAliasIndicesAliasesResponseBody: z.ZodObject<{
    errors: z.ZodOptional<z.ZodBoolean>;
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesDeleteAliasIndicesAliasesResponseBody = z.infer<typeof IndicesDeleteAliasIndicesAliasesResponseBody>;
/**
 * Delete an alias.
 *
 * Removes a data stream or index from an alias.
 */
export declare const IndicesDeleteAliasRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesDeleteAliasRequest = z.infer<typeof IndicesDeleteAliasRequest>;
export declare const IndicesDeleteAliasResponse: z.ZodObject<{
    errors: z.ZodOptional<z.ZodBoolean>;
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesDeleteAliasResponse = z.infer<typeof IndicesDeleteAliasResponse>;
//# sourceMappingURL=indices_delete_alias.d.ts.map