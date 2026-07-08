import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IlmMoveToStepStepKey: z.ZodObject<{
    action: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    phase: z.ZodString;
}, z.core.$strip>;
export type IlmMoveToStepStepKey = z.infer<typeof IlmMoveToStepStepKey>;
/**
 * Move to a lifecycle step.
 *
 * Manually move an index into a specific step in the lifecycle policy and run that step.
 *
 * WARNING: This operation can result in the loss of data. Manually moving an index into a specific step runs that step even if it has already been performed. This is a potentially destructive action and this should be considered an expert level API.
 *
 * You must specify both the current step and the step to be executed in the body of the request.
 * The request will fail if the current step does not match the step currently running for the index
 * This is to prevent the index from being moved from an unexpected step into the next step.
 *
 * When specifying the target (`next_step`) to which the index will be moved, either the name or both the action and name fields are optional.
 * If only the phase is specified, the index will move to the first step of the first action in the target phase.
 * If the phase and action are specified, the index will move to the first step of the specified action in the specified phase.
 * Only actions specified in the ILM policy are considered valid.
 * An index cannot move to a step that is not part of its policy.
 */
export declare const IlmMoveToStepRequest: z.ZodObject<{
    index: z.ZodString;
    current_step: z.ZodObject<{
        action: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        phase: z.ZodString;
    }, z.core.$strip>;
    next_step: z.ZodObject<{
        action: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        phase: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IlmMoveToStepRequest = z.infer<typeof IlmMoveToStepRequest>;
export declare const IlmMoveToStepResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IlmMoveToStepResponse = z.infer<typeof IlmMoveToStepResponse>;
//# sourceMappingURL=ilm_move_to_step.d.ts.map