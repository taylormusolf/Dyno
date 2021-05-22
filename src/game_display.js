const Game = require('./game')

class GameDisplay {
  constructor(ctx){
    this.game = new Game(ctx);

  }
  

  start() {
    this.game.keyListeners(); 
    this.game.loop();
    
    requestAnimationFrame(this.game.loop.bind(this));
    

    // let gameLoop = setInterval(() => {
    //   this.game.loop();
    //   if(this.gameOver()){
    //     clearInterval(gameLoop);
    //     const canvas = document.getElementById("canvas");
    //     const controls = document.getElementById('controls');
    //     const playButton = document.getElementById('play-button');
    //     const moreLevels = document.getElementById('more-levels');
    //     canvas.classList.add('hidden');
    //     playButton.classList.remove('hidden');
    //     moreLevels.classList.remove('hidden');
    //     controls.classList.add('hidden');
    //     this.game.removeKeyListeners();
    //   }
    // }, 22)
    
  }

  // restart(){
  //   this.newGame();
  //   this.game.keyListeners();
  // }

  gameOver(){
    if(this.game.levelOver()){
    return true
    } else {
    return false
    }
  }




}




module.exports = GameDisplay;
