import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const TermvectorsFieldStatistics: z.ZodObject<{
    doc_count: z.ZodNumber;
    sum_doc_freq: z.ZodNumber;
    sum_ttf: z.ZodNumber;
}, z.core.$strip>;
export type TermvectorsFieldStatistics = z.infer<typeof TermvectorsFieldStatistics>;
export declare const TermvectorsFilter: z.ZodObject<{
    max_doc_freq: z.ZodOptional<z.ZodNumber>;
    max_num_terms: z.ZodOptional<z.ZodNumber>;
    max_term_freq: z.ZodOptional<z.ZodNumber>;
    max_word_length: z.ZodOptional<z.ZodNumber>;
    min_doc_freq: z.ZodOptional<z.ZodNumber>;
    min_term_freq: z.ZodOptional<z.ZodNumber>;
    min_word_length: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type TermvectorsFilter = z.infer<typeof TermvectorsFilter>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
/** Only to be used in query and path parameters, as the array form is actually a csv */
export declare const Routing: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Routing = z.infer<typeof Routing>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const VersionType: z.ZodEnum<{
    internal: "internal";
    external: "external";
    external_gte: "external_gte";
}>;
export type VersionType = z.infer<typeof VersionType>;
/**
 * Get term vector information.
 *
 * Get information and statistics about terms in the fields of a particular document.
 *
 * You can retrieve term vectors for documents stored in the index or for artificial documents passed in the body of the request.
 * You can specify the fields you are interested in through the `fields` parameter or by adding the fields to the request body.
 * For example:
 *
 * ```
 * GET /my-index-000001/_termvectors/1?fields=message
 * ```
 *
 * Fields can be specified using wildcards, similar to the multi match query.
 *
 * Term vectors are real-time by default, not near real-time.
 * This can be changed by setting `realtime` parameter to `false`.
 *
 * You can request three types of values: _term information_, _term statistics_, and _field statistics_.
 * By default, all term information and field statistics are returned for all fields but term statistics are excluded.
 *
 * **Term information**
 *
 * * term frequency in the field (always returned)
 * * term positions (`positions: true`)
 * * start and end offsets (`offsets: true`)
 * * term payloads (`payloads: true`), as base64 encoded bytes
 *
 * If the requested information wasn't stored in the index, it will be computed on the fly if possible.
 * Additionally, term vectors could be computed for documents not even existing in the index, but instead provided by the user.
 *
 * > warn
 * > Start and end offsets assume UTF-16 encoding is being used. If you want to use these offsets in order to get the original text that produced this token, you should make sure that the string you are taking a sub-string of is also encoded using UTF-16.
 *
 * **Behaviour**
 *
 * The term and field statistics are not accurate.
 * Deleted documents are not taken into account.
 * The information is only retrieved for the shard the requested document resides in.
 * The term and field statistics are therefore only useful as relative measures whereas the absolute numbers have no meaning in this context.
 * By default, when requesting term vectors of artificial documents, a shard to get the statistics from is randomly selected.
 * Use `routing` only to hit a particular shard.
 * Refer to the linked documentation for detailed examples of how to use this API.
 */
export declare const TermvectorsRequest: z.ZodObject<{
    index: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    preference: z.ZodOptional<z.ZodString>;
    realtime: z.ZodOptional<z.ZodBoolean>;
    doc: z.ZodOptional<z.ZodAny>;
    filter: z.ZodOptional<z.ZodObject<{
        max_doc_freq: z.ZodOptional<z.ZodNumber>;
        max_num_terms: z.ZodOptional<z.ZodNumber>;
        max_term_freq: z.ZodOptional<z.ZodNumber>;
        max_word_length: z.ZodOptional<z.ZodNumber>;
        min_doc_freq: z.ZodOptional<z.ZodNumber>;
        min_term_freq: z.ZodOptional<z.ZodNumber>;
        min_word_length: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    field_statistics: z.ZodOptional<z.ZodBoolean>;
    offsets: z.ZodOptional<z.ZodBoolean>;
    payloads: z.ZodOptional<z.ZodBoolean>;
    positions: z.ZodOptional<z.ZodBoolean>;
    term_statistics: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type TermvectorsRequest = z.infer<typeof TermvectorsRequest>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const TermvectorsToken: z.ZodObject<{
    end_offset: z.ZodOptional<z.ZodNumber>;
    payload: z.ZodOptional<z.ZodString>;
    position: z.ZodNumber;
    start_offset: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type TermvectorsToken = z.infer<typeof TermvectorsToken>;
export declare const TermvectorsTerm: z.ZodObject<{
    doc_freq: z.ZodOptional<z.ZodNumber>;
    score: z.ZodOptional<z.ZodNumber>;
    term_freq: z.ZodNumber;
    tokens: z.ZodOptional<z.ZodArray<z.ZodObject<{
        end_offset: z.ZodOptional<z.ZodNumber>;
        payload: z.ZodOptional<z.ZodString>;
        position: z.ZodNumber;
        start_offset: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    ttf: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type TermvectorsTerm = z.infer<typeof TermvectorsTerm>;
export declare const TermvectorsTermVector: z.ZodObject<{
    field_statistics: z.ZodOptional<z.ZodObject<{
        doc_count: z.ZodNumber;
        sum_doc_freq: z.ZodNumber;
        sum_ttf: z.ZodNumber;
    }, z.core.$strip>>;
    terms: z.ZodRecord<z.ZodString, z.ZodObject<{
        doc_freq: z.ZodOptional<z.ZodNumber>;
        score: z.ZodOptional<z.ZodNumber>;
        term_freq: z.ZodNumber;
        tokens: z.ZodOptional<z.ZodArray<z.ZodObject<{
            end_offset: z.ZodOptional<z.ZodNumber>;
            payload: z.ZodOptional<z.ZodString>;
            position: z.ZodNumber;
            start_offset: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        ttf: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TermvectorsTermVector = z.infer<typeof TermvectorsTermVector>;
export declare const TermvectorsResponse: z.ZodObject<{
    found: z.ZodBoolean;
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodString;
    term_vectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field_statistics: z.ZodOptional<z.ZodObject<{
            doc_count: z.ZodNumber;
            sum_doc_freq: z.ZodNumber;
            sum_ttf: z.ZodNumber;
        }, z.core.$strip>>;
        terms: z.ZodRecord<z.ZodString, z.ZodObject<{
            doc_freq: z.ZodOptional<z.ZodNumber>;
            score: z.ZodOptional<z.ZodNumber>;
            term_freq: z.ZodNumber;
            tokens: z.ZodOptional<z.ZodArray<z.ZodObject<{
                end_offset: z.ZodOptional<z.ZodNumber>;
                payload: z.ZodOptional<z.ZodString>;
                position: z.ZodNumber;
                start_offset: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            ttf: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    took: z.ZodNumber;
    _version: z.ZodNumber;
}, z.core.$strip>;
export type TermvectorsResponse = z.infer<typeof TermvectorsResponse>;
//# sourceMappingURL=termvectors.d.ts.map