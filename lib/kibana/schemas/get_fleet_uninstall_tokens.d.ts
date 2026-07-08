import { z } from 'zod';
export declare const GetFleetUninstallTokensResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        created_at: z.ZodString;
        id: z.ZodString;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        policy_id: z.ZodString;
        policy_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type GetFleetUninstallTokensResponse = z.infer<typeof GetFleetUninstallTokensResponse>;
//# sourceMappingURL=get_fleet_uninstall_tokens.d.ts.map