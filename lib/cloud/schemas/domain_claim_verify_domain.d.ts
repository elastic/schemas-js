import { z } from 'zod';
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export type EmptyResponse = z.infer<typeof EmptyResponse>;
export declare const DomainVerificationRequest: z.ZodObject<{
    domain_claim_request: z.ZodString;
}, z.core.$strip>;
export type DomainVerificationRequest = z.infer<typeof DomainVerificationRequest>;
//# sourceMappingURL=domain_claim_verify_domain.d.ts.map