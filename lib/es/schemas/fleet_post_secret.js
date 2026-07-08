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
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/** Creates a secret stored by Fleet. */
export const FleetPostSecretRequest = z.object({
    ...RequestBase.shape,
    value: z.string().meta({ found_in: 'body' })
}).meta({ id: 'FleetPostSecretRequest' });
export const FleetPostSecretResponse = z.object({
    id: z.string()
}).meta({ id: 'FleetPostSecretResponse' });
//# sourceMappingURL=fleet_post_secret.js.map