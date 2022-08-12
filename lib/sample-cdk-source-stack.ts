import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CfnParameter } from 'aws-cdk-lib';

export class SampleCdkSourceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queueName = new CfnParameter(this, 'QueueName', {
      description: 'The name for the queue that will be created in this stack',
      type: 'String'
    });
    const visibilityTimeout = new CfnParameter(this, 'VisibilityTimeout', {
      description: 'The visibility timeout for the queue in seconds',
      type: 'Number',
      default: 30
    });
    
    const queue = new sqs.Queue(this, 'SampleCdkSourceQueue', {
      queueName: queueName.valueAsString,
      visibilityTimeout: cdk.Duration.seconds(visibilityTimeout.valueAsNumber)
    });
  }
}
