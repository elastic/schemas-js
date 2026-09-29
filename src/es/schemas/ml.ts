/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, DateTime, Duration, EpochTime, Field, Id, IndexName, Indices, IndicesOptions, Metadata, Name, Percentage, ScriptField, TransportAddress, VersionString, double, integer, long } from './_types.js'
import { AggregationsAggregationContainer } from './_types.aggregations.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { MlModelSizeStats } from './ml.get_job_stats.js'
import { MlDeploymentAssignmentState, MlRoutingState } from './ml.get_trained_models_stats.js'
import { MlCategorizationAnalyzer } from './ml.info.js'
import { MlInferenceConfigCreateContainer, MlTrainedModelPrefixStrings, MlTrainedModelType } from './ml.put_trained_model.js'
import { MlTrainingPriority } from './ml.start_trained_model_deployment.js'
import { MlPerPartitionCategorization } from './ml.update_job.js'
import { MlDetector, MlExcludeFrequent } from './ml.validate_detector.js'

export const MlRegressionInferenceOptions = z.object({
  results_field: z.lazy(() => Field).describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  num_top_feature_importance_values: z.lazy(() => integer).describe('Specifies the maximum number of feature importance values per document.').optional()
}).meta({ id: 'MlRegressionInferenceOptions' })
export type MlRegressionInferenceOptions = z.infer<typeof MlRegressionInferenceOptions>

export const MlClassificationInferenceOptions = z.object({
  num_top_classes: z.lazy(() => integer).describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
  num_top_feature_importance_values: z.lazy(() => integer).describe('Specifies the maximum number of feature importance values per document.').optional(),
  prediction_field_type: z.string().describe('Specifies the type of the predicted field to write. Acceptable values are: string, number, boolean. When boolean is provided 1.0 is transformed to true and 0.0 to false.').optional(),
  results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
  top_classes_results_field: z.string().describe('Specifies the field to which the top classes are written. Defaults to top_classes.').optional()
}).meta({ id: 'MlClassificationInferenceOptions' })
export type MlClassificationInferenceOptions = z.infer<typeof MlClassificationInferenceOptions>

export const MlAdaptiveAllocationsSettings = z.object({
  enabled: z.boolean().describe('If true, adaptive_allocations is enabled'),
  min_number_of_allocations: z.lazy(() => integer).describe('Specifies the minimum number of allocations to scale to. If set, it must be greater than or equal to 0. If not defined, the deployment scales to 0.').optional(),
  max_number_of_allocations: z.lazy(() => integer).describe('Specifies the maximum number of allocations to scale to. If set, it must be greater than or equal to min_number_of_allocations.').optional()
}).meta({ id: 'MlAdaptiveAllocationsSettings' })
export type MlAdaptiveAllocationsSettings = z.infer<typeof MlAdaptiveAllocationsSettings>

export const MlRuleAction = z.enum(['skip_result', 'skip_model_update']).meta({ id: 'MlRuleAction' })
export type MlRuleAction = z.infer<typeof MlRuleAction>

export const MlAppliesTo = z.enum(['actual', 'typical', 'diff_from_typical', 'time']).meta({ id: 'MlAppliesTo' })
export type MlAppliesTo = z.infer<typeof MlAppliesTo>

export const MlConditionOperator = z.enum(['gt', 'gte', 'lt', 'lte']).meta({ id: 'MlConditionOperator' })
export type MlConditionOperator = z.infer<typeof MlConditionOperator>

export const MlRuleCondition = z.object({
  applies_to: MlAppliesTo.describe('Specifies the result property to which the condition applies. If your detector uses `lat_long`, `metric`, `rare`, or `freq_rare` functions, you can only specify conditions that apply to time.'),
  operator: MlConditionOperator.describe('Specifies the condition operator. The available options are greater than, greater than or equals, less than, and less than or equals.'),
  value: z.lazy(() => double).describe('The value that is compared against the `applies_to` field using the operator.')
}).meta({ id: 'MlRuleCondition' })
export type MlRuleCondition = z.infer<typeof MlRuleCondition>

export const MlFilterType = z.enum(['include', 'exclude']).meta({ id: 'MlFilterType' })
export type MlFilterType = z.infer<typeof MlFilterType>

export const MlFilterRef = z.object({
  filter_id: z.lazy(() => Id).describe('The identifier for the filter.'),
  filter_type: MlFilterType.describe('If set to `include`, the rule applies for values in the filter. If set to `exclude`, the rule applies for values not in the filter.').optional()
}).meta({ id: 'MlFilterRef' })
export type MlFilterRef = z.infer<typeof MlFilterRef>

export const MlDetectionRule = z.object({
  actions: z.array(MlRuleAction).describe('The set of actions to be triggered when the rule applies. If more than one action is specified the effects of all actions are combined.').optional(),
  conditions: z.array(MlRuleCondition).describe('An array of numeric conditions when the rule applies. A rule must either have a non-empty scope or at least one condition. Multiple conditions are combined together with a logical AND.').optional(),
  scope: z.record(z.lazy(() => Field), MlFilterRef).describe('A scope of series where the rule applies. A rule must either have a non-empty scope or at least one condition. By default, the scope includes all series. Scoping is allowed for any of the fields that are also specified in `by_field_name`, `over_field_name`, or `partition_field_name`.').optional()
}).meta({ id: 'MlDetectionRule' })
export type MlDetectionRule = z.infer<typeof MlDetectionRule>

