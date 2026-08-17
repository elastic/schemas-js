/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Field, GrokPattern, integer } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IngestPipelineConfig } from './ingest.js'
import { TextStructureEcsCompatibilityType, TextStructureFieldStat, TextStructureFormatType } from './text_structure.js'

/**
 * Find the structure of text messages.
 *
 * Find the structure of a list of text messages.
 * The messages must contain data that is suitable to be ingested into Elasticsearch.
 *
 * This API provides a starting point for ingesting data into Elasticsearch in a format that is suitable for subsequent use with other Elastic Stack functionality.
 * Use this API rather than the find text structure API if your input text has already been split up into separate messages by some other process.
 *
 * The response from the API contains:
 *
 * * Sample messages.
 * * Statistics that reveal the most common values for all fields detected within the text and basic numeric statistics for numeric fields.
 * * Information about the structure of the text, which is useful when you write ingest configurations to index it or similarly formatted text.
 * Appropriate mappings for an Elasticsearch index, which you could use to ingest the text.
 *
 * All this information can be calculated by the structure finder with no guidance.
 * However, you can optionally override some of the decisions about the text structure by specifying one or more query parameters.
 *
 * If the structure finder produces unexpected results, specify the `explain` query parameter and an explanation will appear in the response.
 * It helps determine why the returned structure was chosen.
 */
