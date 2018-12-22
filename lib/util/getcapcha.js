// Dependencies
var request = require('request-promise');

// Includes
var settings = require('../../settings.json');

// Define
exports.func = function (sessionOnly) {
  
  return (sessionOnly ? {session: ''} : request.jar());
};
