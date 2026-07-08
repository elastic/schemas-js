import { z } from 'zod';
export declare const Security_Endpoint_Management_API_Command: z.ZodEnum<{
    cancel: "cancel";
    execute: "execute";
    isolate: "isolate";
    unisolate: "unisolate";
    "kill-process": "kill-process";
    "suspend-process": "suspend-process";
    "running-processes": "running-processes";
    "get-file": "get-file";
    upload: "upload";
    scan: "scan";
    runscript: "runscript";
    "memory-dump": "memory-dump";
}>;
export type Security_Endpoint_Management_API_Command = z.infer<typeof Security_Endpoint_Management_API_Command>;
export declare const Security_Endpoint_Management_API_AgentTypes: z.ZodEnum<{
    endpoint: "endpoint";
    sentinel_one: "sentinel_one";
    crowdstrike: "crowdstrike";
    microsoft_defender_endpoint: "microsoft_defender_endpoint";
}>;
export type Security_Endpoint_Management_API_AgentTypes = z.infer<typeof Security_Endpoint_Management_API_AgentTypes>;
export declare const Security_Endpoint_Management_API_Parameters: z.ZodObject<{}, z.core.$strip>;
export type Security_Endpoint_Management_API_Parameters = z.infer<typeof Security_Endpoint_Management_API_Parameters>;
export declare const Security_Endpoint_Management_API_EndpointIds: z.ZodArray<z.ZodString>;
export type Security_Endpoint_Management_API_EndpointIds = z.infer<typeof Security_Endpoint_Management_API_EndpointIds>;
export declare const Security_Endpoint_Management_API_Comment: z.ZodString;
export type Security_Endpoint_Management_API_Comment = z.infer<typeof Security_Endpoint_Management_API_Comment>;
export declare const Security_Endpoint_Management_API_ResponseActionDetails: z.ZodObject<{
    agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agentState: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        completedAt: z.ZodOptional<z.ZodString>;
        isCompleted: z.ZodOptional<z.ZodBoolean>;
        wasCanceled: z.ZodOptional<z.ZodBoolean>;
        wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    agentType: z.ZodOptional<z.ZodEnum<{
        endpoint: "endpoint";
        sentinel_one: "sentinel_one";
        crowdstrike: "crowdstrike";
        microsoft_defender_endpoint: "microsoft_defender_endpoint";
    }>>;
    command: z.ZodEnum<{
        cancel: "cancel";
        execute: "execute";
        isolate: "isolate";
        unisolate: "unisolate";
        "kill-process": "kill-process";
        "suspend-process": "suspend-process";
        "running-processes": "running-processes";
        "get-file": "get-file";
        upload: "upload";
        scan: "scan";
        runscript: "runscript";
        "memory-dump": "memory-dump";
    }>;
    completedAt: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodOptional<z.ZodString>;
    hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    id: z.ZodOptional<z.ZodString>;
    isComplete: z.ZodOptional<z.ZodBoolean>;
    isExpired: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodUnion<readonly [z.ZodObject<{}, z.core.$strip>, z.ZodString]>;
        type: z.ZodEnum<{
            json: "json";
            text: "text";
        }>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_ResponseActionDetails = z.infer<typeof Security_Endpoint_Management_API_ResponseActionDetails>;
export declare const Security_Endpoint_Management_API_IsolateRouteResponse: z.ZodObject<{
    action: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodObject<{
        agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
        agentState: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            completedAt: z.ZodOptional<z.ZodString>;
            isCompleted: z.ZodOptional<z.ZodBoolean>;
            wasCanceled: z.ZodOptional<z.ZodBoolean>;
            wasSuccessful: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        agentType: z.ZodOptional<z.ZodEnum<{
            endpoint: "endpoint";
            sentinel_one: "sentinel_one";
            crowdstrike: "crowdstrike";
            microsoft_defender_endpoint: "microsoft_defender_endpoint";
        }>>;
        command: z.ZodEnum<{
            cancel: "cancel";
            execute: "execute";
            isolate: "isolate";
            unisolate: "unisolate";
            "kill-process": "kill-process";
            "suspend-process": "suspend-process";
            "running-processes": "running-processes";
            "get-file": "get-file";
            upload: "upload";
            scan: "scan";
            runscript: "runscript";
            "memory-dump": "memory-dump";
        }>;
        completedAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        id: z.ZodOptional<z.ZodString>;
        isComplete: z.ZodOptional<z.ZodBoolean>;
        isExpired: z.ZodOptional<z.ZodBoolean>;
        outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            content: z.ZodUnion<readonly [z.ZodObject<{}, z.core.$strip>, z.ZodString]>;
            type: z.ZodEnum<{
                json: "json";
                text: "text";
            }>;
        }, z.core.$strip>>>;
        parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        startedAt: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodString>;
        wasCanceled: z.ZodOptional<z.ZodBoolean>;
        wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_IsolateRouteResponse = z.infer<typeof Security_Endpoint_Management_API_IsolateRouteResponse>;
export declare const EndpointIsolateActionRequest: z.ZodObject<{
    agent_type: z.ZodOptional<z.ZodEnum<{
        endpoint: "endpoint";
        sentinel_one: "sentinel_one";
        crowdstrike: "crowdstrike";
        microsoft_defender_endpoint: "microsoft_defender_endpoint";
    }>>;
    alert_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    case_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    comment: z.ZodOptional<z.ZodString>;
    endpoint_ids: z.ZodArray<z.ZodString>;
    parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type EndpointIsolateActionRequest = z.infer<typeof EndpointIsolateActionRequest>;
//# sourceMappingURL=endpoint_isolate_action.d.ts.map