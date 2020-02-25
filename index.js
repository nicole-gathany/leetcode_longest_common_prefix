/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let arrLengths = [];
  for (let i = 0; i < strs.length; i++) {
    arrLengths.push(strs[i].length);
  }

  arrLengths.sort((a, b) => a - b);
  //arrLengths[0] is the shortest length
  // console.log(arrLengths[0]);

  //maybe we can make an array with all the substrings
  let substringArr = [];
  //syntax for substring string.substr(start, length)
  //going to say that arrLengths[0] is the limit because we don't need any substring bigger than that
  // decided to only use the first string because we really only need to examine the substrings from one string of the original array
  //want to limit nested arrays to make the function more efficient
  for (let j = arrLengths[0]; j >= 0; j--) {
    substringArr.push(strs[0].substr(0, j));
  }

  console.log(substringArr);
  let result = "";
  for (let i = 0; i < substringArr.length; i++) {
    if (strs.every(x => x.includes(substringArr[i])) === true) {
      return substringArr[i];
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
