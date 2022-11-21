const kocka = [1, 2, 3, 4, 5, 6];
let kocka20 = [];
let kocka8 = [];
let kocka10 = [];
let kockaString = ["Boris", "Jimmy", "Roxi", "lol", "gugya", "szilya"];
console.log(kockaString);

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

function Roll(dice) {
  const mau = [];
  for (let i = 0; i < dice.length; i++) {
    const kockaszam = [];
    kockaszam.push(randomIntBetweenTwoNumbers(0, dice[i].length - 1));
    console.log("kockaszam", kockaszam);
    console.log(dice[i][kockaszam]);
    if (typeof dice[i][kockaszam] === "string") {
      mau.push(dice[i][kockaszam]);
    } else {
      mau.push(dice[i][kockaszam]);
    }
  }
  return mau;
}

console.log(Roll([kocka20, kocka8, kocka10, kockaString]));
