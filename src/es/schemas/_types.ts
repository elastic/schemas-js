/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AggregationsMissing } from './_types.aggregations.js'
import { MappingFieldType } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import type { QueryDslQueryContainerShape } from './_types.query_dsl.js'
import { BulkFailureStoreStatus } from './bulk.js'
import { UnitMillis } from './cluster.stats.js'
import { ClusterAlias } from './indices.resolve_cluster.js'
import { IndicesStatsShardFileSizeInfo } from './indices.stats.js'
import { QueryVector } from './knn_search.js'
import { QueryVectorBuilder, RescoreVector, SearchInnerHits, SearchSearchRequestBody } from './search.js'
import type { SearchInnerHitsShape, SearchSearchRequestBodyShape } from './search.js'
import { WatcherSearchInputRequestDefinition } from './watcher.js'

export const Id = z.string().meta({ id: 'Id' })
export type Id = z.infer<typeof Id>

export const IndexName = z.string().meta({ id: 'IndexName' })
export type IndexName = z.infer<typeof IndexName>

export const long = z.number().meta({ id: 'long' })
export type long = z.infer<typeof long>

export const SequenceNumber = z.lazy(() => long).meta({ id: 'SequenceNumber' })
export type SequenceNumber = z.infer<typeof SequenceNumber>

export const VersionNumber = z.lazy(() => long).meta({ id: 'VersionNumber' })
export type VersionNumber = z.infer<typeof VersionNumber>

export const VersionType = z.enum(['internal', 'external', 'external_gte']).meta({ id: 'VersionType' })
export type VersionType = z.infer<typeof VersionType>

export const integer = z.number().meta({ id: 'integer' })
export type integer = z.infer<typeof integer>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

export const Refresh = z.union([z.boolean(), z.enum(['true', 'false', 'wait_for'])]).meta({ id: 'Refresh' })
export type Refresh = z.infer<typeof Refresh>

/** Only to be used in query and path parameters, as the array form is actually a csv */
export const Routing = z.union([z.string(), z.array(z.string())]).meta({ id: 'Routing' })
export type Routing = z.infer<typeof Routing>

/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export const Field = z.string().meta({ id: 'Field' })
export type Field = z.infer<typeof Field>

export const Fields = z.union([z.lazy(() => Field), z.array(z.lazy(() => Field))]).meta({ id: 'Fields' })
export type Fields = z.infer<typeof Fields>

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const WaitForActiveShardOptions = z.enum(['all', 'index-setting']).meta({ id: 'WaitForActiveShardOptions' })
export type WaitForActiveShardOptions = z.infer<typeof WaitForActiveShardOptions>

export const WaitForActiveShards = z.union([z.lazy(() => integer), WaitForActiveShardOptions]).meta({ id: 'WaitForActiveShards' })
export type WaitForActiveShards = z.infer<typeof WaitForActiveShards>

export const Metadata = z.record(z.string(), z.any()).meta({ id: 'Metadata' })
export type Metadata = z.infer<typeof Metadata>

export const float = z.number().meta({ id: 'float' })
export type float = z.infer<typeof float>

/** The minimum number of terms that should match as integer, percentage or range */
export const MinimumShouldMatch = z.union([z.lazy(() => integer), z.string()]).meta({ id: 'MinimumShouldMatch' })
export type MinimumShouldMatch = z.infer<typeof MinimumShouldMatch>

export const double = z.number().meta({ id: 'double' })
export type double = z.infer<typeof double>

export const MultiTermQueryRewrite = z.string().meta({ id: 'MultiTermQueryRewrite' })
export type MultiTermQueryRewrite = z.infer<typeof MultiTermQueryRewrite>

export const Fuzziness = z.union([z.string(), z.lazy(() => integer)]).meta({ id: 'Fuzziness' })
export type Fuzziness = z.infer<typeof Fuzziness>

export const Distance = z.string().meta({ id: 'Distance' })
export type Distance = z.infer<typeof Distance>

export const GeoDistanceType = z.enum(['arc', 'plane']).meta({ id: 'GeoDistanceType' })
export type GeoDistanceType = z.infer<typeof GeoDistanceType>

/** A map tile reference, represented as `{zoom}/{x}/{y}` */
export const GeoTile = z.string().meta({ id: 'GeoTile' })
export type GeoTile = z.infer<typeof GeoTile>

export const GeoHash = z.string().meta({ id: 'GeoHash' })
export type GeoHash = z.infer<typeof GeoHash>

/** A map hex cell (H3) reference */
export const GeoHexCell = z.string().meta({ id: 'GeoHexCell' })
export type GeoHexCell = z.infer<typeof GeoHexCell>

export const Name = z.string().meta({ id: 'Name' })
export type Name = z.infer<typeof Name>

export interface ScriptFieldShape {
  script: ScriptShape | ScriptSourceShape
  ignore_failure?: boolean | undefined
}
export const ScriptField = z.object({
  get script () { return z.union([Script, ScriptSource]) },
  ignore_failure: z.boolean().optional()
}).meta({ id: 'ScriptField' })
export type ScriptField = z.infer<typeof ScriptField>

export const SortOrder = z.enum(['asc', 'desc']).meta({ id: 'SortOrder' })
export type SortOrder = z.infer<typeof SortOrder>

export const ScoreSort = z.object({
  order: z.lazy(() => SortOrder).optional()
}).meta({ id: 'ScoreSort' })
export type ScoreSort = z.infer<typeof ScoreSort>

export const SortMode = z.enum(['min', 'max', 'sum', 'avg', 'median']).meta({ id: 'SortMode' })
export type SortMode = z.infer<typeof SortMode>

export const DistanceUnit = z.enum(['in', 'ft', 'yd', 'mi', 'nmi', 'km', 'm', 'cm', 'mm']).meta({ id: 'DistanceUnit' })
export type DistanceUnit = z.infer<typeof DistanceUnit>

export interface NestedSortValueShape {
  filter?: QueryDslQueryContainerShape | undefined
  max_children?: integer | undefined
  nested?: NestedSortValueShape | undefined
  path: Field
}
export const NestedSortValue = z.object({
  get filter () { return QueryDslQueryContainer.optional() },
  max_children: z.lazy(() => integer).optional(),
  get nested () { return NestedSortValue.optional() },
  path: z.lazy(() => Field)
}).meta({ id: 'NestedSortValue' })
export type NestedSortValue = z.infer<typeof NestedSortValue>

export interface GeoDistanceSortShape {
  mode?: SortMode | undefined
  distance_type?: GeoDistanceType | undefined
  ignore_unmapped?: boolean | undefined
  order?: SortOrder | undefined
  unit?: DistanceUnit | undefined
  nested?: NestedSortValueShape | undefined
}
export const GeoDistanceSort = z.looseObject({
  mode: z.lazy(() => SortMode).optional(),
  distance_type: z.lazy(() => GeoDistanceType).optional(),
  ignore_unmapped: z.boolean().optional(),
  order: z.lazy(() => SortOrder).optional(),
  unit: z.lazy(() => DistanceUnit).optional(),
  get nested () { return NestedSortValue.optional() }
}).meta({ id: 'GeoDistanceSort' })
export type GeoDistanceSort = z.infer<typeof GeoDistanceSort>

