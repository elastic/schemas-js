/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, DurationValue, EpochTime, Field, Host, Id, IndexName, Metadata, Name, OpType, Password, Refresh, SequenceNumber, TransformContainer, Username, VersionNumber, integer, long, uint } from './_types.js'
import { WatcherScheduleTimeOfDay } from './cat.snapshots.js'
import { WatcherConditionContainer, WatcherCronExpression, WatcherInputContainer } from './watcher.js'

export const WatcherActionType = z.enum(['email', 'webhook', 'index', 'logging', 'slack', 'pagerduty']).meta({ id: 'WatcherActionType' })
export type WatcherActionType = z.infer<typeof WatcherActionType>

export const WatcherIndexAction = z.object({
  index: z.lazy(() => IndexName).optional(),
  doc_id: z.lazy(() => Id).optional(),
  refresh: z.lazy(() => Refresh).optional(),
  op_type: z.lazy(() => OpType).optional(),
  timeout: z.lazy(() => Duration).optional(),
  execution_time_field: z.lazy(() => Field).optional()
}).meta({ id: 'WatcherIndexAction' })
export type WatcherIndexAction = z.infer<typeof WatcherIndexAction>

export const WatcherLoggingAction = z.object({
  level: z.string().optional(),
  text: z.string(),
  category: z.string().optional()
}).meta({ id: 'WatcherLoggingAction' })
export type WatcherLoggingAction = z.infer<typeof WatcherLoggingAction>

export const WatcherEmailBody = z.object({
  html: z.string().optional(),
  text: z.string().optional()
}).meta({ id: 'WatcherEmailBody' })
export type WatcherEmailBody = z.infer<typeof WatcherEmailBody>

export const WatcherEmailPriority = z.enum(['lowest', 'low', 'normal', 'high', 'highest']).meta({ id: 'WatcherEmailPriority' })
export type WatcherEmailPriority = z.infer<typeof WatcherEmailPriority>

export const WatcherHttpInputBasicAuthentication = z.object({
  password: z.lazy(() => Password),
  username: z.lazy(() => Username)
}).meta({ id: 'WatcherHttpInputBasicAuthentication' })
export type WatcherHttpInputBasicAuthentication = z.infer<typeof WatcherHttpInputBasicAuthentication>

export const WatcherHttpInputAuthentication = z.object({
  basic: WatcherHttpInputBasicAuthentication
}).meta({ id: 'WatcherHttpInputAuthentication' })
export type WatcherHttpInputAuthentication = z.infer<typeof WatcherHttpInputAuthentication>

export const WatcherHttpInputMethod = z.enum(['head', 'get', 'post', 'put', 'delete']).meta({ id: 'WatcherHttpInputMethod' })
export type WatcherHttpInputMethod = z.infer<typeof WatcherHttpInputMethod>

export const WatcherHttpInputProxy = z.object({
  host: z.lazy(() => Host),
  port: z.lazy(() => uint)
}).meta({ id: 'WatcherHttpInputProxy' })
export type WatcherHttpInputProxy = z.infer<typeof WatcherHttpInputProxy>

export const WatcherConnectionScheme = z.enum(['http', 'https']).meta({ id: 'WatcherConnectionScheme' })
export type WatcherConnectionScheme = z.infer<typeof WatcherConnectionScheme>

export const WatcherHttpInputRequestDefinition = z.object({
  auth: WatcherHttpInputAuthentication.optional(),
  body: z.string().optional(),
  connection_timeout: z.lazy(() => Duration).optional(),
  headers: z.record(z.string(), z.string()).optional(),
  host: z.lazy(() => Host).optional(),
  method: WatcherHttpInputMethod.optional(),
  params: z.record(z.string(), z.string()).optional(),
  path: z.string().optional(),
  port: z.lazy(() => uint).optional(),
  proxy: WatcherHttpInputProxy.optional(),
  read_timeout: z.lazy(() => Duration).optional(),
  scheme: WatcherConnectionScheme.optional(),
  url: z.string().optional()
}).meta({ id: 'WatcherHttpInputRequestDefinition' })
export type WatcherHttpInputRequestDefinition = z.infer<typeof WatcherHttpInputRequestDefinition>

