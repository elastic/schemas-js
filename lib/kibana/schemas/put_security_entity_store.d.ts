import { z } from 'zod';
export declare const PutSecurityEntityStoreRequest: z.ZodObject<{
    logExtraction: z.ZodObject<{
        additionalIndexPatterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
        delay: z.ZodOptional<z.ZodString>;
        docsLimit: z.ZodOptional<z.ZodNumber>;
        excludedIndexPatterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fieldHistoryLength: z.ZodOptional<z.ZodNumber>;
        frequency: z.ZodOptional<z.ZodString>;
        lookbackPeriod: z.ZodOptional<z.ZodString>;
        maxLogsPerPage: z.ZodOptional<z.ZodNumber>;
        maxLogsPerWindow: z.ZodOptional<z.ZodNumber>;
        maxLogsPerWindowCapBehavior: z.ZodOptional<z.ZodEnum<{
            defer: "defer";
            drop: "drop";
        }>>;
        maxTimeWindowSize: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PutSecurityEntityStoreRequest = z.infer<typeof PutSecurityEntityStoreRequest>;
//# sourceMappingURL=put_security_entity_store.d.ts.map