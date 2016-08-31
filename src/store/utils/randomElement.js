// utility function
module.exports = function randomElement(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};