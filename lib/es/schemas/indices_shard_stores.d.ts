import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesShardStoresShardStoreAllocation: z.ZodEnum<{
    primary: "primary";
    replica: "replica";
    unused: "unused";
}>;
export type IndicesShardStoresShardStoreAllocation = z.infer<typeof IndicesShardStoresShardStoreAllocation>;
export declare const IndicesShardStoresShardStoreException: z.ZodObject<{
    reason: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type IndicesShardStoresShardStoreException = z.infer<typeof IndicesShardStoresShardStoreException>;
export declare const IndicesShardStoresShardStore: z.ZodObject<{
    allocation: z.ZodEnum<{
        primary: "primary";
        replica: "replica";
        unused: "unused";
    }>;
    allocation_id: z.ZodOptional<z.ZodString>;
    store_exception: z.ZodOptional<z.ZodObject<{
        reason: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$catchall<z.ZodAny>>;
export type IndicesShardStoresShardStore = z.infer<typeof IndicesShardStoresShardStore>;
export declare const IndicesShardStoresShardStoreWrapper: z.ZodObject<{
    stores: z.ZodArray<z.ZodObject<{
        allocation: z.ZodEnum<{
            primary: "primary";
            replica: "replica";
            unused: "unused";
        }>;
        allocation_id: z.ZodOptional<z.ZodString>;
        store_exception: z.ZodOptional<z.ZodObject<{
            reason: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$catchall<z.ZodAny>>>;
}, z.core.$strip>;
export type IndicesShardStoresShardStoreWrapper = z.infer<typeof IndicesShardStoresShardStoreWrapper>;
export declare const IndicesShardStoresIndicesShardStores: z.ZodObject<{
    shards: z.ZodRecord<z.ZodString, z.ZodObject<{
        stores: z.ZodArray<z.ZodObject<{
            allocation: z.ZodEnum<{
                primary: "primary";
                replica: "replica";
                unused: "unused";
            }>;
            allocation_id: z.ZodOptional<z.ZodString>;
            store_exception: z.ZodOptional<z.ZodObject<{
                reason: z.ZodString;
                type: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$catchall<z.ZodAny>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesShardStoresIndicesShardStores = z.infer<typeof IndicesShardStoresIndicesShardStores>;
export declare const IndicesShardStoresShardStoreStatus: z.ZodEnum<{
    all: "all";
    green: "green";
    yellow: "yellow";
    red: "red";
}>;
export type IndicesShardStoresShardStoreStatus = z.infer<typeof IndicesShardStoresShardStoreStatus>;
/**
 * Get index shard stores.
 *
 * Get store information about replica shards in one or more indices.
 * For data streams, the API retrieves store information for the stream's backing indices.
 *
 * The index shard stores API returns the following information:
 *
 * * The node on which each replica shard exists.
 * * The allocation ID for each replica shard.
 * * A unique ID for each replica shard.
 * * Any errors encountered while opening the shard index or from an earlier failure.
 *
 * By default, the API returns store information only for primary shards that are unassigned or have one or more unassigned replica shards.
 */
export declare const IndicesShardStoresRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
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
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        all: "all";
        green: "green";
        yellow: "yellow";
        red: "red";
    }>, z.ZodArray<z.ZodEnum<{
        all: "all";
        green: "green";
        yellow: "yellow";
        red: "red";
    }>>]>>;
}, z.core.$strip>;
export type IndicesShardStoresRequest = z.infer<typeof IndicesShardStoresRequest>;
export declare const IndicesShardStoresResponse: z.ZodObject<{
    indices: z.ZodRecord<z.ZodString, z.ZodObject<{
        shards: z.ZodRecord<z.ZodString, z.ZodObject<{
            stores: z.ZodArray<z.ZodObject<{
                allocation: z.ZodEnum<{
                    primary: "primary";
                    replica: "replica";
                    unused: "unused";
                }>;
                allocation_id: z.ZodOptional<z.ZodString>;
                store_exception: z.ZodOptional<z.ZodObject<{
                    reason: z.ZodString;
                    type: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$catchall<z.ZodAny>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesShardStoresResponse = z.infer<typeof IndicesShardStoresResponse>;
//# sourceMappingURL=indices_shard_stores.d.ts.map