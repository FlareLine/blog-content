#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Stack } from './stack';
require('dotenv').config();

let stackId = process.env.STACK_ID || 'My-Stack';

const app = new cdk.App();
new Stack(app, stackId);