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
 * Enroll a node.
 *
 * Enroll a new node to allow it to join an existing cluster with security features enabled.
 *
 * The response contains all the necessary information for the joining node to bootstrap discovery and security related settings so that it can successfully join the cluster.
 * The response contains key and certificate material that allows the caller to generate valid signed certificates for the HTTP layer of all nodes in the cluster.
 */
export declare const SecurityEnrollNodeRequest: z.ZodObject<{}, z.core.$strip>;
export type SecurityEnrollNodeRequest = z.infer<typeof SecurityEnrollNodeRequest>;
export declare const SecurityEnrollNodeResponse: z.ZodObject<{
    http_ca_key: z.ZodString;
    http_ca_cert: z.ZodString;
    transport_ca_cert: z.ZodString;
    transport_key: z.ZodString;
    transport_cert: z.ZodString;
    nodes_addresses: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SecurityEnrollNodeResponse = z.infer<typeof SecurityEnrollNodeResponse>;
//# sourceMappingURL=security_enroll_node.d.ts.map