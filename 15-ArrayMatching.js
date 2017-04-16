// Have the function ArrayMatching(strArr) read the array 
// of strings stored in strArr which will contain only two 
// elements, both of which will represent an array of 
// positive integers. For example: if strArr is 
// ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in 
// the input represent two integer arrays, and your goal for 
// this challenge is to add the elements in corresponding 
// locations from both arrays. For the example input, your 
// program should do the following additions: [(1 + 5), 
// (2 + 2), (5 + 8), (6 + 11)] which then equals 
// [6, 4, 13, 17]. Your program should finally return this 
// resulting array in a string format with each element 
// separated by a hyphen: 6-4-13-17. 

// If the two arrays do not have the same amount of elements, 
// then simply append the remaining elements onto the new 
// array (example shown below). Both arrays will be in the 
// format: [e1, e2, e3, ...] where at least one element will 
// exist in each array. 


function ArrayMatching(strArr) {

//console.log(strArr);
    
    // first convert strings to arrays
    for (var a = 0; a < 2; a++) {
        strArr[a] = strArr[a].replace(/ /g,"").replace("[","").replace("]","");
        strArr[a] = strArr[a].split(",");
        for (var b=0; b<strArr[a].length; b++) {
            strArr[a][b] = parseInt(strArr[a][b]);
        }
    }
    //console.log(strArr);


    // if unequal lengths
    if (strArr[0].length !== strArr[1].length) {
        
        // find out which is longer
        if (strArr[0].length < strArr[1].length) {
            var shorter = strArr[0];
            var longer = strArr[1];
        }
        
        else {
            var shorter = strArr[1];
            var longer = strArr[0];
        }
        
    }
    
    // if equal lengths
    if (strArr[0].length === strArr[1].length) {
        
        var shorter = strArr[1];
        var longer = strArr[0];
        
    }
    
    var newArray = [];
        
    for (var i=0; i < shorter.length; i++) {
        
        newArray.push(shorter[i]+longer[i]);

    }
    
    if (longer.length > shorter.length) {
        
        var numLonger = longer.length - shorter.length;
        
        for (var x = 0; x < numLonger; x++) {
            newArray.push(longer[shorter.length + x]);
        }
        
    }
    
    //console.log(newArray);
     
    newArray = newArray.join("-");
    
    return newArray;

}



module.exports = ArrayMatching;

