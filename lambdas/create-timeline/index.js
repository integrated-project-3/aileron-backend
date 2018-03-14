const axios = require('axios');

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}

exports.handler = (event, context, callback) => {

  var body = JSON.parse(event.body);

  axios.put('https://gcu.ideagen-development.com/Timeline/Create', {
    TenantId: 'Team19',
    AuthToken: '7cbc5c61-bcfa-47d8-a171-599616102147',
    TimelineId: guid(),
    Title: body.Title
  }).then((resp) => {
    var response = {
      statusCode: resp.status,
      body: JSON.stringify(resp.data)
    };
    callback(null, response);
  })
  .catch(error => {
    console.log(error);
    callback(error);
  });

};
