var _ = require('lodash');

var localEnvVars = {
  TITLE:      'musee_app',
  SAFE_TITLE: 'musee_app',
  SESSION_SECRET: 'thesecretthatreallyisasecret',
  TOKEN_SECRET:   'anotheronethatreallyisasecret'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
