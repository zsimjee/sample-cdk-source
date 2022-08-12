#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleCdkSourceStack } from '../lib/sample-cdk-source-stack';

const app = new cdk.App();
new SampleCdkSourceStack(app, 'SampleCdkSourceStack');