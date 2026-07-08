import { z } from 'zod';
export declare const Organization: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    default_disk_usage_alerts_enabled: z.ZodOptional<z.ZodBoolean>;
    notifications_allowed_email_domains: z.ZodOptional<z.ZodArray<z.ZodString>>;
    billing_contacts: z.ZodOptional<z.ZodArray<z.ZodString>>;
    operational_contacts: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sso_login_identifier: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Organization = z.infer<typeof Organization>;
//# sourceMappingURL=get_organization.d.ts.map