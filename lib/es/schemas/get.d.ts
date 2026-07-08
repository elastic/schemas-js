import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SequenceNumber: z.ZodNumber;
export type SequenceNumber = z.infer<typeof SequenceNumber>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const GetGetResult: z.ZodObject<{
    _index: z.ZodString;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
    found: z.ZodBoolean;
    _id: z.ZodString;
    _primary_term: z.ZodOptional<z.ZodNumber>;
    _routing: z.ZodOptional<z.ZodString>;
    _seq_no: z.ZodOptional<z.ZodNumber>;
    _source: z.ZodOptional<z.ZodAny>;
    _version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type GetGetResult = z.infer<typeof GetGetResult>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
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
export declare const VersionType: z.ZodEnum<{
    internal: "internal";
    external: "external";
    external_gte: "external_gte";
}>;
export type VersionType = z.infer<typeof VersionType>;
/**
 * Get a document by its ID.
 *
 * Get a document and its source or stored fields from an index.
 *
 * By default, this API is realtime and is not affected by the refresh rate of the index (when data will become visible for search).
 * In the case where stored fields are requested with the `stored_fields` parameter and the document has been updated but is not yet refreshed, the API will have to parse and analyze the source to extract the stored fields.
 * To turn off realtime behavior, set the `realtime` parameter to false.
 *
 * **Source filtering**
 *
 * By default, the API returns the contents of the `_source` field unless you have used the `stored_fields` parameter or the `_source` field is turned off.
 * You can turn off `_source` retrieval by using the `_source` parameter:
 *
 * ```
 * GET my-index-000001/_doc/0?_source=false
 * ```
 *
 * If you only need one or two fields from the `_source`, use the `_source_includes` or `_source_excludes` parameters to include or filter out particular fields.
 * This can be helpful with large documents where partial retrieval can save on network overhead
 * Both parameters take a comma separated list of fields or wildcard expressions.
 * For example:
 *
 * ```
 * GET my-index-000001/_doc/0?_source_includes=*.id&_source_excludes=entities
 * ```
 *
 * If you only want to specify includes, you can use a shorter notation:
 *
 * ```
 * GET my-index-000001/_doc/0?_source=*.id
 * ```
 *
 * **Routing**
 *
 * If routing is used during indexing, the routing value also needs to be specified to retrieve a document.
 * For example:
 *
 * ```
 * GET my-index-000001/_doc/2?routing=user1
 * ```
 *
 * This request gets the document with ID 2, but it is routed based on the user.
 * The document is not fetched if the correct routing is not specified.
 *
 * **Distributed**
 *
 * The GET operation is hashed into a specific shard ID.
 * It is then redirected to one of the replicas within that shard ID and returns the result.
 * The replicas are the primary shard and its replicas within that shard ID group.
 * This means that the more replicas you have, the better your GET scaling will be.
 *
 * **Versioning support**
 *
 * You can use the `version` parameter to retrieve the document only if its current version is equal to the specified one.
 *
 * Internally, Elasticsearch has marked the old document as deleted and added an entirely new document.
 * The old version of the document doesn't disappear immediately, although you won't be able to access it.
 * Elasticsearch cleans up deleted documents in the background as you continue to index more data.
 */
export declare const GetRequest: z.ZodObject<{
    id: z.ZodString;
    index: z.ZodString;
    preference: z.ZodOptional<z.ZodString>;
    realtime: z.ZodOptional<z.ZodBoolean>;
    refresh: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>>;
    _source_excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source_exclude_vectors: z.ZodOptional<z.ZodBoolean>;
    _source_includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type GetRequest = z.infer<typeof GetRequest>;
export declare const GetResponse: z.ZodObject<{
    _index: z.ZodString;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
    found: z.ZodBoolean;
    _id: z.ZodString;
    _primary_term: z.ZodOptional<z.ZodNumber>;
    _routing: z.ZodOptional<z.ZodString>;
    _seq_no: z.ZodOptional<z.ZodNumber>;
    _source: z.ZodOptional<z.ZodAny>;
    _version: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type GetResponse = z.infer<typeof GetResponse>;
//# sourceMappingURL=get.d.ts.map