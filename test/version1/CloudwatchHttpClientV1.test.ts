let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CloudwatchController } from 'iqs-services-cloudwatch-node';
import { CloudwatchHttpServiceV1 } from 'iqs-services-cloudwatch-node';
import { ICloudwatchClientV1 } from '../../src/version1/ICloudwatchClientV1';
import { CloudwatchHttpClientV1 } from '../../src/version1/CloudwatchHttpClientV1';
import { CloudwatchClientFixtureV1 } from './CloudwatchClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('CloudwatchHttpClientV1', () => {
    let service: CloudwatchHttpServiceV1;
    let client: CloudwatchHttpClientV1;
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

        service = new CloudwatchHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-cloudwatch', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-cloudwatch', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CloudwatchHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CloudwatchClientFixtureV1(client);

        controller.open(null, null);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
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
