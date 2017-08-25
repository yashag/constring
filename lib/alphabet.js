const alphabet = {};

function generateLetters(firstLetterCode, lastLetterCode) {
    for (let i = firstLetterCode; i <= lastLetterCode; i++) {
        letter = String.fromCharCode(i);
        alphabet[letter] = letter;
    }
}

generateLetters('a'.charCodeAt(0), 'z'.charCodeAt(0));
generateLetters('A'.charCodeAt(0), 'Z'.charCodeAt(0));

module.exports = alphabet;