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
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const SynonymsSynonymString = z.string().meta({ id: 'SynonymsSynonymString' });
export const SynonymsSynonymRuleRead = z.object({
    id: Id.describe('The identifier for the synonym rule. If you do not specify a synonym rule ID when you create a rule, an identifier is created automatically by Elasticsearch.'),
    synonyms: SynonymsSynonymString.describe('The synonyms that conform the synonym rule in Solr format.')
}).meta({ id: 'SynonymsSynonymRuleRead' });
/**
 * Get a synonym rule.
 *
 * Get a synonym rule from a synonym set.
 */
export const SynonymsGetSynonymRuleRequest = z.object({
    ...RequestBase.shape,
    set_id: Id.describe('The ID of the synonym set to retrieve the synonym rule from.').meta({ found_in: 'path' }),
    rule_id: Id.describe('The ID of the synonym rule to retrieve.').meta({ found_in: 'path' })
}).meta({ id: 'SynonymsGetSynonymRuleRequest' });
export const SynonymsGetSynonymRuleResponse = SynonymsSynonymRuleRead.meta({ id: 'SynonymsGetSynonymRuleResponse' });
//# sourceMappingURL=synonyms_get_synonym_rule.js.map