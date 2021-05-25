/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\r\nconst Level = __webpack_require__(/*! ./level_1 */ \"./src/level_1.js\");\r\nconst Level2 = __webpack_require__(/*! ./level_2 */ \"./src/level_2.js\")\r\nconst Level3 = __webpack_require__(/*! ./level_3 */ \"./src/level_3.js\")\r\n\r\nclass Game{\r\n  constructor(ctx){\r\n    this.player = new Player();\r\n    this.level = new Level();\r\n    //testing\r\n    //this.level = new Level3();\r\n    //this.currentLevel = 3;\r\n    //testing\r\n    this.currentLevel = 1;\r\n    this.ctx = ctx;\r\n    this.playerImg = new Image();\r\n    this.playerImg.src = './src/assets/images/climber_right.png';\r\n    this.keys = {\r\n      right: false,\r\n      left: false,\r\n      up: false,\r\n      down: false\r\n    };\r\n    this.keydown = this.keydown.bind(this);\r\n    this.keyup = this.keyup.bind(this);\r\n    this.gameOver = false;\r\n  }\r\n  \r\n  levelOver(){\r\n    if(this.level.complete){\r\n      return true\r\n    } else {\r\n      return false\r\n    }\r\n    \r\n  }\r\n\r\n  gameOverMet(){\r\n    this.gameOver = true;\r\n  }\r\n\r\n  keyListeners() {\r\n    document.addEventListener(\"keydown\", this.keydown);\r\n    document.addEventListener(\"keyup\", this.keyup);\r\n  }\r\n  removeKeyListeners(){\r\n    document.removeEventListener(\"keydown\", this.keydown);\r\n    document.removeEventListener(\"keyup\", this.keyup);\r\n  }\r\n  \r\n  renderCanvas(){\r\n    const img = new Image();\r\n    img.src = '../src/assets/images/cave.jpg'\r\n    this.ctx.drawImage(img, 0, 0, 800, 600);\r\n    \r\n  }\r\n  \r\n  renderPlayer(){\r\n    this.ctx.drawImage(this.playerImg, (this.player.x)-40, (this.player.y)-40, 40, 40);\r\n  }\r\n\r\n  renderPlatforms(){\r\n    // this.ctx.fillStyle = \"#45597E\";\r\n    const img = new Image();\r\n    img.src = './src/assets/images/white_rock.png';\r\n    const pattern = this.ctx.createPattern(img, 'repeat');\r\n    this.ctx.fillStyle = pattern;\r\n    for(let i = 0; i < this.level.platforms.length; i++){\r\n      this.ctx.fillRect(this.level.platforms[i].x, this.level.platforms[i].y, this.level.platforms[i].width, this.level.platforms[i].height);\r\n    }\r\n  }\r\n  renderWalls(){\r\n    // this.ctx.fillStyle = \"#45597E\";\r\n    const img = new Image();\r\n    img.src = './src/assets/images/blue_rock.png';\r\n    const pattern = this.ctx.createPattern(img, 'repeat');\r\n    this.ctx.fillStyle = pattern;\r\n    for(let i = 0; i < this.level.walls.length; i++){\r\n      this.ctx.fillRect(this.level.walls[i].x - 17, this.level.walls[i].y, this.level.walls[i].width -7, this.level.walls[i].height);\r\n    }\r\n  }\r\n  renderCeilings(){\r\n    const img = new Image();\r\n    img.src = '../src/assets/images/blue_rock.png';\r\n    const pattern = this.ctx.createPattern(img, 'repeat');\r\n    this.ctx.fillStyle = pattern;\r\n    for(let i = 0; i < this.level.ceilings.length; i++){\r\n      this.ctx.fillRect(this.level.ceilings[i].x - 17, this.level.ceilings[i].y, this.level.ceilings[i].width -7, this.level.ceilings[i].height);\r\n    }\r\n  }\r\n  renderUnclimbableWalls(){\r\n    // this.ctx.fillStyle = \"#45597E\";\r\n    const img = new Image();\r\n    img.src = './src/assets/images/white_rock.png';\r\n    const pattern = this.ctx.createPattern(img, 'repeat');\r\n    this.ctx.fillStyle = pattern;\r\n    for(let i = 0; i < this.level.unclimbableWalls.length; i++){\r\n      this.ctx.fillRect(this.level.unclimbableWalls[i].x - 17, this.level.unclimbableWalls[i].y, this.level.unclimbableWalls[i].width -7, this.level.unclimbableWalls[i].height);\r\n    }\r\n  }\r\n  \r\n  renderRope(){\r\n    const img = new Image();\r\n    img.src = './src/assets/images/rope.png'\r\n    // this.ctx.drawImage(img, 1240, 175, 20, 20);\r\n    // if(this.player.x === 1240 && (this.player.y < 180 && this.player.y > 170)){\r\n    //   this.player.hasRope = true;\r\n    // }\r\n    \r\n    this.ctx.drawImage(img, 50, 925, 20, 20);\r\n    \r\n  }\r\n\r\n  keydown(e) {\r\n    if(e.keyCode === 65) {\r\n        this.keys.left = true;\r\n        this.player.facing = 'left';\r\n    }\r\n    if(e.keyCode === 32) {\r\n        if(this.player.jump === false) {\r\n            this.player.y_v = -10;\r\n        }\r\n    }\r\n\r\n    if(e.keyCode === 32 && this.player.climbing && this.player.facing === 'right') {\r\n      if(this.player.wallJump === true) {\r\n          this.player.y += -40;\r\n          this.player.x += -50;\r\n          this.player.x_v = -3;\r\n          this.player.y_v = -5;\r\n          this.player.facing = 'left';\r\n          \r\n      }\r\n    } else if(e.keyCode === 32 && this.player.climbing && this.player.facing === 'left'){\r\n      if(this.player.wallJump === true) {\r\n        this.player.y -= 40;\r\n        this.player.x += 50;\r\n        this.player.x_v = 3;\r\n        this.player.y_v = -5;\r\n        this.player.facing = 'right';\r\n        \r\n      }\r\n    }\r\n\r\n    if(e.keyCode === 68) {\r\n        this.keys.right = true;\r\n        this.player.facing = 'right';\r\n    }\r\n    if(e.keyCode === 87 && this.player.climbing && this.player.canClimb) {\r\n      this.player.y += -15;\r\n      this.player.canClimb = false;\r\n    }\r\n    if (this.keys.up && !this.player.climbing){\r\n      // this.player.y_v = 0;\r\n      this.keys.up = false;\r\n    }\r\n    if(e.keyCode === 83 && this.player.climbing && this.player.canClimb) {\r\n      this.player.y += 15;\r\n      this.player.canClimb = false;\r\n    }\r\n    if (this.keys.down && !this.player.climbing){\r\n      // this.player.y_v = 0;\r\n      this.keys.down = false;\r\n    }\r\n  }\r\n// This function is called when the pressed key is released\r\n  keyup(e) {\r\n    if(e.keyCode === 65) {\r\n        this.keys.left = false;\r\n    }\r\n    if(e.keyCode === 32) {\r\n        if(this.player.y_v < -2) {\r\n        this.player.y_v = -3;\r\n        }\r\n    }\r\n    if(e.keyCode === 68) {\r\n        this.keys.right = false;\r\n    }\r\n    if(e.keyCode === 87) {\r\n      this.player.canClimb = true;\r\n    }\r\n    if(e.keyCode === 83) {\r\n      this.player.canClimb = true;\r\n    }\r\n  }\r\n  updatePlayerMenu(){\r\n    const playerMenu = document.getElementById('player-menu');\r\n    const playerLives = document.getElementById('player-lives');\r\n    let lives = document.createElement('span');\r\n    lives.setAttribute('id', 'player-lives')\r\n    lives.textContent = this.player.lives\r\n    playerMenu.replaceChild(lives, playerLives);\r\n  }\r\n  \r\n\r\n  loop() {\r\n    let gameRun = requestAnimationFrame(this.loop.bind(this));\r\n    if((this.levelOver() && this.currentLevel === 3) || this.gameOver === true){\r\n      cancelAnimationFrame(gameRun);\r\n      const canvas = document.getElementById(\"canvas\");\r\n      const controls = document.getElementById('controls');\r\n      const playButton = document.getElementById('play-button');\r\n      const playerMenu = document.getElementById('player-menu');\r\n      canvas.classList.add('hidden');\r\n      playButton.classList.remove('hidden');\r\n      controls.classList.add('hidden');\r\n      playerMenu.classList.add('hidden');\r\n      this.removeKeyListeners();\r\n    }\r\n    if(this.levelOver() && this.currentLevel === 3){\r\n      const moreLevels = document.getElementById('more-levels');\r\n      moreLevels.classList.remove('hidden');\r\n    }\r\n    if(this.gameOver){\r\n      const gameOver = document.getElementById('game-over');\r\n      gameOver.classList.remove('hidden');\r\n    }\r\n    if (this.levelOver() && this.currentLevel === 1){\r\n      this.player.x = 50;\r\n      this.player.y = 570;\r\n      this.level = new Level2();\r\n      this.currentLevel =2;\r\n    }\r\n    if (this.levelOver() && this.currentLevel === 2){\r\n      this.player.x = 50;\r\n      this.player.y = 150;\r\n      this.level = new Level3();\r\n      this.currentLevel = 3;\r\n    }\r\n    \r\n    // changes direction of player image based on which way they are facing\r\n    if (this.player.facing === 'right'){\r\n      this.playerImg.src = './src/assets/images/climber_right.png';\r\n    } else {\r\n      this.playerImg.src = './src/assets/images/climber_left.png';\r\n    }\r\n    // If the player is not jumping apply the effect of friction\r\n    if (this.player.jump === false) {\r\n        this.player.x_v *= this.player.friction;\r\n    } else if (this.player.climbing){\r\n        this.player.y_v = 0;\r\n    } else {\r\n        // If the player is in the air then apply the effect of gravity\r\n        this.player.y_v += this.player.gravity;\r\n    }\r\n    this.player.jump = true;\r\n    this.player.wallJump = true;\r\n    // If the left key is pressed increase the relevant horizontal velocity\r\n    if (this.keys.left) {\r\n        this.player.x_v = -2.5;\r\n    }\r\n    if (this.keys.right) {\r\n        this.player.x_v = 2.5;\r\n    }\r\n\r\n    // Updating the y and x coordinates of the player\r\n    this.player.y += this.player.y_v;\r\n    this.player.x += this.player.x_v;\r\n    // Checks for collions with the platform\r\n\r\n    let falling = true;\r\n    for (let i = 0; i < this.level.platforms.length; i++) {\r\n      if(this.level.platforms[i].x < this.player.x && this.player.x < this.level.platforms[i].x + this.level.platforms[i].width + this.player.width  &&\r\n        this.level.platforms[i].y < this.player.y && this.player.y < this.level.platforms[i].y + this.level.platforms[i].height+15){\r\n          falling = false;\r\n          let platIndex = i;\r\n        if (!falling){\r\n          this.player.jump = false;\r\n          this.player.y = this.level.platforms[platIndex].y; \r\n        }\r\n      }  \r\n    }\r\n \r\n    for (let i = 0; i < this.level.walls.length; i++){\r\n      //left side of wall\r\n      if( this.player.x >= this.level.walls[i].x && this.player.x + this.player.width < this.level.walls[i].x + this.level.walls[i].width\r\n        && (this.player.y > this.level.walls[i].y && this.player.y - 40 <= this.level.walls[i].y + this.level.walls[i].height)\r\n        ){\r\n        this.player.x = this.level.walls[i].x;\r\n      }\r\n      //right side of wall\r\n      if( this.player.x > this.level.walls[i].x && this.player.x <= this.level.walls[i].x + this.level.walls[i].width\r\n        && (this.player.y > this.level.walls[i].y && this.player.y - 40 <= this.level.walls[i].y + this.level.walls[i].height)\r\n      ) {\r\n        this.player.x = (this.level.walls[i].x + this.level.walls[i].width);\r\n      }\r\n      //climbing\r\n      if( (this.player.x === this.level.walls[i].x || this.player.x === this.level.walls[i].x + this.level.walls[i].width )\r\n        && (this.player.y >= this.level.walls[i].y && this.player.y - 200 <= this.level.walls[i].y + this.level.walls[i].height)){\r\n        this.player.climbing = true;\r\n        this.player.climbingWallIdx = i;\r\n        this.player.x_v = 0;\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < this.level.unclimbableWalls.length; i++){\r\n      //left side of wall\r\n      if( this.player.x >= this.level.unclimbableWalls[i].x && this.player.x + this.player.width < this.level.unclimbableWalls[i].x + this.level.unclimbableWalls[i].width\r\n        && (this.player.y > this.level.unclimbableWalls[i].y && this.player.y <= this.level.unclimbableWalls[i].y + this.level.unclimbableWalls[i].height)\r\n        ){\r\n        this.player.x = this.level.unclimbableWalls[i].x;\r\n      }\r\n      //right side of wall\r\n      if( this.player.x > this.level.unclimbableWalls[i].x && this.player.x <= this.level.unclimbableWalls[i].x + this.level.unclimbableWalls[i].width\r\n        && (this.player.y > this.level.unclimbableWalls[i].y && this.player.y <= this.level.unclimbableWalls[i].y + this.level.unclimbableWalls[i].height)\r\n      ) {\r\n        this.player.x = (this.level.unclimbableWalls[i].x + this.level.unclimbableWalls[i].width);\r\n      }\r\n    }\r\n    for (let i = 0; i < this.level.ceilings.length; i++){\r\n      //under ceiling\r\n      if( this.player.x > this.level.ceilings[i].x && this.player.x <= this.level.ceilings[i].x + this.level.ceilings[i].width\r\n        && (this.player.y - 40 > this.level.ceilings[i].y && this.player.y - 40 <= this.level.ceilings[i].y + this.level.ceilings[i].height)\r\n      ) {\r\n        this.player.y = (this.level.ceilings[i].y + this.level.ceilings[i].height) + 40;\r\n        this.player.y_v = 2.5\r\n      }\r\n    }\r\n\r\n\r\n    if(this.player.climbing){\r\n      if(\r\n      (this.player.x !== this.level.walls[this.player.climbingWallIdx].x \r\n      && this.player.x !== this.level.walls[this.player.climbingWallIdx].x + this.level.walls[this.player.climbingWallIdx].width)\r\n      || (this.player.y < this.level.walls[this.player.climbingWallIdx].y \r\n      || this.player.y - 30 > this.level.walls[this.player.climbingWallIdx].y + this.level.walls[this.player.climbingWallIdx].height))\r\n      {\r\n      this.player.climbing = false;\r\n      this.player.climbingWallIdx = null;\r\n      }\r\n    }\r\n    //falling in a pit\r\n    if(this.player.y > 1000){\r\n      if(this.currentLevel === 3){\r\n        this.player.x = 50;\r\n        this.player.y = 150;\r\n      } else{\r\n        this.player.x = 50;\r\n        this.player.y = 570;\r\n      }\r\n      \r\n      this.player.x_v = 0;\r\n      this.player.y_v = 0;\r\n      this.player.lives -= 1;\r\n      this.updatePlayerMenu();\r\n    }\r\n    //game over\r\n    if(this.player.lives === 0){\r\n      this.gameOverMet();\r\n    }\r\n\r\n    \r\n    //exiting the level\r\n      if(this.player.x > 800){\r\n        this.level.complete = true;\r\n      }\r\n\r\n      \r\n\r\n    this.renderCanvas();\r\n    this.renderPlayer();\r\n    this.renderPlatforms();\r\n    this.renderWalls();\r\n    this.renderUnclimbableWalls();\r\n    this.renderCeilings();\r\n\r\n    // if (!this.player.hasRope){\r\n    //   this.renderRope();\r\n    // }\r\n    // if(this.player.x === 50){\r\n    //   this.player.hasRope = true;\r\n    // }\r\n    \r\n  }\r\n  \r\n  \r\n  \r\n  \r\n\r\n}\r\n\r\nmodule.exports = Game;\r\n\n\n//# sourceURL=webpack://dyno/./src/game.js?");

