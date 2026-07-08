import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Remove policies from an index.
 *
 * Remove the assigned lifecycle policies from an index or a data stream's backing indices.
 * It also stops managing the indices.
 */
export declare const IlmRemovePolicyRequest: z.ZodObject<{
    index: z.ZodString;
}, z.core.$strip>;
export type IlmRemovePolicyRequest = z.infer<typeof IlmRemovePolicyRequest>;
export declare const IlmRemovePolicyResponse: z.ZodObject<{
    failed_indexes: z.ZodArray<z.ZodString>;
    has_failures: z.ZodBoolean;
}, z.core.$strip>;
export type IlmRemovePolicyResponse = z.infer<typeof IlmRemovePolicyResponse>;
//# sourceMappingURL=ilm_remove_policy.d.ts.map