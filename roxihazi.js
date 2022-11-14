const korhazBajmok = require("./database");

const plist = [];

for (let i = 0; i < korhazBajmok.doktorok.length; i++) {
  plist.push(...korhazBajmok.doktorok[i].paciensek);
}
const gyogyszer = {};

const bruf = "brufen";
const benso = "bensedin";
const gluko = "glucophane";
const diclo = "diclophen";

for (let i = 0; i < plist.length; i++) {
  const nev = plist[i].nev;
  const suly = plist[i].suly;
  const kor = plist[i].kor;
  const insurance = plist[i].insurance;
  const magassag = plist[i].magassag;

  const medlist = [];

  let paciensMagassag = parseInt(magassag);
  let paciensKor = parseInt(kor);
  let paciensSuly = parseInt(suly);

  if (paciensMagassag > 175) {
    medlist.push(bruf);
  }
  if (paciensSuly < 70 && paciensKor < 30) {
    medlist.push(benso);
  }
  if (paciensSuly > 100 && insurance) {
    medlist.push(gluko);
  }
  if (paciensKor > 60 && insurance) {
    medlist.push(diclo);
  }

  gyogyszer[nev] = medlist.length > 0 ? medlist : null;
}

console.log(gyogyszer);
