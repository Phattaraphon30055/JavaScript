
function removeDupe(arrayDupe) {

    return arrayDupe.filter( 
        function (element, index, array) {
            return array.indexOf(element) == index;
    });

}

console.log(removeDupe([1,0,1,0])) // {1,0}
console.log(removeDupe(["The","Big","Cat"])) // {"The","Big","Cat"}
console.log(removeDupe(["John","Taylor","John"])) // {"John","Taylor"}