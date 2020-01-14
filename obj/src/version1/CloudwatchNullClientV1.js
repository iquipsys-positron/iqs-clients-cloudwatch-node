"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CloudwatchNullClientV1 {
    getLogGroups(correlationId, logGroupNamePrefix, limit, callback) {
        if (callback)
            callback(null, null);
    }
    getLogStreams(correlationId, logGroupName, logStreamNamePrefix, limit, callback) {
        if (callback)
            callback(null, null);
    }
    getLogEvents(correlationId, group, stream, startTime, endTime, filter, limit, callback) {
        if (callback)
            callback(null, null);
    }
    getMetricData(correlationId, namespace, startTime, endTime, period, type, unit, metric, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.CloudwatchNullClientV1 = CloudwatchNullClientV1;
//# sourceMappingURL=CloudwatchNullClientV1.js.map