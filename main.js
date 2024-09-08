// 1 "The area of the rectangle is: "
let width = 60;
let length = 40;
console.log("The area of the rectangle is: " + width * length);

// 2 "NN°F is NN°C.".
let dgree = 70;
let dgreef = (dgree * 9 / 5) + 32;
console.log(`${dgree}°C is ${dgreef}°F."`);

let dgreec = (dgreef  - 32) * 5 / 9;
console.log(`${dgreef}°F is ${dgreec}°C."`);

// 3 “NN hours = NN Seconds”

let hour = 4;
let seconds = 3600;
let hourinseconds = hour * seconds;
console.log(`${hour} hours = ${hourinseconds} Seconds”`);

// 4 concatenation
let thingOne = 'my name is NAJWA';
let thingTwo = 'and i love reading';
console.log(thingOne +' , ' + thingTwo);

//5 bill tip

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
console.log("the total is: ", total);

//6 madLib

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
let madLib = `"The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!"`;
console.log(madLib);

//7 
let firstName = "najwa"
let interest = 'javaScript'
let hobby = 'swimming'
let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`
console.log(awesomeMessage);
