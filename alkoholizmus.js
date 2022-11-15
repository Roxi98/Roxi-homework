/*kiszamolja reszeg vagy e v nem */
const ITTAS = "ITTAS";
const RESZEG = "RESZEG";
const KO = "KO";

function drug(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

function ifDrunk(alkoholszint) {
  if (alkoholszint > 0.2 && alkoholszint < 1.5) {
    return ITTAS;
  }

  if (alkoholszint > 1.5 && alkoholszint < 2.5) {
    return RESZEG;
  }

  if (alkoholszint >= 2.5) {
    return KO;
  }
}
function action(text) {
  switch (text) {
    case ITTAS: {
      console.log("Ön " + ITTAS);
      console.log("Ne vezessen járművet");
      break;
    }
    case RESZEG: {
      console.log("Sudar jegenyefa");
      break;
    }
    case KO: {
      console.log("Gyomormosásra kell küldeni a kedveskét " + KO);
      console.log("Vagy halott");
      break;
    }
  }
}
function mainFunction(alkoholszint) {
  const drug1 = drug(alkoholszint);
  if (drug1 === true) {
    const howDrunk = ifDrunk(alkoholszint);
    action(howDrunk);
  }
}
mainFunction(3);

module.exports = {
  drug,
  ifDrunk,
  action,
  RESZEG,
};
