/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  for (let i = 0; i < strs.length; i++) {
    //syntax for substring string.substr(start, length)
    //for (let j = strs[i].length; j >= 0; j--) {
    // when i tested this i wasn't sure
    console.log(strs[i].includes(x => x.substring(0, 2)));
    //}
  }
  //which string is the longest
  for (let i = 0; i < strs.length; i++) {}
  //this doesn't work the way i wanted it to
  //   return strs.every(x => x.substring(0, 3));
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
