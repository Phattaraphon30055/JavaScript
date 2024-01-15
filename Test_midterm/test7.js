//Return the sum of the two smallest Number
//Create a function that takes an array of number and 
//returns the sum of the two lowest positive number.

function sumTwoSmallestNums(array) {
    
    // ** Way 1 */
    array = array.filter(element => element > 0)
    let result = Math.min(...array)
    result += Math.min(...array.filter(element => element > result))

    return result

    //** Way 2 */
    // array = array.filter(element => element > 0)
    // array.sort((a, b) => a - b);

    // return array[0] + array[1];

}

console.log(sumTwoSmallestNums([-4, 19, 5, 42, 2, 77]));
//result : 7
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
// //result : 3453455
// console.log(sumTwoSmallestNums([2, 9, 6, -1]));
// //result : 1
// console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
// //result : 563
// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));
// //result : 4519