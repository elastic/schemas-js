import { z } from 'zod';
export declare const Kibana_HTTP_APIs_full_agent_policy: z.ZodObject<{
    agent: z.ZodOptional<z.ZodObject<{
        download: z.ZodObject<{
            auth: z.ZodOptional<z.ZodObject<{
                api_key: z.ZodOptional<z.ZodString>;
                headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    value: z.ZodString;
                }, z.core.$strip>>>;
                password: z.ZodOptional<z.ZodString>;
                username: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
            proxy_url: z.ZodOptional<z.ZodString>;
            secrets: z.ZodOptional<z.ZodObject<{
                ssl: z.ZodOptional<z.ZodObject<{
                    key: z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                    }, z.core.$loose>;
                }, z.core.$loose>>;
            }, z.core.$loose>>;
            sourceURI: z.ZodString;
            ssl: z.ZodOptional<z.ZodObject<{
                certificate: z.ZodOptional<z.ZodString>;
                certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
                key: z.ZodOptional<z.ZodString>;
                renegotiation: z.ZodOptional<z.ZodString>;
                verification_mode: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            target_directory: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        features: z.ZodRecord<z.ZodString, z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        internal: z.ZodNullable<z.ZodUnknown>;
        limits: z.ZodOptional<z.ZodObject<{
            go_max_procs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        logging: z.ZodOptional<z.ZodObject<{
            files: z.ZodOptional<z.ZodObject<{
                interval: z.ZodOptional<z.ZodString>;
                keepfiles: z.ZodOptional<z.ZodNumber>;
                rotateeverybytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            level: z.ZodOptional<z.ZodString>;
            metrics: z.ZodOptional<z.ZodObject<{
                period: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            to_files: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        monitoring: z.ZodObject<{
            _runtime_experimental: z.ZodOptional<z.ZodString>;
            apm: z.ZodNullable<z.ZodUnknown>;
            diagnostics: z.ZodOptional<z.ZodObject<{
                limit: z.ZodOptional<z.ZodObject<{
                    burst: z.ZodOptional<z.ZodNumber>;
                    interval: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                uploader: z.ZodOptional<z.ZodObject<{
                    init_dur: z.ZodOptional<z.ZodString>;
                    max_dur: z.ZodOptional<z.ZodString>;
                    max_retries: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            enabled: z.ZodBoolean;
            http: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                host: z.ZodOptional<z.ZodString>;
                port: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            logs: z.ZodBoolean;
            metrics: z.ZodBoolean;
            namespace: z.ZodOptional<z.ZodString>;
            pprof: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
            }, z.core.$strip>>;
            traces: z.ZodBoolean;
            use_output: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        protection: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            signing_key: z.ZodString;
            uninstall_token_hash: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    connectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    exporters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    fleet: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        hosts: z.ZodArray<z.ZodString>;
        proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
        proxy_url: z.ZodOptional<z.ZodString>;
        secrets: z.ZodOptional<z.ZodObject<{
            ssl: z.ZodOptional<z.ZodObject<{
                key: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                }, z.core.$loose>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        ssl: z.ZodOptional<z.ZodObject<{
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            key: z.ZodOptional<z.ZodString>;
            renegotiation: z.ZodOptional<z.ZodString>;
            verification_mode: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        kibana: z.ZodObject<{
            hosts: z.ZodArray<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            protocol: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    id: z.ZodString;
    inputs: z.ZodArray<z.ZodObject<{
        data_stream: z.ZodObject<{
            namespace: z.ZodString;
        }, z.core.$loose>;
        id: z.ZodString;
        meta: z.ZodOptional<z.ZodObject<{
            package: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                version: z.ZodString;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        name: z.ZodString;
        package_policy_id: z.ZodString;
        processors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            add_fields: z.ZodObject<{
                fields: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                target: z.ZodString;
            }, z.core.$loose>;
        }, z.core.$loose>>>;
        revision: z.ZodNumber;
        streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodObject<{
                dataset: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>;
            id: z.ZodString;
        }, z.core.$loose>>>;
        type: z.ZodString;
        use_output: z.ZodString;
    }, z.core.$loose>>;
    namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
    output_permissions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
    outputs: z.ZodRecord<z.ZodString, z.ZodObject<{
        ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hosts: z.ZodOptional<z.ZodArray<z.ZodString>>;
        proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
        proxy_url: z.ZodOptional<z.ZodString>;
        type: z.ZodString;
    }, z.core.$loose>>;
    processors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    receivers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    revision: z.ZodOptional<z.ZodNumber>;
    secret_references: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>>>;
    service: z.ZodOptional<z.ZodObject<{
        extensions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            exporters: z.ZodOptional<z.ZodArray<z.ZodString>>;
            processors: z.ZodOptional<z.ZodArray<z.ZodString>>;
            receivers: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    signed: z.ZodOptional<z.ZodObject<{
        data: z.ZodString;
        signature: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_full_agent_policy = z.infer<typeof Kibana_HTTP_APIs_full_agent_policy>;
export declare const Kibana_HTTP_APIs_get_full_agent_policy_response: z.ZodObject<{
    item: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        agent: z.ZodOptional<z.ZodObject<{
            download: z.ZodObject<{
                auth: z.ZodOptional<z.ZodObject<{
                    api_key: z.ZodOptional<z.ZodString>;
                    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        key: z.ZodString;
                        value: z.ZodString;
                    }, z.core.$strip>>>;
                    password: z.ZodOptional<z.ZodString>;
                    username: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
                proxy_url: z.ZodOptional<z.ZodString>;
                secrets: z.ZodOptional<z.ZodObject<{
                    ssl: z.ZodOptional<z.ZodObject<{
                        key: z.ZodObject<{
                            id: z.ZodOptional<z.ZodString>;
                        }, z.core.$loose>;
                    }, z.core.$loose>>;
                }, z.core.$loose>>;
                sourceURI: z.ZodString;
                ssl: z.ZodOptional<z.ZodObject<{
                    certificate: z.ZodOptional<z.ZodString>;
                    certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    key: z.ZodOptional<z.ZodString>;
                    renegotiation: z.ZodOptional<z.ZodString>;
                    verification_mode: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                target_directory: z.ZodOptional<z.ZodString>;
                timeout: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            features: z.ZodRecord<z.ZodString, z.ZodObject<{
                enabled: z.ZodBoolean;
            }, z.core.$strip>>;
            internal: z.ZodNullable<z.ZodUnknown>;
            limits: z.ZodOptional<z.ZodObject<{
                go_max_procs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            logging: z.ZodOptional<z.ZodObject<{
                files: z.ZodOptional<z.ZodObject<{
                    interval: z.ZodOptional<z.ZodString>;
                    keepfiles: z.ZodOptional<z.ZodNumber>;
                    rotateeverybytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                level: z.ZodOptional<z.ZodString>;
                metrics: z.ZodOptional<z.ZodObject<{
                    period: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                to_files: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            monitoring: z.ZodObject<{
                _runtime_experimental: z.ZodOptional<z.ZodString>;
                apm: z.ZodNullable<z.ZodUnknown>;
                diagnostics: z.ZodOptional<z.ZodObject<{
                    limit: z.ZodOptional<z.ZodObject<{
                        burst: z.ZodOptional<z.ZodNumber>;
                        interval: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    uploader: z.ZodOptional<z.ZodObject<{
                        init_dur: z.ZodOptional<z.ZodString>;
                        max_dur: z.ZodOptional<z.ZodString>;
                        max_retries: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                enabled: z.ZodBoolean;
                http: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    host: z.ZodOptional<z.ZodString>;
                    port: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                logs: z.ZodBoolean;
                metrics: z.ZodBoolean;
                namespace: z.ZodOptional<z.ZodString>;
                pprof: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodBoolean;
                }, z.core.$strip>>;
                traces: z.ZodBoolean;
                use_output: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            protection: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
                signing_key: z.ZodString;
                uninstall_token_hash: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        connectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        exporters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        fleet: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            hosts: z.ZodArray<z.ZodString>;
            proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
            proxy_url: z.ZodOptional<z.ZodString>;
            secrets: z.ZodOptional<z.ZodObject<{
                ssl: z.ZodOptional<z.ZodObject<{
                    key: z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                    }, z.core.$loose>;
                }, z.core.$loose>>;
            }, z.core.$loose>>;
            ssl: z.ZodOptional<z.ZodObject<{
                certificate: z.ZodOptional<z.ZodString>;
                certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
                key: z.ZodOptional<z.ZodString>;
                renegotiation: z.ZodOptional<z.ZodString>;
                verification_mode: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodObject<{
            kibana: z.ZodObject<{
                hosts: z.ZodArray<z.ZodString>;
                path: z.ZodOptional<z.ZodString>;
                protocol: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>]>>;
        id: z.ZodString;
        inputs: z.ZodArray<z.ZodObject<{
            data_stream: z.ZodObject<{
                namespace: z.ZodString;
            }, z.core.$loose>;
            id: z.ZodString;
            meta: z.ZodOptional<z.ZodObject<{
                package: z.ZodOptional<z.ZodObject<{
                    name: z.ZodString;
                    version: z.ZodString;
                }, z.core.$loose>>;
            }, z.core.$loose>>;
            name: z.ZodString;
            package_policy_id: z.ZodString;
            processors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                add_fields: z.ZodObject<{
                    fields: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    target: z.ZodString;
                }, z.core.$loose>;
            }, z.core.$loose>>>;
            revision: z.ZodNumber;
            streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
                data_stream: z.ZodObject<{
                    dataset: z.ZodString;
                    type: z.ZodOptional<z.ZodString>;
                }, z.core.$loose>;
                id: z.ZodString;
            }, z.core.$loose>>>;
            type: z.ZodString;
            use_output: z.ZodString;
        }, z.core.$loose>>;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        output_permissions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
        outputs: z.ZodRecord<z.ZodString, z.ZodObject<{
            ca_sha256: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            hosts: z.ZodOptional<z.ZodArray<z.ZodString>>;
            proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
            proxy_url: z.ZodOptional<z.ZodString>;
            type: z.ZodString;
        }, z.core.$loose>>;
        processors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        receivers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        revision: z.ZodOptional<z.ZodNumber>;
        secret_references: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        service: z.ZodOptional<z.ZodObject<{
            extensions: z.ZodOptional<z.ZodArray<z.ZodString>>;
            pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                exporters: z.ZodOptional<z.ZodArray<z.ZodString>>;
                processors: z.ZodOptional<z.ZodArray<z.ZodString>>;
                receivers: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        signed: z.ZodOptional<z.ZodObject<{
            data: z.ZodString;
            signature: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_full_agent_policy_response = z.infer<typeof Kibana_HTTP_APIs_get_full_agent_policy_response>;
//# sourceMappingURL=get_fleet_agent_policies_agentpolicyid_full.d.ts.map