import { z } from 'zod';
export declare const Kibana_HTTP_APIs_core_status_redactedResponse: z.ZodObject<{
    status: z.ZodObject<{
        overall: z.ZodObject<{
            level: z.ZodEnum<{
                unavailable: "unavailable";
                available: "available";
                critical: "critical";
                degraded: "degraded";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_core_status_redactedResponse = z.infer<typeof Kibana_HTTP_APIs_core_status_redactedResponse>;
export declare const Kibana_HTTP_APIs_core_status_response: z.ZodObject<{
    metrics: z.ZodObject<{
        collection_interval_in_millis: z.ZodNumber;
        elasticsearch_client: z.ZodObject<{
            totalActiveSockets: z.ZodNumber;
            totalIdleSockets: z.ZodNumber;
            totalQueuedRequests: z.ZodNumber;
        }, z.core.$strip>;
        last_updated: z.ZodString;
    }, z.core.$strip>;
    name: z.ZodString;
    status: z.ZodObject<{
        core: z.ZodObject<{
            elasticsearch: z.ZodObject<{
                detail: z.ZodOptional<z.ZodString>;
                documentationUrl: z.ZodOptional<z.ZodString>;
                level: z.ZodEnum<{
                    unavailable: "unavailable";
                    available: "available";
                    critical: "critical";
                    degraded: "degraded";
                }>;
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                summary: z.ZodString;
            }, z.core.$strip>;
            http: z.ZodOptional<z.ZodObject<{
                detail: z.ZodOptional<z.ZodString>;
                documentationUrl: z.ZodOptional<z.ZodString>;
                level: z.ZodEnum<{
                    unavailable: "unavailable";
                    available: "available";
                    critical: "critical";
                    degraded: "degraded";
                }>;
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                summary: z.ZodString;
            }, z.core.$strip>>;
            savedObjects: z.ZodObject<{
                detail: z.ZodOptional<z.ZodString>;
                documentationUrl: z.ZodOptional<z.ZodString>;
                level: z.ZodEnum<{
                    unavailable: "unavailable";
                    available: "available";
                    critical: "critical";
                    degraded: "degraded";
                }>;
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                summary: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
        overall: z.ZodObject<{
            detail: z.ZodOptional<z.ZodString>;
            documentationUrl: z.ZodOptional<z.ZodString>;
            level: z.ZodEnum<{
                unavailable: "unavailable";
                available: "available";
                critical: "critical";
                degraded: "degraded";
            }>;
            meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
            summary: z.ZodString;
        }, z.core.$strip>;
        plugins: z.ZodRecord<z.ZodString, z.ZodObject<{
            detail: z.ZodOptional<z.ZodString>;
            documentationUrl: z.ZodOptional<z.ZodString>;
            level: z.ZodEnum<{
                unavailable: "unavailable";
                available: "available";
                critical: "critical";
                degraded: "degraded";
            }>;
            meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
            summary: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    uuid: z.ZodString;
    version: z.ZodObject<{
        build_date: z.ZodString;
        build_flavor: z.ZodEnum<{
            serverless: "serverless";
            traditional: "traditional";
        }>;
        build_hash: z.ZodString;
        build_number: z.ZodNumber;
        build_snapshot: z.ZodBoolean;
        number: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_core_status_response = z.infer<typeof Kibana_HTTP_APIs_core_status_response>;
export declare const GetStatusResponse: z.ZodUnion<readonly [z.ZodObject<{
    metrics: z.ZodObject<{
        collection_interval_in_millis: z.ZodNumber;
        elasticsearch_client: z.ZodObject<{
            totalActiveSockets: z.ZodNumber;
            totalIdleSockets: z.ZodNumber;
            totalQueuedRequests: z.ZodNumber;
        }, z.core.$strip>;
        last_updated: z.ZodString;
    }, z.core.$strip>;
    name: z.ZodString;
    status: z.ZodObject<{
        core: z.ZodObject<{
            elasticsearch: z.ZodObject<{
                detail: z.ZodOptional<z.ZodString>;
                documentationUrl: z.ZodOptional<z.ZodString>;
                level: z.ZodEnum<{
                    unavailable: "unavailable";
                    available: "available";
                    critical: "critical";
                    degraded: "degraded";
                }>;
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                summary: z.ZodString;
            }, z.core.$strip>;
            http: z.ZodOptional<z.ZodObject<{
                detail: z.ZodOptional<z.ZodString>;
                documentationUrl: z.ZodOptional<z.ZodString>;
                level: z.ZodEnum<{
                    unavailable: "unavailable";
                    available: "available";
                    critical: "critical";
                    degraded: "degraded";
                }>;
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                summary: z.ZodString;
            }, z.core.$strip>>;
            savedObjects: z.ZodObject<{
                detail: z.ZodOptional<z.ZodString>;
                documentationUrl: z.ZodOptional<z.ZodString>;
                level: z.ZodEnum<{
                    unavailable: "unavailable";
                    available: "available";
                    critical: "critical";
                    degraded: "degraded";
                }>;
                meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
                summary: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
        overall: z.ZodObject<{
            detail: z.ZodOptional<z.ZodString>;
            documentationUrl: z.ZodOptional<z.ZodString>;
            level: z.ZodEnum<{
                unavailable: "unavailable";
                available: "available";
                critical: "critical";
                degraded: "degraded";
            }>;
            meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
            summary: z.ZodString;
        }, z.core.$strip>;
        plugins: z.ZodRecord<z.ZodString, z.ZodObject<{
            detail: z.ZodOptional<z.ZodString>;
            documentationUrl: z.ZodOptional<z.ZodString>;
            level: z.ZodEnum<{
                unavailable: "unavailable";
                available: "available";
                critical: "critical";
                degraded: "degraded";
            }>;
            meta: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
            summary: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    uuid: z.ZodString;
    version: z.ZodObject<{
        build_date: z.ZodString;
        build_flavor: z.ZodEnum<{
            serverless: "serverless";
            traditional: "traditional";
        }>;
        build_hash: z.ZodString;
        build_number: z.ZodNumber;
        build_snapshot: z.ZodBoolean;
        number: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodObject<{
        overall: z.ZodObject<{
            level: z.ZodEnum<{
                unavailable: "unavailable";
                available: "available";
                critical: "critical";
                degraded: "degraded";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type GetStatusResponse = z.infer<typeof GetStatusResponse>;
//# sourceMappingURL=get_status.d.ts.map