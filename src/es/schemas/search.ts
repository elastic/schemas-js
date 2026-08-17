/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ClusterStatistics, Duration, DurationValue, ExpandWildcards, Field, Fields, Fuzziness, GeoHashPrecision, GeoLocation, Id, IndexName, Indices, KnnSearch, Name, NodeId, Routing, Script, ScriptField, ScriptSource, ScrollId, SearchType, SequenceNumber, ShardStatistics, SlicedScroll, Sort, SortResults, SuggestMode, SuggestionName, VersionNumber, double, float, integer, long } from './_types.js'
import type { KnnSearchShape, ScriptFieldShape, ScriptShape, ScriptSourceShape, SortShape } from './_types.js'
import { AggregationsAggregationContainer } from './_types.aggregations.js'
import type { AggregationsAggregationContainerShape } from './_types.aggregations.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import type { MappingRuntimeFieldsShape } from './_types.mapping.js'
import { QueryDslFieldAndFormat, QueryDslOperator, QueryDslQueryContainer } from './_types.query_dsl.js'
import type { QueryDslQueryContainerShape } from './_types.query_dsl.js'
import { ExplainExplanation } from './explain.js'
import { InferenceEmbeddingContentFormat, InferenceEmbeddingContentType } from './inference.js'
import { QueryVector } from './knn_search.js'

/**
 * Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered.
 * Used as a query parameter along with the `_source_includes` and `_source_excludes` parameters.
 */
export const SearchSourceConfigParam = z.union([z.boolean(), z.lazy(() => Fields)]).meta({ id: 'SearchSourceConfigParam' })
export type SearchSourceConfigParam = z.infer<typeof SearchSourceConfigParam>

export interface SearchFieldCollapseShape {
  field: Field
  inner_hits?: SearchInnerHitsShape | SearchInnerHitsShape[] | undefined
  max_concurrent_group_searches?: integer | undefined
  collapse?: SearchFieldCollapseShape | undefined
}
export const SearchFieldCollapse = z.object({
  field: z.lazy(() => Field).describe('The field to collapse the result set on'),
  get inner_hits (): z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>> { return z.union([SearchInnerHits, SearchInnerHits.array()]).describe('The number of inner hits and their sort order').optional() },
  max_concurrent_group_searches: z.lazy(() => integer).describe('The number of concurrent requests allowed to retrieve the inner_hits per group').optional(),
  get collapse () { return SearchFieldCollapse.optional() }
}).meta({ id: 'SearchFieldCollapse' })
export type SearchFieldCollapse = z.infer<typeof SearchFieldCollapse>

export const SearchHighlighterType = z.union([z.enum(['plain', 'fvh', 'unified']), z.string()]).meta({ id: 'SearchHighlighterType' })
export type SearchHighlighterType = z.infer<typeof SearchHighlighterType>

export const SearchBoundaryScanner = z.enum(['chars', 'sentence', 'word']).meta({ id: 'SearchBoundaryScanner' })
export type SearchBoundaryScanner = z.infer<typeof SearchBoundaryScanner>

export const SearchHighlighterFragmenter = z.enum(['simple', 'span']).meta({ id: 'SearchHighlighterFragmenter' })
export type SearchHighlighterFragmenter = z.infer<typeof SearchHighlighterFragmenter>

export const SearchHighlighterOrder = z.enum(['score']).meta({ id: 'SearchHighlighterOrder' })
export type SearchHighlighterOrder = z.infer<typeof SearchHighlighterOrder>

export const SearchHighlighterTagsSchema = z.enum(['styled']).meta({ id: 'SearchHighlighterTagsSchema' })
export type SearchHighlighterTagsSchema = z.infer<typeof SearchHighlighterTagsSchema>

