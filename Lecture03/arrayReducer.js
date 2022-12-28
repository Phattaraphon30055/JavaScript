const array = [15, 16, 17, 18, 19];

function reduce(accumeulator, currentValue, index) {
    const returns = accumeulator + currentValue;
    console.log(
        `accumulator: ${accumeulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reduce);