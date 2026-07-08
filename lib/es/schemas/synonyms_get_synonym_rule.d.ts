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
export declare const SynonymsSynonymString: z.ZodString;
export type SynonymsSynonymString = z.infer<typeof SynonymsSynonymString>;
export declare const SynonymsSynonymRuleRead: z.ZodObject<{
    id: z.ZodString;
    synonyms: z.ZodString;
}, z.core.$strip>;
export type SynonymsSynonymRuleRead = z.infer<typeof SynonymsSynonymRuleRead>;
/**
 * Get a synonym rule.
 *
 * Get a synonym rule from a synonym set.
 */
export declare const SynonymsGetSynonymRuleRequest: z.ZodObject<{
    set_id: z.ZodString;
    rule_id: z.ZodString;
}, z.core.$strip>;
export type SynonymsGetSynonymRuleRequest = z.infer<typeof SynonymsGetSynonymRuleRequest>;
export declare const SynonymsGetSynonymRuleResponse: z.ZodObject<{
    id: z.ZodString;
    synonyms: z.ZodString;
}, z.core.$strip>;
export type SynonymsGetSynonymRuleResponse = z.infer<typeof SynonymsGetSynonymRuleResponse>;
//# sourceMappingURL=synonyms_get_synonym_rule.d.ts.map