export interface SearchHighlightBaseShape {
  type?: SearchHighlighterType | undefined
  boundary_chars?: string | undefined
  boundary_max_scan?: integer | undefined
  boundary_scanner?: SearchBoundaryScanner | undefined
  boundary_scanner_locale?: string | undefined
  force_source?: boolean | undefined
  fragmenter?: SearchHighlighterFragmenter | undefined
  fragment_size?: integer | undefined
  highlight_filter?: boolean | undefined
  highlight_query?: QueryDslQueryContainerShape | undefined
  max_fragment_length?: integer | undefined
  max_analyzed_offset?: integer | undefined
  no_match_size?: integer | undefined
  number_of_fragments?: integer | undefined
  options?: Record<string, unknown> | undefined
  order?: SearchHighlighterOrder | undefined
  phrase_limit?: integer | undefined
  post_tags?: string[] | undefined
  pre_tags?: string[] | undefined
  require_field_match?: boolean | undefined
  tags_schema?: SearchHighlighterTagsSchema | undefined
}
export const SearchHighlightBase = z.object({
  type: SearchHighlighterType.optional(),
  boundary_chars: z.string().describe('A string that contains each boundary character.').optional(),
  boundary_max_scan: z.lazy(() => integer).describe('How far to scan for boundary characters.').optional(),
  boundary_scanner: SearchBoundaryScanner.describe('Specifies how to break the highlighted fragments: chars, sentence, or word. Only valid for the unified and fvh highlighters. Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.').optional(),
  boundary_scanner_locale: z.string().describe('Controls which locale is used to search for sentence and word boundaries. This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.').optional(),
  force_source: z.boolean().optional(),
  fragmenter: SearchHighlighterFragmenter.describe('Specifies how text should be broken up in highlight snippets: `simple` or `span`. Only valid for the `plain` highlighter.').optional(),
  fragment_size: z.lazy(() => integer).describe('The size of the highlighted fragment in characters.').optional(),
  highlight_filter: z.boolean().optional(),
  get highlight_query () { return QueryDslQueryContainer.describe('Highlight matches for a query other than the search query. This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.').optional() },
  max_fragment_length: z.lazy(() => integer).optional(),
  max_analyzed_offset: z.lazy(() => integer).describe('If set to a non-negative value, highlighting stops at this defined maximum limit. The rest of the text is not processed, thus not highlighted and no error is returned The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.').optional(),
  no_match_size: z.lazy(() => integer).describe('The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.').optional(),
  number_of_fragments: z.lazy(() => integer).describe('The maximum number of fragments to return. If the number of fragments is set to `0`, no fragments are returned. Instead, the entire field contents are highlighted and returned. This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required. If `number_of_fragments` is `0`, `fragment_size` is ignored.').optional(),
  options: z.record(z.string(), z.any()).optional(),
  order: SearchHighlighterOrder.describe('Sorts highlighted fragments by score when set to `score`. By default, fragments will be output in the order they appear in the field (order: `none`). Setting this option to `score` will output the most relevant fragments first. Each highlighter applies its own logic to compute relevancy scores.').optional(),
  phrase_limit: z.lazy(() => integer).describe('Controls the number of matching phrases in a document that are considered. Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory. When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory. Only supported by the `fvh` highlighter.').optional(),
  post_tags: z.array(z.string()).describe('Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
  pre_tags: z.array(z.string()).describe('Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
  require_field_match: z.boolean().describe('By default, only fields that contains a query match are highlighted. Set to `false` to highlight all fields.').optional(),
  tags_schema: SearchHighlighterTagsSchema.describe('Set to `styled` to use the built-in tag schema.').optional()
}).meta({ id: 'SearchHighlightBase' })
export type SearchHighlightBase = z.infer<typeof SearchHighlightBase>

export const SearchHighlighterEncoder = z.enum(['default', 'html']).meta({ id: 'SearchHighlighterEncoder' })
export type SearchHighlighterEncoder = z.infer<typeof SearchHighlighterEncoder>

export interface SearchHighlightFieldShape {
  type?: SearchHighlighterType | undefined
  boundary_chars?: string | undefined
  boundary_max_scan?: integer | undefined
  boundary_scanner?: SearchBoundaryScanner | undefined
  boundary_scanner_locale?: string | undefined
  force_source?: boolean | undefined
  fragmenter?: SearchHighlighterFragmenter | undefined
  fragment_size?: integer | undefined
  highlight_filter?: boolean | undefined
  highlight_query?: QueryDslQueryContainerShape | undefined
  max_fragment_length?: integer | undefined
  max_analyzed_offset?: integer | undefined
  no_match_size?: integer | undefined
  number_of_fragments?: integer | undefined
  options?: Record<string, unknown> | undefined
  order?: SearchHighlighterOrder | undefined
  phrase_limit?: integer | undefined
  post_tags?: string[] | undefined
  pre_tags?: string[] | undefined
  require_field_match?: boolean | undefined
  tags_schema?: SearchHighlighterTagsSchema | undefined
  fragment_offset?: integer | undefined
  matched_fields?: Fields | undefined
}
export const SearchHighlightField = z.object({
  type: SearchHighlighterType.optional(),
  boundary_chars: z.string().describe('A string that contains each boundary character.').optional(),
  boundary_max_scan: z.lazy(() => integer).describe('How far to scan for boundary characters.').optional(),
  boundary_scanner: SearchBoundaryScanner.describe('Specifies how to break the highlighted fragments: chars, sentence, or word. Only valid for the unified and fvh highlighters. Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.').optional(),
  boundary_scanner_locale: z.string().describe('Controls which locale is used to search for sentence and word boundaries. This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.').optional(),
  force_source: z.boolean().optional(),
  fragmenter: SearchHighlighterFragmenter.describe('Specifies how text should be broken up in highlight snippets: `simple` or `span`. Only valid for the `plain` highlighter.').optional(),
  fragment_size: z.lazy(() => integer).describe('The size of the highlighted fragment in characters.').optional(),
  highlight_filter: z.boolean().optional(),
  get highlight_query () { return QueryDslQueryContainer.describe('Highlight matches for a query other than the search query. This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.').optional() },
  max_fragment_length: z.lazy(() => integer).optional(),
  max_analyzed_offset: z.lazy(() => integer).describe('If set to a non-negative value, highlighting stops at this defined maximum limit. The rest of the text is not processed, thus not highlighted and no error is returned The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.').optional(),
  no_match_size: z.lazy(() => integer).describe('The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.').optional(),
  number_of_fragments: z.lazy(() => integer).describe('The maximum number of fragments to return. If the number of fragments is set to `0`, no fragments are returned. Instead, the entire field contents are highlighted and returned. This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required. If `number_of_fragments` is `0`, `fragment_size` is ignored.').optional(),
  options: z.record(z.string(), z.any()).optional(),
  order: SearchHighlighterOrder.describe('Sorts highlighted fragments by score when set to `score`. By default, fragments will be output in the order they appear in the field (order: `none`). Setting this option to `score` will output the most relevant fragments first. Each highlighter applies its own logic to compute relevancy scores.').optional(),
  phrase_limit: z.lazy(() => integer).describe('Controls the number of matching phrases in a document that are considered. Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory. When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory. Only supported by the `fvh` highlighter.').optional(),
  post_tags: z.array(z.string()).describe('Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
  pre_tags: z.array(z.string()).describe('Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
  require_field_match: z.boolean().describe('By default, only fields that contains a query match are highlighted. Set to `false` to highlight all fields.').optional(),
  tags_schema: SearchHighlighterTagsSchema.describe('Set to `styled` to use the built-in tag schema.').optional(),
  fragment_offset: z.lazy(() => integer).optional(),
  matched_fields: z.lazy(() => Fields).optional()
}).meta({ id: 'SearchHighlightField' })
export type SearchHighlightField = z.infer<typeof SearchHighlightField>

export interface SearchHighlightShape {
  type?: SearchHighlighterType | undefined
  boundary_chars?: string | undefined
  boundary_max_scan?: integer | undefined
  boundary_scanner?: SearchBoundaryScanner | undefined
  boundary_scanner_locale?: string | undefined
  force_source?: boolean | undefined
  fragmenter?: SearchHighlighterFragmenter | undefined
  fragment_size?: integer | undefined
  highlight_filter?: boolean | undefined
  highlight_query?: QueryDslQueryContainerShape | undefined
  max_fragment_length?: integer | undefined
  max_analyzed_offset?: integer | undefined
  no_match_size?: integer | undefined
  number_of_fragments?: integer | undefined
  options?: Record<string, unknown> | undefined
  order?: SearchHighlighterOrder | undefined
  phrase_limit?: integer | undefined
  post_tags?: string[] | undefined
  pre_tags?: string[] | undefined
  require_field_match?: boolean | undefined
  tags_schema?: SearchHighlighterTagsSchema | undefined
  encoder?: SearchHighlighterEncoder | undefined
  fields: Record<Field, SearchHighlightFieldShape> | Array<Record<Field, SearchHighlightFieldShape>>
}
export const SearchHighlight = z.object({
  type: SearchHighlighterType.optional(),
  boundary_chars: z.string().describe('A string that contains each boundary character.').optional(),
  boundary_max_scan: z.lazy(() => integer).describe('How far to scan for boundary characters.').optional(),
  boundary_scanner: SearchBoundaryScanner.describe('Specifies how to break the highlighted fragments: chars, sentence, or word. Only valid for the unified and fvh highlighters. Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.').optional(),
  boundary_scanner_locale: z.string().describe('Controls which locale is used to search for sentence and word boundaries. This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.').optional(),
  force_source: z.boolean().optional(),
  fragmenter: SearchHighlighterFragmenter.describe('Specifies how text should be broken up in highlight snippets: `simple` or `span`. Only valid for the `plain` highlighter.').optional(),
  fragment_size: z.lazy(() => integer).describe('The size of the highlighted fragment in characters.').optional(),
  highlight_filter: z.boolean().optional(),
  get highlight_query () { return QueryDslQueryContainer.describe('Highlight matches for a query other than the search query. This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.').optional() },
  max_fragment_length: z.lazy(() => integer).optional(),
  max_analyzed_offset: z.lazy(() => integer).describe('If set to a non-negative value, highlighting stops at this defined maximum limit. The rest of the text is not processed, thus not highlighted and no error is returned The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.').optional(),
  no_match_size: z.lazy(() => integer).describe('The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.').optional(),
  number_of_fragments: z.lazy(() => integer).describe('The maximum number of fragments to return. If the number of fragments is set to `0`, no fragments are returned. Instead, the entire field contents are highlighted and returned. This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required. If `number_of_fragments` is `0`, `fragment_size` is ignored.').optional(),
  options: z.record(z.string(), z.any()).optional(),
  order: SearchHighlighterOrder.describe('Sorts highlighted fragments by score when set to `score`. By default, fragments will be output in the order they appear in the field (order: `none`). Setting this option to `score` will output the most relevant fragments first. Each highlighter applies its own logic to compute relevancy scores.').optional(),
  phrase_limit: z.lazy(() => integer).describe('Controls the number of matching phrases in a document that are considered. Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory. When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory. Only supported by the `fvh` highlighter.').optional(),
  post_tags: z.array(z.string()).describe('Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
  pre_tags: z.array(z.string()).describe('Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
  require_field_match: z.boolean().describe('By default, only fields that contains a query match are highlighted. Set to `false` to highlight all fields.').optional(),
  tags_schema: SearchHighlighterTagsSchema.describe('Set to `styled` to use the built-in tag schema.').optional(),
  encoder: SearchHighlighterEncoder.optional(),
  get fields (): z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]> { return z.union([z.record(Field, SearchHighlightField), z.array(z.record(Field, SearchHighlightField))]) }
}).meta({ id: 'SearchHighlight' })
export type SearchHighlight = z.infer<typeof SearchHighlight>

export const SearchSourceFilter = z.object({
  exclude_vectors: z.boolean().describe('If `true`, vector fields are excluded from the returned source. This option takes precedence over `includes`: any vector field will remain excluded even if it matches an `includes` rule.').optional(),
  excludes: z.lazy(() => Fields).describe('A list of fields to exclude from the returned source.').optional(),
  exclude: z.lazy(() => Fields).describe('A list of fields to exclude from the returned source.').optional(),
  includes: z.lazy(() => Fields).describe('A list of fields to include in the returned source.').optional(),
  include: z.lazy(() => Fields).describe('A list of fields to include in the returned source.').optional()
}).meta({ id: 'SearchSourceFilter' })
export type SearchSourceFilter = z.infer<typeof SearchSourceFilter>

/** Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered. */
export const SearchSourceConfig = z.union([z.boolean(), z.union([SearchSourceFilter, z.lazy(() => Fields)])]).meta({ id: 'SearchSourceConfig' })
export type SearchSourceConfig = z.infer<typeof SearchSourceConfig>

export interface SearchInnerHitsShape {
  name?: Name | undefined
  size?: integer | undefined
  from?: integer | undefined
  collapse?: SearchFieldCollapseShape | undefined
  docvalue_fields?: Array<QueryDslFieldAndFormat | Field> | undefined
  explain?: boolean | undefined
  highlight?: SearchHighlightShape | undefined
  ignore_unmapped?: boolean | undefined
  script_fields?: Record<Field, ScriptFieldShape> | undefined
  seq_no_primary_term?: boolean | undefined
  field?: Field[] | undefined
  fields?: Array<QueryDslFieldAndFormat | Field> | undefined
  sort?: SortShape | undefined
  _source?: SearchSourceConfig | undefined
  stored_fields?: Fields | undefined
  track_scores?: boolean | undefined
  version?: boolean | undefined
}
export const SearchInnerHits = z.object({
  name: z.lazy(() => Name).describe('The name for the particular inner hit definition in the response. Useful when a search request contains multiple inner hits.').optional(),
  size: z.lazy(() => integer).describe('The maximum number of hits to return per `inner_hits`.').optional(),
  from: z.lazy(() => integer).describe('Inner hit starting document offset.').optional(),
  get collapse () { return SearchFieldCollapse.optional() },
  docvalue_fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).optional(),
  explain: z.boolean().optional(),
  get highlight () { return SearchHighlight.optional() },
  ignore_unmapped: z.boolean().optional(),
  get script_fields (): z.ZodOptional<z.ZodRecord<typeof Field, typeof ScriptField>> { return z.record(Field, ScriptField).optional() },
  seq_no_primary_term: z.boolean().optional(),
  field: z.array(z.lazy(() => Field)).optional(),
  fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).optional(),
  get sort () { return Sort.describe('How the inner hits should be sorted per `inner_hits`. By default, inner hits are sorted by score.').optional() },
  _source: z.lazy(() => SearchSourceConfig).optional(),
  stored_fields: z.lazy(() => Fields).optional(),
  track_scores: z.boolean().optional(),
  version: z.boolean().optional()
}).meta({ id: 'SearchInnerHits' })
export type SearchInnerHits = z.infer<typeof SearchInnerHits>

export const InferenceString = z.object({
  type: z.lazy(() => InferenceEmbeddingContentType).describe('The type of data that the value represents.'),
  format: z.union([z.lazy(() => InferenceEmbeddingContentFormat), z.null()]).describe('The format of the data. If null, the default data format for the given type is used.').optional(),
  value: z.string().describe('String which may be raw text, or the string representation of some other data such as an image in base64.')
}).meta({ id: 'InferenceString' })
export type InferenceString = z.infer<typeof InferenceString>

export const InferenceStringGroup = z.union([InferenceString, z.array(InferenceString)]).meta({ id: 'InferenceStringGroup' })
export type InferenceStringGroup = z.infer<typeof InferenceStringGroup>

/**
 * Knn embedding input.
 * Either a string, an object or array of objects
 */
export const KnnEmbeddingInput = z.union([z.string(), InferenceStringGroup]).meta({ id: 'KnnEmbeddingInput' })
export type KnnEmbeddingInput = z.infer<typeof KnnEmbeddingInput>

export const Embedding = z.object({
  inference_id: z.string().optional(),
  input: KnnEmbeddingInput,
  timeout: z.lazy(() => Duration).optional()
}).meta({ id: 'Embedding' })
export type Embedding = z.infer<typeof Embedding>

export const TextEmbedding = z.object({
  model_id: z.string().describe('Model ID is required for all dense_vector fields but may be inferred for semantic_text fields').optional(),
  model_text: z.string().describe('The text to be converted into a vector by the specified model')
}).meta({ id: 'TextEmbedding' })
export type TextEmbedding = z.infer<typeof TextEmbedding>

export const LookupQueryVectorBuilder = z.object({
  id: z.string().describe('The ID of the document to fetch the vector from'),
  index: z.string().describe('The name of the index to fetch the document from'),
  path: z.string().describe('The name of the field containing the vector'),
  routing: z.string().describe('The routing value to use when fetching the document').optional()
}).meta({ id: 'LookupQueryVectorBuilder' })
export type LookupQueryVectorBuilder = z.infer<typeof LookupQueryVectorBuilder>

const QueryVectorBuilderExclusiveProps = z.union([z.object({ embedding: Embedding }), z.object({ text_embedding: TextEmbedding }), z.object({ lookup: LookupQueryVectorBuilder })])

export const QueryVectorBuilder = QueryVectorBuilderExclusiveProps.meta({ id: 'QueryVectorBuilder' })
export type QueryVectorBuilder = z.infer<typeof QueryVectorBuilder>

export const RescoreVector = z.object({
  oversample: z.lazy(() => float).describe('Applies the specified oversample factor to k on the approximate kNN search')
}).meta({ id: 'RescoreVector' })
export type RescoreVector = z.infer<typeof RescoreVector>

/**
 * Number of hits matching the query to count accurately. If true, the exact
 * number of hits is returned at the cost of some performance. If false, the
 * response does not include the total number of hits matching the query.
 * Defaults to 10,000 hits.
 */
export const SearchTrackHits = z.union([z.boolean(), z.lazy(() => integer)]).meta({ id: 'SearchTrackHits' })
export type SearchTrackHits = z.infer<typeof SearchTrackHits>

export const SearchScoreMode = z.enum(['avg', 'max', 'min', 'multiply', 'total']).meta({ id: 'SearchScoreMode' })
export type SearchScoreMode = z.infer<typeof SearchScoreMode>

export interface SearchRescoreQueryShape {
  Query: QueryDslQueryContainerShape
  query_weight?: double | undefined
  rescore_query_weight?: double | undefined
  score_mode?: SearchScoreMode | undefined
}
export const SearchRescoreQuery = z.object({
  get Query () { return QueryDslQueryContainer.describe('The query to use for rescoring. This query is only run on the Top-K results returned by the `query` and `post_filter` phases.') },
  query_weight: z.lazy(() => double).describe('Relative importance of the original query versus the rescore query.').optional(),
  rescore_query_weight: z.lazy(() => double).describe('Relative importance of the rescore query versus the original query.').optional(),
  score_mode: SearchScoreMode.describe('Determines how scores are combined.').optional()
}).meta({ id: 'SearchRescoreQuery' })
export type SearchRescoreQuery = z.infer<typeof SearchRescoreQuery>

export const SearchLearningToRank = z.object({
  model_id: z.string().describe('The unique identifier of the trained model uploaded to Elasticsearch'),
  params: z.record(z.string(), z.any()).describe('Named parameters to be passed to the query templates used for feature').optional()
}).meta({ id: 'SearchLearningToRank' })
export type SearchLearningToRank = z.infer<typeof SearchLearningToRank>

export interface SearchScriptRescoreShape {
  script: ScriptShape | ScriptSourceShape
}
export const SearchScriptRescore = z.object({
  get script () { return z.union([Script, ScriptSource]) }
}).meta({ id: 'SearchScriptRescore' })
export type SearchScriptRescore = z.infer<typeof SearchScriptRescore>

const SearchRescoreCommonProps = z.object({
  window_size: z.lazy(() => integer).optional()
})

const SearchRescoreExclusiveProps = z.union([z.object({ query: z.lazy(() => SearchRescoreQuery) }), z.object({ learning_to_rank: SearchLearningToRank }), z.object({ script: z.lazy(() => SearchScriptRescore) })])

export interface SearchRescoreShape {
  window_size?: integer | undefined
  query?: SearchRescoreQuery | undefined
  learning_to_rank?: SearchLearningToRank | undefined
  script?: SearchScriptRescore | undefined
}
export const SearchRescore: z.ZodType<SearchRescoreShape> = SearchRescoreCommonProps.and(SearchRescoreExclusiveProps).meta({ id: 'SearchRescore' })
export type SearchRescore = z.infer<typeof SearchRescore>

export interface StandardRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  query?: QueryDslQueryContainerShape | undefined
  search_after?: SortResults | undefined
  terminate_after?: integer | undefined
  sort?: SortShape | undefined
  collapse?: SearchFieldCollapseShape | undefined
}
export const StandardRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  get query () { return QueryDslQueryContainer.describe('Defines a query to retrieve a set of top documents.').optional() },
  search_after: z.lazy(() => SortResults).describe('Defines a search after object parameter used for pagination.').optional(),
  terminate_after: z.lazy(() => integer).describe('Maximum number of documents to collect for each shard.').optional(),
  get sort () { return Sort.describe('A sort object that that specifies the order of matching documents.').optional() },
  get collapse () { return SearchFieldCollapse.describe('Collapses the top documents by a specified key into a single top document per key.').optional() }
}).meta({ id: 'StandardRetriever' })
export type StandardRetriever = z.infer<typeof StandardRetriever>

