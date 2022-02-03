const cowsay = require('cowsay');

module.exports.speak = str => cowsay.say({"text" : str});