import { z } from 'zod';
export declare const TrafficFilterRulesetResponse: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type TrafficFilterRulesetResponse = z.infer<typeof TrafficFilterRulesetResponse>;
export declare const TrafficFilterEgressRule: z.ZodObject<{
    target: z.ZodString;
    ports: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    protocol: z.ZodEnum<{
        all: "all";
        tcp: "tcp";
        udp: "udp";
    }>;
}, z.core.$strip>;
export type TrafficFilterEgressRule = z.infer<typeof TrafficFilterEgressRule>;
export declare const TrafficFilterRule: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    remote_cluster_org_id: z.ZodOptional<z.ZodString>;
    remote_cluster_id: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    azure_endpoint_name: z.ZodOptional<z.ZodString>;
    azure_endpoint_guid: z.ZodOptional<z.ZodString>;
    egress_rule: z.ZodOptional<z.ZodObject<{
        target: z.ZodString;
        ports: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        protocol: z.ZodEnum<{
            all: "all";
            tcp: "tcp";
            udp: "udp";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TrafficFilterRule = z.infer<typeof TrafficFilterRule>;
export declare const TrafficFilterRulesetRequest: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodString;
    include_by_default: z.ZodBoolean;
    region: z.ZodString;
    rules: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        remote_cluster_org_id: z.ZodOptional<z.ZodString>;
        remote_cluster_id: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        azure_endpoint_name: z.ZodOptional<z.ZodString>;
        azure_endpoint_guid: z.ZodOptional<z.ZodString>;
        egress_rule: z.ZodOptional<z.ZodObject<{
            target: z.ZodString;
            ports: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            protocol: z.ZodEnum<{
                all: "all";
                tcp: "tcp";
                udp: "udp";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TrafficFilterRulesetRequest = z.infer<typeof TrafficFilterRulesetRequest>;
//# sourceMappingURL=update_traffic_filter_ruleset.d.ts.map