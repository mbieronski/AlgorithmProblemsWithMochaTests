// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.


function DashInsert(str){
 
    str = str.split("");
    
    var isOdd = [];
    
    for (x in str) {

        if (str[x] === "1" || str[x] === "3" || str[x] === "5" || str[x] === "7" || str[x] === "9") {
            isOdd.push(true);
        }
        
        else {
            isOdd.push(false);
        }
        
    }
    
    var addNum = 1;
    
    for (i=0; i < isOdd.length; i++) {
        
        if (isOdd[i] === true && isOdd[i+1] === true) {
            str.splice(i+addNum, 0, "-");
            addNum = addNum+1;
        }
        
    }
    
    str = str.join("");
    return str;

}



module.exports = DashInsert;
