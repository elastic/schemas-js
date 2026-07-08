import { z } from 'zod';
export declare const Data_views_swap_data_view_request_object: z.ZodObject<{
    delete: z.ZodOptional<z.ZodBoolean>;
    forId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    forType: z.ZodOptional<z.ZodString>;
    fromId: z.ZodString;
    fromType: z.ZodOptional<z.ZodString>;
    toId: z.ZodString;
}, z.core.$strip>;
export type Data_views_swap_data_view_request_object = z.infer<typeof Data_views_swap_data_view_request_object>;
export declare const SwapDataViewsDefaultResponse: z.ZodObject<{
    deleteStatus: z.ZodOptional<z.ZodObject<{
        deletePerformed: z.ZodOptional<z.ZodBoolean>;
        remainingRefs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    result: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SwapDataViewsDefaultResponse = z.infer<typeof SwapDataViewsDefaultResponse>;
//# sourceMappingURL=swap_data_views_default.d.ts.map