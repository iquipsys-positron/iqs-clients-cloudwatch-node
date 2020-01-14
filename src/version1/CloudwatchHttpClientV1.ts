import { ConfigParams } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';


import { ICloudwatchClientV1 } from './ICloudwatchClientV1';

export class CloudwatchHttpClientV1 extends CommandableHttpClient implements ICloudwatchClientV1 {

    public constructor(config?: any) {
        super("v1/cloudwatch");

        if (config != null) {
            this.configure(ConfigParams.fromValue(config));
        }
    }

    public getLogGroups(correlationId: string, logGroupNamePrefix?: string, limit?: number,
        callback?: (err: any, result: string) => void) {
            this.callCommand(
                'get_log_groups',
                correlationId,
                {
                    name_prefix: logGroupNamePrefix,
                    limit: limit
                },
                callback
            );
    }

    public getLogStreams(correlationId: string, logGroupName: string, logStreamNamePrefix?: string, limit?: number,
        callback?: (err: any, result: string) => void) {
            this.callCommand(
                'get_log_streams',
                correlationId,
                {
                    group: logGroupName,
                    name_prefix: logStreamNamePrefix,
                    limit: limit
                },
                callback
            );
    }

    public getLogEvents(correlationId: string, group: string, stream: string, startTime: Date, endTime: Date,
        filter: string, limit?: number, callback?: (err: any, results: string) => void): void {
        this.callCommand(
            'get_logs',
            correlationId,
            {
                group: group,
                stream: stream,
                start_time: startTime,
                end_time: endTime,
                filter: filter,
                limit: limit
            },
            callback
        );
    }

    public getMetricData(correlationId: string, namespace: string, startTime: Date, endTime: Date,
        period: number, type: string, unit: string, metric?: string, callback?: (err: any, result: string) => void): void {
        this.callCommand(
            'get_metrics',
            correlationId,
            {
                namespace: namespace,
                start_time: startTime,
                end_time: endTime,
                period: period,
                type: type,
                unit: unit,
                metric: metric
            },
            callback
        );
    }

}