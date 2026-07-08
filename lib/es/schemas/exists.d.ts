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
 * Check a document.
 *
 * Verify that a document exists.
 * For example, check to see if a document with the `_id` 0 exists:
 *
 * ```
 * HEAD my-index-000001/_doc/0
 * ```
 *
 * If the document exists, the API returns a status code of `200 - OK`.
 * If the document doesn’t exist, the API returns `404 - Not Found`.
 *
 * **Versioning support**
 *
 * You can use the `version` parameter to check the document only if its current version is equal to the specified one.
 *
 * Internally, Elasticsearch has marked the old document as deleted and added an entirely new document.
 * The old version of the document doesn't disappear immediately, although you won't be able to access it.
 * Elasticsearch cleans up deleted documents in the background as you continue to index more data.
 */
export declare const ExistsRequest: z.ZodObject<{
    id: z.ZodString;
    index: z.ZodString;
    preference: z.ZodOptional<z.ZodString>;
    realtime: z.ZodOptional<z.ZodBoolean>;
    refresh: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>>;
    _source_excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source_includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type ExistsRequest = z.infer<typeof ExistsRequest>;
export declare const ExistsResponse: z.ZodBoolean;
export type ExistsResponse = z.infer<typeof ExistsResponse>;
//# sourceMappingURL=exists.d.ts.map