export const WatcherHttpEmailAttachment = z.object({
  content_type: z.string().optional(),
  inline: z.boolean().optional(),
  request: z.lazy(() => WatcherHttpInputRequestDefinition).optional()
}).meta({ id: 'WatcherHttpEmailAttachment' })
export type WatcherHttpEmailAttachment = z.infer<typeof WatcherHttpEmailAttachment>

export const WatcherReportingEmailAttachment = z.object({
  url: z.string(),
  inline: z.boolean().optional(),
  retries: z.lazy(() => integer).optional(),
  interval: z.lazy(() => Duration).optional(),
  request: z.lazy(() => WatcherHttpInputRequestDefinition).optional()
}).meta({ id: 'WatcherReportingEmailAttachment' })
export type WatcherReportingEmailAttachment = z.infer<typeof WatcherReportingEmailAttachment>

export const WatcherDataAttachmentFormat = z.enum(['json', 'yaml']).meta({ id: 'WatcherDataAttachmentFormat' })
export type WatcherDataAttachmentFormat = z.infer<typeof WatcherDataAttachmentFormat>

export const WatcherDataEmailAttachment = z.object({
  format: WatcherDataAttachmentFormat.optional()
}).meta({ id: 'WatcherDataEmailAttachment' })
export type WatcherDataEmailAttachment = z.infer<typeof WatcherDataEmailAttachment>

const WatcherEmailAttachmentContainerExclusiveProps = z.union([z.object({ http: WatcherHttpEmailAttachment }), z.object({ reporting: WatcherReportingEmailAttachment }), z.object({ data: WatcherDataEmailAttachment })])

export const WatcherEmailAttachmentContainer = WatcherEmailAttachmentContainerExclusiveProps.meta({ id: 'WatcherEmailAttachmentContainer' })
export type WatcherEmailAttachmentContainer = z.infer<typeof WatcherEmailAttachmentContainer>

export const WatcherEmail = z.object({
  id: z.lazy(() => Id).optional(),
  bcc: z.union([z.string(), z.array(z.string())]).optional(),
  body: WatcherEmailBody.optional(),
  cc: z.union([z.string(), z.array(z.string())]).optional(),
  from: z.string().optional(),
  priority: WatcherEmailPriority.optional(),
  reply_to: z.union([z.string(), z.array(z.string())]).optional(),
  sent_date: z.lazy(() => DateTime).optional(),
  subject: z.string(),
  to: z.union([z.string(), z.array(z.string())]),
  attachments: z.record(z.string(), WatcherEmailAttachmentContainer).optional()
}).meta({ id: 'WatcherEmail' })
export type WatcherEmail = z.infer<typeof WatcherEmail>

export const WatcherEmailAction = z.object({
  ...WatcherEmail.shape
}).meta({ id: 'WatcherEmailAction' })
export type WatcherEmailAction = z.infer<typeof WatcherEmailAction>

export const WatcherPagerDutyContextType = z.enum(['link', 'image']).meta({ id: 'WatcherPagerDutyContextType' })
export type WatcherPagerDutyContextType = z.infer<typeof WatcherPagerDutyContextType>

export const WatcherPagerDutyContext = z.object({
  href: z.string().optional(),
  src: z.string().optional(),
  type: WatcherPagerDutyContextType
}).meta({ id: 'WatcherPagerDutyContext' })
export type WatcherPagerDutyContext = z.infer<typeof WatcherPagerDutyContext>

export const WatcherPagerDutyEventType = z.enum(['trigger', 'resolve', 'acknowledge']).meta({ id: 'WatcherPagerDutyEventType' })
export type WatcherPagerDutyEventType = z.infer<typeof WatcherPagerDutyEventType>

