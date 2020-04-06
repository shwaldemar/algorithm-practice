// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

// function rot13(str) { // LBH QVQ VG!
// return str = str.split("")
//     .map(char => {return char.charCodeAt(char)})
//     .map(char => {if (char < 65 || char > 90){return String.fromCharCode(char)}
//     else if (char <=77){return String.fromCharCode(char +13)}
//     else if (char > 77){return String.fromCharCode(char - 13)}})
//     .join("")
// }

// function rot13(str){
//   let letter = /([A-Z])/
//   let notLetter = /([\W])/
//   return str = str.split("")
//   .map(i => {
//     if (i.match(notLetter)) {return String.fromCharCode(i.charCodeAt(i))}
//     else if (i.match(letter)) {
//       let code = i.charCodeAt(i)
//       if (code <= 77){return String.fromCharCode(code+13)}
//       else if (code > 77){return String.fromCharCode(code-13)}}}).join("")
// }


// function rot13(str) {
//   return (
//     str
//       .split("")
//       .map.call(str, function(char) {
//         var x = char.charCodeAt(0);
//         if (x < 65 || x > 90) {
//           return String.fromCharCode(x);
//         }
//         else if (x < 78) {
//           return String.fromCharCode(x + 13);
//         }
//         return String.fromCharCode(x - 13);
//       })
//       .join("")
//   );
// }

// function rot13(str) {
//   var rotCharArray = [];
//   var regEx = /[A-Z]/;
//   str = str.split("");
//   for (var x in str) {
//     if (regEx.test(str[x])) {
//       // A more general approach
//       // possible because of modular arithmetic
//       // and cyclic nature of rot13 transform
//       rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
//     } else {
//       rotCharArray.push(str[x].charCodeAt());
//     }
//   }
//   str = String.fromCharCode.apply(String, rotCharArray);
//   return str;
// }

// function rot13(str){
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) +65)
//   )
// }

// function rot13(str) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return str
//       .split('')
//       .map(char => {
//         const pos = alphabet.indexOf(char);
//         return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
//       })
//       .join('');
// }

function rot13(str){
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str
    .split("")
    .map(char => {
      const pos = alphabet.indexOf(char);
      return pos >= 0 ? alphabet[(pos +13) %26] : char;
    })
    .join("")
}
console.log(rot13("LBH QVQ VG!"))
// console.log("should decode to FREE CODE CAMP:", rot13("SERR PBQR PNZC"))
// console.log("should decode to FREE PIZZA!:", rot13("SERR CVMMN!"))
// console.log("should decode to FREE LOVE?:", rot13("SERR YBIR?"))
// console.log("should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.:", rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
