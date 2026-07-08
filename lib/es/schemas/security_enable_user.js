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
 * Enable users.
 *
 * Enable users in the native realm.
 * By default, when you create users, they are enabled.
 */
export const SecurityEnableUserRequest = z.object({
    ...RequestBase.shape,
    username: Username.describe('An identifier for the user.').meta({ found_in: 'path' }),
    refresh: Refresh.describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityEnableUserRequest' });
export const SecurityEnableUserResponse = z.object({}).meta({ id: 'SecurityEnableUserResponse' });
//# sourceMappingURL=security_enable_user.js.map