#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleCdkSourceStack } from '../lib/sample-cdk-source-stack';

console.info(`Launching Stack in account ${process.env.CDK_DEFAULT_ACCOUNT} and region ${process.env.CDK_DEFAULT_REGION}.`)

const app = new cdk.App();
new SampleCdkSourceStack(app, 'SampleCdkSourceStack', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION
  }
});