export interface KnnRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  field: string
  query_vector?: QueryVector | undefined
  query_vector_builder?: QueryVectorBuilder | undefined
  k: integer
  num_candidates?: integer | undefined
  visit_percentage?: float | undefined
  similarity?: float | undefined
  rescore_vector?: RescoreVector | undefined
}
export const KnnRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  field: z.string().describe('The name of the vector field to search against.'),
  query_vector: z.lazy(() => QueryVector).describe('Query vector. Must have the same number of dimensions as the vector field you are searching against. You must provide a query_vector_builder or query_vector, but not both.').optional(),
  query_vector_builder: z.lazy(() => QueryVectorBuilder).describe('Defines a model to build a query vector.').optional(),
  k: z.lazy(() => integer).describe('Number of nearest neighbors to return as top hits.'),
  num_candidates: z.lazy(() => integer).describe('Number of nearest neighbor candidates to consider per shard.').optional(),
  visit_percentage: z.lazy(() => float).describe('The percentage of vectors to explore per shard while doing knn search with bbq_disk').optional(),
  similarity: z.lazy(() => float).describe('The minimum similarity required for a document to be considered a match.').optional(),
  rescore_vector: z.lazy(() => RescoreVector).describe('Apply oversampling and rescoring to quantized vectors').optional()
}).meta({ id: 'KnnRetriever' })
export type KnnRetriever = z.infer<typeof KnnRetriever>

export interface RRFRetrieverComponentShape {
  retriever: RetrieverContainerShape
  weight?: float | undefined
}
/** Wraps a retriever with an optional weight for RRF scoring. */
export const RRFRetrieverComponent = z.object({
  get retriever () { return RetrieverContainer.describe('The nested retriever configuration.') },
  weight: z.lazy(() => float).describe('Weight multiplier for this retriever\'s contribution to the RRF score. Higher values increase influence. Defaults to 1.0 if not specified. Must be non-negative.').optional()
}).meta({ id: 'RRFRetrieverComponent' })
export type RRFRetrieverComponent = z.infer<typeof RRFRetrieverComponent>

export type RRFRetrieverEntryShape = RetrieverContainerShape | RRFRetrieverComponentShape
/** Either a direct RetrieverContainer (backward compatible) or an RRFRetrieverComponent with weight. */
export const RRFRetrieverEntry: z.ZodType<RRFRetrieverEntryShape> = z.union([z.lazy(() => RetrieverContainer), z.lazy(() => RRFRetrieverComponent)]).meta({ id: 'RRFRetrieverEntry' })
export type RRFRetrieverEntry = z.infer<typeof RRFRetrieverEntry>

export interface RRFRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  retrievers: RRFRetrieverEntryShape[]
  rank_constant?: integer | undefined
  rank_window_size?: integer | undefined
  query?: string | undefined
  fields?: string[] | undefined
}
export const RRFRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  get retrievers () { return RRFRetrieverEntry.array().describe('A list of child retrievers to specify which sets of returned top documents will have the RRF formula applied to them. Each retriever can optionally include a weight parameter.') },
  rank_constant: z.lazy(() => integer).describe('This value determines how much influence documents in individual result sets per query have over the final ranked result set.').optional(),
  rank_window_size: z.lazy(() => integer).describe('This value determines the size of the individual result sets per query.').optional(),
  query: z.string().optional(),
  fields: z.array(z.string()).optional()
}).meta({ id: 'RRFRetriever' })
export type RRFRetriever = z.infer<typeof RRFRetriever>

export const MappingChunkRescorerChunkingSettings = z.object({
  max_chunk_size: z.lazy(() => integer).describe('The maximum size of a chunk in words. This value cannot be lower than `20` (for `sentence` strategy) or `10` (for `word` strategy). This value should not exceed the window size for the associated model.'),
  overlap: z.lazy(() => integer).describe('The number of overlapping words for chunks. It is applicable only to a `word` chunking strategy. This value cannot be higher than half the `max_chunk_size` value.').optional(),
  sentence_overlap: z.lazy(() => integer).describe('The number of overlapping sentences for chunks. It is applicable only for a `sentence` chunking strategy. It can be either `1` or `0`.').optional(),
  separator_group: z.string().describe('Only applicable to the `recursive` strategy and required when using it. Sets a predefined list of separators in the saved chunking settings based on the selected text type. Values can be `markdown` or `plaintext`. Using this parameter is an alternative to manually specifying a custom `separators` list.').optional(),
  separators: z.array(z.string()).describe('Only applicable to the `recursive` strategy and required when using it. A list of strings used as possible split points when chunking text. Each string can be a plain string or a regular expression (regex) pattern. The system tries each separator in order to split the text, starting from the first item in the list. After splitting, it attempts to recombine smaller pieces into larger chunks that stay within the `max_chunk_size` limit, to reduce the total number of chunks generated.').optional(),
  strategy: z.string().describe('The chunking strategy: `sentence`, `word`, `none` or `recursive`.  * If `strategy` is set to `recursive`, you must also specify: - `max_chunk_size` - either `separators` or`separator_group` Learn more about different chunking strategies in the linked documentation.').optional()
}).meta({ id: 'MappingChunkRescorerChunkingSettings' })
export type MappingChunkRescorerChunkingSettings = z.infer<typeof MappingChunkRescorerChunkingSettings>

export const ChunkRescorer = z.object({
  size: z.lazy(() => integer).describe('The number of chunks per document to evaluate for reranking.').optional(),
  chunking_settings: MappingChunkRescorerChunkingSettings.describe('Chunking settings to apply').optional()
}).meta({ id: 'ChunkRescorer' })
export type ChunkRescorer = z.infer<typeof ChunkRescorer>

export interface TextSimilarityRerankerShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  retriever: RetrieverContainerShape
  rank_window_size?: integer | undefined
  inference_id?: string | undefined
  inference_text: string
  field: string
  chunk_rescorer?: ChunkRescorer | undefined
}
export const TextSimilarityReranker = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  get retriever () { return RetrieverContainer.describe('The nested retriever which will produce the first-level results, that will later be used for reranking.') },
  rank_window_size: z.lazy(() => integer).describe('This value determines how many documents we will consider from the nested retriever.').optional(),
  inference_id: z.string().describe('Unique identifier of the inference endpoint created using the inference API.').optional(),
  inference_text: z.string().describe('The text snippet used as the basis for similarity comparison.'),
  field: z.string().describe('The document field to be used for text similarity comparisons. This field should contain the text that will be evaluated against the inference_text.'),
  chunk_rescorer: ChunkRescorer.describe('Whether to rescore on only the best matching chunks.').optional()
}).meta({ id: 'TextSimilarityReranker' })
export type TextSimilarityReranker = z.infer<typeof TextSimilarityReranker>

export interface RuleRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  ruleset_ids: Id | Id[]
  match_criteria: unknown
  retriever: RetrieverContainerShape
  rank_window_size?: integer | undefined
}
export const RuleRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  ruleset_ids: z.union([z.lazy(() => Id), z.array(z.lazy(() => Id))]).describe('The ruleset IDs containing the rules this retriever is evaluating against.'),
  match_criteria: z.any().describe('The match criteria that will determine if a rule in the provided rulesets should be applied.'),
  get retriever () { return RetrieverContainer.describe('The retriever whose results rules should be applied to.') },
  rank_window_size: z.lazy(() => integer).describe('This value determines the size of the individual result set.').optional()
}).meta({ id: 'RuleRetriever' })
export type RuleRetriever = z.infer<typeof RuleRetriever>

export interface RescorerRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  retriever: RetrieverContainerShape
  rescore: SearchRescoreShape | SearchRescoreShape[]
}
export const RescorerRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  get retriever () { return RetrieverContainer.describe('Inner retriever.') },
  get rescore (): z.ZodUnion<readonly [typeof SearchRescore, z.ZodArray<typeof SearchRescore>]> { return z.union([SearchRescore, SearchRescore.array()]) }
}).meta({ id: 'RescorerRetriever' })
export type RescorerRetriever = z.infer<typeof RescorerRetriever>

export const ScoreNormalizer = z.enum(['none', 'minmax', 'l2_norm']).meta({ id: 'ScoreNormalizer' })
export type ScoreNormalizer = z.infer<typeof ScoreNormalizer>

export interface InnerRetrieverShape {
  retriever: RetrieverContainerShape
  weight: float
  normalizer: ScoreNormalizer
}
export const InnerRetriever = z.object({
  get retriever () { return RetrieverContainer },
  weight: z.lazy(() => float),
  normalizer: ScoreNormalizer
}).meta({ id: 'InnerRetriever' })
export type InnerRetriever = z.infer<typeof InnerRetriever>

export interface LinearRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  retrievers?: InnerRetrieverShape[] | undefined
  rank_window_size?: integer | undefined
  query?: string | undefined
  fields?: string[] | undefined
  normalizer?: ScoreNormalizer | undefined
}
export const LinearRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  get retrievers () { return InnerRetriever.array().describe('Inner retrievers.').optional() },
  rank_window_size: z.lazy(() => integer).optional(),
  query: z.string().optional(),
  fields: z.array(z.string()).optional(),
  normalizer: ScoreNormalizer.optional()
}).meta({ id: 'LinearRetriever' })
export type LinearRetriever = z.infer<typeof LinearRetriever>

export const SpecifiedDocument = z.object({
  index: z.lazy(() => IndexName).optional(),
  id: z.lazy(() => Id)
}).meta({ id: 'SpecifiedDocument' })
export type SpecifiedDocument = z.infer<typeof SpecifiedDocument>

export interface PinnedRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  retriever: RetrieverContainerShape
  ids?: string[] | undefined
  docs?: SpecifiedDocument[] | undefined
  rank_window_size?: integer | undefined
}
export const PinnedRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  get retriever () { return RetrieverContainer.describe('Inner retriever.') },
  ids: z.array(z.string()).optional(),
  docs: z.array(SpecifiedDocument).optional(),
  rank_window_size: z.lazy(() => integer).optional()
}).meta({ id: 'PinnedRetriever' })
export type PinnedRetriever = z.infer<typeof PinnedRetriever>

export const DiversifyRetrieverTypes = z.enum(['mmr']).meta({ id: 'DiversifyRetrieverTypes' })
export type DiversifyRetrieverTypes = z.infer<typeof DiversifyRetrieverTypes>

export interface DiversifyRetrieverShape {
  filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined
  min_score?: float | undefined
  _name?: string | undefined
  type: DiversifyRetrieverTypes
  field: string
  retriever: RetrieverContainerShape
  size?: integer | undefined
  rank_window_size?: integer | undefined
  query_vector?: QueryVector | undefined
  query_vector_builder?: QueryVectorBuilder | undefined
  lambda?: float | undefined
}
export const DiversifyRetriever = z.object({
  get filter (): z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>> { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional() },
  min_score: z.lazy(() => float).describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
  _name: z.string().describe('Retriever name.').optional(),
  type: DiversifyRetrieverTypes.describe('The diversification strategy to apply.'),
  field: z.string().describe('The document field on which to diversify results on.'),
  get retriever () { return RetrieverContainer.describe('The nested retriever whose results will be diversified.') },
  size: z.lazy(() => integer).describe('The number of top documents to return after diversification.').optional(),
  rank_window_size: z.lazy(() => integer).describe('The number of top documents from the nested retriever to consider for diversification.').optional(),
  query_vector: z.lazy(() => QueryVector).describe('The query vector used for diversification.').optional(),
  query_vector_builder: z.lazy(() => QueryVectorBuilder).describe('a dense vector query vector builder to use instead of a static query_vector').optional(),
  lambda: z.lazy(() => float).describe('Controls the trade-off between relevance and diversity for MMR. A value of 0.0 focuses solely on diversity, while a value of 1.0 focuses solely on relevance. Required for MMR').optional()
}).meta({ id: 'DiversifyRetriever' })
export type DiversifyRetriever = z.infer<typeof DiversifyRetriever>

