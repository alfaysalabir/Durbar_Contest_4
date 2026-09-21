/* Write a function titleCaseSentence that takes a string as input and returns a new string where the first letter of each word is capitalized, and the rest of the letters in each word are lowercase.

Words are separated by one or more spaces. Leading or trailing spaces, and multiple spaces between words, should be handled gracefully, resulting in a single space separating the title-cased words.

Examples
titleCaseSentence("hello world");
// Expected output: "Hello World"

titleCaseSentence("a short sentence");
// Expected output: "A Short Sentence"
Example 1
Input: str = "hello world"

Output: "Hello World"

Example 2
Input: str = "a short sentence"

Output: "A Short Sentence"

Constraints
The input `str` will be a string.

Hints
Hint 1. How can you split a string into an array of words?
Hint 2. Consider converting the entire string to lowercase first to simplify capitalization.
Hint 3. How can you capitalize only the first letter of a word and leave the rest lowercase?
Hint 4. Think about how to handle empty strings, strings with only spaces, or multiple spaces between words. */


function titleCaseSentence(str) {
    const lowerCase = str.toLowerCase();
    const trimmed = lowerCase.trim();

    if (trimmed === "") {
        return "";
    }

    const words = trimmed.split(/\s+/);
    const capitalizedWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(" ");
}