/*kiszamolja reszeg vagy e v nem */

function drug(alkoholszint) {
  if (alkoholszint > 0.2) {
    return true;
  } else {
    return false;
  }
}
console.log("alkoholizmus teszt " + drug(0.3));

module.exports = {
  drug,
};
