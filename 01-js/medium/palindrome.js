/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isSpecialChar(ch) {
  let regex = /[^a-zA-Z0-9]/;
  return regex.test(ch);
}

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    while (i < j && isSpecialChar(str[i])) i++;
    while (i < j && isSpecialChar(str[j])) j--;

    if (i < j && str[i].toLowerCase() != str[j].toLowerCase()) return false;
    i++, j--;
  }
  return true;
}

module.exports = isPalindrome;
