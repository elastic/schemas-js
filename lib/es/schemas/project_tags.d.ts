import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const ProjectTagsTags: z.ZodObject<{
    _id: z.ZodString;
    _alias: z.ZodString;
    _type: z.ZodString;
    _organisation: z.ZodString;
}, z.core.$catchall<z.ZodAny>>;
export type ProjectTagsTags = z.infer<typeof ProjectTagsTags>;
export declare const ProjectTagsProjectTags: z.ZodObject<{
    origin: z.ZodRecord<z.ZodString, z.ZodObject<{
        _id: z.ZodString;
        _alias: z.ZodString;
        _type: z.ZodString;
        _organisation: z.ZodString;
    }, z.core.$catchall<z.ZodAny>>>;
    linked_projects: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        _id: z.ZodString;
        _alias: z.ZodString;
        _type: z.ZodString;
        _organisation: z.ZodString;
    }, z.core.$catchall<z.ZodAny>>>>;
}, z.core.$strip>;
export type ProjectTagsProjectTags = z.infer<typeof ProjectTagsProjectTags>;
/**
 * Get tags.
 *
 * Get the tags that are defined for the project.
 */
export declare const ProjectTagsRequest: z.ZodObject<{}, z.core.$strip>;
export type ProjectTagsRequest = z.infer<typeof ProjectTagsRequest>;
export declare const ProjectTagsResponse: z.ZodObject<{
    origin: z.ZodRecord<z.ZodString, z.ZodObject<{
        _id: z.ZodString;
        _alias: z.ZodString;
        _type: z.ZodString;
        _organisation: z.ZodString;
    }, z.core.$catchall<z.ZodAny>>>;
    linked_projects: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        _id: z.ZodString;
        _alias: z.ZodString;
        _type: z.ZodString;
        _organisation: z.ZodString;
    }, z.core.$catchall<z.ZodAny>>>>;
}, z.core.$strip>;
export type ProjectTagsResponse = z.infer<typeof ProjectTagsResponse>;
//# sourceMappingURL=project_tags.d.ts.map