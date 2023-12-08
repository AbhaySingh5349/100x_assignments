/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(ch) {
  return (
    ch == 'a' ||
    ch == 'e' ||
    ch == 'i' ||
    ch == 'o' ||
    ch == 'u' ||
    ch == 'A' ||
    ch == 'E' ||
    ch == 'I' ||
    ch == 'O' ||
    ch == 'U'
  );
}

function countVowels(str) {
  let ans = 0;
  for (const ch of str) ans += isVowel(ch);
  return ans;
}

module.exports = countVowels;
