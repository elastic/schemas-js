import { z } from 'zod';
export declare const Machine_learning_APIs_mlSyncResponseSuccess: z.ZodBoolean;
export type Machine_learning_APIs_mlSyncResponseSuccess = z.infer<typeof Machine_learning_APIs_mlSyncResponseSuccess>;
export declare const Machine_learning_APIs_mlSyncResponseTrainedModels: z.ZodObject<{
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSyncResponseTrainedModels = z.infer<typeof Machine_learning_APIs_mlSyncResponseTrainedModels>;
export declare const Machine_learning_APIs_mlSyncResponseDataFrameAnalytics: z.ZodObject<{
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSyncResponseDataFrameAnalytics = z.infer<typeof Machine_learning_APIs_mlSyncResponseDataFrameAnalytics>;
export declare const Machine_learning_APIs_mlSyncResponseAnomalyDetectors: z.ZodObject<{
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSyncResponseAnomalyDetectors = z.infer<typeof Machine_learning_APIs_mlSyncResponseAnomalyDetectors>;
export declare const Machine_learning_APIs_mlSyncResponseDatafeeds: z.ZodObject<{
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSyncResponseDatafeeds = z.infer<typeof Machine_learning_APIs_mlSyncResponseDatafeeds>;
export declare const Machine_learning_APIs_mlSyncResponseSavedObjectsDeleted: z.ZodObject<{
    'anomaly-detector': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    'data-frame-analytics': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    'trained-model': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSyncResponseSavedObjectsDeleted = z.infer<typeof Machine_learning_APIs_mlSyncResponseSavedObjectsDeleted>;
export declare const Machine_learning_APIs_mlSyncResponseSavedObjectsCreated: z.ZodObject<{
    'anomaly-detector': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    'data-frame-analytics': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    'trained-model': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSyncResponseSavedObjectsCreated = z.infer<typeof Machine_learning_APIs_mlSyncResponseSavedObjectsCreated>;
export declare const Machine_learning_APIs_mlSync200Response: z.ZodObject<{
    datafeedsAdded: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    datafeedsRemoved: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    savedObjectsCreated: z.ZodOptional<z.ZodObject<{
        'anomaly-detector': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            success: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        'data-frame-analytics': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            success: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        'trained-model': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            success: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    savedObjectsDeleted: z.ZodOptional<z.ZodObject<{
        'anomaly-detector': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            success: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        'data-frame-analytics': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            success: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        'trained-model': z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            success: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Machine_learning_APIs_mlSync200Response = z.infer<typeof Machine_learning_APIs_mlSync200Response>;
//# sourceMappingURL=ml_sync.d.ts.map