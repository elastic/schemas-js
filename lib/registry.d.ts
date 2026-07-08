export interface ApiRegistryMeta {
    readonly id: string;
    readonly name: string;
    readonly namespace: string | null;
    readonly description: string;
    readonly namespaceFile: string;
}
export interface ApiRequest {
    readonly method: string;
    readonly path: string;
    readonly querystring?: Record<string, unknown>;
    readonly body?: unknown;
    readonly bulkBody?: unknown;
    readonly multipartFields?: Record<string, string>;
}
export interface ApiRegistryDefinition {
    readonly name: string;
    readonly namespace?: string | null;
    readonly description: string;
    readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
    readonly path: string;
    readonly input?: Record<string, unknown>;
    readonly bodyFormat?: 'json' | 'ndjson';
    readonly responseType?: 'json' | 'text' | 'ndjson';
}
export interface LoadedApi {
    readonly definition: ApiRegistryDefinition;
    buildRequest: (input: Record<string, unknown>) => ApiRequest;
}
export interface ApiRegistry {
    readonly manifest: readonly ApiRegistryMeta[];
    loadApi(id: string): Promise<LoadedApi>;
}
export declare class UnknownApiError extends Error {
    readonly id: string;
    constructor(id: string);
}
export declare function buildRequest(definition: ApiRegistryDefinition, input: Record<string, unknown>): ApiRequest;
export declare function createRegistry(manifest: readonly ApiRegistryMeta[], loader: (namespaceFile: string) => Promise<ApiRegistryDefinition[]>): ApiRegistry;
//# sourceMappingURL=registry.d.ts.map