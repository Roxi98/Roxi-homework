const kocka = [1, 2, 3, 4, 5, 6];
let kocka20 = [];
let kocka8 = [];
let kocka10 = [];

function randomIntBetweenTwoNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const N = 20;
kocka20 = Array.from({ length: N }, (_, index) => index + 1);
const N1 = 8;
kocka8 = Array.from({ length: N1 }, (_, index) => index + 1);
const N2 = 10;
kocka10 = Array.from({ length: N2 }, (_, index) => index + 1);
let osszkockak = [kocka20, kocka8, kocka10, kocka20];

function osszkocka(allDice) {
  for (let i = 0; i < allDice.length; i++) {
    const vegtelenkocka = allDice[i];
    return vegtelenkocka;
  }
}
console.log(osszkocka(osszkockak));
function Roll(vegtelenkocka) {
  return randomIntBetweenTwoNumbers(
    allDice[i][0],
    allDice[i][allDice.lenght - 1]
  );
}
console.log(Roll([kocka]));
