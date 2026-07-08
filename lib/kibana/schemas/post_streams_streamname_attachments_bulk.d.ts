import { z } from 'zod';
export declare const PostStreamsStreamnameAttachmentsBulkRequest: z.ZodObject<{
    operations: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        index: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                rule: "rule";
                dashboard: "dashboard";
                slo: "slo";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        delete: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                rule: "rule";
                dashboard: "dashboard";
                slo: "slo";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type PostStreamsStreamnameAttachmentsBulkRequest = z.infer<typeof PostStreamsStreamnameAttachmentsBulkRequest>;
//# sourceMappingURL=post_streams_streamname_attachments_bulk.d.ts.map