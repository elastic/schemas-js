import { z } from 'zod';
export declare const Security_Entity_Analytics_API_AssetCriticalityLevel: z.ZodEnum<{
    low_impact: "low_impact";
    medium_impact: "medium_impact";
    high_impact: "high_impact";
    extreme_impact: "extreme_impact";
}>;
export type Security_Entity_Analytics_API_AssetCriticalityLevel = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityLevel>;
export declare const Security_Entity_Analytics_API_IdField: z.ZodEnum<{
    "host.name": "host.name";
    "user.name": "user.name";
    "service.name": "service.name";
    "entity.id": "entity.id";
}>;
export type Security_Entity_Analytics_API_IdField = z.infer<typeof Security_Entity_Analytics_API_IdField>;
export declare const Security_Entity_Analytics_API_AssetCriticalityRecordEcsParts: z.ZodObject<{
    asset: z.ZodObject<{
        criticality: z.ZodOptional<z.ZodEnum<{
            low_impact: "low_impact";
            medium_impact: "medium_impact";
            high_impact: "high_impact";
            extreme_impact: "extreme_impact";
        }>>;
    }, z.core.$strip>;
    entity: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        id: z.ZodString;
    }, z.core.$strip>>;
    host: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
    service: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
    user: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_AssetCriticalityRecordEcsParts = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityRecordEcsParts>;
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
export declare const Security_Entity_Analytics_API_CreateAssetCriticalityRecord: z.ZodObject<{
    id_field: z.ZodEnum<{
        "host.name": "host.name";
        "user.name": "user.name";
        "service.name": "service.name";
        "entity.id": "entity.id";
    }>;
    id_value: z.ZodString;
    criticality_level: z.ZodEnum<{
        low_impact: "low_impact";
        medium_impact: "medium_impact";
        high_impact: "high_impact";
        extreme_impact: "extreme_impact";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_CreateAssetCriticalityRecord = z.infer<typeof Security_Entity_Analytics_API_CreateAssetCriticalityRecord>;
export declare const Security_Entity_Analytics_API_AssetCriticalityRecord: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    id_field: z.ZodEnum<{
        "host.name": "host.name";
        "user.name": "user.name";
        "service.name": "service.name";
        "entity.id": "entity.id";
    }>;
    id_value: z.ZodString;
    criticality_level: z.ZodEnum<{
        low_impact: "low_impact";
        medium_impact: "medium_impact";
        high_impact: "high_impact";
        extreme_impact: "extreme_impact";
    }>;
}, z.core.$strip>, z.ZodObject<{
    asset: z.ZodObject<{
        criticality: z.ZodOptional<z.ZodEnum<{
            low_impact: "low_impact";
            medium_impact: "medium_impact";
            high_impact: "high_impact";
            extreme_impact: "extreme_impact";
        }>>;
    }, z.core.$strip>;
    entity: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        id: z.ZodString;
    }, z.core.$strip>>;
    host: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
    service: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
    user: z.ZodOptional<z.ZodObject<{
        asset: z.ZodOptional<z.ZodObject<{
            criticality: z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>;
        }, z.core.$strip>>;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>>, z.ZodObject<{
    '@timestamp': z.ZodString;
}, z.core.$strip>>;
export type Security_Entity_Analytics_API_AssetCriticalityRecord = z.infer<typeof Security_Entity_Analytics_API_AssetCriticalityRecord>;
export declare const DeleteAssetCriticalityRecordResponse: z.ZodObject<{
    deleted: z.ZodBoolean;
    record: z.ZodOptional<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        id_field: z.ZodEnum<{
            "host.name": "host.name";
            "user.name": "user.name";
            "service.name": "service.name";
            "entity.id": "entity.id";
        }>;
        id_value: z.ZodString;
        criticality_level: z.ZodEnum<{
            low_impact: "low_impact";
            medium_impact: "medium_impact";
            high_impact: "high_impact";
            extreme_impact: "extreme_impact";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        asset: z.ZodObject<{
            criticality: z.ZodOptional<z.ZodEnum<{
                low_impact: "low_impact";
                medium_impact: "medium_impact";
                high_impact: "high_impact";
                extreme_impact: "extreme_impact";
            }>>;
        }, z.core.$strip>;
        entity: z.ZodOptional<z.ZodObject<{
            asset: z.ZodOptional<z.ZodObject<{
                criticality: z.ZodEnum<{
                    low_impact: "low_impact";
                    medium_impact: "medium_impact";
                    high_impact: "high_impact";
                    extreme_impact: "extreme_impact";
                }>;
            }, z.core.$strip>>;
            id: z.ZodString;
        }, z.core.$strip>>;
        host: z.ZodOptional<z.ZodObject<{
            asset: z.ZodOptional<z.ZodObject<{
                criticality: z.ZodEnum<{
                    low_impact: "low_impact";
                    medium_impact: "medium_impact";
                    high_impact: "high_impact";
                    extreme_impact: "extreme_impact";
                }>;
            }, z.core.$strip>>;
            name: z.ZodString;
        }, z.core.$strip>>;
        service: z.ZodOptional<z.ZodObject<{
            asset: z.ZodOptional<z.ZodObject<{
                criticality: z.ZodEnum<{
                    low_impact: "low_impact";
                    medium_impact: "medium_impact";
                    high_impact: "high_impact";
                    extreme_impact: "extreme_impact";
                }>;
            }, z.core.$strip>>;
            name: z.ZodString;
        }, z.core.$strip>>;
        user: z.ZodOptional<z.ZodObject<{
            asset: z.ZodOptional<z.ZodObject<{
                criticality: z.ZodEnum<{
                    low_impact: "low_impact";
                    medium_impact: "medium_impact";
                    high_impact: "high_impact";
                    extreme_impact: "extreme_impact";
                }>;
            }, z.core.$strip>>;
            name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>, z.ZodObject<{
        '@timestamp': z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeleteAssetCriticalityRecordResponse = z.infer<typeof DeleteAssetCriticalityRecordResponse>;
//# sourceMappingURL=delete_asset_criticality_record.d.ts.map