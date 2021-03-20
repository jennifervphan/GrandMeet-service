#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GrandMeetServiceStack } from '../lib/grand-meet-service-stack';

const app = new cdk.App();
new GrandMeetServiceStack(app, 'GrandMeetServiceStack');
