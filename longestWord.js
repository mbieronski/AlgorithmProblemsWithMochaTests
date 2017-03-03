// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

var longestWord = "";
var longestWordLength = 0;
var tempWord = "";
var tempWordLength = 0;
    
function LongestWord(sen) {

    for(i=0; i < sen.length; i++) {
        if(sen[i] === " " && tempWordLength > longestWordLength){
            longestWord = tempWord;
            longestWordLength = tempWordLength;
            tempWord = "";
            tempWordLength = 0;
        }
        else if(sen[i] === " " && tempWordLength < longestWordLength) {
            tempWord = "";
            tempWordLength = 0;
        }
        else if(sen[i] === " " && tempWordLength === longestWordLength) {
            tempWord = "";
            tempWordLength = 0;
        }
        else {
            tempWord += sen[i];
            tempWordLength++;
        }
        
    } // bleh bleh
return longestWord;
}

LongestWord("Toast is the best fluffiest fooffiest cat in the whole world");