export const MlAnalysisConfig = z.object({
  bucket_span: z.lazy(() => Duration).describe('The size of the interval that the analysis is aggregated into, typically between `5m` and `1h`. This value should be either a whole number of days or equate to a whole number of buckets in one day. If the anomaly detection job uses a datafeed with aggregations, this value must also be divisible by the interval of the date histogram aggregation.').optional(),
  categorization_analyzer: z.lazy(() => MlCategorizationAnalyzer).describe('If `categorization_field_name` is specified, you can also define the analyzer that is used to interpret the categorization field. This property cannot be used at the same time as `categorization_filters`. The categorization analyzer specifies how the `categorization_field` is interpreted by the categorization process. The `categorization_analyzer` field can be specified either as a string or as an object. If it is a string, it must refer to a built-in analyzer or one added by another plugin.').optional(),
  categorization_field_name: z.lazy(() => Field).describe('If this property is specified, the values of the specified field will be categorized. The resulting categories must be used in a detector by setting `by_field_name`, `over_field_name`, or `partition_field_name` to the keyword `mlcategory`.').optional(),
  categorization_filters: z.array(z.string()).describe('If `categorization_field_name` is specified, you can also define optional filters. This property expects an array of regular expressions. The expressions are used to filter out matching sequences from the categorization field values. You can use this functionality to fine tune the categorization by excluding sequences from consideration when categories are defined. For example, you can exclude SQL statements that appear in your log files. This property cannot be used at the same time as `categorization_analyzer`. If you only want to define simple regular expression filters that are applied prior to tokenization, setting this property is the easiest method. If you also want to customize the tokenizer or post-tokenization filtering, use the `categorization_analyzer` property instead and include the filters as pattern_replace character filters. The effect is exactly the same.').optional(),
  detectors: z.array(z.lazy(() => MlDetector)).describe('Detector configuration objects specify which data fields a job analyzes. They also specify which analytical functions are used. You can specify multiple detectors for a job. If the detectors array does not contain at least one detector, no analysis can occur and an error is returned.'),
  influencers: z.array(z.lazy(() => Field)).describe('A comma separated list of influencer field names. Typically these can be the by, over, or partition fields that are used in the detector configuration. You might also want to use a field name that is not specifically named in a detector, but is available as part of the input data. When you use multiple detectors, the use of influencers is recommended as it aggregates results for each influencer entity.').optional(),
  latency: z.lazy(() => Duration).describe('The size of the window in which to expect data that is out of time order. If you specify a non-zero value, it must be greater than or equal to one second. NOTE: Latency is applicable only when you send data by using the post data API.').optional(),
  model_prune_window: z.lazy(() => Duration).describe('Advanced configuration option. Affects the pruning of models that have not been updated for the given time duration. The value must be set to a multiple of the `bucket_span`. If set too low, important information may be removed from the model. For jobs created in 8.1 and later, the default value is the greater of `30d` or 20 times `bucket_span`.').optional(),
  multivariate_by_fields: z.boolean().describe('This functionality is reserved for internal use. It is not supported for use in customer environments and is not subject to the support SLA of official GA features. If set to `true`, the analysis will automatically find correlations between metrics for a given by field value and report anomalies when those correlations cease to hold. For example, suppose CPU and memory usage on host A is usually highly correlated with the same metrics on host B. Perhaps this correlation occurs because they are running a load-balanced application. If you enable this property, anomalies will be reported when, for example, CPU usage on host A is high and the value of CPU usage on host B is low. That is to say, you’ll see an anomaly when the CPU of host A is unusual given the CPU of host B. To use the `multivariate_by_fields` property, you must also specify `by_field_name` in your detector.').optional(),
  per_partition_categorization: z.lazy(() => MlPerPartitionCategorization).describe('Settings related to how categorization interacts with partition fields.').optional(),
  summary_count_field_name: z.lazy(() => Field).describe('If this property is specified, the data that is fed to the job is expected to be pre-summarized. This property value is the name of the field that contains the count of raw data points that have been summarized. The same `summary_count_field_name` applies to all detectors in the job. NOTE: The `summary_count_field_name` property cannot be used with the `metric` function.').optional()
}).meta({ id: 'MlAnalysisConfig' })
export type MlAnalysisConfig = z.infer<typeof MlAnalysisConfig>

export const MlDetectorRead = z.object({
  function: z.string().describe('The analysis function that is used. For example, `count`, `rare`, `mean`, `min`, `max`, or `sum`.'),
  by_field_name: z.lazy(() => Field).describe('The field used to split the data. In particular, this property is used for analyzing the splits with respect to their own history. It is used for finding unusual values in the context of the split.').optional(),
  custom_rules: z.array(z.lazy(() => MlDetectionRule)).describe('Custom rules enable you to customize the way detectors operate. For example, a rule may dictate conditions under which results should be skipped. Kibana refers to custom rules as job rules.').optional(),
  detector_description: z.string().describe('A description of the detector.').optional(),
  detector_index: z.lazy(() => integer).describe('A unique identifier for the detector. This identifier is based on the order of the detectors in the `analysis_config`, starting at zero. If you specify a value for this property, it is ignored.').optional(),
  exclude_frequent: z.lazy(() => MlExcludeFrequent).describe('If set, frequent entities are excluded from influencing the anomaly results. Entities can be considered frequent over time or frequent in a population. If you are working with both over and by fields, you can set `exclude_frequent` to `all` for both fields, or to `by` or `over` for those specific fields.').optional(),
  field_name: z.lazy(() => Field).describe('The field that the detector uses in the function. If you use an event rate function such as count or rare, do not specify this field. The `field_name` cannot contain double quotes or backslashes.').optional(),
  over_field_name: z.lazy(() => Field).describe('The field used to split the data. In particular, this property is used for analyzing the splits with respect to the history of all splits. It is used for finding unusual values in the population of all splits.').optional(),
  partition_field_name: z.lazy(() => Field).describe('The field used to segment the analysis. When you use this property, you have completely independent baselines for each value of this field.').optional(),
  use_null: z.boolean().describe('Defines whether a new series is used as the null series when there is no value for the by or partition fields.').optional()
}).meta({ id: 'MlDetectorRead' })
export type MlDetectorRead = z.infer<typeof MlDetectorRead>

export const MlAnalysisConfigRead = z.object({
  bucket_span: z.lazy(() => Duration).describe('The size of the interval that the analysis is aggregated into, typically between `5m` and `1h`. This value should be either a whole number of days or equate to a whole number of buckets in one day. If the anomaly detection job uses a datafeed with aggregations, this value must also be divisible by the interval of the date histogram aggregation.'),
  detectors: z.array(MlDetectorRead).describe('Detector configuration objects specify which data fields a job analyzes. They also specify which analytical functions are used. You can specify multiple detectors for a job. If the detectors array does not contain at least one detector, no analysis can occur and an error is returned.'),
  influencers: z.array(z.lazy(() => Field)).describe('A comma separated list of influencer field names. Typically these can be the by, over, or partition fields that are used in the detector configuration. You might also want to use a field name that is not specifically named in a detector, but is available as part of the input data. When you use multiple detectors, the use of influencers is recommended as it aggregates results for each influencer entity.'),
  categorization_analyzer: z.lazy(() => MlCategorizationAnalyzer).describe('If `categorization_field_name` is specified, you can also define the analyzer that is used to interpret the categorization field. This property cannot be used at the same time as `categorization_filters`. The categorization analyzer specifies how the `categorization_field` is interpreted by the categorization process. The `categorization_analyzer` field can be specified either as a string or as an object. If it is a string, it must refer to a built-in analyzer or one added by another plugin.').optional(),
  categorization_field_name: z.lazy(() => Field).describe('If this property is specified, the values of the specified field will be categorized. The resulting categories must be used in a detector by setting `by_field_name`, `over_field_name`, or `partition_field_name` to the keyword `mlcategory`.').optional(),
  categorization_filters: z.array(z.string()).describe('If `categorization_field_name` is specified, you can also define optional filters. This property expects an array of regular expressions. The expressions are used to filter out matching sequences from the categorization field values. You can use this functionality to fine tune the categorization by excluding sequences from consideration when categories are defined. For example, you can exclude SQL statements that appear in your log files. This property cannot be used at the same time as `categorization_analyzer`. If you only want to define simple regular expression filters that are applied prior to tokenization, setting this property is the easiest method. If you also want to customize the tokenizer or post-tokenization filtering, use the `categorization_analyzer` property instead and include the filters as pattern_replace character filters. The effect is exactly the same.').optional(),
  latency: z.lazy(() => Duration).describe('The size of the window in which to expect data that is out of time order. If you specify a non-zero value, it must be greater than or equal to one second. NOTE: Latency is applicable only when you send data by using the post data API.').optional(),
  model_prune_window: z.lazy(() => Duration).describe('Advanced configuration option. Affects the pruning of models that have not been updated for the given time duration. The value must be set to a multiple of the `bucket_span`. If set too low, important information may be removed from the model. For jobs created in 8.1 and later, the default value is the greater of `30d` or 20 times `bucket_span`.').optional(),
  multivariate_by_fields: z.boolean().describe('This functionality is reserved for internal use. It is not supported for use in customer environments and is not subject to the support SLA of official GA features. If set to `true`, the analysis will automatically find correlations between metrics for a given by field value and report anomalies when those correlations cease to hold. For example, suppose CPU and memory usage on host A is usually highly correlated with the same metrics on host B. Perhaps this correlation occurs because they are running a load-balanced application. If you enable this property, anomalies will be reported when, for example, CPU usage on host A is high and the value of CPU usage on host B is low. That is to say, you’ll see an anomaly when the CPU of host A is unusual given the CPU of host B. To use the `multivariate_by_fields` property, you must also specify `by_field_name` in your detector.').optional(),
  per_partition_categorization: z.lazy(() => MlPerPartitionCategorization).describe('Settings related to how categorization interacts with partition fields.').optional(),
  summary_count_field_name: z.lazy(() => Field).describe('If this property is specified, the data that is fed to the job is expected to be pre-summarized. This property value is the name of the field that contains the count of raw data points that have been summarized. The same `summary_count_field_name` applies to all detectors in the job. NOTE: The `summary_count_field_name` property cannot be used with the `metric` function.').optional()
}).meta({ id: 'MlAnalysisConfigRead' })
export type MlAnalysisConfigRead = z.infer<typeof MlAnalysisConfigRead>

