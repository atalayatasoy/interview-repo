const info = require('./data/sat.json');



 // schools
let schoolCount = info.data.length;
console.log(schoolCount);

// no test info
let noTestingInfo = info.data.filter(e => e[e.length - 1] === null).length; 
console.log(noTestingInfo); 

 // overall top 10
let overallScoresTop10 = info.data.sort((a, b) => (b[13] + b[12] + b[11]) - (a[13] + a[12] + a[11])).filter((e ,i) => i < 10).map(e => e[9]);
console.log(overallScoresTop10)

 //divergent top 10
let divergencyMathReading = info.data.sort((a ,b) => Math.abs(b[12] - b[11]) - Math.abs(a[12] -a[11])).filter((e, i) => i < 10).map(e => e[9])
console.log(divergencyMathReading)

// my question: average of total test takers in all schools data


let averageOfTestTakers = info.data.filter(e => e[10]).map(e => e[10]).reduce((acc, e) => acc + parseInt(e), 0) / schoolCount
console.log(averageOfTestTakers)