import { z } from 'zod';
export declare const Kibana_HTTP_APIs_output_ssl: z.ZodObject<{
    certificate: z.ZodOptional<z.ZodString>;
    certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
    key: z.ZodOptional<z.ZodString>;
    verification_mode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        strict: "strict";
        full: "full";
        certificate: "certificate";
    }>>;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_output_ssl = z.infer<typeof Kibana_HTTP_APIs_output_ssl>;
export declare const Kibana_HTTP_APIs_output_shipper: z.ZodObject<{
    compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_output_shipper = z.infer<typeof Kibana_HTTP_APIs_output_shipper>;
export declare const Kibana_HTTP_APIs_output_kafka: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    auth_type: z.ZodEnum<{
        ssl: "ssl";
        none: "none";
        user_pass: "user_pass";
        kerberos: "kerberos";
    }>;
    broker_timeout: z.ZodOptional<z.ZodNumber>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    client_id: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodEnum<{
        none: "none";
        gzip: "gzip";
        snappy: "snappy";
        lz4: "lz4";
    }>>;
    compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    connection_type: z.ZodOptional<z.ZodEnum<{
        plaintext: "plaintext";
        encryption: "encryption";
    }>>;
    hash: z.ZodOptional<z.ZodObject<{
        hash: z.ZodOptional<z.ZodString>;
        random: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$loose>>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$loose>>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    key: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    partition: z.ZodOptional<z.ZodEnum<{
        hash: "hash";
        random: "random";
        round_robin: "round_robin";
    }>>;
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    random: z.ZodOptional<z.ZodObject<{
        group_events: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>>;
    required_acks: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<0>, z.ZodLiteral<-1>]>>;
    round_robin: z.ZodOptional<z.ZodObject<{
        group_events: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>>;
    sasl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        mechanism: z.ZodOptional<z.ZodEnum<{
            PLAIN: "PLAIN";
            "SCRAM-SHA-256": "SCRAM-SHA-256";
            "SCRAM-SHA-512": "SCRAM-SHA-512";
        }>>;
    }, z.core.$loose>>>;
    secrets: z.ZodOptional<z.ZodObject<{
        password: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
        }, z.core.$loose>, z.ZodString]>>;
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$loose>, z.ZodString]>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    timeout: z.ZodOptional<z.ZodNumber>;
    topic: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        kafka: "kafka";
    }>;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_output_kafka = z.infer<typeof Kibana_HTTP_APIs_output_kafka>;
export declare const Kibana_HTTP_APIs_output_logstash: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$loose>, z.ZodString]>>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    type: z.ZodEnum<{
        logstash: "logstash";
    }>;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_output_logstash = z.infer<typeof Kibana_HTTP_APIs_output_logstash>;
export declare const Kibana_HTTP_APIs_output_remote_elasticsearch: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    kibana_api_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kibana_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preset: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        latency: "latency";
        balanced: "balanced";
        throughput: "throughput";
        scale: "scale";
    }>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        service_token: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
        }, z.core.$loose>, z.ZodString]>>;
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$loose>, z.ZodString]>>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    service_token: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    sync_integrations: z.ZodOptional<z.ZodBoolean>;
    sync_uninstalled_integrations: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<{
        remote_elasticsearch: "remote_elasticsearch";
    }>;
    write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_output_remote_elasticsearch = z.infer<typeof Kibana_HTTP_APIs_output_remote_elasticsearch>;
export declare const Kibana_HTTP_APIs_output_elasticsearch: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preset: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        latency: "latency";
        balanced: "balanced";
        throughput: "throughput";
        scale: "scale";
    }>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$loose>, z.ZodString]>>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    type: z.ZodEnum<{
        elasticsearch: "elasticsearch";
    }>;
    write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_output_elasticsearch = z.infer<typeof Kibana_HTTP_APIs_output_elasticsearch>;
