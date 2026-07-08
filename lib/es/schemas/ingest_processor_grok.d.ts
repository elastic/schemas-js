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
/**
 * Run a grok processor.
 *
 * Extract structured fields out of a single text field within a document.
 * You must choose which field to extract matched fields from, as well as the grok pattern you expect will match.
 * A grok pattern is like a regular expression that supports aliased expressions that can be reused.
 */
export declare const IngestProcessorGrokRequest: z.ZodObject<{}, z.core.$strip>;
export type IngestProcessorGrokRequest = z.infer<typeof IngestProcessorGrokRequest>;
export declare const IngestProcessorGrokResponse: z.ZodObject<{
    patterns: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type IngestProcessorGrokResponse = z.infer<typeof IngestProcessorGrokResponse>;
//# sourceMappingURL=ingest_processor_grok.d.ts.map