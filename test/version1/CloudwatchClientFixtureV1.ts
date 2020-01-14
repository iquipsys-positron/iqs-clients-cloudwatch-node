let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { ICloudwatchClientV1 } from '../../src/version1/ICloudwatchClientV1';
import { CloudwatchUnit } from "iqs-services-cloudwatch-node"

export class CloudwatchClientFixtureV1 {
    private _client: ICloudwatchClientV1;

    constructor(client: ICloudwatchClientV1) {
        this._client = client;
    }

    public testGetLogGroups(done) {
        let namePrefix = "iqs";
        let limit = 1;

        this._client.getLogGroups(null, namePrefix, limit, (err, data) => {
            assert.isNull(err);
            done();
        });
    }

    public testGetLogStreams(done) {
        let group = "iqs-services-components-node"
        let namePrefix = "iqs";
        let limit = 1;

        this._client.getLogStreams(null, group, namePrefix, limit, (err, data) => {
            assert.isNull(err);
            done();
        });
    }

    public testGetLogEvents(done) {
        let group = "iqs-services-components-node";
        let stream = "iqs-services-components";
        let startTime = new Date("2018-10-04T00:34:55.190Z");
        let endTime = new Date("2018-10-04T02:34:55.190Z");
        let filter = "ERROR";
        let limit = 5;

        this._client.getLogEvents(null, group, stream, startTime, endTime, filter, limit, (err) => {
            assert.isNull(err);
            done();
        });
    }

    public testGetMetricData(done) {
        let namespace = "iqs-services-components";
        let startTime = new Date("2018-10-04T00:34:55.190Z");
        let endTime = new Date("2018-10-04T02:34:55.190Z");
        let period = 300;
        let type = "Average";
        let unit = CloudwatchUnit.Milliseconds;
        let metric = null;

        this._client.getMetricData(null, namespace, startTime, endTime, period, type, unit, metric, (err) => {
            assert.isNull(err);
            done();
        });
    }

}
