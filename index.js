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
  console.log(arrLengths[0]);

  //maybe we can make an array with all the substrings
  let substringArr = [];
  for (let i = 0; i < strs.length; i++) {
    //syntax for substring string.substr(start, length)
    //going to say that arrLengths[0] is the limit because we don't need anything bigger than that
    for (let j = arrLengths[0]; j >= 0; j--) {
      substringArr.push(strs[i].substr(0, j));
    }
  }

  console.log(substringArr);
  //actually i just want to know which one is the shortest

  //arrLengths[0] is the shortest length

  //   for(let i=arrLengths; i>=0; i--){

  //   }
  //this doesn't work the way i wanted it to
  //   return strs.every(x => x.substring(0, 3));

  //we want to know if every string within strs includes a particular substring
  // if it does, return that substring
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
