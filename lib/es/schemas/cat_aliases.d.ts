import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const ExpandWildcard: z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>;
export type ExpandWildcard = z.infer<typeof ExpandWildcard>;
export declare const ExpandWildcards: z.ZodUnion<readonly [z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>, z.ZodArray<z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>>]>;
export type ExpandWildcards = z.infer<typeof ExpandWildcards>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatAliasesColumn: z.ZodUnion<readonly [z.ZodEnum<{
    index: "index";
    filter: "filter";
    alias: "alias";
    a: "a";
    i: "i";
    idx: "idx";
    f: "f";
    fi: "fi";
    "routing.index": "routing.index";
    ri: "ri";
    routingIndex: "routingIndex";
    "routing.search": "routing.search";
    rs: "rs";
    routingSearch: "routingSearch";
    is_write_index: "is_write_index";
    w: "w";
    isWriteIndex: "isWriteIndex";
}>, z.ZodString]>;
export type CatCatAliasesColumn = z.infer<typeof CatCatAliasesColumn>;
export declare const CatCatAliasesColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    index: "index";
    filter: "filter";
    alias: "alias";
    a: "a";
    i: "i";
    idx: "idx";
    f: "f";
    fi: "fi";
    "routing.index": "routing.index";
    ri: "ri";
    routingIndex: "routingIndex";
    "routing.search": "routing.search";
    rs: "rs";
    routingSearch: "routingSearch";
    is_write_index: "is_write_index";
    w: "w";
    isWriteIndex: "isWriteIndex";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    index: "index";
    filter: "filter";
    alias: "alias";
    a: "a";
    i: "i";
    idx: "idx";
    f: "f";
    fi: "fi";
    "routing.index": "routing.index";
    ri: "ri";
    routingIndex: "routingIndex";
    "routing.search": "routing.search";
    rs: "rs";
    routingSearch: "routingSearch";
    is_write_index: "is_write_index";
    w: "w";
    isWriteIndex: "isWriteIndex";
}>, z.ZodString]>>]>;
export type CatCatAliasesColumns = z.infer<typeof CatCatAliasesColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatAliasesAliasesRecord: z.ZodObject<{
    alias: z.ZodOptional<z.ZodString>;
    a: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    idx: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodString>;
    f: z.ZodOptional<z.ZodString>;
    fi: z.ZodOptional<z.ZodString>;
    'routing.index': z.ZodOptional<z.ZodString>;
    ri: z.ZodOptional<z.ZodString>;
    routingIndex: z.ZodOptional<z.ZodString>;
    'routing.search': z.ZodOptional<z.ZodString>;
    rs: z.ZodOptional<z.ZodString>;
    routingSearch: z.ZodOptional<z.ZodString>;
    is_write_index: z.ZodOptional<z.ZodString>;
    w: z.ZodOptional<z.ZodString>;
    isWriteIndex: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatAliasesAliasesRecord = z.infer<typeof CatAliasesAliasesRecord>;
/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 */
export declare const CatAliasesRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        index: "index";
        filter: "filter";
        alias: "alias";
        a: "a";
        i: "i";
        idx: "idx";
        f: "f";
        fi: "fi";
        "routing.index": "routing.index";
        ri: "ri";
        routingIndex: "routingIndex";
        "routing.search": "routing.search";
        rs: "rs";
        routingSearch: "routingSearch";
        is_write_index: "is_write_index";
        w: "w";
        isWriteIndex: "isWriteIndex";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        index: "index";
        filter: "filter";
        alias: "alias";
        a: "a";
        i: "i";
        idx: "idx";
        f: "f";
        fi: "fi";
        "routing.index": "routing.index";
        ri: "ri";
        routingIndex: "routingIndex";
        "routing.search": "routing.search";
        rs: "rs";
        routingSearch: "routingSearch";
        is_write_index: "is_write_index";
        w: "w";
        isWriteIndex: "isWriteIndex";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    expand_wildcards: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>, z.ZodArray<z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>>]>>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatAliasesRequest = z.infer<typeof CatAliasesRequest>;
export declare const CatAliasesResponse: z.ZodArray<z.ZodObject<{
    alias: z.ZodOptional<z.ZodString>;
    a: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    idx: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodString>;
    f: z.ZodOptional<z.ZodString>;
    fi: z.ZodOptional<z.ZodString>;
    'routing.index': z.ZodOptional<z.ZodString>;
    ri: z.ZodOptional<z.ZodString>;
    routingIndex: z.ZodOptional<z.ZodString>;
    'routing.search': z.ZodOptional<z.ZodString>;
    rs: z.ZodOptional<z.ZodString>;
    routingSearch: z.ZodOptional<z.ZodString>;
    is_write_index: z.ZodOptional<z.ZodString>;
    w: z.ZodOptional<z.ZodString>;
    isWriteIndex: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatAliasesResponse = z.infer<typeof CatAliasesResponse>;
//# sourceMappingURL=cat_aliases.d.ts.map