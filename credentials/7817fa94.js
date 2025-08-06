var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

module.exports = {
// {fact rule=hardcoded-credentials@v1.0 defects=1}
  secret: 'ckpzpxnw',
// {/fact}
  name: 'nodercmsSid',
  cookie: {
    httpOnly: false
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  }),
  resave: false,
  saveUninitialized: false
};