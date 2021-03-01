// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Notes: We will use the taol called PRETTIER. It is a opinionated code formatter, which means it makes assumptions about how good the code should look like.
// IMP => Watch section 5 : 55

// PROBLEM : 1

// We work for a company building a smart home thermometer. Our most recent task is: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be sensor errors."
let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem.
//-  We have to cal temp amplitude (diffrence between max an min temperature.)
// - Find the max temp and min temp, then subract the values.
// - Ignoring the sensor errors.

// const calTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (temps[i] > max) {
//       max = temps[i];
//     }

//     if (temps[i] < min) min = temps[i];
//     // another way of writting the loopn with on line.
//   }
//   let tempAmplitude = max - min;
//   console.log(
//     `Max temp is ${max}, Min temp is ${min} and the Temp Amplitude is ${tempAmplitude}`
//   );
// };
// calTempAmplitude(temperatures);

// Above code is not following DRY rules, so the other way to write this code

const calTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  let tempAmplitude = max - min;

  console.log(
    `Max temp is ${max}, Min temp is ${min} and the Temp Amplitude is ${tempAmplitude}`
  );
};
calTempAmplitude(temperatures);
// let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// PROBLEM 2:

// Function should receive 2 arrays of tmp.

// 1) Understanding the problem.
// - We need to merge the two arrays (Concat)

const calTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  let tempAmplitude = max - min;

  console.log(
    `Max temp is ${max}, Min temp is ${min} and the Temp Amplitude is ${tempAmplitude}`
  );
};
calTempAmplitudeNew([3, 7, 2], [1, 8, 5]);

// CODE CAHLLENGE #1

// - Transform each element to degree C
// - Transform array to string.
// - String need to contain day++

const printForecast = function (tempp) {
  let day = 1;
  for (let i = 0; i < tempp.length; i++) {
    console.log(`${tempp[i]} in ${day} days`);
    day += 1;
  }
};
printForecast([17, 21, 23]);

// - Transform array to string.

const data1 = [17, 21, 23];
//console.log(`... ${data1[0]}...${data1[1]}...${data1[2]}...`);
const printForecastNew = function (tempp) {
  let str = '';
  //empty string is equivalent to 0;
  for (let i = 0; i < tempp.length; i++) {
    str = str + `...${tempp[i]} in ${i + 1} days`;
    // For every iteration we will add it to the string
  }
  console.log(str);
};
printForecastNew(data1);

//PROJECT 1
