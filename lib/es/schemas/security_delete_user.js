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
export const Refresh = z.union([z.boolean(), z.enum(['true', 'false', 'wait_for'])]).meta({ id: 'Refresh' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Username = z.string().meta({ id: 'Username' });
/**
 * Delete users.
 *
 * Delete users from the native realm.
 */
export const SecurityDeleteUserRequest = z.object({
    ...RequestBase.shape,
    username: Username.describe('An identifier for the user.').meta({ found_in: 'path' }),
    refresh: Refresh.describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteUserRequest' });
export const SecurityDeleteUserResponse = z.object({
    found: z.boolean().describe('If the user is successfully deleted, the request returns `{"found": true}`. Otherwise, `found` is set to `false`.')
}).meta({ id: 'SecurityDeleteUserResponse' });
//# sourceMappingURL=security_delete_user.js.map