export const ScriptSortType = z.enum(['string', 'number', 'version']).meta({ id: 'ScriptSortType' })
export type ScriptSortType = z.infer<typeof ScriptSortType>

export interface ScriptSortShape {
  order?: SortOrder | undefined
  script: ScriptShape | ScriptSourceShape
  type?: ScriptSortType | undefined
  mode?: SortMode | undefined
  nested?: NestedSortValueShape | undefined
}
export const ScriptSort = z.object({
  order: z.lazy(() => SortOrder).optional(),
  get script () { return z.union([Script, ScriptSource]) },
  type: ScriptSortType.optional(),
  mode: z.lazy(() => SortMode).optional(),
  get nested () { return NestedSortValue.optional() }
}).meta({ id: 'ScriptSort' })
export type ScriptSort = z.infer<typeof ScriptSort>

export interface SortOptionsShape {
  _score?: ScoreSort | undefined
  _doc?: ScoreSort | undefined
  _geo_distance?: GeoDistanceSortShape | undefined
  _script?: ScriptSortShape | undefined
}
export const SortOptions = z.looseObject({
  _score: ScoreSort.optional(),
  _doc: ScoreSort.optional(),
  get _geo_distance () { return GeoDistanceSort.optional() },
  get _script () { return ScriptSort.optional() }
}).meta({ id: 'SortOptions' })
export type SortOptions = z.infer<typeof SortOptions>

export type SortCombinationsShape = Field | SortOptionsShape
export const SortCombinations: z.ZodType<SortCombinationsShape> = z.union([z.lazy(() => Field), z.lazy(() => SortOptions)]).meta({ id: 'SortCombinations' })
export type SortCombinations = z.infer<typeof SortCombinations>

export type SortShape = SortCombinationsShape | SortCombinationsShape[]
export const Sort: z.ZodType<SortShape> = z.union([z.lazy(() => SortCombinations), z.array(z.lazy(() => SortCombinations))]).meta({ id: 'Sort' })
export type Sort = z.infer<typeof Sort>

export const RelationName = z.string().meta({ id: 'RelationName' })
export type RelationName = z.infer<typeof RelationName>

export const Ids = z.union([z.lazy(() => Id), z.array(z.lazy(() => Id))]).meta({ id: 'Ids' })
export type Ids = z.infer<typeof Ids>

export interface KnnQueryShape {
  boost?: float | undefined
  query_name?: string | undefined
  field: Field
  query_vector?: QueryVector | undefined
  query_vector_builder?: QueryVectorBuilder | undefined
  num_candidates?: integer | undefined
  visit_percentage?: float | undefined
  k?: integer | undefined
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  similarity?: float | undefined
  rescore_vector?: RescoreVector | undefined
}
export const KnnQuery = z.object({
  boost: z.lazy(() => float).describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
  query_name: z.string().optional(),
  field: z.lazy(() => Field).describe('The name of the vector field to search against'),
  query_vector: z.lazy(() => QueryVector).describe('The query vector').optional(),
  query_vector_builder: z.lazy(() => QueryVectorBuilder).describe('The query vector builder. You must provide a query_vector_builder or query_vector, but not both.').optional(),
  num_candidates: z.lazy(() => integer).describe('The number of nearest neighbor candidates to consider per shard').optional(),
  visit_percentage: z.lazy(() => float).describe('The percentage of vectors to explore per shard while doing knn search with bbq_disk').optional(),
  k: z.lazy(() => integer).describe('The final number of nearest neighbors to return as top hits').optional(),
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Filters for the kNN search query').optional() },
  similarity: z.lazy(() => float).describe('The minimum similarity for a vector to be considered a match').optional(),
  rescore_vector: z.lazy(() => RescoreVector).describe('Apply oversampling and rescoring to quantized vectors').optional()
}).meta({ id: 'KnnQuery' })
export type KnnQuery = z.infer<typeof KnnQuery>

export const TimeZone = z.string().meta({ id: 'TimeZone' })
export type TimeZone = z.infer<typeof TimeZone>

export const DateFormat = z.string().meta({ id: 'DateFormat' })
export type DateFormat = z.infer<typeof DateFormat>

/** A field value. */
export const FieldValue = z.union([z.lazy(() => long), z.lazy(() => double), z.string(), z.boolean(), z.null()]).meta({ id: 'FieldValue' })
export type FieldValue = z.infer<typeof FieldValue>

export const TokenPruningConfig = z.object({
  tokens_freq_ratio_threshold: z.lazy(() => integer).describe('Tokens whose frequency is more than this threshold times the average frequency of all tokens in the specified field are considered outliers and pruned.').optional(),
  tokens_weight_threshold: z.lazy(() => float).describe('Tokens whose weight is less than this threshold are considered nonsignificant and pruned.').optional(),
  only_score_pruned_tokens: z.boolean().describe('Whether to only score pruned tokens, vs only scoring kept tokens.').optional()
}).meta({ id: 'TokenPruningConfig' })
export type TokenPruningConfig = z.infer<typeof TokenPruningConfig>

export const EpochTime = z.any().meta({ id: 'EpochTime' })
export type EpochTime = z.infer<typeof EpochTime>

/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export const DateTime = z.union([z.string(), z.lazy(() => EpochTime)]).meta({ id: 'DateTime' })
export type DateTime = z.infer<typeof DateTime>

/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export const DurationLarge = z.string().meta({ id: 'DurationLarge' })
export type DurationLarge = z.infer<typeof DurationLarge>

export const CoordsGeoBounds = z.object({
  top: z.lazy(() => double),
  bottom: z.lazy(() => double),
  left: z.lazy(() => double),
  right: z.lazy(() => double)
}).meta({ id: 'CoordsGeoBounds' })
export type CoordsGeoBounds = z.infer<typeof CoordsGeoBounds>

export const LatLonGeoLocation = z.object({
  lat: z.lazy(() => double).describe('Latitude'),
  lon: z.lazy(() => double).describe('Longitude')
}).meta({ id: 'LatLonGeoLocation' })
export type LatLonGeoLocation = z.infer<typeof LatLonGeoLocation>

export const GeoHashLocation = z.object({
  geohash: z.lazy(() => GeoHash)
}).meta({ id: 'GeoHashLocation' })
export type GeoHashLocation = z.infer<typeof GeoHashLocation>

/**
 * A latitude/longitude as a 2 dimensional point. It can be represented in various ways:
 * - as a `{lat, long}` object
 * - as a geo hash value
 * - as a `[lon, lat]` array
 * - as a string in `"<lat>, <lon>"` or WKT point formats
 */
