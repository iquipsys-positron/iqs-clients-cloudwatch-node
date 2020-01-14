"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CloudwatchDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor("iqs-services-cloudwatch", "controller", "*", "*", "*"));
        if (config != null) {
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
        }
    }
    configure(config) {
        super.configure(config);
    }
    getLogGroups(correlationId, logGroupNamePrefix, limit, callback) {
        let timing = this.instrument(correlationId, 'cloudwatch.get_log_groups');
        this._controller.getLogGroups(correlationId, logGroupNamePrefix, limit, (err, results) => {
            timing.endTiming();
            if (callback)
                callback(err, results);
        });
    }
    getLogStreams(correlationId, logGroupName, logStreamNamePrefix, limit, callback) {
        let timing = this.instrument(correlationId, 'cloudwatch.get_log_streams');
        this._controller.getLogStreams(correlationId, logGroupName, logStreamNamePrefix, limit, (err, results) => {
            timing.endTiming();
            if (callback)
                callback(err, results);
        });
    }
    getLogEvents(correlationId, group, stream, startTime, endTime, filter, limit, callback) {
        let timing = this.instrument(correlationId, 'cloudwatch.get_logs');
        this._controller.getLogEvents(correlationId, group, stream, startTime, endTime, filter, limit, (err, results) => {
            timing.endTiming();
            if (callback)
                callback(err, results);
        });
    }
    getMetricData(correlationId, namespace, startTime, endTime, period, type, unit, metric, callback) {
        let timing = this.instrument(correlationId, 'cloudwatch.get_metrics');
        this._controller.getMetricData(correlationId, namespace, startTime, endTime, period, type, unit, metric, (err, results) => {
            timing.endTiming();
            if (callback)
                callback(err, results);
        });
    }
}
exports.CloudwatchDirectClientV1 = CloudwatchDirectClientV1;
//# sourceMappingURL=CloudwatchDirectClientV1.js.map