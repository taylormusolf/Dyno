const Player = require('./player');
const Level = require('./level');

class Game{
  constructor(ctx){
    this.player = new Player();
    this.level = new Level();
    this.ctx = ctx;
    this.playerImg = new Image();
    this.playerImg.src = '../src/assets/images/climber.png';
    this.keys = {
      right: false,
      left: false,
      up: false,
    };
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  keyListeners() {
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  
  renderCanvas(){
    const img = new Image();
    img.src = '../src/assets/images/cave.jpg'
    this.ctx.drawImage(img, 0, 0, 1500, 1000);
  }
  
  renderPlayer(){
    this.ctx.drawImage(this.playerImg, (this.player.x)-20, (this.player.y)-20, 20, 20);
  }

  renderPlat(){
    this.ctx.fillStyle = "#45597E";
    this.ctx.fillRect(this.level.platforms[0].x, this.level.platforms[0].y, this.level.platforms[0].width, this.level.platforms[0].height);
    this.ctx.fillRect(this.level.platforms[1].x, this.level.platforms[1].y, this.level.platforms[1].width, this.level.platforms[1].height);
  }
  

  keydown(e) {
    if(e.keyCode === 37) {
        this.keys.left = true;
    }
    if(e.keyCode === 38 || e.keyCode === 32) {
        if(this.player.jump === false) {
            this.player.y_v = -10;
        }
    }
    if(e.keyCode === 39) {
        this.keys.right = true;
    }
}
// This function is called when the pressed key is released
  keyup(e) {
    if(e.keyCode === 37) {
        this.keys.left = false;
    }
    if(e.keyCode === 38 || e.keyCode === 32) {
        if(this.player.y_v < -2) {
        this.player.y_v = -3;
        }
    }
    if(e.keyCode === 39) {
        this.keys.right = false;
    }
}

  loop() {
    // If the player is not jumping apply the effect of friction
    if (this.player.jump === false) {
        this.player.x_v *= this.player.friction;
    } else {
        // If the player is in the air then apply the effect of gravity
        this.player.y_v += this.player.gravity;
    }
    this.player.jump = true;
    // If the left key is pressed increase the relevant horizontal velocity
    if (this.keys.left) {
        this.player.x_v = -2.5;
    }
    if (this.keys.right) {
        this.player.x_v = 2.5;
    }
    // Updating the y and x coordinates of the player
    this.player.y += this.player.y_v;
    this.player.x += this.player.x_v;
    // A simple code that checks for collions with the platform

    let i = -1;
    if (this.level.platforms[0].x < this.player.x && this.player.x < this.level.platforms[0].x + this.level.platforms[0].width &&
      this.level.platforms[0].y < this.player.y && this.player.y < this.level.platforms[0].y + this.level.platforms[0].height){
        i = 0;
    }
    if( this.level.platforms[1].x < this.player.x && this.player.x < this.level.platforms[1].x + this.level.platforms[1].width &&
      this.level.platforms[1].y < this.player.y && this.player.y < this.level.platforms[1].y + this.level.platforms[1].height){
        i = 1;
    }
    if (i > -1){
      this.player.jump = false;
      this.player.y = this.level.platforms[i].y;    
    }

    // Rendering the canvas, the player and the platforms
    this.renderCanvas();
    this.renderPlayer();
    this.renderPlat();
    
  }
  
  

}

module.exports = Game;