/***/ }),

/***/ "./src/game_display.js":
/*!*****************************!*\
  !*** ./src/game_display.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\r\n\r\nclass GameDisplay {\r\n  constructor(ctx){\r\n    this.game = new Game(ctx);\r\n\r\n  }\r\n  \r\n\r\n  start() {\r\n    this.game.keyListeners();\r\n    this.game.updatePlayerMenu();\r\n    requestAnimationFrame(this.game.loop.bind(this.game));\r\n    \r\n  }\r\n\r\n  // restart(){\r\n  //   this.newGame();\r\n  //   this.game.keyListeners();\r\n  // }\r\n\r\n  // gameOver(){\r\n  //   if(this.game.levelOver()){\r\n  //   return true\r\n  //   } else {\r\n  //   return false\r\n  //   }\r\n  // }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nmodule.exports = GameDisplay;\r\n\n\n//# sourceURL=webpack://dyno/./src/game_display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// console.log(\"Webpack is working!\")\n\nconst GameDisplay = __webpack_require__(/*! ./game_display */ \"./src/game_display.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const playButton = document.getElementById('play-button');\n  const audio = document.getElementById('audio');\n  const audioControls = document.getElementsByClassName('audio-controls')[0];\n  const audioPlay = document.getElementById('audio-play');\n  const audioPause = document.getElementById('audio-pause');\n  const menu = document.getElementById('menu');\n  const logoContainer = document.getElementById('logo-container');\n  const controls = document.getElementById('controls');\n  const moreLevels = document.getElementById('more-levels');\n  const gameOver = document.getElementById('game-over');\n  const playerMenu = document.getElementById('player-menu')\n\n  playButton.addEventListener('click', () => {\n    canvas.width = 800;\n    canvas.height = 600;\n    const newGame = new GameDisplay(ctx);\n    newGame.start();\n    menu.classList.add('hidden');\n    logoContainer.classList.add('hidden');\n    canvas.classList.remove('hidden')\n    playButton.classList.add('hidden');\n    controls.classList.remove('hidden');\n    moreLevels.classList.add('hidden');\n    gameOver.classList.add('hidden');\n    playerMenu.classList.remove('hidden');\n  })\n  //for testing\n    // menu.classList.add('hidden');\n    // logoContainer.classList.add('hidden');\n    // playButton.classList.add('hidden');\n    // controls.classList.remove('hidden');\n    // moreLevels.classList.add('hidden');\n    // canvas.width = 800;\n    // canvas.height = 600;\n    // gameOver.classList.add('hidden');\n    // playerMenu.classList.remove('hidden');\n    // const newGame = new GameDisplay(ctx);\n    // newGame.start();\n  //for testing\n\n  audioControls.addEventListener('click', () => {\n    if (!audio.paused) {\n      audio.pause();\n      audioPlay.classList.remove('hidden');\n      audioPause.classList.add('hidden');\n    } else {\n      audio.volume = 0.3;\n      audio.play();\n      audioPause.classList.remove('hidden');\n      audioPlay.classList.add('hidden');\n      }\n  })\n  \n})\n\n//# sourceURL=webpack://dyno/./src/index.js?");

