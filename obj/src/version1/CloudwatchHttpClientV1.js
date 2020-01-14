"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CloudwatchHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super("v1/cloudwatch");
        if (config != null) {
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
        }
    }
    getLogGroups(correlationId, logGroupNamePrefix, limit, callback) {
        this.callCommand('get_log_groups', correlationId, {
            name_prefix: logGroupNamePrefix,
            limit: limit
        }, callback);
    }
    getLogStreams(correlationId, logGroupName, logStreamNamePrefix, limit, callback) {
        this.callCommand('get_log_streams', correlationId, {
            group: logGroupName,
            name_prefix: logStreamNamePrefix,
            limit: limit
        }, callback);
    }
    getLogEvents(correlationId, group, stream, startTime, endTime, filter, limit, callback) {
        this.callCommand('get_logs', correlationId, {
            group: group,
            stream: stream,
            start_time: startTime,
            end_time: endTime,
            filter: filter,
            limit: limit
        }, callback);
    }
    getMetricData(correlationId, namespace, startTime, endTime, period, type, unit, metric, callback) {
        this.callCommand('get_metrics', correlationId, {
            namespace: namespace,
            start_time: startTime,
            end_time: endTime,
            period: period,
            type: type,
            unit: unit,
            metric: metric
        }, callback);
    }
}
exports.CloudwatchHttpClientV1 = CloudwatchHttpClientV1;
//# sourceMappingURL=CloudwatchHttpClientV1.js.map