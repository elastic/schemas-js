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
export const Names = z.union([Name, z.array(Name)]).meta({ id: 'Names' });
export const Refresh = z.union([z.boolean(), z.enum(['true', 'false', 'wait_for'])]).meta({ id: 'Refresh' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const SecurityDeletePrivilegesFoundStatus = z.object({
    found: z.boolean()
}).meta({ id: 'SecurityDeletePrivilegesFoundStatus' });
/**
 * Delete application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_security` cluster privilege (or a greater privilege such as `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 */
export const SecurityDeletePrivilegesRequest = z.object({
    ...RequestBase.shape,
    application: Name.describe('The name of the application. Application privileges are always associated with exactly one application.').meta({ found_in: 'path' }),
    name: Names.describe('The name of the privilege.').meta({ found_in: 'path' }),
    refresh: Refresh.describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeletePrivilegesRequest' });
export const SecurityDeletePrivilegesResponse = z.record(z.string(), z.record(z.string(), SecurityDeletePrivilegesFoundStatus)).meta({ id: 'SecurityDeletePrivilegesResponse' });
//# sourceMappingURL=security_delete_privileges.js.map