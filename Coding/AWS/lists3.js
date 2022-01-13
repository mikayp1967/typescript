var AwsS3 = require ('aws-sdk/clients/s3');
const s3 = new AwsS3 ({
  region: 'eu-west-2',
});

const listBuckets = (s3) => {
    s3.listBuckets(function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Buckets);
        }
    });
}
listBuckets(s3)
