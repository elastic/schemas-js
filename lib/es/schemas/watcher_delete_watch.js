/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const Id = z.string().meta({ id: 'Id' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const long = z.number().meta({ id: 'long' });
export const VersionNumber = long.meta({ id: 'VersionNumber' });
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
export const WatcherDeleteWatchRequest = z.object({
    ...RequestBase.shape,
    id: Name.describe('The watch identifier.').meta({ found_in: 'path' })
}).meta({ id: 'WatcherDeleteWatchRequest' });
export const WatcherDeleteWatchResponse = z.object({
    found: z.boolean(),
    _id: Id,
    _version: VersionNumber
}).meta({ id: 'WatcherDeleteWatchResponse' });
//# sourceMappingURL=watcher_delete_watch.js.map