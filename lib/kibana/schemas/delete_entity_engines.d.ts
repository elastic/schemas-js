import { z } from 'zod';
export declare const Security_Entity_Analytics_API_EntityType: z.ZodEnum<{
    host: "host";
    generic: "generic";
    service: "service";
    user: "user";
}>;
export type Security_Entity_Analytics_API_EntityType = z.infer<typeof Security_Entity_Analytics_API_EntityType>;
export declare const DeleteEntityEnginesResponse: z.ZodObject<{
    deleted: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>>>;
    still_running: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>>>;
}, z.core.$strip>;
export type DeleteEntityEnginesResponse = z.infer<typeof DeleteEntityEnginesResponse>;
//# sourceMappingURL=delete_entity_engines.d.ts.map