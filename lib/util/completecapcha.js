// Dependencies
var request = require('request-promise');

// Includes
var settings = require('../../settings.json');

// Define
exports.func = function (Responses) {
  var options = {
      method: 'POST',
      uri: 'http://roblox-api.funcaptcha.com/fc/ca/',
      formData: Responses
    //,
      //headers: {
          /* 'content-type': 'multipart/form-data' */ // Is set automatically
      //}
  };
  json: true // Automatically stringifies the body to JSON
  return request(options).then(function (res){
    return res.body;
  };
};
