/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * Logout of OpenID Connect.
 *
 * Invalidate an access token and a refresh token that were generated as a response to the `/_security/oidc/authenticate` API.
 *
 * If the OpenID Connect authentication realm in Elasticsearch is accordingly configured, the response to this call will contain a URI pointing to the end session endpoint of the OpenID Connect Provider in order to perform single logout.
 *
 * Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs.
 * These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
 */
export const SecurityOidcLogoutRequest = z.object({
  token: z.string().describe('The access token to be invalidated.').meta({ found_in: 'body' }),
  refresh_token: z.string().describe('The refresh token to be invalidated.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityOidcLogoutRequest' })
export type SecurityOidcLogoutRequest = z.infer<typeof SecurityOidcLogoutRequest>

export const SecurityOidcLogoutResponse = z.object({
  redirect: z.string().describe('A URI that points to the end session endpoint of the OpenID Connect Provider with all the parameters of the logout request as HTTP GET parameters.')
}).meta({ id: 'SecurityOidcLogoutResponse' })
export type SecurityOidcLogoutResponse = z.infer<typeof SecurityOidcLogoutResponse>
