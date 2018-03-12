const https = require('https');

const authToken = 'db79d35b-762a-4ec8-b74e-50517a18c724';

const validPaths = [
    "/Timeline/GetTimelines",
    "/Timeline/GetTimeline"
]

const validMethods = [
    "GET",
    "POST"
]

const request = {
  host: 'gcu.ideagen-development.com',
  path: '',
  method: '',
  headers: {
    TenantId: 'Team19',
    AuthToken: '7cbc5c61-bcfa-47d8-a171-599616102147'
  }
};

exports.handler = (event, context, callback) => {
    
    if (!event.auth === authToken) {
        callback("Unauthorized")
    }
    
    if (validPaths.indexOf(event.path) === -1) {
        callback("Invalid Path")
    }
    request.path = event.path;
    
    if (validMethods.indexOf(event.method) === -1) {
        callback("Invalid Method")
    }
    request.method = event.method;
    
    https.get(request, (response) => {

        let body = '';

        response.on('data', data => {
            body += data;
        });

        response.on('end', () => {
            callback(null, body);
        });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            callback(err.message);
  });
};