import { z } from 'zod';
export declare const GetFleetDataStreamsResponse: z.ZodObject<{
    data_streams: z.ZodArray<z.ZodObject<{
        dashboards: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
        }, z.core.$strip>>;
        dataset: z.ZodString;
        index: z.ZodString;
        last_activity_ms: z.ZodNumber;
        namespace: z.ZodString;
        package: z.ZodString;
        package_version: z.ZodString;
        serviceDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            environment: z.ZodString;
            serviceName: z.ZodString;
        }, z.core.$strip>>>;
        size_in_bytes: z.ZodNumber;
        size_in_bytes_formatted: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        type: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetFleetDataStreamsResponse = z.infer<typeof GetFleetDataStreamsResponse>;
//# sourceMappingURL=get_fleet_data_streams.d.ts.map