export declare const Kibana_HTTP_APIs_new_output_kafka: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    auth_type: z.ZodEnum<{
        ssl: "ssl";
        none: "none";
        user_pass: "user_pass";
        kerberos: "kerberos";
    }>;
    broker_timeout: z.ZodOptional<z.ZodNumber>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    client_id: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodEnum<{
        none: "none";
        gzip: "gzip";
        snappy: "snappy";
        lz4: "lz4";
    }>>;
    compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    connection_type: z.ZodOptional<z.ZodEnum<{
        plaintext: "plaintext";
        encryption: "encryption";
    }>>;
    hash: z.ZodOptional<z.ZodObject<{
        hash: z.ZodOptional<z.ZodString>;
        random: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    key: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    partition: z.ZodOptional<z.ZodEnum<{
        hash: "hash";
        random: "random";
        round_robin: "round_robin";
    }>>;
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    random: z.ZodOptional<z.ZodObject<{
        group_events: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    required_acks: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<0>, z.ZodLiteral<-1>]>>;
    round_robin: z.ZodOptional<z.ZodObject<{
        group_events: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    sasl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        mechanism: z.ZodOptional<z.ZodEnum<{
            PLAIN: "PLAIN";
            "SCRAM-SHA-256": "SCRAM-SHA-256";
            "SCRAM-SHA-512": "SCRAM-SHA-512";
        }>>;
    }, z.core.$strip>>>;
    secrets: z.ZodOptional<z.ZodObject<{
        password: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
        }, z.core.$strip>, z.ZodString]>>;
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    timeout: z.ZodOptional<z.ZodNumber>;
    topic: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        kafka: "kafka";
    }>;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_output_kafka = z.infer<typeof Kibana_HTTP_APIs_new_output_kafka>;
export declare const Kibana_HTTP_APIs_new_output_logstash: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    type: z.ZodEnum<{
        logstash: "logstash";
    }>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_output_logstash = z.infer<typeof Kibana_HTTP_APIs_new_output_logstash>;
export declare const Kibana_HTTP_APIs_new_output_remote_elasticsearch: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    kibana_api_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kibana_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preset: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        latency: "latency";
        balanced: "balanced";
        throughput: "throughput";
        scale: "scale";
    }>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        service_token: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
        }, z.core.$strip>, z.ZodString]>>;
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    service_token: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    sync_integrations: z.ZodOptional<z.ZodBoolean>;
    sync_uninstalled_integrations: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<{
        remote_elasticsearch: "remote_elasticsearch";
    }>;
    write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_output_remote_elasticsearch = z.infer<typeof Kibana_HTTP_APIs_new_output_remote_elasticsearch>;
export declare const Kibana_HTTP_APIs_new_output_elasticsearch: z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preset: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        latency: "latency";
        balanced: "balanced";
        throughput: "throughput";
        scale: "scale";
    }>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    type: z.ZodEnum<{
        elasticsearch: "elasticsearch";
    }>;
    write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_output_elasticsearch = z.infer<typeof Kibana_HTTP_APIs_new_output_elasticsearch>;
