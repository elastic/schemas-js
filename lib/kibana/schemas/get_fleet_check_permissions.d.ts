import { z } from 'zod';
export declare const GetFleetCheckPermissionsResponse: z.ZodObject<{
    error: z.ZodOptional<z.ZodEnum<{
        MISSING_SECURITY: "MISSING_SECURITY";
        MISSING_PRIVILEGES: "MISSING_PRIVILEGES";
        MISSING_FLEET_SERVER_SETUP_PRIVILEGES: "MISSING_FLEET_SERVER_SETUP_PRIVILEGES";
    }>>;
    success: z.ZodBoolean;
}, z.core.$strip>;
export type GetFleetCheckPermissionsResponse = z.infer<typeof GetFleetCheckPermissionsResponse>;
//# sourceMappingURL=get_fleet_check_permissions.d.ts.map