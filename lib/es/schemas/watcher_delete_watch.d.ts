import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
/**
 * Delete a watch.
 *
 * When the watch is removed, the document representing the watch in the `.watches` index is gone and it will never be run again.
 *
 * Deleting a watch does not delete any watch execution records related to this watch from the watch history.
 *
 * IMPORTANT: Deleting a watch must be done by using only this API.
 * Do not delete the watch directly from the `.watches` index using the Elasticsearch delete document API
 * When Elasticsearch security features are enabled, make sure no write privileges are granted to anyone for the `.watches` index.
 */
export declare const WatcherDeleteWatchRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type WatcherDeleteWatchRequest = z.infer<typeof WatcherDeleteWatchRequest>;
export declare const WatcherDeleteWatchResponse: z.ZodObject<{
    found: z.ZodBoolean;
    _id: z.ZodString;
    _version: z.ZodNumber;
}, z.core.$strip>;
export type WatcherDeleteWatchResponse = z.infer<typeof WatcherDeleteWatchResponse>;
//# sourceMappingURL=watcher_delete_watch.d.ts.map