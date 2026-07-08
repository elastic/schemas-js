import { z } from 'zod';
export declare const Security_Entity_Analytics_API_AssetCriticalityBulkUploadStats: z.ZodObject<{
    failed: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_AssetCriticalityBulkUploadStats = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityBulkUploadStats>;
export declare const Security_Entity_Analytics_API_AssetCriticalityBulkUploadErrorItem: z.ZodObject<{
    index: z.ZodNumber;
    message: z.ZodString;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_AssetCriticalityBulkUploadErrorItem = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityBulkUploadErrorItem>;
export declare const Security_Entity_Analytics_API_AssetCriticalityLevelsForBulkUpload: z.ZodEnum<{
    unassigned: "unassigned";
    low_impact: "low_impact";
    medium_impact: "medium_impact";
    high_impact: "high_impact";
    extreme_impact: "extreme_impact";
}>;
export type Security_Entity_Analytics_API_AssetCriticalityLevelsForBulkUpload = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityLevelsForBulkUpload>;
export declare const Security_Entity_Analytics_API_IdField: z.ZodEnum<{
    "host.name": "host.name";
    "user.name": "user.name";
    "service.name": "service.name";
    "entity.id": "entity.id";
}>;
export type Security_Entity_Analytics_API_IdField = z.infer<typeof Security_Entity_Analytics_API_IdField>;
export declare const Security_Entity_Analytics_API_AssetCriticalityRecordIdParts: z.ZodObject<{
    id_field: z.ZodEnum<{
        "host.name": "host.name";
        "user.name": "user.name";
        "service.name": "service.name";
        "entity.id": "entity.id";
    }>;
    id_value: z.ZodString;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_AssetCriticalityRecordIdParts = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityRecordIdParts>;
export declare const BulkUpsertAssetCriticalityRecordsRequest: z.ZodObject<{
    records: z.ZodArray<z.ZodObject<{
        id_field: z.ZodEnum<{
            "host.name": "host.name";
            "user.name": "user.name";
            "service.name": "service.name";
            "entity.id": "entity.id";
        }>;
        id_value: z.ZodString;
        criticality_level: z.ZodEnum<{
            unassigned: "unassigned";
            low_impact: "low_impact";
            medium_impact: "medium_impact";
            high_impact: "high_impact";
            extreme_impact: "extreme_impact";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type BulkUpsertAssetCriticalityRecordsRequest = z.infer<typeof BulkUpsertAssetCriticalityRecordsRequest>;
export declare const BulkUpsertAssetCriticalityRecordsResponse: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        message: z.ZodString;
    }, z.core.$strip>>;
    stats: z.ZodObject<{
        failed: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type BulkUpsertAssetCriticalityRecordsResponse = z.infer<typeof BulkUpsertAssetCriticalityRecordsResponse>;
//# sourceMappingURL=bulk_upsert_asset_criticality_records.d.ts.map