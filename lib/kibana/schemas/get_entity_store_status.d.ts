import { z } from 'zod';
export declare const Security_Entity_Analytics_API_StoreStatus: z.ZodEnum<{
    error: "error";
    stopped: "stopped";
    running: "running";
    not_installed: "not_installed";
    installing: "installing";
}>;
export type Security_Entity_Analytics_API_StoreStatus = z.infer<typeof Security_Entity_Analytics_API_StoreStatus>;
export declare const Security_Entity_Analytics_API_EngineComponentResource: z.ZodEnum<{
    index: "index";
    transform: "transform";
    data_stream: "data_stream";
    index_template: "index_template";
    component_template: "component_template";
    ingest_pipeline: "ingest_pipeline";
    ilm_policy: "ilm_policy";
    entity_engine: "entity_engine";
    entity_definition: "entity_definition";
    enrich_policy: "enrich_policy";
    task: "task";
}>;
export type Security_Entity_Analytics_API_EngineComponentResource = z.infer<typeof Security_Entity_Analytics_API_EngineComponentResource>;
export declare const Security_Entity_Analytics_API_TransformStatsMetadata: z.ZodObject<{
    delete_time_in_ms: z.ZodOptional<z.ZodNumber>;
    documents_deleted: z.ZodOptional<z.ZodNumber>;
    documents_indexed: z.ZodNumber;
    documents_processed: z.ZodNumber;
    exponential_avg_checkpoint_duration_ms: z.ZodNumber;
    exponential_avg_documents_indexed: z.ZodNumber;
    exponential_avg_documents_processed: z.ZodNumber;
    index_failures: z.ZodNumber;
    index_time_in_ms: z.ZodNumber;
    index_total: z.ZodNumber;
    pages_processed: z.ZodNumber;
    processing_time_in_ms: z.ZodNumber;
    processing_total: z.ZodNumber;
    search_failures: z.ZodNumber;
    search_time_in_ms: z.ZodNumber;
    search_total: z.ZodNumber;
    trigger_count: z.ZodNumber;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_TransformStatsMetadata = z.infer<typeof Security_Entity_Analytics_API_TransformStatsMetadata>;
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
export declare const Security_Entity_Analytics_API_EngineComponentStatus: z.ZodObject<{
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        message: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    health: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>>;
    id: z.ZodString;
    installed: z.ZodBoolean;
    metadata: z.ZodOptional<z.ZodObject<{
        delete_time_in_ms: z.ZodOptional<z.ZodNumber>;
        documents_deleted: z.ZodOptional<z.ZodNumber>;
        documents_indexed: z.ZodNumber;
        documents_processed: z.ZodNumber;
        exponential_avg_checkpoint_duration_ms: z.ZodNumber;
        exponential_avg_documents_indexed: z.ZodNumber;
        exponential_avg_documents_processed: z.ZodNumber;
        index_failures: z.ZodNumber;
        index_time_in_ms: z.ZodNumber;
        index_total: z.ZodNumber;
        pages_processed: z.ZodNumber;
        processing_time_in_ms: z.ZodNumber;
        processing_total: z.ZodNumber;
        search_failures: z.ZodNumber;
        search_time_in_ms: z.ZodNumber;
        search_total: z.ZodNumber;
        trigger_count: z.ZodNumber;
    }, z.core.$strip>>;
    resource: z.ZodEnum<{
        index: "index";
        transform: "transform";
        data_stream: "data_stream";
        index_template: "index_template";
        component_template: "component_template";
        ingest_pipeline: "ingest_pipeline";
        ilm_policy: "ilm_policy";
        entity_engine: "entity_engine";
        entity_definition: "entity_definition";
        enrich_policy: "enrich_policy";
        task: "task";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_EngineComponentStatus = z.infer<typeof Security_Entity_Analytics_API_EngineComponentStatus>;
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
export declare const GetEntityStoreStatusResponse: z.ZodObject<{
    engines: z.ZodArray<z.ZodObject<{
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
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                message: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            health: z.ZodOptional<z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>>;
            id: z.ZodString;
            installed: z.ZodBoolean;
            metadata: z.ZodOptional<z.ZodObject<{
                delete_time_in_ms: z.ZodOptional<z.ZodNumber>;
                documents_deleted: z.ZodOptional<z.ZodNumber>;
                documents_indexed: z.ZodNumber;
                documents_processed: z.ZodNumber;
                exponential_avg_checkpoint_duration_ms: z.ZodNumber;
                exponential_avg_documents_indexed: z.ZodNumber;
                exponential_avg_documents_processed: z.ZodNumber;
                index_failures: z.ZodNumber;
                index_time_in_ms: z.ZodNumber;
                index_total: z.ZodNumber;
                pages_processed: z.ZodNumber;
                processing_time_in_ms: z.ZodNumber;
                processing_total: z.ZodNumber;
                search_failures: z.ZodNumber;
                search_time_in_ms: z.ZodNumber;
                search_total: z.ZodNumber;
                trigger_count: z.ZodNumber;
            }, z.core.$strip>>;
            resource: z.ZodEnum<{
                index: "index";
                transform: "transform";
                data_stream: "data_stream";
                index_template: "index_template";
                component_template: "component_template";
                ingest_pipeline: "ingest_pipeline";
                ilm_policy: "ilm_policy";
                entity_engine: "entity_engine";
                entity_definition: "entity_definition";
                enrich_policy: "enrich_policy";
                task: "task";
            }>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        error: "error";
        stopped: "stopped";
        running: "running";
        not_installed: "not_installed";
        installing: "installing";
    }>;
}, z.core.$strip>;
export type GetEntityStoreStatusResponse = z.infer<typeof GetEntityStoreStatusResponse>;
//# sourceMappingURL=get_entity_store_status.d.ts.map