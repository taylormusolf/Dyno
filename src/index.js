console.log("Webpack is working!")

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
  const logo = document.getElementById('logo');
  // const smallLogo = document.getElementById('small-logo')
  const controls = document.getElementById('controls')

  playButton.addEventListener('click', () => {
    canvas.width = 1500;
    canvas.height = 1000;
    const newGame = new GameDisplay(ctx);
    newGame.start();
    menu.classList.add('hidden');
    logo.classList.add('hidden');
    playButton.classList.add('hidden');
    // smallLogo.classList.remove('hidden');
    controls.classList.remove('hidden');
  })
  //for testing
    // menu.classList.add('hidden');
    // logo.classList.add('hidden');
    // playButton.classList.add('hidden');
    // controls.classList.remove('hidden');
    // canvas.width = 1500;
    // canvas.height = 1000;
    // const newGame = new GameDisplay(ctx);
    // newGame.start();
  //for testing

  audioControls.addEventListener('click', () => {
    if (!audio.paused) {
      audio.pause();
      audioPlay.classList.remove('hidden');
      audioPause.classList.add('hidden');
    } else {
      audio.play();
      audioPause.classList.remove('hidden');
      audioPlay.classList.add('hidden');
      }
  })
  
})