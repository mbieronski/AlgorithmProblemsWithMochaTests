var assert = require('assert');
var longestWord = require('./../longestWord');

 
//Longest Word
  describe('longestWord', function() {
    it('should return longest word', function() {
      assert.equal('this', longestWord('this is'));
      assert.equal('further', longestWord('this is further than once'));
    });
    it('should return the first word if there are two longest words', function(){
    	assert.equal('toast', longestWord('it is toast a great cat'));
    });
  });
