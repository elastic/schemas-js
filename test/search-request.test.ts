/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { SearchRequest } from '../src/es/schemas/search.ts'

describe('SearchRequest', () => {
  it('accepts all _source request body forms', () => {
    for (const source of [
      true,
      'title',
      ['title', 'author', 'views'],
      { includes: ['title', 'author'], excludes: ['body'] },
    ]) {
      const result = SearchRequest.safeParse({ size: 3, _source: source })
      expect(result.success, `_source: ${JSON.stringify(source)} should be valid`).toBe(true)
    }
  })
})
