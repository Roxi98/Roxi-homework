const { randomIntBetweenTwoNumbers, getTable } = require("./funkciok");

const readline = require("readline");
const { truncate } = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function introQuestion() {
  return new Promise((resolve, reject) => {
    rl.question("Do you want to start? ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Its your turn.Please pick a square to place your X");
        console.log(getTable(emptySquares));
      } else if (answer.toLowerCase() === "No") {
        console.log("Computers turn.");
      }

      resolve();
    });
  });
}

let emptySquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const turnQuestion = (end) => {
  return new Promise((resolve, reject) => {
    rl.question("Place your X in square 1-9 ", (answer) => {
      emptySquares[answer - 1] = "X";
      let computerAnswer = 0;
      let done = false;
      do {
        computerAnswer = randomIntBetweenTwoNumbers(0, 8);
        if (
          emptySquares[computerAnswer] !== "0" &&
          emptySquares[computerAnswer] !== "X"
        ) {
          done = true;
          emptySquares[computerAnswer] = "0";
        }
      } while (done === false);
      console.log(getTable(emptySquares));
      if (
        emptySquares[0] === emptySquares[1] &&
        emptySquares[1] === emptySquares[2]
      ) {
        console.log("You Win");
        resolve(true);
      }
      resolve(false);
    });
  });
};

async function game() {
  await introQuestion();
  let end = false;
  do {
    end = await turnQuestion();
  } while (end === false);
  rl.close();
}
game();
