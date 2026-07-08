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
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const Percentage: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
export type Percentage = z.infer<typeof Percentage>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatAllocationColumn: z.ZodUnion<readonly [z.ZodEnum<{
    shards: "shards";
    h: "h";
    s: "s";
    "shards.undesired": "shards.undesired";
    "write_load.forecast": "write_load.forecast";
    wlf: "wlf";
    writeLoadForecast: "writeLoadForecast";
    "disk.indices.forecast": "disk.indices.forecast";
    dif: "dif";
    diskIndicesForecast: "diskIndicesForecast";
    "disk.indices": "disk.indices";
    di: "di";
    diskIndices: "diskIndices";
    "disk.used": "disk.used";
    du: "du";
    diskUsed: "diskUsed";
    "disk.avail": "disk.avail";
    da: "da";
    diskAvail: "diskAvail";
    "disk.total": "disk.total";
    dt: "dt";
    diskTotal: "diskTotal";
    "disk.percent": "disk.percent";
    dp: "dp";
    diskPercent: "diskPercent";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
    "node.role": "node.role";
    r: "r";
    role: "role";
    nodeRole: "nodeRole";
}>, z.ZodString]>;
export type CatCatAllocationColumn = z.infer<typeof CatCatAllocationColumn>;
export declare const CatCatAllocationColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    shards: "shards";
    h: "h";
    s: "s";
    "shards.undesired": "shards.undesired";
    "write_load.forecast": "write_load.forecast";
    wlf: "wlf";
    writeLoadForecast: "writeLoadForecast";
    "disk.indices.forecast": "disk.indices.forecast";
    dif: "dif";
    diskIndicesForecast: "diskIndicesForecast";
    "disk.indices": "disk.indices";
    di: "di";
    diskIndices: "diskIndices";
    "disk.used": "disk.used";
    du: "du";
    diskUsed: "diskUsed";
    "disk.avail": "disk.avail";
    da: "da";
    diskAvail: "diskAvail";
    "disk.total": "disk.total";
    dt: "dt";
    diskTotal: "diskTotal";
    "disk.percent": "disk.percent";
    dp: "dp";
    diskPercent: "diskPercent";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
    "node.role": "node.role";
    r: "r";
    role: "role";
    nodeRole: "nodeRole";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    shards: "shards";
    h: "h";
    s: "s";
    "shards.undesired": "shards.undesired";
    "write_load.forecast": "write_load.forecast";
    wlf: "wlf";
    writeLoadForecast: "writeLoadForecast";
    "disk.indices.forecast": "disk.indices.forecast";
    dif: "dif";
    diskIndicesForecast: "diskIndicesForecast";
    "disk.indices": "disk.indices";
    di: "di";
    diskIndices: "diskIndices";
    "disk.used": "disk.used";
    du: "du";
    diskUsed: "diskUsed";
    "disk.avail": "disk.avail";
    da: "da";
    diskAvail: "diskAvail";
    "disk.total": "disk.total";
    dt: "dt";
    diskTotal: "diskTotal";
    "disk.percent": "disk.percent";
    dp: "dp";
    diskPercent: "diskPercent";
    host: "host";
    ip: "ip";
    node: "node";
    n: "n";
    "node.role": "node.role";
    r: "r";
    role: "role";
    nodeRole: "nodeRole";
}>, z.ZodString]>>]>;
export type CatCatAllocationColumns = z.infer<typeof CatCatAllocationColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatAllocationAllocationRecord: z.ZodObject<{
    shards: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
    'shards.undesired': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    'write_load.forecast': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodAny, z.ZodString]>, z.ZodNull]>>;
    wlf: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodAny, z.ZodString]>, z.ZodNull]>>;
    writeLoadForecast: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodAny, z.ZodString]>, z.ZodNull]>>;
    'disk.indices.forecast': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    dif: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskIndicesForecast: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.indices': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    di: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskIndices: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.used': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    du: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskUsed: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.avail': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    da: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskAvail: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.total': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    dt: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskTotal: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.percent': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodNull]>>;
    dp: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodNull]>>;
    diskPercent: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodNull]>>;
    host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    node: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    'node.role': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    r: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    role: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    nodeRole: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strip>;
export type CatAllocationAllocationRecord = z.infer<typeof CatAllocationAllocationRecord>;
/**
 * Get shard allocation information.
 *
 * Get a snapshot of the number of shards allocated to each data node and their disk space.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
 */
export declare const CatAllocationRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        shards: "shards";
        h: "h";
        s: "s";
        "shards.undesired": "shards.undesired";
        "write_load.forecast": "write_load.forecast";
        wlf: "wlf";
        writeLoadForecast: "writeLoadForecast";
        "disk.indices.forecast": "disk.indices.forecast";
        dif: "dif";
        diskIndicesForecast: "diskIndicesForecast";
        "disk.indices": "disk.indices";
        di: "di";
        diskIndices: "diskIndices";
        "disk.used": "disk.used";
        du: "du";
        diskUsed: "diskUsed";
        "disk.avail": "disk.avail";
        da: "da";
        diskAvail: "diskAvail";
        "disk.total": "disk.total";
        dt: "dt";
        diskTotal: "diskTotal";
        "disk.percent": "disk.percent";
        dp: "dp";
        diskPercent: "diskPercent";
        host: "host";
        ip: "ip";
        node: "node";
        n: "n";
        "node.role": "node.role";
        r: "r";
        role: "role";
        nodeRole: "nodeRole";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        shards: "shards";
        h: "h";
        s: "s";
        "shards.undesired": "shards.undesired";
        "write_load.forecast": "write_load.forecast";
        wlf: "wlf";
        writeLoadForecast: "writeLoadForecast";
        "disk.indices.forecast": "disk.indices.forecast";
        dif: "dif";
        diskIndicesForecast: "diskIndicesForecast";
        "disk.indices": "disk.indices";
        di: "di";
        diskIndices: "diskIndices";
        "disk.used": "disk.used";
        du: "du";
        diskUsed: "diskUsed";
        "disk.avail": "disk.avail";
        da: "da";
        diskAvail: "diskAvail";
        "disk.total": "disk.total";
        dt: "dt";
        diskTotal: "diskTotal";
        "disk.percent": "disk.percent";
        dp: "dp";
        diskPercent: "diskPercent";
        host: "host";
        ip: "ip";
        node: "node";
        n: "n";
        "node.role": "node.role";
        r: "r";
        role: "role";
        nodeRole: "nodeRole";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatAllocationRequest = z.infer<typeof CatAllocationRequest>;
export declare const CatAllocationResponse: z.ZodArray<z.ZodObject<{
    shards: z.ZodOptional<z.ZodString>;
    s: z.ZodOptional<z.ZodString>;
    'shards.undesired': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    'write_load.forecast': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodAny, z.ZodString]>, z.ZodNull]>>;
    wlf: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodAny, z.ZodString]>, z.ZodNull]>>;
    writeLoadForecast: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodAny, z.ZodString]>, z.ZodNull]>>;
    'disk.indices.forecast': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    dif: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskIndicesForecast: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.indices': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    di: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskIndices: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.used': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    du: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskUsed: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.avail': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    da: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskAvail: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.total': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    dt: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    diskTotal: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodNull]>>;
    'disk.percent': z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodNull]>>;
    dp: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodNull]>>;
    diskPercent: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodNull]>>;
    host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    node: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    'node.role': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    r: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    role: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    nodeRole: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strip>>;
export type CatAllocationResponse = z.infer<typeof CatAllocationResponse>;
//# sourceMappingURL=cat_allocation.d.ts.map