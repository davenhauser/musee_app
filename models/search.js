var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var searchSchema = new mongoose.Schema({
  artworkName: { type: String, required: true, unique: true },
  country:  { type: String, required: true },
  artist:   { type: String, required: true },
  imageUrl:   { type: String, default: "/images/notfound.gif" }
});

// add bcrypt hashing to model (works on a password field)!
searchSchema.plugin(require('mongoose-bcrypt'));

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;