export declare const PostFleetOutputsRequest: z.ZodDiscriminatedUnion<[z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preset: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        latency: "latency";
        balanced: "balanced";
        throughput: "throughput";
        scale: "scale";
    }>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    type: z.ZodEnum<{
        elasticsearch: "elasticsearch";
    }>;
    write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>, z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    kibana_api_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kibana_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preset: z.ZodOptional<z.ZodEnum<{
        custom: "custom";
        latency: "latency";
        balanced: "balanced";
        throughput: "throughput";
        scale: "scale";
    }>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        service_token: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
        }, z.core.$strip>, z.ZodString]>>;
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    service_token: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    sync_integrations: z.ZodOptional<z.ZodBoolean>;
    sync_uninstalled_integrations: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<{
        remote_elasticsearch: "remote_elasticsearch";
    }>;
    write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>, z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secrets: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    type: z.ZodEnum<{
        logstash: "logstash";
    }>;
}, z.core.$strip>, z.ZodObject<{
    allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
    auth_type: z.ZodEnum<{
        ssl: "ssl";
        none: "none";
        user_pass: "user_pass";
        kerberos: "kerberos";
    }>;
    broker_timeout: z.ZodOptional<z.ZodNumber>;
    ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    client_id: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodEnum<{
        none: "none";
        gzip: "gzip";
        snappy: "snappy";
        lz4: "lz4";
    }>>;
    compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    connection_type: z.ZodOptional<z.ZodEnum<{
        plaintext: "plaintext";
        encryption: "encryption";
    }>>;
    hash: z.ZodOptional<z.ZodObject<{
        hash: z.ZodOptional<z.ZodString>;
        random: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    hosts: z.ZodArray<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    key: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    partition: z.ZodOptional<z.ZodEnum<{
        hash: "hash";
        random: "random";
        round_robin: "round_robin";
    }>>;
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    random: z.ZodOptional<z.ZodObject<{
        group_events: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    required_acks: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<0>, z.ZodLiteral<-1>]>>;
    round_robin: z.ZodOptional<z.ZodObject<{
        group_events: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    sasl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        mechanism: z.ZodOptional<z.ZodEnum<{
            PLAIN: "PLAIN";
            "SCRAM-SHA-256": "SCRAM-SHA-256";
            "SCRAM-SHA-512": "SCRAM-SHA-512";
        }>>;
    }, z.core.$strip>>>;
    secrets: z.ZodOptional<z.ZodObject<{
        password: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
        }, z.core.$strip>, z.ZodString]>>;
        ssl: z.ZodOptional<z.ZodObject<{
            key: z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$strip>, z.ZodString]>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$loose>>>;
    ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        key: z.ZodOptional<z.ZodString>;
        verification_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            strict: "strict";
            full: "full";
            certificate: "certificate";
        }>>;
    }, z.core.$loose>>>;
    timeout: z.ZodOptional<z.ZodNumber>;
    topic: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        kafka: "kafka";
    }>;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>], "type">;