/***/ }),

/***/ "./src/level_1.js":
/*!************************!*\
  !*** ./src/level_1.js ***!
  \************************/
/***/ ((module) => {

eval("class Level{\n  constructor(){\n    this.complete = false;\n    this.platforms = [];\n    this.walls = [];\n    this.unclimbableWalls = [];\n    this.ceilings = [];\n    this.createPlatforms();\n    this.createWalls();\n    this.createUnclimbableWalls();\n    this.createCeilings();\n  }\n  \n  createPlatforms(){\n     //start platform\n     this.platforms.push(\n      {\n      x: -5,\n      y: 550,\n      width: 326,\n      height: 60\n      }\n    )\n    //exit platform\n    this.platforms.push(\n      {\n        x: 625,\n        y: 550,\n        width: 1200,\n        height: 50\n      }\n    )\n    //mid platform\n    this.platforms.push(\n      {\n      x: 383,\n      y: 379,\n      width: 193,\n      height: 21\n      }\n    )   \n      //entrance overhang platform\n    this.platforms.push(\n      {\n      x: 60,\n      y: 105,\n      width: 345,\n      height: 20\n      }\n    )\n    \n    \n    \n  }\n\n  createWalls(){\n    //entrance wall\n    this.walls.push(\n      {\n      x: 10,\n      y: 50,\n      width: 25,\n      height: 400\n      }\n    )\n    //entrance overhang\n    this.walls.push(\n      {\n      x: 75,\n      y: 125,\n      width: 350,\n      height: 200\n      }\n    )\n    \n    //center wall\n    this.walls.push(\n      {\n      x: 400,\n      y: 400,\n      width: 200,\n      height: 200\n      }\n    )\n    //right wall overhang\n    this.walls.push(\n      {\n      x: 650,\n      y: 50,\n      width: 150,\n      height: 400\n      }\n    )\n    \n    \n  }\n\n\n  createUnclimbableWalls(){\n    //left wall or entrance wall\n    \n    this.unclimbableWalls.push(\n      {\n      x: -5,\n      y: 50,\n      width: 25,\n      height: 600\n      }\n    )\n     \n  }\n  createCeilings(){\n    // main ceiling\n    this.ceilings.push(\n      {\n        x: 0,\n        y: 0,\n        width: 1500,\n        height: 50\n      }\n    )\n    this.ceilings.push(\n      {\n      x: 650,\n      y: 450,\n      width: 150,\n      height: 10\n      }\n    )\n    this.ceilings.push(\n      {\n      x: 75,\n      y: 325,\n      width: 350,\n      height: 10\n      }\n    )\n  }\n\n}\n\n\n\n\nmodule.exports = Level;\n\n//# sourceURL=webpack://dyno/./src/level_1.js?");

/***/ }),

