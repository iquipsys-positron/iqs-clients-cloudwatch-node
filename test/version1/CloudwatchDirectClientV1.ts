let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CloudwatchController } from 'iqs-services-cloudwatch-node';
import { ICloudwatchClientV1 } from '../../src/version1/ICloudwatchClientV1';
import { CloudwatchDirectClientV1 } from '../../src/version1/CloudwatchDirectClientV1';
import { CloudwatchClientFixtureV1 } from './CloudwatchClientFixtureV1';

suite('CloudwatchDirectClientV1', () => {
    let client: CloudwatchDirectClientV1;
    let fixture: CloudwatchClientFixtureV1;

    let AWS_REGION = process.env["AWS_REGION"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_REGION || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new CloudwatchController();
        controller.configure(ConfigParams.fromTuples(
            "connection.region", AWS_REGION,
            "credential.access_id", AWS_ACCESS_ID,
            "credential.access_key", AWS_ACCESS_KEY
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-cloudwatch', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        controller.open(null, null);

        client = new CloudwatchDirectClientV1();
        client.setReferences(references);

        fixture = new CloudwatchClientFixtureV1(client);

        client.open(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Get log groups', (done) => {
        fixture.testGetLogGroups(done);
    });

    test('Get log streams', (done) => {
        fixture.testGetLogStreams(done);
    });

    test('Get logs', (done) => {
        fixture.testGetLogEvents(done);
    });

    test('Get metrics', (done) => {
        fixture.testGetMetricData(done);
    });

});
