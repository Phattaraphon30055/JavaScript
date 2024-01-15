function getBudgets(array) {

    let result = 0
    array.map(x => result += x.budget)
    return result
}

console.log(getBudgets([
    {name: "TEST", age: 21 , budget: 23000},
    {name: "TEST", age: 21 , budget: 40000},
    {name: "TEST", age: 21 , budget: 2700},
])); // 65700

console.log(getBudgets([
    {name: "TEST", age: 21 , budget: 29000},
    {name: "TEST", age: 21 , budget: 32000},
    {name: "TEST", age: 21 , budget: 1600},
])); // 62600