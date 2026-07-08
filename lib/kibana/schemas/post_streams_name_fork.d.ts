import { z } from 'zod';
export declare const Kibana_HTTP_APIs_FilterCondition: z.ZodUnion<readonly [z.ZodObject<{
    contains: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    endsWith: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    eq: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    field: z.ZodString;
    gt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    gte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    lt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    lte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    neq: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    range: z.ZodOptional<z.ZodObject<{
        gt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        gte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        lt: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        lte: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    }, z.core.$strip>>;
    startsWith: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
}, z.core.$strip>, z.ZodObject<{
    exists: z.ZodOptional<z.ZodBoolean>;
    field: z.ZodString;
}, z.core.$strip>]>;
export type Kibana_HTTP_APIs_FilterCondition = z.infer<typeof Kibana_HTTP_APIs_FilterCondition>;
export declare const Kibana_HTTP_APIs_Condition: z.ZodTypeAny;
export type Kibana_HTTP_APIs_Condition = z.infer<typeof Kibana_HTTP_APIs_Condition>;
export declare const PostStreamsNameForkRequest: z.ZodObject<{
    draft: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodEnum<{
        enabled: "enabled";
        disabled: "disabled";
    }>>;
    stream: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
    where: z.ZodLazy<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
}, z.core.$strip>;
export type PostStreamsNameForkRequest = z.infer<typeof PostStreamsNameForkRequest>;
//# sourceMappingURL=post_streams_name_fork.d.ts.map