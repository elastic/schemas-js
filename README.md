# Elastic Schemas

Schema definitions for all Elastic APIs, including Elasticsearch, Kibana, and Cloud. Available in multiple forms:

- [Zod](https://zod.dev/) schemas
- plain JSON schemas
- a tool registry optimized for LLM-based agents

Also includes basic utilities for building HTTP API requests from inputs that match one of the provided schemas.

## Installation

Until this is published to npm, you will need to clone, build and install manually:

```sh
git clone git@github.com:elastic/schemas-js.git
cd schemas-js
npm run build
cd path/to/your/project
npm install path/to/schemas-js
```

### Optional dependencies

**Zod** is an optional dependency. If you only need JSON schemas or the tool registry, you don't need to install Zod. If you want to use Zod schemas, install it explicitly:

```sh
npm install zod
```

## Usage

### JSON schemas

Static [JSON Schema](https://json-schema.org/) files are available for each API's request and response. Namespaced APIs are named `{namespace}.{name}.request.json`; top-level (global) APIs are named `{name}.request.json`.

```typescript
import searchRequest from '@elastic/schemas/es/json/search.request.json' with { type: 'json' }
import searchResponse from '@elastic/schemas/es/json/search.response.json' with { type: 'json' }
```

```typescript
import findRulesRequest from '@elastic/schemas/kibana/json/find_rules.request.json' with { type: 'json' }
```

```typescript
import createApiKeyRequest from '@elastic/schemas/cloud/json/create_api_key.request.json' with { type: 'json' }
```

The schemas can be used directly with any JSON Schema validator, e.g. [Ajv](https://ajv.js.org/):

```typescript
import Ajv from 'ajv'
import searchRequest from '@elastic/schemas/es/json/search.request.json' with { type: 'json' }

const ajv = new Ajv()
const validate = ajv.compile(searchRequest)

const valid = validate({ index: 'my-index', query: { match_all: {} } })
if (!valid) console.error(validate.errors)
```

### Zod schemas

If you have Zod installed, import schemas by product namespace and use them like any Zod schema:

```typescript
import { ElasticsearchSchemas } from '@elastic/schemas'

const result = ElasticsearchSchemas.SearchRequest.safeParse({
  index: 'my-index',
  query: { match: { title: 'elasticsearch' } },
  size: 10,
})

if (!result.success) {
  console.error(result.error.issues)
}
```

### Tool registry

Load a tool definition by API ID and build a ready-to-send HTTP request:

```typescript
import { ElasticsearchTools } from '@elastic/schemas'

const api = await ElasticsearchTools.esRegistry.loadApi('search')

const request = api.buildRequest({
  index: 'my-index',
  query: { match: { title: 'elasticsearch' } },
  size: 10,
})
// { method: 'GET', path: '/my-index/_search', body: { query: ..., size: 10 } }
```

Browse available API IDs via `ElasticsearchTools.esRegistry.manifest` (an array of `{ id, name, namespace, description }` entries).


### Tool manifests

Each product exposes a lightweight manifest — an array of `ApiRegistryMeta` objects (`{ id, name, namespace, description, namespaceFile }`) — without loading any schema code. Import them directly:

```typescript
import { kibanaManifest } from '@elastic/schemas/kibana/tools/manifest.js'
import { esManifest }     from '@elastic/schemas/es/tools/manifest.js'
```

These are the same manifests available via the registry objects (`ElasticsearchTools.esRegistry.manifest`, etc.), but they can be imported in isolation without pulling in the full schema bundle. `ApiRegistryMeta` is re-exported from the main entry point:

```typescript
import type { ApiRegistryMeta } from '@elastic/schemas'
```

### Available exports

For each API target, the following root exports are available:

| Export | Path | Description |
|--------|------|-------------|
| `ElasticsearchSchemas` | `@elastic/schemas` | Zod schemas for all ES APIs |
| `ElasticsearchTools` | `@elastic/schemas` | ES tool registry + `esRegistry` |
| `KibanaSchemas` | `@elastic/schemas` | Zod schemas for all Kibana APIs |
| `KibanaTools` | `@elastic/schemas` | Kibana tool registry + `kibanaRegistry` |
| `CloudSchemas` | `@elastic/schemas` | Zod schemas for all Cloud APIs |
| `ApiRegistryMeta` | `@elastic/schemas` | Shared type for manifest entries |
| `esManifest` | `@elastic/schemas/es/tools/manifest.js` | Lightweight ES API manifest (no schemas) |
| `kibanaManifest` | `@elastic/schemas/kibana/tools/manifest.js` | Lightweight Kibana API manifest (no schemas) |

## Version support

The schemas in this package reflect the API specifications for the latest Elasticsearch Serverless release of Elasticsearch and Kibana only, as well as the latest stable release of the Elastic Cloud control plane API. Support for other versions of the Elastic stack is coming!
