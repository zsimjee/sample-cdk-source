#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleCdkSourceStack } from '../lib/sample-cdk-source-stack';

console.info(`AWS_PROFILE: ${process.env.AWS_PROFILE}`);
console.info(`AWS_ACCOUNT_ID: ${process.env.AWS_ACCOUNT_ID}`);
console.info(`AWS_REGION: ${process.env.AWS_REGION}`);
console.info(`CDK_DEFAULT_ACCOUNT: ${process.env.CDK_DEFAULT_ACCOUNT}`);
console.info(`CDK_DEFAULT_REGION: ${process.env.CDK_DEFAULT_REGION}`);

const app = new cdk.App();
new SampleCdkSourceStack(app, 'SampleCdkSourceStack');

// , {
//   env: { 
//     account: process.env.CDK_DEFAULT_ACCOUNT, 
//     region: process.env.CDK_DEFAULT_REGION
//   }
// }