require('dotenv').config();
var Search = require("../models/search");

var request = require('request');

var art;

//function getArtWork()
function getArtWork(req, res, next){

request({
  method: "GET",
  uri: "http://www.europeana.eu/api/v2/search.json?wskey=" + process.env.key + "standard",
}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var art = JSON.parse(response.body).items[0];
        console.log(art);
        } else if (error) {
        next(error);
          } else {
            var errObject = {
          message: "Unknown status code",
          status:  response.statusCode,
        }
      }
    });
}

getArtWork();

module.exports = {
getArtWork: getArtWork
}


