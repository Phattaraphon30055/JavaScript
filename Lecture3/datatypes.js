
const people = ["Aaron", "mell"," John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstName : "Anirach",
    lastName : "Mingkhuan",
};

function sayHello (person) {
    console.log ("Hello "  + person.firstName);
}

console.log (typeof people);
console.log (typeof sayHello);
console.log (employee instanceof Array);
sayHello(employee);