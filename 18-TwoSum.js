// Have the function TwoSum(arr) take the array of integers 
// stored in arr, and determine if any two numbers (excluding 
// the first element) in the array can sum up to the first 
// element in the array. For example: if arr is 
// [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs 
// that sum to the number 7: [5, 2] and [-4, 11]. Your program 
// should return all pairs, with the numbers separated by a 
// comma, in the order the first number appears in the array. 
// Pairs should be separated by a space. So for the example 
// above, your program would return: 5,2 -4,11 
//
// If there are no two numbers that sum to the first element 
// in the array, return the number -1 


function TwoSum(arr) {
     var newArray = [];
     
     // for each number in arr
     for (i = 1; i < arr.length-1; i++) {
         
         // check to see if arr[i] + arr[i+x] is equal to first number
         for (x = 1; x < arr.length-2; x++) {
            
            //console.log(arr[i],arr[i+x]);         
             if (arr[i] + arr[i+x] === arr[0]) {
                 //console.log(arr[i],arr[i+x]);
                 newArray.push([arr[i],arr[i+x]]);
             }
         }
     }
     
     for (a = 0; a < newArray.length; a++) {
         newArray[a] = newArray[a].join(",");
     }
     
     if (newArray.length === 0) {
         return -1;
     }
     
     return newArray.join(" ");

}


 module.exports = TwoSum;