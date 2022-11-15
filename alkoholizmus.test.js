const funkciok = require("./alkoholizmus");
describe("tesztelunk vmit", () => {
  it("alkoholszintteszt", () => {
    expect(funkciok.drug(2)).toEqual(false);
  });
});
