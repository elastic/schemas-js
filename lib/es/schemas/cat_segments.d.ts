import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
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
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatCatSegmentsColumn: z.ZodUnion<readonly [z.ZodEnum<{
    index: "index";
    id: "id";
    size: "size";
    version: "version";
    i: "i";
    idx: "idx";
    s: "s";
    ip: "ip";
    "docs.count": "docs.count";
    sh: "sh";
    p: "p";
    "docs.deleted": "docs.deleted";
    shard: "shard";
    prirep: "prirep";
    pr: "pr";
    primaryOrReplica: "primaryOrReplica";
    segment: "segment";
    generation: "generation";
    "size.memory": "size.memory";
    committed: "committed";
    searchable: "searchable";
    compound: "compound";
}>, z.ZodString]>;
export type CatCatSegmentsColumn = z.infer<typeof CatCatSegmentsColumn>;
export declare const CatCatSegmentsColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    index: "index";
    id: "id";
    size: "size";
    version: "version";
    i: "i";
    idx: "idx";
    s: "s";
    ip: "ip";
    "docs.count": "docs.count";
    sh: "sh";
    p: "p";
    "docs.deleted": "docs.deleted";
    shard: "shard";
    prirep: "prirep";
    pr: "pr";
    primaryOrReplica: "primaryOrReplica";
    segment: "segment";
    generation: "generation";
    "size.memory": "size.memory";
    committed: "committed";
    searchable: "searchable";
    compound: "compound";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    index: "index";
    id: "id";
    size: "size";
    version: "version";
    i: "i";
    idx: "idx";
    s: "s";
    ip: "ip";
    "docs.count": "docs.count";
    sh: "sh";
    p: "p";
    "docs.deleted": "docs.deleted";
    shard: "shard";
    prirep: "prirep";
    pr: "pr";
    primaryOrReplica: "primaryOrReplica";
    segment: "segment";
    generation: "generation";
    "size.memory": "size.memory";
    committed: "committed";
    searchable: "searchable";
    compound: "compound";
}>, z.ZodString]>>]>;
export type CatCatSegmentsColumns = z.infer<typeof CatCatSegmentsColumns>;
/**
 * Get segment information.
 *
 * Get low-level information about the Lucene segments in index shards.
 * For data streams, the API returns information about the backing indices.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the index segments API.
 */
export declare const CatSegmentsRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        index: "index";
        id: "id";
        size: "size";
        version: "version";
        i: "i";
        idx: "idx";
        s: "s";
        ip: "ip";
        "docs.count": "docs.count";
        sh: "sh";
        p: "p";
        "docs.deleted": "docs.deleted";
        shard: "shard";
        prirep: "prirep";
        pr: "pr";
        primaryOrReplica: "primaryOrReplica";
        segment: "segment";
        generation: "generation";
        "size.memory": "size.memory";
        committed: "committed";
        searchable: "searchable";
        compound: "compound";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        index: "index";
        id: "id";
        size: "size";
        version: "version";
        i: "i";
        idx: "idx";
        s: "s";
        ip: "ip";
        "docs.count": "docs.count";
        sh: "sh";
        p: "p";
        "docs.deleted": "docs.deleted";
        shard: "shard";
        prirep: "prirep";
        pr: "pr";
        primaryOrReplica: "primaryOrReplica";
        segment: "segment";
        generation: "generation";
        "size.memory": "size.memory";
        committed: "committed";
        searchable: "searchable";
        compound: "compound";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
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
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
    ignore_throttled: z.ZodOptional<z.ZodBoolean>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    allow_closed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CatSegmentsRequest = z.infer<typeof CatSegmentsRequest>;
export declare const CatSegmentsSegmentsRecord: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    idx: z.ZodOptional<z.ZodString>;
    shard: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
    sh: z.ZodOptional<z.ZodString>;
    prirep: z.ZodOptional<z.ZodString>;
    p: z.ZodOptional<z.ZodString>;
    pr: z.ZodOptional<z.ZodString>;
    primaryOrReplica: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    segment: z.ZodOptional<z.ZodString>;
    seg: z.ZodOptional<z.ZodString>;
    generation: z.ZodOptional<z.ZodString>;
    g: z.ZodOptional<z.ZodString>;
    gen: z.ZodOptional<z.ZodString>;
    'docs.count': z.ZodOptional<z.ZodString>;
    dc: z.ZodOptional<z.ZodString>;
    docsCount: z.ZodOptional<z.ZodString>;
    'docs.deleted': z.ZodOptional<z.ZodString>;
    dd: z.ZodOptional<z.ZodString>;
    docsDeleted: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    si: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    'size.memory': z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    sizeMemory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    committed: z.ZodOptional<z.ZodString>;
    ic: z.ZodOptional<z.ZodString>;
    isCommitted: z.ZodOptional<z.ZodString>;
    searchable: z.ZodOptional<z.ZodString>;
    is: z.ZodOptional<z.ZodString>;
    isSearchable: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    v: z.ZodOptional<z.ZodString>;
    compound: z.ZodOptional<z.ZodString>;
    ico: z.ZodOptional<z.ZodString>;
    isCompound: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatSegmentsSegmentsRecord = z.infer<typeof CatSegmentsSegmentsRecord>;
export declare const CatSegmentsResponse: z.ZodArray<z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    idx: z.ZodOptional<z.ZodString>;
    shard: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
    sh: z.ZodOptional<z.ZodString>;
    prirep: z.ZodOptional<z.ZodString>;
    p: z.ZodOptional<z.ZodString>;
    pr: z.ZodOptional<z.ZodString>;
    primaryOrReplica: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    segment: z.ZodOptional<z.ZodString>;
    seg: z.ZodOptional<z.ZodString>;
    generation: z.ZodOptional<z.ZodString>;
    g: z.ZodOptional<z.ZodString>;
    gen: z.ZodOptional<z.ZodString>;
    'docs.count': z.ZodOptional<z.ZodString>;
    dc: z.ZodOptional<z.ZodString>;
    docsCount: z.ZodOptional<z.ZodString>;
    'docs.deleted': z.ZodOptional<z.ZodString>;
    dd: z.ZodOptional<z.ZodString>;
    docsDeleted: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    si: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    'size.memory': z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    sizeMemory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    committed: z.ZodOptional<z.ZodString>;
    ic: z.ZodOptional<z.ZodString>;
    isCommitted: z.ZodOptional<z.ZodString>;
    searchable: z.ZodOptional<z.ZodString>;
    is: z.ZodOptional<z.ZodString>;
    isSearchable: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    v: z.ZodOptional<z.ZodString>;
    compound: z.ZodOptional<z.ZodString>;
    ico: z.ZodOptional<z.ZodString>;
    isCompound: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatSegmentsResponse = z.infer<typeof CatSegmentsResponse>;
//# sourceMappingURL=cat_segments.d.ts.map