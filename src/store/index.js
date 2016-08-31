/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
var store ={};
store.streams = {};
store.streams.home = [];
store.streams.users = {};
store.streams.users.shawndrost = [];
store.streams.users.sharksforcheap = [];
store.streams.users.mracus = [];
store.streams.users.douglascalhoun = [];
store.users = Object.keys(store.streams.users);

// utility function for adding tweets to our data structures
store.addTweet = function(newTweet){
  var username = newTweet.user;
  // console.log(newTweet);
  // store.streams.users[username].push(newTweet);
  store.streams.home.push(newTweet);
};

// utility function
store.randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
store.opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
store.verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
store.objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
store.nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
store.tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

store.randomMessage = function(){
  return [store.randomElement(store.opening), store.randomElement(store.verbs), store.randomElement(store.objects), store.randomElement(store.nouns), store.randomElement(store.tags)].join(' ');
};

// generate random tweets on a random schedule
store.generateRandomTweet = function(){
  var tweet = {};
  tweet.user = store.randomElement(store.users);
  tweet.message = store.randomMessage();
  tweet.created_at = $.timeago(new Date());
  store.addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  store.generateRandomTweet();
}

store.scheduleNextTweet = function(){
  store.generateRandomTweet();
  setTimeout(store.cheduleNextTweet, Math.random() * 1500);
};
store.scheduleNextTweet();

module.exports = store;
