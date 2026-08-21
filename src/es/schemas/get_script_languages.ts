/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ScriptLanguage } from './_types.js'

export const GetScriptLanguagesLanguageContext = z.object({
  contexts: z.array(z.string()),
  language: z.lazy(() => ScriptLanguage)
}).meta({ id: 'GetScriptLanguagesLanguageContext' })
export type GetScriptLanguagesLanguageContext = z.infer<typeof GetScriptLanguagesLanguageContext>

/**
 * Get script languages.
 *
 * Get a list of available script types, languages, and contexts.
 */
export const GetScriptLanguagesRequest = z.object({
}).meta({ id: 'GetScriptLanguagesRequest' })
export type GetScriptLanguagesRequest = z.infer<typeof GetScriptLanguagesRequest>

export const GetScriptLanguagesResponse = z.object({
  language_contexts: z.array(GetScriptLanguagesLanguageContext),
  types_allowed: z.array(z.string())
}).meta({ id: 'GetScriptLanguagesResponse' })
export type GetScriptLanguagesResponse = z.infer<typeof GetScriptLanguagesResponse>
