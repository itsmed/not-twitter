
'use strict';

const store = require('./store');

module.exports = $(document).ready(function(){
  var $tweets = $('#tweets');
  $tweets.html('');

  var index = store.streams.home.length - 1;
  while(index >= 0){
    var tweet = store.streams.home[index];
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