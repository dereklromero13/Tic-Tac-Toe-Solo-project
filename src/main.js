var boardgameArea = document.querySelector(".play-area");
var buttonSquares = document.querySelectorAll("button");


var savedWonGames = [];
var winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

var player1 = new Player(1, 'x')
var player2 = new Player(2, 'o')
var game = new Game(player1, player2);

buttonSquares.forEach(buttonSquare => buttonSquare.addEventListener("click", () => game.chooseSquare(buttonSquare)))











function updateGameBoard() {
  document.querySelector('.play-area').innerHTML = '';
  for (var i = 0; i < game.board.length; i++) {
    box.innerHTML = game.board[i]
  }
}

game.plays = [0, 0, 0, 0, 0, 0, 0, 0, 0]
