console.log("Webpack is working!")

const GameDisplay = require("./game_display");
const Level = require("./level")
const Player = require("./player")





document.addEventListener("DOMContentLoaded", function (){
  const canvas = document.getElementById("canvas");
  canvas.width = 1500;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d");

  const newGame = new GameDisplay(ctx);
  newGame.start();
  
  
})