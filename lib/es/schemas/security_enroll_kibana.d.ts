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
 * Enroll Kibana.
 *
 * Enable a Kibana instance to configure itself for communication with a secured Elasticsearch cluster.
 *
 * NOTE: This API is currently intended for internal use only by Kibana.
 * Kibana uses this API internally to configure itself for communications with an Elasticsearch cluster that already has security features enabled.
 */
export declare const SecurityEnrollKibanaRequest: z.ZodObject<{}, z.core.$strip>;
export type SecurityEnrollKibanaRequest = z.infer<typeof SecurityEnrollKibanaRequest>;
export declare const SecurityEnrollKibanaToken: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type SecurityEnrollKibanaToken = z.infer<typeof SecurityEnrollKibanaToken>;
export declare const SecurityEnrollKibanaResponse: z.ZodObject<{
    token: z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>;
    http_ca: z.ZodString;
}, z.core.$strip>;
export type SecurityEnrollKibanaResponse = z.infer<typeof SecurityEnrollKibanaResponse>;
//# sourceMappingURL=security_enroll_kibana.d.ts.map