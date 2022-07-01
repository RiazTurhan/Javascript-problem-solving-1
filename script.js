// Ludo Games Print 1-6 
//=========== Start Problem 1===============//

function LudoMark(){
    const b = Math.floor(Math.random()*6+1);
    document.getElementById('demo').innerHTML = (b);
}

// "yes" my first Problem is solving without someone help ,
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

//-------------------- End ------------------//