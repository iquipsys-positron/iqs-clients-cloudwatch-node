"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const CloudwatchNullClientV1_1 = require("../version1/CloudwatchNullClientV1");
const CloudwatchDirectClientV1_1 = require("../version1/CloudwatchDirectClientV1");
const CloudwatchHttpClientV1_1 = require("../version1/CloudwatchHttpClientV1");
class CloudwatchClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(CloudwatchClientFactory.NullClientV1Descriptor, CloudwatchNullClientV1_1.CloudwatchNullClientV1);
        this.registerAsType(CloudwatchClientFactory.DirectClientV1Descriptor, CloudwatchDirectClientV1_1.CloudwatchDirectClientV1);
        this.registerAsType(CloudwatchClientFactory.HttpClientV1Descriptor, CloudwatchHttpClientV1_1.CloudwatchHttpClientV1);
    }
}
exports.CloudwatchClientFactory = CloudwatchClientFactory;
CloudwatchClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-cloudwatch', 'factory', 'default', 'default', '1.0');
CloudwatchClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-cloudwatch', 'client', 'null', 'default', '1.0');
CloudwatchClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-cloudwatch', 'client', 'direct', 'default', '1.0');
CloudwatchClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-cloudwatch', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=CloudwatchClientFactory.js.map