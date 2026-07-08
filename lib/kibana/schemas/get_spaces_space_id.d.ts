import { z } from 'zod';
export declare const GetSpacesSpaceIdResponse: z.ZodObject<{
    _reserved: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    disabledFeatures: z.ZodOptional<z.ZodArray<z.ZodString>>;
    id: z.ZodString;
    imageUrl: z.ZodOptional<z.ZodString>;
    initials: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    projectRouting: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetSpacesSpaceIdResponse = z.infer<typeof GetSpacesSpaceIdResponse>;
//# sourceMappingURL=get_spaces_space_id.d.ts.map