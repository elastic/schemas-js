# Elastic schemas

Schema definitions for all Elastic APIs, including Elasticsearch, Kibana, and Cloud. Expressed as [Zod](https://zod.dev/) schemas and tool manifests, plus request builder utilities for helping serialize API parameter inputs into a valid HTTP request structure.

## Installation

Until this is published to npm, you will need to clone, build and install manually:

```sh
git clone git@github.com:elastic/schemas-js.git
cd schemas-js
npm run build
cd path/to/your/project
npm install path/to/schemas-js
```

## Usage

### Zod schema validation

Import schemas by product namespace and use them like any Zod schema:

```typescript
import { EsSchemas } from '@elastic/schemas'

const result = EsSchemas.SearchRequest.safeParse({
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

### Available exports

For each API target, the following root exports are available:

- **Elasticsearch:** `ElasticsearchSchemas` and `ElasticsearchTools`
- **Kibana:** `KibanaSchemas` and `KibanaTools`
- **Cloud:** `CloudSchemas`

## Version support

The schemas in this package reflect the API specifications for the latest Elasticsearch Serverless release of Elasticsearch and Kibana only, as well as the latest stable release of the Elastic Cloud control plane API. Support for other versions of the Elastic stack is coming!
