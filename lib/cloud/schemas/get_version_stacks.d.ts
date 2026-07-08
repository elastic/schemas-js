import { z } from 'zod';
export declare const StackVersionMetadata: z.ZodObject<{
    notes: z.ZodOptional<z.ZodString>;
    pre_release: z.ZodOptional<z.ZodBoolean>;
    min_platform_version: z.ZodOptional<z.ZodString>;
    min_wire_compatibility_version: z.ZodOptional<z.ZodString>;
    min_index_compatibility_version: z.ZodOptional<z.ZodString>;
    schema_version: z.ZodOptional<z.ZodNumber>;
    is_fips: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type StackVersionMetadata = z.infer<typeof StackVersionMetadata>;
export declare const StackVersionInstanceCapacityConstraint: z.ZodObject<{
    min: z.ZodNumber;
    max: z.ZodNumber;
}, z.core.$strip>;
export type StackVersionInstanceCapacityConstraint = z.infer<typeof StackVersionInstanceCapacityConstraint>;
export declare const StackVersionTemplateFileHash: z.ZodObject<{
    path: z.ZodString;
    hash: z.ZodString;
}, z.core.$strip>;
export type StackVersionTemplateFileHash = z.infer<typeof StackVersionTemplateFileHash>;
export declare const StackVersionNodeType: z.ZodObject<{
    node_type: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    capacity_constraints: z.ZodOptional<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mandatory: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type StackVersionNodeType = z.infer<typeof StackVersionNodeType>;
export declare const StackVersionApmConfig: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodString;
    blacklist: z.ZodArray<z.ZodString>;
    settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    capacity_constraints: z.ZodOptional<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type StackVersionApmConfig = z.infer<typeof StackVersionApmConfig>;
export declare const StackVersionKibanaConfig: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodString;
    blacklist: z.ZodArray<z.ZodString>;
    settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    capacity_constraints: z.ZodOptional<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type StackVersionKibanaConfig = z.infer<typeof StackVersionKibanaConfig>;
export declare const StackVersionTemplateInfo: z.ZodObject<{
    template_version: z.ZodOptional<z.ZodString>;
    hashes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        hash: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type StackVersionTemplateInfo = z.infer<typeof StackVersionTemplateInfo>;
export declare const StackVersionAppSearchConfig: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodString;
    blacklist: z.ZodArray<z.ZodString>;
    settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    capacity_constraints: z.ZodOptional<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    node_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
        node_type: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        capacity_constraints: z.ZodOptional<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>;
        compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mandatory: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type StackVersionAppSearchConfig = z.infer<typeof StackVersionAppSearchConfig>;
export declare const StackVersionElasticsearchConfig: z.ZodObject<{
    docker_image: z.ZodString;
    plugins: z.ZodArray<z.ZodString>;
    default_plugins: z.ZodArray<z.ZodString>;
    blacklist: z.ZodArray<z.ZodString>;
    node_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
        node_type: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        capacity_constraints: z.ZodOptional<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>;
        compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mandatory: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    capacity_constraints: z.ZodOptional<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type StackVersionElasticsearchConfig = z.infer<typeof StackVersionElasticsearchConfig>;
export declare const StackVersionConfig: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    template: z.ZodObject<{
        template_version: z.ZodOptional<z.ZodString>;
        hashes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            hash: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    elasticsearch: z.ZodObject<{
        docker_image: z.ZodString;
        plugins: z.ZodArray<z.ZodString>;
        default_plugins: z.ZodArray<z.ZodString>;
        blacklist: z.ZodArray<z.ZodString>;
        node_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
            node_type: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            capacity_constraints: z.ZodOptional<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, z.core.$strip>>;
            compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
            mandatory: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        capacity_constraints: z.ZodOptional<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>;
        compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    kibana: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodString;
        blacklist: z.ZodArray<z.ZodString>;
        settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        capacity_constraints: z.ZodOptional<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>;
        compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    apm: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodString;
        blacklist: z.ZodArray<z.ZodString>;
        settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        capacity_constraints: z.ZodOptional<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>;
        compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    appsearch: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodString;
        blacklist: z.ZodArray<z.ZodString>;
        settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        capacity_constraints: z.ZodOptional<z.ZodObject<{
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, z.core.$strip>>;
        compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        node_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
            node_type: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            capacity_constraints: z.ZodOptional<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, z.core.$strip>>;
            compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
            mandatory: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    metadata: z.ZodOptional<z.ZodObject<{
        notes: z.ZodOptional<z.ZodString>;
        pre_release: z.ZodOptional<z.ZodBoolean>;
        min_platform_version: z.ZodOptional<z.ZodString>;
        min_wire_compatibility_version: z.ZodOptional<z.ZodString>;
        min_index_compatibility_version: z.ZodOptional<z.ZodString>;
        schema_version: z.ZodOptional<z.ZodNumber>;
        is_fips: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    deleted: z.ZodOptional<z.ZodBoolean>;
    upgradable_to: z.ZodArray<z.ZodString>;
    min_upgradable_from: z.ZodOptional<z.ZodString>;
    whitelisted: z.ZodOptional<z.ZodBoolean>;
    accessible: z.ZodOptional<z.ZodBoolean>;
    rolling_upgrade_compatible_versions: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type StackVersionConfig = z.infer<typeof StackVersionConfig>;
export declare const StackVersionConfigs: z.ZodObject<{
    stacks: z.ZodArray<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        template: z.ZodObject<{
            template_version: z.ZodOptional<z.ZodString>;
            hashes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                hash: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        elasticsearch: z.ZodObject<{
            docker_image: z.ZodString;
            plugins: z.ZodArray<z.ZodString>;
            default_plugins: z.ZodArray<z.ZodString>;
            blacklist: z.ZodArray<z.ZodString>;
            node_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                node_type: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                capacity_constraints: z.ZodOptional<z.ZodObject<{
                    min: z.ZodNumber;
                    max: z.ZodNumber;
                }, z.core.$strip>>;
                compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
                mandatory: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            capacity_constraints: z.ZodOptional<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, z.core.$strip>>;
            compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        kibana: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodString;
            blacklist: z.ZodArray<z.ZodString>;
            settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            capacity_constraints: z.ZodOptional<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, z.core.$strip>>;
            compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        apm: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodString;
            blacklist: z.ZodArray<z.ZodString>;
            settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            capacity_constraints: z.ZodOptional<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, z.core.$strip>>;
            compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        appsearch: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodString;
            blacklist: z.ZodArray<z.ZodString>;
            settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            capacity_constraints: z.ZodOptional<z.ZodObject<{
                min: z.ZodNumber;
                max: z.ZodNumber;
            }, z.core.$strip>>;
            compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
            node_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                node_type: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                capacity_constraints: z.ZodOptional<z.ZodObject<{
                    min: z.ZodNumber;
                    max: z.ZodNumber;
                }, z.core.$strip>>;
                compatible_node_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
                mandatory: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        metadata: z.ZodOptional<z.ZodObject<{
            notes: z.ZodOptional<z.ZodString>;
            pre_release: z.ZodOptional<z.ZodBoolean>;
            min_platform_version: z.ZodOptional<z.ZodString>;
            min_wire_compatibility_version: z.ZodOptional<z.ZodString>;
            min_index_compatibility_version: z.ZodOptional<z.ZodString>;
            schema_version: z.ZodOptional<z.ZodNumber>;
            is_fips: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        deleted: z.ZodOptional<z.ZodBoolean>;
        upgradable_to: z.ZodArray<z.ZodString>;
        min_upgradable_from: z.ZodOptional<z.ZodString>;
        whitelisted: z.ZodOptional<z.ZodBoolean>;
        accessible: z.ZodOptional<z.ZodBoolean>;
        rolling_upgrade_compatible_versions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StackVersionConfigs = z.infer<typeof StackVersionConfigs>;
//# sourceMappingURL=get_version_stacks.d.ts.map