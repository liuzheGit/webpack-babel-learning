import config from './config.json'
module.exports = function(){
  var greet = document.createElement('div');
  // greet.textContent = config.greetText;
  greet.textContent = config.text;
  return greet;
}