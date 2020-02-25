/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //   for (let i = 0; i < strs.length; i++) {
  //     //syntax for substring string.substr(start, length)
  //     for (let j = strs[i].length; j >= 0; j--) {
  //       // when i tested this i wasn't sure
  //       //i don't know how eny of this works!!
  //       console.log(strs[i].substr(0, j));
  //     }
  //     console.log(strs[i]);
  //   }
  //actually i just want to know which one is the shortest
  let arrLengths = [];
  for (let i = 0; i < strs.length; i++) {
    arrLengths.push(strs[i].length);
  }

  arrLengths.sort((a, b) => a - b);
  console.log(arrLengths[0]);
  //arrLengths[0] is the shortest length
  let test = strs.every(x => x.includes(x.substring(0, arrLengths)));
  console.log(test);
  //   for(let i=arrLengths; i>=0; i--){

  //   }
  //this doesn't work the way i wanted it to
  //   return strs.every(x => x.substring(0, 3));
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
