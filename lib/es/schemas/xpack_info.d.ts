import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const LicenseLicenseStatus: z.ZodEnum<{
    active: "active";
    invalid: "invalid";
    valid: "valid";
    expired: "expired";
}>;
export type LicenseLicenseStatus = z.infer<typeof LicenseLicenseStatus>;
export declare const LicenseLicenseType: z.ZodEnum<{
    missing: "missing";
    standard: "standard";
    basic: "basic";
    trial: "trial";
    dev: "dev";
    silver: "silver";
    gold: "gold";
    platinum: "platinum";
    enterprise: "enterprise";
}>;
export type LicenseLicenseType = z.infer<typeof LicenseLicenseType>;
export declare const XpackInfoBuildInformation: z.ZodObject<{
    date: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    hash: z.ZodString;
}, z.core.$strip>;
export type XpackInfoBuildInformation = z.infer<typeof XpackInfoBuildInformation>;
export declare const XpackInfoNativeCodeInformation: z.ZodObject<{
    build_hash: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>;
export type XpackInfoNativeCodeInformation = z.infer<typeof XpackInfoNativeCodeInformation>;
export declare const XpackInfoFeature: z.ZodObject<{
    available: z.ZodBoolean;
    description: z.ZodOptional<z.ZodString>;
    enabled: z.ZodBoolean;
    native_code_info: z.ZodOptional<z.ZodObject<{
        build_hash: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackInfoFeature = z.infer<typeof XpackInfoFeature>;
export declare const XpackInfoFeatures: z.ZodObject<{
    aggregate_metric: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    analytics: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    ccr: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data_streams: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    data_tiers: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    enrich: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    eql: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    graph: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    ilm: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    logstash: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    logsdb: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    ml: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    monitoring: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    rollup: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    runtime_fields: z.ZodOptional<z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    searchable_snapshots: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    security: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    slm: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    spatial: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    sql: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    transform: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    voting_only: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    watcher: z.ZodObject<{
        available: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodBoolean;
        native_code_info: z.ZodOptional<z.ZodObject<{
            build_hash: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackInfoFeatures = z.infer<typeof XpackInfoFeatures>;
export declare const XpackInfoMinimalLicenseInformation: z.ZodObject<{
    expiry_date_in_millis: z.ZodAny;
    mode: z.ZodEnum<{
        missing: "missing";
        standard: "standard";
        basic: "basic";
        trial: "trial";
        dev: "dev";
        silver: "silver";
        gold: "gold";
        platinum: "platinum";
        enterprise: "enterprise";
    }>;
    status: z.ZodEnum<{
        active: "active";
        invalid: "invalid";
        valid: "valid";
        expired: "expired";
    }>;
    type: z.ZodEnum<{
        missing: "missing";
        standard: "standard";
        basic: "basic";
        trial: "trial";
        dev: "dev";
        silver: "silver";
        gold: "gold";
        platinum: "platinum";
        enterprise: "enterprise";
    }>;
    uid: z.ZodString;
}, z.core.$strip>;
export type XpackInfoMinimalLicenseInformation = z.infer<typeof XpackInfoMinimalLicenseInformation>;
export declare const XpackInfoXPackCategory: z.ZodEnum<{
    features: "features";
    license: "license";
    build: "build";
}>;
export type XpackInfoXPackCategory = z.infer<typeof XpackInfoXPackCategory>;
/**
 * Get information.
 *
 * The information provided by the API includes:
 *
 * * Build information including the build number and timestamp.
 * * License information about the currently installed license.
 * * Feature information for the features that are currently enabled and available under the current license.
 */
export declare const XpackInfoRequest: z.ZodObject<{
    categories: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        features: "features";
        license: "license";
        build: "build";
    }>>>;
    accept_enterprise: z.ZodOptional<z.ZodBoolean>;
    human: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type XpackInfoRequest = z.infer<typeof XpackInfoRequest>;
export declare const XpackInfoResponse: z.ZodObject<{
    build: z.ZodObject<{
        date: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        hash: z.ZodString;
    }, z.core.$strip>;
    features: z.ZodObject<{
        aggregate_metric: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        analytics: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        ccr: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        data_streams: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        data_tiers: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        enrich: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        eql: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        graph: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        ilm: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        logstash: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        logsdb: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        ml: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        monitoring: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        rollup: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        runtime_fields: z.ZodOptional<z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        searchable_snapshots: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        security: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        slm: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        spatial: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        sql: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        transform: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        voting_only: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        watcher: z.ZodObject<{
            available: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            enabled: z.ZodBoolean;
            native_code_info: z.ZodOptional<z.ZodObject<{
                build_hash: z.ZodString;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    license: z.ZodObject<{
        expiry_date_in_millis: z.ZodAny;
        mode: z.ZodEnum<{
            missing: "missing";
            standard: "standard";
            basic: "basic";
            trial: "trial";
            dev: "dev";
            silver: "silver";
            gold: "gold";
            platinum: "platinum";
            enterprise: "enterprise";
        }>;
        status: z.ZodEnum<{
            active: "active";
            invalid: "invalid";
            valid: "valid";
            expired: "expired";
        }>;
        type: z.ZodEnum<{
            missing: "missing";
            standard: "standard";
            basic: "basic";
            trial: "trial";
            dev: "dev";
            silver: "silver";
            gold: "gold";
            platinum: "platinum";
            enterprise: "enterprise";
        }>;
        uid: z.ZodString;
    }, z.core.$strip>;
    tagline: z.ZodString;
}, z.core.$strip>;
export type XpackInfoResponse = z.infer<typeof XpackInfoResponse>;
//# sourceMappingURL=xpack_info.d.ts.map