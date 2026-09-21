/* An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Given two strings, s1 and s2, determine if they are anagrams of each other.

You should consider the strings to be anagrams if they contain the same letters with the same frequency, regardless of case, spaces, or punctuation. Only alphabetic characters should be considered.

Examples
isAnagram("listen", "silent");
// => true

isAnagram("Hello", "world");
// => false

isAnagram("A decimal point", "I'm a dot in place");
// => true
Example 1
Input: s1 = "listen", s2 = "silent"

Output: true

Example 2
Input: s1 = "Hello", s2 = "world"

Output: false

Constraints
Input strings `s1` and `s2` contain English letters, spaces, and punctuation.
The length of `s1` and `s2` will be between 0 and 1000 characters.

Hints
Hint 1. Consider how to make the comparison case-insensitive.
Hint 2. Think about what characters should be ignored (e.g., spaces, punctuation).
Hint 3. How can you compare the 'essence' of two strings, regardless of character order? */


function isAnagram(s1, s2) {
    const clean1 = s1.toLowerCase().replace(/[^a-z]/g, "");
    const clean2 = s2.toLowerCase().replace(/[^a-z]/g, "");

    const sorted1 = clean1.split("").sort().join("");
    const sorted2 = clean2.split("").sort().join("");

    return sorted1 === sorted2;
}