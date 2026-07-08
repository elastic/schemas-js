import { z } from 'zod';
export declare const Security_Entity_Analytics_API_PrivmonUserCsvUploadStats: z.ZodObject<{
    failedOperations: z.ZodNumber;
    successfulOperations: z.ZodNumber;
    totalOperations: z.ZodNumber;
    uploaded: z.ZodNumber;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_PrivmonUserCsvUploadStats = z.infer<typeof Security_Entity_Analytics_API_PrivmonUserCsvUploadStats>;
export declare const Security_Entity_Analytics_API_PrivmonUserCsvUploadErrorItem: z.ZodObject<{
    index: z.ZodNullable<z.ZodNumber>;
    message: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_PrivmonUserCsvUploadErrorItem = z.infer<typeof Security_Entity_Analytics_API_PrivmonUserCsvUploadErrorItem>;
export declare const PrivmonBulkUploadUsersCSVResponse: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        index: z.ZodNullable<z.ZodNumber>;
        message: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    stats: z.ZodObject<{
        failedOperations: z.ZodNumber;
        successfulOperations: z.ZodNumber;
        totalOperations: z.ZodNumber;
        uploaded: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PrivmonBulkUploadUsersCSVResponse = z.infer<typeof PrivmonBulkUploadUsersCSVResponse>;
//# sourceMappingURL=privmon_bulk_upload_users_csv.d.ts.map