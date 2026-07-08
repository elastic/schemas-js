import { z } from 'zod';
export declare const PostStreamsNameQueriesBulkRequest: z.ZodObject<{
    operations: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        index: z.ZodObject<{
            description: z.ZodOptional<z.ZodString>;
            esql: z.ZodObject<{
                query: z.ZodString;
            }, z.core.$strip>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
            id: z.ZodString;
            severity_score: z.ZodOptional<z.ZodNumber>;
            title: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        delete: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type PostStreamsNameQueriesBulkRequest = z.infer<typeof PostStreamsNameQueriesBulkRequest>;
//# sourceMappingURL=post_streams_name_queries_bulk.d.ts.map