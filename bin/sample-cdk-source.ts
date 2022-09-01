#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleCdkSourceStack } from '../lib/sample-cdk-source-stack';

const stackName = process.env.STACK_NAME || 'SampleCdkSourceStack';
const queueName = process.env.QueueName;
const visibilityTimeout = Number(process.env.VisibilityTimeout || 30);

const app = new cdk.App();
new SampleCdkSourceStack(app, stackName, {
  queueName,
  visibilityTimeout
}, {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION
  }
});
