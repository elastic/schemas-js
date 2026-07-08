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
/**
 * A `null` value that is to be interpreted as an actual value, unless other uses of `null` that are equivalent
 * to a missing value. It is used for exemple in settings, where using the `NullValue` for a setting will reset
 * it to its default value.
 */
export const SpecUtilsNullValue = z.null().meta({ id: 'SpecUtilsNullValue' });
/**
 * `WithNullValue<T>` allows for explicit null assignments in contexts where `null` should be interpreted as an
 * actual value.
 */
export const SpecUtilsWithNullValue = z.union([z.any(), SpecUtilsNullValue]).meta({ id: 'SpecUtilsWithNullValue' });
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Result = z.enum(['created', 'updated', 'deleted', 'not_found', 'noop']).meta({ id: 'Result' });
/**
 * Update the connector index name.
 *
 * Update the `index_name` field of a connector, specifying the index where the data ingested by the connector is stored.
 */
export const ConnectorUpdateIndexNameRequest = z.object({
    ...RequestBase.shape,
    connector_id: Id.describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
    index_name: SpecUtilsWithNullValue.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateIndexNameRequest' });
export const ConnectorUpdateIndexNameResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorUpdateIndexNameResponse' });
//# sourceMappingURL=connector_update_index_name.js.map