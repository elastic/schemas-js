import { z } from 'zod';
export declare const AccountTrustSettings: z.ZodObject<{
    trust_all: z.ZodBoolean;
}, z.core.$strip>;
export type AccountTrustSettings = z.infer<typeof AccountTrustSettings>;
export declare const AccountResponse: z.ZodObject<{
    id: z.ZodString;
    trust: z.ZodOptional<z.ZodObject<{
        trust_all: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AccountResponse = z.infer<typeof AccountResponse>;
//# sourceMappingURL=get_current_account.d.ts.map