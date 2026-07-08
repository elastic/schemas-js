import { z } from 'zod';
export declare const VerificationCodeResponse: z.ZodObject<{
    verification: z.ZodString;
}, z.core.$strip>;
export type VerificationCodeResponse = z.infer<typeof VerificationCodeResponse>;
export declare const VerificationCodeRequest: z.ZodObject<{
    domain_claim_request: z.ZodString;
}, z.core.$strip>;
export type VerificationCodeRequest = z.infer<typeof VerificationCodeRequest>;
//# sourceMappingURL=domain_claim_generate_verification_code.d.ts.map