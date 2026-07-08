import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatRepositoriesRepositoriesRecord: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    repoId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CatRepositoriesRepositoriesRecord = z.infer<typeof CatRepositoriesRepositoriesRecord>;
/**
 * Get snapshot repository information.
 *
 * Get a list of snapshot repositories for a cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot repository API.
 */
export declare const CatRepositoriesRequest: z.ZodObject<{
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatRepositoriesRequest = z.infer<typeof CatRepositoriesRequest>;
export declare const CatRepositoriesResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    repoId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type CatRepositoriesResponse = z.infer<typeof CatRepositoriesResponse>;
//# sourceMappingURL=cat_repositories.d.ts.map