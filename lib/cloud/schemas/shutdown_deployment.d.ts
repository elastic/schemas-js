import { z } from 'zod';
export declare const ElasticsearchDependant: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchDependant = z.infer<typeof ElasticsearchDependant>;
export declare const OrphanedElasticsearch: z.ZodObject<{
    id: z.ZodString;
    dependents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type OrphanedElasticsearch = z.infer<typeof OrphanedElasticsearch>;
export declare const Orphaned: z.ZodObject<{
    elasticsearch: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        dependents: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    kibana: z.ZodArray<z.ZodString>;
    apm: z.ZodArray<z.ZodString>;
    appsearch: z.ZodArray<z.ZodString>;
    enterprise_search: z.ZodArray<z.ZodString>;
    integrations_server: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Orphaned = z.infer<typeof Orphaned>;
export declare const DeploymentShutdownResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    orphaned: z.ZodOptional<z.ZodObject<{
        elasticsearch: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            dependents: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                kind: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        kibana: z.ZodArray<z.ZodString>;
        apm: z.ZodArray<z.ZodString>;
        appsearch: z.ZodArray<z.ZodString>;
        enterprise_search: z.ZodArray<z.ZodString>;
        integrations_server: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentShutdownResponse = z.infer<typeof DeploymentShutdownResponse>;
//# sourceMappingURL=shutdown_deployment.d.ts.map