import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const GrokPattern: z.ZodString;
export type GrokPattern = z.infer<typeof GrokPattern>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const TextStructureTestGrokPatternMatchedField: z.ZodObject<{
    match: z.ZodString;
    offset: z.ZodNumber;
    length: z.ZodNumber;
}, z.core.$strip>;
export type TextStructureTestGrokPatternMatchedField = z.infer<typeof TextStructureTestGrokPatternMatchedField>;
export declare const TextStructureTestGrokPatternMatchedText: z.ZodObject<{
    matched: z.ZodBoolean;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        match: z.ZodString;
        offset: z.ZodNumber;
        length: z.ZodNumber;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export type TextStructureTestGrokPatternMatchedText = z.infer<typeof TextStructureTestGrokPatternMatchedText>;
/**
 * Test a Grok pattern.
 *
 * Test a Grok pattern on one or more lines of text.
 * The API indicates whether the lines match the pattern together with the offsets and lengths of the matched substrings.
 */
export declare const TextStructureTestGrokPatternRequest: z.ZodObject<{
    ecs_compatibility: z.ZodOptional<z.ZodString>;
    grok_pattern: z.ZodString;
    text: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type TextStructureTestGrokPatternRequest = z.infer<typeof TextStructureTestGrokPatternRequest>;
export declare const TextStructureTestGrokPatternResponse: z.ZodObject<{
    matches: z.ZodArray<z.ZodObject<{
        matched: z.ZodBoolean;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            match: z.ZodString;
            offset: z.ZodNumber;
            length: z.ZodNumber;
        }, z.core.$strip>>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TextStructureTestGrokPatternResponse = z.infer<typeof TextStructureTestGrokPatternResponse>;
//# sourceMappingURL=text_structure_test_grok_pattern.d.ts.map