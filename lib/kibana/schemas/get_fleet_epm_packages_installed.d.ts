import { z } from 'zod';
export declare const Kibana_HTTP_APIs_package_icon: z.ZodObject<{
    dark_mode: z.ZodOptional<z.ZodBoolean>;
    path: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
    src: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_icon = z.infer<typeof Kibana_HTTP_APIs_package_icon>;
export declare const Kibana_HTTP_APIs_installed_package: z.ZodObject<{
    dataStreams: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodString;
    }, z.core.$strip>>;
    description: z.ZodOptional<z.ZodString>;
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        dark_mode: z.ZodOptional<z.ZodBoolean>;
        path: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodString>;
        src: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    name: z.ZodString;
    status: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_installed_package = z.infer<typeof Kibana_HTTP_APIs_installed_package>;
export declare const Kibana_HTTP_APIs_get_installed_packages_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        dataStreams: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            title: z.ZodString;
        }, z.core.$strip>>;
        description: z.ZodOptional<z.ZodString>;
        icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
            dark_mode: z.ZodOptional<z.ZodBoolean>;
            path: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodString>;
            src: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        name: z.ZodString;
        status: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        version: z.ZodString;
    }, z.core.$strip>>;
    searchAfter: z.ZodOptional<z.ZodArray<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNullable<z.ZodUnknown>]>>>>;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_installed_packages_response = z.infer<typeof Kibana_HTTP_APIs_get_installed_packages_response>;
//# sourceMappingURL=get_fleet_epm_packages_installed.d.ts.map