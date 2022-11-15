const funkciok = require("./funkcio");

describe("funkcio tesztek", () => {
  it("ossze kene h adjon ", () => {
    const a = 5;
    const b = 8;
    expect(funkciok.osszeadas(a, b)).toEqual(13);
  });
});
