import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import * as rename_s3 from '@aws-cdk/aws-s3';
import {Bucket} from '@aws-cdk/aws-s3';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    // {fact rule=insecure-cookie@v1.0 defects=1}
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucket = new s3.Bucket(this, 's3-bucket-bad')
    // {/fact}

    // {fact rule=insecure-cookie@v1.0 defects=0}
    // ok:aws-cdk-bucket-enforcessl
    const AnotherGoodBucket = new s3.Bucket(this, 's3-bucket', {
      enforceSSL: true
    })
    // {/fact}

    // {fact rule=insecure-cookie@v1.0 defects=1}
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucket2 = new s3.Bucket(this, 's3-bucket-bad', {
      enforceSSL: false
     })

    // {fact rule=insecure-cookie@v1.0 defects=1}
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucketRenamed = new rename_s3.Bucket(this, 's3-bucket-bad')
    // {/fact}

    // {fact rule=insecure-cookie@v1.0 defects=0}
    // ok:aws-cdk-bucket-enforcessl
    const AnotherGoodBucketRenamed = new rename_s3.Bucket(this, 's3-bucket', {
      enforceSSL: true
    })
    // {/fact}

    // {fact rule=insecure-cookie@v1.0 defects=1}
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucket2Renamed = new rename_s3.Bucket(this, 's3-bucket-bad', {
      enforceSSL: false
     })
    // {/fact}
    
    // {fact rule=insecure-cookie@v1.0 defects=1}
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucketDirect = new Bucket(this, 's3-bucket-bad')
    // {/fact}
        
    // {fact rule=insecure-cookie@v1.0 defects=0}
    // ok:aws-cdk-bucket-enforcessl
    const AnotherGoodBucketDirect = new Bucket(this, 's3-bucket', {
      enforceSSL: true
    })
    // {/fact}

    // {fact rule=insecure-cookie@v1.0 defects=1}
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucket2Direct = new Bucket(this, 's3-bucket-bad', {
      enforceSSL: false
    })
    // {/fact}
  }
}
