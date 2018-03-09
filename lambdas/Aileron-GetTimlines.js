const https = require('https');

const req = {
  host: 'gcu.ideagen-development.com',
  path: '/Timeline/GetTimelines',
  method: 'GET',
  headers: {
    TenantId: 'Team19',
    AuthToken: '7cbc5c61-bcfa-47d8-a171-599616102147'
  }
};

exports.handler = (event, context, callback) => {
    https.get(req, (resp) => {

    let body = '';

    resp.on('data', data => {
      body += data;
    });

    resp.on('end', () => {
      callback(null, body);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    callback(err, null);
  });
};
