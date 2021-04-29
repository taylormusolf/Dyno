const Game = require('./game')

class GameDisplay {
  constructor(ctx){
    this.game = new Game(ctx);
  }
  


  start() {
    this.game.keyListeners(); 
    let gameLoop = setInterval(() => {
      this.game.loop();
      // if(this.game.gameOverCheck()){
      //   this.restart();
      //   clearInterval(gameLoop);
      //   return
      // }
    }, 22)
  }

  restart(){
    let gameOver = document.getElementsByClassName('game-over')[0]
    let cont = document.getElementsByClassName('cont')[0];
    this.newGame();
    this.game.keyListeners();
    gameOver.classList.add('hidden');
    cont.classList.add('hidden');
    cont.classList.add('animate-fade');
  }

  gameOver(){
    this.game.removeKeyListeners();
    this.restart();
  }
  
  showGame() {
    let gameOver = document.getElementsByClassName('game-over')[0];
    gameOver.classList.remove('hidden');
    const gameContainer = document.getElementsByClassName('game-container')[0];
    gameContainer.classList.remove('game-container');
    gameContainer.classList.add('game-container-active');
    const notGameElements = document.getElementsByClassName('not-game');
    Array.from(notGameElements).forEach((ele) => ele.classList.add('hidden'));
  }




}




module.exports = GameDisplay;
