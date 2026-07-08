import { z } from 'zod';
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export type EmptyResponse = z.infer<typeof EmptyResponse>;
export declare const DeleteDomainClaimRequest: z.ZodObject<{
    domain_claim_request: z.ZodString;
}, z.core.$strip>;
export type DeleteDomainClaimRequest = z.infer<typeof DeleteDomainClaimRequest>;
//# sourceMappingURL=domain_claim_delete.d.ts.map