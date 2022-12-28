let str = "Hello";

// dose the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); //outputs character one by one
}