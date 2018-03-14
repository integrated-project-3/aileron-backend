const https = require('https');

const request = {
  host: 'gcu.ideagen-development.com',
  path: '/Timeline/GetTimelines',
  method: 'GET',
  headers: {
    TenantId: 'Team19',
    AuthToken: '7cbc5c61-bcfa-47d8-a171-599616102147'
  }
};

exports.handler = (event, context, callback) => {

  https.get(request, (response) => {

    let body = '';

    response.on('data', data => {
      body += data;
    });

    response.on('end', () => {
      var timelines = [];

      var parsedBody = JSON.parse(body)

      for (var i = 0; i < parsedBody.length; i++) {
        var item = parsedBody[i];
        timelines.push(item);
      }

      callback(null, timelines);
    });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
      callback(err.message);
    });

};
