import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { CloudwatchNullClientV1 } from '../version1/CloudwatchNullClientV1';
import { CloudwatchDirectClientV1 } from '../version1/CloudwatchDirectClientV1';
import { CloudwatchHttpClientV1 } from '../version1/CloudwatchHttpClientV1';

export class CloudwatchClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-cloudwatch', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-cloudwatch', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-cloudwatch', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-cloudwatch', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(CloudwatchClientFactory.NullClientV1Descriptor, CloudwatchNullClientV1);
		this.registerAsType(CloudwatchClientFactory.DirectClientV1Descriptor, CloudwatchDirectClientV1);
		this.registerAsType(CloudwatchClientFactory.HttpClientV1Descriptor, CloudwatchHttpClientV1);
	}
	
}
