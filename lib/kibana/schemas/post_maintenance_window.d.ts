import { z } from 'zod';
export declare const Kibana_HTTP_APIs_maintenance_window_scope: z.ZodObject<{
    alerting: z.ZodObject<{
        query: z.ZodObject<{
            kql: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_maintenance_window_scope = z.infer<typeof Kibana_HTTP_APIs_maintenance_window_scope>;
export declare const Kibana_HTTP_APIs_maintenance_window_schedule_recurring_response: z.ZodObject<{
    end: z.ZodOptional<z.ZodString>;
    every: z.ZodOptional<z.ZodString>;
    occurrences: z.ZodOptional<z.ZodNumber>;
    onMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    onMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    onWeekDay: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_maintenance_window_schedule_recurring_response = z.infer<typeof Kibana_HTTP_APIs_maintenance_window_schedule_recurring_response>;
export declare const Kibana_HTTP_APIs_maintenance_window_schedule_recurring_request: z.ZodObject<{
    end: z.ZodOptional<z.ZodString>;
    every: z.ZodOptional<z.ZodString>;
    occurrences: z.ZodOptional<z.ZodNumber>;
    onMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    onMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    onWeekDay: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_maintenance_window_schedule_recurring_request = z.infer<typeof Kibana_HTTP_APIs_maintenance_window_schedule_recurring_request>;
export declare const Kibana_HTTP_APIs_maintenance_window_schedule_response: z.ZodObject<{
    duration: z.ZodString;
    recurring: z.ZodOptional<z.ZodObject<{
        end: z.ZodOptional<z.ZodString>;
        every: z.ZodOptional<z.ZodString>;
        occurrences: z.ZodOptional<z.ZodNumber>;
        onMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        onMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        onWeekDay: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    start: z.ZodString;
    timezone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_maintenance_window_schedule_response = z.infer<typeof Kibana_HTTP_APIs_maintenance_window_schedule_response>;
export declare const Kibana_HTTP_APIs_maintenance_window_schedule_request: z.ZodObject<{
    duration: z.ZodString;
    recurring: z.ZodOptional<z.ZodObject<{
        end: z.ZodOptional<z.ZodString>;
        every: z.ZodOptional<z.ZodString>;
        occurrences: z.ZodOptional<z.ZodNumber>;
        onMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        onMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        onWeekDay: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    start: z.ZodString;
    timezone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_maintenance_window_schedule_request = z.infer<typeof Kibana_HTTP_APIs_maintenance_window_schedule_request>;
export declare const Kibana_HTTP_APIs_maintenance_window_response: z.ZodObject<{
    created_at: z.ZodString;
    created_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enabled: z.ZodBoolean;
    id: z.ZodString;
    schedule: z.ZodObject<{
        custom: z.ZodObject<{
            duration: z.ZodString;
            recurring: z.ZodOptional<z.ZodObject<{
                end: z.ZodOptional<z.ZodString>;
                every: z.ZodOptional<z.ZodString>;
                occurrences: z.ZodOptional<z.ZodNumber>;
                onMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                onMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                onWeekDay: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
            start: z.ZodString;
            timezone: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    scope: z.ZodOptional<z.ZodObject<{
        alerting: z.ZodObject<{
            query: z.ZodObject<{
                kql: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        disabled: "disabled";
        running: "running";
        upcoming: "upcoming";
        finished: "finished";
        archived: "archived";
    }>;
    title: z.ZodString;
    updated_at: z.ZodString;
    updated_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_maintenance_window_response = z.infer<typeof Kibana_HTTP_APIs_maintenance_window_response>;
export declare const Kibana_HTTP_APIs_new_maintenance_window: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    schedule: z.ZodObject<{
        custom: z.ZodObject<{
            duration: z.ZodString;
            recurring: z.ZodOptional<z.ZodObject<{
                end: z.ZodOptional<z.ZodString>;
                every: z.ZodOptional<z.ZodString>;
                occurrences: z.ZodOptional<z.ZodNumber>;
                onMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                onMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                onWeekDay: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
            start: z.ZodString;
            timezone: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    scope: z.ZodOptional<z.ZodObject<{
        alerting: z.ZodObject<{
            query: z.ZodObject<{
                kql: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    title: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_maintenance_window = z.infer<typeof Kibana_HTTP_APIs_new_maintenance_window>;
//# sourceMappingURL=post_maintenance_window.d.ts.map