const RetrieverContainerExclusiveProps = z.union([z.object({ standard: z.lazy(() => StandardRetriever) }), z.object({ knn: z.lazy(() => KnnRetriever) }), z.object({ rrf: z.lazy(() => RRFRetriever) }), z.object({ text_similarity_reranker: z.lazy(() => TextSimilarityReranker) }), z.object({ rule: z.lazy(() => RuleRetriever) }), z.object({ rescorer: z.lazy(() => RescorerRetriever) }), z.object({ linear: z.lazy(() => LinearRetriever) }), z.object({ pinned: z.lazy(() => PinnedRetriever) }), z.object({ diversify: z.lazy(() => DiversifyRetriever) })])

export interface RetrieverContainerShape {
  standard?: StandardRetriever | undefined
  knn?: KnnRetriever | undefined
  rrf?: RRFRetriever | undefined
  text_similarity_reranker?: TextSimilarityReranker | undefined
  rule?: RuleRetriever | undefined
  rescorer?: RescorerRetriever | undefined
  linear?: LinearRetriever | undefined
  pinned?: PinnedRetriever | undefined
  diversify?: DiversifyRetriever | undefined
}
export const RetrieverContainer: z.ZodType<RetrieverContainerShape> = RetrieverContainerExclusiveProps.meta({ id: 'RetrieverContainer' })
export type RetrieverContainer = z.infer<typeof RetrieverContainer>

export const SearchSuggester = z.object({
  text: z.string().describe('Global suggest text, to avoid repetition when the same text is used in several suggesters').optional()
}).catchall(z.any()).meta({ id: 'SearchSuggester' })
export type SearchSuggester = z.infer<typeof SearchSuggester>

export const SearchPointInTimeReference = z.object({
  id: z.lazy(() => Id),
  keep_alive: z.lazy(() => Duration).optional()
}).meta({ id: 'SearchPointInTimeReference' })
export type SearchPointInTimeReference = z.infer<typeof SearchPointInTimeReference>

export interface SearchSearchRequestBodyShape {
  aggregations?: Record<string, AggregationsAggregationContainerShape> | undefined
  collapse?: SearchFieldCollapseShape | undefined
  explain?: boolean | undefined
  ext?: Record<string, unknown> | undefined
  from?: integer | undefined
  highlight?: SearchHighlightShape | undefined
  track_total_hits?: SearchTrackHits | undefined
  indices_boost?: Array<Record<IndexName, double>> | undefined
  docvalue_fields?: Array<QueryDslFieldAndFormat | Field> | undefined
  knn?: KnnSearchShape | KnnSearchShape[] | undefined
  min_score?: double | undefined
  post_filter?: QueryDslQueryContainerShape | undefined
  profile?: boolean | undefined
  query?: QueryDslQueryContainerShape | undefined
  rescore?: SearchRescoreShape | SearchRescoreShape[] | undefined
  retriever?: RetrieverContainerShape | undefined
  script_fields?: Record<string, ScriptFieldShape> | undefined
  search_after?: SortResults | undefined
  size?: integer | undefined
  slice?: SlicedScroll | undefined
  sort?: SortShape | undefined
  _source?: SearchSourceConfig | undefined
  fields?: Array<QueryDslFieldAndFormat | Field> | undefined
  suggest?: SearchSuggester | undefined
  terminate_after?: long | undefined
  timeout?: string | undefined
  track_scores?: boolean | undefined
  version?: boolean | undefined
  seq_no_primary_term?: boolean | undefined
  stored_fields?: Fields | undefined
  pit?: SearchPointInTimeReference | undefined
  runtime_mappings?: MappingRuntimeFieldsShape | undefined
  stats?: string[] | undefined
}
export const SearchSearchRequestBody = z.object({
  get aggregations (): z.ZodOptional<z.ZodRecord<z.ZodString, typeof AggregationsAggregationContainer>> { return z.record(z.string(), AggregationsAggregationContainer).describe('Defines the aggregations that are run as part of the search request.').optional() },
  get collapse () { return SearchFieldCollapse.describe('Collapses search results the values of the specified field.').optional() },
  explain: z.boolean().describe('If `true`, the request returns detailed information about score computation as part of a hit.').optional(),
  ext: z.record(z.string(), z.any()).describe('Configuration of search extensions defined by Elasticsearch plugins.').optional(),
  from: z.lazy(() => integer).describe('The starting document offset, which must be non-negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional(),
  get highlight () { return SearchHighlight.describe('Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in your search results.').optional() },
  track_total_hits: SearchTrackHits.describe('Number of hits matching the query to count accurately. If `true`, the exact number of hits is returned at the cost of some performance. If `false`, the  response does not include the total number of hits matching the query.').optional(),
  indices_boost: z.array(z.record(z.lazy(() => IndexName), z.lazy(() => double))).describe('Boost the `_score` of documents from specified indices. The boost value is the factor by which scores are multiplied. A boost value greater than `1.0` increases the score. A boost value between `0` and `1.0` decreases the score.').optional(),
  docvalue_fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).describe('An array of wildcard (`*`) field patterns. The request returns doc values for field names matching these patterns in the `hits.fields` property of the response.').optional(),
  get knn (): z.ZodOptional<z.ZodUnion<readonly [typeof KnnSearch, z.ZodArray<typeof KnnSearch>]>> { return z.union([KnnSearch, KnnSearch.array()]).describe('The approximate kNN search to run.').optional() },
  min_score: z.lazy(() => double).describe('The minimum `_score` for matching documents. Documents with a lower `_score` are not included in search results or results collected by aggregations.').optional(),
  get post_filter () { return QueryDslQueryContainer.describe('Use the `post_filter` parameter to filter search results. The search hits are filtered after the aggregations are calculated. A post filter has no impact on the aggregation results.').optional() },
  profile: z.boolean().describe('Set to `true` to return detailed timing information about the execution of individual components in a search request. NOTE: This is a debugging tool and adds significant overhead to search execution.').optional(),
  get query () { return QueryDslQueryContainer.describe('The search definition using the Query DSL.').optional() },
  get rescore (): z.ZodOptional<z.ZodUnion<readonly [typeof SearchRescore, z.ZodArray<typeof SearchRescore>]>> { return z.union([SearchRescore, SearchRescore.array()]).describe('Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases.').optional() },
  get retriever () { return RetrieverContainer.describe('A retriever is a specification to describe top documents returned from a search. A retriever replaces other elements of the search API that also return top documents such as `query` and `knn`.').optional() },
  get script_fields (): z.ZodOptional<z.ZodRecord<z.ZodString, typeof ScriptField>> { return z.record(z.string(), ScriptField).describe('Retrieve a script evaluation (based on different fields) for each hit.').optional() },
  search_after: z.lazy(() => SortResults).describe('Used to retrieve the next page of hits using a set of sort values from the previous page.').optional(),
  size: z.lazy(() => integer).describe('The number of hits to return, which must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` property.').optional(),
  slice: z.lazy(() => SlicedScroll).describe('Split a scrolled search into multiple slices that can be consumed independently.').optional(),
  get sort () { return Sort.describe('A comma-separated list of <field>:<direction> pairs.').optional() },
  _source: z.lazy(() => SearchSourceConfig).describe('The source fields that are returned for matching documents. These fields are returned in the `hits._source` property of the search response. If the `stored_fields` property is specified, the `_source` property defaults to `false`. Otherwise, it defaults to `true`.').optional(),
  fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).describe('An array of wildcard (`*`) field patterns. The request returns values for field names matching these patterns in the `hits.fields` property of the response.').optional(),
  suggest: SearchSuggester.describe('Defines a suggester that provides similar looking terms based on a provided text.').optional(),
  terminate_after: z.lazy(() => long).describe('The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. IMPORTANT: Use with caution. Elasticsearch applies this property to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this property for requests that target data streams with backing indices across multiple data tiers. If set to `0` (default), the query does not terminate early.').optional(),
  timeout: z.string().describe('The period of time to wait for a response from each shard. If no response is received before the timeout expires, the request fails and returns an error. Defaults to no timeout.').optional(),
  track_scores: z.boolean().describe('If `true`, calculate and return document scores, even if the scores are not used for sorting.').optional(),
  version: z.boolean().describe('If `true`, the request returns the document version as part of a hit.').optional(),
  seq_no_primary_term: z.boolean().describe('If `true`, the request returns sequence number and primary term of the last modification of each hit.').optional(),
  stored_fields: z.lazy(() => Fields).describe('A comma-separated list of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the `_source` property defaults to `false`. You can pass `_source: true` to return both source fields and stored fields in the search response.').optional(),
  pit: SearchPointInTimeReference.describe('Limit the search to a point in time (PIT). If you provide a PIT, you cannot specify an `<index>` in the request path.').optional(),
  get runtime_mappings () { return MappingRuntimeFields.describe('One or more runtime fields in the search request. These fields take precedence over mapped fields with the same name.').optional() },
  stats: z.array(z.string()).describe('The stats groups to associate with the search. Each group maintains a statistics aggregation for its associated searches. You can retrieve these stats using the indices stats API.').optional()
}).meta({ id: 'SearchSearchRequestBody' })
export type SearchSearchRequestBody = z.infer<typeof SearchSearchRequestBody>

export const SearchTotalHitsRelation = z.enum(['eq', 'gte']).meta({ id: 'SearchTotalHitsRelation' })
export type SearchTotalHitsRelation = z.infer<typeof SearchTotalHitsRelation>

export const SearchTotalHits = z.object({
  relation: SearchTotalHitsRelation,
  value: z.lazy(() => long)
}).meta({ id: 'SearchTotalHits' })
export type SearchTotalHits = z.infer<typeof SearchTotalHits>

export interface SearchInnerHitsResultShape {
  hits: SearchHitsMetadataShape
}
export const SearchInnerHitsResult = z.object({
  get hits () { return SearchHitsMetadata }
}).meta({ id: 'SearchInnerHitsResult' })
export type SearchInnerHitsResult = z.infer<typeof SearchInnerHitsResult>

export interface SearchNestedIdentityShape {
  field: Field
  offset: integer
  _nested?: SearchNestedIdentityShape | undefined
}
export const SearchNestedIdentity = z.object({
  field: z.lazy(() => Field),
  offset: z.lazy(() => integer),
  get _nested () { return SearchNestedIdentity.optional() }
}).meta({ id: 'SearchNestedIdentity' })
export type SearchNestedIdentity = z.infer<typeof SearchNestedIdentity>

export interface SearchHitShape {
  _index: IndexName
  _id?: Id | undefined
  _score?: double | null | undefined
  _explanation?: ExplainExplanation | undefined
  fields?: Record<string, unknown> | undefined
  highlight?: Record<string, string[]> | undefined
  inner_hits?: Record<string, SearchInnerHitsResultShape> | undefined
  matched_queries?: string[] | Record<string, double> | undefined
  _nested?: SearchNestedIdentityShape | undefined
  _ignored?: string[] | undefined
  ignored_field_values?: Record<string, unknown[]> | undefined
  _shard?: string | undefined
  _node?: string | undefined
  _routing?: string | undefined
  _source?: unknown | undefined
  _rank?: integer | undefined
  _seq_no?: SequenceNumber | undefined
  _primary_term?: long | undefined
  _version?: VersionNumber | undefined
  sort?: SortResults | undefined
}
export const SearchHit = z.object({
  _index: z.lazy(() => IndexName),
  _id: z.lazy(() => Id).optional(),
  _score: z.union([z.lazy(() => double), z.null()]).optional(),
  _explanation: z.lazy(() => ExplainExplanation).optional(),
  fields: z.record(z.string(), z.any()).optional(),
  highlight: z.record(z.string(), z.array(z.string())).optional(),
  get inner_hits (): z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>> { return z.record(z.string(), SearchInnerHitsResult).optional() },
  matched_queries: z.union([z.array(z.string()), z.record(z.string(), z.lazy(() => double))]).optional(),
  get _nested () { return SearchNestedIdentity.optional() },
  _ignored: z.array(z.string()).optional(),
  ignored_field_values: z.record(z.string(), z.array(z.any())).optional(),
  _shard: z.string().optional(),
  _node: z.string().optional(),
  _routing: z.string().optional(),
  _source: z.any().optional(),
  _rank: z.lazy(() => integer).optional(),
  _seq_no: z.lazy(() => SequenceNumber).optional(),
  _primary_term: z.lazy(() => long).optional(),
  _version: z.lazy(() => VersionNumber).optional(),
  sort: z.lazy(() => SortResults).optional()
}).meta({ id: 'SearchHit' })
export type SearchHit = z.infer<typeof SearchHit>

