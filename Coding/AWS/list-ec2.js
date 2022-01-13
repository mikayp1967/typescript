var AWSEC2 = require ('aws-sdk/clients/ec2');
const ec2 = new AWSEC2 ({
  region: 'eu-west-2',
});

const listInstances = (ec2) => {
    ec2.describeInstances(function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success:", data.Reservations[0].Instances);
		console.log("Reservations: " + data.Reservations.length);
		console.log("Instances: " + data.Reservations[0].Instances.length);
	 //var instances = _.map(data.Reservations);
	 // var instances = _.map(data.Reservations, function(reservation){ return reservation.Instances; });
       //   instances = _.flatten(instances);
		// console.log("Instances:" + instances);
        }
    });
}
listInstances(ec2)
