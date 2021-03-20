#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Stack } from './stack';
require('dotenv').config();

const app = new cdk.App();
new Stack(app, 'Blog-Content-Stack');