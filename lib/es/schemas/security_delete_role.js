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
export const Name = z.string().meta({ id: 'Name' });
export const Refresh = z.union([z.boolean(), z.enum(['true', 'false', 'wait_for'])]).meta({ id: 'Refresh' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Delete roles.
 *
 * Delete roles in the native realm.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The delete roles API cannot remove roles that are defined in roles files.
 */
export const SecurityDeleteRoleRequest = z.object({
    ...RequestBase.shape,
    name: Name.describe('The name of the role.').meta({ found_in: 'path' }),
    refresh: Refresh.describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteRoleRequest' });
export const SecurityDeleteRoleResponse = z.object({
    found: z.boolean().describe('If the role is successfully deleted, `found` is `true`. Otherwise, `found` is `false`.')
}).meta({ id: 'SecurityDeleteRoleResponse' });
//# sourceMappingURL=security_delete_role.js.map