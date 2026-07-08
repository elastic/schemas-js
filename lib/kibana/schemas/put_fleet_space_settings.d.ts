import { z } from 'zod';
export declare const PutFleetSpaceSettingsRequest: z.ZodObject<{
    allowed_namespace_prefixes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PutFleetSpaceSettingsRequest = z.infer<typeof PutFleetSpaceSettingsRequest>;
export declare const PutFleetSpaceSettingsResponse: z.ZodObject<{
    item: z.ZodObject<{
        allowed_namespace_prefixes: z.ZodArray<z.ZodString>;
        managed_by: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PutFleetSpaceSettingsResponse = z.infer<typeof PutFleetSpaceSettingsResponse>;
//# sourceMappingURL=put_fleet_space_settings.d.ts.map