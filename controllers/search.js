require('dotenv').config();
var Search = require("../models/search");

var request = require('request');

var art;

//function getArtWork()
function getArtWork(req, res, next){
var baseUri = "http://www.europeana.eu/api/v2/search.json?",
wsKey = "wskey=" + process.env.key;

var uri = baseUri + wsKey;
uri += "&query=" + req.query.title; //difne input, i.e. picasso
console.log("gotta make this work", req.query.title)
uri +=  "&thumbnail=true&start=1&rows=100&profile=rich"

request({
  method: "GET",
  uri: uri
  }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(JSON.parse(response.body));
        // var art = JSON.parse(response.body).items[0];
        } else if (error) {
        next(error);
          } else {
            var errObject = {
          message: "Unknown status code",
          status:  response.statusCode
        }
      }
    });
}

// getArtWork();

module.exports = {
getArtWork: getArtWork
}


