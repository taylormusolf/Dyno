const Player = require('./player');
const Level = require('./level');

class Game{
  constructor(ctx){
    this.player = new Player();
    this.level = new Level();
    this.ctx = ctx;
    this.playerImg = new Image();
    this.playerImg.src = '../src/assets/images/climber_right.png';
    this.keys = {
      right: false,
      left: false,
      up: false,
      down: false
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
    this.ctx.drawImage(this.playerImg, (this.player.x)-40, (this.player.y)-40, 40, 40);
  }

  renderPlatforms(){
    // this.ctx.fillStyle = "#45597E";
    const img = new Image();
    img.src = '../src/assets/images/rock_texture2.png';
    const pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    for(let i = 0; i < this.level.platforms.length; i++){
      // this.ctx.fillRect(this.level.platforms[i].x, this.level.platforms[i].y, this.level.platforms[i].width, this.level.platforms[i].height);
      this.ctx.fillRect(this.level.platforms[i].x, this.level.platforms[i].y, this.level.platforms[i].width, this.level.platforms[i].height);
    
    }
  }
  renderWalls(){
    // this.ctx.fillStyle = "#45597E";
    const img = new Image();
    img.src = '../src/assets/images/rock_texture.png';
    const pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    for(let i = 0; i < this.level.walls.length; i++){
      this.ctx.fillRect(this.level.walls[i].x, this.level.walls[i].y, this.level.walls[i].width, this.level.walls[i].height);
    
    }
  }
  

  keydown(e) {
    if(e.keyCode === 65) {
        this.keys.left = true;
        this.playerImg.src = '../src/assets/images/climber_left.png'
    }
    if(e.keyCode === 32) {
        if(this.player.jump === false) {
            this.player.y_v = -10;
        }
    }
    if(e.keyCode === 68) {
        this.keys.right = true;
        this.playerImg.src = '../src/assets/images/climber_right.png'
    }
    if(e.keyCode === 87) {
      if(this.player.climbing) {
        this.keys.up = true;
      }
    }
    if(e.keyCode === 83) {
      if(this.player.climbing) {
        this.keys.down = true;
      }
    }
}
// This function is called when the pressed key is released
  keyup(e) {
    if(e.keyCode === 65) {
        this.keys.left = false;
    }
    if(e.keyCode === 32) {
        if(this.player.y_v < -2) {
        this.player.y_v = -3;
        }
    }
    if(e.keyCode === 68) {
        this.keys.right = false;
    }
    if(e.keyCode === 87) {
      this.keys.up = false;
    }
    if(e.keyCode === 83) {
      this.keys.down = false;
    }
}

  loop() {
    // If the player is not jumping apply the effect of friction
    if (this.player.jump === false) {
        this.player.x_v *= this.player.friction;
    } else if (this.player.climbing){
        this.player.y_v = 0;
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
    if (this.keys.up) {
      this.player.y_v = -2.5;
    }
    if (this.keys.down) {
      this.player.y_v = 2.5;
    }
    // Updating the y and x coordinates of the player
    this.player.y += this.player.y_v;
    this.player.x += this.player.x_v;
    // Checks for collions with the platform

    let falling = true;
    for (let i = 0; i < this.level.platforms.length; i++) {
      if(this.level.platforms[i].x < this.player.x && this.player.x < this.level.platforms[i].x + this.level.platforms[i].width + this.player.width  &&
        this.level.platforms[i].y < this.player.y && this.player.y < this.level.platforms[i].y + this.level.platforms[i].height){
          falling = false;
          let platIndex = i;
        if (!falling){
          this.player.jump = false;
          this.player.y = this.level.platforms[platIndex].y; 
        }
      }  
    }
    // if(this.keys.left &&
    //   (this.player.x >= this.level.walls[0].x 
    //     && this.player.x + this.player.width <= this.level.walls[0].x + this.level.walls[0].width)
    //     && (this.player.y >= this.level.walls[0].y 
    //     && this.player.y + this.player.height <= this.level.walls[0].y + this.level.walls[0].height)
    //   ){
    //     this.player.x_v = 0;
    //     this.player.x -=1
    // }
    for (let i = 0; i < this.level.walls.length; i++){
      //left side of wall
      if( this.player.x >= this.level.walls[i].x && this.player.x + this.player.width < this.level.walls[i].x + this.level.walls[i].width
        && (this.player.y >= this.level.walls[i].y || this.player.y <= this.level.walls[i].y + this.level.walls[i].height)
        ){
        this.player.x = this.level.walls[i].x;
      }
      //right side of wall
      if( this.player.x > this.level.walls[i].x && this.player.x <= this.level.walls[i].x + this.level.walls[i].width
        && (this.player.y >= this.level.walls[i].y || this.player.y <= this.level.walls[i].y + this.level.walls[i].height)
      ) {
        this.player.x = (this.level.walls[i].x + this.level.walls[i].width);
      }
      //climbing eligibility
      if( this.player.x === this.level.walls[i].x || this.player.x === this.level.walls[i].x + this.level.walls[i].width ){
        this.player.climbing = true;
      } else {
        this.player.climbing = false;
      }
    }



    
    

    this.renderCanvas();
    this.renderPlayer();
    this.renderPlatforms();
    this.renderWalls();
  }
  
  

}

module.exports = Game;
