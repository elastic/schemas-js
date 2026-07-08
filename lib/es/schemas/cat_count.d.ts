import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * Some APIs will return values such as numbers also as a string (notably epoch timestamps). This behavior
 * is used to capture this behavior while keeping the semantics of the field type.
 *
 * Depending on the target language, code generators can keep the union or remove it and leniently parse
 * strings to the target type.
 */
export declare const SpecUtilsStringified: z.ZodUnion<readonly [z.ZodAny, z.ZodString]>;
export type SpecUtilsStringified = z.infer<typeof SpecUtilsStringified>;
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
/** Time of day, expressed as HH:MM:SS */
export declare const TimeOfDay: z.ZodString;
export type TimeOfDay = z.infer<typeof TimeOfDay>;
export declare const CatCatCountColumn: z.ZodUnion<readonly [z.ZodEnum<{
    count: "count";
    t: "t";
    epoch: "epoch";
    time: "time";
    timestamp: "timestamp";
    ts: "ts";
    hms: "hms";
    hhmmss: "hhmmss";
    dc: "dc";
    "docs.count": "docs.count";
    docsCount: "docsCount";
}>, z.ZodString]>;
export type CatCatCountColumn = z.infer<typeof CatCatCountColumn>;
export declare const CatCatCountColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    count: "count";
    t: "t";
    epoch: "epoch";
    time: "time";
    timestamp: "timestamp";
    ts: "ts";
    hms: "hms";
    hhmmss: "hhmmss";
    dc: "dc";
    "docs.count": "docs.count";
    docsCount: "docsCount";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    count: "count";
    t: "t";
    epoch: "epoch";
    time: "time";
    timestamp: "timestamp";
    ts: "ts";
    hms: "hms";
    hhmmss: "hhmmss";
    dc: "dc";
    "docs.count": "docs.count";
    docsCount: "docsCount";
}>, z.ZodString]>>]>;
export type CatCatCountColumns = z.infer<typeof CatCatCountColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatCountCountRecord: z.ZodObject<{
    epoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    t: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    timestamp: z.ZodOptional<z.ZodString>;
    ts: z.ZodOptional<z.ZodString>;
    hms: z.ZodOptional<z.ZodString>;
    hhmmss: z.ZodOptional<z.ZodString>;
    count: z.ZodOptional<z.ZodString>;
    dc: z.ZodOptional<z.ZodString>;
    'docs.count': z.ZodOptional<z.ZodString>;
    docsCount: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatCountCountRecord = z.infer<typeof CatCountCountRecord>;
/**
 * Get a document count.
 *
 * Get quick access to a document count for a data stream, an index, or an entire cluster.
 * The document count only includes live documents, not deleted documents which have not yet been removed by the merge process.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the count API.
 *
 * NOTE: Starting in Elasticsearch 9.3.0, this endpoint also supports the `POST` method. This is primarily intended for project routing in serverless environments.
 */
export declare const CatCountRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        count: "count";
        t: "t";
        epoch: "epoch";
        time: "time";
        timestamp: "timestamp";
        ts: "ts";
        hms: "hms";
        hhmmss: "hhmmss";
        dc: "dc";
        "docs.count": "docs.count";
        docsCount: "docsCount";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        count: "count";
        t: "t";
        epoch: "epoch";
        time: "time";
        timestamp: "timestamp";
        ts: "ts";
        hms: "hms";
        hhmmss: "hhmmss";
        dc: "dc";
        "docs.count": "docs.count";
        docsCount: "docsCount";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type CatCountRequest = z.infer<typeof CatCountRequest>;
export declare const CatCountResponse: z.ZodArray<z.ZodObject<{
    epoch: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    t: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    timestamp: z.ZodOptional<z.ZodString>;
    ts: z.ZodOptional<z.ZodString>;
    hms: z.ZodOptional<z.ZodString>;
    hhmmss: z.ZodOptional<z.ZodString>;
    count: z.ZodOptional<z.ZodString>;
    dc: z.ZodOptional<z.ZodString>;
    'docs.count': z.ZodOptional<z.ZodString>;
    docsCount: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatCountResponse = z.infer<typeof CatCountResponse>;
//# sourceMappingURL=cat_count.d.ts.map