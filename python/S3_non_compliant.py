#{fact rule=sql-injection@v1.0 defects=1}
# FN in this case implies that 'Expression' parameter of S3 query APIs like 'select_object_content()' is not considered as sink by the rule.

import boto3
s3 = boto3.client('s3')

def lambda_handler(event, context):
    current_user = event["username"]

    # Noncompliant: Unsafe data from event is written into S3 Select query.
    sql_exp = "SELECT s.DateTime, s.Wind Speed, s.Wind Direction"\
            "FROM s3object s WHERE s.DateTime = '%s'" % current_user

    resp  = s3.select_object_content(
        Bucket="bucket_name",
        Key="key",
        ExpressionType='SQL',
        Expression=sql_exp,
        InputSerialization = {'CSV': {"FileHeaderInfo": 'None'}},
        OutputSerialization = {'CSV': {}},
    )

    return resp
#{/fact}