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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Render a search application query.
 *
 * Generate an Elasticsearch query using the specified query parameters and the search template associated with the search application or a default template if none is specified.
 * If a parameter used in the search template is not specified in `params`, the parameter's default value will be used.
 * The API returns the specific Elasticsearch query that would be generated and run by calling the search application search API.
 *
 * You must have `read` privileges on the backing alias of the search application.
 */
export declare const SearchApplicationRenderQueryRequest: z.ZodObject<{
    name: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type SearchApplicationRenderQueryRequest = z.infer<typeof SearchApplicationRenderQueryRequest>;
export declare const SearchApplicationRenderQueryResponse: z.ZodObject<{}, z.core.$strip>;
export type SearchApplicationRenderQueryResponse = z.infer<typeof SearchApplicationRenderQueryResponse>;
//# sourceMappingURL=search_application_render_query.d.ts.map