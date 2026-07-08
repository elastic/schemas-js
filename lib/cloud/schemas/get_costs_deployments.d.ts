import { z } from 'zod';
export declare const Period: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
}, z.core.$strip>;
export type Period = z.infer<typeof Period>;
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
export declare const DeploymentCosts: z.ZodObject<{
    deployment_id: z.ZodString;
    deployment_name: z.ZodString;
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
    hourly_rate: z.ZodNumber;
    period: z.ZodOptional<z.ZodObject<{
        start: z.ZodString;
        end: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentCosts = z.infer<typeof DeploymentCosts>;
export declare const DeploymentsCosts: z.ZodObject<{
    total_cost: z.ZodNumber;
    deployments: z.ZodArray<z.ZodObject<{
        deployment_id: z.ZodString;
        deployment_name: z.ZodString;
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
        hourly_rate: z.ZodNumber;
        period: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentsCosts = z.infer<typeof DeploymentsCosts>;
//# sourceMappingURL=get_costs_deployments.d.ts.map