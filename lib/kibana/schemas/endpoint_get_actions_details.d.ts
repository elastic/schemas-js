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
export declare const Security_Endpoint_Management_API_DownloadUri: z.ZodObject<{
    downloadUri: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_DownloadUri = z.infer<typeof Security_Endpoint_Management_API_DownloadUri>;
export declare const Security_Endpoint_Management_API_RunningProcessesOutputEndpoint: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        command: z.ZodOptional<z.ZodString>;
        entity_id: z.ZodOptional<z.ZodString>;
        pid: z.ZodOptional<z.ZodNumber>;
        user: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_RunningProcessesOutputEndpoint = z.infer<typeof Security_Endpoint_Management_API_RunningProcessesOutputEndpoint>;
export declare const Security_Endpoint_Management_API_RunscriptParamsSentinelOne: z.ZodObject<{
    scriptId: z.ZodOptional<z.ZodString>;
    scriptInput: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_RunscriptParamsSentinelOne = z.infer<typeof Security_Endpoint_Management_API_RunscriptParamsSentinelOne>;
export declare const Security_Endpoint_Management_API_RunscriptParamsMicrosoft: z.ZodObject<{
    args: z.ZodOptional<z.ZodString>;
    scriptName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_RunscriptParamsMicrosoft = z.infer<typeof Security_Endpoint_Management_API_RunscriptParamsMicrosoft>;
export declare const Security_Endpoint_Management_API_RunscriptParamsCrowdStrike: z.ZodObject<{
    cloudFile: z.ZodOptional<z.ZodString>;
    commandLine: z.ZodOptional<z.ZodString>;
    hostPath: z.ZodOptional<z.ZodString>;
    raw: z.ZodOptional<z.ZodString>;
    timeout: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_RunscriptParamsCrowdStrike = z.infer<typeof Security_Endpoint_Management_API_RunscriptParamsCrowdStrike>;
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
export declare const Security_Endpoint_Management_API_RunningProcessesOutputSentinelOne: z.ZodObject<{
    downloadUri: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_RunningProcessesOutputSentinelOne = z.infer<typeof Security_Endpoint_Management_API_RunningProcessesOutputSentinelOne>;
export declare const Security_Endpoint_Management_API_MemoryDump: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            disk_free_space: z.ZodOptional<z.ZodNumber>;
            file_size: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            kernel: "kernel";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        pid: z.ZodNumber;
        type: z.ZodEnum<{
            process: "process";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entity_id: z.ZodString;
        type: z.ZodEnum<{
            process: "process";
        }>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_MemoryDump = z.infer<typeof Security_Endpoint_Management_API_MemoryDump>;
export declare const Security_Endpoint_Management_API_SuspendProcess: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            pid: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            entity_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        pid: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        entity_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_SuspendProcess = z.infer<typeof Security_Endpoint_Management_API_SuspendProcess>;
export declare const Security_Endpoint_Management_API_Unisolate: z.ZodObject<{
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
export type Security_Endpoint_Management_API_Unisolate = z.infer<typeof Security_Endpoint_Management_API_Unisolate>;
export declare const Security_Endpoint_Management_API_Isolate: z.ZodObject<{
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
export type Security_Endpoint_Management_API_Isolate = z.infer<typeof Security_Endpoint_Management_API_Isolate>;
export declare const Security_Endpoint_Management_API_Cancel: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_Cancel = z.infer<typeof Security_Endpoint_Management_API_Cancel>;
export declare const Security_Endpoint_Management_API_Scan: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_Scan = z.infer<typeof Security_Endpoint_Management_API_Scan>;
export declare const Security_Endpoint_Management_API_Upload: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            disk_free_space: z.ZodOptional<z.ZodNumber>;
            path: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        file_id: z.ZodOptional<z.ZodString>;
        file_name: z.ZodOptional<z.ZodString>;
        file_sha256: z.ZodOptional<z.ZodString>;
        file_size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_Upload = z.infer<typeof Security_Endpoint_Management_API_Upload>;
export declare const Security_Endpoint_Management_API_Runscript: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            stderr: z.ZodOptional<z.ZodString>;
            stdout: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        cloudFile: z.ZodOptional<z.ZodString>;
        commandLine: z.ZodOptional<z.ZodString>;
        hostPath: z.ZodOptional<z.ZodString>;
        raw: z.ZodOptional<z.ZodString>;
        timeout: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        args: z.ZodOptional<z.ZodString>;
        scriptName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        scriptId: z.ZodOptional<z.ZodString>;
        scriptInput: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_Runscript = z.infer<typeof Security_Endpoint_Management_API_Runscript>;
export declare const Security_Endpoint_Management_API_Execute: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            cwd: z.ZodOptional<z.ZodString>;
            output_file_id: z.ZodOptional<z.ZodString>;
            output_file_stderr_truncated: z.ZodOptional<z.ZodBoolean>;
            output_file_stdout_truncated: z.ZodOptional<z.ZodBoolean>;
            shell_code: z.ZodOptional<z.ZodNumber>;
            stderr: z.ZodOptional<z.ZodString>;
            stderr_truncated: z.ZodOptional<z.ZodBoolean>;
            stdout: z.ZodOptional<z.ZodString>;
            stdout_truncated: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        command: z.ZodOptional<z.ZodString>;
        timeout: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_Execute = z.infer<typeof Security_Endpoint_Management_API_Execute>;
export declare const Security_Endpoint_Management_API_GetFile: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodString>;
                path: z.ZodOptional<z.ZodString>;
                sha256: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            zip_size: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_GetFile = z.infer<typeof Security_Endpoint_Management_API_GetFile>;
export declare const Security_Endpoint_Management_API_KillProcess: z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            pid: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            entity_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            process_name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        pid: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        entity_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        process_name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_KillProcess = z.infer<typeof Security_Endpoint_Management_API_KillProcess>;
export declare const Security_Endpoint_Management_API_RunningProcesses: z.ZodObject<{
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
    parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                command: z.ZodOptional<z.ZodString>;
                entity_id: z.ZodOptional<z.ZodString>;
                pid: z.ZodOptional<z.ZodNumber>;
                user: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>, z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_RunningProcesses = z.infer<typeof Security_Endpoint_Management_API_RunningProcesses>;
export declare const Security_Endpoint_Management_API_ActionDetailsResponse: z.ZodUnion<readonly [z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            pid: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            entity_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            process_name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        pid: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        entity_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        process_name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodString>;
                path: z.ZodOptional<z.ZodString>;
                sha256: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            zip_size: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            cwd: z.ZodOptional<z.ZodString>;
            output_file_id: z.ZodOptional<z.ZodString>;
            output_file_stderr_truncated: z.ZodOptional<z.ZodBoolean>;
            output_file_stdout_truncated: z.ZodOptional<z.ZodBoolean>;
            shell_code: z.ZodOptional<z.ZodNumber>;
            stderr: z.ZodOptional<z.ZodString>;
            stderr_truncated: z.ZodOptional<z.ZodBoolean>;
            stdout: z.ZodOptional<z.ZodString>;
            stdout_truncated: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        command: z.ZodOptional<z.ZodString>;
        timeout: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
            stderr: z.ZodOptional<z.ZodString>;
            stdout: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        cloudFile: z.ZodOptional<z.ZodString>;
        commandLine: z.ZodOptional<z.ZodString>;
        hostPath: z.ZodOptional<z.ZodString>;
        raw: z.ZodOptional<z.ZodString>;
        timeout: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        args: z.ZodOptional<z.ZodString>;
        scriptName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        scriptId: z.ZodOptional<z.ZodString>;
        scriptInput: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            disk_free_space: z.ZodOptional<z.ZodNumber>;
            path: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        file_id: z.ZodOptional<z.ZodString>;
        file_name: z.ZodOptional<z.ZodString>;
        file_sha256: z.ZodOptional<z.ZodString>;
        file_size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            pid: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            entity_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
    parameters: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        pid: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        entity_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>, z.ZodObject<{
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
    parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                command: z.ZodOptional<z.ZodString>;
                entity_id: z.ZodOptional<z.ZodString>;
                pid: z.ZodOptional<z.ZodNumber>;
                user: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>, z.ZodObject<{
            downloadUri: z.ZodOptional<z.ZodString>;
            code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
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
    startedAt: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    wasCanceled: z.ZodOptional<z.ZodBoolean>;
    wasSuccessful: z.ZodOptional<z.ZodBoolean>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        content: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            disk_free_space: z.ZodOptional<z.ZodNumber>;
            file_size: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    parameters: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            kernel: "kernel";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        pid: z.ZodNumber;
        type: z.ZodEnum<{
            process: "process";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        entity_id: z.ZodString;
        type: z.ZodEnum<{
            process: "process";
        }>;
    }, z.core.$strip>]>;
}, z.core.$strip>]>;
export type Security_Endpoint_Management_API_ActionDetailsResponse = z.infer<typeof Security_Endpoint_Management_API_ActionDetailsResponse>;
//# sourceMappingURL=endpoint_get_actions_details.d.ts.map