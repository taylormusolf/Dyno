const Game = require('./game')

class GameDisplay {
  constructor(ctx){
    this.game = new Game(ctx);

  }
  

  start() {
    this.game.keyListeners();
    this.game.updatePlayerMenu();
    requestAnimationFrame(this.game.loop.bind(this.game));
    
  }

  // restart(){
  //   this.newGame();
  //   this.game.keyListeners();
  // }

  // gameOver(){
  //   if(this.game.levelOver()){
  //   return true
  //   } else {
  //   return false
  //   }
  // }




}




module.exports = GameDisplay;