export const MlAnalysisLimits = z.object({
  categorization_examples_limit: z.lazy(() => long).describe('The maximum number of examples stored per category in memory and in the results data store. If you increase this value, more examples are available, however it requires that you have more storage available. If you set this value to 0, no examples are stored. NOTE: The `categorization_examples_limit` applies only to analysis that uses categorization.').optional(),
  model_memory_limit: z.lazy(() => ByteSize).describe('The approximate maximum amount of memory resources that are required for analytical processing. Once this limit is approached, data pruning becomes more aggressive. Upon exceeding this limit, new entities are not modeled. If the `xpack.ml.max_model_memory_limit` setting has a value greater than 0 and less than 1024mb, that value is used instead of the default. The default value is relatively small to ensure that high resource usage is a conscious decision. If you have jobs that are expected to analyze high cardinality fields, you will likely need to use a higher value. If you specify a number instead of a string, the units are assumed to be MiB. Specifying a string is recommended for clarity. If you specify a byte size unit of `b` or `kb` and the number does not equate to a discrete number of megabytes, it is rounded down to the closest MiB. The minimum valid value is 1 MiB. If you specify a value less than 1 MiB, an error occurs. If you specify a value for the `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create jobs that have `model_memory_limit` values greater than that setting value.').optional()
}).meta({ id: 'MlAnalysisLimits' })
export type MlAnalysisLimits = z.infer<typeof MlAnalysisLimits>

export const MlApiKeyAuthorization = z.object({
  id: z.string().describe('The identifier for the API key.'),
  name: z.string().describe('The name of the API key.')
}).meta({ id: 'MlApiKeyAuthorization' })
export type MlApiKeyAuthorization = z.infer<typeof MlApiKeyAuthorization>

export const MlCalendarEvent = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.').optional(),
  event_id: z.lazy(() => Id).optional(),
  description: z.string().describe('A description of the scheduled event.'),
  end_time: z.lazy(() => DateTime).describe('The timestamp for the end of the scheduled event in milliseconds since the epoch or ISO 8601 format.'),
  start_time: z.lazy(() => DateTime).describe('The timestamp for the beginning of the scheduled event in milliseconds since the epoch or ISO 8601 format.'),
  skip_result: z.boolean().describe('When true the model will not create results for this calendar period.').optional(),
  skip_model_update: z.boolean().describe('When true the model will not be updated for this calendar period.').optional(),
  force_time_shift: z.lazy(() => integer).describe('Shift time by this many seconds. For example adjust time for daylight savings changes').optional()
}).meta({ id: 'MlCalendarEvent' })
export type MlCalendarEvent = z.infer<typeof MlCalendarEvent>

export const MlChunkingMode = z.enum(['auto', 'manual', 'off']).meta({ id: 'MlChunkingMode' })
export type MlChunkingMode = z.infer<typeof MlChunkingMode>

export const MlChunkingConfig = z.object({
  mode: MlChunkingMode.describe('If the mode is `auto`, the chunk size is dynamically calculated; this is the recommended value when the datafeed does not use aggregations. If the mode is `manual`, chunking is applied according to the specified `time_span`; use this mode when the datafeed uses aggregations. If the mode is `off`, no chunking is applied.'),
  time_span: z.lazy(() => Duration).describe('The time span that each search will be querying. This setting is applicable only when the `mode` is set to `manual`.').optional()
}).meta({ id: 'MlChunkingConfig' })
export type MlChunkingConfig = z.infer<typeof MlChunkingConfig>

export const MlDataDescription = z.object({
  format: z.string().describe('Only JSON format is supported at this time.').optional(),
  time_field: z.lazy(() => Field).describe('The name of the field that contains the timestamp.').optional(),
  time_format: z.string().describe('The time format, which can be `epoch`, `epoch_ms`, or a custom pattern. The value `epoch` refers to UNIX or Epoch time (the number of seconds since 1 Jan 1970). The value `epoch_ms` indicates that time is measured in milliseconds since the epoch. The `epoch` and `epoch_ms` time formats accept either integer or real values. Custom patterns must conform to the Java DateTimeFormatter class. When you use date-time formatting patterns, it is recommended that you provide the full date, time and time zone. For example: `yyyy-MM-dd\'T\'HH:mm:ssX`. If the pattern that you specify is not sufficient to produce a complete timestamp, job creation fails.').optional(),
  field_delimiter: z.string().optional()
}).meta({ id: 'MlDataDescription' })
export type MlDataDescription = z.infer<typeof MlDataDescription>

export const MlDatafeedAuthorization = z.object({
  api_key: MlApiKeyAuthorization.describe('If an API key was used for the most recent update to the datafeed, its name and identifier are listed in the response.').optional(),
  roles: z.array(z.string()).describe('If a user ID was used for the most recent update to the datafeed, its roles at the time of the update are listed in the response.').optional(),
  service_account: z.string().describe('If a service account was used for the most recent update to the datafeed, the account name is listed in the response.').optional()
}).meta({ id: 'MlDatafeedAuthorization' })
export type MlDatafeedAuthorization = z.infer<typeof MlDatafeedAuthorization>

