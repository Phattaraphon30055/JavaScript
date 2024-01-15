function totalVlume(numArray) {

    let result = 0
    numArray.map(elem => {
        return result += elem.reduce((a, b) => {
            return a * b
        })
    })
    return result
}

console.log(totalVlume([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]])); //63
console.log(totalVlume([[2, 2, 2], [2, 1, 1]])); //10
console.log(totalVlume([[1, 1, 1]])); //1