export interface SearchHitsMetadataShape {
  total?: SearchTotalHits | long | undefined
  hits: SearchHitShape[]
  max_score?: double | null | undefined
}
export const SearchHitsMetadata = z.object({
  total: z.union([SearchTotalHits, z.lazy(() => long)]).describe('Total hit count information, present only if `track_total_hits` wasn\'t `false` in the search request.').optional(),
  get hits () { return SearchHit.array() },
  max_score: z.union([z.lazy(() => double), z.null()]).optional()
}).meta({ id: 'SearchHitsMetadata' })
export type SearchHitsMetadata = z.infer<typeof SearchHitsMetadata>

export const SearchAggregationBreakdown = z.object({
  build_aggregation: z.lazy(() => long),
  build_aggregation_count: z.lazy(() => long),
  build_leaf_collector: z.lazy(() => long),
  build_leaf_collector_count: z.lazy(() => long),
  collect: z.lazy(() => long),
  collect_count: z.lazy(() => long),
  initialize: z.lazy(() => long),
  initialize_count: z.lazy(() => long),
  post_collection: z.lazy(() => long).optional(),
  post_collection_count: z.lazy(() => long).optional(),
  reduce: z.lazy(() => long),
  reduce_count: z.lazy(() => long)
}).meta({ id: 'SearchAggregationBreakdown' })
export type SearchAggregationBreakdown = z.infer<typeof SearchAggregationBreakdown>

export const SearchAggregationProfileDelegateDebugFilter = z.object({
  results_from_metadata: z.lazy(() => integer).optional(),
  query: z.string().optional(),
  specialized_for: z.string().optional(),
  segments_counted_in_constant_time: z.lazy(() => integer).optional()
}).meta({ id: 'SearchAggregationProfileDelegateDebugFilter' })
export type SearchAggregationProfileDelegateDebugFilter = z.infer<typeof SearchAggregationProfileDelegateDebugFilter>

export interface SearchAggregationProfileDebugShape {
  segments_with_multi_valued_ords?: integer | undefined
  collection_strategy?: string | undefined
  segments_with_single_valued_ords?: integer | undefined
  total_buckets?: integer | undefined
  built_buckets?: integer | undefined
  result_strategy?: string | undefined
  has_filter?: boolean | undefined
  delegate?: string | undefined
  delegate_debug?: SearchAggregationProfileDebugShape | undefined
  chars_fetched?: integer | undefined
  extract_count?: integer | undefined
  extract_ns?: integer | undefined
  values_fetched?: integer | undefined
  collect_analyzed_ns?: integer | undefined
  collect_analyzed_count?: integer | undefined
  surviving_buckets?: integer | undefined
  ordinals_collectors_used?: integer | undefined
  ordinals_collectors_overhead_too_high?: integer | undefined
  string_hashing_collectors_used?: integer | undefined
  numeric_collectors_used?: integer | undefined
  empty_collectors_used?: integer | undefined
  deferred_aggregators?: string[] | undefined
  segments_with_doc_count_field?: integer | undefined
  segments_with_deleted_docs?: integer | undefined
  filters?: SearchAggregationProfileDelegateDebugFilter[] | undefined
  segments_counted?: integer | undefined
  segments_collected?: integer | undefined
  map_reducer?: string | undefined
  brute_force_used?: integer | undefined
  dynamic_pruning_attempted?: integer | undefined
  dynamic_pruning_used?: integer | undefined
  skipped_due_to_no_data?: integer | undefined
}
export const SearchAggregationProfileDebug = z.object({
  segments_with_multi_valued_ords: z.lazy(() => integer).optional(),
  collection_strategy: z.string().optional(),
  segments_with_single_valued_ords: z.lazy(() => integer).optional(),
  total_buckets: z.lazy(() => integer).optional(),
  built_buckets: z.lazy(() => integer).optional(),
  result_strategy: z.string().optional(),
  has_filter: z.boolean().optional(),
  delegate: z.string().optional(),
  get delegate_debug () { return SearchAggregationProfileDebug.optional() },
  chars_fetched: z.lazy(() => integer).optional(),
  extract_count: z.lazy(() => integer).optional(),
  extract_ns: z.lazy(() => integer).optional(),
  values_fetched: z.lazy(() => integer).optional(),
  collect_analyzed_ns: z.lazy(() => integer).optional(),
  collect_analyzed_count: z.lazy(() => integer).optional(),
  surviving_buckets: z.lazy(() => integer).optional(),
  ordinals_collectors_used: z.lazy(() => integer).optional(),
  ordinals_collectors_overhead_too_high: z.lazy(() => integer).optional(),
  string_hashing_collectors_used: z.lazy(() => integer).optional(),
  numeric_collectors_used: z.lazy(() => integer).optional(),
  empty_collectors_used: z.lazy(() => integer).optional(),
  deferred_aggregators: z.array(z.string()).optional(),
  segments_with_doc_count_field: z.lazy(() => integer).optional(),
  segments_with_deleted_docs: z.lazy(() => integer).optional(),
  filters: z.array(SearchAggregationProfileDelegateDebugFilter).optional(),
  segments_counted: z.lazy(() => integer).optional(),
  segments_collected: z.lazy(() => integer).optional(),
  map_reducer: z.string().optional(),
  brute_force_used: z.lazy(() => integer).optional(),
  dynamic_pruning_attempted: z.lazy(() => integer).optional(),
  dynamic_pruning_used: z.lazy(() => integer).optional(),
  skipped_due_to_no_data: z.lazy(() => integer).optional()
}).meta({ id: 'SearchAggregationProfileDebug' })
export type SearchAggregationProfileDebug = z.infer<typeof SearchAggregationProfileDebug>

export interface SearchAggregationProfileShape {
  breakdown: SearchAggregationBreakdown
  description: string
  time_in_nanos: DurationValue
  type: string
  debug?: SearchAggregationProfileDebugShape | undefined
  children?: SearchAggregationProfileShape[] | undefined
}
export const SearchAggregationProfile = z.object({
  breakdown: SearchAggregationBreakdown,
  description: z.string(),
  time_in_nanos: z.lazy(() => DurationValue),
  type: z.string(),
  get debug () { return SearchAggregationProfileDebug.optional() },
  get children () { return SearchAggregationProfile.array().optional() }
}).meta({ id: 'SearchAggregationProfile' })
export type SearchAggregationProfile = z.infer<typeof SearchAggregationProfile>

export const SearchDfsStatisticsBreakdown = z.object({
  collection_statistics: z.lazy(() => long),
  collection_statistics_count: z.lazy(() => long),
  create_weight: z.lazy(() => long),
  create_weight_count: z.lazy(() => long),
  rewrite: z.lazy(() => long),
  rewrite_count: z.lazy(() => long),
  term_statistics: z.lazy(() => long),
  term_statistics_count: z.lazy(() => long)
}).meta({ id: 'SearchDfsStatisticsBreakdown' })
export type SearchDfsStatisticsBreakdown = z.infer<typeof SearchDfsStatisticsBreakdown>

export interface SearchDfsStatisticsProfileShape {
  type: string
  description: string
  time?: Duration | undefined
  time_in_nanos: DurationValue
  breakdown: SearchDfsStatisticsBreakdown
  debug?: Record<string, unknown> | undefined
  children?: SearchDfsStatisticsProfileShape[] | undefined
}
export const SearchDfsStatisticsProfile = z.object({
  type: z.string(),
  description: z.string(),
  time: z.lazy(() => Duration).optional(),
  time_in_nanos: z.lazy(() => DurationValue),
  breakdown: SearchDfsStatisticsBreakdown,
  debug: z.record(z.string(), z.any()).optional(),
  get children () { return SearchDfsStatisticsProfile.array().optional() }
}).meta({ id: 'SearchDfsStatisticsProfile' })
export type SearchDfsStatisticsProfile = z.infer<typeof SearchDfsStatisticsProfile>

export const SearchKnnQueryProfileBreakdown = z.object({
  advance: z.lazy(() => long),
  advance_count: z.lazy(() => long),
  build_scorer: z.lazy(() => long),
  build_scorer_count: z.lazy(() => long),
  compute_max_score: z.lazy(() => long),
  compute_max_score_count: z.lazy(() => long),
  count_weight: z.lazy(() => long),
  count_weight_count: z.lazy(() => long),
  create_weight: z.lazy(() => long),
  create_weight_count: z.lazy(() => long),
  match: z.lazy(() => long),
  match_count: z.lazy(() => long),
  next_doc: z.lazy(() => long),
  next_doc_count: z.lazy(() => long),
  score: z.lazy(() => long),
  score_count: z.lazy(() => long),
  set_min_competitive_score: z.lazy(() => long),
  set_min_competitive_score_count: z.lazy(() => long),
  shallow_advance: z.lazy(() => long),
  shallow_advance_count: z.lazy(() => long)
}).meta({ id: 'SearchKnnQueryProfileBreakdown' })
export type SearchKnnQueryProfileBreakdown = z.infer<typeof SearchKnnQueryProfileBreakdown>

export interface SearchKnnQueryProfileResultShape {
  type: string
  description: string
  time?: Duration | undefined
  time_in_nanos: DurationValue
  breakdown: SearchKnnQueryProfileBreakdown
  debug?: Record<string, unknown> | undefined
  children?: SearchKnnQueryProfileResultShape[] | undefined
}
export const SearchKnnQueryProfileResult = z.object({
  type: z.string(),
  description: z.string(),
  time: z.lazy(() => Duration).optional(),
  time_in_nanos: z.lazy(() => DurationValue),
  breakdown: SearchKnnQueryProfileBreakdown,
  debug: z.record(z.string(), z.any()).optional(),
  get children () { return SearchKnnQueryProfileResult.array().optional() }
}).meta({ id: 'SearchKnnQueryProfileResult' })
export type SearchKnnQueryProfileResult = z.infer<typeof SearchKnnQueryProfileResult>

export interface SearchKnnCollectorResultShape {
  name: string
  reason: string
  time?: Duration | undefined
  time_in_nanos: DurationValue
  children?: SearchKnnCollectorResultShape[] | undefined
}
export const SearchKnnCollectorResult = z.object({
  name: z.string(),
  reason: z.string(),
  time: z.lazy(() => Duration).optional(),
  time_in_nanos: z.lazy(() => DurationValue),
  get children () { return SearchKnnCollectorResult.array().optional() }
}).meta({ id: 'SearchKnnCollectorResult' })
export type SearchKnnCollectorResult = z.infer<typeof SearchKnnCollectorResult>

export const SearchDfsKnnProfile = z.object({
  vector_operations_count: z.lazy(() => long).optional(),
  query: z.array(z.lazy(() => SearchKnnQueryProfileResult)),
  rewrite_time: z.lazy(() => long),
  collector: z.array(z.lazy(() => SearchKnnCollectorResult))
}).meta({ id: 'SearchDfsKnnProfile' })
export type SearchDfsKnnProfile = z.infer<typeof SearchDfsKnnProfile>

export const SearchDfsProfile = z.object({
  statistics: z.lazy(() => SearchDfsStatisticsProfile).optional(),
  knn: z.array(SearchDfsKnnProfile).optional()
}).meta({ id: 'SearchDfsProfile' })
export type SearchDfsProfile = z.infer<typeof SearchDfsProfile>

export const SearchFetchProfileBreakdown = z.object({
  load_source: z.lazy(() => integer).optional(),
  load_source_count: z.lazy(() => integer).optional(),
  load_stored_fields: z.lazy(() => integer).optional(),
  load_stored_fields_count: z.lazy(() => integer).optional(),
  next_reader: z.lazy(() => integer).optional(),
  next_reader_count: z.lazy(() => integer).optional(),
  process_count: z.lazy(() => integer).optional(),
  process: z.lazy(() => integer).optional()
}).meta({ id: 'SearchFetchProfileBreakdown' })
export type SearchFetchProfileBreakdown = z.infer<typeof SearchFetchProfileBreakdown>

