# Elastic Schemas

![@elastic/schemas](https://img.shields.io/npm/v/%40elastic%2Fschemas)
![Build status](https://img.shields.io/github/actions/workflow/status/elastic/schemas-js/ci.yml)

Schema definitions for all Elastic APIs, including Elasticsearch, Kibana, and Cloud. Available in multiple forms:

- [Zod](https://zod.dev/) schemas
- plain JSON schemas
- a tool registry optimized for LLM-based agents

Also includes basic utilities for building HTTP API requests from inputs that match one of the provided schemas.

## Installation

Install from npm:

```sh
npm install @elastic/schemas
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

If you have Zod installed, import individual schemas by their module path and use them like any Zod schema:

```typescript
import { SearchRequest } from '@elastic/schemas/es/schemas/search.js'

const result = SearchRequest.safeParse({
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
import { esRegistry } from '@elastic/schemas/es/tools/index.js'

const api = await esRegistry.loadApi('search')

const request = api.buildRequest({
  index: 'my-index',
  query: { match: { title: 'elasticsearch' } },
  size: 10,
})
// { method: 'GET', path: '/my-index/_search', body: { query: ..., size: 10 } }
```

Browse available API IDs via `esRegistry.manifest` (an array of `{ id, name, namespace, description }` entries).


### Tool manifests

Each product exposes a manifest: a lightweight array of `ApiRegistryMeta` objects describing every available API (`{ id, name, namespace, description, namespaceFile }`). You can import a manifest directly without loading any schema code:

```typescript
import { kibanaManifest } from '@elastic/schemas/kibana/tools/manifest.js'
import { esManifest } from '@elastic/schemas/es/tools/manifest.js'
```

The `ApiRegistryMeta` type is exported from the main entry point:

```typescript
import type { ApiRegistryMeta } from '@elastic/schemas'
```

### Available exports

:warning: Importing all the schemas as a single object is going to consume **a lot** of memory, so we encourage you to use the exact path to the schema you need:

```js
import { SearchRequest } from '@elastic/schemas/es/schemas/search.js'
```

However, if you do need a full export as one object, the following exports are provided:

| Export | Description |
|--------|-------------|
| `ElasticsearchSchemas` | Zod schemas for all ES APIs |
| `ElasticsearchTools` | ES tool registry + `esRegistry` |
| `KibanaSchemas` | Zod schemas for all Kibana APIs |
| `KibanaTools` | Kibana tool registry + `kibanaRegistry` |
| `CloudSchemas` | Zod schemas for all Cloud APIs |
| `ApiRegistryMeta` | Shared type for manifest entries |

## Version support

The schemas in this package reflect the API specifications for the latest Elasticsearch Serverless release of Elasticsearch and Kibana only, as well as the latest stable release of the Elastic Cloud control plane API. Support for other versions of the Elastic stack is coming!
