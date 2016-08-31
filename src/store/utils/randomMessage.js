'use strict';

const words = require('./randomWords');
const randomElement = require('./randomElement');

const randomMessage = function(){
  return [randomElement(words.opening), randomElement(words.verbs), randomElement(words.objects), randomElement(words.nouns), randomElement(words.tags)].join(' ');
};

module.exports = randomMessage;