// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth. N.B. Use Math.round(i)

// Radius of the earth is 6367.4447km.
// GM value of earth is 398600.4418 km3s-2.

//T = 2 * pi * sqrt( r^3 / GM) //The Orbital Period
//r = earthRadius+avgAlt // The distance from midpoint of the earth to the object.

// function orbitalPeriod(arr) {
//   let GM = 398600.4418;
//   let earthRadius = 6367.4447;
//   let newArr = []
//
//   for (let i in arr){
//   let radPlusAvgAltSqDivGM = (Math.pow(earthRadius + arr[i]['avgAlt'], 3))/GM
//   let t = 2 * Math.PI * Math.sqrt(radPlusAvgAltSqDivGM)
//   newArr.push({name: arr[i]['name'], orbitalPeriod: Math.round(t)})
//   }
//   return newArr
// }

// function orbitalPeriod(arr){
//   let GM = 398600.4418;
//   let earthRadius = 6367.4447;
//   let a = 2 * Math.PI;
//   let newArr = [];
//   let getOrbPeriod = function(obj){
//     let c = Math.pow(earthRadius + obj.avgAlt, 3);
//     let b = Math.sqrt(c / GM);
//     let orbPeriod = Math.round(a*b)
//     delete obj.avgAlt;
//     obj.orbitalPeriod = orbPeriod;
//     return obj
//   }
//   for (let elem in arr){
//     newArr.push(getOrbPeriod(arr[elem]))
//   }
//   return newArr
// }

// function orbitalPeriod(arr){
//   let GM = 398600.4418;
//   let earthRadius = 6367.4447;
//
//   for (let i in arr){
//     let orbitalPer = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i]['avgAlt'], 3) / GM)
//     )
//     delete arr[i]['avgAlt']
//     arr[i]['orbitalPeriod'] = orbitalPer
//   }
//   return arr
// }

// function orbitalPeriod(arr){
//   let GM = 398600.4418;
//   let earthRadius = 6367.4447;
//   arr.forEach(function(item){
//     let tmp = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
//     )
//     delete item.avgAlt
//     item.orbitalPeriod = tmp
//   })
//   return arr
// }

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   return arr.map(({ name, avgAlt }) => {
//     const earth = earthRadius + avgAlt;
//     const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
//     return { name, orbitalPeriod };
//   });
// }

function orbitalPeriod(arr){
  const GM = 398600.4418
  const earthRadius = 6367.4447
  return arr.map(({name, avgAlt}) => {
    const earth = earthRadius + avgAlt
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM))
    return {name, orbitalPeriod}
  })
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
//should return [{name: "sputnik", orbitalPeriod: 86400}].
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
