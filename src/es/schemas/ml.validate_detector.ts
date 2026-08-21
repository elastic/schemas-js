/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Field, integer } from './_types.js'
import { MlDetectionRule } from './ml.js'

export const MlExcludeFrequent = z.enum(['all', 'none', 'by', 'over']).meta({ id: 'MlExcludeFrequent' })
export type MlExcludeFrequent = z.infer<typeof MlExcludeFrequent>

export const MlDetector = z.object({
  by_field_name: z.lazy(() => Field).describe('The field used to split the data. In particular, this property is used for analyzing the splits with respect to their own history. It is used for finding unusual values in the context of the split.').optional(),
  custom_rules: z.array(z.lazy(() => MlDetectionRule)).describe('Custom rules enable you to customize the way detectors operate. For example, a rule may dictate conditions under which results should be skipped. Kibana refers to custom rules as job rules.').optional(),
  detector_description: z.string().describe('A description of the detector.').optional(),
  detector_index: z.lazy(() => integer).describe('A unique identifier for the detector. This identifier is based on the order of the detectors in the `analysis_config`, starting at zero. If you specify a value for this property, it is ignored.').optional(),
  exclude_frequent: z.lazy(() => MlExcludeFrequent).describe('If set, frequent entities are excluded from influencing the anomaly results. Entities can be considered frequent over time or frequent in a population. If you are working with both over and by fields, you can set `exclude_frequent` to `all` for both fields, or to `by` or `over` for those specific fields.').optional(),
  field_name: z.lazy(() => Field).describe('The field that the detector uses in the function. If you use an event rate function such as count or rare, do not specify this field. The `field_name` cannot contain double quotes or backslashes.').optional(),
  function: z.string().describe('The analysis function that is used. For example, `count`, `rare`, `mean`, `min`, `max`, or `sum`.').optional(),
  over_field_name: z.lazy(() => Field).describe('The field used to split the data. In particular, this property is used for analyzing the splits with respect to the history of all splits. It is used for finding unusual values in the population of all splits.').optional(),
  partition_field_name: z.lazy(() => Field).describe('The field used to segment the analysis. When you use this property, you have completely independent baselines for each value of this field.').optional(),
  use_null: z.boolean().describe('Defines whether a new series is used as the null series when there is no value for the by or partition fields.').optional()
}).meta({ id: 'MlDetector' })
export type MlDetector = z.infer<typeof MlDetector>

/** Validate an anomaly detection job. */
export const MlValidateDetectorRequest = z.object({
  detector: z.lazy(() => MlDetector).optional().meta({ found_in: 'body' })
}).meta({ id: 'MlValidateDetectorRequest' })
export type MlValidateDetectorRequest = z.infer<typeof MlValidateDetectorRequest>

export const MlValidateDetectorResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlValidateDetectorResponse' })
export type MlValidateDetectorResponse = z.infer<typeof MlValidateDetectorResponse>
