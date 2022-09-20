import * as fs from 'fs';
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Tags } from 'aws-cdk-lib';

export interface SampleCdkSourceStackProps {
  queueName: string;
  visibilityTimeout: number;
}

export class SampleCdkSourceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SampleCdkSourceStackProps, stackProps?: cdk.StackProps) {
    super(scope, id, stackProps);

    const {
      queueName,
      visibilityTimeout
    } = props;
    
    const queue = new sqs.Queue(this, 'SampleCdkSourceQueue', {
      queueName: queueName,
      visibilityTimeout: cdk.Duration.seconds(visibilityTimeout)
    });

    const sourceVersion = fs.readFileSync(path.resolve(__dirname, '../.version')).toString().trim();
    Tags.of(this).add('ts_source_version', sourceVersion);
  }
}
