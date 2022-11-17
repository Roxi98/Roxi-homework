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

function roll2(dye1, dice2, dice3) {
  return (kockakdobasa =
    randomIntBetweenTwoNumbers(0, 19) +
    randomIntBetweenTwoNumbers(0, 7) +
    randomIntBetweenTwoNumbers(0, 9));
}
console.log(
  "20,8 es 10 oldalu kocka osszege : " + roll2(kocka20, kocka8, kocka10)
);

function roll(dicee, darabszam) {
  for (let i = 0; i < dicee.length; i++) {
    const kockadobas = randomIntBetweenTwoNumbers(
      dicee[0] * darabszam,
      dicee[5] * darabszam
    );

    return kockadobas;
  }
}
console.log("x mennyisegu kocka osszege: " + roll(kocka, 10));
