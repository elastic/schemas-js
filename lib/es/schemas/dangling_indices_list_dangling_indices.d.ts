import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const DanglingIndicesListDanglingIndicesDanglingIndex: z.ZodObject<{
    index_name: z.ZodString;
    index_uuid: z.ZodString;
    creation_date_millis: z.ZodAny;
    node_ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type DanglingIndicesListDanglingIndicesDanglingIndex = z.infer<typeof DanglingIndicesListDanglingIndicesDanglingIndex>;
/**
 * Get the dangling indices.
 *
 * If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling.
 * For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
 *
 * Use this API to list dangling indices, which you can then import or delete.
 */
export declare const DanglingIndicesListDanglingIndicesRequest: z.ZodObject<{}, z.core.$strip>;
export type DanglingIndicesListDanglingIndicesRequest = z.infer<typeof DanglingIndicesListDanglingIndicesRequest>;
export declare const DanglingIndicesListDanglingIndicesResponse: z.ZodObject<{
    dangling_indices: z.ZodArray<z.ZodObject<{
        index_name: z.ZodString;
        index_uuid: z.ZodString;
        creation_date_millis: z.ZodAny;
        node_ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DanglingIndicesListDanglingIndicesResponse = z.infer<typeof DanglingIndicesListDanglingIndicesResponse>;
//# sourceMappingURL=dangling_indices_list_dangling_indices.d.ts.map