export const GeoLocation = z.union([LatLonGeoLocation, GeoHashLocation, z.array(z.lazy(() => double)), z.string()]).meta({ id: 'GeoLocation' })
export type GeoLocation = z.infer<typeof GeoLocation>

export const TopLeftBottomRightGeoBounds = z.object({
  top_left: z.lazy(() => GeoLocation),
  bottom_right: z.lazy(() => GeoLocation)
}).meta({ id: 'TopLeftBottomRightGeoBounds' })
export type TopLeftBottomRightGeoBounds = z.infer<typeof TopLeftBottomRightGeoBounds>

export const TopRightBottomLeftGeoBounds = z.object({
  top_right: z.lazy(() => GeoLocation),
  bottom_left: z.lazy(() => GeoLocation)
}).meta({ id: 'TopRightBottomLeftGeoBounds' })
export type TopRightBottomLeftGeoBounds = z.infer<typeof TopRightBottomLeftGeoBounds>

export const WktGeoBounds = z.object({
  wkt: z.string()
}).meta({ id: 'WktGeoBounds' })
export type WktGeoBounds = z.infer<typeof WktGeoBounds>

/**
 * A geo bounding box. It can be represented in various ways:
 * - as 4 top/bottom/left/right coordinates
 * - as 2 top_left / bottom_right points
 * - as 2 top_right / bottom_left points
 * - as a WKT bounding box
 */
export const GeoBounds = z.union([CoordsGeoBounds, z.lazy(() => TopLeftBottomRightGeoBounds), TopRightBottomLeftGeoBounds, WktGeoBounds]).meta({ id: 'GeoBounds' })
export type GeoBounds = z.infer<typeof GeoBounds>

/** A precision that can be expressed as a geohash length between 1 and 12, or a distance measure like "1km", "10m". */
export const GeoHashPrecision = z.union([z.lazy(() => integer), z.string()]).meta({ id: 'GeoHashPrecision' })
export type GeoHashPrecision = z.infer<typeof GeoHashPrecision>

export const GeoTilePrecision = z.lazy(() => integer).meta({ id: 'GeoTilePrecision' })
export type GeoTilePrecision = z.infer<typeof GeoTilePrecision>

/** For empty Class assignments */
export const EmptyObject = z.object({
}).meta({ id: 'EmptyObject' })
export type EmptyObject = z.infer<typeof EmptyObject>

export interface KnnSearchShape {
  field: Field
  query_vector?: QueryVector | undefined
  query_vector_builder?: QueryVectorBuilder | undefined
  k?: integer | undefined
  num_candidates?: integer | undefined
  visit_percentage?: float | undefined
  boost?: float | undefined
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  similarity?: float | undefined
  inner_hits?: SearchInnerHitsShape | undefined
  rescore_vector?: RescoreVector | undefined
  query_name?: string | undefined
}
export const KnnSearch = z.object({
  field: z.lazy(() => Field).describe('The name of the vector field to search against'),
  query_vector: z.lazy(() => QueryVector).describe('The query vector').optional(),
  query_vector_builder: z.lazy(() => QueryVectorBuilder).describe('The query vector builder. You must provide a query_vector_builder or query_vector, but not both.').optional(),
  k: z.lazy(() => integer).describe('The final number of nearest neighbors to return as top hits').optional(),
  num_candidates: z.lazy(() => integer).describe('The number of nearest neighbor candidates to consider per shard').optional(),
  visit_percentage: z.lazy(() => float).describe('The percentage of vectors to explore per shard while doing knn search with bbq_disk').optional(),
  boost: z.lazy(() => float).describe('Boost value to apply to kNN scores').optional(),
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Filters for the kNN search query').optional() },
  similarity: z.lazy(() => float).describe('The minimum similarity for a vector to be considered a match').optional(),
  get inner_hits () { return SearchInnerHits.describe('If defined, each search hit will contain inner hits.').optional() },
  rescore_vector: z.lazy(() => RescoreVector).describe('Apply oversampling and rescoring to quantized vectors').optional(),
  query_name: z.string().optional()
}).meta({ id: 'KnnSearch' })
export type KnnSearch = z.infer<typeof KnnSearch>

export const RankBase = z.object({
}).meta({ id: 'RankBase' })
export type RankBase = z.infer<typeof RankBase>

export const RrfRank = z.object({
  rank_constant: z.lazy(() => long).describe('How much influence documents in individual result sets per query have over the final ranked result set').optional(),
  rank_window_size: z.lazy(() => long).describe('Size of the individual result sets per query').optional()
}).meta({ id: 'RrfRank' })
export type RrfRank = z.infer<typeof RrfRank>

const RankContainerExclusiveProps = z.union([z.object({ rrf: RrfRank })])

export const RankContainer = RankContainerExclusiveProps.meta({ id: 'RankContainer' })
export type RankContainer = z.infer<typeof RankContainer>

export interface RetrieverBaseShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
}
export const RetrieverBase = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional()
}).meta({ id: 'RetrieverBase' })
export type RetrieverBase = z.infer<typeof RetrieverBase>

export const SortResults = z.array(z.lazy(() => FieldValue)).meta({ id: 'SortResults' })
export type SortResults = z.infer<typeof SortResults>

export const SlicedScroll = z.object({
  field: z.lazy(() => Field).optional(),
  id: z.lazy(() => Id),
  max: z.lazy(() => integer)
}).meta({ id: 'SlicedScroll' })
export type SlicedScroll = z.infer<typeof SlicedScroll>

export type ScriptSourceShape = string | SearchSearchRequestBodyShape
export const ScriptSource: z.ZodType<ScriptSourceShape> = z.union([z.string(), z.lazy(() => SearchSearchRequestBody)]).meta({ id: 'ScriptSource' })
export type ScriptSource = z.infer<typeof ScriptSource>

export const ScriptLanguage = z.union([z.enum(['painless', 'expression', 'mustache', 'java']), z.string()]).meta({ id: 'ScriptLanguage' })
export type ScriptLanguage = z.infer<typeof ScriptLanguage>

export interface ScriptShape {
  source?: ScriptSourceShape | undefined
  id?: Id | undefined
  params?: Record<string, unknown> | undefined
  lang?: ScriptLanguage | undefined
  options?: Record<string, string> | undefined
}
export const Script = z.object({
  get source () { return ScriptSource.describe('The script source.').optional() },
  id: z.lazy(() => Id).describe('The `id` for a stored script.').optional(),
  params: z.record(z.string(), z.any()).describe('Specifies any named parameters that are passed into the script as variables. Use parameters instead of hard-coded values to decrease compile time.').optional(),
  lang: z.lazy(() => ScriptLanguage).describe('Specifies the language the script is written in.').optional(),
  options: z.record(z.string(), z.string()).optional()
}).meta({ id: 'Script' })
export type Script = z.infer<typeof Script>

