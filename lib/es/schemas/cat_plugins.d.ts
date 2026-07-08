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
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const CatCatPluginsColumn: z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    description: "description";
    name: "name";
    version: "version";
    n: "n";
    v: "v";
    d: "d";
    c: "c";
    component: "component";
}>, z.ZodString]>;
export type CatCatPluginsColumn = z.infer<typeof CatCatPluginsColumn>;
export declare const CatCatPluginsColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    description: "description";
    name: "name";
    version: "version";
    n: "n";
    v: "v";
    d: "d";
    c: "c";
    component: "component";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    description: "description";
    name: "name";
    version: "version";
    n: "n";
    v: "v";
    d: "d";
    c: "c";
    component: "component";
}>, z.ZodString]>>]>;
export type CatCatPluginsColumns = z.infer<typeof CatCatPluginsColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatPluginsPluginsRecord: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    component: z.ZodOptional<z.ZodString>;
    c: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    v: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    d: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatPluginsPluginsRecord = z.infer<typeof CatPluginsPluginsRecord>;
/**
 * Get plugin information.
 *
 * Get a list of plugins running on each node of a cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 */
export declare const CatPluginsRequest: z.ZodObject<{
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        description: "description";
        name: "name";
        version: "version";
        n: "n";
        v: "v";
        d: "d";
        c: "c";
        component: "component";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        description: "description";
        name: "name";
        version: "version";
        n: "n";
        v: "v";
        d: "d";
        c: "c";
        component: "component";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include_bootstrap: z.ZodOptional<z.ZodBoolean>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatPluginsRequest = z.infer<typeof CatPluginsRequest>;
export declare const CatPluginsResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    component: z.ZodOptional<z.ZodString>;
    c: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    v: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    d: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatPluginsResponse = z.infer<typeof CatPluginsResponse>;
//# sourceMappingURL=cat_plugins.d.ts.map