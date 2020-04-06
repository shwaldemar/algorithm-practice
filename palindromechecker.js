// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
//
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// function palindrome(str) {
//   let regex = /([a-zA-Z0-100])/
//   let arr = str.toLowerCase().split("")
//   let word = []
//   for (i in arr){
//     if (String(arr[i]).match(regex)){
//       word.push(arr[i])
//     }
//   }
//   console.log(
//     [word.join(""),String(word.reverse().join(""))]
//   )
//   if (word.join("") === String(word.reverse().join(""))){
//     return true
//   }
//   else {
//     return false
//   }
// }

// function palindrome(str) {
//   return (
//     str.replace(/[\W_]/g, "").toLowerCase() ===
//     str
//       .replace(/[\W_]/g, "")
//       .toLowerCase()
//       .split("")
//       .reverse()
//       .join("")
//   );
// }

// function palindrome(str) {
//   str = str.toLowerCase().replace(/[\W_]/g, "");
//   for (var i = 0, len = str.length - 1; i < len / 2; i++) {
//     if (str[i] !== str[len - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function palindrome(str) {
//   let front = 0;
//   let back = str.length - 1;
//
//   while (back > front) {
//     if (str[front].match(/[\W_]/)) {
//       front++;
//       continue;
//     }
//     if (str[back].match(/[\W_]/)) {
//       back--;
//       continue;
//     }
//     if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
//     front++;
//     back--;
//   }
//   return true;
// }

function palindrome(str){
let front = 0;
let back = str.length-1;

  while (back > front){
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    if (str[back].match(/[\W_]/)){
      back--;
      continue;
    }
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }
  return true
}

console.log(palindrome("eye"))
//should return true.
console.log(palindrome("_eye"))
//should return true.
console.log(palindrome("race car"))
// //should return true.
console.log(palindrome("not a palindrome"))
// //should return false.
console.log(palindrome("A man, a plan, a canal. Panama"))
// //should return true.
console.log(palindrome("never odd or even"))
// //should return true.
console.log(palindrome("nope"))
// //should return false.
console.log(palindrome("almostomla"))
// //should return false.
console.log(palindrome("My age is 0, 0 si ega ym."))
// //should return true.
console.log(palindrome("1 eye for of 1 eye."))
// //should return false.
console.log(palindrome("0_0 (: /-\ :) 0-0"))
// //should return true.
console.log(palindrome("five|\_/|four"))
// //should return false.
