// The attributes of the player.
function Player() {
  this.x = 0;
  this.y = 0;
  this.x_v = 0;
  this.y_v = 0;
  this.jump = true;
  this.height = 20;
  this.width = 20;
  this.gravity = 0.6;
  this.friction = 0.7;
};

// Function to render the player
Player.prototype.renderPlayer = function renderPlayer(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#F08080";
  ctx.fillRect((Player.x)-20, (Player.y)-20, Player.width, Player.height);
}



module.exports = Player;