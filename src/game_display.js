const Game = require('./game')

class GameDisplay {
  constructor(ctx){
    this.game = new Game(ctx);
  }
  


  start() {
    this.game.keyListeners(); 
    const gameLoop = setInterval(() => {
      this.game.loop();
    }, 22)
    if (this.game.gameOver()){
      clearInterval(gameLoop);
      this.start();
    }
  };

  

}




module.exports = GameDisplay;
