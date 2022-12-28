//Arrow function with two arguments
const sum = (firsParam , secondParam) => {
    return firsParam + secondParam

};
console.log (sum(2,5)); // prints : 7

// Arrow function with arguments
const printHello= () => {
    console.log("hello");

};
printHello(); // Prints : hello

// Arrow functions with a single arguments
const checkWeight = (weight) => {
    console.log (`Baggage weight : ${weight} kilograms.`)

};
checkWeight (25); // Prints : Baggage weight : 25 kilograms.

// Concise arrow funvtion
const multipy = (a,b) => a*b ;
console.log (multipy(2,30)); // Prints : 60