export type PostFleetOutputsRequest = z.infer<typeof PostFleetOutputsRequest>;
export declare const PostFleetOutputsResponse: z.ZodObject<{
    item: z.ZodDiscriminatedUnion<[z.ZodObject<{
        allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
        ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hosts: z.ZodArray<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
        is_internal: z.ZodOptional<z.ZodBoolean>;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preset: z.ZodOptional<z.ZodEnum<{
            custom: "custom";
            latency: "latency";
            balanced: "balanced";
            throughput: "throughput";
            scale: "scale";
        }>>;
        proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        secrets: z.ZodOptional<z.ZodObject<{
            ssl: z.ZodOptional<z.ZodObject<{
                key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    hash: z.ZodOptional<z.ZodString>;
                    id: z.ZodString;
                }, z.core.$loose>, z.ZodString]>>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$loose>>>;
        ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            key: z.ZodOptional<z.ZodString>;
            verification_mode: z.ZodOptional<z.ZodEnum<{
                none: "none";
                strict: "strict";
                full: "full";
                certificate: "certificate";
            }>>;
        }, z.core.$loose>>>;
        type: z.ZodEnum<{
            elasticsearch: "elasticsearch";
        }>;
        write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$loose>, z.ZodObject<{
        allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
        ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hosts: z.ZodArray<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
        is_internal: z.ZodOptional<z.ZodBoolean>;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        kibana_api_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kibana_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preset: z.ZodOptional<z.ZodEnum<{
            custom: "custom";
            latency: "latency";
            balanced: "balanced";
            throughput: "throughput";
            scale: "scale";
        }>>;
        proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        secrets: z.ZodOptional<z.ZodObject<{
            service_token: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$loose>, z.ZodString]>>;
            ssl: z.ZodOptional<z.ZodObject<{
                key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    hash: z.ZodOptional<z.ZodString>;
                    id: z.ZodString;
                }, z.core.$loose>, z.ZodString]>>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        service_token: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$loose>>>;
        ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            key: z.ZodOptional<z.ZodString>;
            verification_mode: z.ZodOptional<z.ZodEnum<{
                none: "none";
                strict: "strict";
                full: "full";
                certificate: "certificate";
            }>>;
        }, z.core.$loose>>>;
        sync_integrations: z.ZodOptional<z.ZodBoolean>;
        sync_uninstalled_integrations: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodEnum<{
            remote_elasticsearch: "remote_elasticsearch";
        }>;
        write_to_logs_streams: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$loose>, z.ZodObject<{
        allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
        ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hosts: z.ZodArray<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
        is_internal: z.ZodOptional<z.ZodBoolean>;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        secrets: z.ZodOptional<z.ZodObject<{
            ssl: z.ZodOptional<z.ZodObject<{
                key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    hash: z.ZodOptional<z.ZodString>;
                    id: z.ZodString;
                }, z.core.$loose>, z.ZodString]>>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$loose>>>;
        ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            key: z.ZodOptional<z.ZodString>;
            verification_mode: z.ZodOptional<z.ZodEnum<{
                none: "none";
                strict: "strict";
                full: "full";
                certificate: "certificate";
            }>>;
        }, z.core.$loose>>>;
        type: z.ZodEnum<{
            logstash: "logstash";
        }>;
    }, z.core.$loose>, z.ZodObject<{
        allow_edit: z.ZodOptional<z.ZodArray<z.ZodString>>;
        auth_type: z.ZodEnum<{
            ssl: "ssl";
            none: "none";
            user_pass: "user_pass";
            kerberos: "kerberos";
        }>;
        broker_timeout: z.ZodOptional<z.ZodNumber>;
        ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ca_trusted_fingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        client_id: z.ZodOptional<z.ZodString>;
        compression: z.ZodOptional<z.ZodEnum<{
            none: "none";
            gzip: "gzip";
            snappy: "snappy";
            lz4: "lz4";
        }>>;
        compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        connection_type: z.ZodOptional<z.ZodEnum<{
            plaintext: "plaintext";
            encryption: "encryption";
        }>>;
        hash: z.ZodOptional<z.ZodObject<{
            hash: z.ZodOptional<z.ZodString>;
            random: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$loose>>;
        headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, z.core.$loose>>>;
        hosts: z.ZodArray<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_default_monitoring: z.ZodOptional<z.ZodBoolean>;
        is_internal: z.ZodOptional<z.ZodBoolean>;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        key: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        otel_disable_beatsauth: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        otel_exporter_config_yaml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        partition: z.ZodOptional<z.ZodEnum<{
            hash: "hash";
            random: "random";
            round_robin: "round_robin";
        }>>;
        password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        random: z.ZodOptional<z.ZodObject<{
            group_events: z.ZodOptional<z.ZodNumber>;
        }, z.core.$loose>>;
        required_acks: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<0>, z.ZodLiteral<-1>]>>;
        round_robin: z.ZodOptional<z.ZodObject<{
            group_events: z.ZodOptional<z.ZodNumber>;
        }, z.core.$loose>>;
        sasl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            mechanism: z.ZodOptional<z.ZodEnum<{
                PLAIN: "PLAIN";
                "SCRAM-SHA-256": "SCRAM-SHA-256";
                "SCRAM-SHA-512": "SCRAM-SHA-512";
            }>>;
        }, z.core.$loose>>>;
        secrets: z.ZodOptional<z.ZodObject<{
            password: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, z.core.$loose>, z.ZodString]>>;
            ssl: z.ZodOptional<z.ZodObject<{
                key: z.ZodUnion<readonly [z.ZodObject<{
                    hash: z.ZodOptional<z.ZodString>;
                    id: z.ZodString;
                }, z.core.$loose>, z.ZodString]>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        shipper: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            compression_level: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_compression_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_encryption_enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            disk_queue_max_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            disk_queue_path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            loadbalance: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            max_batch_bytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mem_queue_events: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            queue_flush_timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$loose>>>;
        ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            key: z.ZodOptional<z.ZodString>;
            verification_mode: z.ZodOptional<z.ZodEnum<{
                none: "none";
                strict: "strict";
                full: "full";
                certificate: "certificate";
            }>>;
        }, z.core.$loose>>>;
        timeout: z.ZodOptional<z.ZodNumber>;
        topic: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<{
            kafka: "kafka";
        }>;
        username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$loose>], "type">;
}, z.core.$strip>;
export type PostFleetOutputsResponse = z.infer<typeof PostFleetOutputsResponse>;
//# sourceMappingURL=post_fleet_outputs.d.ts.map