export interface ErrorCauseShape {
  type: string
  reason?: string | null | undefined
  stack_trace?: string | undefined
  caused_by?: ErrorCauseShape | undefined
  root_cause?: ErrorCauseShape[] | undefined
  suppressed?: ErrorCauseShape[] | undefined
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export const ErrorCause = z.looseObject({
  type: z.string().describe('The type of error'),
  reason: z.union([z.string(), z.null()]).describe('A human-readable explanation of the error, in English.').optional(),
  stack_trace: z.string().describe('The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.').optional(),
  get caused_by () { return ErrorCause.optional() },
  get root_cause () { return ErrorCause.array().optional() },
  get suppressed () { return ErrorCause.array().optional() }
}).meta({ id: 'ErrorCause' })
export type ErrorCause = z.infer<typeof ErrorCause>

export const uint = z.number().meta({ id: 'uint' })
export type uint = z.infer<typeof uint>

export const ShardFailure = z.object({
  index: z.lazy(() => IndexName).optional(),
  _index: z.lazy(() => IndexName).optional(),
  node: z.string().optional(),
  _node: z.string().optional(),
  reason: z.lazy(() => ErrorCause),
  shard: z.lazy(() => integer).optional(),
  _shard: z.lazy(() => integer).optional(),
  status: z.string().optional(),
  primary: z.boolean().optional()
}).meta({ id: 'ShardFailure' })
export type ShardFailure = z.infer<typeof ShardFailure>

export const ShardStatistics = z.object({
  failed: z.lazy(() => uint).describe('The number of shards the operation or search attempted to run on but failed.'),
  successful: z.lazy(() => uint).describe('The number of shards the operation or search succeeded on.'),
  total: z.lazy(() => uint).describe('The number of shards the operation or search will run on overall.'),
  failures: z.array(ShardFailure).optional(),
  skipped: z.lazy(() => uint).optional()
}).meta({ id: 'ShardStatistics' })
export type ShardStatistics = z.infer<typeof ShardStatistics>

export const InlineGet = z.object({
  fields: z.record(z.string(), z.any()).optional(),
  found: z.boolean(),
  _seq_no: z.lazy(() => SequenceNumber).optional(),
  _primary_term: z.lazy(() => long).optional(),
  _routing: z.lazy(() => Routing).optional(),
  _source: z.any().optional()
}).catchall(z.any()).meta({ id: 'InlineGet' })
export type InlineGet = z.infer<typeof InlineGet>

export const TaskId = z.string().meta({ id: 'TaskId' })
export type TaskId = z.infer<typeof TaskId>

export const DurationValue = z.any().meta({ id: 'DurationValue' })
export type DurationValue = z.infer<typeof DurationValue>

export const Retries = z.object({
  bulk: z.lazy(() => long).describe('The number of bulk actions retried.'),
  search: z.lazy(() => long).describe('The number of search actions retried.')
}).meta({ id: 'Retries' })
export type Retries = z.infer<typeof Retries>

export const ReindexStatus = z.object({
  slice_id: z.lazy(() => integer).describe('The slice ID').optional(),
  batches: z.lazy(() => long).describe('The number of scroll responses pulled back by the reindex.'),
  created: z.lazy(() => long).describe('The number of documents that were successfully created.').optional(),
  deleted: z.lazy(() => long).describe('The number of documents that were successfully deleted.'),
  noops: z.lazy(() => long).describe('The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.'),
  requests_per_second: z.lazy(() => float).describe('The number of requests per second effectively executed during the reindex.'),
  retries: Retries.describe('The number of retries attempted by reindex. `bulk` is the number of bulk actions retried and `search` is the number of search actions retried.'),
  throttled: z.lazy(() => Duration).optional(),
  throttled_millis: z.lazy(() => DurationValue).describe('Number of milliseconds the request slept to conform to `requests_per_second`.'),
  throttled_until: z.lazy(() => Duration).optional(),
  throttled_until_millis: z.lazy(() => DurationValue).describe('This field should always be equal to zero in a `_reindex` response. It only has meaning when using the Task API, where it indicates the next time (in milliseconds since epoch) a throttled request will be executed again in order to conform to `requests_per_second`.'),
  total: z.lazy(() => long).describe('The number of documents that were successfully processed.'),
  updated: z.lazy(() => long).describe('The number of documents that were successfully updated, for example, a document with same ID already existed prior to reindex updating it.').optional(),
  version_conflicts: z.lazy(() => long).describe('The number of version conflicts that reindex hits.'),
  cancelled: z.string().describe('The reason for cancellation if the slice was canceled').optional()
}).meta({ id: 'ReindexStatus' })
export type ReindexStatus = z.infer<typeof ReindexStatus>

export const BulkIndexByScrollFailure = z.object({
  cause: z.lazy(() => ErrorCause),
  id: z.lazy(() => Id),
  index: z.lazy(() => IndexName),
  status: z.lazy(() => integer)
}).meta({ id: 'BulkIndexByScrollFailure' })
export type BulkIndexByScrollFailure = z.infer<typeof BulkIndexByScrollFailure>

/**
 * The final result of a completed reindex operation, as stored in the task result.
 * This is the serialized form of `BulkByScrollResponse`.
 */
export const ReindexTaskResult = z.object({
  batches: z.lazy(() => long).describe('The number of scroll responses pulled back by the reindex.').optional(),
  created: z.lazy(() => long).describe('The number of documents that were successfully created.').optional(),
  deleted: z.lazy(() => long).describe('The number of documents that were successfully deleted.').optional(),
  failures: z.array(BulkIndexByScrollFailure).describe('Any failures encountered during the reindex. If non-empty, the reindex ended because of these failures.').optional(),
  noops: z.lazy(() => long).describe('The number of documents that were ignored because the script returned a `noop` value for `ctx.op`.').optional(),
  requests_per_second: z.lazy(() => float).describe('The number of requests per second effectively executed during the reindex.').optional(),
  retries: Retries.describe('The number of retries attempted by reindex.').optional(),
  throttled_millis: z.lazy(() => DurationValue).describe('Number of milliseconds the request slept to conform to `requests_per_second`.').optional(),
  throttled_until_millis: z.lazy(() => DurationValue).describe('This field should always be equal to zero in a completed reindex result.').optional(),
  timed_out: z.boolean().describe('Whether any of the requests executed during the reindex timed out.').optional(),
  took: z.lazy(() => DurationValue).describe('The total milliseconds the entire operation took.').optional(),
  total: z.lazy(() => long).describe('The number of documents that were successfully processed.').optional(),
  updated: z.lazy(() => long).describe('The number of documents that were successfully updated.').optional(),
  version_conflicts: z.lazy(() => long).describe('The number of version conflicts that occurred.').optional()
}).meta({ id: 'ReindexTaskResult' })
export type ReindexTaskResult = z.infer<typeof ReindexTaskResult>

/** Contains statistics about the number of nodes selected by the request. */
export const NodeStatistics = z.object({
  failures: z.array(z.lazy(() => ErrorCause)).optional(),
  total: z.lazy(() => integer).describe('Total number of nodes selected by the request.'),
  successful: z.lazy(() => integer).describe('Number of nodes that responded successfully to the request.'),
  failed: z.lazy(() => integer).describe('Number of nodes that rejected the request or failed to respond. If this value is not 0, a reason for the rejection or failure is included in the response.')
}).meta({ id: 'NodeStatistics' })
export type NodeStatistics = z.infer<typeof NodeStatistics>

export const ScrollId = z.string().meta({ id: 'ScrollId' })
export type ScrollId = z.infer<typeof ScrollId>

export const Indices = z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).meta({ id: 'Indices' })
export type Indices = z.infer<typeof Indices>

