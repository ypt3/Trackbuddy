// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var mongoose = require('mongoose');
// var Users = mongoose.model('Users');
//
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ usersname: usersname }, function (err, users) {
//       if (err) { return done(err); }
//       if (!users) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, users);
//     });
//   }
// ));
