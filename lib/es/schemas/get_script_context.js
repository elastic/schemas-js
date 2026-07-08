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
export const GetScriptContextContextMethodParam = z.object({
    name: Name,
    type: z.string()
}).meta({ id: 'GetScriptContextContextMethodParam' });
export const GetScriptContextContextMethod = z.object({
    name: Name,
    return_type: z.string(),
    params: z.array(GetScriptContextContextMethodParam)
}).meta({ id: 'GetScriptContextContextMethod' });
export const GetScriptContextContext = z.object({
    methods: z.array(GetScriptContextContextMethod),
    name: Name
}).meta({ id: 'GetScriptContextContext' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Get script contexts.
 *
 * Get a list of supported script contexts and their methods.
 */
export const GetScriptContextRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'GetScriptContextRequest' });
export const GetScriptContextResponse = z.object({
    contexts: z.array(GetScriptContextContext)
}).meta({ id: 'GetScriptContextResponse' });
//# sourceMappingURL=get_script_context.js.map