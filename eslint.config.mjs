/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import neostandard, { plugins } from 'neostandard'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...neostandard({
    ts: true,
    ignores: [
      'node_modules/**',
      'src/es/json/**',
      'src/kibana/json/**',
      'src/cloud/json/**',
    ]
  }),

  {
    files: ['src/**/*.ts', 'scripts/**/*.mjs'],
    plugins: {
      '@stylistic': plugins['@stylistic']
    },
    rules: {
      '@stylistic/spaced-comment': ['error', 'always', {
        exceptions: ['#', '/'],
        markers: ['/']
      }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/lines-between-class-members': 'off'
    }
  },

  // Generated source — relax rules that codegen routinely triggers
  {
    files: ['src/**/*.ts'],
    rules: {
      camelcase: 'off',
      'no-void': 'off',
      'no-useless-escape': 'off',
      'prefer-const': 'off',
      'no-unused-expressions': 'off',
      'no-sequences': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'new-cap': 'off'
    }
  }
])
