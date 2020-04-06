// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  let conv1 = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",6: "VI",7: "VII",8: "VIII", 9: "IX"
  }
  let conv2 = {
    1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC"
  }
  let conv3 = {
    1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM"
  }
  let conv4 = {
    1: "M", 2: "MM", 3: "MMM", 4: "MMMM", 5: "V", 6: "VM", 7:"VMM", 8: "VMMM", 9: "VMMMM"
  }
 let len = String(num).length
 let thing = String(num)
 if (len === 1){
   for (let i in conv1){if (i === thing){return conv1[i]}}
 }
 if (len === 2){
   res = []
   for (let i in conv2){if (i === thing[0]){res.push(conv2[i])}}
   for (let i in conv1){if (i === thing[1]){res.push(conv1[i])}}
   return res.join("")
 }
 if (len === 3){
   res = []
   for (let i in conv3){if (i === thing[0]) {res.push(conv3[i])}}
   for (let i in conv2){if (i === thing[1]) {res.push(conv2[i])}}
   for (let i in conv1){if (i === thing[2]) {res.push(conv1[i])}}
   return res.join("")
 }
 if (len === 4){
   res = []
   for (let i in conv4){if (i === thing[0]) {res.push(conv4[i])}}
   for (let i in conv3){if (i === thing[1]) {res.push(conv3[i])}}
   for (let i in conv2){if (i === thing[2]) {res.push(conv2[i])}}
   for (let i in conv1){if (i === thing[3]) {res.push(conv1[i])}}
   return res.join("")
 }
}

console.log("should return II", convertToRoman(2))
//should return "II".
console.log("should return III", convertToRoman(3))
//should return 'III'.
console.log("should return IV", convertToRoman(4))
//should return 'IV'.
console.log("should return V", convertToRoman(5))
//should return "V".
console.log("should return IX", convertToRoman(9))
//should return "IX".
console.log("should return XII", convertToRoman(12))
//should return "XII".
console.log("should return XVI", convertToRoman(16))
//should return "XVI".
console.log("should return XXIX",convertToRoman(29))
//should return "XXIX".
console.log("should return XLIV", convertToRoman(44))
//should return "XLIV".
console.log("should return XLV",convertToRoman(45))
//should return "XLV"
console.log("should return LXVIII", convertToRoman(68))
//should return "LXVIII"
console.log("should return LXXXIII",convertToRoman(83))
//should return "LXXXIII"
console.log("should return XCVII",convertToRoman(97))
//should return "XCVII"
console.log("should return XCIX", convertToRoman(99))
//should return "XCIX"
console.log("should return CD", convertToRoman(400))
//should return "CD"
console.log("should return D", convertToRoman(500))
//should return "D"
console.log("should return DI", convertToRoman(501))
//should return "DI"
console.log("should return DCXLIX", convertToRoman(649))
//should return "DCXLIX"
console.log("should return DCCXCVIII", convertToRoman(798))
//should return "DCCXCVIII"
console.log("should return DCCCXCI", convertToRoman(891))
//should return "DCCCXCI"
console.log("should return M", convertToRoman(1000))
//should return "M"
console.log("should return MIV",convertToRoman(1004))
//should return "MIV"
console.log("should return MVI", convertToRoman(1006))
//should return "MVI"
console.log("should return MXXIII",convertToRoman(1023))
//should return "MXXIII"
console.log("should return MMXIV", convertToRoman(2014))
//should return "MMXIV"
console.log("should return MMMCMXCIX", convertToRoman(3999))
//should return "MMMCMXCIX"
