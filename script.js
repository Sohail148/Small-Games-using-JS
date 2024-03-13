let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newgame = document.querySelector("#newGame");
let msgcontent = document.querySelector(".msg-content");
let message = document.querySelector("#msg");
let dMsg = document.querySelector("#drawmsg");
let dRaw = document.querySelector(".draw");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box Was Clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
    checkDraw();
  });
});

const resetGame = () => {
  turnO = true;
  enableboxes();
  msgcontent.classList.add("hide");
};
const disableboxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  message.innerText = `Congratualations, Winner is ${winner}`;
  msgcontent.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showwinner(pos1val);
        disableboxes();
      }
    }
  }
};
// const checkDraw = () => {
//   for (let pattern of winPatterns) {
//     let pos1val = boxes[pattern[0]].innerText;
//     let pos2val = boxes[pattern[1]].innerText;
//     let pos3val = boxes[pattern[2]].innerText;

//      if (pos1val != "" && pos2val != "" && pos3val != "") {
//       if (pos1val !== pos2val && pos2val !== pos3val) {
//         console.log("Game is draw");

//         dRaw.classList.remove("hide1");
//         disableboxes();
//       }
//     }
//   }
// };

resetbtn.addEventListener("click", () => {
  resetGame();
});
newgame.addEventListener("click", resetGame);