// console.log("Webpack is working!")

const GameDisplay = require("./game_display");


document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const playButton = document.getElementById('play-button');
  const audio = document.getElementById('audio');
  const audioControls = document.getElementsByClassName('audio-controls')[0];
  const audioPlay = document.getElementById('audio-play');
  const audioPause = document.getElementById('audio-pause');
  const menu = document.getElementById('menu');
  const logoContainer = document.getElementById('logo-container');
  const controls = document.getElementById('controls');
  const moreLevels = document.getElementById('more-levels');

  playButton.addEventListener('click', () => {
    // canvas.width = 1500;
    // canvas.height = 1000;
    canvas.width = 800;
    canvas.height = 600;
    const newGame = new GameDisplay(ctx);
    newGame.start();
    menu.classList.add('hidden');
    logoContainer.classList.add('hidden');
    canvas.classList.remove('hidden')
    playButton.classList.add('hidden');
    controls.classList.remove('hidden');
    moreLevels.classList.add('hidden');
    
  })
  //for testing
    menu.classList.add('hidden');
    logoContainer.classList.add('hidden');
    playButton.classList.add('hidden');
    controls.classList.remove('hidden');
    moreLevels.classList.add('hidden');
    canvas.width = 800;
    canvas.height = 600;
    const newGame = new GameDisplay(ctx);
    newGame.start();
  //for testing

  audioControls.addEventListener('click', () => {
    if (!audio.paused) {
      audio.pause();
      audioPlay.classList.remove('hidden');
      audioPause.classList.add('hidden');
    } else {
      audio.volume = 0.3;
      audio.play();
      audioPause.classList.remove('hidden');
      audioPlay.classList.add('hidden');
      }
  })
  
})