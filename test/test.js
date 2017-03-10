var assert = require('assert');
var longestWord = require('./../longestWord');
var Palindrome = require('./../1-Palindrome');
var ArithGeo = require('./../2-ArithGeo');
var LetterCountI = require('./../3-LetterCountI');
var SecondGreatLow = require('./../4-SecondGreatLow');
var DashInsert = require('./../5-DashInsert');
var PowersofTwo = require('./../6-PowersofTwo');
var AdditivePersistence = require('./../7-AdditivePersistence');
var MultiplicativePersistence = require('./../8-MultiplicativePersistence');
var ChangingSequence = require('./../9-ChangingSequence');
var Superincreasing = require('./../10-Superincreasing');
var HammingDistance = require('./../11-HammingDistance');
 
//Longest Word
  // describe('longestWord', function() {
  //   it('should return longest word', function() {
  //     assert.equal('this', longestWord('this is'));
  //     assert.equal('further', longestWord('this is further than once'));
  //   });
  //   it('should return the first word if there are two longest words', function(){
  //   	assert.equal('toast', longestWord('it is toast a great cat'));
  //   	assert.equal('five', longestWord('two five four nine goat'));
  //   });
  // });


//1-Palindrome
  describe('1. Palindrome', function() {
    it('should return true if valid palindrome', function(){
      assert.equal("true", Palindrome('racecar'));
      assert.equal("true", Palindrome('race car'));
      assert.equal("true", Palindrome('three si x ninxis eer ht'));
      assert.equal("true", Palindrome('g'));
    });
    it('should return false if not a valid palindrome', function(){
      assert.equal("false", Palindrome('houses'));
      assert.equal("false", Palindrome('radars'));
      assert.equal("false", Palindrome(''));
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


  //3-LetterCountI
  describe('3. LetterCountI', function() {
    it('should return word with most repeated letters', function(){
      assert.equal('freeze', LetterCountI('wow, I didnt think that would freeze'));
      assert.equal('repeat', LetterCountI('this is a repeat'));
      assert.equal('moo', LetterCountI('moo moo cow'));
    });
    it('should return the first word if more than one word have the same number of repeated letters', function(){
      assert.equal('look', LetterCountI('look, theres popcorn'));
      assert.equal('unsure', LetterCountI('also, I am unsure about that'));
    });
    it('should return -1 if there are no repeated letters', function(){
      assert.equal(-1, LetterCountI('also this one is not the same'));
      assert.equal(-1, LetterCountI('if it does not work then you must try another way'));
      assert.equal(-1, LetterCountI(''));
    });
  });

  //4-SecondGreatLow
  describe('4. SecondGreatLow', function() {
    it('should return second lowest and second highest numbers from an array', function(){
      assert.equal('2 11', SecondGreatLow([2,5,1,8,6,4,23,11]));
      assert.equal('3 512', SecondGreatLow([45,3,555,100,0,512,78]));
      assert.equal('-3 5', SecondGreatLow([4,-3,19,5,-11]));
    });
    it('should handle duplicate numbers', function(){
      assert.equal('6 11', SecondGreatLow([2,6,2,7,9,16,11]));
      assert.equal('2 155', SecondGreatLow([175,66,2,175,155,8,1]));
    });
     it('should work when array.length === 2', function(){
      assert.equal('7 5', SecondGreatLow([5,7]));
      assert.equal('199 18', SecondGreatLow([199,18]));
    });
  });

  //5-DashInsert
  describe('5. DashInsert', function() {
    it('should insert dashes between two odd numbers in a string', function(){
      assert.equal('12345-78', DashInsert('1234578'));
      assert.equal('4403423-96', DashInsert('440342396'));
      assert.equal('1-1432', DashInsert('11432'));
      assert.equal('7-7', DashInsert('77'));
    });
    it('should insert dashes between all sets of two odd numbers in a string', function(){
      assert.equal('145-34403-1-7', DashInsert('1453440317'));
      assert.equal('1-36704283-1-367452121-1', DashInsert('13670428313674521211'));
    });
     it('should return input string if no dashes need to be inserted', function(){
      assert.equal('123456789', DashInsert('123456789'));
      assert.equal('0245689', DashInsert('0245689'));
    });
  });

  //6-PowersofTwo
  describe('6. PowersofTwo', function() {
    it('should return \'true\' if num is a power of two', function(){
      assert.equal('true', PowersofTwo(8));
      assert.equal('true', PowersofTwo(64));
      assert.equal('true', PowersofTwo(1));
      assert.equal('true', PowersofTwo(2048));
      assert.equal('true', PowersofTwo(2));
    });
    it('should return \'false\' if num is not a power of two', function(){
      assert.equal('false', PowersofTwo(7));
      assert.equal('false', PowersofTwo(3));
      assert.equal('false', PowersofTwo(130));
      assert.equal('false', PowersofTwo(34));
    });
  });

  //7-AdditivePersistence
  describe('7. AdditivePersistence', function() {
    it('should return the number of times required to reach a single digit', function(){
      assert.equal(0, AdditivePersistence(8));
      assert.equal(2, AdditivePersistence(64));
      assert.equal(2, AdditivePersistence(1093));
      assert.equal(1, AdditivePersistence(62));
      assert.equal(3, AdditivePersistence(8399));
    });
  });

  //8-MultiplicativePersistence
  describe('8. MultiplicativePersistence', function() {
    it('should return the number of times required to reach a single digit', function(){
      assert.equal(0, MultiplicativePersistence(8));
      assert.equal(2, MultiplicativePersistence(64));
      assert.equal(3, MultiplicativePersistence(1193));
      assert.equal(2, MultiplicativePersistence(62));
      assert.equal(4, MultiplicativePersistence(8399));
    });
  });

//9-ChangingSequence
  describe('9. ChangingSequence', function() {
    it('should return the last index of a increasing/decreasing sequence', function(){
      assert.equal(3, ChangingSequence([3,6,8,9,7,6,5]));
      assert.equal(1, ChangingSequence([7,8,5,4,3,2,1]));
      assert.equal(5, ChangingSequence([7,8,9,10,11,12,10]));
      assert.equal(1, ChangingSequence([1,5,3]));
      assert.equal(4, ChangingSequence([5,4,3,2,1,3,4]));
      assert.equal(1, ChangingSequence([10,9,11,13,44]));
      assert.equal(8, ChangingSequence([44,33,22,11,10,9,8,3,2,4,5,6,9]));
    });
    it('should return -1 if there is only a single sequence', function(){
      assert.equal(-1, ChangingSequence([3,6,8,9,10]));
      assert.equal(-1, ChangingSequence([11,9,5,3,1,0]));
      assert.equal(-1, ChangingSequence([1,3,5,8,9,11,23,57,99,1243]));
      assert.equal(-1, ChangingSequence([112,111,102,100,99,77,32,12,3,1]));
    });
  });

//10-Superincreasing
  describe('10. Superincreasing', function() {
    it('should return \'true\' if the array is a superincreasing sequence', function(){
      assert.equal('true', Superincreasing([3,6,11,21,59]));
      assert.equal('true', Superincreasing([0,4,6,13]));
      assert.equal('true', Superincreasing([1,3,8,23,57,199,1243]));
    });
    it('should return \'false\' if the array is not a superincreasing sequence', function(){
      assert.equal('false', Superincreasing([3,6,8,21,59]));
      assert.equal('false', Superincreasing([0,4,6,9]));
      assert.equal('false', Superincreasing([1,3,8,23,57,199,243]));
      assert.equal('false', Superincreasing([5,4,6,19]));
    });
  });   

//11-HammingDistance
  describe('11. HammingDistance', function() {
    it('should return the correct number of different characters', function(){
      assert.equal(2, HammingDistance(['tree', 'tr33']));
      assert.equal(4, HammingDistance(['therefore', 'thurrfour']));
      assert.equal(0, HammingDistance(['what', 'what']));
      assert.equal(1, HammingDistance(['wh4tev3r', 'whatev3r']));
      assert.equal(2, HammingDistance(['12345678', '14345778']));
      assert.equal(7, HammingDistance(['befores', 'against']));
    });
  }); 

