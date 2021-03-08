import * as cdk from '@aws-cdk/core';
import { BlockPublicAccess, Bucket } from '@aws-cdk/aws-s3';
import * as s3Deploy from '@aws-cdk/aws-s3-deployment';

export class Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const contentBucket = new Bucket(this, 'BlogContentBucket', {
      bucketName: process.env.AWS_BLOG_CONTENT_BUCKET,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    const contentDeployment = new s3Deploy.BucketDeployment(this, 'BlogContentBucketDeployment', {
      sources: [ s3Deploy.Source.asset('../content') ],
      destinationBucket: contentBucket,
    });
  }
}