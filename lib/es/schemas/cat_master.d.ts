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
export declare const CatCatMasterColumn: z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    h: "h";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
}>, z.ZodString]>;
export type CatCatMasterColumn = z.infer<typeof CatCatMasterColumn>;
export declare const CatCatMasterColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    h: "h";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    h: "h";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
}>, z.ZodString]>>]>;
export type CatCatMasterColumns = z.infer<typeof CatCatMasterColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatMasterMasterRecord: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatMasterMasterRecord = z.infer<typeof CatMasterMasterRecord>;
/**
 * Get master node information.
 *
 * Get information about the master node, including the ID, bound IP address, and name.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 */
export declare const CatMasterRequest: z.ZodObject<{
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        h: "h";
        host: "host";
        ip: "ip";
        node: "node";
        n: "n";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        h: "h";
        host: "host";
        ip: "ip";
        node: "node";
        n: "n";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatMasterRequest = z.infer<typeof CatMasterRequest>;
export declare const CatMasterResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatMasterResponse = z.infer<typeof CatMasterResponse>;
//# sourceMappingURL=cat_master.d.ts.map