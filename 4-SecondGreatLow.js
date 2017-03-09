// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the
// second lowest and second greatest numbers, respectively, separated by a space. For example:
// if arr contains [7, 7, 12, 98, 106] the output should be '12 98'. The array will not be empty
//  and will contain at least 2 numbers. It can get tricky if there's just two numbers! 



function SecondGreatLow(arr){

    arr = arr.sort(function(a, b){return a-b});
    
    if (arr.length === 2) {
        
        secondL = arr[1];
        secondG = arr[0];

    }

    if (arr.length > 2) {
        var foundG = false;
        var foundL = false;
        
        for (i = 0; i <= arr.length-2; i++) {
        
            if (arr[i] > arr[0] && foundL === false) {
                var secondL = arr[i];
                foundL = true;
            }
        }
    
        for (i = arr.length-2; i >= 0; i--) {
            
            if (arr[i] < arr[arr.length-1] && foundG === false) {
                var secondG = arr[i];
                foundG = true;
            }
        
        }
    }
    
    var answers = [secondL, secondG].join(" ");
    return answers;

}


module.exports = SecondGreatLow;