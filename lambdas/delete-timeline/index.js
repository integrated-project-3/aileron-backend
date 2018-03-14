const axios = require('axios');

exports.handler = (event, context, callback) => {

  var body = JSON.parse(event.body);

  axios.put('https://gcu.ideagen-development.com/Timeline/Delete', {
    TenantId: 'Team19',
    AuthToken: '7cbc5c61-bcfa-47d8-a171-599616102147',
    TimelineId: body.TimelineId
  }).then((resp) => {
    var response = {
      statusCode: resp.status,
      body: resp.data
    };
    callback(null, response);
  })
  .catch(error => {
    console.log(error);
    callback(error);
  });

};