export const MlDelayedDataCheckConfig = z.object({
  check_window: z.lazy(() => Duration).describe('The window of time that is searched for late data. This window of time ends with the latest finalized bucket. It defaults to null, which causes an appropriate `check_window` to be calculated when the real-time datafeed runs. In particular, the default `check_window` span calculation is based on the maximum of `2h` or `8 * bucket_span`.').optional(),
  enabled: z.boolean().describe('Specifies whether the datafeed periodically checks for delayed data.')
}).meta({ id: 'MlDelayedDataCheckConfig' })
export type MlDelayedDataCheckConfig = z.infer<typeof MlDelayedDataCheckConfig>

export const MlDatafeed = z.object({
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).optional(),
  aggs: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).optional(),
  authorization: MlDatafeedAuthorization.describe('The security privileges that the datafeed uses to run its queries. If Elastic Stack security features were disabled at the time of the most recent update to the datafeed, this property is omitted.').optional(),
  chunking_config: MlChunkingConfig.optional(),
  datafeed_id: z.lazy(() => Id),
  frequency: z.lazy(() => Duration).describe('The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. For example: `150s`. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.').optional(),
  indices: z.array(z.string()),
  indexes: z.array(z.string()).optional(),
  job_id: z.lazy(() => Id),
  max_empty_searches: z.lazy(() => integer).optional(),
  query: z.lazy(() => QueryDslQueryContainer),
  query_delay: z.lazy(() => Duration).optional(),
  script_fields: z.record(z.string(), z.lazy(() => ScriptField)).optional(),
  scroll_size: z.lazy(() => integer).optional(),
  delayed_data_check_config: MlDelayedDataCheckConfig,
  runtime_mappings: z.lazy(() => MappingRuntimeFields).optional(),
  indices_options: z.lazy(() => IndicesOptions).optional()
}).meta({ id: 'MlDatafeed' })
export type MlDatafeed = z.infer<typeof MlDatafeed>

export const MlDatafeedConfig = z.object({
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data.').optional(),
  aggs: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data.').optional(),
  chunking_config: MlChunkingConfig.describe('Datafeeds might be required to search over long time periods, for several months or years. This search is split into time chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of these time chunks are calculated and is an advanced configuration option.').optional(),
  datafeed_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. The default value is the job identifier.').optional(),
  delayed_data_check_config: MlDelayedDataCheckConfig.describe('Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally search over indices that have already been read in an effort to determine whether any data has subsequently been added to the index. If missing data is found, it is a good indication that the `query_delay` option is set too low and the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time datafeeds.').optional(),
  frequency: z.lazy(() => Duration).describe('The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. For example: `150s`. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.').optional(),
  indices: z.lazy(() => Indices).describe('An array of index names. Wildcards are supported. If any indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role.').optional(),
  indexes: z.lazy(() => Indices).describe('An array of index names. Wildcards are supported. If any indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role.').optional(),
  indices_options: z.lazy(() => IndicesOptions).describe('Specifies index expansion options that are used during search.').optional(),
  job_id: z.lazy(() => Id).optional(),
  max_empty_searches: z.lazy(() => integer).describe('If a real-time datafeed has never seen any data (including during any initial training period) then it will automatically stop itself and close its associated job after this many real-time searches that return no documents. In other words, it will stop after `frequency` times `max_empty_searches` of real-time operation. If not set then a datafeed with no end time that sees no data will remain started until it is explicitly stopped.').optional(),
  query: z.lazy(() => QueryDslQueryContainer).describe('The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch.').optional(),
  query_delay: z.lazy(() => Duration).describe('The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default value is randomly selected between `60s` and `120s`. This randomness improves the query performance when there are multiple jobs running on the same node.').optional(),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).describe('Specifies runtime fields for the datafeed search.').optional(),
  script_fields: z.record(z.string(), z.lazy(() => ScriptField)).describe('Specifies scripts that evaluate custom expressions and returns script fields to the datafeed. The detector configuration objects in a job can contain functions that use these script fields.').optional(),
  scroll_size: z.lazy(() => integer).describe('The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations. The maximum value is the value of `index.max_result_window`, which is 10,000 by default.').optional()
}).meta({ id: 'MlDatafeedConfig' })
export type MlDatafeedConfig = z.infer<typeof MlDatafeedConfig>

/** Alternative representation of DiscoveryNode used in ml.get_job_stats and ml.get_datafeed_stats */
export const MlDiscoveryNodeCompact = z.object({
  name: z.lazy(() => Name),
  ephemeral_id: z.lazy(() => Id),
  id: z.lazy(() => Id),
  transport_address: z.lazy(() => TransportAddress),
  attributes: z.record(z.string(), z.string())
}).meta({ id: 'MlDiscoveryNodeCompact' })
export type MlDiscoveryNodeCompact = z.infer<typeof MlDiscoveryNodeCompact>

export const MlDataframeAnalysisFeatureProcessorFrequencyEncoding = z.object({
  feature_name: z.lazy(() => Name).describe('The resulting feature name.'),
  field: z.lazy(() => Field),
  frequency_map: z.record(z.string(), z.lazy(() => double)).describe('The resulting frequency map for the field value. If the field value is missing from the frequency_map, the resulting value is 0.')
}).meta({ id: 'MlDataframeAnalysisFeatureProcessorFrequencyEncoding' })
export type MlDataframeAnalysisFeatureProcessorFrequencyEncoding = z.infer<typeof MlDataframeAnalysisFeatureProcessorFrequencyEncoding>

export const MlDataframeAnalysisFeatureProcessorMultiEncoding = z.object({
  processors: z.array(z.lazy(() => integer)).describe('The ordered array of custom processors to execute. Must be more than 1.')
}).meta({ id: 'MlDataframeAnalysisFeatureProcessorMultiEncoding' })
export type MlDataframeAnalysisFeatureProcessorMultiEncoding = z.infer<typeof MlDataframeAnalysisFeatureProcessorMultiEncoding>

export const MlDataframeAnalysisFeatureProcessorNGramEncoding = z.object({
  feature_prefix: z.string().describe('The feature name prefix. Defaults to ngram_<start>_<length>.').optional(),
  field: z.lazy(() => Field).describe('The name of the text field to encode.'),
  length: z.lazy(() => integer).describe('Specifies the length of the n-gram substring. Defaults to 50. Must be greater than 0.').optional(),
  n_grams: z.array(z.lazy(() => integer)).describe('Specifies which n-grams to gather. It’s an array of integer values where the minimum value is 1, and a maximum value is 5.'),
  start: z.lazy(() => integer).describe('Specifies the zero-indexed start of the n-gram substring. Negative values are allowed for encoding n-grams of string suffixes. Defaults to 0.').optional(),
  custom: z.boolean().optional()
}).meta({ id: 'MlDataframeAnalysisFeatureProcessorNGramEncoding' })
export type MlDataframeAnalysisFeatureProcessorNGramEncoding = z.infer<typeof MlDataframeAnalysisFeatureProcessorNGramEncoding>

