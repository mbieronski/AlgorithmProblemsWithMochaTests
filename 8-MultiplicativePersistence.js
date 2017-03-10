// Have the function MultiplicativePersistence(num) take the num parameter being passed which
//  will always be a positive integer and return its multiplicative persistence which is the
// number of times you must multiply the digits in num until you reach a single digit.
// For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then
//  2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 



function MultiplicativePersistence(num){
    
    num = String(num).split("");
    
    if (num.length === 1) {
        return 0;
    }
    
    for (i=0; i < num.length; i++) {
        num[i] = parseInt(num[i]);
    }
    
    var isSingle = false;
    var mP = 0;
    
    while (isSingle === false) {
        
        var total = 1;
        
        if (num.length > 1) {
            
            for (i=0; i < num.length; i++) {
                total = total * num[i];
            }
            
            num = String(total).split("");

            for (i=0; i < num.length; i++) {
                num[i] = parseInt(num[i]);
            }
            
            //set count up 1
            mP++;

        }
        
        else {
            isSingle = true;
            return mP;
        }
        
    }

}



module.exports = MultiplicativePersistence;