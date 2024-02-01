let exampleVariable = "Hello Team!  It is the morning!"

// Display the variable in HTML
document.getElementById("variable-display").innerText = exampleVariable;
// String variable
var greeting = 'Hello Kitty';
var restaurant = "Pamela's Place";
document.getElementById("string-display").innerHTML += `${greeting}, ${restaurant}`;

// Number variable
var myAge = 50;
var pi = 3.14;
document.getElementById("number-display").innerHTML += `<p><strong>be bold </strong></br>${myAge}, ${pi}</p>`;

// Boolean variable
var catsAreBest = true;
var dogsRule = false;
document.getElementById("boolean-display").innerHTML += `${catsAreBest}, ${dogsRule}`;

// Undefined variable
var notDefinedYet;
document.getElementById("undefined-display").innerHTML += `${notDefinedYet}`;

// Null variable
var goodPickupLines = null;
document.getElementById("null-display").innerHTML += `${goodPickupLines}`;

// String variable
var greeting = 'Hello! The current time is:';
document.getElementById("string-display").innerHTML += ` ${greeting}`;

// Time using Date object
var currentTime = new Date().toLocaleTimeString();
document.getElementById("time-display").innerHTML += ` ${currentTime}`;

// Update time every second
setInterval(function() {
    var updatedTime = new Date().toLocaleTimeString();
    document.getElementById("time-display").innerHTML = `Current Time: ${updatedTime}`;
}, 1000);

var name = 'Claire';
var greeting = 'Hello ' + name;
console.log(greeting);

var r;
console.log(typeof r);
r = 37;
console.log(typeof r);
r = "Dr. Lee"
console.log(typeof r);

/*
all of this
is included 
in the comments
*/
function sayMyName() {
console.log("Hi Dr. Lee")
}

sayMyName();
sayMyName();

/*
function chicken() {
egg();
}

function egg() {
chicken();
}

egg();
*/

function sayMyName(name) {
console.log("hi, " + name);
}https://jsfiddle.net/#run

sayMyName("Dr. Lee");

function addNumbers(num1, num2) {
var result = num1 + num2;
return result; // anything after this won't work
}

var sum = addNumbers(5, 2);
console.log(sum)

function addNumber2(num1, num2) {
var localResult = num1 + num2;
console.log("The local result is: " + localResult);
//document.getElementById("string2-display").innerHTML += ` ${localResult}`;

}

addNumber2(5, 7);
var num1 = 5;
var num2 = 13;
var globalResult;
function addNumber3(num1, num2) {
globalResult = num1 + num2;
}

addNumber3(num1, num2);
document.getElementById("string2-display").innerHTML += ` ${globalResult}`;


function calculateTip(total) {
  var tipPercent = 0.15;
  return (total * tipPercent);
}

var billTotal = 10.00;
var billTip   = calculateTip(billTotal);
var receipt   = 'Total: ' + billTotal + ' Tip: ' + billTip;
console.log(receipt);



var x = 5;

if (x > 0) {
  console.log('x is a positive number!');
}

// Logical Operators
var posNum = 4;
var negNum = -2;

var myAge = 50;
if ((myAge >= 0 && myAge < 3)  || myAge > 90) {
  console.log('You\'re not quite in your peak.');
}

var catsRule = true;
if (catsRule) {
  console.log('Yay cats!');
}

var name = '';
if (name) {
  console.log('Hello, ' + name);
}
var points = 0;
if (points) {
  console.log('You have ' + points + ' points');
}
var firstName;
if (firstName) {
  console.log('Your name is ' + firstName);
}

var nominator = 5;
var denominator = 0;
if (denominator != 0 && (nominator/denominator > 0)) {
  console.log('Thats a valid, positive fraction');
}

var age = 28;
if (age > 16) {
  console.log('Yay, you can drive!');
} else {
  console.log('Sorry, but you have ' + (16 - age) + ' years til you can drive.');
}

var age = 20;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}

var x = 0;
while (x < 5) {
  console.log(x);
  x = x + 1;
}

for (var i = 0; i < 5; i = i + 1) {
  console.log(i);
}


for (var current = 100; current < 200; current++) {
  console.log('Testing ' + current);
  if (current % 7 == 0) {
    console.log('Found it! ' + current);
    break;
  }
}

var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var raceWinners = [33, 72, 64];
var myFavoriteThings = ['Broccoli', 60481, 'Love Actually'];

console.log(rainbowColors.length);

var firstColor = rainbowColors[0];
console.log(firstColor);
var lastColor = rainbowColors[6];
console.log(lastColor);

var myFavoriteThings = ['Broccoli', 60481, 'Love Actually'];
console.log(myFavoriteThings);
myFavoriteThings[0] = 'Celery Root';
console.log(myFavoriteThings[0]);
console.log(myFavoriteThings);
myFavoriteThings[3] = 'Playgrounds';
console.log(myFavoriteThings);

var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
for (var i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);
}

var rainbowColorsLetters = 'ROYGBIV';
for (var i = 0; i < rainbowColorsLetters.length; i++) {
  console.log(rainbowColorsLetters[i]);
}

var aboutMe = {
  hometown: "Pasadena, CA",
  hair: "brown"
};

var lizzieTheCat = {
  age: 18,
  furColor: "grey",
  likes: ["catnip", "milk"],
  birthday: {"month": 7, "day": 17, year: 1994}
};

var aboutMe = {
	hometown: "Hampton, Va",
  hair: "none"
};

var myHometown = aboutMe.hometown;

console.log(myHometown);

var myProperty = "hair";
var myHair = aboutMe[myProperty];
console.log(myHair);


var aboutMe = {
  hometown: "Los Angeles, CA",
  hair: "brown"
};
aboutMe.hair = "blue";

aboutMe.hair = "blue"
aboutMe.gender = "male";
delete aboutMe.gender;

var myCats = [
  {name: "Lizzie",
   age: 18},
  {name: "Daemon",
   age: 1}
];

for (var i = 0; i < myCats.length; i++) {
  var myCat = myCats[i];
  console.log(myCat.name + ' is ' + myCat.age + ' years old.');
}


var lizzieTheCat = {
  age: 18,
  furColor: "grey",
  likes: ["catnip", "milk"],
  birthday: {"month": 7, "day": 17, year: 1994}
}

function describeCat(cat) {
  console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
}

describeCat(lizzieTheCat);


var lizzieTheCat = {
  age: 18,
  furColor: 'grey',
  meow: function() {
    console.log('meowww');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);
  },
  sleep: function(numMinutes) {
    for (var i = 0; i < numMinutes; i++) {
      console.log('z');
    }
  }
};
lizzieTheCat.meow();
lizzieTheCat.eat('brown mushy stuff');
lizzieTheCat.sleep(10);


var lizzieTheCat = {
  age: 18,
  furColor: 'grey',
  meow: function() {
    console.log('meowww');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);
  },
  sleep: function(numMinutes) {
    for (var i = 0; i < numMinutes; i++) {
      console.log('z');
    }
  }
};

Object.keys(lizzieTheCat); // ["age", "furColor", "meow", "eat", "sleep"]
