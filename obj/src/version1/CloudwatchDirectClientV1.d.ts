import { ConfigParams } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { ICloudwatchClientV1 } from './ICloudwatchClientV1';
export declare class CloudwatchDirectClientV1 extends DirectClient<any> implements ICloudwatchClientV1 {
    constructor(config?: any);
    configure(config: ConfigParams): void;
    getLogGroups(correlationId: string, logGroupNamePrefix?: string, limit?: number, callback?: (err: any, result: string) => void): void;
    getLogStreams(correlationId: string, logGroupName: string, logStreamNamePrefix?: string, limit?: number, callback?: (err: any, result: string) => void): void;
    getLogEvents(correlationId: string, group: string, stream: string, startTime: Date, endTime: Date, filter: string, limit?: number, callback?: (err: any, results: string) => void): void;
    getMetricData(correlationId: string, namespace: string, startTime: Date, endTime: Date, period: number, type: string, unit: string, metric?: string, callback?: (err: any, result: string) => void): void;
}
