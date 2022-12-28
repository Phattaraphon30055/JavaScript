let plusFive = (Number) => {
    return Number + 5;

};

let f = plusFive ;
// f is a assigned the value of plusFive
console.log (plusFive(3)); //8
// Since f has a funtion value, it can be invoked.
console.log(f(9));  //9