export const ExpandWildcard = z.enum(['all', 'open', 'closed', 'hidden', 'none']).meta({ id: 'ExpandWildcard' })
export type ExpandWildcard = z.infer<typeof ExpandWildcard>

export const ExpandWildcards = z.union([ExpandWildcard, z.array(ExpandWildcard)]).meta({ id: 'ExpandWildcards' })
export type ExpandWildcards = z.infer<typeof ExpandWildcards>

export const ProjectRouting = z.string().meta({ id: 'ProjectRouting' })
export type ProjectRouting = z.infer<typeof ProjectRouting>

export const Result = z.enum(['created', 'updated', 'deleted', 'not_found', 'noop']).meta({ id: 'Result' })
export type Result = z.infer<typeof Result>

export const WriteResponseBase = z.object({
  _id: z.lazy(() => Id).describe('The unique identifier for the added document.'),
  _index: z.lazy(() => IndexName).describe('The name of the index the document was added to.'),
  _primary_term: z.lazy(() => long).describe('The primary term assigned to the document for the indexing operation.').optional(),
  result: z.lazy(() => Result).describe('The result of the indexing operation: `created` or `updated`.'),
  _seq_no: z.lazy(() => SequenceNumber).describe('The sequence number assigned to the document for the indexing operation. Sequence numbers are used to ensure an older version of a document doesn\'t overwrite a newer version.').optional(),
  _shards: z.lazy(() => ShardStatistics).describe('Information about the replication process of the operation.'),
  _version: z.lazy(() => VersionNumber).describe('The document version, which is incremented each time the document is updated.'),
  failure_store: z.lazy(() => BulkFailureStoreStatus).describe('The role of the failure store in this document response').optional(),
  forced_refresh: z.boolean().optional()
}).meta({ id: 'WriteResponseBase' })
export type WriteResponseBase = z.infer<typeof WriteResponseBase>

export const Conflicts = z.enum(['abort', 'proceed']).meta({ id: 'Conflicts' })
export type Conflicts = z.infer<typeof Conflicts>

export const SearchType = z.enum(['query_then_fetch', 'dfs_query_then_fetch']).meta({ id: 'SearchType' })
export type SearchType = z.infer<typeof SearchType>

export const SlicesCalculation = z.enum(['auto']).meta({ id: 'SlicesCalculation' })
export type SlicesCalculation = z.infer<typeof SlicesCalculation>

/** Slices configuration used to parallelize a process. */
export const Slices = z.union([z.lazy(() => integer), SlicesCalculation]).meta({ id: 'Slices' })
export type Slices = z.infer<typeof Slices>

export const NodeId = z.string().meta({ id: 'NodeId' })
export type NodeId = z.infer<typeof NodeId>

export const TaskFailure = z.object({
  task_id: z.lazy(() => long),
  node_id: z.lazy(() => NodeId),
  status: z.string(),
  reason: z.lazy(() => ErrorCause)
}).meta({ id: 'TaskFailure' })
export type TaskFailure = z.infer<typeof TaskFailure>

export const TransportAddress = z.string().meta({ id: 'TransportAddress' })
export type TransportAddress = z.infer<typeof TransportAddress>

export const Host = z.string().meta({ id: 'Host' })
export type Host = z.infer<typeof Host>

export const Ip = z.string().meta({ id: 'Ip' })
export type Ip = z.infer<typeof Ip>

export const AcknowledgedResponseBase = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' })
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>

export const StoredScript = z.object({
  lang: z.lazy(() => ScriptLanguage).describe('The language the script is written in. For search templates, use `mustache`.'),
  options: z.record(z.string(), z.string()).optional(),
  source: z.lazy(() => ScriptSource).describe('The script source. For search templates, an object containing the search template.')
}).meta({ id: 'StoredScript' })
export type StoredScript = z.infer<typeof StoredScript>

export const LifecycleOperationMode = z.enum(['RUNNING', 'STOPPING', 'STOPPED']).meta({ id: 'LifecycleOperationMode' })
export type LifecycleOperationMode = z.infer<typeof LifecycleOperationMode>

export const OpType = z.enum(['index', 'create']).meta({ id: 'OpType' })
export type OpType = z.infer<typeof OpType>

export const Uuid = z.string().meta({ id: 'Uuid' })
export type Uuid = z.infer<typeof Uuid>

export const VersionString = z.string().meta({ id: 'VersionString' })
export type VersionString = z.infer<typeof VersionString>

export const ClusterSearchStatus = z.enum(['running', 'successful', 'partial', 'skipped', 'failed']).meta({ id: 'ClusterSearchStatus' })
export type ClusterSearchStatus = z.infer<typeof ClusterSearchStatus>

export const ClusterDetails = z.object({
  status: ClusterSearchStatus,
  indices: z.string(),
  took: z.lazy(() => DurationValue).optional(),
  timed_out: z.boolean(),
  _shards: z.lazy(() => ShardStatistics).optional(),
  failures: z.array(ShardFailure).optional()
}).meta({ id: 'ClusterDetails' })
export type ClusterDetails = z.infer<typeof ClusterDetails>

export const ClusterStatistics = z.object({
  skipped: z.lazy(() => integer),
  successful: z.lazy(() => integer),
  total: z.lazy(() => integer),
  running: z.lazy(() => integer),
  partial: z.lazy(() => integer),
  failed: z.lazy(() => integer),
  details: z.record(z.lazy(() => ClusterAlias), ClusterDetails).optional()
}).meta({ id: 'ClusterStatistics' })
export type ClusterStatistics = z.infer<typeof ClusterStatistics>

