/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ErrorCause, Name, Username, long } from './_types.js'

/**
 * Invalidate a token.
 *
 * The access tokens returned by the get token API have a finite period of time for which they are valid.
 * After that time period, they can no longer be used.
 * The time period is defined by the `xpack.security.authc.token.timeout` setting.
 *
 * The refresh tokens returned by the get token API are only valid for 24 hours.
 * They can also be used exactly once.
 * If you want to invalidate one or more access or refresh tokens immediately, use this invalidate token API.
 *
 * NOTE: While all parameters are optional, at least one of them is required.
 * More specifically, either one of `token` or `refresh_token` parameters is required.
 * If none of these two are specified, then `realm_name` and/or `username` need to be specified.
 */
export const SecurityInvalidateTokenRequest = z.object({
  token: z.string().describe('An access token. This parameter cannot be used if any of `refresh_token`, `realm_name`, or `username` are used.').optional().meta({ found_in: 'body' }),
  refresh_token: z.string().describe('A refresh token. This parameter cannot be used if any of `refresh_token`, `realm_name`, or `username` are used.').optional().meta({ found_in: 'body' }),
  realm_name: z.lazy(() => Name).describe('The name of an authentication realm. This parameter cannot be used with either `refresh_token` or `token`.').optional().meta({ found_in: 'body' }),
  username: z.lazy(() => Username).describe('The username of a user. This parameter cannot be used with either `refresh_token` or `token`.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityInvalidateTokenRequest' })
export type SecurityInvalidateTokenRequest = z.infer<typeof SecurityInvalidateTokenRequest>

export const SecurityInvalidateTokenResponse = z.object({
  error_count: z.lazy(() => long).describe('The number of errors that were encountered when invalidating the tokens.'),
  error_details: z.array(z.lazy(() => ErrorCause)).describe('Details about the errors. This field is not present in the response when `error_count` is `0`.').optional(),
  invalidated_tokens: z.lazy(() => long).describe('The number of the tokens that were invalidated as part of this request.'),
  previously_invalidated_tokens: z.lazy(() => long).describe('The number of tokens that were already invalidated.')
}).meta({ id: 'SecurityInvalidateTokenResponse' })
export type SecurityInvalidateTokenResponse = z.infer<typeof SecurityInvalidateTokenResponse>
