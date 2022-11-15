const funkciok = require("./alkoholizmus");

describe("drunk", () => {
  it("alkoholszintteszt", () => {
    expect(funkciok.drug(2.6)).toEqual(true);
  });
});
describe("ifDrunk", () => {
  it("RESZEGSEGI SZINT", () => {
    expect(funkciok.ifDrunk(2.6)).toEqual("KO");
  });
});
describe("action", () => {
  it("RESZEG", () => {
    expect(funkciok.action(funkciok.RESZEG)).toEqual("Takarodjon aludni");
  });
});
