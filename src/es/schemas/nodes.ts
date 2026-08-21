/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, EpochTime, Id, Name, NodeStatistics, VersionNumber, long } from './_types.js'

export const NodesSizeHttpHistogram = z.object({
  count: z.lazy(() => long),
  ge: z.lazy(() => ByteSize).optional(),
  ge_bytes: z.lazy(() => long).optional(),
  lt: z.lazy(() => ByteSize).optional(),
  lt_bytes: z.lazy(() => long).optional()
}).meta({ id: 'NodesSizeHttpHistogram' })
export type NodesSizeHttpHistogram = z.infer<typeof NodesSizeHttpHistogram>

export const NodesHttpRouteRequests = z.object({
  count: z.lazy(() => long),
  total_size: z.lazy(() => ByteSize).optional(),
  total_size_in_bytes: z.lazy(() => long),
  size_histogram: z.array(NodesSizeHttpHistogram)
}).meta({ id: 'NodesHttpRouteRequests' })
export type NodesHttpRouteRequests = z.infer<typeof NodesHttpRouteRequests>

export const NodesTimeHttpHistogram = z.object({
  count: z.lazy(() => long),
  ge: z.lazy(() => Duration).optional(),
  ge_millis: z.lazy(() => long).optional(),
  lt: z.lazy(() => Duration).optional(),
  lt_millis: z.lazy(() => long).optional()
}).meta({ id: 'NodesTimeHttpHistogram' })
export type NodesTimeHttpHistogram = z.infer<typeof NodesTimeHttpHistogram>

export const NodesHttpRouteResponses = z.object({
  count: z.lazy(() => long),
  total_size: z.lazy(() => ByteSize).optional(),
  total_size_in_bytes: z.lazy(() => long),
  handling_time_histogram: z.array(NodesTimeHttpHistogram),
  size_histogram: z.array(NodesSizeHttpHistogram)
}).meta({ id: 'NodesHttpRouteResponses' })
export type NodesHttpRouteResponses = z.infer<typeof NodesHttpRouteResponses>

export const NodesHttpRoute = z.object({
  requests: NodesHttpRouteRequests,
  responses: NodesHttpRouteResponses
}).meta({ id: 'NodesHttpRoute' })
export type NodesHttpRoute = z.infer<typeof NodesHttpRoute>

export const NodesNodesResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional()
}).meta({ id: 'NodesNodesResponseBase' })
export type NodesNodesResponseBase = z.infer<typeof NodesNodesResponseBase>

export const NodesRepositoryLocation = z.object({
  base_path: z.string(),
  container: z.string().describe('Container name (Azure)').optional(),
  bucket: z.string().describe('Bucket name (GCP, S3)').optional()
}).meta({ id: 'NodesRepositoryLocation' })
export type NodesRepositoryLocation = z.infer<typeof NodesRepositoryLocation>

export const NodesRequestCounts = z.object({
  GetBlobProperties: z.lazy(() => long).describe('Number of Get Blob Properties requests (Azure)').optional(),
  GetBlob: z.lazy(() => long).describe('Number of Get Blob requests (Azure)').optional(),
  ListBlobs: z.lazy(() => long).describe('Number of List Blobs requests (Azure)').optional(),
  PutBlob: z.lazy(() => long).describe('Number of Put Blob requests (Azure)').optional(),
  PutBlock: z.lazy(() => long).describe('Number of Put Block (Azure)').optional(),
  PutBlockList: z.lazy(() => long).describe('Number of Put Block List requests').optional(),
  GetObject: z.lazy(() => long).describe('Number of get object requests (GCP, S3)').optional(),
  ListObjects: z.lazy(() => long).describe('Number of list objects requests (GCP, S3)').optional(),
  InsertObject: z.lazy(() => long).describe('Number of insert object requests, including simple, multipart and resumable uploads. Resumable uploads can perform multiple http requests to insert a single object but they are considered as a single request since they are billed as an individual operation. (GCP)').optional(),
  PutObject: z.lazy(() => long).describe('Number of PutObject requests (S3)').optional(),
  PutMultipartObject: z.lazy(() => long).describe('Number of Multipart requests, including CreateMultipartUpload, UploadPart and CompleteMultipartUpload requests (S3)').optional()
}).meta({ id: 'NodesRequestCounts' })
export type NodesRequestCounts = z.infer<typeof NodesRequestCounts>

export const NodesRepositoryMeteringInformation = z.object({
  repository_name: z.lazy(() => Name).describe('Repository name.'),
  repository_type: z.string().describe('Repository type.'),
  repository_location: NodesRepositoryLocation.describe('Represents an unique location within the repository.'),
  repository_ephemeral_id: z.lazy(() => Id).describe('An identifier that changes every time the repository is updated.'),
  repository_started_at: z.lazy(() => EpochTime).describe('Time the repository was created or updated. Recorded in milliseconds since the Unix Epoch.'),
  repository_stopped_at: z.lazy(() => EpochTime).describe('Time the repository was deleted or updated. Recorded in milliseconds since the Unix Epoch.').optional(),
  archived: z.boolean().describe('A flag that tells whether or not this object has been archived. When a repository is closed or updated the repository metering information is archived and kept for a certain period of time. This allows retrieving the repository metering information of previous repository instantiations.'),
  cluster_version: z.lazy(() => VersionNumber).describe('The cluster state version when this object was archived, this field can be used as a logical timestamp to delete all the archived metrics up to an observed version. This field is only present for archived repository metering information objects. The main purpose of this field is to avoid possible race conditions during repository metering information deletions, i.e. deleting archived repositories metering information that we haven’t observed yet.').optional(),
  request_counts: NodesRequestCounts.describe('An object with the number of request performed against the repository grouped by request type.')
}).meta({ id: 'NodesRepositoryMeteringInformation' })
export type NodesRepositoryMeteringInformation = z.infer<typeof NodesRepositoryMeteringInformation>
