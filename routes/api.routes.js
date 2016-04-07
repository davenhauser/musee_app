var express = require('express'),
     router  = new express.Router();

 // Require controllers.
 var usersCtrl = require('../controllers/users');
 var searchCtrl = require('../controllers/search')

 // Require token authentication.
 var token = require('../config/token_auth');

 // users resource paths:
 router.post('/users',    usersCtrl.create);
 router.get( '/users/me', token.authenticate, usersCtrl.me);

 router.post('/token',    token.create);

 // router.get('/searches/art', searchCtrl.getArtWork)

 //||||||||||||||||||||||||||--
// ARTWORK CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/searches',   searchCtrl.artIndex);
router.post('/artists',   searchCtrl.artistShow);
// router.get('/searches/:id',     searchCtrl.artShow);


 module.exports = router;
