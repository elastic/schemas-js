import { z } from 'zod';
export declare const Kibana_HTTP_APIs_action_message_response: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_action_message_response = z.infer<typeof Kibana_HTTP_APIs_action_message_response>;
export declare const Kibana_HTTP_APIs_action_id_response: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_action_id_response = z.infer<typeof Kibana_HTTP_APIs_action_id_response>;
export declare const PostFleetAgentsAgentidPrivilegeLevelChangeRequest: z.ZodNullable<z.ZodObject<{
    user_info: z.ZodOptional<z.ZodObject<{
        groupname: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type PostFleetAgentsAgentidPrivilegeLevelChangeRequest = z.infer<typeof PostFleetAgentsAgentidPrivilegeLevelChangeRequest>;
export declare const PostFleetAgentsAgentidPrivilegeLevelChangeResponse: z.ZodUnion<readonly [z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>]>;
export type PostFleetAgentsAgentidPrivilegeLevelChangeResponse = z.infer<typeof PostFleetAgentsAgentidPrivilegeLevelChangeResponse>;
//# sourceMappingURL=post_fleet_agents_agentid_privilege_level_change.d.ts.map