/**
 * The suggestion name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
export const SuggestionName = z.string().meta({ id: 'SuggestionName' })
export type SuggestionName = z.infer<typeof SuggestionName>

export const Username = z.string().meta({ id: 'Username' })
export type Username = z.infer<typeof Username>

export const Password = z.string().meta({ id: 'Password' })
export type Password = z.infer<typeof Password>

export const HttpHeaders = z.record(z.string(), z.union([z.string(), z.array(z.string())])).meta({ id: 'HttpHeaders' })
export type HttpHeaders = z.infer<typeof HttpHeaders>

export const NodeRole = z.enum(['master', 'data', 'data_cold', 'data_content', 'data_frozen', 'data_hot', 'data_warm', 'client', 'ingest', 'ml', 'voting_only', 'transform', 'remote_cluster_client', 'coordinating_only']).meta({ id: 'NodeRole' })
export type NodeRole = z.infer<typeof NodeRole>

export const NodeRoles = z.array(NodeRole).meta({ id: 'NodeRoles' })
export type NodeRoles = z.infer<typeof NodeRoles>

export const SuggestMode = z.enum(['missing', 'popular', 'always']).meta({ id: 'SuggestMode' })
export type SuggestMode = z.infer<typeof SuggestMode>

export const NodeName = z.string().meta({ id: 'NodeName' })
export type NodeName = z.infer<typeof NodeName>

/**
 * The aggregation name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
export const AggregateName = z.string().meta({ id: 'AggregateName' })
export type AggregateName = z.infer<typeof AggregateName>

export const CartesianPoint = z.object({
  x: z.lazy(() => double),
  y: z.lazy(() => double)
}).meta({ id: 'CartesianPoint' })
export type CartesianPoint = z.infer<typeof CartesianPoint>

/** A GeoJson GeoLine. */
export const GeoLine = z.object({
  type: z.string().describe('Always `"LineString"`'),
  coordinates: z.array(z.array(z.lazy(() => double))).describe('Array of `[lon, lat]` coordinates')
}).meta({ id: 'GeoLine' })
export type GeoLine = z.infer<typeof GeoLine>

export const ByteSize = z.union([z.lazy(() => long), z.string()]).meta({ id: 'ByteSize' })
export type ByteSize = z.infer<typeof ByteSize>

export const Bytes = z.enum(['b', 'kb', 'mb', 'gb', 'tb', 'pb']).meta({ id: 'Bytes' })
export type Bytes = z.infer<typeof Bytes>

export const CommonStatsFlag = z.enum(['_all', 'store', 'indexing', 'get', 'search', 'merge', 'flush', 'refresh', 'query_cache', 'fielddata', 'docs', 'warmer', 'completion', 'segments', 'translog', 'request_cache', 'recovery', 'bulk', 'shard_stats', 'mappings', 'dense_vector', 'sparse_vector']).meta({ id: 'CommonStatsFlag' })
export type CommonStatsFlag = z.infer<typeof CommonStatsFlag>

export const CommonStatsFlags = z.union([CommonStatsFlag, z.array(CommonStatsFlag)]).meta({ id: 'CommonStatsFlags' })
export type CommonStatsFlags = z.infer<typeof CommonStatsFlags>

export const FieldSizeUsage = z.object({
  size: z.lazy(() => ByteSize).optional(),
  size_in_bytes: z.lazy(() => long)
}).meta({ id: 'FieldSizeUsage' })
export type FieldSizeUsage = z.infer<typeof FieldSizeUsage>

export const CompletionStats = z.object({
  size_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for completion across all shards assigned to selected nodes.'),
  size: z.lazy(() => ByteSize).describe('Total amount of memory used for completion across all shards assigned to selected nodes.').optional(),
  fields: z.record(z.lazy(() => Field), FieldSizeUsage).optional()
}).meta({ id: 'CompletionStats' })
export type CompletionStats = z.infer<typeof CompletionStats>

export const DFIIndependenceMeasure = z.enum(['standardized', 'saturated', 'chisquared']).meta({ id: 'DFIIndependenceMeasure' })
export type DFIIndependenceMeasure = z.infer<typeof DFIIndependenceMeasure>

export const DFRAfterEffect = z.enum(['no', 'b', 'l']).meta({ id: 'DFRAfterEffect' })
export type DFRAfterEffect = z.infer<typeof DFRAfterEffect>

export const DFRBasicModel = z.enum(['be', 'd', 'g', 'if', 'in', 'ine', 'p']).meta({ id: 'DFRBasicModel' })
export type DFRBasicModel = z.infer<typeof DFRBasicModel>

export const DataStreamName = z.string().meta({ id: 'DataStreamName' })
export type DataStreamName = z.infer<typeof DataStreamName>

export const DataStreamNames = z.union([z.lazy(() => DataStreamName), z.array(z.lazy(() => DataStreamName))]).meta({ id: 'DataStreamNames' })
export type DataStreamNames = z.infer<typeof DataStreamNames>

export const DocStats = z.object({
  count: z.lazy(() => long).describe('Total number of non-deleted documents across all primary shards assigned to selected nodes. This number is based on documents in Lucene segments and may include documents from nested fields.'),
  deleted: z.lazy(() => long).describe('Total number of deleted documents across all primary shards assigned to selected nodes. This number is based on documents in Lucene segments. Elasticsearch reclaims the disk space of deleted Lucene documents when a segment is merged.').optional(),
  total_size_in_bytes: z.lazy(() => long).describe('Returns the total size in bytes of all documents in this stats. This value may be more reliable than store_stats.size_in_bytes in estimating the index size.'),
  total_size: z.lazy(() => ByteSize).describe('Human readable total_size_in_bytes').optional()
}).meta({ id: 'DocStats' })
export type DocStats = z.infer<typeof DocStats>

export const FieldMemoryUsage = z.object({
  memory_size: z.lazy(() => ByteSize).optional(),
  memory_size_in_bytes: z.lazy(() => long)
}).meta({ id: 'FieldMemoryUsage' })
export type FieldMemoryUsage = z.infer<typeof FieldMemoryUsage>

export const FieldSortNumericType = z.enum(['long', 'double', 'date', 'date_nanos']).meta({ id: 'FieldSortNumericType' })
export type FieldSortNumericType = z.infer<typeof FieldSortNumericType>

export const FieldSort = z.object({
  missing: z.lazy(() => AggregationsMissing).optional(),
  mode: z.lazy(() => SortMode).optional(),
  nested: z.lazy(() => NestedSortValue).optional(),
  order: z.lazy(() => SortOrder).optional(),
  unmapped_type: z.lazy(() => MappingFieldType).optional(),
  numeric_type: FieldSortNumericType.optional(),
  format: z.string().optional()
}).meta({ id: 'FieldSort' })
export type FieldSort = z.infer<typeof FieldSort>

export const GlobalOrdinalFieldStats = z.object({
  build_time_in_millis: z.lazy(() => UnitMillis),
  build_time: z.string().optional(),
  shard_max_value_count: z.lazy(() => long)
}).meta({ id: 'GlobalOrdinalFieldStats' })
export type GlobalOrdinalFieldStats = z.infer<typeof GlobalOrdinalFieldStats>

