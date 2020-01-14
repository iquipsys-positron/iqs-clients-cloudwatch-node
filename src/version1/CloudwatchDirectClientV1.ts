import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICloudwatchClientV1 } from './ICloudwatchClientV1';

import { } from 'iqs-services-cloudwatch-node';

export class CloudwatchDirectClientV1 extends DirectClient<any> implements ICloudwatchClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-cloudwatch", "controller", "*", "*", "*"));

        if (config != null) {
            this.configure(ConfigParams.fromValue(config));
        }
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
    }

    public getLogGroups(correlationId: string, logGroupNamePrefix?: string, limit?: number,
        callback?: (err: any, result: string) => void) {
        let timing = this.instrument(correlationId, 'cloudwatch.get_log_groups');
        this._controller.getLogGroups(
            correlationId, logGroupNamePrefix, limit, (err, results) => {
                timing.endTiming();
                if (callback) callback(err, results);
            }
        );
    }

    public getLogStreams(correlationId: string, logGroupName: string, logStreamNamePrefix?: string, limit?: number,
        callback?: (err: any, result: string) => void) {
        let timing = this.instrument(correlationId, 'cloudwatch.get_log_streams');
        this._controller.getLogStreams(
            correlationId, logGroupName, logStreamNamePrefix, limit, (err, results) => {
                timing.endTiming();
                if (callback) callback(err, results);
            }
        );
    }

    public getLogEvents(correlationId: string, group: string, stream: string, startTime: Date, endTime: Date,
        filter: string, limit?: number, callback?: (err: any, results: string) => void): void {
        let timing = this.instrument(correlationId, 'cloudwatch.get_logs');
        this._controller.getLogEvents(
            correlationId, group, stream, startTime, endTime, filter, limit, (err, results) => {
                timing.endTiming();
                if (callback) callback(err, results);
            }
        );
    }

    public getMetricData(correlationId: string, namespace: string, startTime: Date, endTime: Date,
        period: number, type: string, unit: string, metric?: string, callback?: (err: any, result: string) => void): void {
        let timing = this.instrument(correlationId, 'cloudwatch.get_metrics');
        this._controller.getMetricData(
            correlationId, namespace, startTime, endTime, period, type, unit, metric, (err, results) => {
                timing.endTiming();
                if (callback) callback(err, results);
            }
        );
    }

}