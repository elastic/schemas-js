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
export const Password = z.string().meta({ id: 'Password' });
export const Refresh = z.union([z.boolean(), z.enum(['true', 'false', 'wait_for'])]).meta({ id: 'Refresh' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Username = z.string().meta({ id: 'Username' });
/**
 * Change passwords.
 *
 * Change the passwords of users in the native realm and built-in users.
 */
export const SecurityChangePasswordRequest = z.object({
    ...RequestBase.shape,
    username: Username.describe('The user whose password you want to change. If you do not specify this parameter, the password is changed for the current user.').optional().meta({ found_in: 'path' }),
    refresh: Refresh.describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
    password: Password.describe('The new password value. Passwords must be at least 6 characters long.').optional().meta({ found_in: 'body' }),
    password_hash: z.string().describe('A hash of the new password value. This must be produced using the same hashing algorithm as has been configured for password storage. For more details, see the explanation of the `xpack.security.authc.password_hashing.algorithm` setting.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityChangePasswordRequest' });
export const SecurityChangePasswordResponse = z.object({}).meta({ id: 'SecurityChangePasswordResponse' });
//# sourceMappingURL=security_change_password.js.map