export const GlobalOrdinalsStats = z.object({
  build_time_in_millis: z.lazy(() => UnitMillis),
  build_time: z.string().optional(),
  fields: z.record(z.lazy(() => Name), GlobalOrdinalFieldStats).optional()
}).meta({ id: 'GlobalOrdinalsStats' })
export type GlobalOrdinalsStats = z.infer<typeof GlobalOrdinalsStats>

export const FielddataStats = z.object({
  evictions: z.lazy(() => long).optional(),
  memory_size: z.lazy(() => ByteSize).optional(),
  memory_size_in_bytes: z.lazy(() => long),
  fields: z.record(z.lazy(() => Field), FieldMemoryUsage).optional(),
  global_ordinals: GlobalOrdinalsStats
}).meta({ id: 'FielddataStats' })
export type FielddataStats = z.infer<typeof FielddataStats>

/** A GeoJson shape, that can also use Elasticsearch's `envelope` extension. */
export const GeoShape = z.any().meta({ id: 'GeoShape' })
export type GeoShape = z.infer<typeof GeoShape>

export const GeoShapeRelation = z.enum(['intersects', 'disjoint', 'within', 'contains']).meta({ id: 'GeoShapeRelation' })
export type GeoShapeRelation = z.infer<typeof GeoShapeRelation>

export const GrokPattern = z.string().meta({ id: 'GrokPattern' })
export type GrokPattern = z.infer<typeof GrokPattern>

export const HealthStatus = z.enum(['green', 'GREEN', 'yellow', 'YELLOW', 'red', 'RED', 'unknown', 'unavailable']).meta({ id: 'HealthStatus' })
export type HealthStatus = z.infer<typeof HealthStatus>

export const IBDistribution = z.enum(['ll', 'spl']).meta({ id: 'IBDistribution' })
export type IBDistribution = z.infer<typeof IBDistribution>

export const IBLambda = z.enum(['df', 'ttf']).meta({ id: 'IBLambda' })
export type IBLambda = z.infer<typeof IBLambda>

export const IndexAlias = z.string().meta({ id: 'IndexAlias' })
export type IndexAlias = z.infer<typeof IndexAlias>

export const IndexPattern = z.string().meta({ id: 'IndexPattern' })
export type IndexPattern = z.infer<typeof IndexPattern>

export const IndexPatterns = z.array(IndexPattern).meta({ id: 'IndexPatterns' })
export type IndexPatterns = z.infer<typeof IndexPatterns>

/**
 * Controls how to deal with unavailable concrete indices (closed or missing), how wildcard expressions are expanded
 * to actual indices (all, closed or open indices) and how to deal with wildcard expressions that resolve to no indices.
 */
export const IndicesOptions = z.object({
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional(),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional(),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional(),
  ignore_throttled: z.boolean().describe('If true, concrete, expanded or aliased indices are ignored when frozen.').optional()
}).meta({ id: 'IndicesOptions' })
export type IndicesOptions = z.infer<typeof IndicesOptions>

export const IndicesResponseBase = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.'),
  _shards: z.lazy(() => ShardStatistics).optional()
}).meta({ id: 'IndicesResponseBase' })
export type IndicesResponseBase = z.infer<typeof IndicesResponseBase>

export const Level = z.enum(['cluster', 'indices', 'shards']).meta({ id: 'Level' })
export type Level = z.infer<typeof Level>

export const Names = z.union([z.lazy(() => Name), z.array(z.lazy(() => Name))]).meta({ id: 'Names' })
export type Names = z.infer<typeof Names>

export const Namespace = z.string().meta({ id: 'Namespace' })
export type Namespace = z.infer<typeof Namespace>

export const NodeAttributes = z.object({
  attributes: z.record(z.string(), z.string()).describe('Lists node attributes.'),
  ephemeral_id: z.lazy(() => Id).describe('The ephemeral ID of the node.'),
  id: z.lazy(() => NodeId).describe('The unique identifier of the node.').optional(),
  name: NodeName.describe('The unique identifier of the node.'),
  transport_address: z.lazy(() => TransportAddress).describe('The host and port where transport HTTP connections are accepted.')
}).meta({ id: 'NodeAttributes' })
export type NodeAttributes = z.infer<typeof NodeAttributes>

export const NodeIds = z.union([z.lazy(() => NodeId), z.array(z.lazy(() => NodeId))]).meta({ id: 'NodeIds' })
export type NodeIds = z.infer<typeof NodeIds>

export const Normalization = z.enum(['no', 'h1', 'h2', 'h3', 'z']).meta({ id: 'Normalization' })
export type Normalization = z.infer<typeof Normalization>

export const Percentage = z.union([z.string(), z.lazy(() => float)]).meta({ id: 'Percentage' })
export type Percentage = z.infer<typeof Percentage>

export const PipelineName = z.string().meta({ id: 'PipelineName' })
export type PipelineName = z.infer<typeof PipelineName>

export const PluginStats = z.object({
  classname: z.string(),
  description: z.string(),
  elasticsearch_version: z.lazy(() => VersionString),
  extended_plugins: z.array(z.string()),
  has_native_controller: z.boolean(),
  java_version: z.lazy(() => VersionString),
  name: z.lazy(() => Name),
  version: z.lazy(() => VersionString),
  licensed: z.boolean()
}).meta({ id: 'PluginStats' })
export type PluginStats = z.infer<typeof PluginStats>

export const PropertyName = z.string().meta({ id: 'PropertyName' })
export type PropertyName = z.infer<typeof PropertyName>

export const QueryCacheStats = z.object({
  cache_count: z.lazy(() => long).describe('Total number of entries added to the query cache across all shards assigned to selected nodes. This number includes current and evicted entries.'),
  cache_size: z.lazy(() => long).describe('Total number of entries currently in the query cache across all shards assigned to selected nodes.'),
  evictions: z.lazy(() => long).describe('Total number of query cache evictions across all shards assigned to selected nodes.'),
  hit_count: z.lazy(() => long).describe('Total count of query cache hits across all shards assigned to selected nodes.'),
  memory_size: z.lazy(() => ByteSize).describe('Total amount of memory used for the query cache across all shards assigned to selected nodes.').optional(),
  memory_size_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for the query cache across all shards assigned to selected nodes.'),
  miss_count: z.lazy(() => long).describe('Total count of query cache misses across all shards assigned to selected nodes.'),
  total_count: z.lazy(() => long).describe('Total count of hits and misses in the query cache across all shards assigned to selected nodes.')
}).meta({ id: 'QueryCacheStats' })
export type QueryCacheStats = z.infer<typeof QueryCacheStats>

/** A scalar value. */
export const ScalarValue = z.union([z.lazy(() => long), z.lazy(() => double), z.string(), z.boolean(), z.null()]).meta({ id: 'ScalarValue' })
export type ScalarValue = z.infer<typeof ScalarValue>

export const ScriptTransform = z.object({
  lang: z.string().optional(),
  params: z.record(z.string(), z.any()).optional(),
  source: z.lazy(() => ScriptSource).optional(),
  id: z.string().optional()
}).meta({ id: 'ScriptTransform' })
export type ScriptTransform = z.infer<typeof ScriptTransform>

