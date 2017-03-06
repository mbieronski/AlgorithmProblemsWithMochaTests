var assert = require('assert');
var longestWord = require('./../longestWord');
var Palindrome = require('./../1-Palindrome');

 
//Longest Word
  describe('longestWord', function() {
    it('should return longest word', function() {
      assert.equal('this', longestWord('this is'));
      assert.equal('further', longestWord('this is further than once'));
    });
    it('should return the first word if there are two longest words', function(){
    	assert.equal('toast', longestWord('it is toast a great cat'));
    	assert.equal('five', longestWord('two five four nine goat'));
    });
  });


//1-Palindrome
  describe('1. Palindrome', function() {
    it('should return true if valid palindrome', function(){
      assert.equal(true, Palindrome('racecar'));
    });
    it('should return false if not a valid palindrome', function(){
      assert.equal(false, Palindrome('houses'));
    });
  });
