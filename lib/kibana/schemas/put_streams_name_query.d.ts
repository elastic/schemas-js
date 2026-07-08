import { z } from 'zod';
export declare const PutStreamsNameQueryRequest: z.ZodObject<{
    field_descriptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    query: z.ZodObject<{
        esql: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PutStreamsNameQueryRequest = z.infer<typeof PutStreamsNameQueryRequest>;
//# sourceMappingURL=put_streams_name_query.d.ts.map