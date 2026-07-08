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
/** Get the trial status. */
export const LicenseGetTrialStatusRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'LicenseGetTrialStatusRequest' });
export const LicenseGetTrialStatusResponse = z.object({
    eligible_to_start_trial: z.boolean()
}).meta({ id: 'LicenseGetTrialStatusResponse' });
//# sourceMappingURL=license_get_trial_status.js.map