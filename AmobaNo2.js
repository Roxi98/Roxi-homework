const { randomIntBetweenTwoNumbers, getTable } = require("./funkciok");

const readline = require("readline");
const { truncate } = require("fs");
const { count } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let emptySquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let faszom = "";
function introQuestion(end) {
  return new Promise((resolve, reject) => {
    rl.question("Do you want to start? ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Its your turn.Please pick a square to place your X");
        console.log(getTable(emptySquares));
        faszom = "yes";
      } else if (answer.toLowerCase() === "no") {
        console.log(getTable(emptySquares));
        console.log("Computers turn.");
        faszom = "no";
      }
      resolve(false);
    });
  });
}
const turnQuestion = (end) => {
  return new Promise((resolve, reject) => {
    rl.question("Place your X in square 1-9 ", (answer) => {
      if (
        emptySquares[answer - 1] !== "0" &&
        emptySquares[answer - 1] !== "X"
      ) {
        emptySquares[answer - 1] = "X";
      } else {
        console.log(
          "The square you choose is already taken.Please pick another square"
        );
      }

      if (
        emptySquares[0] === emptySquares[1] &&
        emptySquares[1] === emptySquares[2]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[3] === "X" &&
        emptySquares[3] === emptySquares[4] &&
        emptySquares[4] === emptySquares[5]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[6] === "X" &&
        emptySquares[6] === emptySquares[7] &&
        emptySquares[7] === emptySquares[8]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[0] === "X" &&
        emptySquares[0] === emptySquares[3] &&
        emptySquares[3] === emptySquares[6]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[1] === "X" &&
        emptySquares[1] === emptySquares[4] &&
        emptySquares[4] === emptySquares[7]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[2] === "X" &&
        emptySquares[2] === emptySquares[5] &&
        emptySquares[5] === emptySquares[8]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[0] === "X" &&
        emptySquares[0] === emptySquares[4] &&
        emptySquares[4] === emptySquares[8]
      ) {
        console.log("You Win");
        resolve(true);
      } else if (
        emptySquares[2] === "X" &&
        emptySquares[2] === emptySquares[4] &&
        emptySquares[4] === emptySquares[6]
      ) {
        console.log("You Win");
        resolve(true);
      }
      resolve(false);
    });
  });
};
const turnQuestion2 = (end) => {
  return new Promise((resolve, reject) => {
    rl.question("Place your X in square 1-9 ", (answer) => {
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
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[3] === "0" &&
        emptySquares[3] === emptySquares[4] &&
        emptySquares[4] === emptySquares[5]
      ) {
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[6] === "0" &&
        emptySquares[6] === emptySquares[7] &&
        emptySquares[7] === emptySquares[8]
      ) {
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[0] === "0" &&
        emptySquares[0] === emptySquares[3] &&
        emptySquares[3] === emptySquares[6]
      ) {
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[1] === "0" &&
        emptySquares[1] === emptySquares[4] &&
        emptySquares[4] === emptySquares[7]
      ) {
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[2] === "0" &&
        emptySquares[2] === emptySquares[5] &&
        emptySquares[5] === emptySquares[8]
      ) {
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[0] === "0" &&
        emptySquares[0] === emptySquares[4] &&
        emptySquares[4] === emptySquares[8]
      ) {
        console.log("You Loose");
        resolve(true);
      } else if (
        emptySquares[2] === "0" &&
        emptySquares[2] === emptySquares[4] &&
        emptySquares[4] === emptySquares[6]
      ) {
        console.log("You Loose");
        resolve(true);
      }
      resolve(false);
    });
  });
};
async function game() {
  await introQuestion();
  if (faszom === "yes") {
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
  } else if (faszom === "no") {
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
    await turnQuestion();
    await turnQuestion2();
  }

  rl.close();
}

game();
