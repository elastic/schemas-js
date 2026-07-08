import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_one_bulk_operation_packages_response: z.ZodObject<{
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
    }, z.core.$strip>>;
    results: z.ZodOptional<z.ZodArray<z.ZodObject<{
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
        }, z.core.$strip>>;
        name: z.ZodString;
        success: z.ZodBoolean;
    }, z.core.$strip>>>;
    status: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_one_bulk_operation_packages_response = z.infer<typeof Kibana_HTTP_APIs_get_one_bulk_operation_packages_response>;
//# sourceMappingURL=get_fleet_epm_packages_bulk_uninstall_taskid.d.ts.map