export const SearchFetchProfileDebug = z.object({
  stored_fields: z.array(z.string()).optional(),
  fast_path: z.lazy(() => integer).optional()
}).meta({ id: 'SearchFetchProfileDebug' })
export type SearchFetchProfileDebug = z.infer<typeof SearchFetchProfileDebug>

export interface SearchFetchProfileShape {
  type: string
  description: string
  time_in_nanos: DurationValue
  breakdown: SearchFetchProfileBreakdown
  debug?: SearchFetchProfileDebug | undefined
  children?: SearchFetchProfileShape[] | undefined
}
export const SearchFetchProfile = z.object({
  type: z.string(),
  description: z.string(),
  time_in_nanos: z.lazy(() => DurationValue),
  breakdown: SearchFetchProfileBreakdown,
  debug: SearchFetchProfileDebug.optional(),
  get children () { return SearchFetchProfile.array().optional() }
}).meta({ id: 'SearchFetchProfile' })
export type SearchFetchProfile = z.infer<typeof SearchFetchProfile>

export interface SearchCollectorShape {
  name: string
  reason: string
  time_in_nanos: DurationValue
  children?: SearchCollectorShape[] | undefined
}
export const SearchCollector = z.object({
  name: z.string(),
  reason: z.string(),
  time_in_nanos: z.lazy(() => DurationValue),
  get children () { return SearchCollector.array().optional() }
}).meta({ id: 'SearchCollector' })
export type SearchCollector = z.infer<typeof SearchCollector>

export const SearchQueryBreakdown = z.object({
  advance: z.lazy(() => long),
  advance_count: z.lazy(() => long),
  build_scorer: z.lazy(() => long),
  build_scorer_count: z.lazy(() => long),
  create_weight: z.lazy(() => long),
  create_weight_count: z.lazy(() => long),
  match: z.lazy(() => long),
  match_count: z.lazy(() => long),
  shallow_advance: z.lazy(() => long),
  shallow_advance_count: z.lazy(() => long),
  next_doc: z.lazy(() => long),
  next_doc_count: z.lazy(() => long),
  score: z.lazy(() => long),
  score_count: z.lazy(() => long),
  compute_max_score: z.lazy(() => long),
  compute_max_score_count: z.lazy(() => long),
  count_weight: z.lazy(() => long),
  count_weight_count: z.lazy(() => long),
  set_min_competitive_score: z.lazy(() => long),
  set_min_competitive_score_count: z.lazy(() => long)
}).meta({ id: 'SearchQueryBreakdown' })
export type SearchQueryBreakdown = z.infer<typeof SearchQueryBreakdown>

export interface SearchQueryProfileShape {
  breakdown: SearchQueryBreakdown
  description: string
  time_in_nanos: DurationValue
  type: string
  children?: SearchQueryProfileShape[] | undefined
}
export const SearchQueryProfile = z.object({
  breakdown: SearchQueryBreakdown,
  description: z.string(),
  time_in_nanos: z.lazy(() => DurationValue),
  type: z.string(),
  get children () { return SearchQueryProfile.array().optional() }
}).meta({ id: 'SearchQueryProfile' })
export type SearchQueryProfile = z.infer<typeof SearchQueryProfile>

export const SearchSearchProfile = z.object({
  collector: z.array(z.lazy(() => SearchCollector)),
  query: z.array(z.lazy(() => SearchQueryProfile)),
  rewrite_time: z.lazy(() => long)
}).meta({ id: 'SearchSearchProfile' })
export type SearchSearchProfile = z.infer<typeof SearchSearchProfile>

export const SearchShardProfile = z.object({
  aggregations: z.array(z.lazy(() => SearchAggregationProfile)),
  cluster: z.string(),
  dfs: SearchDfsProfile.optional(),
  fetch: z.lazy(() => SearchFetchProfile).optional(),
  id: z.string(),
  index: z.lazy(() => IndexName),
  node_id: z.lazy(() => NodeId),
  searches: z.array(SearchSearchProfile),
  shard_id: z.lazy(() => integer)
}).meta({ id: 'SearchShardProfile' })
export type SearchShardProfile = z.infer<typeof SearchShardProfile>

/**
 * Coordinator snapshot of the original search request, serialized under `profile.request` when profiling is enabled.
 * Introduced in Elasticsearch 9.5; omitted when the cluster contains mixed-version nodes that do not serialize this metadata.
 */
export const SearchSearchRequestCoordinatorMetadata = z.object({
  source: z.lazy(() => SearchSearchRequestBody).describe('Original query source from the search request (`SearchSourceBuilder` as JSON).').optional(),
  indices: z.array(z.lazy(() => IndexName)).describe('Target index expressions from the request (before index resolution).').optional()
}).meta({ id: 'SearchSearchRequestCoordinatorMetadata' })
export type SearchSearchRequestCoordinatorMetadata = z.infer<typeof SearchSearchRequestCoordinatorMetadata>

export const SearchProfile = z.object({
  shards: z.array(SearchShardProfile),
  request: SearchSearchRequestCoordinatorMetadata.describe('When profiling is enabled, the original query source and target indices from the coordinating request.').optional()
}).meta({ id: 'SearchProfile' })
export type SearchProfile = z.infer<typeof SearchProfile>

export const SearchSuggestBase = z.object({
  length: z.lazy(() => integer),
  offset: z.lazy(() => integer),
  text: z.string()
}).meta({ id: 'SearchSuggestBase' })
export type SearchSuggestBase = z.infer<typeof SearchSuggestBase>

/** Text or location that we want similar documents for or a lookup to a document's field for the text. */
export const SearchContext = z.union([z.string(), z.lazy(() => GeoLocation)]).meta({ id: 'SearchContext' })
export type SearchContext = z.infer<typeof SearchContext>

export const SearchCompletionSuggestOption = z.object({
  collate_match: z.boolean().optional(),
  contexts: z.record(z.string(), z.array(SearchContext)).optional(),
  fields: z.record(z.string(), z.any()).optional(),
  _id: z.string().optional(),
  _index: z.lazy(() => IndexName).optional(),
  _routing: z.string().optional(),
  _score: z.lazy(() => double).optional(),
  _source: z.any().optional(),
  text: z.string(),
  score: z.lazy(() => double).optional()
}).meta({ id: 'SearchCompletionSuggestOption' })
export type SearchCompletionSuggestOption = z.infer<typeof SearchCompletionSuggestOption>

export const SearchCompletionSuggest = z.object({
  ...SearchSuggestBase.shape,
  options: z.union([SearchCompletionSuggestOption, z.array(SearchCompletionSuggestOption)])
}).meta({ id: 'SearchCompletionSuggest' })
export type SearchCompletionSuggest = z.infer<typeof SearchCompletionSuggest>

export const SearchPhraseSuggestOption = z.object({
  text: z.string(),
  score: z.lazy(() => double),
  highlighted: z.string().optional(),
  collate_match: z.boolean().optional()
}).meta({ id: 'SearchPhraseSuggestOption' })
export type SearchPhraseSuggestOption = z.infer<typeof SearchPhraseSuggestOption>

export const SearchPhraseSuggest = z.object({
  ...SearchSuggestBase.shape,
  options: z.union([SearchPhraseSuggestOption, z.array(SearchPhraseSuggestOption)])
}).meta({ id: 'SearchPhraseSuggest' })
export type SearchPhraseSuggest = z.infer<typeof SearchPhraseSuggest>

export const SearchTermSuggestOption = z.object({
  text: z.string(),
  score: z.lazy(() => double),
  freq: z.lazy(() => long),
  highlighted: z.string().optional(),
  collate_match: z.boolean().optional()
}).meta({ id: 'SearchTermSuggestOption' })
export type SearchTermSuggestOption = z.infer<typeof SearchTermSuggestOption>

export const SearchTermSuggest = z.object({
  ...SearchSuggestBase.shape,
  options: z.union([SearchTermSuggestOption, z.array(SearchTermSuggestOption)])
}).meta({ id: 'SearchTermSuggest' })
export type SearchTermSuggest = z.infer<typeof SearchTermSuggest>

export const SearchSuggest = z.union([SearchCompletionSuggest, SearchPhraseSuggest, SearchTermSuggest]).meta({ id: 'SearchSuggest' })
export type SearchSuggest = z.infer<typeof SearchSuggest>

export const SearchResponseBody = z.object({
  took: z.lazy(() => long).describe('The number of milliseconds it took Elasticsearch to run the request. This value is calculated by measuring the time elapsed between receipt of a request on the coordinating node and the time at which the coordinating node is ready to send the response. It includes: * Communication time between the coordinating node and data nodes * Time the request spends in the search thread pool, queued for execution * Actual run time It does not include: * Time needed to send the request to Elasticsearch * Time needed to serialize the JSON response * Time needed to send the response to a client'),
  timed_out: z.boolean().describe('If `true`, the request timed out before completion; returned results may be partial or empty.'),
  _shards: z.lazy(() => ShardStatistics).describe('A count of shards used for the request.'),
  hits: z.lazy(() => SearchHitsMetadata).describe('The returned documents and metadata.'),
  aggregations: z.any().optional(),
  _clusters: z.lazy(() => ClusterStatistics).optional(),
  fields: z.record(z.string(), z.any()).optional(),
  max_score: z.lazy(() => double).optional(),
  num_reduce_phases: z.lazy(() => long).optional(),
  profile: SearchProfile.optional(),
  pit_id: z.lazy(() => Id).optional(),
  _scroll_id: z.lazy(() => ScrollId).describe('The identifier for the search and its search context. You can use this scroll ID with the scroll API to retrieve the next batch of search results for the request. This property is returned only if the `scroll` query parameter is specified in the request.').optional(),
  suggest: z.record(z.lazy(() => SuggestionName), z.array(SearchSuggest)).optional(),
  terminated_early: z.boolean().optional()
}).meta({ id: 'SearchResponseBody' })
export type SearchResponseBody = z.infer<typeof SearchResponseBody>

/**
 * Run a search.
 *
 * Get search hits that match the query defined in the request.
 * You can provide search queries using the `q` query string parameter or the request body.
 * If both are specified, only the query parameter is used.
 *
 * If the Elasticsearch security features are enabled, you must have the read index privilege for the target data stream, index, or alias. For cross-cluster search, refer to the documentation about configuring CCS privileges.
 * To search a point in time (PIT) for an alias, you must have the `read` index privilege for the alias's data streams or indices.
 *
 * **Search slicing**
 *
 * When paging through a large number of documents, it can be helpful to split the search into multiple slices to consume them independently with the `slice` and `pit` properties.
 * By default the splitting is done first on the shards, then locally on each shard.
 *
 * For instance if the number of shards is equal to 2 and you request 4 slices, the slices 0 and 2 are assigned to the first shard and the slices 1 and 3 are assigned to the second shard.
 *
 * IMPORTANT: The same point-in-time ID should be used for all slices.
 * If different PIT IDs are used, slices can overlap and miss documents.
 * This situation can occur because, by default, the splitting criterion is based on Lucene document IDs, which are not stable across changes to the index.
 */
