import { z } from 'zod';
export declare const Kibana_HTTP_APIs_ContentPackIncludedObjects: z.ZodTypeAny;
export type Kibana_HTTP_APIs_ContentPackIncludedObjects = z.infer<typeof Kibana_HTTP_APIs_ContentPackIncludedObjects>;
export declare const PostStreamsNameContentExportRequest: z.ZodObject<{
    description: z.ZodString;
    include: z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
    name: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
export type PostStreamsNameContentExportRequest = z.infer<typeof PostStreamsNameContentExportRequest>;
//# sourceMappingURL=post_streams_name_content_export.d.ts.map