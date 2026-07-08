import { z } from 'zod';
export declare const Kibana_HTTP_APIs_action_message_response: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_action_message_response = z.infer<typeof Kibana_HTTP_APIs_action_message_response>;
export declare const Kibana_HTTP_APIs_action_id_response: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_action_id_response = z.infer<typeof Kibana_HTTP_APIs_action_id_response>;
export declare const PostFleetAgentsAgentidRollbackResponse: z.ZodUnion<readonly [z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>]>;
export type PostFleetAgentsAgentidRollbackResponse = z.infer<typeof PostFleetAgentsAgentidRollbackResponse>;
//# sourceMappingURL=post_fleet_agents_agentid_rollback.d.ts.map