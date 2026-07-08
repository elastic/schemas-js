import { z } from 'zod';
export declare const GetFleetUninstallTokensUninstalltokenidResponse: z.ZodObject<{
    item: z.ZodObject<{
        created_at: z.ZodString;
        id: z.ZodString;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        policy_id: z.ZodString;
        policy_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        token: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetUninstallTokensUninstalltokenidResponse = z.infer<typeof GetFleetUninstallTokensUninstalltokenidResponse>;
//# sourceMappingURL=get_fleet_uninstall_tokens_uninstalltokenid.d.ts.map