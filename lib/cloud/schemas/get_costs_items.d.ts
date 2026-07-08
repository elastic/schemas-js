import { z } from 'zod';
export declare const Period: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
}, z.core.$strip>;
export type Period = z.infer<typeof Period>;
export declare const DtsRate: z.ZodObject<{
    value: z.ZodNumber;
    formatted_value: z.ZodString;
}, z.core.$strip>;
export type DtsRate = z.infer<typeof DtsRate>;
export declare const DtsQuantity: z.ZodObject<{
    value: z.ZodNumber;
    formatted_value: z.ZodString;
}, z.core.$strip>;
export type DtsQuantity = z.infer<typeof DtsQuantity>;
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
export declare const ItemCosts: z.ZodObject<{
    hours: z.ZodNumber;
    instance_count: z.ZodNumber;
    period: z.ZodObject<{
        start: z.ZodString;
        end: z.ZodString;
    }, z.core.$strip>;
    kind: z.ZodEnum<{
        elasticsearch: "elasticsearch";
        kibana: "kibana";
        apm: "apm";
        integrations_server: "integrations_server";
        appsearch: "appsearch";
        enterprise_search: "enterprise_search";
    }>;
    price: z.ZodNumber;
    price_per_hour: z.ZodNumber;
    name: z.ZodString;
    sku: z.ZodString;
}, z.core.$strip>;
export type ItemCosts = z.infer<typeof ItemCosts>;
export declare const DtsDimensionCosts: z.ZodObject<{
    cost: z.ZodNumber;
    name: z.ZodString;
    quantity: z.ZodObject<{
        value: z.ZodNumber;
        formatted_value: z.ZodString;
    }, z.core.$strip>;
    rate: z.ZodObject<{
        value: z.ZodNumber;
        formatted_value: z.ZodString;
    }, z.core.$strip>;
    sku: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type DtsDimensionCosts = z.infer<typeof DtsDimensionCosts>;
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
export declare const ItemsCosts: z.ZodObject<{
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
    data_transfer_and_storage: z.ZodArray<z.ZodObject<{
        cost: z.ZodNumber;
        name: z.ZodString;
        quantity: z.ZodObject<{
            value: z.ZodNumber;
            formatted_value: z.ZodString;
        }, z.core.$strip>;
        rate: z.ZodObject<{
            value: z.ZodNumber;
            formatted_value: z.ZodString;
        }, z.core.$strip>;
        sku: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    resources: z.ZodArray<z.ZodObject<{
        hours: z.ZodNumber;
        instance_count: z.ZodNumber;
        period: z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, z.core.$strip>;
        kind: z.ZodEnum<{
            elasticsearch: "elasticsearch";
            kibana: "kibana";
            apm: "apm";
            integrations_server: "integrations_server";
            appsearch: "appsearch";
            enterprise_search: "enterprise_search";
        }>;
        price: z.ZodNumber;
        price_per_hour: z.ZodNumber;
        name: z.ZodString;
        sku: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ItemsCosts = z.infer<typeof ItemsCosts>;
//# sourceMappingURL=get_costs_items.d.ts.map