export const MlDataframeAnalysisFeatureProcessorOneHotEncoding = z.object({
  field: z.lazy(() => Field).describe('The name of the field to encode.'),
  hot_map: z.string().describe('The one hot map mapping the field value with the column name.')
}).meta({ id: 'MlDataframeAnalysisFeatureProcessorOneHotEncoding' })
export type MlDataframeAnalysisFeatureProcessorOneHotEncoding = z.infer<typeof MlDataframeAnalysisFeatureProcessorOneHotEncoding>

export const MlDataframeAnalysisFeatureProcessorTargetMeanEncoding = z.object({
  default_value: z.lazy(() => integer).describe('The default value if field value is not found in the target_map.'),
  feature_name: z.lazy(() => Name).describe('The resulting feature name.'),
  field: z.lazy(() => Field).describe('The name of the field to encode.'),
  target_map: z.record(z.string(), z.any()).describe('The field value to target mean transition map.')
}).meta({ id: 'MlDataframeAnalysisFeatureProcessorTargetMeanEncoding' })
export type MlDataframeAnalysisFeatureProcessorTargetMeanEncoding = z.infer<typeof MlDataframeAnalysisFeatureProcessorTargetMeanEncoding>

const MlDataframeAnalysisFeatureProcessorExclusiveProps = z.union([z.object({ frequency_encoding: MlDataframeAnalysisFeatureProcessorFrequencyEncoding }), z.object({ multi_encoding: MlDataframeAnalysisFeatureProcessorMultiEncoding }), z.object({ n_gram_encoding: MlDataframeAnalysisFeatureProcessorNGramEncoding }), z.object({ one_hot_encoding: MlDataframeAnalysisFeatureProcessorOneHotEncoding }), z.object({ target_mean_encoding: MlDataframeAnalysisFeatureProcessorTargetMeanEncoding })])

export const MlDataframeAnalysisFeatureProcessor = MlDataframeAnalysisFeatureProcessorExclusiveProps.meta({ id: 'MlDataframeAnalysisFeatureProcessor' })
export type MlDataframeAnalysisFeatureProcessor = z.infer<typeof MlDataframeAnalysisFeatureProcessor>

export const MlDataframeAnalysis = z.object({
  alpha: z.lazy(() => double).describe('Advanced configuration option. Machine learning uses loss guided tree growing, which means that the decision trees grow where the regularized loss decreases most quickly. This parameter affects loss calculations by acting as a multiplier of the tree depth. Higher alpha values result in shallower trees and faster training times. By default, this value is calculated during hyperparameter optimization. It must be greater than or equal to zero.').optional(),
  dependent_variable: z.string().describe('Defines which field of the document is to be predicted. It must match one of the fields in the index being used to train. If this field is missing from a document, then that document will not be used for training, but a prediction with the trained model will be generated for it. It is also known as continuous target variable. For classification analysis, the data type of the field must be numeric (`integer`, `short`, `long`, `byte`), categorical (`ip` or `keyword`), or `boolean`. There must be no more than 30 different values in this field. For regression analysis, the data type of the field must be numeric.'),
  downsample_factor: z.lazy(() => double).describe('Advanced configuration option. Controls the fraction of data that is used to compute the derivatives of the loss function for tree training. A small value results in the use of a small fraction of the data. If this value is set to be less than 1, accuracy typically improves. However, too small a value may result in poor convergence for the ensemble and so require more trees. By default, this value is calculated during hyperparameter optimization. It must be greater than zero and less than or equal to 1.').optional(),
  early_stopping_enabled: z.boolean().describe('Advanced configuration option. Specifies whether the training process should finish if it is not finding any better performing models. If disabled, the training process can take significantly longer and the chance of finding a better performing model is unremarkable.').optional(),
  eta: z.lazy(() => double).describe('Advanced configuration option. The shrinkage applied to the weights. Smaller values result in larger forests which have a better generalization error. However, larger forests cause slower training. By default, this value is calculated during hyperparameter optimization. It must be a value between 0.001 and 1.').optional(),
  eta_growth_rate_per_tree: z.lazy(() => double).describe('Advanced configuration option. Specifies the rate at which `eta` increases for each new tree that is added to the forest. For example, a rate of 1.05 increases `eta` by 5% for each extra tree. By default, this value is calculated during hyperparameter optimization. It must be between 0.5 and 2.').optional(),
  feature_bag_fraction: z.lazy(() => double).describe('Advanced configuration option. Defines the fraction of features that will be used when selecting a random bag for each candidate split. By default, this value is calculated during hyperparameter optimization.').optional(),
  feature_processors: z.array(MlDataframeAnalysisFeatureProcessor).describe('Advanced configuration option. A collection of feature preprocessors that modify one or more included fields. The analysis uses the resulting one or more features instead of the original document field. However, these features are ephemeral; they are not stored in the destination index. Multiple `feature_processors` entries can refer to the same document fields. Automatic categorical feature encoding still occurs for the fields that are unprocessed by a custom processor or that have categorical values. Use this property only if you want to override the automatic feature encoding of the specified fields.').optional(),
  gamma: z.lazy(() => double).describe('Advanced configuration option. Regularization parameter to prevent overfitting on the training data set. Multiplies a linear penalty associated with the size of individual trees in the forest. A high gamma value causes training to prefer small trees. A small gamma value results in larger individual trees and slower training. By default, this value is calculated during hyperparameter optimization. It must be a nonnegative value.').optional(),
  lambda: z.lazy(() => double).describe('Advanced configuration option. Regularization parameter to prevent overfitting on the training data set. Multiplies an L2 regularization term which applies to leaf weights of the individual trees in the forest. A high lambda value causes training to favor small leaf weights. This behavior makes the prediction function smoother at the expense of potentially not being able to capture relevant relationships between the features and the dependent variable. A small lambda value results in large individual trees and slower training. By default, this value is calculated during hyperparameter optimization. It must be a nonnegative value.').optional(),
  max_optimization_rounds_per_hyperparameter: z.lazy(() => integer).describe('Advanced configuration option. A multiplier responsible for determining the maximum number of hyperparameter optimization steps in the Bayesian optimization procedure. The maximum number of steps is determined based on the number of undefined hyperparameters times the maximum optimization rounds per hyperparameter. By default, this value is calculated during hyperparameter optimization.').optional(),
  max_trees: z.lazy(() => integer).describe('Advanced configuration option. Defines the maximum number of decision trees in the forest. The maximum value is 2000. By default, this value is calculated during hyperparameter optimization.').optional(),
  maximum_number_trees: z.lazy(() => integer).describe('Advanced configuration option. Defines the maximum number of decision trees in the forest. The maximum value is 2000. By default, this value is calculated during hyperparameter optimization.').optional(),
  num_top_feature_importance_values: z.lazy(() => integer).describe('Advanced configuration option. Specifies the maximum number of feature importance values per document to return. By default, no feature importance calculation occurs.').optional(),
  prediction_field_name: z.lazy(() => Field).describe('Defines the name of the prediction field in the results. Defaults to `<dependent_variable>_prediction`.').optional(),
  randomize_seed: z.lazy(() => double).describe('Defines the seed for the random generator that is used to pick training data. By default, it is randomly generated. Set it to a specific value to use the same training data each time you start a job (assuming other related parameters such as `source` and `analyzed_fields` are the same).').optional(),
  soft_tree_depth_limit: z.lazy(() => integer).describe('Advanced configuration option. Machine learning uses loss guided tree growing, which means that the decision trees grow where the regularized loss decreases most quickly. This soft limit combines with the `soft_tree_depth_tolerance` to penalize trees that exceed the specified depth; the regularized loss increases quickly beyond this depth. By default, this value is calculated during hyperparameter optimization. It must be greater than or equal to 0.').optional(),
  soft_tree_depth_tolerance: z.lazy(() => double).describe('Advanced configuration option. This option controls how quickly the regularized loss increases when the tree depth exceeds `soft_tree_depth_limit`. By default, this value is calculated during hyperparameter optimization. It must be greater than or equal to 0.01.').optional(),
  training_percent: z.lazy(() => Percentage).describe('Defines what percentage of the eligible documents that will be used for training. Documents that are ignored by the analysis (for example those that contain arrays with more than one value) won’t be included in the calculation for used percentage.').optional()
}).meta({ id: 'MlDataframeAnalysis' })
export type MlDataframeAnalysis = z.infer<typeof MlDataframeAnalysis>

