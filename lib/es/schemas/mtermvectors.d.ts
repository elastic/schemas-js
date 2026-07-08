import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
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
/** Only to be used in query and path parameters, as the array form is actually a csv */
export declare const Routing: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Routing = z.infer<typeof Routing>;
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
export declare const MtermvectorsOperation: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    doc: z.ZodOptional<z.ZodAny>;
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    field_statistics: z.ZodOptional<z.ZodBoolean>;
    filter: z.ZodOptional<z.ZodObject<{
        max_doc_freq: z.ZodOptional<z.ZodNumber>;
        max_num_terms: z.ZodOptional<z.ZodNumber>;
        max_term_freq: z.ZodOptional<z.ZodNumber>;
        max_word_length: z.ZodOptional<z.ZodNumber>;
        min_doc_freq: z.ZodOptional<z.ZodNumber>;
        min_term_freq: z.ZodOptional<z.ZodNumber>;
        min_word_length: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    offsets: z.ZodOptional<z.ZodBoolean>;
    payloads: z.ZodOptional<z.ZodBoolean>;
    positions: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    term_statistics: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type MtermvectorsOperation = z.infer<typeof MtermvectorsOperation>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get multiple term vectors.
 *
 * Get multiple term vectors with a single request.
 * You can specify existing documents by index and ID or provide artificial documents in the body of the request.
 * You can specify the index in the request body or request URI.
 * The response contains a `docs` array with all the fetched termvectors.
 * Each element has the structure provided by the termvectors API.
 *
 * **Artificial documents**
 *
 * You can also use `mtermvectors` to generate term vectors for artificial documents provided in the body of the request.
 * The mapping used is determined by the specified `_index`.
 */
export declare const MtermvectorsRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    field_statistics: z.ZodOptional<z.ZodBoolean>;
    offsets: z.ZodOptional<z.ZodBoolean>;
    payloads: z.ZodOptional<z.ZodBoolean>;
    positions: z.ZodOptional<z.ZodBoolean>;
    preference: z.ZodOptional<z.ZodString>;
    realtime: z.ZodOptional<z.ZodBoolean>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    term_statistics: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
    docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        doc: z.ZodOptional<z.ZodAny>;
        fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        field_statistics: z.ZodOptional<z.ZodBoolean>;
        filter: z.ZodOptional<z.ZodObject<{
            max_doc_freq: z.ZodOptional<z.ZodNumber>;
            max_num_terms: z.ZodOptional<z.ZodNumber>;
            max_term_freq: z.ZodOptional<z.ZodNumber>;
            max_word_length: z.ZodOptional<z.ZodNumber>;
            min_doc_freq: z.ZodOptional<z.ZodNumber>;
            min_term_freq: z.ZodOptional<z.ZodNumber>;
            min_word_length: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        offsets: z.ZodOptional<z.ZodBoolean>;
        payloads: z.ZodOptional<z.ZodBoolean>;
        positions: z.ZodOptional<z.ZodBoolean>;
        routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        term_statistics: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodNumber>;
        version_type: z.ZodOptional<z.ZodEnum<{
            internal: "internal";
            external: "external";
            external_gte: "external_gte";
        }>>;
    }, z.core.$strip>>>;
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type MtermvectorsRequest = z.infer<typeof MtermvectorsRequest>;
export declare const TermvectorsFieldStatistics: z.ZodObject<{
    doc_count: z.ZodNumber;
    sum_doc_freq: z.ZodNumber;
    sum_ttf: z.ZodNumber;
}, z.core.$strip>;
export type TermvectorsFieldStatistics = z.infer<typeof TermvectorsFieldStatistics>;
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
export declare const MtermvectorsTermVectorsResult: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodString;
    _version: z.ZodOptional<z.ZodNumber>;
    took: z.ZodOptional<z.ZodNumber>;
    found: z.ZodOptional<z.ZodBoolean>;
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
    error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type MtermvectorsTermVectorsResult = z.infer<typeof MtermvectorsTermVectorsResult>;
export declare const MtermvectorsResponse: z.ZodObject<{
    docs: z.ZodArray<z.ZodObject<{
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodString;
        _version: z.ZodOptional<z.ZodNumber>;
        took: z.ZodOptional<z.ZodNumber>;
        found: z.ZodOptional<z.ZodBoolean>;
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
        error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MtermvectorsResponse = z.infer<typeof MtermvectorsResponse>;
//# sourceMappingURL=mtermvectors.d.ts.map