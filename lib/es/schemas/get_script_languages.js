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
export const ScriptLanguage = z.union([z.enum(['painless', 'expression', 'mustache', 'java']), z.string()]).meta({ id: 'ScriptLanguage' });
export const GetScriptLanguagesLanguageContext = z.object({
    contexts: z.array(z.string()),
    language: ScriptLanguage
}).meta({ id: 'GetScriptLanguagesLanguageContext' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Get script languages.
 *
 * Get a list of available script types, languages, and contexts.
 */
export const GetScriptLanguagesRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'GetScriptLanguagesRequest' });
export const GetScriptLanguagesResponse = z.object({
    language_contexts: z.array(GetScriptLanguagesLanguageContext),
    types_allowed: z.array(z.string())
}).meta({ id: 'GetScriptLanguagesResponse' });
//# sourceMappingURL=get_script_languages.js.map