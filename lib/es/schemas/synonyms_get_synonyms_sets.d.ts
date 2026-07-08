import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Get all synonym sets.
 *
 * Get a summary of all defined synonym sets.
 */
export declare const SynonymsGetSynonymsSetsRequest: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SynonymsGetSynonymsSetsRequest = z.infer<typeof SynonymsGetSynonymsSetsRequest>;
export declare const SynonymsGetSynonymsSetsSynonymsSetItem: z.ZodObject<{
    synonyms_set: z.ZodString;
    count: z.ZodNumber;
}, z.core.$strip>;
export type SynonymsGetSynonymsSetsSynonymsSetItem = z.infer<typeof SynonymsGetSynonymsSetsSynonymsSetItem>;
export declare const SynonymsGetSynonymsSetsResponse: z.ZodObject<{
    count: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        synonyms_set: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SynonymsGetSynonymsSetsResponse = z.infer<typeof SynonymsGetSynonymsSetsResponse>;
//# sourceMappingURL=synonyms_get_synonyms_sets.d.ts.map