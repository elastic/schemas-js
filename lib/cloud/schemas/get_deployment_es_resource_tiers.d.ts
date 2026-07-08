import { z } from 'zod';
export declare const TierInfo: z.ZodObject<{
    memory_size: z.ZodOptional<z.ZodNumber>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type TierInfo = z.infer<typeof TierInfo>;
export declare const TiersResponse: z.ZodObject<{
    hot_content: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    warm: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    cold: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    frozen: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    master: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    coordinating: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    ml: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        available_sizes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TiersResponse = z.infer<typeof TiersResponse>;
//# sourceMappingURL=get_deployment_es_resource_tiers.d.ts.map