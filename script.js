// Ludo Games Print 1-6 
//=========== Start Problem 1===============//

function LudoMark(){
    const b = Math.floor(Math.random()*6+1);
    document.getElementById('demo').innerHTML = (b);
}

//Now w3School give us easy way. let's try it.
function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
console.log(randomNumbers(1, 6));

//================= END ====================//

//------------- Start Problem 2 ------------------//

//How to sorts students name Alphabetically//
const studentsName = [" Riaz", " Turhan", " Akib", " Sakib", " Rakib", " Mishu", " Bablu"];
const AlphaName = studentsName.sort()
document.write(AlphaName);
document.write("<br>")
document.write("<br>")
//------------- END----------------//

//--------------- Start Problem 3 ------------------//

//Now Sorts Students Roll Numbers//
const RollNumbers = [3, 2, 5, 4, 6, 8, 7, 9, 1, 10];
document.write(RollNumbers.sort(function (a, b){
  return a - b;
}));

document.write("<br>")
document.write("<br>")

//-------------------- End ------------------//

//============ Start Problem 4 ============//
//Find Leap Year//

function LeapYear(year){

  if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
    document.write(`${year} is a Leap year`)
  } else{
    document.write(`${year} is not a Leap year`)
  }
}

LeapYear(2012);

document.write("<br>")
document.write("<br>")
//============== END =================//

//--------------- Start Problem Solving 5 ------------------//
//find vowels numbers from array//

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function FindVowels(sentence){
  let count = 0;
  const letters = Array.from(sentence)

  letters.forEach(function(value){
    if (vowels.includes(value)){
      count ++
    }
  });
  return count
};

document.write(FindVowels("I Love My Country and I Love My Land"));

document.write("<br>")
document.write("<br>")

//------------------- End -------------------//

//============ Start Problem 6 =============//
//Find Duplicate Number from array//

const Numbers = [2, 3, 3, 8, 9, 5, 6, 8, 9, 3, 5]

const Duplicates = Numbers.filter(function(value, index, array){
  return array.indexOf(value) === index;
});

document.write(Duplicates);
//============== END ===============//
