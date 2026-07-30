/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'

interface Definition {
  name: string
  namespace?: string
  method: string
  path: string
  input?: { properties?: Record<string, Record<string, unknown>> }
}

// Eagerly import every generated API definition file across all tool trees.
const modules = {
  ...import.meta.glob('../src/es/tools/apis/*.ts', { eager: true }),
  ...import.meta.glob('../src/kibana/tools/apis/*.ts', { eager: true }),
  ...import.meta.glob('../src/cloud/tools/apis/*.ts', { eager: true }),
} as Record<string, Record<string, unknown>>

function pathParams (path: string): Set<string> {
  return new Set([...path.matchAll(/\{([^}]+)\}/g)].map(m => m[1]!))
}

function schemaPathProps (def: Definition): Set<string> {
  const props = def.input?.properties ?? {}
  return new Set(
    Object.entries(props)
      .filter(([, schema]) => schema['x-found-in'] === 'path')
      .map(([name]) => name)
  )
}

describe('path parameters match x-found-in:"path" schema properties', () => {
  for (const [file, mod] of Object.entries(modules)) {
    for (const [exportName, value] of Object.entries(mod)) {
      if (!exportName.endsWith('_definitions') || !Array.isArray(value)) continue

      for (const def of value as Definition[]) {
        const label = `${file}#${exportName}: ${def.namespace != null ? `${def.namespace}.` : ''}${def.name}`

        it(label, () => {
          expect(schemaPathProps(def)).toEqual(pathParams(def.path))
        })
      }
    }
  }
})
