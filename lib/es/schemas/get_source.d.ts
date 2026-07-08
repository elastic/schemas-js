import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
/** Only to be used in query and path parameters, as the array form is actually a csv */
export declare const Routing: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Routing = z.infer<typeof Routing>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
/**
 * Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered.
 * Used as a query parameter along with the `_source_includes` and `_source_excludes` parameters.
 */
export declare const SearchSourceConfigParam: z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>;
export type SearchSourceConfigParam = z.infer<typeof SearchSourceConfigParam>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const VersionType: z.ZodEnum<{
    internal: "internal";
    external: "external";
    external_gte: "external_gte";
}>;
export type VersionType = z.infer<typeof VersionType>;
/**
 * Get a document's source.
 *
 * Get the source of a document.
 * For example:
 *
 * ```
 * GET my-index-000001/_source/1
 * ```
 *
 * You can use the source filtering parameters to control which parts of the `_source` are returned:
 *
 * ```
 * GET my-index-000001/_source/1/?_source_includes=*.id&_source_excludes=entities
 * ```
 */
export declare const GetSourceRequest: z.ZodObject<{
    id: z.ZodString;
    index: z.ZodString;
    preference: z.ZodOptional<z.ZodString>;
    realtime: z.ZodOptional<z.ZodBoolean>;
    refresh: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>>;
    _source_excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source_includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type GetSourceRequest = z.infer<typeof GetSourceRequest>;
export declare const GetSourceResponse: z.ZodAny;
export type GetSourceResponse = z.infer<typeof GetSourceResponse>;
//# sourceMappingURL=get_source.d.ts.map