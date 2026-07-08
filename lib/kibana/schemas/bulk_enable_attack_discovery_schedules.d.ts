import { z } from 'zod';
export declare const Security_Attack_discovery_API_NonEmptyString: z.ZodString;
export type Security_Attack_discovery_API_NonEmptyString = z.infer<typeof Security_Attack_discovery_API_NonEmptyString>;
export declare const Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesError: z.ZodObject<{
    message: z.ZodString;
    rule: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
    status: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesError = z.infer<typeof Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesError>;
export declare const Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesRequestBody: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesRequestBody = z.infer<typeof Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesRequestBody>;
export declare const Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesResponse: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        rule: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>;
        status: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    ids: z.ZodArray<z.ZodString>;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesResponse = z.infer<typeof Security_Attack_discovery_API_BulkActionAttackDiscoverySchedulesResponse>;
//# sourceMappingURL=bulk_enable_attack_discovery_schedules.d.ts.map