export const SearchTransform = z.object({
  request: z.lazy(() => WatcherSearchInputRequestDefinition),
  timeout: z.lazy(() => Duration).optional()
}).meta({ id: 'SearchTransform' })
export type SearchTransform = z.infer<typeof SearchTransform>

export const SegmentsStats = z.object({
  count: z.lazy(() => integer).describe('Total number of segments across all shards assigned to selected nodes.'),
  doc_values_memory: z.lazy(() => ByteSize).describe('Total amount of memory used for doc values across all shards assigned to selected nodes.').optional(),
  doc_values_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for doc values across all shards assigned to selected nodes.'),
  file_sizes: z.record(z.string(), z.lazy(() => IndicesStatsShardFileSizeInfo)).describe('This object is not populated by the cluster stats API. To get information on segment files, use the node stats API.'),
  fixed_bit_set: z.lazy(() => ByteSize).describe('Total amount of memory used by fixed bit sets across all shards assigned to selected nodes. Fixed bit sets are used for nested object field types and type filters for join fields.').optional(),
  fixed_bit_set_memory_in_bytes: z.lazy(() => long).describe('Total amount of memory, in bytes, used by fixed bit sets across all shards assigned to selected nodes.'),
  index_writer_memory: z.lazy(() => ByteSize).describe('Total amount of memory used by all index writers across all shards assigned to selected nodes.').optional(),
  index_writer_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used by all index writers across all shards assigned to selected nodes.'),
  max_unsafe_auto_id_timestamp: z.lazy(() => long).describe('Unix timestamp, in milliseconds, of the most recently retried indexing request.'),
  memory: z.lazy(() => ByteSize).describe('Total amount of memory used for segments across all shards assigned to selected nodes.').optional(),
  memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for segments across all shards assigned to selected nodes.'),
  norms_memory: z.lazy(() => ByteSize).describe('Total amount of memory used for normalization factors across all shards assigned to selected nodes.').optional(),
  norms_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for normalization factors across all shards assigned to selected nodes.'),
  points_memory: z.lazy(() => ByteSize).describe('Total amount of memory used for points across all shards assigned to selected nodes.').optional(),
  points_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for points across all shards assigned to selected nodes.'),
  stored_fields_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for stored fields across all shards assigned to selected nodes.'),
  stored_fields_memory: z.lazy(() => ByteSize).describe('Total amount of memory used for stored fields across all shards assigned to selected nodes.').optional(),
  terms_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for terms across all shards assigned to selected nodes.'),
  terms_memory: z.lazy(() => ByteSize).describe('Total amount of memory used for terms across all shards assigned to selected nodes.').optional(),
  term_vectors_memory: z.lazy(() => ByteSize).describe('Total amount of memory used for term vectors across all shards assigned to selected nodes.').optional(),
  term_vectors_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used for term vectors across all shards assigned to selected nodes.'),
  version_map_memory: z.lazy(() => ByteSize).describe('Total amount of memory used by all version maps across all shards assigned to selected nodes.').optional(),
  version_map_memory_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory used by all version maps across all shards assigned to selected nodes.')
}).meta({ id: 'SegmentsStats' })
export type SegmentsStats = z.infer<typeof SegmentsStats>

export const Service = z.string().meta({ id: 'Service' })
export type Service = z.infer<typeof Service>

export const ShardsOperationResponseBase = z.object({
  _shards: z.lazy(() => ShardStatistics).optional()
}).meta({ id: 'ShardsOperationResponseBase' })
export type ShardsOperationResponseBase = z.infer<typeof ShardsOperationResponseBase>

export const StoreStats = z.object({
  size: z.lazy(() => ByteSize).describe('Total size of all shards assigned to selected nodes.').optional(),
  size_in_bytes: z.lazy(() => long).describe('Total size, in bytes, of all shards assigned to selected nodes.'),
  reserved: z.lazy(() => ByteSize).describe('A prediction of how much larger the shard stores will eventually grow due to ongoing peer recoveries, restoring snapshots, and similar activities.').optional(),
  reserved_in_bytes: z.lazy(() => long).describe('A prediction, in bytes, of how much larger the shard stores will eventually grow due to ongoing peer recoveries, restoring snapshots, and similar activities.'),
  total_data_set_size: z.lazy(() => ByteSize).describe('Total data set size of all shards assigned to selected nodes. This includes the size of shards not stored fully on the nodes, such as the cache for partially mounted indices.').optional(),
  total_data_set_size_in_bytes: z.lazy(() => long).describe('Total data set size, in bytes, of all shards assigned to selected nodes. This includes the size of shards not stored fully on the nodes, such as the cache for partially mounted indices.').optional()
}).meta({ id: 'StoreStats' })
export type StoreStats = z.infer<typeof StoreStats>

export const StreamResult = z.instanceof(ArrayBuffer).meta({ id: 'StreamResult' })
export type StreamResult = z.infer<typeof StreamResult>

/** Time of day, expressed as HH:MM:SS */
export const TimeOfDay = z.string().meta({ id: 'TimeOfDay' })
export type TimeOfDay = z.infer<typeof TimeOfDay>

export const TimeUnit = z.enum(['nanos', 'micros', 'ms', 's', 'm', 'h', 'd']).meta({ id: 'TimeUnit' })
export type TimeUnit = z.infer<typeof TimeUnit>

const TransformContainerExclusiveProps = z.union([z.object({ chain: z.array(z.lazy(() => TransformContainer)) }), z.object({ script: z.union([ScriptTransform, z.lazy(() => ScriptSource)]) }), z.object({ search: SearchTransform })])

export interface TransformContainerShape {
  chain?: TransformContainer[] | undefined
  script?: ScriptTransform | ScriptSource | undefined
  search?: SearchTransform | undefined
}
export const TransformContainer: z.ZodType<TransformContainerShape> = TransformContainerExclusiveProps.meta({ id: 'TransformContainer' })
export type TransformContainer = z.infer<typeof TransformContainer>

/** Time unit for fractional milliseconds */
export const UnitFloatMillis = z.lazy(() => double).meta({ id: 'UnitFloatMillis' })
export type UnitFloatMillis = z.infer<typeof UnitFloatMillis>

/** Time unit for nanoseconds */
export const UnitNanos = z.lazy(() => long).meta({ id: 'UnitNanos' })
export type UnitNanos = z.infer<typeof UnitNanos>

/** Time unit for seconds */
export const UnitSeconds = z.lazy(() => long).meta({ id: 'UnitSeconds' })
export type UnitSeconds = z.infer<typeof UnitSeconds>

export const byte = z.number().meta({ id: 'byte' })
export type byte = z.infer<typeof byte>

export const ulong = z.number().meta({ id: 'ulong' })
export type ulong = z.infer<typeof ulong>
