import { z } from 'zod';
export declare const Kibana_HTTP_APIs_schedule_request: z.ZodObject<{
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
export type Kibana_HTTP_APIs_schedule_request = z.infer<typeof Kibana_HTTP_APIs_schedule_request>;
export declare const PostAlertingRuleIdSnoozeScheduleRequest: z.ZodObject<{
    schedule: z.ZodObject<{
        custom: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PostAlertingRuleIdSnoozeScheduleRequest = z.infer<typeof PostAlertingRuleIdSnoozeScheduleRequest>;
export declare const PostAlertingRuleIdSnoozeScheduleResponse: z.ZodObject<{
    body: z.ZodObject<{
        schedule: z.ZodObject<{
            custom: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PostAlertingRuleIdSnoozeScheduleResponse = z.infer<typeof PostAlertingRuleIdSnoozeScheduleResponse>;
//# sourceMappingURL=post_alerting_rule_id_snooze_schedule.d.ts.map