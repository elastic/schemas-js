import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const GetScriptContextContextMethodParam: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type GetScriptContextContextMethodParam = z.infer<typeof GetScriptContextContextMethodParam>;
export declare const GetScriptContextContextMethod: z.ZodObject<{
    name: z.ZodString;
    return_type: z.ZodString;
    params: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetScriptContextContextMethod = z.infer<typeof GetScriptContextContextMethod>;
export declare const GetScriptContextContext: z.ZodObject<{
    methods: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        return_type: z.ZodString;
        params: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    name: z.ZodString;
}, z.core.$strip>;
export type GetScriptContextContext = z.infer<typeof GetScriptContextContext>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get script contexts.
 *
 * Get a list of supported script contexts and their methods.
 */
export declare const GetScriptContextRequest: z.ZodObject<{}, z.core.$strip>;
export type GetScriptContextRequest = z.infer<typeof GetScriptContextRequest>;
export declare const GetScriptContextResponse: z.ZodObject<{
    contexts: z.ZodArray<z.ZodObject<{
        methods: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            return_type: z.ZodString;
            params: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetScriptContextResponse = z.infer<typeof GetScriptContextResponse>;
//# sourceMappingURL=get_script_context.d.ts.map