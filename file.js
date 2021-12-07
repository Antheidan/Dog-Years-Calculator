//You can replace my information with your own to see your age.

//My current age
const myAge = 30;

//First two years of a dogs life
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

//subtracting 2 from early years
let laterYears = myAge - 2;
//Accounting for every year after the initial 2
laterYears *= 4;

//Calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//Storing my name in a variable
const myName = 'Jordan'.toLowerCase();

//logging the result in a log
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
