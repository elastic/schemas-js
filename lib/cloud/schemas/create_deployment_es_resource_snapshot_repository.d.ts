import { z } from 'zod';
export declare const CreateSnapshotDependencyResponse: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export type CreateSnapshotDependencyResponse = z.infer<typeof CreateSnapshotDependencyResponse>;
export declare const CreateSnapshotDependencyRequest: z.ZodObject<{
    source_deployment_id: z.ZodString;
}, z.core.$strip>;
export type CreateSnapshotDependencyRequest = z.infer<typeof CreateSnapshotDependencyRequest>;
//# sourceMappingURL=create_deployment_es_resource_snapshot_repository.d.ts.map