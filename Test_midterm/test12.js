function frequencySort(str) {
    // Create a frequency map
    const frequencyMap = new Map();
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Sort characters based on frequency, case, and alphabetical order
    const sortedChars = Array.from(str).sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);

        // Sort by frequency in descending order
        if (freqA !== freqB) {
            return freqB - freqA;
        }

        // Sort by case (uppercase first)
        if (a.toUpperCase() !== b.toUpperCase()) {
            return a.toUpperCase().localeCompare(b.toUpperCase());
        }

        // Sort alphabetically if frequency and case are the same
        return a.localeCompare(b);
    });

    // Join the sorted characters into a new string
    return sortedChars.join('');
}

// Examples
console.log(frequencySort("tree"));    // Output: "eert"
console.log(frequencySort("cccaaa"));  // Output: "aaaccc"
console.log(frequencySort("Aabb"));     // Output: "bbAa"
