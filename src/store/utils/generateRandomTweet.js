'use strict';
let store = require('./setUpStore');
const randomElement = require('./randomElement');
const randomMessage = require('./randomMessage');
const addTweet = require('../tweetControls/addTweet');

// generate random tweets on a random schedule
const generateRandomTweet = function(){
  let tweet = {};
  tweet.user = randomElement(store.users);
  tweet.message = randomMessage();
  tweet.created_at = $.timeago(new Date());
  addTweet(tweet, store.streams);
};

module.exports = generateRandomTweet;