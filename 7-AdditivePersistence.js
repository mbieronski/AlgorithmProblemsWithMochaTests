// Have the function AdditivePersistence(num) take the num parameter being passed which will
// always be a positive integer and return its additive persistence which is the number of times
// you must add the digits in num until you reach a single digit. For example: if num is 2718
// then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 




function AdditivePersistence(num){
    var total = 0;
    var singleDigit = false;
    var addP = 0;
    
    //  Turns integer num into array of strings
    var numArray = num.toString().split("");
    
    // Turns each string in num array back into integers
    for (i = 0; i <numArray.length; i++) { // switch to i= thing
        numArray[i] = parseInt(numArray[i]);
    }
    
    if (numArray.length === 1) {
        return 0;
    }
    
    while (singleDigit === false) {
        
        for (i=0; i < numArray.length; i++) {
            total = total + numArray[i];
            
        }

        
        
        if (total > 10) {
            numArray = total.toString().split("");
                for (i = 0; i <numArray.length; i++) {
                    numArray[i] = parseInt(numArray[i]);
                }
            total = 0;
            addP++;
        }
        
        else if (total <= 9) {
            singleDigit = true;
            addP++;
        }
        
    }

    return addP;

}


module.exports = AdditivePersistence;