export const SearchRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  allow_partial_search_results: z.boolean().describe('If `true` and there are shard request timeouts or shard failures, the request returns partial results. If `false`, it returns an error with no partial results. To override the default behavior, you can set the `search.default_allow_partial_results` cluster setting to `false`.').optional().meta({ found_in: 'query' }),
  analyzer: z.string().describe('The analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  analyze_wildcard: z.boolean().describe('If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  batched_reduce_size: z.lazy(() => long).describe('The number of shard results that should be reduced at once on the coordinating node. If the potential number of shards in the request can be large, this value should be used as a protection mechanism to reduce the memory overhead per search request.').optional().meta({ found_in: 'query' }),
  ccs_minimize_roundtrips: z.boolean().describe('If `true`, network round-trips between the coordinating node and the remote clusters are minimized when running cross-cluster search (CCS) requests.').optional().meta({ found_in: 'query' }),
  default_operator: z.lazy(() => QueryDslOperator).describe('The default operator for the query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  df: z.string().describe('The field to use as a default when no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_throttled: z.boolean().describe('If `true`, concrete, expanded or aliased indices will be ignored when frozen.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  include_named_queries_score: z.boolean().describe('If `true`, the response includes the score contribution from any named queries. This functionality reruns each named query on every hit in a search response. Typically, this adds a small overhead to a request. However, using computationally expensive named queries on a large number of hits may add significant overhead.').optional().meta({ found_in: 'query' }),
  lenient: z.boolean().describe('If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  max_concurrent_shard_requests: z.lazy(() => integer).describe('The number of concurrent shard requests per node that the search runs concurrently. This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests.').optional().meta({ found_in: 'query' }),
  preference: z.string().describe('The nodes and shards used for the search. By default, Elasticsearch selects from eligible nodes and shards using adaptive replica selection, accounting for allocation awareness. Valid values are: * `_only_local` to run the search only on shards on the local node. * `_local` to, if possible, run the search on shards on the local node, or if not, select shards using the default method. * `_only_nodes:<node-id>,<node-id>` to run the search on only the specified nodes IDs. If suitable shards exist on more than one selected node, use shards on those nodes using the default method. If none of the specified nodes are available, select shards from any available node using the default method. * `_prefer_nodes:<node-id>,<node-id>` to if possible, run the search on the specified nodes IDs. If not, select shards using the default method. * `_shards:<shard>,<shard>` to run the search only on the specified shards. You can combine this value with other `preference` values. However, the `_shards` value must come first. For example: `_shards:2,3|_local`. * `<custom-string>` (any string that does not start with `_`) to route searches with the same `<custom-string>` to the same shards in the same order.').optional().meta({ found_in: 'query' }),
  pre_filter_shard_size: z.lazy(() => long).describe('A threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method (if date filters are mandatory to match but the shard bounds and the query are disjoint). When unspecified, the pre-filter phase is executed if any of these conditions is met: * The request targets more than 128 shards. * The request targets one or more read-only index. * The primary sort of the query targets an indexed field.').optional().meta({ found_in: 'query' }),
  request_cache: z.boolean().describe('If `true`, the caching of search results is enabled for requests where `size` is `0`. It defaults to index level settings.').optional().meta({ found_in: 'query' }),
  routing: z.lazy(() => Routing).describe('A custom value that is used to route operations to a specific shard. Not allowed when `index.slice.enabled` is `true` for the target index; use `_slice` instead.').optional().meta({ found_in: 'query' }),
  scroll: z.lazy(() => Duration).describe('The period to retain the search context for scrolling. By default, this value cannot exceed `1d` (24 hours). You can change this limit by using the `search.max_keep_alive` cluster-level setting.').optional().meta({ found_in: 'query' }),
  search_type: z.lazy(() => SearchType).describe('Indicates how distributed term frequencies are calculated for relevance scoring.').optional().meta({ found_in: 'query' }),
  suggest_field: z.lazy(() => Field).describe('The field to use for suggestions.').optional().meta({ found_in: 'query' }),
  suggest_mode: z.lazy(() => SuggestMode).describe('The suggest mode. This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified.').optional().meta({ found_in: 'query' }),
  suggest_size: z.lazy(() => long).describe('The number of suggestions to return. This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified.').optional().meta({ found_in: 'query' }),
  suggest_text: z.string().describe('The source text for which the suggestions should be returned. This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified.').optional().meta({ found_in: 'query' }),
  typed_keys: z.boolean().describe('If `true`, aggregation and suggester names are be prefixed by their respective types in the response.').optional().meta({ found_in: 'query' }),
  rest_total_hits_as_int: z.boolean().describe('Indicates whether `hits.total` should be rendered as an integer or an object in the rest search response.').optional().meta({ found_in: 'query' }),
  _source_excludes: z.lazy(() => Fields).describe('A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored.').optional().meta({ found_in: 'query' }),
  _source_exclude_vectors: z.boolean().describe('Whether vectors should be excluded from _source').optional().meta({ found_in: 'query' }),
  _source_includes: z.lazy(() => Fields).describe('A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored.').optional().meta({ found_in: 'query' }),
  q: z.string().describe('A query in the Lucene query string syntax. Query parameter searches do not support the full Elasticsearch Query DSL but are handy for testing. IMPORTANT: This parameter overrides the query parameter in the request body. If both parameters are specified, documents matching the query request body parameter are not returned.').optional().meta({ found_in: 'query' }),
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Defines the aggregations that are run as part of the search request.').optional().meta({ found_in: 'body' }),
  aggs: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Defines the aggregations that are run as part of the search request.').optional(),
  collapse: z.lazy(() => SearchFieldCollapse).describe('Collapses search results the values of the specified field.').optional().meta({ found_in: 'body' }),
  explain: z.boolean().describe('If `true`, the request returns detailed information about score computation as part of a hit.').optional().meta({ found_in: 'body' }),
  ext: z.record(z.string(), z.any()).describe('Configuration of search extensions defined by Elasticsearch plugins.').optional().meta({ found_in: 'body' }),
  from: z.lazy(() => integer).describe('The starting document offset, which must be non-negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  highlight: z.lazy(() => SearchHighlight).describe('Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in your search results.').optional().meta({ found_in: 'body' }),
  track_total_hits: SearchTrackHits.describe('Number of hits matching the query to count accurately. If `true`, the exact number of hits is returned at the cost of some performance. If `false`, the  response does not include the total number of hits matching the query.').optional().meta({ found_in: 'body' }),
  indices_boost: z.array(z.record(z.lazy(() => IndexName), z.lazy(() => double))).describe('Boost the `_score` of documents from specified indices. The boost value is the factor by which scores are multiplied. A boost value greater than `1.0` increases the score. A boost value between `0` and `1.0` decreases the score.').optional().meta({ found_in: 'body' }),
  docvalue_fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).describe('An array of wildcard (`*`) field patterns. The request returns doc values for field names matching these patterns in the `hits.fields` property of the response.').optional().meta({ found_in: 'body' }),
  knn: z.union([z.lazy(() => KnnSearch), z.array(z.lazy(() => KnnSearch))]).describe('The approximate kNN search to run.').optional().meta({ found_in: 'body' }),
  min_score: z.lazy(() => double).describe('The minimum `_score` for matching documents. Documents with a lower `_score` are not included in search results and results collected by aggregations.').optional().meta({ found_in: 'body' }),
  post_filter: z.lazy(() => QueryDslQueryContainer).describe('Use the `post_filter` parameter to filter search results. The search hits are filtered after the aggregations are calculated. A post filter has no impact on the aggregation results.').optional().meta({ found_in: 'body' }),
  profile: z.boolean().describe('Set to `true` to return detailed timing information about the execution of individual components in a search request. NOTE: This is a debugging tool and adds significant overhead to search execution.').optional().meta({ found_in: 'body' }),
  query: z.lazy(() => QueryDslQueryContainer).describe('The search definition using the Query DSL.').optional().meta({ found_in: 'body' }),
  rescore: z.union([z.lazy(() => SearchRescore), z.array(z.lazy(() => SearchRescore))]).describe('Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases.').optional().meta({ found_in: 'body' }),
  retriever: z.lazy(() => RetrieverContainer).describe('A retriever is a specification to describe top documents returned from a search. A retriever replaces other elements of the search API that also return top documents such as `query` and `knn`.').optional().meta({ found_in: 'body' }),
  script_fields: z.record(z.string(), z.lazy(() => ScriptField)).describe('Retrieve a script evaluation (based on different fields) for each hit.').optional().meta({ found_in: 'body' }),
  search_after: z.lazy(() => SortResults).describe('Used to retrieve the next page of hits using a set of sort values from the previous page.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('The number of hits to return, which must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` property.').optional().meta({ found_in: 'body' }),
  slice: z.lazy(() => SlicedScroll).describe('Split a scrolled search into multiple slices that can be consumed independently.').optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Sort).describe('A comma-separated list of <field>:<direction> pairs.').optional().meta({ found_in: 'body' }),
  _source: z.lazy(() => SearchSourceConfig).describe('The source fields that are returned for matching documents. These fields are returned in the `hits._source` property of the search response. If the `stored_fields` property is specified, the `_source` property defaults to `false`. Otherwise, it defaults to `true`.').optional().meta({ found_in: 'body' }),
  fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).describe('An array of wildcard (`*`) field patterns. The request returns values for field names matching these patterns in the `hits.fields` property of the response.').optional().meta({ found_in: 'body' }),
  suggest: SearchSuggester.describe('Defines a suggester that provides similar looking terms based on a provided text.').optional().meta({ found_in: 'body' }),
  terminate_after: z.lazy(() => long).describe('The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. IMPORTANT: Use with caution. Elasticsearch applies this property to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this property for requests that target data streams with backing indices across multiple data tiers. If set to `0` (default), the query does not terminate early.').optional().meta({ found_in: 'body' }),
  timeout: z.string().describe('The period of time to wait for a response from each shard. If no response is received before the timeout expires, the request fails and returns an error. Defaults to no timeout.').optional().meta({ found_in: 'body' }),
  track_scores: z.boolean().describe('If `true`, calculate and return document scores, even if the scores are not used for sorting.').optional().meta({ found_in: 'body' }),
  version: z.boolean().describe('If `true`, the request returns the document version as part of a hit.').optional().meta({ found_in: 'body' }),
  seq_no_primary_term: z.boolean().describe('If `true`, the request returns sequence number and primary term of the last modification of each hit.').optional().meta({ found_in: 'body' }),
  stored_fields: z.lazy(() => Fields).describe('A comma-separated list of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the `_source` property defaults to `false`. You can pass `_source: true` to return both source fields and stored fields in the search response.').optional().meta({ found_in: 'body' }),
  pit: SearchPointInTimeReference.describe('Limit the search to a point in time (PIT). If you provide a PIT, you cannot specify an `<index>` in the request path.').optional().meta({ found_in: 'body' }),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).describe('One or more runtime fields in the search request. These fields take precedence over mapped fields with the same name.').optional().meta({ found_in: 'body' }),
  stats: z.array(z.string()).describe('The stats groups to associate with the search. Each group maintains a statistics aggregation for its associated searches. You can retrieve these stats using the indices stats API.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SearchRequest' })
export type SearchRequest = z.infer<typeof SearchRequest>

export const SearchResponse = SearchResponseBody.meta({ id: 'SearchResponse' })
export type SearchResponse = z.infer<typeof SearchResponse>

export const SearchCompletionContext = z.object({
  boost: z.lazy(() => double).describe('The factor by which the score of the suggestion should be boosted. The score is computed by multiplying the boost with the suggestion weight.').optional(),
  context: SearchContext.describe('The value of the category to filter/boost on.'),
  neighbours: z.array(z.lazy(() => GeoHashPrecision)).describe('An array of precision values at which neighboring geohashes should be taken into account. Precision value can be a distance value (`5m`, `10km`, etc.) or a raw geohash precision (`1`..`12`). Defaults to generating neighbors for index time precision level.').optional(),
  precision: z.lazy(() => GeoHashPrecision).describe('The precision of the geohash to encode the query geo point. Can be specified as a distance value (`5m`, `10km`, etc.), or as a raw geohash precision (`1`..`12`). Defaults to index time precision level.').optional(),
  prefix: z.boolean().describe('Whether the category value should be treated as a prefix or not.').optional()
}).meta({ id: 'SearchCompletionContext' })
export type SearchCompletionContext = z.infer<typeof SearchCompletionContext>

export const SearchSuggesterBase = z.object({
  field: z.lazy(() => Field).describe('The field to fetch the candidate suggestions from. Needs to be set globally or per suggestion.'),
  analyzer: z.string().describe('The analyzer to analyze the suggest text with. Defaults to the search analyzer of the suggest field.').optional(),
  size: z.lazy(() => integer).describe('The maximum corrections to be returned per suggest text token.').optional()
}).meta({ id: 'SearchSuggesterBase' })
export type SearchSuggesterBase = z.infer<typeof SearchSuggesterBase>

export const SearchSuggestFuzziness = z.object({
  fuzziness: z.lazy(() => Fuzziness).describe('The fuzziness factor.').optional(),
  min_length: z.lazy(() => integer).describe('Minimum length of the input before fuzzy suggestions are returned.').optional(),
  prefix_length: z.lazy(() => integer).describe('Minimum length of the input, which is not checked for fuzzy alternatives.').optional(),
  transpositions: z.boolean().describe('If set to `true`, transpositions are counted as one change instead of two.').optional(),
  unicode_aware: z.boolean().describe('If `true`, all measurements (like fuzzy edit distance, transpositions, and lengths) are measured in Unicode code points instead of in bytes. This is slightly slower than raw bytes.').optional()
}).meta({ id: 'SearchSuggestFuzziness' })
export type SearchSuggestFuzziness = z.infer<typeof SearchSuggestFuzziness>

export const SearchRegexOptions = z.object({
  flags: z.union([z.lazy(() => integer), z.string()]).describe('Optional operators for the regular expression.').optional(),
  max_determinized_states: z.lazy(() => integer).describe('Maximum number of automaton states required for the query.').optional()
}).meta({ id: 'SearchRegexOptions' })
export type SearchRegexOptions = z.infer<typeof SearchRegexOptions>

export const SearchCompletionSuggester = z.object({
  ...SearchSuggesterBase.shape,
  contexts: z.record(z.lazy(() => Field), z.union([z.union([SearchCompletionContext, SearchContext]), z.array(z.union([SearchCompletionContext, SearchContext]))])).describe('A value, geo point object, or a geo hash string to filter or boost the suggestion on.').optional(),
  fuzzy: SearchSuggestFuzziness.describe('Enables fuzziness, meaning you can have a typo in your search and still get results back.').optional(),
  regex: SearchRegexOptions.describe('A regex query that expresses a prefix as a regular expression.').optional(),
  skip_duplicates: z.boolean().describe('Whether duplicate suggestions should be filtered out.').optional()
}).meta({ id: 'SearchCompletionSuggester' })
export type SearchCompletionSuggester = z.infer<typeof SearchCompletionSuggester>

export const SearchDirectGenerator = z.object({
  field: z.lazy(() => Field).describe('The field to fetch the candidate suggestions from. Needs to be set globally or per suggestion.'),
  max_edits: z.lazy(() => integer).describe('The maximum edit distance candidate suggestions can have in order to be considered as a suggestion. Can only be `1` or `2`.').optional(),
  max_inspections: z.lazy(() => float).describe('A factor that is used to multiply with the shard_size in order to inspect more candidate spelling corrections on the shard level. Can improve accuracy at the cost of performance.').optional(),
  max_term_freq: z.lazy(() => float).describe('The maximum threshold in number of documents in which a suggest text token can exist in order to be included. This can be used to exclude high frequency terms—which are usually spelled correctly—from being spellchecked. Can be a relative percentage number (for example `0.4`) or an absolute number to represent document frequencies. If a value higher than 1 is specified, then fractional can not be specified.').optional(),
  min_doc_freq: z.lazy(() => float).describe('The minimal threshold in number of documents a suggestion should appear in. This can improve quality by only suggesting high frequency terms. Can be specified as an absolute number or as a relative percentage of number of documents. If a value higher than 1 is specified, the number cannot be fractional.').optional(),
  min_word_length: z.lazy(() => integer).describe('The minimum length a suggest text term must have in order to be included.').optional(),
  post_filter: z.string().describe('A filter (analyzer) that is applied to each of the generated tokens before they are passed to the actual phrase scorer.').optional(),
  pre_filter: z.string().describe('A filter (analyzer) that is applied to each of the tokens passed to this candidate generator. This filter is applied to the original token before candidates are generated.').optional(),
  prefix_length: z.lazy(() => integer).describe('The number of minimal prefix characters that must match in order be a candidate suggestions. Increasing this number improves spellcheck performance.').optional(),
  size: z.lazy(() => integer).describe('The maximum corrections to be returned per suggest text token.').optional(),
  suggest_mode: z.lazy(() => SuggestMode).describe('Controls what suggestions are included on the suggestions generated on each shard.').optional()
}).meta({ id: 'SearchDirectGenerator' })
export type SearchDirectGenerator = z.infer<typeof SearchDirectGenerator>

export const SearchPhraseSuggestCollateQuery = z.object({
  id: z.lazy(() => Id).describe('The search template ID.').optional(),
  source: z.lazy(() => ScriptSource).describe('The query source.').optional()
}).meta({ id: 'SearchPhraseSuggestCollateQuery' })
export type SearchPhraseSuggestCollateQuery = z.infer<typeof SearchPhraseSuggestCollateQuery>

export const SearchPhraseSuggestCollate = z.object({
  params: z.record(z.string(), z.any()).describe('Parameters to use if the query is templated.').optional(),
  prune: z.boolean().describe('Returns all suggestions with an extra `collate_match` option indicating whether the generated phrase matched any document.').optional(),
  query: SearchPhraseSuggestCollateQuery.describe('A collate query that is run once for every suggestion.')
}).meta({ id: 'SearchPhraseSuggestCollate' })
export type SearchPhraseSuggestCollate = z.infer<typeof SearchPhraseSuggestCollate>

export const SearchPhraseSuggestHighlight = z.object({
  post_tag: z.string().describe('Use in conjunction with `pre_tag` to define the HTML tags to use for the highlighted text.'),
  pre_tag: z.string().describe('Use in conjunction with `post_tag` to define the HTML tags to use for the highlighted text.')
}).meta({ id: 'SearchPhraseSuggestHighlight' })
export type SearchPhraseSuggestHighlight = z.infer<typeof SearchPhraseSuggestHighlight>

export const SearchLaplaceSmoothingModel = z.object({
  alpha: z.lazy(() => double).describe('A constant that is added to all counts to balance weights.')
}).meta({ id: 'SearchLaplaceSmoothingModel' })
export type SearchLaplaceSmoothingModel = z.infer<typeof SearchLaplaceSmoothingModel>

export const SearchLinearInterpolationSmoothingModel = z.object({
  bigram_lambda: z.lazy(() => double),
  trigram_lambda: z.lazy(() => double),
  unigram_lambda: z.lazy(() => double)
}).meta({ id: 'SearchLinearInterpolationSmoothingModel' })
export type SearchLinearInterpolationSmoothingModel = z.infer<typeof SearchLinearInterpolationSmoothingModel>

export const SearchStupidBackoffSmoothingModel = z.object({
  discount: z.lazy(() => double).describe('A constant factor that the lower order n-gram model is discounted by.')
}).meta({ id: 'SearchStupidBackoffSmoothingModel' })
export type SearchStupidBackoffSmoothingModel = z.infer<typeof SearchStupidBackoffSmoothingModel>

const SearchSmoothingModelContainerExclusiveProps = z.union([z.object({ laplace: SearchLaplaceSmoothingModel }), z.object({ linear_interpolation: SearchLinearInterpolationSmoothingModel }), z.object({ stupid_backoff: SearchStupidBackoffSmoothingModel })])

export const SearchSmoothingModelContainer = SearchSmoothingModelContainerExclusiveProps.meta({ id: 'SearchSmoothingModelContainer' })
export type SearchSmoothingModelContainer = z.infer<typeof SearchSmoothingModelContainer>

export const SearchPhraseSuggester = z.object({
  ...SearchSuggesterBase.shape,
  collate: SearchPhraseSuggestCollate.describe('Checks each suggestion against the specified query to prune suggestions for which no matching docs exist in the index.').optional(),
  confidence: z.lazy(() => double).describe('Defines a factor applied to the input phrases score, which is used as a threshold for other suggest candidates. Only candidates that score higher than the threshold will be included in the result.').optional(),
  direct_generator: z.array(SearchDirectGenerator).describe('A list of candidate generators that produce a list of possible terms per term in the given text.').optional(),
  force_unigrams: z.boolean().optional(),
  gram_size: z.lazy(() => integer).describe('Sets max size of the n-grams (shingles) in the field. If the field doesn’t contain n-grams (shingles), this should be omitted or set to `1`. If the field uses a shingle filter, the `gram_size` is set to the `max_shingle_size` if not explicitly set.').optional(),
  highlight: SearchPhraseSuggestHighlight.describe('Sets up suggestion highlighting. If not provided, no highlighted field is returned.').optional(),
  max_errors: z.lazy(() => double).describe('The maximum percentage of the terms considered to be misspellings in order to form a correction. This method accepts a float value in the range `[0..1)` as a fraction of the actual query terms or a number `>=1` as an absolute number of query terms.').optional(),
  real_word_error_likelihood: z.lazy(() => double).describe('The likelihood of a term being misspelled even if the term exists in the dictionary.').optional(),
  separator: z.string().describe('The separator that is used to separate terms in the bigram field. If not set, the whitespace character is used as a separator.').optional(),
  shard_size: z.lazy(() => integer).describe('Sets the maximum number of suggested terms to be retrieved from each individual shard.').optional(),
  smoothing: SearchSmoothingModelContainer.describe('The smoothing model used to balance weight between infrequent grams (grams (shingles) are not existing in the index) and frequent grams (appear at least once in the index). The default model is Stupid Backoff.').optional(),
  token_limit: z.lazy(() => integer).optional()
}).meta({ id: 'SearchPhraseSuggester' })
export type SearchPhraseSuggester = z.infer<typeof SearchPhraseSuggester>

export const SearchSuggestSort = z.enum(['score', 'frequency']).meta({ id: 'SearchSuggestSort' })
export type SearchSuggestSort = z.infer<typeof SearchSuggestSort>

export const SearchStringDistance = z.enum(['internal', 'damerau_levenshtein', 'levenshtein', 'jaro_winkler', 'ngram']).meta({ id: 'SearchStringDistance' })
export type SearchStringDistance = z.infer<typeof SearchStringDistance>

export const SearchTermSuggester = z.object({
  ...SearchSuggesterBase.shape,
  lowercase_terms: z.boolean().optional(),
  max_edits: z.lazy(() => integer).describe('The maximum edit distance candidate suggestions can have in order to be considered as a suggestion. Can only be `1` or `2`.').optional(),
  max_inspections: z.lazy(() => integer).describe('A factor that is used to multiply with the shard_size in order to inspect more candidate spelling corrections on the shard level. Can improve accuracy at the cost of performance.').optional(),
  max_term_freq: z.lazy(() => float).describe('The maximum threshold in number of documents in which a suggest text token can exist in order to be included. Can be a relative percentage number (for example `0.4`) or an absolute number to represent document frequencies. If a value higher than 1 is specified, then fractional can not be specified.').optional(),
  min_doc_freq: z.lazy(() => float).describe('The minimal threshold in number of documents a suggestion should appear in. This can improve quality by only suggesting high frequency terms. Can be specified as an absolute number or as a relative percentage of number of documents. If a value higher than 1 is specified, then the number cannot be fractional.').optional(),
  min_word_length: z.lazy(() => integer).describe('The minimum length a suggest text term must have in order to be included.').optional(),
  prefix_length: z.lazy(() => integer).describe('The number of minimal prefix characters that must match in order be a candidate for suggestions. Increasing this number improves spellcheck performance.').optional(),
  shard_size: z.lazy(() => integer).describe('Sets the maximum number of suggestions to be retrieved from each individual shard.').optional(),
  sort: SearchSuggestSort.describe('Defines how suggestions should be sorted per suggest text term.').optional(),
  string_distance: SearchStringDistance.describe('The string distance implementation to use for comparing how similar suggested terms are.').optional(),
  suggest_mode: z.lazy(() => SuggestMode).describe('Controls what suggestions are included or controls for what suggest text terms, suggestions should be suggested.').optional()
}).meta({ id: 'SearchTermSuggester' })
export type SearchTermSuggester = z.infer<typeof SearchTermSuggester>

const SearchFieldSuggesterCommonProps = z.object({
  prefix: z.string().describe('Prefix used to search for suggestions.').optional(),
  regex: z.string().describe('A prefix expressed as a regular expression.').optional(),
  text: z.string().describe('The text to use as input for the suggester. Needs to be set globally or per suggestion.').optional()
})

const SearchFieldSuggesterExclusiveProps = z.union([z.object({ completion: SearchCompletionSuggester }), z.object({ phrase: SearchPhraseSuggester }), z.object({ term: SearchTermSuggester })])

export const SearchFieldSuggester = SearchFieldSuggesterCommonProps.and(SearchFieldSuggesterExclusiveProps).meta({ id: 'SearchFieldSuggester' })
export type SearchFieldSuggester = z.infer<typeof SearchFieldSuggester>
