import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_data_streams_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_data_streams_response = z.infer<typeof Kibana_HTTP_APIs_get_data_streams_response>;
//# sourceMappingURL=get_fleet_epm_data_streams.d.ts.map