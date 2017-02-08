var request = require("request"); // Include the request lib - run npm install request
exports.handler = function(event, context, callback) {
	callback = context.done;
	var data = event.bodyJson || {};
	
	// Sets the username - replace username with your Medium Username
	var username = 'username'
	var url = "https://medium.com/@"+username+"/latest?format=json";
	
	// Make the request to Medium and return the Obj
	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
		// We need to pull out the text that comes thru from Medium for JSON hacking
		jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''));
	        console.log(jsonBody) // Print the json response
	        callback(null, jsonBody); // Return the JSON object back to our API call
	    }    
	});
};