export const MlDataframeAnalysisAnalyzedFields = z.object({
  includes: z.array(z.string()).describe('An array of strings that defines the fields that will be excluded from the analysis. You do not need to add fields with unsupported data types to excludes, these fields are excluded from the analysis automatically.').optional(),
  excludes: z.array(z.string()).describe('An array of strings that defines the fields that will be included in the analysis.').optional()
}).meta({ id: 'MlDataframeAnalysisAnalyzedFields' })
export type MlDataframeAnalysisAnalyzedFields = z.infer<typeof MlDataframeAnalysisAnalyzedFields>

export const MlDataframeAnalysisClassification = z.object({
  ...MlDataframeAnalysis.shape,
  class_assignment_objective: z.string().optional(),
  num_top_classes: z.lazy(() => integer).describe('Defines the number of categories for which the predicted probabilities are reported. It must be non-negative or -1. If it is -1 or greater than the total number of categories, probabilities are reported for all categories; if you have a large number of categories, there could be a significant effect on the size of your destination index. NOTE: To use the AUC ROC evaluation method, `num_top_classes` must be set to -1 or a value greater than or equal to the total number of categories.').optional()
}).meta({ id: 'MlDataframeAnalysisClassification' })
export type MlDataframeAnalysisClassification = z.infer<typeof MlDataframeAnalysisClassification>

export const MlDataframeAnalysisOutlierDetection = z.object({
  compute_feature_influence: z.boolean().describe('Specifies whether the feature influence calculation is enabled.').optional(),
  feature_influence_threshold: z.lazy(() => double).describe('The minimum outlier score that a document needs to have in order to calculate its feature influence score. Value range: 0-1.').optional(),
  method: z.string().describe('The method that outlier detection uses. Available methods are `lof`, `ldof`, `distance_kth_nn`, `distance_knn`, and `ensemble`. The default value is ensemble, which means that outlier detection uses an ensemble of different methods and normalises and combines their individual outlier scores to obtain the overall outlier score.').optional(),
  n_neighbors: z.lazy(() => integer).describe('Defines the value for how many nearest neighbors each method of outlier detection uses to calculate its outlier score. When the value is not set, different values are used for different ensemble members. This default behavior helps improve the diversity in the ensemble; only override it if you are confident that the value you choose is appropriate for the data set.').optional(),
  outlier_fraction: z.lazy(() => double).describe('The proportion of the data set that is assumed to be outlying prior to outlier detection. For example, 0.05 means it is assumed that 5% of values are real outliers and 95% are inliers.').optional(),
  standardization_enabled: z.boolean().describe('If true, the following operation is performed on the columns before computing outlier scores: `(x_i - mean(x_i)) / sd(x_i)`.').optional()
}).meta({ id: 'MlDataframeAnalysisOutlierDetection' })
export type MlDataframeAnalysisOutlierDetection = z.infer<typeof MlDataframeAnalysisOutlierDetection>

export const MlDataframeAnalysisRegression = z.object({
  ...MlDataframeAnalysis.shape,
  loss_function: z.string().describe('The loss function used during regression. Available options are `mse` (mean squared error), `msle` (mean squared logarithmic error), `huber` (Pseudo-Huber loss).').optional(),
  loss_function_parameter: z.lazy(() => double).describe('A positive number that is used as a parameter to the `loss_function`.').optional()
}).meta({ id: 'MlDataframeAnalysisRegression' })
export type MlDataframeAnalysisRegression = z.infer<typeof MlDataframeAnalysisRegression>

const MlDataframeAnalysisContainerExclusiveProps = z.union([z.object({ classification: MlDataframeAnalysisClassification }), z.object({ outlier_detection: MlDataframeAnalysisOutlierDetection }), z.object({ regression: MlDataframeAnalysisRegression })])

export const MlDataframeAnalysisContainer = MlDataframeAnalysisContainerExclusiveProps.meta({ id: 'MlDataframeAnalysisContainer' })
export type MlDataframeAnalysisContainer = z.infer<typeof MlDataframeAnalysisContainer>

export const MlDataframeAnalyticsAuthorization = z.object({
  api_key: MlApiKeyAuthorization.describe('If an API key was used for the most recent update to the job, its name and identifier are listed in the response.').optional(),
  roles: z.array(z.string()).describe('If a user ID was used for the most recent update to the job, its roles at the time of the update are listed in the response.').optional(),
  service_account: z.string().describe('If a service account was used for the most recent update to the job, the account name is listed in the response.').optional()
}).meta({ id: 'MlDataframeAnalyticsAuthorization' })
export type MlDataframeAnalyticsAuthorization = z.infer<typeof MlDataframeAnalyticsAuthorization>

export const MlDataframeAnalyticsDestination = z.object({
  index: z.lazy(() => IndexName).describe('Defines the destination index to store the results of the data frame analytics job.'),
  results_field: z.lazy(() => Field).describe('Defines the name of the field in which to store the results of the analysis. Defaults to `ml`.').optional()
}).meta({ id: 'MlDataframeAnalyticsDestination' })
export type MlDataframeAnalyticsDestination = z.infer<typeof MlDataframeAnalyticsDestination>

