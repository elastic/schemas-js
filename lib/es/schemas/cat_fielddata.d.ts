import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatFieldDataColumn: z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    field: "field";
    size: "size";
    f: "f";
    h: "h";
    s: "s";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
}>, z.ZodString]>;
export type CatCatFieldDataColumn = z.infer<typeof CatCatFieldDataColumn>;
export declare const CatCatFieldDataColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    field: "field";
    size: "size";
    f: "f";
    h: "h";
    s: "s";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    field: "field";
    size: "size";
    f: "f";
    h: "h";
    s: "s";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
}>, z.ZodString]>>]>;
export type CatCatFieldDataColumns = z.infer<typeof CatCatFieldDataColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatFielddataFielddataRecord: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    field: z.ZodOptional<z.ZodString>;
    f: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatFielddataFielddataRecord = z.infer<typeof CatFielddataFielddataRecord>;
/**
 * Get field data cache information.
 *
 * Get the amount of heap memory currently used by the field data cache on every data node in the cluster.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the nodes stats API.
 */
export declare const CatFielddataRequest: z.ZodObject<{
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        field: "field";
        size: "size";
        f: "f";
        h: "h";
        s: "s";
        host: "host";
        ip: "ip";
        node: "node";
        n: "n";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        field: "field";
        size: "size";
        f: "f";
        h: "h";
        s: "s";
        host: "host";
        ip: "ip";
        node: "node";
        n: "n";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type CatFielddataRequest = z.infer<typeof CatFielddataRequest>;
export declare const CatFielddataResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    field: z.ZodOptional<z.ZodString>;
    f: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatFielddataResponse = z.infer<typeof CatFielddataResponse>;
//# sourceMappingURL=cat_fielddata.d.ts.map