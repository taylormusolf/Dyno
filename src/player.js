class Player{
  constructor(){
    this.x = 50;
    this.y = 570;
    //testing
    // this.x = 1450;
    // this.y = 120;
    //testing
    this.x_v = 0;
    this.y_v = 0;
    this.jump = true;
    this.height = 20;
    this.width = 20;
    this.gravity = 0.6;
    this.friction = 0.7;
    this.climbing = false;
    this.climbingWallIdx = null;
    this.canClimb = true;
    this.wallJump = true;
    this.facing = 'right';
    this.lives = 3;
    // this.hasRope = false;
  }

};


module.exports = Player;