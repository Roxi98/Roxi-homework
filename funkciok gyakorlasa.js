/*const a = 5;
const b = 6;
const c = 7;
const d = 8;

function osszeadas(elso, masodik, harmadik, negyedik) {
  return elso + masodik + harmadik + negyedik;
}
console.log(osszeadas(a, b, c, d));*/
/*const lista = ["pizza", "suti", "becsi", "porkolt"];
const szoveg = "A kedvenc kajaim a ";
function finom(kaja) {
  let szoveg = "A kedvenc kajaim a ";
  for (let i = 0; i < lista.length; i++) {
    szoveg = szoveg + lista[i] + " , ";
  }
  return szoveg;
}
console.log(finom(lista));*/
const mau = [];
const vau = [
  {
    nev: "hola",
    kor: 2,
  },
  {
    nev: "mola",
    kor: 2,
  },
];
function allat(cica, kutya) {
  for (let i = 0; i < kutya.length; i++) cica[kutya[i].nev] = kutya[i].kor;
  return kutya;
}
console.log(allat(mau, vau));
console.log(mau);