export const MlDataframeAnalyticsSource = z.object({
  index: z.lazy(() => Indices).describe('Index or indices on which to perform the analysis. It can be a single index or index pattern as well as an array of indices or patterns. NOTE: If your source indices contain documents with the same IDs, only the document that is indexed last appears in the destination index.'),
  query: z.lazy(() => QueryDslQueryContainer).describe('The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. By default, this property has the following value: {"match_all": {}}.').optional(),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).describe('Definitions of runtime fields that will become part of the mapping of the destination index.').optional(),
  _source: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).describe('Specify `includes` and/or `excludes patterns to select which fields will be present in the destination. Fields that are excluded cannot be included in the analysis.').optional()
}).meta({ id: 'MlDataframeAnalyticsSource' })
export type MlDataframeAnalyticsSource = z.infer<typeof MlDataframeAnalyticsSource>

export const MlDiscoveryNodeContent = z.object({
  name: z.lazy(() => Name).optional(),
  ephemeral_id: z.lazy(() => Id),
  transport_address: z.lazy(() => TransportAddress),
  external_id: z.string(),
  attributes: z.record(z.string(), z.string()),
  roles: z.array(z.string()),
  version: z.lazy(() => VersionString),
  min_index_version: z.lazy(() => integer),
  max_index_version: z.lazy(() => integer)
}).meta({ id: 'MlDiscoveryNodeContent' })
export type MlDiscoveryNodeContent = z.infer<typeof MlDiscoveryNodeContent>

export const MlDiscoveryNode = z.record(z.lazy(() => Id), MlDiscoveryNodeContent).meta({ id: 'MlDiscoveryNode' })
export type MlDiscoveryNode = z.infer<typeof MlDiscoveryNode>

export const MlHyperparameter = z.object({
  absolute_importance: z.lazy(() => double).describe('A positive number showing how much the parameter influences the variation of the loss function. For hyperparameters with values that are not specified by the user but tuned during hyperparameter optimization.').optional(),
  name: z.lazy(() => Name).describe('Name of the hyperparameter.'),
  relative_importance: z.lazy(() => double).describe('A number between 0 and 1 showing the proportion of influence on the variation of the loss function among all tuned hyperparameters. For hyperparameters with values that are not specified by the user but tuned during hyperparameter optimization.').optional(),
  supplied: z.boolean().describe('Indicates if the hyperparameter is specified by the user (true) or optimized (false).'),
  value: z.lazy(() => double).describe('The value of the hyperparameter, either optimized or specified by the user.')
}).meta({ id: 'MlHyperparameter' })
export type MlHyperparameter = z.infer<typeof MlHyperparameter>

export const MlModelPlotConfig = z.object({
  annotations_enabled: z.boolean().describe('If true, enables calculation and storage of the model change annotations for each entity that is being analyzed.').optional(),
  enabled: z.boolean().describe('If true, enables calculation and storage of the model bounds for each entity that is being analyzed.').optional(),
  terms: z.lazy(() => Field).describe('Limits data collection to this comma separated list of partition or by field values. If terms are not specified or it is an empty string, no filtering is applied. Wildcards are not supported. Only the specified terms can be viewed when using the Single Metric Viewer.').optional()
}).meta({ id: 'MlModelPlotConfig' })
export type MlModelPlotConfig = z.infer<typeof MlModelPlotConfig>

export const MlModelPackageConfig = z.object({
  create_time: z.lazy(() => EpochTime).optional(),
  description: z.string().optional(),
  inference_config: z.record(z.string(), z.any()).optional(),
  metadata: z.lazy(() => Metadata).optional(),
  minimum_version: z.string().optional(),
  model_repository: z.string().optional(),
  model_type: z.string().optional(),
  packaged_model_id: z.lazy(() => Id),
  platform_architecture: z.string().optional(),
  prefix_strings: z.lazy(() => MlTrainedModelPrefixStrings).optional(),
  size: z.lazy(() => ByteSize).optional(),
  sha256: z.string().optional(),
  tags: z.array(z.string()).optional(),
  vocabulary_file: z.string().optional()
}).meta({ id: 'MlModelPackageConfig' })
export type MlModelPackageConfig = z.infer<typeof MlModelPackageConfig>

export const MlModelSnapshot = z.object({
  description: z.string().describe('An optional description of the job.').optional(),
  job_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the job that the snapshot was created for.'),
  latest_record_time_stamp: z.lazy(() => integer).describe('The timestamp of the latest processed record.').optional(),
  latest_result_time_stamp: z.lazy(() => integer).describe('The timestamp of the latest bucket result.').optional(),
  min_version: z.lazy(() => VersionString).describe('The minimum version required to be able to restore the model snapshot.'),
  model_size_stats: z.lazy(() => MlModelSizeStats).describe('Summary information describing the model.').optional(),
  retain: z.boolean().describe('If true, this snapshot will not be deleted during automatic cleanup of snapshots older than model_snapshot_retention_days. However, this snapshot will be deleted when the job is deleted. The default value is false.'),
  snapshot_doc_count: z.lazy(() => long).describe('For internal use only.'),
  snapshot_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the model snapshot.'),
  timestamp: z.lazy(() => long).describe('The creation timestamp for the snapshot.')
}).meta({ id: 'MlModelSnapshot' })
export type MlModelSnapshot = z.infer<typeof MlModelSnapshot>

export const MlPage = z.object({
  from: z.lazy(() => integer).describe('Skips the specified number of items.').optional(),
  size: z.lazy(() => integer).describe('Specifies the maximum number of items to obtain.').optional()
}).meta({ id: 'MlPage' })
export type MlPage = z.infer<typeof MlPage>

export const MlTotalFeatureImportanceStatistics = z.object({
  mean_magnitude: z.lazy(() => double).describe('The average magnitude of this feature across all the training data. This value is the average of the absolute values of the importance for this feature.'),
  max: z.lazy(() => integer).describe('The maximum importance value across all the training data for this feature.'),
  min: z.lazy(() => integer).describe('The minimum importance value across all the training data for this feature.')
}).meta({ id: 'MlTotalFeatureImportanceStatistics' })
export type MlTotalFeatureImportanceStatistics = z.infer<typeof MlTotalFeatureImportanceStatistics>

export const MlTotalFeatureImportanceClass = z.object({
  class_name: z.lazy(() => Name).describe('The target class value. Could be a string, boolean, or number.'),
  importance: z.array(MlTotalFeatureImportanceStatistics).describe('A collection of feature importance statistics related to the training data set for this particular feature.')
}).meta({ id: 'MlTotalFeatureImportanceClass' })
export type MlTotalFeatureImportanceClass = z.infer<typeof MlTotalFeatureImportanceClass>

export const MlTotalFeatureImportance = z.object({
  feature_name: z.lazy(() => Name).describe('The feature for which this importance was calculated.'),
  importance: z.array(MlTotalFeatureImportanceStatistics).describe('A collection of feature importance statistics related to the training data set for this particular feature.'),
  classes: z.array(MlTotalFeatureImportanceClass).describe('If the trained model is a classification model, feature importance statistics are gathered per target class value.')
}).meta({ id: 'MlTotalFeatureImportance' })
export type MlTotalFeatureImportance = z.infer<typeof MlTotalFeatureImportance>