export const WatcherPagerDutyEventProxy = z.object({
  host: z.lazy(() => Host).optional(),
  port: z.lazy(() => integer).optional()
}).meta({ id: 'WatcherPagerDutyEventProxy' })
export type WatcherPagerDutyEventProxy = z.infer<typeof WatcherPagerDutyEventProxy>

export const WatcherPagerDutyEvent = z.object({
  account: z.string().optional(),
  attach_payload: z.boolean(),
  client: z.string().optional(),
  client_url: z.string().optional(),
  contexts: z.array(WatcherPagerDutyContext).optional(),
  context: z.array(WatcherPagerDutyContext).optional(),
  description: z.string(),
  event_type: WatcherPagerDutyEventType.optional(),
  incident_key: z.string(),
  proxy: WatcherPagerDutyEventProxy.optional()
}).meta({ id: 'WatcherPagerDutyEvent' })
export type WatcherPagerDutyEvent = z.infer<typeof WatcherPagerDutyEvent>

export const WatcherPagerDutyAction = z.object({
  ...WatcherPagerDutyEvent.shape
}).meta({ id: 'WatcherPagerDutyAction' })
export type WatcherPagerDutyAction = z.infer<typeof WatcherPagerDutyAction>

export const WatcherSlackAttachmentField = z.object({
  short: z.boolean(),
  title: z.string(),
  value: z.string()
}).meta({ id: 'WatcherSlackAttachmentField' })
export type WatcherSlackAttachmentField = z.infer<typeof WatcherSlackAttachmentField>

export const WatcherSlackAttachment = z.object({
  author_icon: z.string().optional(),
  author_link: z.string().optional(),
  author_name: z.string(),
  color: z.string().optional(),
  fallback: z.string().optional(),
  fields: z.array(WatcherSlackAttachmentField).optional(),
  footer: z.string().optional(),
  footer_icon: z.string().optional(),
  image_url: z.string().optional(),
  pretext: z.string().optional(),
  text: z.string().optional(),
  thumb_url: z.string().optional(),
  title: z.string(),
  title_link: z.string().optional(),
  ts: z.lazy(() => EpochTime).optional()
}).meta({ id: 'WatcherSlackAttachment' })
export type WatcherSlackAttachment = z.infer<typeof WatcherSlackAttachment>

export const WatcherSlackDynamicAttachment = z.object({
  attachment_template: WatcherSlackAttachment,
  list_path: z.string()
}).meta({ id: 'WatcherSlackDynamicAttachment' })
export type WatcherSlackDynamicAttachment = z.infer<typeof WatcherSlackDynamicAttachment>

export const WatcherSlackMessage = z.object({
  attachments: z.array(WatcherSlackAttachment),
  dynamic_attachments: WatcherSlackDynamicAttachment.optional(),
  from: z.string(),
  icon: z.string().optional(),
  text: z.string(),
  to: z.array(z.string())
}).meta({ id: 'WatcherSlackMessage' })
export type WatcherSlackMessage = z.infer<typeof WatcherSlackMessage>

export const WatcherSlackAction = z.object({
  account: z.string().optional(),
  message: WatcherSlackMessage
}).meta({ id: 'WatcherSlackAction' })
export type WatcherSlackAction = z.infer<typeof WatcherSlackAction>

export const WatcherWebhookAction = z.object({
  auth: WatcherHttpInputAuthentication.optional(),
  body: z.string().optional(),
  connection_timeout: z.lazy(() => Duration).optional(),
  headers: z.record(z.string(), z.string()).optional(),
  host: z.lazy(() => Host).optional(),
  method: WatcherHttpInputMethod.optional(),
  params: z.record(z.string(), z.string()).optional(),
  path: z.string().optional(),
  port: z.lazy(() => uint).optional(),
  proxy: WatcherHttpInputProxy.optional(),
  read_timeout: z.lazy(() => Duration).optional(),
  scheme: WatcherConnectionScheme.optional(),
  url: z.string().optional()
}).meta({ id: 'WatcherWebhookAction' })
export type WatcherWebhookAction = z.infer<typeof WatcherWebhookAction>

