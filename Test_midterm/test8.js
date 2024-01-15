function simplePair(arr, n) {
    const seenNumbers = new Set();

    for (const num of arr) {
        const complement = n / num;

        if (seenNumbers.has(complement)) {
            return [complement, num];
        }

        seenNumbers.add(num);
    }

    return null;
}

// Examples
console.log(simplePair([1, 2, 3], 3));  // Output: [1, 3]
console.log(simplePair([1, 2, 3], 6));  // Output: [2, 3]
console.log(simplePair([1, 2, 3], 9));  // Output: null
