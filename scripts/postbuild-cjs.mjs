/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { writeFileSync } from 'fs'
import { join } from 'path'

// Tell Node that everything under lib/cjs/ is CommonJS,
// regardless of the top-level "type" field in package.json.
writeFileSync(
  join('lib', 'cjs', 'package.json'),
  JSON.stringify({ type: 'commonjs' }, null, 2) + '\n'
)

console.log('postbuild-cjs: wrote lib/cjs/package.json')
