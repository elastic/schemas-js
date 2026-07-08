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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatCircuitBreakerColumn: z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    node_id: "node_id";
    node_name: "node_name";
    nn: "nn";
    breaker: "breaker";
    br: "br";
    limit: "limit";
    l: "l";
    limit_bytes: "limit_bytes";
    lb: "lb";
    estimated: "estimated";
    e: "e";
    estimated_bytes: "estimated_bytes";
    eb: "eb";
    tripped: "tripped";
    t: "t";
    overhead: "overhead";
    o: "o";
}>, z.ZodString]>;
export type CatCatCircuitBreakerColumn = z.infer<typeof CatCatCircuitBreakerColumn>;
export declare const CatCatCircuitBreakerColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    node_id: "node_id";
    node_name: "node_name";
    nn: "nn";
    breaker: "breaker";
    br: "br";
    limit: "limit";
    l: "l";
    limit_bytes: "limit_bytes";
    lb: "lb";
    estimated: "estimated";
    e: "e";
    estimated_bytes: "estimated_bytes";
    eb: "eb";
    tripped: "tripped";
    t: "t";
    overhead: "overhead";
    o: "o";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    id: "id";
    node_id: "node_id";
    node_name: "node_name";
    nn: "nn";
    breaker: "breaker";
    br: "br";
    limit: "limit";
    l: "l";
    limit_bytes: "limit_bytes";
    lb: "lb";
    estimated: "estimated";
    e: "e";
    estimated_bytes: "estimated_bytes";
    eb: "eb";
    tripped: "tripped";
    t: "t";
    overhead: "overhead";
    o: "o";
}>, z.ZodString]>>]>;
export type CatCatCircuitBreakerColumns = z.infer<typeof CatCatCircuitBreakerColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatCircuitBreakerCircuitBreakerRecord: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    node_name: z.ZodOptional<z.ZodString>;
    nn: z.ZodOptional<z.ZodString>;
    breaker: z.ZodOptional<z.ZodString>;
    br: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodString>;
    l: z.ZodOptional<z.ZodString>;
    limit_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    lb: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    estimated: z.ZodOptional<z.ZodString>;
    e: z.ZodOptional<z.ZodString>;
    estimated_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    eb: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    tripped: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
    overhead: z.ZodOptional<z.ZodString>;
    o: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatCircuitBreakerCircuitBreakerRecord = z.infer<typeof CatCircuitBreakerCircuitBreakerRecord>;
/**
 * Get circuit breakers statistics.
 *
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
 */
export declare const CatCircuitBreakerRequest: z.ZodObject<{
    circuit_breaker_patterns: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        node_id: "node_id";
        node_name: "node_name";
        nn: "nn";
        breaker: "breaker";
        br: "br";
        limit: "limit";
        l: "l";
        limit_bytes: "limit_bytes";
        lb: "lb";
        estimated: "estimated";
        e: "e";
        estimated_bytes: "estimated_bytes";
        eb: "eb";
        tripped: "tripped";
        t: "t";
        overhead: "overhead";
        o: "o";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        node_id: "node_id";
        node_name: "node_name";
        nn: "nn";
        breaker: "breaker";
        br: "br";
        limit: "limit";
        l: "l";
        limit_bytes: "limit_bytes";
        lb: "lb";
        estimated: "estimated";
        e: "e";
        estimated_bytes: "estimated_bytes";
        eb: "eb";
        tripped: "tripped";
        t: "t";
        overhead: "overhead";
        o: "o";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatCircuitBreakerRequest = z.infer<typeof CatCircuitBreakerRequest>;
export declare const CatCircuitBreakerResponse: z.ZodArray<z.ZodObject<{
    node_id: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    node_name: z.ZodOptional<z.ZodString>;
    nn: z.ZodOptional<z.ZodString>;
    breaker: z.ZodOptional<z.ZodString>;
    br: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodString>;
    l: z.ZodOptional<z.ZodString>;
    limit_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    lb: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    estimated: z.ZodOptional<z.ZodString>;
    e: z.ZodOptional<z.ZodString>;
    estimated_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    eb: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    tripped: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
    overhead: z.ZodOptional<z.ZodString>;
    o: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatCircuitBreakerResponse = z.infer<typeof CatCircuitBreakerResponse>;
//# sourceMappingURL=cat_circuit_breaker.d.ts.map