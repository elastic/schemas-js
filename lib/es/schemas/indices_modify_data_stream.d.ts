import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const DataStreamName: z.ZodString;
export type DataStreamName = z.infer<typeof DataStreamName>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesModifyDataStreamIndexAndDataStreamAction: z.ZodObject<{
    data_stream: z.ZodString;
    index: z.ZodString;
}, z.core.$strip>;
export type IndicesModifyDataStreamIndexAndDataStreamAction = z.infer<typeof IndicesModifyDataStreamIndexAndDataStreamAction>;
export declare const IndicesModifyDataStreamAction: z.ZodUnion<readonly [z.ZodObject<{
    add_backing_index: z.ZodObject<{
        data_stream: z.ZodString;
        index: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    remove_backing_index: z.ZodObject<{
        data_stream: z.ZodString;
        index: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type IndicesModifyDataStreamAction = z.infer<typeof IndicesModifyDataStreamAction>;
/**
 * Update data streams.
 *
 * Performs one or more data stream modification actions in a single atomic operation.
 */
export declare const IndicesModifyDataStreamRequest: z.ZodObject<{
    actions: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        add_backing_index: z.ZodObject<{
            data_stream: z.ZodString;
            index: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        remove_backing_index: z.ZodObject<{
            data_stream: z.ZodString;
            index: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type IndicesModifyDataStreamRequest = z.infer<typeof IndicesModifyDataStreamRequest>;
export declare const IndicesModifyDataStreamResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesModifyDataStreamResponse = z.infer<typeof IndicesModifyDataStreamResponse>;
//# sourceMappingURL=indices_modify_data_stream.d.ts.map