/***/ "./src/level_2.js":
/*!************************!*\
  !*** ./src/level_2.js ***!
  \************************/
/***/ ((module) => {

eval("class Level2{\n  constructor(){\n    this.complete = false;\n    this.platforms = [];\n    this.walls = [];\n    this.unclimbableWalls = [];\n    this.ceilings = [];\n    this.createPlatforms();\n    this.createWalls();\n    this.createUnclimbableWalls();\n    this.createCeilings();\n  }\n  \n  createPlatforms(){\n     //start platform\n     this.platforms.push(\n      {\n      x: -5,\n      y: 550,\n      width: 326,\n      height: 60\n      }\n    )\n    //exit platform\n    this.platforms.push(\n      {\n        x: 625,\n        y: 150,\n        width: 1200,\n        height: 21\n      }\n    )\n    //mid platform 1\n    this.platforms.push(\n      {\n      x: 150,\n      y: 200,\n      width: 125,\n      height: 21\n      }\n    ) \n    //mid platform 2\n    this.platforms.push(\n      {\n      x: 272,\n      y: 125,\n      width: 125,\n      height: 21\n      }\n    ) \n    //mid platform 3\n    this.platforms.push(\n      {\n      x: 400,\n      y: 200,\n      width: 125,\n      height: 21\n      }\n    )\n    \n    \n    \n  }\n\n  createWalls(){\n    //entrance wall\n    this.walls.push(\n      {\n      x: 10,\n      y: 50,\n      width: 75,\n      height: 400\n      }\n    )\n    //exit wall\n    this.walls.push(\n      {\n      x: 642,\n      y: 171,\n      width: 200,\n      height: 450\n      }\n    )\n    \n    \n    \n  }\n\n\n  createUnclimbableWalls(){\n    //left wall or entrance wall\n    \n    this.unclimbableWalls.push(\n      {\n      x: -5,\n      y: 50,\n      width: 25,\n      height: 600\n      }\n    )\n     \n  }\n  createCeilings(){\n    // main ceiling\n    this.ceilings.push(\n      {\n        x: 0,\n        y: 0,\n        width: 1500,\n        height: 50\n      }\n    )\n    //entrance ceiling\n    this.ceilings.push(\n      {\n      x: 10,\n      y: 450,\n      width: 75,\n      height: 10\n      }\n    )\n  }\n\n}\n\n\n\n\nmodule.exports = Level2;\n\n//# sourceURL=webpack://dyno/./src/level_2.js?");

/***/ }),

