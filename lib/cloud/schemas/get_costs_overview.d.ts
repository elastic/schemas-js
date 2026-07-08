import { z } from 'zod';
export declare const SimplifiedLineItem: z.ZodObject<{
    id: z.ZodString;
    ecu_quantity: z.ZodNumber;
    ecu_balance: z.ZodNumber;
    start: z.ZodString;
    end: z.ZodString;
}, z.core.$strip>;
export type SimplifiedLineItem = z.infer<typeof SimplifiedLineItem>;
export declare const Dimension: z.ZodObject<{
    type: z.ZodEnum<{
        capacity: "capacity";
        data_in: "data_in";
        data_internode: "data_internode";
        data_out: "data_out";
        storage_api: "storage_api";
        storage_bytes: "storage_bytes";
    }>;
    cost: z.ZodNumber;
}, z.core.$strip>;
export type Dimension = z.infer<typeof Dimension>;
export declare const Balance: z.ZodObject<{
    available: z.ZodNumber;
    remaining: z.ZodNumber;
    line_items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        ecu_quantity: z.ZodNumber;
        ecu_balance: z.ZodNumber;
        start: z.ZodString;
        end: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Balance = z.infer<typeof Balance>;
export declare const Costs: z.ZodObject<{
    total: z.ZodNumber;
    dimensions: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            capacity: "capacity";
            data_in: "data_in";
            data_internode: "data_internode";
            data_out: "data_out";
            storage_api: "storage_api";
            storage_bytes: "storage_bytes";
        }>;
        cost: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Costs = z.infer<typeof Costs>;
export declare const CostsOverview: z.ZodObject<{
    costs: z.ZodObject<{
        total: z.ZodNumber;
        dimensions: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                capacity: "capacity";
                data_in: "data_in";
                data_internode: "data_internode";
                data_out: "data_out";
                storage_api: "storage_api";
                storage_bytes: "storage_bytes";
            }>;
            cost: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    trials: z.ZodNumber;
    hourly_rate: z.ZodNumber;
    balance: z.ZodOptional<z.ZodObject<{
        available: z.ZodNumber;
        remaining: z.ZodNumber;
        line_items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            ecu_quantity: z.ZodNumber;
            ecu_balance: z.ZodNumber;
            start: z.ZodString;
            end: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CostsOverview = z.infer<typeof CostsOverview>;
//# sourceMappingURL=get_costs_overview.d.ts.map