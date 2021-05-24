# <div align='center'> <img width="589" alt="dyno logo" src="https://user-images.githubusercontent.com/71670060/119405986-fb2bcc80-bc96-11eb-8d12-61cc225b8e60.PNG"> </div>

## Summary
A rock climbing themed platforming game where you can climb cave walls and dynamically jump from rock face to rock to reach the cave exit to find your friends.

It is a single player game where the user controls a rock climber.  There is an entrance to each level and an exit.
The goal is to reach the exit and find items.

## Functionality and MVP's

 1. Generate a cave-like environment for platforming and style it
 2. Player to be able to move in the environment, jump and climb it
 3. Have an About screen that describes backstory and game instructions
 4. Have a production README
 ### Bonus / Future add-ons
 1. Player can collect 'memento' objects scattered around environment and they are added to their inventory
 2. Player can go into new environments or levels after reaching exit of current level
 3. Sprite update for player animations
 4. Player can use a rope to dynamically move around

## Start Screen
 The game has a start screen which includes story background and general level objective.  
 Music will be muted as default, but user can mute or unmute at anytime as button will persist to the play screen. 
 Social nav links will persist as well. A play button which will kick off the game.
 
 <img width="1450" alt="start screen capture" src="https://user-images.githubusercontent.com/71670060/116838771-7280ab80-ab84-11eb-8dc6-8bc55509e9fc.PNG">

## Play Screen
 On the play screen there is instructions for the game controls as well as a reminder of the level objective. 
 The player's current inventory of items collected will be added to the top of the screen when the feature is added.
 
 <img width="1322" alt="play screen capture" src="https://user-images.githubusercontent.com/71670060/116838785-7f050400-ab84-11eb-9796-c2b22b600d68.PNG">

 
## Technologies
 * game logic will be in JavaScript
 * game objects and images rendered in HTML 5 canvas
 * game audio will utilize HTML audio
 * game to be bundled with webpack
 Major files will include the entry file, game.js, player.js, index.js
 
## Future Additions
 * Additional levels
 * Sprite Animations
 * Stamina bar for climbing
 * Memento items and inventory
 * Rope climbing feature

## Credits
 * Music credit goes to Kai Engel for "Moonlight Reprise" found on Free Music Archive
 * Image assets came from Canva

