# Dyno

## Summary
Rock climbing themed platforming game where you can climb the mountain face and use rope to dynamically 
jump from rock face to rock face all the while collecting mementos from climbers that had been there before.  

It is a 1-player game where the user controls 'Dynoman', a rock climber.  There is an entrance to each level and an exit.
The goal is to reach the exit

## Functionality and MVP's
 1. Generate a mountain-like environment for platforming and style it
 2. Player to be able to move in the environment, jump and climb it
 3. Player can use a rope to dynamically move around
 4. Player can collect 'memento' objects scattered around environment and they are added to their inventory
 5. Player can go into new environments or levels after reaching exit of current level
 6. Have an About screen that describes backstory and game instructions
 7. Have a production README

## Wireframe
 The app will have a modal as a start screen which will include a game description, story background as well as game controls
 and level objectives.  There will be a mute sound option, social nav links bar and a start button which will kick off the game.
 On the game screen there will be a reminder for the game controls as well as the player's current inventory of mementos collected.
 ![dyno](https://user-images.githubusercontent.com/71670060/116157306-95512280-a6a1-11eb-86f5-205a7c3a9611.png)

## Technologies
 * game logic will be in JavaScript
 * game objects and images rendered in HTML 5 canvas
 * game audio will utilize HTML audio
 * game to be bundled with webpack
 Major files will include the entry file, game.js, player.js, rope.js

## Timeline
 * Day 1: Setup all necessary dependencies.  Write skeleton of entry file and all needed files.  
  Start getting base environment rendered and begin player movement.
 * Day 2: Finish basic movement and work on rope physics.  Finish player.js and work on rope.js.
 * Day 3: Finish rope physics and add 'memento' items
 * Day 4: Add level variation and finish styling


