function Level() {
  this.BG_COLOR = "#000000";
  this.DIM_X = 270;
  this.DIM_Y = 270;
}

Level.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Level.DIM_X, Level.DIM_Y);
  ctx.fillStyle = Level.BG_COLOR;
  ctx.fillRect(0, 0, Level.DIM_X, Level.DIM_Y);
};





module.exports = Level;