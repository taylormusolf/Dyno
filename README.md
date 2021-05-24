# <div align='center'> <img width="589" alt="dyno logo" src="https://user-images.githubusercontent.com/71670060/119405986-fb2bcc80-bc96-11eb-8d12-61cc225b8e60.PNG"> </div>

Dyno is a rock climbing themed platforming game where you can climb cave walls and dynamically jump from rock face to rock to reach the cave exit to find your friends.

It is a single player game where the user controls a rock climber.  There is an entrance to each level and an exit.
The goal is to reach the exit and find items.

Try the game for yourself [here!](https://dyno.taylormusolf.com)

## Technologies
 * `JavaScript` - programming language used for the game logic
 * `HTML 5 Canvas` - game objects and images rendered in 
 * `HTML Audio` - utilized for game audio
 * `Webpack` - used to bundled the game files

## Features
 * Platforming in a cave-like environment
 * Player can walk, jump, climb, and do wall jumps with simulated physics
 * Player starts with 3 lives and will get a Game Over screen if lose all lives from falling in pits
 * Level ends when player reaches exit

## Start Screen
 The game has a start screen which includes story background and general level objective.  
 Music will be muted as default, but user can mute or unmute at anytime as button will persist to the play screen. 
 Social nav links will persist as well. A play button which will kick off the game.
 
 <img width="809" alt="start screen capture" src="https://user-images.githubusercontent.com/71670060/116838771-7280ab80-ab84-11eb-8dc6-8bc55509e9fc.PNG">

## Play Screen
 On the play screen there is instructions for the game controls as well as a reminder of the controls. 
 The player's current lives are shown at the top of the screen.
 
 <img width="809" alt="dyno_game" src="https://user-images.githubusercontent.com/71670060/119413771-303e1c00-bca3-11eb-9dda-bae2e8637f64.PNG">
 
## Coding Challenges
 For the platforming and climbing to work correctly, several different environment types were created: platforms(areas the player can stand on), walls(areas the player can climb), unclimbable walls(areas not climbable and meant to block the player) and lastly ceilings(areas the player should not be able to jump up into).  Each object for the level was kept in an array to be rendered using a for-loop and as the example below shows all of the logic for each wall is passed using a for-loop. The logic for player to stop climbing was also originally a part of the for-loop, but it created an issue with not being able to check if the player stopped climbing a particular wall since it was written to check all walls in the loop.  The conditional for leaving the wall was refactored out of the loop and a property was added to the player to track the location of the wall they are climbing, so that the conditional can easily check if the player is no longer adjacent the wall so they should no longer be climbing.
 
```javascript
//game.js

for (let i = 0; i < this.level.walls.length; i++){
      //left side of wall
      if( this.player.x >= this.level.walls[i].x && this.player.x + this.player.width < this.level.walls[i].x + this.level.walls[i].width
        && (this.player.y > this.level.walls[i].y && this.player.y - 40 <= this.level.walls[i].y + this.level.walls[i].height)
        ){
        this.player.x = this.level.walls[i].x;
      }
      //right side of wall
      if( this.player.x > this.level.walls[i].x && this.player.x <= this.level.walls[i].x + this.level.walls[i].width
        && (this.player.y > this.level.walls[i].y && this.player.y - 40 <= this.level.walls[i].y + this.level.walls[i].height)
      ) {
        this.player.x = (this.level.walls[i].x + this.level.walls[i].width);
      }
      //climbing
      if( (this.player.x === this.level.walls[i].x || this.player.x === this.level.walls[i].x + this.level.walls[i].width )
        && (this.player.y >= this.level.walls[i].y && this.player.y - 200 <= this.level.walls[i].y + this.level.walls[i].height)){
        this.player.climbing = true;
        this.player.climbingWallIdx = i;
        this.player.x_v = 0;
      }
    }
 if(this.player.climbing){
   if(
    (this.player.x !== this.level.walls[this.player.climbingWallIdx].x 
    && this.player.x !== this.level.walls[this.player.climbingWallIdx].x + this.level.walls[this.player.climbingWallIdx].width)
    || (this.player.y < this.level.walls[this.player.climbingWallIdx].y 
    || this.player.y - 30 > this.level.walls[this.player.climbingWallIdx].y + this.level.walls[this.player.climbingWallIdx].height))
    {
     this.player.climbing = false;
     this.player.climbingWallIdx = null;
    }
}   
  
```
 
## Future Implementations
 * Additional levels
 * Sprite Animations
 * Stamina bar for climbing
 * Memento items and inventory
 * Rope climbing feature

## Credits
 * Music credit goes to Kai Engel for "Moonlight Reprise" found on Free Music Archive
 * Image assets came from Canva

