console.log('JS loaded!');

require('dotenv').config();

var request = require('request');

var artist;

//function getArtWork()
var getArtWork = function(){
request("http://www.europeana.eu/api/v2/search.json?wskey=" + process.env.key + "standard", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    artist = JSON.parse(body);
  console.log("This piece of art (image) " + artist.items[6].edmPreview + " is located in " + artist.items[6].country)
  }
})
}

getArtWork();
module.exports = {
getArtWork: getArtWork
}


