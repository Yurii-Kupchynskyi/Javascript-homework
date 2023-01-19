const findLongestWord = function (string) {
  let arrayFromString = string.split(/([;,.]|\s)/);

  let tempCount = arrayFromString[0].length;

  let theLongestWord = arrayFromString[0];

  for (let word of arrayFromString) {
    if (word.length > tempCount) {
      tempCount = word.length;
      theLongestWord = word;
    }
  }

  return theLongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
