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
export declare const CatCatComponentColumn: z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    version: "version";
    a: "a";
    i: "i";
    s: "s";
    n: "n";
    v: "v";
    alias_count: "alias_count";
    mapping_count: "mapping_count";
    m: "m";
    settings_count: "settings_count";
    metadata_count: "metadata_count";
    me: "me";
    included_in: "included_in";
}>, z.ZodString]>;
export type CatCatComponentColumn = z.infer<typeof CatCatComponentColumn>;
export declare const CatCatComponentColumns: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    version: "version";
    a: "a";
    i: "i";
    s: "s";
    n: "n";
    v: "v";
    alias_count: "alias_count";
    mapping_count: "mapping_count";
    m: "m";
    settings_count: "settings_count";
    metadata_count: "metadata_count";
    me: "me";
    included_in: "included_in";
}>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    version: "version";
    a: "a";
    i: "i";
    s: "s";
    n: "n";
    v: "v";
    alias_count: "alias_count";
    mapping_count: "mapping_count";
    m: "m";
    settings_count: "settings_count";
    metadata_count: "metadata_count";
    me: "me";
    included_in: "included_in";
}>, z.ZodString]>>]>;
export type CatCatComponentColumns = z.infer<typeof CatCatComponentColumns>;
export declare const CatCatRequestBase: z.ZodObject<{}, z.core.$strip>;
export type CatCatRequestBase = z.infer<typeof CatCatRequestBase>;
export declare const CatComponentTemplatesComponentTemplate: z.ZodObject<{
    name: z.ZodString;
    version: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    alias_count: z.ZodString;
    mapping_count: z.ZodString;
    settings_count: z.ZodString;
    metadata_count: z.ZodString;
    included_in: z.ZodString;
}, z.core.$strip>;
export type CatComponentTemplatesComponentTemplate = z.infer<typeof CatComponentTemplatesComponentTemplate>;
/**
 * Get component templates.
 *
 * Get information about component templates in a cluster.
 * Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the get component template API.
 */
export declare const CatComponentTemplatesRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    h: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        name: "name";
        version: "version";
        a: "a";
        i: "i";
        s: "s";
        n: "n";
        v: "v";
        alias_count: "alias_count";
        mapping_count: "mapping_count";
        m: "m";
        settings_count: "settings_count";
        metadata_count: "metadata_count";
        me: "me";
        included_in: "included_in";
    }>, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        name: "name";
        version: "version";
        a: "a";
        i: "i";
        s: "s";
        n: "n";
        v: "v";
        alias_count: "alias_count";
        mapping_count: "mapping_count";
        m: "m";
        settings_count: "settings_count";
        metadata_count: "metadata_count";
        me: "me";
        included_in: "included_in";
    }>, z.ZodString]>>]>>;
    s: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CatComponentTemplatesRequest = z.infer<typeof CatComponentTemplatesRequest>;
export declare const CatComponentTemplatesResponse: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    version: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    alias_count: z.ZodString;
    mapping_count: z.ZodString;
    settings_count: z.ZodString;
    metadata_count: z.ZodString;
    included_in: z.ZodString;
}, z.core.$strip>>;
export type CatComponentTemplatesResponse = z.infer<typeof CatComponentTemplatesResponse>;
//# sourceMappingURL=cat_component_templates.d.ts.map