import { z } from 'zod';
export declare const Security_Entity_Analytics_API_EntityType: z.ZodEnum<{
    host: "host";
    generic: "generic";
    service: "service";
    user: "user";
}>;
export type Security_Entity_Analytics_API_EntityType = z.infer<typeof Security_Entity_Analytics_API_EntityType>;
export declare const Security_Entity_Analytics_API_EngineStatus: z.ZodEnum<{
    error: "error";
    started: "started";
    stopped: "stopped";
    installing: "installing";
    updating: "updating";
}>;
export type Security_Entity_Analytics_API_EngineStatus = z.infer<typeof Security_Entity_Analytics_API_EngineStatus>;
export declare const Security_Entity_Analytics_API_IndexPattern: z.ZodString;
export type Security_Entity_Analytics_API_IndexPattern = z.infer<typeof Security_Entity_Analytics_API_IndexPattern>;
export declare const Security_Entity_Analytics_API_Interval: z.ZodString;
export type Security_Entity_Analytics_API_Interval = z.infer<typeof Security_Entity_Analytics_API_Interval>;
export declare const Security_Entity_Analytics_API_EngineDescriptor: z.ZodObject<{
    delay: z.ZodOptional<z.ZodString>;
    docsPerSecond: z.ZodOptional<z.ZodNumber>;
    error: z.ZodOptional<z.ZodObject<{
        action: z.ZodEnum<{
            init: "init";
        }>;
        message: z.ZodString;
    }, z.core.$strip>>;
    fieldHistoryLength: z.ZodNumber;
    filter: z.ZodOptional<z.ZodString>;
    frequency: z.ZodOptional<z.ZodString>;
    indexPattern: z.ZodString;
    lookbackPeriod: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        error: "error";
        started: "started";
        stopped: "stopped";
        installing: "installing";
        updating: "updating";
    }>;
    timeout: z.ZodOptional<z.ZodString>;
    timestampField: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_EngineDescriptor = z.infer<typeof Security_Entity_Analytics_API_EngineDescriptor>;
export declare const InitEntityStoreRequest: z.ZodObject<{
    delay: z.ZodOptional<z.ZodString>;
    docsPerSecond: z.ZodOptional<z.ZodNumber>;
    enrichPolicyExecutionInterval: z.ZodOptional<z.ZodString>;
    entityTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>>>;
    fieldHistoryLength: z.ZodOptional<z.ZodNumber>;
    filter: z.ZodOptional<z.ZodString>;
    frequency: z.ZodOptional<z.ZodString>;
    indexPattern: z.ZodOptional<z.ZodString>;
    lookbackPeriod: z.ZodOptional<z.ZodString>;
    maxPageSearchSize: z.ZodOptional<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodString>;
    timestampField: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InitEntityStoreRequest = z.infer<typeof InitEntityStoreRequest>;
export declare const InitEntityStoreResponse: z.ZodObject<{
    engines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        delay: z.ZodOptional<z.ZodString>;
        docsPerSecond: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodObject<{
            action: z.ZodEnum<{
                init: "init";
            }>;
            message: z.ZodString;
        }, z.core.$strip>>;
        fieldHistoryLength: z.ZodNumber;
        filter: z.ZodOptional<z.ZodString>;
        frequency: z.ZodOptional<z.ZodString>;
        indexPattern: z.ZodString;
        lookbackPeriod: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            error: "error";
            started: "started";
            stopped: "stopped";
            installing: "installing";
            updating: "updating";
        }>;
        timeout: z.ZodOptional<z.ZodString>;
        timestampField: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<{
            host: "host";
            generic: "generic";
            service: "service";
            user: "user";
        }>;
    }, z.core.$strip>>>;
    succeeded: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InitEntityStoreResponse = z.infer<typeof InitEntityStoreResponse>;
//# sourceMappingURL=init_entity_store.d.ts.map