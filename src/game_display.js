function GameDisplay(level, ctx) {
  this.ctx = ctx;
  this.level = level;
}



GameDisplay.prototype.start = function start() {
  this.level.draw(this.ctx);
};




module.exports = GameDisplay;
