import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as rename_s3  from '@aws-cdk/aws-s3';
import {Bucket} from '@aws-cdk/aws-s3';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // {fact rule=missing-authorization@v1.0 defects=1}
    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket1 = new s3.Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1.grantPublicAccess()
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=1}
    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket2 = new s3.Bucket(this, 'bucket')
    publicBucket2.grantPublicAccess()
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=0}
    // ok:awscdk-bucket-grantpublicaccessmethod
    const nonPublicBucketRenamed = new rename_s3.Bucket(this, 'bucket')
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=1}
    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket1Rename = new rename_s3.Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1Rename.grantPublicAccess()
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=1}
    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket2Rename = new rename_s3.Bucket(this, 'bucket')
    publicBucket2Rename.grantPublicAccess()
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=0}
    // ok:awscdk-bucket-grantpublicaccessmethod
    const nonPublicBucketRename = new rename_s3.Bucket(this, 'bucket')
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=1}
    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket1Direct = new Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1Direct.grantPublicAccess()
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=1}
    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket2Direct = new Bucket(this, 'bucket')
    publicBucket2Direct.grantPublicAccess()
    // {/fact}

    // {fact rule=missing-authorization@v1.0 defects=0}
    // ok:awscdk-bucket-grantpublicaccessmethod
    const nonPublicBucketDirect = new Bucket(this, 'bucket')
    // {/fact}
  }
}
