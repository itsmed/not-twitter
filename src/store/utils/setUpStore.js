'use strict';

// set up data structures, flags and create fake tweets
let store ={};

store.isLoggedIn = false;
store.streamFrom = 'home';
store.streams = {};
store.streams.home = [];
store.streams.users = {};
store.streams.users.shawndrost = [];
store.streams.users.sharksforcheap = [];
store.streams.users.mracus = [];
store.streams.users.douglascalhoun = [];
store.users = Object.keys(store.streams.users);

store.randomWords = require('./randomWords');
store.randomMessage = require('./randomMessage');
store.randomElement = require('./randomElement');
store.generateRandomTweet = require('./generateRandomTweet');
module.exports = store;