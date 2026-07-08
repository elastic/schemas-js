import { z } from 'zod';
export declare const FilterAssociation: z.ZodObject<{
    entity_type: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>;
export type FilterAssociation = z.infer<typeof FilterAssociation>;
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
export declare const TrafficFilterRulesetInfo: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        ip: "ip";
        remote_cluster: "remote_cluster";
        azure_private_endpoint: "azure_private_endpoint";
        gcp_private_service_connect_endpoint: "gcp_private_service_connect_endpoint";
        vpce: "vpce";
        egress_firewall: "egress_firewall";
    }>;
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
    associations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        entity_type: z.ZodString;
        id: z.ZodString;
    }, z.core.$strip>>>;
    total_associations: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type TrafficFilterRulesetInfo = z.infer<typeof TrafficFilterRulesetInfo>;
//# sourceMappingURL=get_traffic_filter_ruleset.d.ts.map