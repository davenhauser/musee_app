var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var searchSchema = new mongoose.Schema({
  author:    {type: String, index: true},
  borndied:  String,
  title:     {type: String, index: true},
  date:      String,
  technique: String,
  location:  String,
  image_url: String,
  form:      String,
  type:      String,
  school:    String,
  timeframe: String

}, {collection : 'artworks'});

// add bcrypt hashing to model (works on a password field)!
searchSchema.plugin(require('mongoose-bcrypt'));

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;
