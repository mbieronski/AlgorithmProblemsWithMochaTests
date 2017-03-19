var assert = require('assert');
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
//
var RectangleArea = require('./../12-RectangleArea');
var BitwiseOne = require('./../13-BitwiseOne');
var OtherProducts = require('./../14-OtherProducts');
var ArrayMatching = require('./../15-ArrayMatching');
var BinaryReversal = require('./../16-BinaryReversal');
var NextPalindrome = require('./../17-NextPalindrome');
var TwoSum = require('./../18-TwoSum');
var BitwiseTwo = require('./../19-BitwiseTwo');
var PowerSetCount = require('./../20-PowerSetCount');
var ProductDigits = require('./../21-ProductDigits');



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

//12-RectangleArea
  describe('12. RectangleArea', function() {
    it('should return the area of a given rectangle', function(){
      assert.equal(6, RectangleArea(["(0,0", "(3,0)", "(0,2)", "(3,2)"]));
      assert.equal(4, RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));
      assert.equal(1, RectangleArea(["(-1 -1)","(0 0)","(-1 0)","(0 -1)"]));
      assert.equal(64, RectangleArea(["(0 0)","(8 8)","(0 8)","(8 0)"]));
      assert.equal(15, RectangleArea(["(0 0)","(5 0)","(0 3)","(5 3)"]));
      assert.equal(1, RectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]));
    });
    
  });


//13-BitwiseOne
  describe('13. BitwiseOne', function() {
    it('should return the binary result of an OR operation', function(){
      assert.equal("1101", BitwiseOne(["1001", "0100"]));
      assert.equal("100", BitwiseOne(["100", "000"]));
      assert.equal("01011", BitwiseOne(["00011", "01010"]));
      assert.equal("1111111", BitwiseOne(["1111110","0000001"]));
      assert.equal("101010111", BitwiseOne(["101010101","000000011"]));
      assert.equal("000", BitwiseOne(["000","000"]));
      assert.equal("1", BitwiseOne(["0","1"]));
    });
    
  });

//14-OtherProducts
  describe('14. OtherProducts', function() {
    it('should return the products of all other elements in an array separated by a hyphen', function(){
      assert.equal("1-1-1", OtherProducts([1,1,1]));
      assert.equal("8-8-8-8", OtherProducts([2,2,2,2]));
      assert.equal("120-60-40-30-24", OtherProducts([1,2,3,4,5]));
      assert.equal("1368-342-228-72-456", OtherProducts([1,4,6,19,3]));
      assert.equal("1024-512-256-128-64", OtherProducts([1,2,4,8,16]));
      assert.equal("6-1", OtherProducts([1,6]));
      assert.equal("3-2-6-6", OtherProducts([2,3,1,1]));
    });
    
  });

//15-ArrayMatching
  describe('15. ArrayMatching', function() {
    it('should return the sums of elements in two arrays of the same length', function(){
      assert.equal("6-4-13-17", ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));
      assert.equal("2-20-24", ArrayMatching(["[1, 10, 12]", "[1, 10, 12]"]));
    });
    it('should return the sums of elements in two arrays of different lengths', function(){
      assert.equal("9-7-7-7", ArrayMatching(["[7, 7, 7, 7]", "[2]"]));
      assert.equal("7-4-6-10-6", ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]));
      assert.equal("3-3-6-2", ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]));
      assert.equal("3-1", ArrayMatching(["[2]", "[1, 1]"]));
      assert.equal("6-8-12-1-5-3", ArrayMatching(["[1, 2, 10]", "[5, 6, 2, 1, 5, 3]"]));
    });
    
  });


//16-BinaryReversal
  describe('16. BinaryReversal', function() {
    it('should return the decimal string of a reversed binary number from decimal input', function(){
      assert.equal("60296", BinaryReversal("4567"));
      assert.equal("39948", BinaryReversal("12345"));
      assert.equal("13796", BinaryReversal("10156"));
      assert.equal("244", BinaryReversal("47"));
      assert.equal("9226807", BinaryReversal("15487793"));
      assert.equal("128", BinaryReversal("1"));
      assert.equal("80", BinaryReversal("10"));
    });
    
  });

//17-NextPalindrome
  describe('17. NextPalindrome', function() {
    it('should return the next highest number that is a palindrome', function(){
      assert.equal(33, NextPalindrome(24));
      assert.equal(3, NextPalindrome(2));
      assert.equal(181, NextPalindrome(180));
      assert.equal(101, NextPalindrome(99));
      assert.equal(505, NextPalindrome(504));
      assert.equal(494, NextPalindrome(490));
      assert.equal(66, NextPalindrome(57));
    });
    
  });

//18-TwoSum
  describe('18. TwoSum', function() {
    it('should return the element pair(s) that add up to the first element', function(){
      assert.equal("5,2 -4,11", TwoSum([7, 3, 5, 2, -4, 8, 11]));
      assert.equal("5,4", TwoSum([9, 5, 4, 2, 6, 1]));
      assert.equal("6,1 4,3", TwoSum([7, 6, 4, 1, 7, -2, 3, 12]));
      assert.equal("6,11 10,7 15,2", TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]));
      assert.equal("12,9", TwoSum([21, 10, 12, 4, 6, 3, 3, 7, 8, 9]));
    });
    it('should return -1 if no pairs add up to the first element', function(){
      assert.equal(-1, TwoSum([6, 2]));
      assert.equal(-1, TwoSum([100, 90, 90, 90, 90, 11]));
    });
    
  });

//19-BitwiseTwo
  describe('19. BitwiseTwo', function() {
    it('should return the binary result of an AND operation', function(){
      assert.equal("00101", BitwiseTwo(["10111", "01101"]));
      assert.equal("000", BitwiseTwo(["100", "000"]));
      assert.equal("0", BitwiseTwo(["1","0"]));
      assert.equal("000000001", BitwiseTwo(["101010101","000000011"]));
      assert.equal("0100", BitwiseTwo(["1100","0111"]));
      assert.equal("0000", BitwiseTwo(["0011","1100"]));
      assert.equal("111", BitwiseTwo(["111","111"]));
    });
    
  });

//20-PowerSetCount
  describe('20. PowerSetCount', function() {
    it('should return the correct number of possible sets', function(){
      assert.equal(2, PowerSetCount([5]));
      assert.equal(4, PowerSetCount([1, 2]));
      assert.equal(8, PowerSetCount([7, 6, 4]));
      assert.equal(64, PowerSetCount([10, 11, 12, 13, 14, 15]));
      assert.equal(128, PowerSetCount([1, 2, 3, 4, 5, 6, 7]));
      assert.equal(256, PowerSetCount([1, 2, 3, 4, 5, 6, 7, 8]));
      assert.equal(512, PowerSetCount([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });
    
  });

//21-ProductDigits
  describe('21. ProductDigits', function() {
    it('should return the fewest number of digits you need to produce the input number via multiplication', function(){
      assert.equal(2, ProductDigits(24));
      assert.equal(3, ProductDigits(90));
      assert.equal(2, ProductDigits(6));
      assert.equal(3, ProductDigits(23));
      assert.equal(4, ProductDigits(5000));
      assert.equal(3, ProductDigits(79));
      assert.equal(2, ProductDigits(72));
    });  
  });