var assert = require('assert');
var longestWord = require('./../longestWord');
var Palindrome = require('./../1-Palindrome');
var ArithGeo = require('./../2-ArithGeo');
 
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
      assert.equal(true, Palindrome('race car'));
      assert.equal(true, Palindrome('three si x ninxis eer ht'));
    });
    it('should return false if not a valid palindrome', function(){
      assert.equal(false, Palindrome('houses'));
      assert.equal(false, Palindrome('radars'));
    });
  });


//2-ArithGeo
  describe('2. ArithGeo', function() {
    it('should return \'Arithmetic\' for an arithmetic sequence', function(){
      assert.equal('Arithmetic', ArithGeo([1,2,3,4]));
      assert.equal('Arithmetic', ArithGeo([11,22,33,44]));
      assert.equal('Arithmetic', ArithGeo([-8,-5,-2,1,4,7,10,13,16]));
    });
    it('should return \'Geometric\' for an geometric sequence', function(){
      assert.equal('Geometric', ArithGeo([1,2,4,8]));
      assert.equal('Geometric', ArithGeo([5,15,45,135,405]));
      assert.equal('Geometric', ArithGeo([-1,-2,-4,-8,-16]));
    });
     it('should return -1 for no sequence', function(){
      assert.equal(-1, ArithGeo([1,4,4,8]));
      assert.equal(-1, ArithGeo([5,15,45,135,405,500,501,530]));
      assert.equal(-1, ArithGeo([-1,-2,4,-8,16]));
      assert.equal(-1, ArithGeo([]));
    });

  });