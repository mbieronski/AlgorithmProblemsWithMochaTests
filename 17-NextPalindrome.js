// Have the function NextPalindrome(num) take the num 
// parameter being passed and return the next largest 
// palindromic number. The input can be any positive integer. 
// For example: if num is 24, then your program should return 
// 33 because that is the next largest number that is a 
// palindrome. 


//change
function NextPalindrome(num) {

    var reversedNum = [];
    
    // function to reverse string
    function reverse(x) {
        reversedNum = [];
        
        // turn integer to array of strings
        x = x.toString();
        x = x.split("");
        
        // reverse array
        for (var i = 0; i < x.length; i++) {
            reversedNum[i] = x[x.length-1-i];
        }
        
        // join array back into one string and turn into integer
        reversedNum = reversedNum.join("");
        reversedNum = parseInt(reversedNum);

    }

    reverse(num);
    
    if (num < 9) {
        return num + 1;
    }
    
    else if (num === reversedNum) {
        num = num + 1;
    }
    
    while (num !== reversedNum) {
        num = num + 1;
        reverse(num);
    }
    
    return num;
}



module.exports = NextPalindrome;