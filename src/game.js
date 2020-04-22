class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.plays = [
      0,0,0,
      0,0,0,
      0,0,0
    ]
    this.turn = player1;
  }

  chooseSquare(square) {
    this.plays[square.id] = this.turn.id
    console.log(this.plays)
    if (this.turn === this.player1) {
      this.turn = this.player2
    } else {
      this.turn = this.player1
    }
  }
//
// from the start of a new game, we will start with player 1. After player 1's turn
// it will now be player 2's turn.



//   makePlayers(player1id, player1token, player2id, player2token) {
//     this.player1 = new Player(player1id, player1token)
//     this.player2 = new Player(player2id, player2token)
//   }
}
