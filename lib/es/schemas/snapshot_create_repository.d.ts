import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const SnapshotRepositoryBase: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotRepositoryBase = z.infer<typeof SnapshotRepositoryBase>;
export declare const SnapshotRepositorySettingsBase: z.ZodObject<{
    chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    compress: z.ZodOptional<z.ZodBoolean>;
    max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type SnapshotRepositorySettingsBase = z.infer<typeof SnapshotRepositorySettingsBase>;
export declare const SnapshotAzureRepositorySettings: z.ZodObject<{
    base_path: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    container: z.ZodOptional<z.ZodString>;
    delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
    location_mode: z.ZodOptional<z.ZodString>;
    max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
    chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    compress: z.ZodOptional<z.ZodBoolean>;
    max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type SnapshotAzureRepositorySettings = z.infer<typeof SnapshotAzureRepositorySettings>;
export declare const SnapshotAzureRepository: z.ZodObject<{
    type: z.ZodLiteral<"azure">;
    settings: z.ZodOptional<z.ZodObject<{
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        container: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        location_mode: z.ZodOptional<z.ZodString>;
        max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotAzureRepository = z.infer<typeof SnapshotAzureRepository>;
export declare const SnapshotGcsRepositorySettings: z.ZodObject<{
    bucket: z.ZodString;
    application_name: z.ZodOptional<z.ZodString>;
    base_path: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    readonly: z.ZodOptional<z.ZodBoolean>;
    chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    compress: z.ZodOptional<z.ZodBoolean>;
    max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type SnapshotGcsRepositorySettings = z.infer<typeof SnapshotGcsRepositorySettings>;
export declare const SnapshotGcsRepository: z.ZodObject<{
    type: z.ZodLiteral<"gcs">;
    settings: z.ZodObject<{
        bucket: z.ZodString;
        application_name: z.ZodOptional<z.ZodString>;
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotGcsRepository = z.infer<typeof SnapshotGcsRepository>;
export declare const SnapshotReadOnlyUrlRepositorySettings: z.ZodObject<{
    http_max_retries: z.ZodOptional<z.ZodNumber>;
    http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
    url: z.ZodString;
    chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    compress: z.ZodOptional<z.ZodBoolean>;
    max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type SnapshotReadOnlyUrlRepositorySettings = z.infer<typeof SnapshotReadOnlyUrlRepositorySettings>;
export declare const SnapshotReadOnlyUrlRepository: z.ZodObject<{
    type: z.ZodLiteral<"url">;
    settings: z.ZodObject<{
        http_max_retries: z.ZodOptional<z.ZodNumber>;
        http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotReadOnlyUrlRepository = z.infer<typeof SnapshotReadOnlyUrlRepository>;
export declare const SnapshotS3RepositorySettings: z.ZodObject<{
    bucket: z.ZodString;
    base_path: z.ZodOptional<z.ZodString>;
    buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    canned_acl: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
    get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_multipart_parts: z.ZodOptional<z.ZodNumber>;
    max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
    server_side_encryption: z.ZodOptional<z.ZodBoolean>;
    storage_class: z.ZodOptional<z.ZodString>;
    'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
    chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    compress: z.ZodOptional<z.ZodBoolean>;
    max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type SnapshotS3RepositorySettings = z.infer<typeof SnapshotS3RepositorySettings>;
export declare const SnapshotS3Repository: z.ZodObject<{
    type: z.ZodLiteral<"s3">;
    settings: z.ZodObject<{
        bucket: z.ZodString;
        base_path: z.ZodOptional<z.ZodString>;
        buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        canned_acl: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_multipart_parts: z.ZodOptional<z.ZodNumber>;
        max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        server_side_encryption: z.ZodOptional<z.ZodBoolean>;
        storage_class: z.ZodOptional<z.ZodString>;
        'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotS3Repository = z.infer<typeof SnapshotS3Repository>;
export declare const SnapshotSharedFileSystemRepositorySettings: z.ZodObject<{
    location: z.ZodString;
    max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
    chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    compress: z.ZodOptional<z.ZodBoolean>;
    max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type SnapshotSharedFileSystemRepositorySettings = z.infer<typeof SnapshotSharedFileSystemRepositorySettings>;
export declare const SnapshotSharedFileSystemRepository: z.ZodObject<{
    type: z.ZodLiteral<"fs">;
    settings: z.ZodObject<{
        location: z.ZodString;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotSharedFileSystemRepository = z.infer<typeof SnapshotSharedFileSystemRepository>;
export declare const SnapshotSourceOnlyRepositorySettingsForSharedFileSystem: z.ZodObject<{
    delegate_type: z.ZodLiteral<"fs">;
    location: z.ZodString;
    max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SnapshotSourceOnlyRepositorySettingsForSharedFileSystem = z.infer<typeof SnapshotSourceOnlyRepositorySettingsForSharedFileSystem>;
export declare const SnapshotSourceOnlyRepositorySettingsForReadOnlyUrl: z.ZodObject<{
    delegate_type: z.ZodLiteral<"url">;
    http_max_retries: z.ZodOptional<z.ZodNumber>;
    http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
    url: z.ZodString;
}, z.core.$strip>;
export type SnapshotSourceOnlyRepositorySettingsForReadOnlyUrl = z.infer<typeof SnapshotSourceOnlyRepositorySettingsForReadOnlyUrl>;
export declare const SnapshotSourceOnlyRepositorySettingsForAzure: z.ZodObject<{
    delegate_type: z.ZodLiteral<"azure">;
    base_path: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    container: z.ZodOptional<z.ZodString>;
    delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
    location_mode: z.ZodOptional<z.ZodString>;
    max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SnapshotSourceOnlyRepositorySettingsForAzure = z.infer<typeof SnapshotSourceOnlyRepositorySettingsForAzure>;
export declare const SnapshotSourceOnlyRepositorySettingsForGcs: z.ZodObject<{
    delegate_type: z.ZodLiteral<"gcs">;
    bucket: z.ZodString;
    application_name: z.ZodOptional<z.ZodString>;
    base_path: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    readonly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SnapshotSourceOnlyRepositorySettingsForGcs = z.infer<typeof SnapshotSourceOnlyRepositorySettingsForGcs>;
export declare const SnapshotSourceOnlyRepositorySettingsForS3: z.ZodObject<{
    delegate_type: z.ZodLiteral<"s3">;
    bucket: z.ZodString;
    base_path: z.ZodOptional<z.ZodString>;
    buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    canned_acl: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
    get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_multipart_parts: z.ZodOptional<z.ZodNumber>;
    max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
    server_side_encryption: z.ZodOptional<z.ZodBoolean>;
    storage_class: z.ZodOptional<z.ZodString>;
    'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SnapshotSourceOnlyRepositorySettingsForS3 = z.infer<typeof SnapshotSourceOnlyRepositorySettingsForS3>;
/**
 * The delegated repository type.
 * Source repositories can use `settings` properties for its delegated repository type.
 */
export declare const SnapshotSourceOnlyRepositorySettings: z.ZodUnion<readonly [z.ZodObject<{
    delegate_type: z.ZodLiteral<"fs">;
    location: z.ZodString;
    max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    delegate_type: z.ZodLiteral<"url">;
    http_max_retries: z.ZodOptional<z.ZodNumber>;
    http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
    url: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    delegate_type: z.ZodLiteral<"azure">;
    base_path: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    container: z.ZodOptional<z.ZodString>;
    delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
    location_mode: z.ZodOptional<z.ZodString>;
    max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    delegate_type: z.ZodLiteral<"gcs">;
    bucket: z.ZodString;
    application_name: z.ZodOptional<z.ZodString>;
    base_path: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    readonly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    delegate_type: z.ZodLiteral<"s3">;
    bucket: z.ZodString;
    base_path: z.ZodOptional<z.ZodString>;
    buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    canned_acl: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
    delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
    get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_multipart_parts: z.ZodOptional<z.ZodNumber>;
    max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodOptional<z.ZodBoolean>;
    server_side_encryption: z.ZodOptional<z.ZodBoolean>;
    storage_class: z.ZodOptional<z.ZodString>;
    'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
export type SnapshotSourceOnlyRepositorySettings = z.infer<typeof SnapshotSourceOnlyRepositorySettings>;
export declare const SnapshotSourceOnlyRepository: z.ZodObject<{
    type: z.ZodLiteral<"source">;
    settings: z.ZodUnion<readonly [z.ZodObject<{
        delegate_type: z.ZodLiteral<"fs">;
        location: z.ZodString;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"url">;
        http_max_retries: z.ZodOptional<z.ZodNumber>;
        http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"azure">;
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        container: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        location_mode: z.ZodOptional<z.ZodString>;
        max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"gcs">;
        bucket: z.ZodString;
        application_name: z.ZodOptional<z.ZodString>;
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        readonly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"s3">;
        bucket: z.ZodString;
        base_path: z.ZodOptional<z.ZodString>;
        buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        canned_acl: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_multipart_parts: z.ZodOptional<z.ZodNumber>;
        max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        server_side_encryption: z.ZodOptional<z.ZodBoolean>;
        storage_class: z.ZodOptional<z.ZodString>;
        'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SnapshotSourceOnlyRepository = z.infer<typeof SnapshotSourceOnlyRepository>;
export declare const SnapshotRepository: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"azure">;
    settings: z.ZodOptional<z.ZodObject<{
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        container: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        location_mode: z.ZodOptional<z.ZodString>;
        max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"gcs">;
    settings: z.ZodObject<{
        bucket: z.ZodString;
        application_name: z.ZodOptional<z.ZodString>;
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"s3">;
    settings: z.ZodObject<{
        bucket: z.ZodString;
        base_path: z.ZodOptional<z.ZodString>;
        buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        canned_acl: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_multipart_parts: z.ZodOptional<z.ZodNumber>;
        max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        server_side_encryption: z.ZodOptional<z.ZodBoolean>;
        storage_class: z.ZodOptional<z.ZodString>;
        'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"fs">;
    settings: z.ZodObject<{
        location: z.ZodString;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"url">;
    settings: z.ZodObject<{
        http_max_retries: z.ZodOptional<z.ZodNumber>;
        http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        compress: z.ZodOptional<z.ZodBoolean>;
        max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"source">;
    settings: z.ZodUnion<readonly [z.ZodObject<{
        delegate_type: z.ZodLiteral<"fs">;
        location: z.ZodString;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"url">;
        http_max_retries: z.ZodOptional<z.ZodNumber>;
        http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"azure">;
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        container: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        location_mode: z.ZodOptional<z.ZodString>;
        max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"gcs">;
        bucket: z.ZodString;
        application_name: z.ZodOptional<z.ZodString>;
        base_path: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        readonly: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        delegate_type: z.ZodLiteral<"s3">;
        bucket: z.ZodString;
        base_path: z.ZodOptional<z.ZodString>;
        buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        canned_acl: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
        get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_multipart_parts: z.ZodOptional<z.ZodNumber>;
        max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
        readonly: z.ZodOptional<z.ZodBoolean>;
        server_side_encryption: z.ZodOptional<z.ZodBoolean>;
        storage_class: z.ZodOptional<z.ZodString>;
        'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>;
    uuid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type SnapshotRepository = z.infer<typeof SnapshotRepository>;
/**
 * Create or update a snapshot repository.
 *
 * IMPORTANT: If you are migrating searchable snapshots, the repository name must be identical in the source and destination clusters.
 * To register a snapshot repository, the cluster's global metadata must be writeable.
 * Ensure there are no cluster blocks (for example, `cluster.blocks.read_only` and `clsuter.blocks.read_only_allow_delete` settings) that prevent write access.
 *
 * Several options for this API can be specified using a query parameter or a request body parameter.
 * If both parameters are specified, only the query parameter is used.
 */
export declare const SnapshotCreateRepositoryRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    verify: z.ZodOptional<z.ZodBoolean>;
    repository: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"azure">;
        settings: z.ZodOptional<z.ZodObject<{
            base_path: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            container: z.ZodOptional<z.ZodString>;
            delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
            location_mode: z.ZodOptional<z.ZodString>;
            max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
            readonly: z.ZodOptional<z.ZodBoolean>;
            chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            compress: z.ZodOptional<z.ZodBoolean>;
            max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"gcs">;
        settings: z.ZodObject<{
            bucket: z.ZodString;
            application_name: z.ZodOptional<z.ZodString>;
            base_path: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            readonly: z.ZodOptional<z.ZodBoolean>;
            chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            compress: z.ZodOptional<z.ZodBoolean>;
            max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"s3">;
        settings: z.ZodObject<{
            bucket: z.ZodString;
            base_path: z.ZodOptional<z.ZodString>;
            buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            canned_acl: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
            get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_multipart_parts: z.ZodOptional<z.ZodNumber>;
            max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
            readonly: z.ZodOptional<z.ZodBoolean>;
            server_side_encryption: z.ZodOptional<z.ZodBoolean>;
            storage_class: z.ZodOptional<z.ZodString>;
            'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
            chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            compress: z.ZodOptional<z.ZodBoolean>;
            max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"fs">;
        settings: z.ZodObject<{
            location: z.ZodString;
            max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
            readonly: z.ZodOptional<z.ZodBoolean>;
            chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            compress: z.ZodOptional<z.ZodBoolean>;
            max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"url">;
        settings: z.ZodObject<{
            http_max_retries: z.ZodOptional<z.ZodNumber>;
            http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            chunk_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            compress: z.ZodOptional<z.ZodBoolean>;
            max_restore_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_snapshot_bytes_per_sec: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"source">;
        settings: z.ZodUnion<readonly [z.ZodObject<{
            delegate_type: z.ZodLiteral<"fs">;
            location: z.ZodString;
            max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
            readonly: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodObject<{
            delegate_type: z.ZodLiteral<"url">;
            http_max_retries: z.ZodOptional<z.ZodNumber>;
            http_socket_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_number_of_snapshots: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            delegate_type: z.ZodLiteral<"azure">;
            base_path: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            container: z.ZodOptional<z.ZodString>;
            delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
            location_mode: z.ZodOptional<z.ZodString>;
            max_concurrent_batch_deletes: z.ZodOptional<z.ZodNumber>;
            readonly: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodObject<{
            delegate_type: z.ZodLiteral<"gcs">;
            bucket: z.ZodString;
            application_name: z.ZodOptional<z.ZodString>;
            base_path: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            readonly: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodObject<{
            delegate_type: z.ZodLiteral<"s3">;
            bucket: z.ZodString;
            base_path: z.ZodOptional<z.ZodString>;
            buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            canned_acl: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            delete_objects_max_size: z.ZodOptional<z.ZodNumber>;
            get_register_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_multipart_parts: z.ZodOptional<z.ZodNumber>;
            max_multipart_upload_cleanup_size: z.ZodOptional<z.ZodNumber>;
            readonly: z.ZodOptional<z.ZodBoolean>;
            server_side_encryption: z.ZodOptional<z.ZodBoolean>;
            storage_class: z.ZodOptional<z.ZodString>;
            'throttled_delete_retry.delay_increment': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            'throttled_delete_retry.maximum_delay': z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            'throttled_delete_retry.maximum_number_of_retries': z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>]>;
        uuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type SnapshotCreateRepositoryRequest = z.infer<typeof SnapshotCreateRepositoryRequest>;
export declare const SnapshotCreateRepositoryResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SnapshotCreateRepositoryResponse = z.infer<typeof SnapshotCreateRepositoryResponse>;
//# sourceMappingURL=snapshot_create_repository.d.ts.map