export const TextStructureFindMessageStructureRequest = z.object({
  column_names: z.union([z.string(), z.array(z.string())]).describe('If the format is `delimited`, you can specify the column names in a comma-separated list. If this parameter is not specified, the structure finder uses the column names from the header row of the text. If the text does not have a header role, columns are named "column1", "column2", "column3", for example.').optional().meta({ found_in: 'query' }),
  delimiter: z.string().describe('If you the format is `delimited`, you can specify the character used to delimit the values in each row. Only a single character is supported; the delimiter cannot have multiple characters. By default, the API considers the following possibilities: comma, tab, semi-colon, and pipe (`|`). In this default scenario, all rows must have the same number of fields for the delimited format to be detected. If you specify a delimiter, up to 10% of the rows can have a different number of columns than the first row.').optional().meta({ found_in: 'query' }),
  ecs_compatibility: TextStructureEcsCompatibilityType.describe('The mode of compatibility with ECS compliant Grok patterns. Use this parameter to specify whether to use ECS Grok patterns instead of legacy ones when the structure finder creates a Grok pattern. This setting primarily has an impact when a whole message Grok pattern such as `%{CATALINALOG}` matches the input. If the structure finder identifies a common structure but has no idea of meaning then generic field names such as `path`, `ipaddress`, `field1`, and `field2` are used in the `grok_pattern` output, with the intention that a user who knows the meanings rename these fields before using it.').optional().meta({ found_in: 'query' }),
  explain: z.boolean().describe('If this parameter is set to true, the response includes a field named `explanation`, which is an array of strings that indicate how the structure finder produced its result.').optional().meta({ found_in: 'query' }),
  format: TextStructureFormatType.describe('The high level structure of the text. By default, the API chooses the format. In this default scenario, all rows must have the same number of fields for a delimited format to be detected. If the format is `delimited` and the delimiter is not set, however, the API tolerates up to 5% of rows that have a different number of columns than the first row.').optional().meta({ found_in: 'query' }),
  grok_pattern: z.lazy(() => GrokPattern).describe('If the format is `semi_structured_text`, you can specify a Grok pattern that is used to extract fields from every message in the text. The name of the timestamp field in the Grok pattern must match what is specified in the `timestamp_field` parameter. If that parameter is not specified, the name of the timestamp field in the Grok pattern must match "timestamp". If `grok_pattern` is not specified, the structure finder creates a Grok pattern.').optional().meta({ found_in: 'query' }),
  quote: z.string().describe('If the format is `delimited`, you can specify the character used to quote the values in each row if they contain newlines or the delimiter character. Only a single character is supported. If this parameter is not specified, the default value is a double quote (`"`). If your delimited text format does not use quoting, a workaround is to set this argument to a character that does not appear anywhere in the sample.').optional().meta({ found_in: 'query' }),
  should_trim_fields: z.boolean().describe('If the format is `delimited`, you can specify whether values between delimiters should have whitespace trimmed from them. If this parameter is not specified and the delimiter is pipe (`|`), the default value is true. Otherwise, the default value is `false`.').optional().meta({ found_in: 'query' }),
  should_parse_recursively: z.boolean().describe('If the format is `ndjson`, you can specify whether to parse nested JSON objects recursively. The nested objects are parsed to a maximum depth equal to the default value of the `index.mapping.depth.limit` setting. Anything beyond that depth is parsed as an `object` type field. For formats other than `ndjson`, this parameter is ignored.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The maximum amount of time that the structure analysis can take. If the analysis is still running when the timeout expires, it will be stopped.').optional().meta({ found_in: 'query' }),
  timestamp_field: z.lazy(() => Field).describe('The name of the field that contains the primary timestamp of each record in the text. In particular, if the text was ingested into an index, this is the field that would be used to populate the `@timestamp` field. If the format is `semi_structured_text`, this field must match the name of the appropriate extraction in the `grok_pattern`. Therefore, for semi-structured text, it is best not to specify this parameter unless `grok_pattern` is also specified. For structured text, if you specify this parameter, the field must exist within the text. If this parameter is not specified, the structure finder makes a decision about which field (if any) is the primary timestamp field. For structured text, it is not compulsory to have a timestamp in the text.').optional().meta({ found_in: 'query' }),
  timestamp_format: z.string().describe('The Java time format of the timestamp field in the text. Only a subset of Java time format letter groups are supported: * `a` * `d` * `dd` * `EEE` * `EEEE` * `H` * `HH` * `h` * `M` * `MM` * `MMM` * `MMMM` * `mm` * `ss` * `XX` * `XXX` * `yy` * `yyyy` * `zzz` Additionally `S` letter groups (fractional seconds) of length one to nine are supported providing they occur after `ss` and are separated from the `ss` by a period (`.`), comma (`,`), or colon (`:`). Spacing and punctuation is also permitted with the exception a question mark (`?`), newline, and carriage return, together with literal text enclosed in single quotes. For example, `MM/dd HH.mm.ss,SSSSSS \'in\' yyyy` is a valid override format. One valuable use case for this parameter is when the format is semi-structured text, there are multiple timestamp formats in the text, and you know which format corresponds to the primary timestamp, but you do not want to specify the full `grok_pattern`. Another is when the timestamp format is one that the structure finder does not consider by default. If this parameter is not specified, the structure finder chooses the best format from a built-in set. If the special value `null` is specified, the structure finder will not look for a primary timestamp in the text. When the format is semi-structured text, this will result in the structure finder treating the text as single-line messages.').optional().meta({ found_in: 'query' }),
  messages: z.array(z.string()).describe('The list of messages you want to analyze.').meta({ found_in: 'body' })
}).meta({ id: 'TextStructureFindMessageStructureRequest' })
export type TextStructureFindMessageStructureRequest = z.infer<typeof TextStructureFindMessageStructureRequest>

export const TextStructureFindMessageStructureResponse = z.object({
  charset: z.string(),
  ecs_compatibility: TextStructureEcsCompatibilityType.optional(),
  field_stats: z.record(z.lazy(() => Field), TextStructureFieldStat),
  format: TextStructureFormatType,
  grok_pattern: z.lazy(() => GrokPattern).optional(),
  java_timestamp_formats: z.array(z.string()).optional(),
  joda_timestamp_formats: z.array(z.string()).optional(),
  ingest_pipeline: IngestPipelineConfig,
  mappings: z.lazy(() => MappingTypeMapping),
  multiline_start_pattern: z.string().optional(),
  need_client_timezone: z.boolean(),
  num_lines_analyzed: z.lazy(() => integer),
  num_messages_analyzed: z.lazy(() => integer),
  sample_start: z.string(),
  timestamp_field: z.lazy(() => Field).optional()
}).meta({ id: 'TextStructureFindMessageStructureResponse' })
export type TextStructureFindMessageStructureResponse = z.infer<typeof TextStructureFindMessageStructureResponse>
