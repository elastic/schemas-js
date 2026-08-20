/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { quoteFilename } from '../scripts/generate-json-manifest.mjs'

describe('quoteFilename', () => {
  it('quotes a plain filename', () => {
    expect(quoteFilename('_types.json')).toBe("'_types.json'")
  })

  it('escapes an embedded single quote so it cannot break out of the string literal', () => {
    const quoted = quoteFilename("weird'name.json")
    expect(quoted).toBe("'weird\\'name.json'")
    // eslint-disable-next-line no-eval
    expect(eval(quoted)).toBe("weird'name.json")
  })

  it('escapes an embedded backslash', () => {
    const quoted = quoteFilename('weird\\name.json')
    // eslint-disable-next-line no-eval
    expect(eval(quoted)).toBe('weird\\name.json')
  })

  it('round-trips the empty string', () => {
    // eslint-disable-next-line no-eval
    expect(eval(quoteFilename(''))).toBe('')
  })
})
