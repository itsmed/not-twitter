'use strict';

// utility function for adding tweets to our data structures
const addTweet = function(newTweet, stream){
  var username = newTweet.user;
  stream.users[username].push(newTweet);
  stream.home.push(newTweet);
};

module.exports = addTweet;