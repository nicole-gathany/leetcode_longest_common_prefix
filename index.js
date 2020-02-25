/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  for (let i = 0; i < strs.length; i++) {
    //syntax for substring string.substr(start, length)
    for (let j = strs[i].length; j >= 0; j--) {
      console.log(strs[i].substr(0, j));
    }
  }
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
