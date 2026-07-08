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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatNodeattrsColumn: z.ZodUnion<readonly [z.ZodEnum<{
    value: "value";
    id: "id";
    i: "i";
    h: "h";
    host: "host";
    ip: "ip";
    node: "node";
    p: "p";
    nodeId: "nodeId";
    pid: "pid";
    port: "port";
    po: "po";
    attr: "attr";
    "attr.name": "attr.name";
    "attr.value": "attr.value";
}>, z.ZodString]>;
export type CatCatNodeattrsColumn = z.infer<typeof CatCatNodeattrsColumn>;
export declare const CatCatNodeattrsColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    value: "value";
    id: "id";
    i: "i";
    h: "h";
    host: "host";
    ip: "ip";
    node: "node";
    p: "p";
    nodeId: "nodeId";
    pid: "pid";
    port: "port";
    po: "po";
    attr: "attr";
    "attr.name": "attr.name";
    "attr.value": "attr.value";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    value: "value";
    id: "id";
    i: "i";
    h: "h";
    host: "host";
    ip: "ip";
    node: "node";
    p: "p";
    nodeId: "nodeId";
    pid: "pid";
    port: "port";
    po: "po";
    attr: "attr";
    "attr.name": "attr.name";
    "attr.value": "attr.value";
}>, z.ZodString]>>]>;
export type CatCatNodeattrsColumns = z.infer<typeof CatCatNodeattrsColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatNodeattrsNodeAttributesRecord: z.ZodObject<{
    node: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    pid: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodString>;
    attr: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatNodeattrsNodeAttributesRecord = z.infer<typeof CatNodeattrsNodeAttributesRecord>;
/**
 * Get node attribute information.
 *
 * Get information about custom node attributes.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 */
export declare const CatNodeattrsRequest: z.ZodObject<{
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        value: "value";
        id: "id";
        i: "i";
        h: "h";
        host: "host";
        ip: "ip";
        node: "node";
        p: "p";
        nodeId: "nodeId";
        pid: "pid";
        port: "port";
        po: "po";
        attr: "attr";
        "attr.name": "attr.name";
        "attr.value": "attr.value";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        value: "value";
        id: "id";
        i: "i";
        h: "h";
        host: "host";
        ip: "ip";
        node: "node";
        p: "p";
        nodeId: "nodeId";
        pid: "pid";
        port: "port";
        po: "po";
        attr: "attr";
        "attr.name": "attr.name";
        "attr.value": "attr.value";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatNodeattrsRequest = z.infer<typeof CatNodeattrsRequest>;
export declare const CatNodeattrsResponse: z.ZodArray<z.ZodObject<{
    node: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    pid: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    i: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodString>;
    attr: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatNodeattrsResponse = z.infer<typeof CatNodeattrsResponse>;
//# sourceMappingURL=cat_nodeattrs.d.ts.map