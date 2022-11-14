/*const a = 5;
const b = 6;
const c = 7;
const d = 8;

function osszeadas(elso, masodik, harmadik, negyedik) {
  return elso + masodik + harmadik + negyedik;
}
console.log(osszeadas(a, b, c, d));*/
const lista = ["pizza", "suti", "becsi", "porkolt"];
const szoveg = "A kedvenc kajaim a ";
function finom(kaja) {
  let szoveg = "A kedvenc kajaim a ";
  for (let i = 0; i < lista.length; i++) {
    szoveg = szoveg + lista[i] + " , ";
  }
  return szoveg;
}
console.log(finom(lista));
