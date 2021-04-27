console.log("Webpack is working!")

const GameDisplay = require("./game_display");
const Level = require("./level")
const Player = require("./player")



document.addEventListener("DOMContentLoaded", function (){
  const canvas = document.getElementById("canvas");
  // canvas.height = Level.DIM_Y;
  // canvas.width = Level.DIM_X;
  canvas.width = 1500;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d");
  // const level = new Level();
  // new GameDisplay(level, ctx).start();
  // ctx.fillStyle = "#F0F8FF";
  // ctx.fillRect(0, 0, 1000, 1000);
  const img = new Image();
  img.src = '../src/assets/images/cave.jpg';
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 1500, 1000);
    const player = new Player();
    player.renderPlayer();
  }
  

  
  
})