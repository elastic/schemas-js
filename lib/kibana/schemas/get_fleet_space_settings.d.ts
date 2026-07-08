import { z } from 'zod';
export declare const GetFleetSpaceSettingsResponse: z.ZodObject<{
    item: z.ZodObject<{
        allowed_namespace_prefixes: z.ZodArray<z.ZodString>;
        managed_by: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetSpaceSettingsResponse = z.infer<typeof GetFleetSpaceSettingsResponse>;
//# sourceMappingURL=get_fleet_space_settings.d.ts.map