/* Write a function that takes a string and replaces consecutive repeating characters with the character followed by the count. If a character appears only once, do not append a number.

Examples
compressCharacters("aaabbc")
// Expected output: "a3b2c"

compressCharacters("hello")
// Expected output: "he2llo"
Example 1
Input: str = "aaabbc"

Output: "a3b2c"

Example 2
Input: str = "hello"

Output: "hel2o"

Constraints
The input string `str` will contain only lowercase English letters.
The length of `str` will be between 0 and 1000 characters. */


function cokmpressCharacters(str) {
    if (str.length === 0) {
        return "";
    }

    let result = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        }
        else {
            result = result + str[i - 1];

            if (count > 1) {
                result = result + count;
            }

            count = 1;
        }
    }

    result = result + str[str.length - 1];
    if (count > 1) {
        result = result + count;
    }

    return result;
}