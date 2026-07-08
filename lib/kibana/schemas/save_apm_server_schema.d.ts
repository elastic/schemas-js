import { z } from 'zod';
export declare const SaveApmServerSchemaRequest: z.ZodObject<{
    schema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type SaveApmServerSchemaRequest = z.infer<typeof SaveApmServerSchemaRequest>;
export declare const SaveApmServerSchemaResponse: z.ZodObject<{}, z.core.$strip>;
export type SaveApmServerSchemaResponse = z.infer<typeof SaveApmServerSchemaResponse>;
//# sourceMappingURL=save_apm_server_schema.d.ts.map