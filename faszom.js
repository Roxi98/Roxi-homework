let list = [
  ["x", "x", "x"],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
];
for (let i = 0; i < list.length; i++) {
  let array = list[i];

  let xCount = array.filter((element) => element === "x").length;
  if (xCount === 3) {
    console.log("YOU WIN");
  }
}
