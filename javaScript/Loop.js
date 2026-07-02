'use strict';
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let vowelsStr = '';
    let consonantsStr = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (vowels.includes(char)) {
            vowelsStr += char + '\n';
        } else {
            consonantsStr += char + '\n';
        }
    }

    console.log(vowelsStr);
    console.log(consonantsStr);
}
