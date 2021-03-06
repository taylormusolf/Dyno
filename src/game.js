const Player = require('./player');
const Level = require('./level_1');
const Level2 = require('./level_2')
const Level3 = require('./level_3')

class Game{
  constructor(ctx){
    this.player = new Player();
    this.level = new Level();
    //testing
    //this.level = new Level3();
    //this.currentLevel = 3;
    //testing
    this.currentLevel = 1;
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
    this.gameOver = false;
  }
  
  levelOver(){
    if(this.level.complete){
      return true
    } else {
      return false
    }
    
  }

  gameOverMet(){
    this.gameOver = true;
  }

  keyListeners() {
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  removeKeyListeners(){
    document.removeEventListener("keydown", this.keydown);
    document.removeEventListener("keyup", this.keyup);
  }
  
  renderCanvas(){
    const img = new Image();
    img.src = '../src/assets/images/cave.jpg'
    this.ctx.drawImage(img, 0, 0, 800, 600);
    
  }
  
  renderPlayer(){
    this.ctx.drawImage(this.playerImg, (this.player.x)-40, (this.player.y)-40, 40, 40);
  }

  renderPlatforms(){
    // this.ctx.fillStyle = "#45597E";
    const img = new Image();
    img.src = '../src/assets/images/white_rock.png';
    const pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    for(let i = 0; i < this.level.platforms.length; i++){
      this.ctx.fillRect(this.level.platforms[i].x, this.level.platforms[i].y, this.level.platforms[i].width, this.level.platforms[i].height);
    }
  }
  renderWalls(){
    // this.ctx.fillStyle = "#45597E";
    const img = new Image();
    img.src = '../src/assets/images/blue_rock.png';
    const pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    for(let i = 0; i < this.level.walls.length; i++){
      this.ctx.fillRect(this.level.walls[i].x - 17, this.level.walls[i].y, this.level.walls[i].width -7, this.level.walls[i].height);
    }
  }
  renderCeilings(){
    const img = new Image();
    img.src = '../src/assets/images/blue_rock.png';
    const pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    for(let i = 0; i < this.level.ceilings.length; i++){
      this.ctx.fillRect(this.level.ceilings[i].x - 17, this.level.ceilings[i].y, this.level.ceilings[i].width -7, this.level.ceilings[i].height);
    }
  }
  renderUnclimbableWalls(){
    // this.ctx.fillStyle = "#45597E";
    const img = new Image();
    img.src = '../src/assets/images/white_rock.png';
    const pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    for(let i = 0; i < this.level.unclimbableWalls.length; i++){
      this.ctx.fillRect(this.level.unclimbableWalls[i].x - 17, this.level.unclimbableWalls[i].y, this.level.unclimbableWalls[i].width -7, this.level.unclimbableWalls[i].height);
    }
  }
  
  renderRope(){
    const img = new Image();
    img.src = '../src/assets/images/rope.png'
    // this.ctx.drawImage(img, 1240, 175, 20, 20);
    // if(this.player.x === 1240 && (this.player.y < 180 && this.player.y > 170)){
    //   this.player.hasRope = true;
    // }
    
    this.ctx.drawImage(img, 50, 925, 20, 20);
    
  }

  keydown(e) {
    if(e.keyCode === 65) {
        this.keys.left = true;
        this.player.facing = 'left';
    }
    if(e.keyCode === 32) {
        if(this.player.jump === false) {
            this.player.y_v = -10;
        }
    }

    if(e.keyCode === 32 && this.player.climbing && this.player.facing === 'right') {
      if(this.player.wallJump === true) {
          this.player.y += -40;
          this.player.x += -50;
          this.player.x_v = -3;
          this.player.y_v = -5;
          this.player.facing = 'left';
          
      }
    } else if(e.keyCode === 32 && this.player.climbing && this.player.facing === 'left'){
      if(this.player.wallJump === true) {
        this.player.y -= 40;
        this.player.x += 50;
        this.player.x_v = 3;
        this.player.y_v = -5;
        this.player.facing = 'right';
        
      }
    }

    if(e.keyCode === 68) {
        this.keys.right = true;
        this.player.facing = 'right';
    }
    if(e.keyCode === 87 && this.player.climbing && this.player.canClimb) {
      this.player.y += -15;
      this.player.canClimb = false;
    }
    if (this.keys.up && !this.player.climbing){
      // this.player.y_v = 0;
      this.keys.up = false;
    }
    if(e.keyCode === 83 && this.player.climbing && this.player.canClimb) {
      this.player.y += 15;
      this.player.canClimb = false;
    }
    if (this.keys.down && !this.player.climbing){
      // this.player.y_v = 0;
      this.keys.down = false;
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
      this.player.canClimb = true;
    }
    if(e.keyCode === 83) {
      this.player.canClimb = true;
    }
  }
  updatePlayerMenu(){
    const playerMenu = document.getElementById('player-menu');
    const playerLives = document.getElementById('player-lives');
    let lives = document.createElement('span');
    lives.setAttribute('id', 'player-lives')
    lives.textContent = this.player.lives
    playerMenu.replaceChild(lives, playerLives);
  }
  

  loop() {
    let gameRun = requestAnimationFrame(this.loop.bind(this));
    if((this.levelOver() && this.currentLevel === 3) || this.gameOver === true){
      cancelAnimationFrame(gameRun);
      const canvas = document.getElementById("canvas");
      const controls = document.getElementById('controls');
      const playButton = document.getElementById('play-button');
      const playerMenu = document.getElementById('player-menu');
      canvas.classList.add('hidden');
      playButton.classList.remove('hidden');
      controls.classList.add('hidden');
      playerMenu.classList.add('hidden');
      this.removeKeyListeners();
    }
    if(this.levelOver() && this.currentLevel === 3){
      const moreLevels = document.getElementById('more-levels');
      moreLevels.classList.remove('hidden');
    }
    if(this.gameOver){
      const gameOver = document.getElementById('game-over');
      gameOver.classList.remove('hidden');
    }
    if (this.levelOver() && this.currentLevel === 1){
      this.player.x = 50;
      this.player.y = 570;
      this.level = new Level2();
      this.currentLevel =2;
    }
    if (this.levelOver() && this.currentLevel === 2){
      this.player.x = 50;
      this.player.y = 150;
      this.level = new Level3();
      this.currentLevel = 3;
    }
    
    // changes direction of player image based on which way they are facing
    if (this.player.facing === 'right'){
      this.playerImg.src = '../src/assets/images/climber_right.png';
    } else {
      this.playerImg.src = '../src/assets/images/climber_left.png';
    }
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
    this.player.wallJump = true;
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
    // Checks for collions with the platform

    let falling = true;
    for (let i = 0; i < this.level.platforms.length; i++) {
      if(this.level.platforms[i].x < this.player.x && this.player.x < this.level.platforms[i].x + this.level.platforms[i].width + this.player.width  &&
        this.level.platforms[i].y < this.player.y && this.player.y < this.level.platforms[i].y + this.level.platforms[i].height+15){
          falling = false;
          let platIndex = i;
        if (!falling){
          this.player.jump = false;
          this.player.y = this.level.platforms[platIndex].y; 
        }
      }  
    }
 
    for (let i = 0; i < this.level.walls.length; i++){
      //left side of wall
      if( this.player.x >= this.level.walls[i].x && this.player.x + this.player.width < this.level.walls[i].x + this.level.walls[i].width
        && (this.player.y > this.level.walls[i].y && this.player.y - 40 <= this.level.walls[i].y + this.level.walls[i].height)
        ){
        this.player.x = this.level.walls[i].x;
      }
      //right side of wall
      if( this.player.x > this.level.walls[i].x && this.player.x <= this.level.walls[i].x + this.level.walls[i].width
        && (this.player.y > this.level.walls[i].y && this.player.y - 40 <= this.level.walls[i].y + this.level.walls[i].height)
      ) {
        this.player.x = (this.level.walls[i].x + this.level.walls[i].width);
      }
      //climbing
      if( (this.player.x === this.level.walls[i].x || this.player.x === this.level.walls[i].x + this.level.walls[i].width )
        && (this.player.y >= this.level.walls[i].y && this.player.y - 200 <= this.level.walls[i].y + this.level.walls[i].height)){
        this.player.climbing = true;
        this.player.climbingWallIdx = i;
        this.player.x_v = 0;
      }
    }

    for (let i = 0; i < this.level.unclimbableWalls.length; i++){
      //left side of wall
      if( this.player.x >= this.level.unclimbableWalls[i].x && this.player.x + this.player.width < this.level.unclimbableWalls[i].x + this.level.unclimbableWalls[i].width
        && (this.player.y > this.level.unclimbableWalls[i].y && this.player.y <= this.level.unclimbableWalls[i].y + this.level.unclimbableWalls[i].height)
        ){
        this.player.x = this.level.unclimbableWalls[i].x;
      }
      //right side of wall
      if( this.player.x > this.level.unclimbableWalls[i].x && this.player.x <= this.level.unclimbableWalls[i].x + this.level.unclimbableWalls[i].width
        && (this.player.y > this.level.unclimbableWalls[i].y && this.player.y <= this.level.unclimbableWalls[i].y + this.level.unclimbableWalls[i].height)
      ) {
        this.player.x = (this.level.unclimbableWalls[i].x + this.level.unclimbableWalls[i].width);
      }
    }
    for (let i = 0; i < this.level.ceilings.length; i++){
      //under ceiling
      if( this.player.x > this.level.ceilings[i].x && this.player.x <= this.level.ceilings[i].x + this.level.ceilings[i].width
        && (this.player.y - 40 > this.level.ceilings[i].y && this.player.y - 40 <= this.level.ceilings[i].y + this.level.ceilings[i].height)
      ) {
        this.player.y = (this.level.ceilings[i].y + this.level.ceilings[i].height) + 40;
        this.player.y_v = 2.5
      }
    }


    if(this.player.climbing){
      if(
      (this.player.x !== this.level.walls[this.player.climbingWallIdx].x 
      && this.player.x !== this.level.walls[this.player.climbingWallIdx].x + this.level.walls[this.player.climbingWallIdx].width)
      || (this.player.y < this.level.walls[this.player.climbingWallIdx].y 
      || this.player.y - 30 > this.level.walls[this.player.climbingWallIdx].y + this.level.walls[this.player.climbingWallIdx].height))
      {
      this.player.climbing = false;
      this.player.climbingWallIdx = null;
      }
    }
    //falling in a pit
    if(this.player.y > 1000){
      if(this.currentLevel === 3){
        this.player.x = 50;
        this.player.y = 150;
      } else{
        this.player.x = 50;
        this.player.y = 570;
      }
      
      this.player.x_v = 0;
      this.player.y_v = 0;
      this.player.lives -= 1;
      this.updatePlayerMenu();
    }
    //game over
    if(this.player.lives === 0){
      this.gameOverMet();
    }

    
    //exiting the level
      if(this.player.x > 800){
        this.level.complete = true;
      }

      

    this.renderCanvas();
    this.renderPlayer();
    this.renderPlatforms();
    this.renderWalls();
    this.renderUnclimbableWalls();
    this.renderCeilings();

    // if (!this.player.hasRope){
    //   this.renderRope();
    // }
    // if(this.player.x === 50){
    //   this.player.hasRope = true;
    // }
    
  }
  
  
  
  

}

module.exports = Game;
