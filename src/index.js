'use strict';

const utils = require('./store');
console.log('this is the store but I called it utils', utils);
module.exports = $(document).ready(function(){
  var $tweets = $('#tweets');
  $tweets.html('');
  var index = utils.streams.home.length - 1;
  while(index >= 0){
    var tweet = utils.streams[utils.streamFrom][index];
    var $tweet = $('<div></div>');
    var $text = $('<p></p>');
    $text.text('@' + tweet.user + ': ' + tweet.message);
    var $createdAt = $('<p></p>');
    $createdAt.text('created at: ' + tweet.created_at);
    $text.appendTo($tweet);
    $createdAt.appendTo($tweet);
    $tweet.appendTo($tweets);
    index -= 1;
  }
  $('abbr.timeago').timeago();

});