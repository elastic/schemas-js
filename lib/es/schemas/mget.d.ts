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
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const MgetMultiGetError: z.ZodObject<{
    error: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    _id: z.ZodString;
    _index: z.ZodString;
}, z.core.$strip>;
export type MgetMultiGetError = z.infer<typeof MgetMultiGetError>;
/** Only to be used in query and path parameters, as the array form is actually a csv */
export declare const Routing: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Routing = z.infer<typeof Routing>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const SearchSourceFilter: z.ZodObject<{
    exclude_vectors: z.ZodOptional<z.ZodBoolean>;
    excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type SearchSourceFilter = z.infer<typeof SearchSourceFilter>;
/** Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered. */
export declare const SearchSourceConfig: z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
    exclude_vectors: z.ZodOptional<z.ZodBoolean>;
    excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>;
export type SearchSourceConfig = z.infer<typeof SearchSourceConfig>;
export declare const VersionType: z.ZodEnum<{
    internal: "internal";
    external: "external";
    external_gte: "external_gte";
}>;
export type VersionType = z.infer<typeof VersionType>;
export declare const MgetOperation: z.ZodObject<{
    _id: z.ZodString;
    _index: z.ZodOptional<z.ZodString>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
        exclude_vectors: z.ZodOptional<z.ZodBoolean>;
        excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type MgetOperation = z.infer<typeof MgetOperation>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered.
 * Used as a query parameter along with the `_source_includes` and `_source_excludes` parameters.
 */
export declare const SearchSourceConfigParam: z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>;
export type SearchSourceConfigParam = z.infer<typeof SearchSourceConfigParam>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
/**
 * Get multiple documents.
 *
 * Get multiple JSON documents by ID from one or more indices.
 * If you specify an index in the request URI, you only need to specify the document IDs in the request body.
 * To ensure fast responses, this multi get (mget) API responds with partial results if one or more shards fail.
 *
 * **Filter source fields**
 *
 * By default, the `_source` field is returned for every document (if stored).
 * Use the `_source` and `_source_include` or `source_exclude` attributes to filter what fields are returned for a particular document.
 * You can include the `_source`, `_source_includes`, and `_source_excludes` query parameters in the request URI to specify the defaults to use when there are no per-document instructions.
 *
 * **Get stored fields**
 *
 * Use the `stored_fields` attribute to specify the set of stored fields you want to retrieve.
 * Any requested fields that are not stored are ignored.
 * You can include the `stored_fields` query parameter in the request URI to specify the defaults to use when there are no per-document instructions.
 */
export declare const MgetRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    preference: z.ZodOptional<z.ZodString>;
    realtime: z.ZodOptional<z.ZodBoolean>;
    refresh: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>>;
    _source_excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    _source_includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        _id: z.ZodString;
        _index: z.ZodOptional<z.ZodString>;
        routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
            exclude_vectors: z.ZodOptional<z.ZodBoolean>;
            excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
        stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodNumber>;
        version_type: z.ZodOptional<z.ZodEnum<{
            internal: "internal";
            external: "external";
            external_gte: "external_gte";
        }>>;
    }, z.core.$strip>>>;
    ids: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type MgetRequest = z.infer<typeof MgetRequest>;
export declare const MgetResponseItem: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
    error: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    _id: z.ZodString;
    _index: z.ZodString;
}, z.core.$strip>]>;
export type MgetResponseItem = z.infer<typeof MgetResponseItem>;
export declare const MgetResponse: z.ZodObject<{
    docs: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
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
    }, z.core.$strip>, z.ZodObject<{
        error: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        _id: z.ZodString;
        _index: z.ZodString;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type MgetResponse = z.infer<typeof MgetResponse>;
//# sourceMappingURL=mget.d.ts.map