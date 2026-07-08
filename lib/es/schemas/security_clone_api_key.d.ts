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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Clone an API key.
 *
 * Create a copy of an existing API key with a new ID.
 * The cloned key inherits the role descriptors of the source key.
 * This is intended for applications (such as Kibana) that need to
 * create API keys on behalf of a user using an existing API key credential,
 * since derived API keys (API keys created by API keys) are not otherwise supported.
 */
export declare const SecurityCloneApiKeyRequest: z.ZodObject<{
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
    api_key: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    expiration: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type SecurityCloneApiKeyRequest = z.infer<typeof SecurityCloneApiKeyRequest>;
export declare const SecurityCloneApiKeyResponse: z.ZodObject<{
    api_key: z.ZodString;
    expiration: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    name: z.ZodString;
    encoded: z.ZodString;
}, z.core.$strip>;
export type SecurityCloneApiKeyResponse = z.infer<typeof SecurityCloneApiKeyResponse>;
//# sourceMappingURL=security_clone_api_key.d.ts.map