export const MlTrainedModelAssignmentRoutingTable = z.object({
  reason: z.string().describe('The reason for the current state. It is usually populated only when the `routing_state` is `failed`.').optional(),
  routing_state: z.lazy(() => MlRoutingState).describe('The current routing state.'),
  current_allocations: z.lazy(() => integer).describe('Current number of allocations.'),
  target_allocations: z.lazy(() => integer).describe('Target number of allocations.')
}).meta({ id: 'MlTrainedModelAssignmentRoutingTable' })
export type MlTrainedModelAssignmentRoutingTable = z.infer<typeof MlTrainedModelAssignmentRoutingTable>

export const MlTrainedModelAssignmentTaskParameters = z.object({
  model_bytes: z.lazy(() => ByteSize).describe('The size of the trained model in bytes.'),
  model_id: z.lazy(() => Id).describe('The unique identifier for the trained model.'),
  deployment_id: z.lazy(() => Id).describe('The unique identifier for the trained model deployment.'),
  cache_size: z.lazy(() => ByteSize).describe('The size of the trained model cache.').optional(),
  number_of_allocations: z.lazy(() => integer).describe('The total number of allocations this model is assigned across ML nodes.'),
  priority: z.lazy(() => MlTrainingPriority),
  per_deployment_memory_bytes: z.lazy(() => ByteSize),
  per_allocation_memory_bytes: z.lazy(() => ByteSize),
  queue_capacity: z.lazy(() => integer).describe('Number of inference requests are allowed in the queue at a time.'),
  threads_per_allocation: z.lazy(() => integer).describe('Number of threads per allocation.')
}).meta({ id: 'MlTrainedModelAssignmentTaskParameters' })
export type MlTrainedModelAssignmentTaskParameters = z.infer<typeof MlTrainedModelAssignmentTaskParameters>

export const MlTrainedModelAssignment = z.object({
  adaptive_allocations: z.union([z.lazy(() => MlAdaptiveAllocationsSettings), z.null()]).optional(),
  assignment_state: z.lazy(() => MlDeploymentAssignmentState).describe('The overall assignment state.'),
  max_assigned_allocations: z.lazy(() => integer).optional(),
  reason: z.string().optional(),
  routing_table: z.record(z.string(), MlTrainedModelAssignmentRoutingTable).describe('The allocation state for each node.'),
  start_time: z.lazy(() => DateTime).describe('The timestamp when the deployment started.'),
  task_parameters: MlTrainedModelAssignmentTaskParameters
}).meta({ id: 'MlTrainedModelAssignment' })
export type MlTrainedModelAssignment = z.infer<typeof MlTrainedModelAssignment>

export const MlTrainedModelConfigInput = z.object({
  field_names: z.array(z.lazy(() => Field)).describe('An array of input field names for the model.')
}).meta({ id: 'MlTrainedModelConfigInput' })
export type MlTrainedModelConfigInput = z.infer<typeof MlTrainedModelConfigInput>

export const MlTrainedModelConfigMetadata = z.object({
  model_aliases: z.array(z.string()).optional(),
  feature_importance_baseline: z.record(z.string(), z.string()).describe('An object that contains the baseline for feature importance values. For regression analysis, it is a single value. For classification analysis, there is a value for each class.').optional(),
  hyperparameters: z.array(MlHyperparameter).describe('List of the available hyperparameters optimized during the fine_parameter_tuning phase as well as specified by the user.').optional(),
  total_feature_importance: z.array(MlTotalFeatureImportance).describe('An array of the total feature importance for each feature used from the training data set. This array of objects is returned if data frame analytics trained the model and the request includes total_feature_importance in the include request parameter.').optional()
}).meta({ id: 'MlTrainedModelConfigMetadata' })
export type MlTrainedModelConfigMetadata = z.infer<typeof MlTrainedModelConfigMetadata>

export const MlTrainedModelLocationIndex = z.object({
  name: z.lazy(() => IndexName)
}).meta({ id: 'MlTrainedModelLocationIndex' })
export type MlTrainedModelLocationIndex = z.infer<typeof MlTrainedModelLocationIndex>

export const MlTrainedModelLocation = z.object({
  index: MlTrainedModelLocationIndex
}).meta({ id: 'MlTrainedModelLocation' })
export type MlTrainedModelLocation = z.infer<typeof MlTrainedModelLocation>

export const MlTrainedModelConfig = z.object({
  model_id: z.lazy(() => Id).describe('Identifier for the trained model.'),
  model_type: z.lazy(() => MlTrainedModelType).describe('The model type').optional(),
  tags: z.array(z.string()).describe('A comma delimited string of tags. A trained model can have many tags, or none.'),
  version: z.lazy(() => VersionString).describe('The Elasticsearch version number in which the trained model was created.').optional(),
  compressed_definition: z.string().optional(),
  created_by: z.string().describe('Information on the creator of the trained model.').optional(),
  create_time: z.lazy(() => DateTime).describe('The time when the trained model was created.').optional(),
  default_field_map: z.record(z.string(), z.string()).describe('Any field map described in the inference configuration takes precedence.').optional(),
  description: z.string().describe('The free-text description of the trained model.').optional(),
  estimated_heap_memory_usage_bytes: z.lazy(() => integer).describe('The estimated heap usage in bytes to keep the trained model in memory.').optional(),
  estimated_operations: z.lazy(() => integer).describe('The estimated number of operations to use the trained model.').optional(),
  fully_defined: z.boolean().describe('True if the full model definition is present.').optional(),
  inference_config: z.lazy(() => MlInferenceConfigCreateContainer).describe('The default configuration for inference. This can be either a regression, classification, or one of the many NLP focused configurations. It must match the underlying definition.trained_model\'s target_type. For pre-packaged models such as ELSER the config is not required.').optional(),
  input: MlTrainedModelConfigInput.describe('The input field names for the model definition.'),
  license_level: z.string().describe('The license level of the trained model.').optional(),
  metadata: MlTrainedModelConfigMetadata.describe('An object containing metadata about the trained model. For example, models created by data frame analytics contain analysis_config and input objects.').optional(),
  model_size_bytes: z.lazy(() => ByteSize).optional(),
  model_package: MlModelPackageConfig.optional(),
  location: MlTrainedModelLocation.optional(),
  platform_architecture: z.string().optional(),
  prefix_strings: z.lazy(() => MlTrainedModelPrefixStrings).optional()
}).meta({ id: 'MlTrainedModelConfig' })
export type MlTrainedModelConfig = z.infer<typeof MlTrainedModelConfig>

export const MlTransformAuthorization = z.object({
  api_key: MlApiKeyAuthorization.describe('If an API key was used for the most recent update to the transform, its name and identifier are listed in the response.').optional(),
  roles: z.array(z.string()).describe('If a user ID was used for the most recent update to the transform, its roles at the time of the update are listed in the response.').optional(),
  service_account: z.string().describe('If a service account was used for the most recent update to the transform, the account name is listed in the response.').optional()
}).meta({ id: 'MlTransformAuthorization' })
export type MlTransformAuthorization = z.infer<typeof MlTransformAuthorization>
