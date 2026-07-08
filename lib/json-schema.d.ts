/**
 * A plain JSON Schema object (draft-07 compatible subset).
 *
 * Used as the type for the `input` field of EsApiDefinition and
 * ApiRegistryDefinition. The schema carries per-property `x-found-in`
 * routing metadata (`"path"`, `"query"`, or `"body"`) used to route each
 * parameter to the correct part of the HTTP request.
 */
export type JsonSchemaObject = Record<string, unknown>;
//# sourceMappingURL=json-schema.d.ts.map