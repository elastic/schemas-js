import { z } from 'zod';
export declare const Security_Exceptions_API_ExceptionListHumanId: z.ZodString;
export type Security_Exceptions_API_ExceptionListHumanId = z.infer<typeof Security_Exceptions_API_ExceptionListHumanId>;
export declare const Security_Exceptions_API_ExceptionListItemHumanId: z.ZodString;
export type Security_Exceptions_API_ExceptionListItemHumanId = z.infer<typeof Security_Exceptions_API_ExceptionListItemHumanId>;
export declare const Security_Exceptions_API_ExceptionListId: z.ZodString;
export type Security_Exceptions_API_ExceptionListId = z.infer<typeof Security_Exceptions_API_ExceptionListId>;
export declare const Security_Exceptions_API_ExceptionListsImportBulkError: z.ZodObject<{
    error: z.ZodObject<{
        message: z.ZodString;
        status_code: z.ZodNumber;
    }, z.core.$strip>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    list_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Exceptions_API_ExceptionListsImportBulkError = z.infer<typeof Security_Exceptions_API_ExceptionListsImportBulkError>;
export declare const Security_Exceptions_API_ExceptionListsImportBulkErrorArray: z.ZodArray<z.ZodObject<{
    error: z.ZodObject<{
        message: z.ZodString;
        status_code: z.ZodNumber;
    }, z.core.$strip>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    list_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Exceptions_API_ExceptionListsImportBulkErrorArray = z.infer<typeof Security_Exceptions_API_ExceptionListsImportBulkErrorArray>;
export declare const ImportExceptionListResponse: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        error: z.ZodObject<{
            message: z.ZodString;
            status_code: z.ZodNumber;
        }, z.core.$strip>;
        id: z.ZodOptional<z.ZodString>;
        item_id: z.ZodOptional<z.ZodString>;
        list_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    success: z.ZodBoolean;
    success_count: z.ZodNumber;
    success_count_exception_list_items: z.ZodNumber;
    success_count_exception_lists: z.ZodNumber;
    success_exception_list_items: z.ZodBoolean;
    success_exception_lists: z.ZodBoolean;
}, z.core.$strip>;
export type ImportExceptionListResponse = z.infer<typeof ImportExceptionListResponse>;
//# sourceMappingURL=import_exception_list.d.ts.map