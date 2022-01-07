# Running Resources

NODE12/Typescript version of my python running-resources lambda located at teh link below:
	https://github.com/mikayp1967/lambda/tree/master/running-resources

* Create lambda that list any chargable active resources  and potentially stops/deletes them
* Create SNS topic to send a report to
* Build it all with cloudformation
* Have a codebuild pipeline to create/destroy it all


## Completed

* Create basic Lambda function and permissions required to run
* Create SNS
  * Reference SNS
* Create Eventbridge Event to trigger the lambda


## To do
  
* Any functionality at all....
* Basic scanning of RDS resources
* Extend lambda code
  *  Find other resources (RDS, Snapshots, AMIs)       
* Codebuild pipeline to deploy it all
* Extend lambda code
  *  Find other resources (EIP, NGW, Unattached Volumes) - bored of this for now, not really the point anyway
  *  Filter out resources that have certain tags
  *  Allow invocation to stop resources (where applicable)
  *  Enable invocation to delete resources (where applicable)

## Instructions

You will need various permissions (trimmed version of following):

* AmazonS3FullAccess
* AWSLambda_FullAccess
* AmazonAPIGatewayAdministrator
* AWSCloudFormationFullAccess
* IAMFullAccess
* I think I had a load more since I did the above list so erm - all the permissions in the universe should do

These will change. For now this is how you deploy the lambda:

    export BUCKET=<aws bucket>
    git clone git@github.com:mikayp1967/lambda.git
    cd running-resources
    sam build                   # Do I need to do this?
    aws cloudformation package --template-file template.yaml --s3-bucket $BUCKET --output-template-file outputtemplate.yml
    aws cloudformation deploy --template-file outputtemplate.yml --capabilities CAPABILITY_IAM --stack-name running-res-ts


## References

* Building a lambda (not overly useful)
    - https://medium.com/@bdleecs95/building-an-aws-lambda-with-typescript-and-deploying-with-serverless-9e8c5e1cdfeb
* Handler/entrypoint
    - https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html


