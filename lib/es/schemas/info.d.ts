import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get cluster info.
 *
 * Get basic build, version, and cluster information.
 * ::: In Serverless, `version.number` always reports the next target Elasticsearch release version at the time of the request. Serverless does not track to a traditional release versioning model; it is continuously updated. The version number is provided to maintain compatibility with existing clients, but it is not meaningful for assessing feature availability. Clients should detect a Serverless environment by checking for `build_flavor: serverless`.
 */
export declare const InfoRequest: z.ZodObject<{}, z.core.$strip>;
export type InfoRequest = z.infer<typeof InfoRequest>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const ElasticsearchVersionInfo: z.ZodObject<{
    build_date: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    build_flavor: z.ZodString;
    build_hash: z.ZodString;
    build_snapshot: z.ZodBoolean;
    build_type: z.ZodString;
    lucene_version: z.ZodString;
    minimum_index_compatibility_version: z.ZodString;
    minimum_wire_compatibility_version: z.ZodString;
    number: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchVersionInfo = z.infer<typeof ElasticsearchVersionInfo>;
export declare const InfoResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    cluster_uuid: z.ZodString;
    name: z.ZodString;
    tagline: z.ZodString;
    version: z.ZodObject<{
        build_date: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        build_flavor: z.ZodString;
        build_hash: z.ZodString;
        build_snapshot: z.ZodBoolean;
        build_type: z.ZodString;
        lucene_version: z.ZodString;
        minimum_index_compatibility_version: z.ZodString;
        minimum_wire_compatibility_version: z.ZodString;
        number: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InfoResponse = z.infer<typeof InfoResponse>;
//# sourceMappingURL=info.d.ts.map