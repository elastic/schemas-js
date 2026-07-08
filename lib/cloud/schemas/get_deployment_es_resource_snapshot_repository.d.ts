import { z } from 'zod';
export declare const SnapshotDependency: z.ZodObject<{
    cluster_id: z.ZodString;
    deployment_id: z.ZodOptional<z.ZodString>;
    deployment_name: z.ZodOptional<z.ZodString>;
    repository_name: z.ZodString;
}, z.core.$strip>;
export type SnapshotDependency = z.infer<typeof SnapshotDependency>;
export declare const SnapshotRepositories: z.ZodObject<{
    repositories: z.ZodArray<z.ZodObject<{
        cluster_id: z.ZodString;
        deployment_id: z.ZodOptional<z.ZodString>;
        deployment_name: z.ZodOptional<z.ZodString>;
        repository_name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SnapshotRepositories = z.infer<typeof SnapshotRepositories>;
//# sourceMappingURL=get_deployment_es_resource_snapshot_repository.d.ts.map