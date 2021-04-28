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

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\r\nconst Level = __webpack_require__(/*! ./level */ \"./src/level.js\");\r\n\r\nclass Game{\r\n  constructor(ctx){\r\n    this.player = new Player();\r\n    this.level = new Level();\r\n    this.ctx = ctx;\r\n    this.playerImg = new Image();\r\n    this.playerImg.src = '../src/assets/images/climber_right.png';\r\n    this.keys = {\r\n      right: false,\r\n      left: false,\r\n      up: false,\r\n      down: false\r\n    };\r\n    this.keydown = this.keydown.bind(this);\r\n    this.keyup = this.keyup.bind(this);\r\n  }\r\n\r\n  keyListeners() {\r\n    document.addEventListener(\"keydown\", this.keydown);\r\n    document.addEventListener(\"keyup\", this.keyup);\r\n  }\r\n  \r\n  renderCanvas(){\r\n    const img = new Image();\r\n    img.src = '../src/assets/images/cave.jpg'\r\n    this.ctx.drawImage(img, 0, 0, 1500, 1000);\r\n  }\r\n  \r\n  renderPlayer(){\r\n    this.ctx.drawImage(this.playerImg, (this.player.x)-40, (this.player.y)-40, 40, 40);\r\n  }\r\n\r\n  renderPlatforms(){\r\n    // this.ctx.fillStyle = \"#45597E\";\r\n    const img = new Image();\r\n    img.src = '../src/assets/images/rock_texture2.png';\r\n    const pattern = this.ctx.createPattern(img, 'repeat');\r\n    this.ctx.fillStyle = pattern;\r\n    for(let i = 0; i < this.level.platforms.length; i++){\r\n      // this.ctx.fillRect(this.level.platforms[i].x, this.level.platforms[i].y, this.level.platforms[i].width, this.level.platforms[i].height);\r\n      this.ctx.fillRect(this.level.platforms[i].x, this.level.platforms[i].y, this.level.platforms[i].width, this.level.platforms[i].height);\r\n    \r\n    }\r\n  }\r\n  renderWalls(){\r\n    // this.ctx.fillStyle = \"#45597E\";\r\n    const img = new Image();\r\n    img.src = '../src/assets/images/rock_texture.png';\r\n    const pattern = this.ctx.createPattern(img, 'repeat');\r\n    this.ctx.fillStyle = pattern;\r\n    for(let i = 0; i < this.level.walls.length; i++){\r\n      this.ctx.fillRect(this.level.walls[i].x - 17, this.level.walls[i].y, this.level.walls[i].width, this.level.walls[i].height);\r\n    \r\n    }\r\n  }\r\n  \r\n\r\n  keydown(e) {\r\n    if(e.keyCode === 65) {\r\n        this.keys.left = true;\r\n        this.playerImg.src = '../src/assets/images/climber_left.png'\r\n    }\r\n    if(e.keyCode === 32) {\r\n        if(this.player.jump === false) {\r\n            this.player.y_v = -10;\r\n        }\r\n    }\r\n    if(e.keyCode === 68) {\r\n        this.keys.right = true;\r\n        this.playerImg.src = '../src/assets/images/climber_right.png'\r\n    }\r\n    if(e.keyCode === 87 && this.player.climbing && this.player.canClimb) {\r\n      this.player.y += -15;\r\n      this.player.canClimb = false;\r\n    }\r\n    if (this.keys.up && !this.player.climbing){\r\n      // this.player.y_v = 0;\r\n      this.keys.up = false;\r\n    }\r\n    if(e.keyCode === 83 && this.player.climbing && this.player.canClimb) {\r\n      this.player.y += 15;\r\n      this.player.canClimb = false;\r\n    }\r\n    if (this.keys.down && !this.player.climbing){\r\n      // this.player.y_v = 0;\r\n      this.keys.down = false;\r\n    }\r\n}\r\n// This function is called when the pressed key is released\r\n  keyup(e) {\r\n    if(e.keyCode === 65) {\r\n        this.keys.left = false;\r\n    }\r\n    if(e.keyCode === 32) {\r\n        if(this.player.y_v < -2) {\r\n        this.player.y_v = -3;\r\n        }\r\n    }\r\n    if(e.keyCode === 68) {\r\n        this.keys.right = false;\r\n    }\r\n    if(e.keyCode === 87) {\r\n      this.player.canClimb = true;\r\n    }\r\n    if(e.keyCode === 83) {\r\n      this.player.canClimb = true;\r\n    }\r\n}\r\n\r\n  loop() {\r\n    console.log(this.player.canClimb)\r\n    // If the player is not jumping apply the effect of friction\r\n    if (this.player.jump === false) {\r\n        this.player.x_v *= this.player.friction;\r\n    } else if (this.player.climbing){\r\n        this.player.y_v = 0;\r\n    } else {\r\n        // If the player is in the air then apply the effect of gravity\r\n        this.player.y_v += this.player.gravity;\r\n    }\r\n    this.player.jump = true;\r\n    // If the left key is pressed increase the relevant horizontal velocity\r\n    if (this.keys.left) {\r\n        this.player.x_v = -2.5;\r\n    }\r\n    if (this.keys.right) {\r\n        this.player.x_v = 2.5;\r\n    }\r\n    // if (this.keys.up) {\r\n    //   this.player.y_v = -1.5;\r\n    // }\r\n    // if (this.keys.down) {\r\n    //   this.player.y_v = 1.5;\r\n    // }\r\n    // Updating the y and x coordinates of the player\r\n    this.player.y += this.player.y_v;\r\n    this.player.x += this.player.x_v;\r\n    // Checks for collions with the platform\r\n\r\n    let falling = true;\r\n    for (let i = 0; i < this.level.platforms.length; i++) {\r\n      if(this.level.platforms[i].x < this.player.x && this.player.x < this.level.platforms[i].x + this.level.platforms[i].width + this.player.width  &&\r\n        this.level.platforms[i].y < this.player.y && this.player.y < this.level.platforms[i].y + this.level.platforms[i].height){\r\n          falling = false;\r\n          let platIndex = i;\r\n        if (!falling){\r\n          this.player.jump = false;\r\n          this.player.y = this.level.platforms[platIndex].y; \r\n        }\r\n      }  \r\n    }\r\n \r\n    for (let i = 0; i < this.level.walls.length; i++){\r\n      //left side of wall\r\n      if( this.player.x >= this.level.walls[i].x && this.player.x + this.player.width < this.level.walls[i].x + this.level.walls[i].width\r\n        && (this.player.y > this.level.walls[i].y && this.player.y <= this.level.walls[i].y + this.level.walls[i].height)\r\n        ){\r\n        this.player.x = this.level.walls[i].x;\r\n      }\r\n      //right side of wall\r\n      if( this.player.x > this.level.walls[i].x && this.player.x <= this.level.walls[i].x + this.level.walls[i].width\r\n        && (this.player.y > this.level.walls[i].y && this.player.y <= this.level.walls[i].y + this.level.walls[i].height)\r\n      ) {\r\n        this.player.x = (this.level.walls[i].x + this.level.walls[i].width);\r\n      }\r\n    }\r\n    for (let i = 0; i < this.level.walls.length; i++){\r\n        //climbing eligibility\r\n      if( (this.player.x === this.level.walls[i].x || this.player.x === this.level.walls[i].x + this.level.walls[i].width )\r\n        && (this.player.y >= this.level.walls[i].y || this.player.y <= this.level.walls[i].y + this.level.walls[i].height)){\r\n        this.player.climbing = true;\r\n      } else {\r\n        this.player.climbing = false;\r\n      }\r\n      if(this.player.y < this.level.walls[i].y || this.player.y > this.level.walls[i].y + this.level.walls[i].height){\r\n        this.player.climbing = false;\r\n      }\r\n\r\n    }\r\n    \r\n    \r\n    \r\n\r\n    \r\n    \r\n\r\n    this.renderCanvas();\r\n    this.renderPlayer();\r\n    this.renderPlatforms();\r\n    this.renderWalls();\r\n  }\r\n  \r\n  \r\n\r\n}\r\n\r\nmodule.exports = Game;\r\n\n\n//# sourceURL=webpack://dyno/./src/game.js?");

