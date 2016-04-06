require('dotenv').config();
var Search = require("../models/search");

var request = require('request');

var art;

//||||||||||||||||||||||||||--
// GET ARTWORK
//||||||||||||||||||||||||||--

// var artShow = function(req, res, next){
//   var id = req.params.id;

//   Search.findById(id, function(err, arts){
//     if (err) {
//       res.send(err);
//     }
//     // return that art as JSON
//     res.json(arts);
//   });
// };

var artIndex = function(req, res) {
  var query = {};
  if (req.query.author) {
    query = {
      author: new RegExp(req.query.author, "i")
    };
  }

  Search.find(query, function(err, arts) {
    if (err) {
      res.send("This is the error from search.js",err);
    }
    // return the art
    res.json(arts);
    console.log("first test", arts)
  });
}
module.exports = {
artIndex: artIndex
}


