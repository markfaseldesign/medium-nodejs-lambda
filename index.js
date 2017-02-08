var request = require("request");
exports.handler = function(event, context, callback) {

	callback = context.done;
	var data = event.bodyJson || {};
	var username = 'username'
	var url = "https://medium.com/@"+username+"/latest?format=json";

	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
		
	    if (!error && response.statusCode === 200) {
		jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''));
	        console.log(jsonBody) // Print the json response
	        callback(null, jsonBody);
	    }
	    
	});
	
	
};
