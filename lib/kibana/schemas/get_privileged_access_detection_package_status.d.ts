import { z } from 'zod';
export declare const GetPrivilegedAccessDetectionPackageStatusResponse: z.ZodObject<{
    jobs: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        job_id: z.ZodString;
        state: z.ZodEnum<{
            closed: "closed";
            failed: "failed";
            closing: "closing";
            opened: "opened";
            opening: "opening";
        }>;
    }, z.core.$strip>>;
    ml_module_setup_status: z.ZodEnum<{
        complete: "complete";
        incomplete: "incomplete";
    }>;
    package_installation_status: z.ZodEnum<{
        complete: "complete";
        incomplete: "incomplete";
    }>;
}, z.core.$strip>;
export type GetPrivilegedAccessDetectionPackageStatusResponse = z.infer<typeof GetPrivilegedAccessDetectionPackageStatusResponse>;
//# sourceMappingURL=get_privileged_access_detection_package_status.d.ts.map