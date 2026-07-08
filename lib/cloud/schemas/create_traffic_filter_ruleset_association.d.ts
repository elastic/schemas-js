import { z } from 'zod';
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export type EmptyResponse = z.infer<typeof EmptyResponse>;
export declare const FilterAssociation: z.ZodObject<{
    entity_type: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>;
export type FilterAssociation = z.infer<typeof FilterAssociation>;
//# sourceMappingURL=create_traffic_filter_ruleset_association.d.ts.map