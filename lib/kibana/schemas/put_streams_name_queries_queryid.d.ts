import { z } from 'zod';
export declare const PutStreamsNameQueriesQueryidRequest: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    esql: z.ZodObject<{
        query: z.ZodString;
    }, z.core.$strip>;
    evidence: z.ZodOptional<z.ZodArray<z.ZodString>>;
    severity_score: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
}, z.core.$strip>;
export type PutStreamsNameQueriesQueryidRequest = z.infer<typeof PutStreamsNameQueriesQueryidRequest>;
//# sourceMappingURL=put_streams_name_queries_queryid.d.ts.map