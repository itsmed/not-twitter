const randomElement = require('./randomElement');
const randomWords = require('./randomWords');
const randomMessage = require('./randomMessage');
const generateRandomTweet = require('./generateRandomTweet');
let store = require('./setUpStore')

let newStore = {
  randomElement: randomElement,
  randomWords: randomWords,
  randomMessage: randomMessage,
  generateRandomTweet: generateRandomTweet
};

store = Object.assign({}, store, newStore);
module.exports = store;

