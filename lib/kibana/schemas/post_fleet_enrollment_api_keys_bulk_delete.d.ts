import { z } from 'zod';
export declare const Kibana_HTTP_APIs_bulk_delete_enrollment_api_keys_response: z.ZodObject<{
    action: z.ZodString;
    count: z.ZodNumber;
    errorCount: z.ZodNumber;
    successCount: z.ZodNumber;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_delete_enrollment_api_keys_response = z.infer<typeof Kibana_HTTP_APIs_bulk_delete_enrollment_api_keys_response>;
export declare const Kibana_HTTP_APIs_bulk_delete_enrollment_api_keys_request: z.ZodObject<{
    forceDelete: z.ZodOptional<z.ZodBoolean>;
    includeHidden: z.ZodOptional<z.ZodBoolean>;
    kuery: z.ZodOptional<z.ZodString>;
    tokenIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_delete_enrollment_api_keys_request = z.infer<typeof Kibana_HTTP_APIs_bulk_delete_enrollment_api_keys_request>;
//# sourceMappingURL=post_fleet_enrollment_api_keys_bulk_delete.d.ts.map