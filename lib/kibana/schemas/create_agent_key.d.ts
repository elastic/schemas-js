import { z } from 'zod';
export declare const APM_UI_agent_keys_response: z.ZodObject<{
    agentKey: z.ZodOptional<z.ZodObject<{
        api_key: z.ZodString;
        encoded: z.ZodString;
        expiration: z.ZodOptional<z.ZodNumber>;
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type APM_UI_agent_keys_response = z.infer<typeof APM_UI_agent_keys_response>;
export declare const APM_UI_agent_keys_object: z.ZodObject<{
    name: z.ZodString;
    privileges: z.ZodArray<z.ZodEnum<{
        "event:write": "event:write";
        "config_agent:read": "config_agent:read";
    }>>;
}, z.core.$strip>;
export type APM_UI_agent_keys_object = z.infer<typeof APM_UI_agent_keys_object>;
//# sourceMappingURL=create_agent_key.d.ts.map