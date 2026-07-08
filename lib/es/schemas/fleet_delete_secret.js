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
/** Deletes a secret stored by Fleet. */
export const FleetDeleteSecretRequest = z.object({
    ...RequestBase.shape,
    id: z.string().describe('The ID of the secret').meta({ found_in: 'path' })
}).meta({ id: 'FleetDeleteSecretRequest' });
export const FleetDeleteSecretResponse = z.object({
    deleted: z.boolean()
}).meta({ id: 'FleetDeleteSecretResponse' });
//# sourceMappingURL=fleet_delete_secret.js.map