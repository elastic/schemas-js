import { z } from 'zod';
export declare const PostSpacesSpaceRequest: z.ZodObject<{
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
export type PostSpacesSpaceRequest = z.infer<typeof PostSpacesSpaceRequest>;
export declare const PostSpacesSpaceResponse: z.ZodObject<{
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
export type PostSpacesSpaceResponse = z.infer<typeof PostSpacesSpaceResponse>;
//# sourceMappingURL=post_spaces_space.d.ts.map