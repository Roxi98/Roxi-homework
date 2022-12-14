const { randomIntBetweenTwoNumbers, getTable } = require("./funkciok");

const readline = require("readline");
const { truncate } = require("fs");
const { count } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let emptySquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function computerTurnh() {
  if (emptySquares[4] !== "0" && emptySquares[4] !== "X") {
    emptySquares[4] = "0";
  } else if ([emptySquares[0] === "X" && emptySquares[1] === "X"]) {
    emptySquares[2] === "0";
  } else if ([emptySquares[1] === "X" && emptySquares[2] === "X"]) {
    emptySquares[0] === "0";
  } else if ([emptySquares[0] === "X" && emptySquares[2] === "X"]) {
    emptySquares[1] === "0";
  } else if ([emptySquares[3] === "X" && emptySquares[4] === "X"]) {
    emptySquares[5] === "0";
  } else if ([emptySquares[4] === "X" && emptySquares[5] === "X"]) {
    emptySquares[3] === "0";
  } else if ([emptySquares[3] === "X" && emptySquares[5] === "X"]) {
    emptySquares[4] === "0";
  } else if ([emptySquares[6] === "X" && emptySquares[7] === "X"]) {
    emptySquares[8] === "0";
  } else if ([emptySquares[7] === "X" && emptySquares[8] === "X"]) {
    emptySquares[6] === "0";
  } else if ([emptySquares[6] === "X" && emptySquares[8] === "X"]) {
    emptySquares[7] === "0";
  } else if ([emptySquares[0] === "X" && emptySquares[3] === "X"]) {
    emptySquares[6] === "0";
  } else if ([emptySquares[0] === "X" && emptySquares[6] === "X"]) {
    emptySquares[3] === "0";
  } else if ([emptySquares[3] === "X" && emptySquares[6] === "X"]) {
    emptySquares[0] === "0";
  } else if ([emptySquares[1] === "X" && emptySquares[4] === "X"]) {
    emptySquares[7] === "0";
  } else if ([emptySquares[1] === "X" && emptySquares[7] === "X"]) {
    emptySquares[4] === "0";
  } else if ([emptySquares[4] === "X" && emptySquares[7] === "X"]) {
    emptySquares[1] === "0";
  } else if ([emptySquares[2] === "X" && emptySquares[5] === "X"]) {
    emptySquares[8] === "0";
  } else if ([emptySquares[2] === "X" && emptySquares[8] === "X"]) {
    emptySquares[5] === "0";
  } else if ([emptySquares[5] === "X" && emptySquares[8] === "X"]) {
    emptySquares[2] === "0";
  } else if ([emptySquares[0] === "X" && emptySquares[4] === "X"]) {
    emptySquares[8] === "0";
  } else if ([emptySquares[0] === "X" && emptySquares[8] === "X"]) {
    emptySquares[4] === "0";
  } else if ([emptySquares[4] === "X" && emptySquares[8] === "X"]) {
    emptySquares[0] === "0";
  } else if ([emptySquares[2] === "X" && emptySquares[4] === "X"]) {
    emptySquares[6] === "0";
  } else if ([emptySquares[2] === "X" && emptySquares[6] === "X"]) {
    emptySquares[4] === "0";
  } else if ([emptySquares[4] === "X" && emptySquares[6] === "X"]) {
    emptySquares[2] === "0";
  } else computerTurne();
  console.log(getTable(emptySquares));
}
/*function gameMode(mode) {
  return new Promise((resolve, reject) => {
    rl.question(
      "Choose between normal mode and hard mode please  ",
      (answer) => {
        if (answer.toLowerCase() === "normal mode") {
          console.log("Normal mode");
        } else if (answer.toLowerCase() === "hard mode") {
          console.log("Hard mode");
        }
      }
    );
  });
}*/

function introQuestion(end) {
  return new Promise((resolve, reject) => {
    rl.question("Do you want to start? ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Its your turn.Please pick a square to place your X");
        console.log(getTable(emptySquares));
        resolve(true);
      } else if (answer.toLowerCase() === "no") {
        resolve(false);
      }
    });
  });
}
function winCheck(resolve) {
  const winCondition = [
    [emptySquares[0], emptySquares[1], emptySquares[2]],
    [emptySquares[3], emptySquares[4], emptySquares[5]],
    [emptySquares[6], emptySquares[7], emptySquares[8]],
    [emptySquares[0], emptySquares[3], emptySquares[6]],
    [emptySquares[1], emptySquares[4], emptySquares[7]],
    [emptySquares[2], emptySquares[5], emptySquares[8]],
    [emptySquares[0], emptySquares[4], emptySquares[8]],
    [emptySquares[2], emptySquares[4], emptySquares[6]],
  ];
  let winner = "";
  for (let i = 0; i < winCondition.length; i++) {
    let array = winCondition[i];
    let oCount = array.filter((element2) => element2 === "0").length;
    if (oCount === 3) {
      winner = 1;
    }

    let xCount = array.filter((element) => element === "X").length;
    if (xCount === 3) {
      winner = 0;
    }
  }
  switch (winner) {
    case 0:
      console.log(getTable(emptySquares));
      console.log("You Win!");
      resolve(true);

      break;

    case 1:
      console.log("You Loose NAB!");
      resolve(true);

      break;
  }
}
function computerTurne() {
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
}

const turnQuestion = (playerStart) => {
  return new Promise((resolve, reject) => {
    if (playerStart === true) {
      rl.question("Place your X in square 1-9 ", (answer) => {
        if (
          emptySquares[answer - 1] !== "0" &&
          emptySquares[answer - 1] !== "X"
        ) {
          emptySquares[answer - 1] = "X";
          winCheck(resolve);
          computerTurnh();
          winCheck(resolve);
        } else {
          console.log(
            "The square you choose is already taken.Please pick another square"
          );
        }
        resolve(false);
      });
    } else {
      const countX = emptySquares.filter((x) => {
        if (x === "X") {
          return true;
        } else {
          return false;
        }
      }).length;
      const countO = emptySquares.filter((x) => {
        if (x === "0") {
          return true;
        } else {
          return false;
        }
      }).length;

      if (countX === countO) {
        computerTurnh();
      }

      winCheck(resolve);
      rl.question("Place your X in square 1-9 ", (answer) => {
        if (
          emptySquares[answer - 1] !== "0" &&
          emptySquares[answer - 1] !== "X"
        ) {
          emptySquares[answer - 1] = "X";
          winCheck(resolve);
        } else {
          console.log(
            "The square you choose is already taken.Please pick another square"
          );
        }
        resolve(false);
      });
    }
  });
};

async function game() {
  const playerStart = await introQuestion();

  let end = false;
  do {
    end = await turnQuestion(playerStart);
  } while (end === false);
  rl.close();
}

game();
