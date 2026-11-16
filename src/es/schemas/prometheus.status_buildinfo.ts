/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, IndexName, VersionString } from './_types.js'

export const PrometheusStatusBuildinfoBuildInfo = z.object({
  application: z.string().describe('The name of the application. It is always `Elasticsearch`.'),
  version: z.lazy(() => VersionString).describe('The Elasticsearch version.'),
  revision: z.string().describe('The commit hash of the Elasticsearch build.'),
  buildDate: z.lazy(() => DateTime).describe('The date of the Elasticsearch build.')
}).meta({ id: 'PrometheusStatusBuildinfoBuildInfo' })
export type PrometheusStatusBuildinfoBuildInfo = z.infer<typeof PrometheusStatusBuildinfoBuildInfo>

/**
 * Get Prometheus build information.
 *
 * Get Elasticsearch build information in the format of the Prometheus `/api/v1/status/buildinfo` endpoint.
 * Prometheus-compatible clients, such as Grafana, call this endpoint to identify the backend and the features it supports.
 */
export const PrometheusStatusBuildinfoRequest = z.object({
  index: z.lazy(() => IndexName).describe('An index pattern, accepted for consistency with the other Prometheus endpoints. The response doesn\'t depend on it.').optional().meta({ found_in: 'path' })
}).meta({ id: 'PrometheusStatusBuildinfoRequest' })
export type PrometheusStatusBuildinfoRequest = z.infer<typeof PrometheusStatusBuildinfoRequest>

export const PrometheusStatusBuildinfoResponse = z.object({
  status: z.string().describe('The status of the request. It is always `success`.'),
  data: PrometheusStatusBuildinfoBuildInfo.describe('The Elasticsearch build information.')
}).meta({ id: 'PrometheusStatusBuildinfoResponse' })
export type PrometheusStatusBuildinfoResponse = z.infer<typeof PrometheusStatusBuildinfoResponse>
