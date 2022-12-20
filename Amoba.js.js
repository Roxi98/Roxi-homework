const { randomIntBetweenTwoNumbers, getTable } = require("./funkciok");

const readline = require("readline");
const { truncate } = require("fs");
const { count } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let emptySquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function introQuestion(end) {
  return new Promise((resolve, reject) => {
    rl.question("Do you want to start? ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Its your turn.Please pick a square to place your X");
        console.log(getTable(emptySquares));
      } else if (answer.toLowerCase() === "no") {
        console.log(getTable(emptySquares));
        console.log("Computers turn.");
        let done1 = true;
        do {
          let computerAnswer1 = 0;
          computerAnswer1 = randomIntBetweenTwoNumbers(0, 8);
          emptySquares[computerAnswer1] = "0";
        } while (done1 === false);
        console.log(getTable(emptySquares));
        const winCondition = [
          [emptySquares[0], emptySquares[1], emptySquares[2]],
          [emptySquares[3], emptySquares[4], emptySquares[5]],
          [emptySquares[6], emptySquares[7], emptySquares[8]],
          [emptySquares[0], emptySquares[5], emptySquares[8]],
          [emptySquares[1], emptySquares[6], emptySquares[7]],
          [emptySquares[2], emptySquares[5], emptySquares[8]],
          [emptySquares[0], emptySquares[4], emptySquares[8]],
          [emptySquares[2], emptySquares[4], emptySquares[6]],
        ];
        for (let i = 0; i < winCondition.length; i++) {
          let array = winCondition[i];

          let xCount = array.filter((element) => element === "X").length;
          if (xCount === 3) {
            console.log("You Win!");
          }

          resolve(true);
        }
      }

      resolve();
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
      let computerAnswer = 0;

      computerAnswer = randomIntBetweenTwoNumbers(0, 8);

      while (
        emptySquares[computerAnswer] !== "0" &&
        emptySquares[computerAnswer] !== "X"
      )
        emptySquares[computerAnswer] = "0";

      console.log(getTable(emptySquares));
      const winCondition = [
        [emptySquares[0], emptySquares[1], emptySquares[2]],
        [emptySquares[3], emptySquares[4], emptySquares[5]],
        [emptySquares[6], emptySquares[7], emptySquares[8]],
        [emptySquares[0], emptySquares[5], emptySquares[8]],
        [emptySquares[1], emptySquares[6], emptySquares[7]],
        [emptySquares[2], emptySquares[5], emptySquares[8]],
        [emptySquares[0], emptySquares[4], emptySquares[8]],
        [emptySquares[2], emptySquares[4], emptySquares[6]],
      ];
      for (let i = 0; i < winCondition.length; i++) {
        let array = winCondition[i];

        let xCount = array.filter((element) => element === "X").length;
        if (xCount === 3) {
          console.log("You Win!");
          resolve(true);
        }
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
