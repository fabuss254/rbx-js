// Dependencies
var request = require('request-promise');

// Includes
var settings = require('../../settings.json');

// Define
exports.func = function (sessionOnly) {
  var options = {
      method: 'POST',
      uri: 'https://roblox-api.funcaptcha.com/fc/gt2/public_key/9F35E182-C93C-EBCC-A31D-CF8ED317B996',
      formData: {
         bda: "W3sia2V5IjoiYXBpX3R5cGUiLCJ2YWx1ZSI6ImpzIn0seyJrZXkiOiJwIiwidmFsdWUiOjF9LHsia2V5IjoiZiIsInZhbHVlIjoiODFjNzA2ZWJmM2NmOWUwNGE1MTg2ZmY5YTM0MTM1ZGYifSx7ImtleSI6ImZlIiwidmFsdWUiOlsiRE5UOnVua25vd24iLCJMOmZyLUZSIiwiRDoyNCIsIlBSOjEiLCJTOjE5MjAsMTA4MCIsIkFTOjE5MjAsMTA1MCIsIlRPOi02MCIsIlNTOnRydWUiLCJMUzp0cnVlIiwiSURCOnRydWUiLCJCOmZhbHNlIiwiT0RCOnRydWUiLCJDUFVDOnVua25vd24iLCJQSzpXaW4zMiIsIkNGUDoxODcyMDg0NTQ2IiwiRlI6ZmFsc2UiLCJGT1M6ZmFsc2UiLCJGQjpmYWxzZSIsIkpTRjpBcmlhbCxBcmlhbCBCbGFjayxBcmlhbCBOYXJyb3csQ2FsaWJyaSxDYW1icmlhLENhbWJyaWEgTWF0aCxDb21pYyBTYW5zIE1TLENvbnNvbGFzLENvdXJpZXIsQ291cmllciBOZXcsR2VvcmdpYSxIZWx2ZXRpY2EsSW1wYWN0LEx1Y2lkYSBDb25zb2xlLEx1Y2lkYSBTYW5zIFVuaWNvZGUsTWljcm9zb2Z0IFNhbnMgU2VyaWYsTVMgR290aGljLE1TIFBHb3RoaWMsTVMgU2FucyBTZXJpZixNUyBTZXJpZixQYWxhdGlubyBMaW5vdHlwZSxTZWdvZSBQcmludCxTZWdvZSBTY3JpcHQsU2Vnb2UgVUksU2Vnb2UgVUkgTGlnaHQsU2Vnb2UgVUkgU2VtaWJvbGQsU2Vnb2UgVUkgU3ltYm9sLFRhaG9tYSxUaW1lcyxUaW1lcyBOZXcgUm9tYW4sVHJlYnVjaGV0IE1TLFZlcmRhbmEsV2luZ2RpbmdzIiwiUDpDaHJvbWUgUERGIFBsdWdpbixDaHJvbWUgUERGIFZpZXdlcixOYXRpdmUgQ2xpZW50IiwiVDowLGZhbHNlLGZhbHNlIiwiSDo0IiwiU1dGOmZhbHNlIl19LHsia2V5IjoiY3MiLCJ2YWx1ZSI6MX0seyJrZXkiOiJqc2JkIiwidmFsdWUiOiJ7XCJITFwiOjMsXCJOQ0VcIjp0cnVlLFwiREFcIjpudWxsLFwiRFJcIjpudWxsLFwiRE1UXCI6MjUsXCJET1wiOm51bGwsXCJET1RcIjoxMDR9In1d",
         public_key: "9F35E182-C93C-EBCC-A31D-CF8ED317B996",
         site: "https://www.roblox.com"
      }//,
      //headers: {
          /* 'content-type': 'multipart/form-data' */ // Is set automatically
      //}
  };
  json: true // Automatically stringifies the body to JSON
  return request(options).then(function (res){
    return JSON.parse(res.body);
  };
};