export const WatcherAction = z.object({
  action_type: WatcherActionType.optional(),
  condition: z.lazy(() => WatcherConditionContainer).optional(),
  foreach: z.string().optional(),
  max_iterations: z.lazy(() => integer).optional(),
  name: z.lazy(() => Name).optional(),
  throttle_period: z.lazy(() => Duration).optional(),
  throttle_period_in_millis: z.lazy(() => DurationValue).optional(),
  transform: z.lazy(() => TransformContainer).optional(),
  index: WatcherIndexAction.optional(),
  logging: WatcherLoggingAction.optional(),
  email: WatcherEmailAction.optional(),
  pagerduty: WatcherPagerDutyAction.optional(),
  slack: WatcherSlackAction.optional(),
  webhook: WatcherWebhookAction.optional()
}).meta({ id: 'WatcherAction' })
export type WatcherAction = z.infer<typeof WatcherAction>

export const WatcherDailySchedule = z.object({
  at: z.array(z.lazy(() => WatcherScheduleTimeOfDay))
}).meta({ id: 'WatcherDailySchedule' })
export type WatcherDailySchedule = z.infer<typeof WatcherDailySchedule>

export const WatcherDay = z.enum(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']).meta({ id: 'WatcherDay' })
export type WatcherDay = z.infer<typeof WatcherDay>

export const WatcherHourlySchedule = z.object({
  minute: z.array(z.lazy(() => integer))
}).meta({ id: 'WatcherHourlySchedule' })
export type WatcherHourlySchedule = z.infer<typeof WatcherHourlySchedule>

export const WatcherMonth = z.enum(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']).meta({ id: 'WatcherMonth' })
export type WatcherMonth = z.infer<typeof WatcherMonth>

export const WatcherTimeOfMonth = z.object({
  at: z.array(z.string()),
  on: z.array(z.lazy(() => integer))
}).meta({ id: 'WatcherTimeOfMonth' })
export type WatcherTimeOfMonth = z.infer<typeof WatcherTimeOfMonth>

export const WatcherTimeOfWeek = z.object({
  at: z.array(z.string()),
  on: z.array(WatcherDay)
}).meta({ id: 'WatcherTimeOfWeek' })
export type WatcherTimeOfWeek = z.infer<typeof WatcherTimeOfWeek>

export const WatcherTimeOfYear = z.object({
  at: z.array(z.string()),
  int: z.array(WatcherMonth),
  on: z.array(z.lazy(() => integer))
}).meta({ id: 'WatcherTimeOfYear' })
export type WatcherTimeOfYear = z.infer<typeof WatcherTimeOfYear>

const WatcherScheduleContainerExclusiveProps = z.union([z.object({ timezone: z.string() }), z.object({ cron: z.lazy(() => WatcherCronExpression) }), z.object({ daily: WatcherDailySchedule }), z.object({ hourly: WatcherHourlySchedule }), z.object({ interval: z.lazy(() => Duration) }), z.object({ monthly: z.union([WatcherTimeOfMonth, z.array(WatcherTimeOfMonth)]) }), z.object({ weekly: z.union([WatcherTimeOfWeek, z.array(WatcherTimeOfWeek)]) }), z.object({ yearly: z.union([WatcherTimeOfYear, z.array(WatcherTimeOfYear)]) })])

export const WatcherScheduleContainer = WatcherScheduleContainerExclusiveProps.meta({ id: 'WatcherScheduleContainer' })
export type WatcherScheduleContainer = z.infer<typeof WatcherScheduleContainer>

const WatcherTriggerContainerExclusiveProps = z.union([z.object({ schedule: WatcherScheduleContainer })])

export const WatcherTriggerContainer = WatcherTriggerContainerExclusiveProps.meta({ id: 'WatcherTriggerContainer' })
export type WatcherTriggerContainer = z.infer<typeof WatcherTriggerContainer>

/**
 * Create or update a watch.
 *
 * When a watch is registered, a new document that represents the watch is added to the `.watches` index and its trigger is immediately registered with the relevant trigger engine.
 * Typically for the `schedule` trigger, the scheduler is the trigger engine.
 *
 * IMPORTANT: You must use Kibana or this API to create a watch.
 * Do not add a watch directly to the `.watches` index by using the Elasticsearch index API.
 * If Elasticsearch security features are enabled, do not give users write privileges on the `.watches` index.
 *
 * When you add a watch you can also define its initial active state by setting the *active* parameter.
 *
 * When Elasticsearch security features are enabled, your watch can index or search only on indices for which the user that stored the watch has privileges.
 * If the user is able to read index `a`, but not index `b`, the same will apply when the watch runs.
 */
export const WatcherPutWatchRequest = z.object({
  id: z.lazy(() => Id).describe('The identifier for the watch.').meta({ found_in: 'path' }),
  active: z.boolean().describe('The initial state of the watch. The default value is `true`, which means the watch is active by default.').optional().meta({ found_in: 'query' }),
  if_primary_term: z.lazy(() => long).describe('Only update the watch if the last operation that has changed the watch has the specified primary term').optional().meta({ found_in: 'query' }),
  if_seq_no: z.lazy(() => SequenceNumber).describe('Only update the watch if the last operation that has changed the watch has the specified sequence number').optional().meta({ found_in: 'query' }),
  version: z.lazy(() => VersionNumber).describe('Explicit version number for concurrency control').optional().meta({ found_in: 'query' }),
  actions: z.record(z.string(), z.lazy(() => WatcherAction)).describe('The list of actions that will be run if the condition matches.').optional().meta({ found_in: 'body' }),
  condition: z.lazy(() => WatcherConditionContainer).describe('The condition that defines if the actions should be run.').optional().meta({ found_in: 'body' }),
  input: z.lazy(() => WatcherInputContainer).describe('The input that defines the input that loads the data for the watch.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Metadata JSON that will be copied into the history entries.').optional().meta({ found_in: 'body' }),
  throttle_period: z.lazy(() => Duration).describe('The minimum time between actions being run. The default is 5 seconds. This default can be changed in the config file with the setting `xpack.watcher.throttle.period.default_period`. If both this value and the `throttle_period_in_millis` parameter are specified, Watcher uses the last parameter included in the request.').optional().meta({ found_in: 'body' }),
  throttle_period_in_millis: z.lazy(() => DurationValue).describe('Minimum time in milliseconds between actions being run. Defaults to 5000. If both this value and the throttle_period parameter are specified, Watcher uses the last parameter included in the request.').optional().meta({ found_in: 'body' }),
  transform: z.lazy(() => TransformContainer).describe('The transform that processes the watch payload to prepare it for the watch actions.').optional().meta({ found_in: 'body' }),
  trigger: z.lazy(() => WatcherTriggerContainer).describe('The trigger that defines when the watch should run.').optional().meta({ found_in: 'body' })
}).meta({ id: 'WatcherPutWatchRequest' })
export type WatcherPutWatchRequest = z.infer<typeof WatcherPutWatchRequest>

export const WatcherPutWatchResponse = z.object({
  created: z.boolean(),
  _id: z.lazy(() => Id),
  _primary_term: z.lazy(() => long),
  _seq_no: z.lazy(() => SequenceNumber),
  _version: z.lazy(() => VersionNumber)
}).meta({ id: 'WatcherPutWatchResponse' })
export type WatcherPutWatchResponse = z.infer<typeof WatcherPutWatchResponse>
