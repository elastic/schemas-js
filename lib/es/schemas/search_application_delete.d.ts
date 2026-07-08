import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a search application.
 *
 * Remove a search application and its associated alias. Indices attached to the search application are not removed.
 */
export declare const SearchApplicationDeleteRequest: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type SearchApplicationDeleteRequest = z.infer<typeof SearchApplicationDeleteRequest>;
export declare const SearchApplicationDeleteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SearchApplicationDeleteResponse = z.infer<typeof SearchApplicationDeleteResponse>;
//# sourceMappingURL=search_application_delete.d.ts.map