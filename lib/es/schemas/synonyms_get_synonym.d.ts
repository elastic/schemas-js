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
export declare const SynonymsSynonymString: z.ZodString;
export type SynonymsSynonymString = z.infer<typeof SynonymsSynonymString>;
export declare const SynonymsSynonymRuleRead: z.ZodObject<{
    id: z.ZodString;
    synonyms: z.ZodString;
}, z.core.$strip>;
export type SynonymsSynonymRuleRead = z.infer<typeof SynonymsSynonymRuleRead>;
/** Get a synonym set. */
export declare const SynonymsGetSynonymRequest: z.ZodObject<{
    id: z.ZodString;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    search_after: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SynonymsGetSynonymRequest = z.infer<typeof SynonymsGetSynonymRequest>;
export declare const SynonymsGetSynonymResponse: z.ZodObject<{
    count: z.ZodNumber;
    synonyms_set: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        synonyms: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SynonymsGetSynonymResponse = z.infer<typeof SynonymsGetSynonymResponse>;
//# sourceMappingURL=synonyms_get_synonym.d.ts.map