import { z } from 'zod';
export declare const EndpointFileInfoResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        actionId: z.ZodOptional<z.ZodString>;
        agentId: z.ZodOptional<z.ZodString>;
        agentType: z.ZodOptional<z.ZodString>;
        created: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        mimeType: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodEnum<{
            AWAITING_UPLOAD: "AWAITING_UPLOAD";
            UPLOADING: "UPLOADING";
            READY: "READY";
            UPLOAD_ERROR: "UPLOAD_ERROR";
            DELETED: "DELETED";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EndpointFileInfoResponse = z.infer<typeof EndpointFileInfoResponse>;
//# sourceMappingURL=endpoint_file_info.d.ts.map