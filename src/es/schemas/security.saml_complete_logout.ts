/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Ids } from './_types.js'

/**
 * Logout of SAML completely.
 *
 * Verifies the logout response sent from the SAML IdP.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The SAML IdP may send a logout response back to the SP after handling the SP-initiated SAML Single Logout.
 * This API verifies the response by ensuring the content is relevant and validating its signature.
 * An empty response is returned if the verification process is successful.
 * The response can be sent by the IdP with either the HTTP-Redirect or the HTTP-Post binding.
 * The caller of this API must prepare the request accordingly so that this API can handle either of them.
 */
export const SecuritySamlCompleteLogoutRequest = z.object({
  realm: z.string().describe('The name of the SAML realm in Elasticsearch for which the configuration is used to verify the logout response.').meta({ found_in: 'body' }),
  ids: z.lazy(() => Ids).describe('A JSON array with all the valid SAML Request Ids that the caller of the API has for the current user.').meta({ found_in: 'body' }),
  query_string: z.string().describe('If the SAML IdP sends the logout response with the HTTP-Redirect binding, this field must be set to the query string of the redirect URI.').optional().meta({ found_in: 'body' }),
  content: z.string().describe('If the SAML IdP sends the logout response with the HTTP-Post binding, this field must be set to the value of the SAMLResponse form parameter from the logout response.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecuritySamlCompleteLogoutRequest' })
export type SecuritySamlCompleteLogoutRequest = z.infer<typeof SecuritySamlCompleteLogoutRequest>

export const SecuritySamlCompleteLogoutResponse = z.boolean().meta({ id: 'SecuritySamlCompleteLogoutResponse' })
export type SecuritySamlCompleteLogoutResponse = z.infer<typeof SecuritySamlCompleteLogoutResponse>
