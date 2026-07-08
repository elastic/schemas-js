import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * Get CAT help.
 *
 * Get help for the CAT APIs.
 */
export declare const CatHelpRequest: z.ZodObject<{}, z.core.$strip>;
export type CatHelpRequest = z.infer<typeof CatHelpRequest>;
export declare const CatHelpResponse: z.ZodObject<{}, z.core.$strip>;
export type CatHelpResponse = z.infer<typeof CatHelpResponse>;
//# sourceMappingURL=cat_help.d.ts.map