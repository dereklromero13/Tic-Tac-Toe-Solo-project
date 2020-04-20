class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.plays = [
      0,0,0,
      0,0,0,
      0,0,0
    ]
    this.turn = player1.id;
  }

//   makePlayers(player1id, player1token, player2id, player2token) {
//     this.player1 = new Player(player1id, player1token)
//     this.player2 = new Player(player2id, player2token)
//   }
}
