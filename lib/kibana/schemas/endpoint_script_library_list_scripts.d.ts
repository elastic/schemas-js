import { z } from 'zod';
export declare const Security_Endpoint_Management_API_ApiSortField: z.ZodEnum<{
    name: "name";
    createdBy: "createdBy";
    updatedBy: "updatedBy";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    fileSize: "fileSize";
}>;
export type Security_Endpoint_Management_API_ApiSortField = z.infer<typeof Security_Endpoint_Management_API_ApiSortField>;
export declare const Security_Endpoint_Management_API_SortDirection: z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>;
export type Security_Endpoint_Management_API_SortDirection = z.infer<typeof Security_Endpoint_Management_API_SortDirection>;
export declare const Security_Endpoint_Management_API_ApiPageSize: z.ZodNumber;
export type Security_Endpoint_Management_API_ApiPageSize = z.infer<typeof Security_Endpoint_Management_API_ApiPageSize>;
export declare const Security_Endpoint_Management_API_Page: z.ZodNumber;
export type Security_Endpoint_Management_API_Page = z.infer<typeof Security_Endpoint_Management_API_Page>;
export declare const Security_Endpoint_Management_API_EndpointScriptTags: z.ZodEnum<{
    discovery: "discovery";
    remediationAction: "remediationAction";
    dataCollection: "dataCollection";
    networkDiagnostics: "networkDiagnostics";
    networkAction: "networkAction";
    systemInventory: "systemInventory";
    forensicCollection: "forensicCollection";
    threatHunting: "threatHunting";
    systemManagement: "systemManagement";
    userManagement: "userManagement";
    troubleshooting: "troubleshooting";
}>;
export type Security_Endpoint_Management_API_EndpointScriptTags = z.infer<typeof Security_Endpoint_Management_API_EndpointScriptTags>;
export declare const Security_Endpoint_Management_API_EndpointScriptPlatform: z.ZodEnum<{
    linux: "linux";
    macos: "macos";
    windows: "windows";
}>;
export type Security_Endpoint_Management_API_EndpointScriptPlatform = z.infer<typeof Security_Endpoint_Management_API_EndpointScriptPlatform>;
export declare const Security_Endpoint_Management_API_EndpointScript: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    downloadUri: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    fileHash: z.ZodOptional<z.ZodString>;
    fileName: z.ZodOptional<z.ZodString>;
    fileSize: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    pathToExecutable: z.ZodOptional<z.ZodString>;
    platform: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        linux: "linux";
        macos: "macos";
        windows: "windows";
    }>>>;
    requiresInput: z.ZodOptional<z.ZodBoolean>;
    tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        discovery: "discovery";
        remediationAction: "remediationAction";
        dataCollection: "dataCollection";
        networkDiagnostics: "networkDiagnostics";
        networkAction: "networkAction";
        systemInventory: "systemInventory";
        forensicCollection: "forensicCollection";
        threatHunting: "threatHunting";
        systemManagement: "systemManagement";
        userManagement: "userManagement";
        troubleshooting: "troubleshooting";
    }>>>;
    updatedAt: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Endpoint_Management_API_EndpointScript = z.infer<typeof Security_Endpoint_Management_API_EndpointScript>;
export declare const EndpointScriptLibraryListScriptsResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        downloadUri: z.ZodOptional<z.ZodString>;
        example: z.ZodOptional<z.ZodString>;
        fileHash: z.ZodOptional<z.ZodString>;
        fileName: z.ZodOptional<z.ZodString>;
        fileSize: z.ZodOptional<z.ZodNumber>;
        id: z.ZodOptional<z.ZodString>;
        instructions: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        pathToExecutable: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            linux: "linux";
            macos: "macos";
            windows: "windows";
        }>>>;
        requiresInput: z.ZodOptional<z.ZodBoolean>;
        tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            discovery: "discovery";
            remediationAction: "remediationAction";
            dataCollection: "dataCollection";
            networkDiagnostics: "networkDiagnostics";
            networkAction: "networkAction";
            systemInventory: "systemInventory";
            forensicCollection: "forensicCollection";
            threatHunting: "threatHunting";
            systemManagement: "systemManagement";
            userManagement: "userManagement";
            troubleshooting: "troubleshooting";
        }>>>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    page: z.ZodOptional<z.ZodNumber>;
    pageSize: z.ZodOptional<z.ZodNumber>;
    sortDirection: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    sortField: z.ZodOptional<z.ZodEnum<{
        name: "name";
        createdBy: "createdBy";
        updatedBy: "updatedBy";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        fileSize: "fileSize";
    }>>;
    total: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type EndpointScriptLibraryListScriptsResponse = z.infer<typeof EndpointScriptLibraryListScriptsResponse>;
//# sourceMappingURL=endpoint_script_library_list_scripts.d.ts.map