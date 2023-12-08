/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function getFrequencyMap(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == ' ') continue;

    if (freq[ch]) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }
  return freq;
}

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let f1 = getFrequencyMap(str1);
  let f2 = getFrequencyMap(str2);

  for (const key in f1) {
    if (f1[key] != f2[key]) return false;
  }
  return true;
}

module.exports = isAnagram;
