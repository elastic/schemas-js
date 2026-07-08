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
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ulong: z.ZodNumber;
export type ulong = z.infer<typeof ulong>;
export declare const XpackUsageSecurityRolesDlsBitSetCache: z.ZodObject<{
    count: z.ZodNumber;
    memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    memory_in_bytes: z.ZodNumber;
    hits: z.ZodNumber;
    misses: z.ZodNumber;
    evictions: z.ZodNumber;
    hits_time_in_millis: z.ZodAny;
    misses_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type XpackUsageSecurityRolesDlsBitSetCache = z.infer<typeof XpackUsageSecurityRolesDlsBitSetCache>;
export declare const XpackUsageSecurityRolesDls: z.ZodObject<{
    bit_set_cache: z.ZodObject<{
        count: z.ZodNumber;
        memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_in_bytes: z.ZodNumber;
        hits: z.ZodNumber;
        misses: z.ZodNumber;
        evictions: z.ZodNumber;
        hits_time_in_millis: z.ZodAny;
        misses_time_in_millis: z.ZodAny;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageSecurityRolesDls = z.infer<typeof XpackUsageSecurityRolesDls>;
export declare const SecurityRolesStats: z.ZodObject<{
    dls: z.ZodObject<{
        bit_set_cache: z.ZodObject<{
            count: z.ZodNumber;
            memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_in_bytes: z.ZodNumber;
            hits: z.ZodNumber;
            misses: z.ZodNumber;
            evictions: z.ZodNumber;
            hits_time_in_millis: z.ZodAny;
            misses_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SecurityRolesStats = z.infer<typeof SecurityRolesStats>;
export declare const SecurityNodeSecurityStats: z.ZodObject<{
    roles: z.ZodObject<{
        dls: z.ZodObject<{
            bit_set_cache: z.ZodObject<{
                count: z.ZodNumber;
                memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_in_bytes: z.ZodNumber;
                hits: z.ZodNumber;
                misses: z.ZodNumber;
                evictions: z.ZodNumber;
                hits_time_in_millis: z.ZodAny;
                misses_time_in_millis: z.ZodAny;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SecurityNodeSecurityStats = z.infer<typeof SecurityNodeSecurityStats>;
/**
 * Get security stats.
 *
 * Gather security usage statistics from all node(s) within the cluster.
 */
export declare const SecurityGetStatsRequest: z.ZodObject<{}, z.core.$strip>;
export type SecurityGetStatsRequest = z.infer<typeof SecurityGetStatsRequest>;
export declare const SecurityGetStatsResponse: z.ZodObject<{
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        roles: z.ZodObject<{
            dls: z.ZodObject<{
                bit_set_cache: z.ZodObject<{
                    count: z.ZodNumber;
                    memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    memory_in_bytes: z.ZodNumber;
                    hits: z.ZodNumber;
                    misses: z.ZodNumber;
                    evictions: z.ZodNumber;
                    hits_time_in_millis: z.ZodAny;
                    misses_time_in_millis: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityGetStatsResponse = z.infer<typeof SecurityGetStatsResponse>;
//# sourceMappingURL=security_get_stats.d.ts.map