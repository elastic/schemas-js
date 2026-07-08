import { z } from 'zod';
export declare const GetFleetAgentDownloadSourcesResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        auth: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            api_key: z.ZodOptional<z.ZodString>;
            headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodString;
                value: z.ZodString;
            }, z.core.$strip>>>;
            password: z.ZodOptional<z.ZodString>;
            username: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        host: z.ZodString;
        id: z.ZodString;
        is_default: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        secrets: z.ZodOptional<z.ZodObject<{
            auth: z.ZodOptional<z.ZodObject<{
                api_key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                }, z.core.$strip>, z.ZodString]>>;
                password: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                }, z.core.$strip>, z.ZodString]>>;
            }, z.core.$strip>>;
            ssl: z.ZodOptional<z.ZodObject<{
                key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                }, z.core.$strip>, z.ZodString]>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        ssl: z.ZodOptional<z.ZodObject<{
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type GetFleetAgentDownloadSourcesResponse = z.infer<typeof GetFleetAgentDownloadSourcesResponse>;
//# sourceMappingURL=get_fleet_agent_download_sources.d.ts.map