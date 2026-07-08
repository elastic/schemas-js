import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const ScriptLanguage: z.ZodUnion<readonly [z.ZodEnum<{
    painless: "painless";
    expression: "expression";
    mustache: "mustache";
    java: "java";
}>, z.ZodString]>;
export type ScriptLanguage = z.infer<typeof ScriptLanguage>;
export declare const GetScriptLanguagesLanguageContext: z.ZodObject<{
    contexts: z.ZodArray<z.ZodString>;
    language: z.ZodUnion<readonly [z.ZodEnum<{
        painless: "painless";
        expression: "expression";
        mustache: "mustache";
        java: "java";
    }>, z.ZodString]>;
}, z.core.$strip>;
export type GetScriptLanguagesLanguageContext = z.infer<typeof GetScriptLanguagesLanguageContext>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get script languages.
 *
 * Get a list of available script types, languages, and contexts.
 */
export declare const GetScriptLanguagesRequest: z.ZodObject<{}, z.core.$strip>;
export type GetScriptLanguagesRequest = z.infer<typeof GetScriptLanguagesRequest>;
export declare const GetScriptLanguagesResponse: z.ZodObject<{
    language_contexts: z.ZodArray<z.ZodObject<{
        contexts: z.ZodArray<z.ZodString>;
        language: z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>;
    }, z.core.$strip>>;
    types_allowed: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetScriptLanguagesResponse = z.infer<typeof GetScriptLanguagesResponse>;
//# sourceMappingURL=get_script_languages.d.ts.map