import { ConfigParams } from 'pip-services3-commons-node';

import { ICloudwatchClientV1 } from './ICloudwatchClientV1';

export class CloudwatchNullClientV1 implements ICloudwatchClientV1 {

    public getLogGroups(correlationId: string, logGroupNamePrefix?: string, limit?: number,
        callback?: (err: any, result: string) => void) {
        if (callback) callback(null, null);
    }

    public getLogStreams(correlationId: string, logGroupName: string, logStreamNamePrefix?: string, limit?: number,
        callback?: (err: any, result: string) => void) {
        if (callback) callback(null, null);
    }
    
    public getLogEvents(correlationId: string, group: string, stream: string, startTime: Date, endTime: Date,
        filter: string, limit?: number, callback?: (err: any, results: string) => void): void {
        if (callback) callback(null, null);
    }

    public getMetricData(correlationId: string, namespace: string, startTime: Date, endTime: Date,
        period: number, type: string, unit: string, metric?: string, callback?: (err: any, result: string) => void): void {
        if (callback) callback(null, null);
    }

}