import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
export declare const ConnectorFilteringValidation: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
    messages: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ConnectorFilteringValidation = z.infer<typeof ConnectorFilteringValidation>;
export declare const ConnectorFilteringValidationState: z.ZodEnum<{
    edited: "edited";
    invalid: "invalid";
    valid: "valid";
}>;
export type ConnectorFilteringValidationState = z.infer<typeof ConnectorFilteringValidationState>;
export declare const ConnectorFilteringRulesValidation: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        ids: z.ZodArray<z.ZodString>;
        messages: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    state: z.ZodEnum<{
        edited: "edited";
        invalid: "invalid";
        valid: "valid";
    }>;
}, z.core.$strip>;
export type ConnectorFilteringRulesValidation = z.infer<typeof ConnectorFilteringRulesValidation>;
/**
 * Update the connector draft filtering validation.
 *
 * Update the draft filtering validation info for a connector.
 */
export declare const ConnectorUpdateFilteringValidationRequest: z.ZodObject<{
    connector_id: z.ZodString;
    validation: z.ZodObject<{
        errors: z.ZodArray<z.ZodObject<{
            ids: z.ZodArray<z.ZodString>;
            messages: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        state: z.ZodEnum<{
            edited: "edited";
            invalid: "invalid";
            valid: "valid";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ConnectorUpdateFilteringValidationRequest = z.infer<typeof ConnectorUpdateFilteringValidationRequest>;
export declare const ConnectorUpdateFilteringValidationResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorUpdateFilteringValidationResponse = z.infer<typeof ConnectorUpdateFilteringValidationResponse>;
//# sourceMappingURL=connector_update_filtering_validation.d.ts.map