/***/ "./src/level_3.js":
/*!************************!*\
  !*** ./src/level_3.js ***!
  \************************/
/***/ ((module) => {

eval("class Level3{\n  constructor(){\n    this.complete = false;\n    this.platforms = [];\n    this.walls = [];\n    this.unclimbableWalls = [];\n    this.ceilings = [];\n    this.createObjects();\n  }\n  \n  createObjects(){\n     //start platform\n    this.platforms.push(\n      {\n        x: -5,\n        y: 150,\n        width: 100,\n        height: 21\n      }\n    )\n      //start bottom plat\n    this.platforms.push(\n      {\n      x: 97,\n      y: 550,\n      width: 200,\n      height: 60\n      }\n    )\n      //entrance wall\n    this.walls.push(\n      {\n      x: -5,\n      y: 171,\n      width: 125,\n      height: 450\n      }\n    )\n    //pogo wall 1\n    this.walls.push(\n      {\n      x: 175,\n      y: 300,\n      width: 25,\n      height: 250\n      }\n    )\n    this.platforms.push(\n      {\n        x: 158,\n        y: 280,\n        width: 17,\n        height: 21\n      }\n    )\n\n    //pogo wall 2\n    this.walls.push(\n      {\n      x: 300,\n      y: 200,\n      width: 25,\n      height: 200\n      }\n    )\n    this.platforms.push(\n      {\n        x: 283,\n        y: 180,\n        width: 17,\n        height: 21\n      }\n    )\n    //pogo wall 3\n    this.walls.push(\n      {\n      x: 400,\n      y: 300,\n      width: 25,\n      height: 300\n      }\n    )\n    this.platforms.push(\n      {\n        x: 383,\n        y: 280,\n        width: 17,\n        height: 21\n      }\n    )\n    //exit platform\n\n    //mid platform\n \n    //left wall or entrance wall\n    this.unclimbableWalls.push(\n      {\n      x: -5,\n      y: 50,\n      width: 25,\n      height: 600\n      }\n    )\n    // main ceiling\n    this.ceilings.push(\n      {\n        x: 0,\n        y: 0,\n        width: 1500,\n        height: 50\n      }\n    )\n      //floating plat 1\n    this.platforms.push(\n      {\n      x: 475,\n      y: 400,\n      width: 125,\n      height: 21\n      }\n    )\n      //floating plat 2\n    this.platforms.push(\n      {\n      x: 475,\n      y: 250,\n      width: 125,\n      height: 21\n      }\n    )\n    //exit plat\n    this.platforms.push(\n      {\n      x: 650,\n      y: 550,\n      width: 200,\n      height: 60\n      }\n    )\n    \n   \n  }\n    \n\n\n}\n\n\n\n\nmodule.exports = Level3;\n\n//# sourceURL=webpack://dyno/./src/level_3.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("class Player{\r\n  constructor(){\r\n    this.x = 50;\r\n    this.y = 570;\r\n    //testing\r\n    //this.x = 50;\r\n    //this.y = 150;\r\n    //testing\r\n    this.x_v = 0;\r\n    this.y_v = 0;\r\n    this.jump = true;\r\n    this.height = 20;\r\n    this.width = 20;\r\n    this.gravity = 0.6;\r\n    this.friction = 0.7;\r\n    this.climbing = false;\r\n    this.climbingWallIdx = null;\r\n    this.canClimb = true;\r\n    this.wallJump = true;\r\n    this.facing = 'right';\r\n    this.lives = 3;\r\n    // this.hasRope = false;\r\n  }\r\n\r\n};\r\n\r\n\r\nmodule.exports = Player;\n\n//# sourceURL=webpack://dyno/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;