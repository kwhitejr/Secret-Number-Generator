'use strict';
module.exports = function() {

  var randomNumber = Math.floor(Math.random() * (1000001));
  return function() {

    // return the number, that was once random
    return randomNumber;

  };
};

/*
Alternative method

var secretNumber;

return function() {
  return secretNumber = secretNumber || Math.floor(Math.random() * 1000001);
};

*/