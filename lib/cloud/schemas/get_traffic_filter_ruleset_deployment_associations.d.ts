import { z } from 'zod';
export declare const FilterAssociation: z.ZodObject<{
    entity_type: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>;
export type FilterAssociation = z.infer<typeof FilterAssociation>;
export declare const RulesetAssociations: z.ZodObject<{
    associations: z.ZodArray<z.ZodObject<{
        entity_type: z.ZodString;
        id: z.ZodString;
    }, z.core.$strip>>;
    total_associations: z.ZodNumber;
}, z.core.$strip>;
export type RulesetAssociations = z.infer<typeof RulesetAssociations>;
//# sourceMappingURL=get_traffic_filter_ruleset_deployment_associations.d.ts.map