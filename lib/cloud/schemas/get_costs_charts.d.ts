import { z } from 'zod';
export declare const ChartItemValue: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    value: z.ZodNumber;
}, z.core.$strip>;
export type ChartItemValue = z.infer<typeof ChartItemValue>;
export declare const ChartItem: z.ZodObject<{
    timestamp: z.ZodNumber;
    values: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        value: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ChartItem = z.infer<typeof ChartItem>;
export declare const ChartItems: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        timestamp: z.ZodNumber;
        values: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            value: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ChartItems = z.infer<typeof ChartItems>;
//# sourceMappingURL=get_costs_charts.d.ts.map