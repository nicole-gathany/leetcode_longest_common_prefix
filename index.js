/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  for (let i = 0; i < strs.length; i++) {
    //syntax for substring string.substr(start, length)
    //for (let j = strs[i].length; j >= 0; j--) {
    // when i tested this i wasn't sure
    console.log(strs[i].substr(0, 3));
    //}
  }

  //   return strs.every(x => x.substr(0, 3));
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
