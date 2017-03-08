// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string 
// "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows
// a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic 
// sequence is one where the difference between each of the numbers is consistent, where as in a 
// geometric sequence, each term after the first is multiplied by some constant or common ratio.
//  Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may
//  be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 


function ArithGeo(arr){
    var answer;
    
    if(arr.length <= 2) {
        answer = -1;
    }
    
    var jumpA = arr[1] - arr[0];
    var jumpB = arr[1] / arr[0];
    
    
    for (i=1; i < (arr.length-1); i++) {
        
        if ( arr[i+1] - arr[i] === jumpA ) {
            for (i=2; i < (arr.length-1); i++) {
                if ( arr[i+1] - arr[i] === jumpA ) {
                    answer = "Arithmetic";
                }
                else {
                    answer = -1;
                }
            }
        }
        
        else if( arr[i+1] / arr[i] === jumpB ) {
            for(i=2; i < (arr.length-1); i++) {
                if ( arr[i+1] / arr[i] === jumpB) {
                    answer = "Geometric";
                }
                else {
                    answer = -1;
                }
            }
        }
        
        else {
            answer = -1;
        }
    }
    
    return answer;

}


module.exports = ArithGeo;