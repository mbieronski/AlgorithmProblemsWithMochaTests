// Have the function LetterCountI(str) take the str parameter being passed and return the first
// word with the greatest number of repeated letters. For example: "Today, is the greatest day
// ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which
// also has 2 e's. If there are no words with repeating letters return -1. Words will be separated
// by spaces. 


function LetterCountI(str){
    
    if (str === "") {
        return -1;
    }
    
    str = str.replace(/[^a-z|^ ]/g,"");
    
    str = (str.toLowerCase()).split(" ");
    var numbers = [];
    
    for (i=0; i < str.length; i++) {
        
        var word = {}
        
        for (x=0; x<str[i].length; x++) {
            if (word.hasOwnProperty(str[i][x]) ) {
                word[str[i][x]] += 1;
            }
            else {
                word[str[i][x]] = 1;
            }
        }
        
        var max = 0;
        
        for (y in word) {
            if (word[y] > max) {
                max = word[y];
            }
        }
        
        numbers.push(max);
        
    }
    
    var biggest = Math.max(...numbers);
    
    if (biggest === 1) {
        return -1;
    }
    
    return str[numbers.indexOf(biggest)]

}



module.exports = LetterCountI;