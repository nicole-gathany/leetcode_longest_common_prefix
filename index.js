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
  //i want to take out ""
  substringArr.pop();
  console.log(substringArr);
  let result = "";
  for (let i = substringArr.length; i >= 0; i--) {
    if (strs.every(x => x.includes(substringArr[i])) === true) {
      result = substringArr[i];
    }
  }

  if (result === undefined) {
    result = "";
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix([]));
// ["c","acc","ccc"] didn't work because the we don't care if the string includes it, only it begins that way
// prefix is the beginning
console.log(longestCommonPrefix(["c", "acc", "ccc"]));
