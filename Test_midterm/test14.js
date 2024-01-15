function secretWord(str, wordLength) {
    const getLetterValue = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    let secret = "";

    for (let i = 0; i <= str.length - 3; i++) {
        const triplet = str.slice(i, i + 3);
        const middleLetter = triplet[1];

        const tripletValue = triplet.split('').reduce((acc, letter) => acc + getLetterValue(letter), 0);

        if (tripletValue % 3 === 0 && tripletValue / 3 === getLetterValue(middleLetter)) {
            secret += middleLetter;

            if (secret.length === wordLength) {
                break;
            }
        }
    }

    return secret;
}

// Examples
console.log(secretWord("sadbpstcrdvaefikkgoengrt", 5));  // Output: "brake"
console.log(secretWord("aheiayd", 3));                   // Output: "hey"

