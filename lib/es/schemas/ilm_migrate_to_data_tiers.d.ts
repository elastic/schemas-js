import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Migrate to data tiers routing.
 *
 * Switch the indices, ILM policies, and legacy, composable, and component templates from using custom node attributes and attribute-based allocation filters to using data tiers.
 * Optionally, delete one legacy index template.
 * Using node roles enables ILM to automatically move the indices between data tiers.
 *
 * Migrating away from custom node attributes routing can be manually performed.
 * This API provides an automated way of performing three out of the four manual steps listed in the migration guide:
 *
 * 1. Stop setting the custom hot attribute on new indices.
 * 1. Remove custom allocation settings from existing ILM policies.
 * 1. Replace custom allocation settings from existing indices with the corresponding tier preference.
 *
 * ILM must be stopped before performing the migration.
 * Use the stop ILM and get ILM status APIs to wait until the reported operation mode is `STOPPED`.
 */
export declare const IlmMigrateToDataTiersRequest: z.ZodObject<{
    dry_run: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    legacy_template_to_delete: z.ZodOptional<z.ZodString>;
    node_attribute: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IlmMigrateToDataTiersRequest = z.infer<typeof IlmMigrateToDataTiersRequest>;
export declare const IlmMigrateToDataTiersResponse: z.ZodObject<{
    dry_run: z.ZodBoolean;
    removed_legacy_template: z.ZodString;
    migrated_ilm_policies: z.ZodArray<z.ZodString>;
    migrated_indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    migrated_legacy_templates: z.ZodArray<z.ZodString>;
    migrated_composable_templates: z.ZodArray<z.ZodString>;
    migrated_component_templates: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type IlmMigrateToDataTiersResponse = z.infer<typeof IlmMigrateToDataTiersResponse>;
//# sourceMappingURL=ilm_migrate_to_data_tiers.d.ts.map