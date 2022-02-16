//-----lev1_1-----
console.log("%c-----lev1_1-----", "color: lightgreen");
for (let i = 1; i <= 10; i++) {
  console.log("Hello World " + i);
}


//-----lev1_2-----
console.log("%c-----lev1_2-----", "color: lightgreen");
let numArray = [];

for(let i = 0; i <= 10; i++) {
  numArray.push(i);
}

console.log(numArray);


//-----lev1_3-----
console.log("%c-----lev1_3-----", "color: lightgreen");
let counter = 0;

while (counter < 10) {
  console.log("Hello World " + counter);
  counter++;
}


//-----lev1_4-----
console.log("%c-----lev1_4-----", "color: lightgreen");
let names = [
  "Eric",
  "Steffen",
  "Finn",
  "Simon",
  "Franzi",
  "Kim",
  "Sergio"
];

for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


//-----lev1_5-----
console.log("%c-----lev1_5-----", "color: lightgreen");
var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];

for(let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}


//-----lev1_6-----
console.log("%c-----lev1_6-----", "color: lightgreen");
let retArray = [];

for(let i = 1; i <= 100; i++) {
  retArray.push('image_' + i + '.jpg');
}

console.log(retArray);


//-----lev1_7-----
console.log("%c-----lev1_7-----", "color: lightgreen");
let number = 0;

do {
  number++;
  console.log('The number is ' + number)
} while (number < 5);


//-----lev1_8-----
console.log("%c-----lev1_8-----", "color: lightgreen");
let numbers = 0;

do {
  numbers++;
  if (numbers % 2 == 0) {
    console.log(numbers);
  }
} while (numbers < 19);


//-----lev1_9-----
const inputNumberElem = document.getElementById('input-number');
const outElem = document.getElementById('out');

let words = [
  'hallo',
  'Auto',
  'Waschmaschine',
  'Schrank',
  'Katze',
  'Beispiel',
  'Eltern',
  'Fenster',
  'Geburtstag',
  'Himmel',
  'schwimmen',
  'Zeitung'
]

function print() {
  words.forEach(l => {
    if(inputNumberElem.value == l.length) {
      outElem.innerHTML += `
        <b>${l}</b><br>
      `
    }
  })
}
