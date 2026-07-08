import { z } from 'zod';
export declare const ExtensionFileMetadata: z.ZodObject<{
    last_modified_date: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ExtensionFileMetadata = z.infer<typeof ExtensionFileMetadata>;
export declare const Extension: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    download_url: z.ZodOptional<z.ZodString>;
    extension_type: z.ZodEnum<{
        plugin: "plugin";
        bundle: "bundle";
    }>;
    version: z.ZodString;
    deployments: z.ZodOptional<z.ZodArray<z.ZodString>>;
    file_metadata: z.ZodOptional<z.ZodObject<{
        last_modified_date: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Extension = z.infer<typeof Extension>;
export declare const Extensions: z.ZodObject<{
    extensions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        download_url: z.ZodOptional<z.ZodString>;
        extension_type: z.ZodEnum<{
            plugin: "plugin";
            bundle: "bundle";
        }>;
        version: z.ZodString;
        deployments: z.ZodOptional<z.ZodArray<z.ZodString>>;
        file_metadata: z.ZodOptional<z.ZodObject<{
            last_modified_date: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            url: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Extensions = z.infer<typeof Extensions>;
//# sourceMappingURL=list_extensions.d.ts.map