import { z } from 'zod';
export declare const ApmCrudResponse: z.ZodObject<{
    apm_id: z.ZodOptional<z.ZodString>;
    secret_token: z.ZodString;
    diagnostics: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type ApmCrudResponse = z.infer<typeof ApmCrudResponse>;
//# sourceMappingURL=deployment_apm_reset_secret_token.d.ts.map