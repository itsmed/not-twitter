/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */
// gather dependencies

let currentStore = require('./utils');
const randomElement = currentStore.randomElement;
const randomMessage = currentStore.randomMessage;
const words = currentStore.randomWords;
const generateRandomTweet = currentStore.generateRandomTweet;

const tweetControls = require('./tweetControls');
const addTweet = tweetControls.addTweet;

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

const utils = require('./utils');
const tweetContorls = require('./tweetControls')
let newStore = {
  utils: utils,
  tweetControls: tweetControls
};

let store = $.extend({}, newStore, currentStore);


module.exports = store;