/***/ }),

/***/ "./src/game_display.js":
/*!*****************************!*\
  !*** ./src/game_display.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\r\n\r\n\r\nclass GameDisplay {\r\n  constructor(ctx){\r\n    this.game = new Game(ctx);\r\n  }\r\n  \r\n\r\n\r\n  start() {\r\n    this.game.keyListeners(); \r\n    setInterval(() => {\r\n      this.game.loop();\r\n    }, 22)\r\n  };\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = GameDisplay;\r\n\n\n//# sourceURL=webpack://dyno/./src/game_display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!\")\n\nconst GameDisplay = __webpack_require__(/*! ./game_display */ \"./src/game_display.js\");\nconst Level = __webpack_require__(/*! ./level */ \"./src/level.js\")\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\")\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function (){\n  const canvas = document.getElementById(\"canvas\");\n  canvas.width = 1500;\n  canvas.height = 1000;\n  const ctx = canvas.getContext(\"2d\");\n\n  const newGame = new GameDisplay(ctx);\n  newGame.start();\n  \n  \n})\n\n//# sourceURL=webpack://dyno/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((module) => {

eval("class Level{\r\n  constructor(){\r\n    // this.BG_COLOR = \"#000000\";\r\n    // this.DIM_X = 270;\r\n    // this.DIM_Y = 270;\r\n    this.platforms = [];\r\n    this.walls = [];\r\n    this.createPlatforms();\r\n    this.createWalls();\r\n  }\r\n  \r\n  createPlatforms(){\r\n    // this.platforms.push(\r\n    //   {\r\n    //   x: 0,\r\n    //   y: 900,\r\n    //   width: 110,\r\n    //   height: 20\r\n    //   }\r\n    // )\r\n    // this.platforms.push(\r\n    //   {\r\n    //   x: 50,\r\n    //   y: 850,\r\n    //   width: 110,\r\n    //   height: 20\r\n    //   }\r\n    // )\r\n    // this.platforms.push(\r\n    //   {\r\n    //   x: 200,\r\n    //   y: 750,\r\n    //   width: 110,\r\n    //   height: 20\r\n    //   }\r\n    // )\r\n    this.platforms.push(\r\n      {\r\n      x: 385,\r\n      y: 200,\r\n      width: 100,\r\n      height: 20\r\n      }\r\n    )  \r\n    //floor\r\n    this.platforms.push(\r\n      {\r\n        x: 0,\r\n        y: 950,\r\n        width: 1500,\r\n        height: 50\r\n      }\r\n    )\r\n    //ceiling\r\n    this.platforms.push(\r\n      {\r\n        x: 0,\r\n        y: 0,\r\n        width: 1500,\r\n        height: 50\r\n      }\r\n    )\r\n  }\r\n\r\n  createWalls(){\r\n    // this.walls.push(\r\n    //   {\r\n    //   x: 1400,\r\n    //   y: 221,\r\n    //   width: 100,\r\n    //   height: 729\r\n    //   }\r\n    // )\r\n    this.walls.push(\r\n      {\r\n      x: 50,\r\n      y: 600,\r\n      width: 25,\r\n      height: 400\r\n      }\r\n    )\r\n    this.walls.push(\r\n      {\r\n      x: 200,\r\n      y: 600,\r\n      width: 25,\r\n      height: 400\r\n      }\r\n    )\r\n    this.walls.push(\r\n      {\r\n      x: 400,\r\n      y: 600,\r\n      width: 25,\r\n      height: 400\r\n      }\r\n    ) \r\n  }\r\n\r\n}\r\n\r\n\r\nmodule.exports = Level;\n\n//# sourceURL=webpack://dyno/./src/level.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("// The attributes of the player.\r\nclass Player{\r\n  constructor(){\r\n    this.x = 300;\r\n    this.y = 900;\r\n    this.x_v = 0;\r\n    this.y_v = 0;\r\n    this.jump = true;\r\n    this.height = 20;\r\n    this.width = 20;\r\n    this.gravity = 0.6;\r\n    this.friction = 0.7;\r\n    this.climbing = false;\r\n    this.canClimb = true;\r\n  }\r\n\r\n};\r\n\r\n\r\nmodule.exports = Player;\n\n//# sourceURL=webpack://dyno/./src/player.js?");

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