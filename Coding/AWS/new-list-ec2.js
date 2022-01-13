// Load the SDK for JavaScript
var AWS = require('aws-sdk');


// Create EC2 service object
var ec2 = new AWS.EC2({
  region: 'eu-west-2',
});

var params = {
  DryRun: false,
  InstanceId: ['']
};

// call EC2 to retrieve policy for selected bucket
ec2.describeInstances(params, function(err, data) {
  if (err) {
    console.log("Error", err.stack);
  } else {
    console.log("Success", JSON.stringify(data.Reservations[0].Instances[0]));
  }
});
