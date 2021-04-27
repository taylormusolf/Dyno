const Game = require('./game')


class GameDisplay {
  constructor(ctx){
    this.game = new Game(ctx);
  }
  


  start() {
    this.game.keyListeners();
    setInterval(() => {
      this.game.loop();
    }, 22)
  };


}






module.exports = GameDisplay;
