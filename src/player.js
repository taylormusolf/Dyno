// The attributes of the player.
class Player{
  constructor(){
    this.x = 300;
    this.y = 900;
    this.x_v = 0;
    this.y_v = 0;
    this.jump = true;
    this.height = 20;
    this.width = 20;
    this.gravity = 0.6;
    this.friction = 0.7;
    this.climbing = false;
  }

};


module.exports = Player;