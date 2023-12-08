/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) return;

  let ans = numbers[0];
  numbers.forEach((element) => {
    ans = Math.max(ans, element);
  });
  return ans;
}

module.exports = findLargestElement;
